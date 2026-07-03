import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json()

    // Log webhook para debug (remove em produção)
    console.log('[Cakto Webhook]', {
      timestamp: new Date().toISOString(),
      event: payload.event,
      transactionId: payload.id,
      status: payload.status,
    })

    // Validar assinatura (se Cakto envia header de segurança)
    const signature = request.headers.get('x-cakto-signature')
    const webhookSecret = process.env.CAKTO_WEBHOOK_SECRET

    if (webhookSecret && signature) {
      const crypto = await import('crypto')
      const hash = crypto
        .createHmac('sha256', webhookSecret)
        .update(JSON.stringify(payload))
        .digest('hex')

      if (hash !== signature) {
        return NextResponse.json({ error: 'Assinatura inválida' }, { status: 401 })
      }
    }

    // Processar eventos de pagamento
    const { event, status, id, email, reference, amount } = payload

    switch (event) {
      case 'payment.approved':
      case 'payment.success':
        await handlePaymentSuccess({
          transactionId: id,
          email,
          reference,
          amount,
        })
        break

      case 'payment.pending':
        console.log(`[Cakto] Pagamento pendente: ${id}`)
        break

      case 'payment.failed':
      case 'payment.error':
        console.error(`[Cakto] Pagamento falhou: ${id}`)
        await handlePaymentFailure({
          transactionId: id,
          email,
          reference,
        })
        break

      case 'payment.refunded':
        console.log(`[Cakto] Pagamento reembolsado: ${id}`)
        break

      default:
        console.warn(`[Cakto] Evento desconhecido: ${event}`)
    }

    // Responder com sucesso (Cakto precisa de 200 OK)
    return NextResponse.json(
      { success: true, message: 'Webhook processado' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Cakto Webhook Error]', error)
    return NextResponse.json(
      { error: 'Erro ao processar webhook' },
      { status: 500 }
    )
  }
}

async function handlePaymentSuccess(data: {
  transactionId: string
  email?: string
  reference?: string
  amount?: number
}) {
  try {
    // Salvar transação em Supabase
    const { data: transaction, error } = await supabase
      .from('cakto_transactions')
      .insert({
        cakto_id: data.transactionId,
        email: data.email,
        reference: data.reference,
        amount: data.amount,
        status: 'paid',
        created_at: new Date().toISOString(),
      })
      .select('id')
      .single()

    if (error) {
      console.error('[Supabase Insert Error]', error)
    } else {
      console.log(`[Cakto] Pagamento salvo em BD: ${transaction?.id}`)
    }

    // Enviar email de confirmação (opcional)
    if (data.email) {
      await sendConfirmationEmail(data.email, data.reference)
    }

    console.log(`[Cakto] Pagamento confirmado: ${data.transactionId}`)
  } catch (error) {
    console.error('[Payment Success Handler]', error)
  }
}

async function handlePaymentFailure(data: {
  transactionId: string
  email?: string
  reference?: string
}) {
  try {
    // Registrar falha em Supabase
    const { error } = await supabase
      .from('cakto_transactions')
      .insert({
        cakto_id: data.transactionId,
        email: data.email,
        reference: data.reference,
        amount: 0,
        status: 'failed',
        created_at: new Date().toISOString(),
      })

    if (error) {
      console.error('[Supabase Insert Error]', error)
    }

    // Notificar suporte
    if (data.email) {
      await sendFailureNotification(data.email, data.reference)
    }

    console.log(`[Cakto] Falha registrada: ${data.transactionId}`)
  } catch (error) {
    console.error('[Payment Failure Handler]', error)
  }
}

async function sendConfirmationEmail(
  email: string,
  reference?: string
): Promise<void> {
  try {
    // Enviar via Resend se disponível
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'noreply@triadeiaos.com',
        to: email,
        subject: 'Pagamento confirmado — CreditOS',
        html: `
          <h1>Bem-vindo ao CreditOS!</h1>
          <p>Seu pagamento foi confirmado com sucesso.</p>
          <p><strong>Referência:</strong> ${reference || 'N/A'}</p>
          <p><a href="https://triadeiaos.com/creditOS/sistema/" style="display: inline-block; padding: 12px 24px; background: #059669; color: white; text-decoration: none; border-radius: 4px;">Acessar o Sistema</a></p>
          <p style="color: #666; font-size: 14px; margin-top: 24px;">
            Obrigado por usar CreditOS! Qualquer dúvida, entre em contato conosco.
          </p>
        `,
      })
      console.log(`[Email] Confirmação enviada para ${email} via Resend`)
    } else {
      console.log(`[Email] Confirmação para ${email} (Resend não configurado)`)
    }
  } catch (error) {
    console.error('[Email Send Error]', error)
  }
}

async function sendFailureNotification(
  email: string,
  reference?: string
): Promise<void> {
  try {
    // Enviar via Resend se disponível
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)

      await resend.emails.send({
        from: 'suporte@triadeiaos.com',
        to: email,
        subject: '⚠️ Problema no seu pagamento — CreditOS',
        html: `
          <h1>Opa, algo deu errado</h1>
          <p>Seu pagamento não foi processado com sucesso.</p>
          <p><strong>Referência:</strong> ${reference || 'N/A'}</p>
          <p>Por favor, tente novamente clicando no link abaixo:</p>
          <p><a href="https://triadeiaos.com/creditOS" style="display: inline-block; padding: 12px 24px; background: #dc2626; color: white; text-decoration: none; border-radius: 4px;">Tentar Novamente</a></p>
          <p style="color: #666; font-size: 14px; margin-top: 24px;">
            Precisamos de você! Se o problema persistir, entre em contato: suporte@triadeiaos.com
          </p>
        `,
      })
      console.log(`[Email] Notificação de falha enviada para ${email} via Resend`)
    } else {
      console.log(`[Email] Notificação de falha para ${email} (Resend não configurado)`)
    }
  } catch (error) {
    console.error('[Email Send Error]', error)
  }
}

// Health check (GET /api/webhooks/cakto)
export async function GET() {
  return NextResponse.json(
    { status: 'webhook cakto ativo' },
    { status: 200 }
  )
}
