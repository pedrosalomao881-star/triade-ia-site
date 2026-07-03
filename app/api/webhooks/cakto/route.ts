import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

// Tipos de evento do Cakto
type CaktoEvent =
  | 'payment.confirmed'
  | 'payment.failed'
  | 'payment.refunded'
  | 'subscription.created'
  | 'subscription.cancelled'

interface CaktoPayload {
  event: CaktoEvent
  transaction_id: string
  customer_email: string
  amount: number
  currency: string
  product_id?: string
  status: 'success' | 'failed' | 'pending'
  created_at: string
  metadata?: Record<string, any>
}

// Mapear plano baseado no product_id ou valor
function getPlanType(amount: number, productId?: string): 'mensal' | 'semestral' | 'anual' {
  // Baseado nos valores definidos
  if (amount === 97 || productId === 'creditOS-mensal') return 'mensal'
  if (amount === 147 || productId === 'creditOS-semestral') return 'semestral'
  if (amount === 277 || productId === 'creditOS-anual') return 'anual'

  // Fallback: calcular baseado no valor
  if (amount < 120) return 'mensal'
  if (amount < 200) return 'semestral'
  return 'anual'
}

// Calcular data de expiração baseado no plano
function getExpiryDate(planType: 'mensal' | 'semestral' | 'anual'): Date {
  const now = new Date()

  switch (planType) {
    case 'mensal':
      now.setMonth(now.getMonth() + 1)
      break
    case 'semestral':
      now.setMonth(now.getMonth() + 6)
      break
    case 'anual':
      now.setFullYear(now.getFullYear() + 1)
      break
  }

  return now
}

export async function POST(request: NextRequest) {
  try {
    // Validar método
    if (request.method !== 'POST') {
      return NextResponse.json(
        { error: 'Método não permitido' },
        { status: 405 }
      )
    }

    // Obter payload
    const payload: CaktoPayload = await request.json()

    // Log do webhook recebido (para debugging)
    console.log('[Cakto Webhook]', {
      event: payload.event,
      transaction_id: payload.transaction_id,
      email: payload.customer_email,
      status: payload.status,
      timestamp: new Date().toISOString(),
    })

    // Validar que é um evento de pagamento confirmado
    if (payload.event !== 'payment.confirmed' || payload.status !== 'success') {
      return NextResponse.json(
        { ok: true, message: 'Evento ignorado' },
        { status: 200 }
      )
    }

    // Inicializar cliente Supabase com service role
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // 1. Buscar usuário pelo email
    const { data: { users }, error: searchError } = await supabase.auth.admin.listUsers()

    if (searchError) {
      console.error('[Cakto] Erro ao buscar usuários:', searchError)
      return NextResponse.json(
        { ok: false, error: 'Erro ao processar usuário' },
        { status: 500 }
      )
    }

    const user = users?.find(u => u.email === payload.customer_email)

    if (!user) {
      console.warn('[Cakto] Usuário não encontrado:', payload.customer_email)

      // TODO: Criar usuário automaticamente ou enviar email de validação
      // Por enquanto, apenas registrar o pagamento como pendente

      return NextResponse.json(
        { ok: true, message: 'Usuário não encontrado - aguardando validação' },
        { status: 200 }
      )
    }

    // 2. Determinar plano baseado no valor
    const planType = getPlanType(payload.amount, payload.metadata?.product_id)
    const expiresAt = getExpiryDate(planType)

    // 3. Criar ou atualizar subscription no Supabase
    const { data: existingSub, error: fetchError } = await supabase
      .from('creditOS_subscriptions')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (existingSub) {
      // Atualizar subscription existente
      const { error: updateError } = await supabase
        .from('creditOS_subscriptions')
        .update({
          plan_type: planType,
          cakto_transaction_id: payload.transaction_id,
          amount: payload.amount,
          active: true,
          expires_at: expiresAt.toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user.id)

      if (updateError) {
        console.error('[Cakto] Erro ao atualizar subscription:', updateError)
        return NextResponse.json(
          { ok: false, error: 'Erro ao atualizar subscription' },
          { status: 500 }
        )
      }

      console.log('[Cakto] Subscription atualizada:', {
        user_id: user.id,
        plan_type: planType,
        expires_at: expiresAt.toISOString(),
      })
    } else {
      // Criar nova subscription
      const { error: insertError } = await supabase
        .from('creditOS_subscriptions')
        .insert({
          user_id: user.id,
          plan_type: planType,
          cakto_transaction_id: payload.transaction_id,
          amount: payload.amount,
          active: true,
          expires_at: expiresAt.toISOString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })

      if (insertError) {
        console.error('[Cakto] Erro ao criar subscription:', insertError)
        return NextResponse.json(
          { ok: false, error: 'Erro ao criar subscription' },
          { status: 500 }
        )
      }

      console.log('[Cakto] Subscription criada:', {
        user_id: user.id,
        plan_type: planType,
        expires_at: expiresAt.toISOString(),
      })
    }

    // 4. TODO: Enviar email de confirmação ao usuário
    // const { error: emailError } = await supabase.functions.invoke('send-email', {
    //   body: {
    //     to: user.email,
    //     template: 'payment-confirmed',
    //     data: {
    //       plan: planType,
    //       expires_at: expiresAt,
    //     },
    //   },
    // })

    // Retornar sucesso
    return NextResponse.json(
      {
        ok: true,
        message: 'Pagamento registrado com sucesso',
        user_id: user.id,
        plan_type: planType,
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('[Cakto] Erro ao processar webhook:', error)

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Erro ao processar webhook'
      },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json(
    { status: 'ok', message: 'Webhook Cakto pronto' },
    { status: 200 }
  )
}
