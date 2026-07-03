import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const file = searchParams.get('file')

  // Validação: apenas arquivos autorizados
  const ALLOWED_FILES = {
    'creditOS-planilha-calculos.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'creditOS-checklist-5-passos.pdf': 'application/pdf',
    'creditOS-email-receita-federal.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'creditOS-stjr1221170-tema779.pdf': 'application/pdf',
  }

  if (!file || !(file in ALLOWED_FILES)) {
    return NextResponse.json(
      { error: 'Arquivo não encontrado' },
      { status: 404 }
    )
  }

  try {
    // TODO: Verificar autenticação do usuário aqui
    // const user = await getSession(request)
    // if (!user) return NextResponse.json({ error: 'Não autenticado' }, { status: 401 })

    // Simular arquivo para CSV (depois será arquivo real)
    if (file === 'creditOS-planilha-calculos.xlsx') {
      // Ler o arquivo CSV da pasta public/resources
      const filePath = path.join(process.cwd(), 'public/resources/creditOS-planilha-calculos.csv')
      const fileContent = fs.readFileSync(filePath, 'utf-8')

      return new NextResponse(fileContent, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="${file}"`,
        },
      })
    }

    // Para outros arquivos, retornar mensagem placeholder
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
