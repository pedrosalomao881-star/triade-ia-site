import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { createClient } from '@supabase/supabase-js'

const ALLOWED_FILES = {
  'creditOS-planilha-calculos.xlsx': 'text/csv',
  'creditOS-checklist-5-passos.pdf': 'application/pdf',
  'creditOS-email-receita-federal.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'creditOS-stjr1221170-tema779.pdf': 'application/pdf',
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const file = searchParams.get('file')
  const token = request.headers.get('authorization')?.replace('Bearer ', '')

  // Validação: apenas arquivos autorizados
  if (!file || !(file in ALLOWED_FILES)) {
    return NextResponse.json(
      { error: 'Arquivo não encontrado' },
      { status: 404 }
    )
  }

  try {
    // Verificar autenticação com Supabase
    if (!token) {
      return NextResponse.json(
        { error: 'Não autenticado' },
        { status: 401 }
      )
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    // Verificar se o usuário existe e tem uma subscription válida
    const { data: { user }, error: userError } = await supabase.auth.admin.getUserById(token)

    if (userError || !user) {
      return NextResponse.json(
        { error: 'Usuário não encontrado' },
        { status: 401 }
      )
    }

    // Verificar se tem acesso ao recurso (semestral ou anual)
    const { data: subscription, error: subError } = await supabase
      .from('creditOS_subscriptions')
      .select('plan_type')
      .eq('user_id', user.id)
      .single()

    if (subError || !subscription || subscription.plan_type === 'mensal') {
      return NextResponse.json(
        { error: 'Acesso negado: plano insuficiente' },
        { status: 403 }
      )
    }

    // Servir o arquivo
    if (file === 'creditOS-planilha-calculos.xlsx') {
      const filePath = path.join(process.cwd(), 'public/resources/creditOS-planilha-calculos.csv')
      const fileContent = fs.readFileSync(filePath, 'utf-8')

      return new NextResponse(fileContent, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="creditOS-planilha-calculos.csv"`,
        },
      })
    }

    // Placeholder para outros arquivos
    const content = `[Arquivo ${file} não existe ainda]\n\nEste recurso será disponibilizado em breve.`

    return new NextResponse(content, {
      headers: {
        'Content-Type': ALLOWED_FILES[file as keyof typeof ALLOWED_FILES] || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${file}"`,
      },
    })
  } catch (error) {
    console.error('Erro ao fazer download:', error)
    return NextResponse.json(
      { error: 'Erro ao processar download' },
      { status: 500 }
    )
  }
}
