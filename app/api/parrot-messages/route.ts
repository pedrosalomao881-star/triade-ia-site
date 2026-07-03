import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const { data: messages, error } = await supabase
      .from('claude_channel')
      .select('*')
      .eq('de', 'parrot')
      .eq('para', 'windows')
      .eq('lida', false)
      .order('criada_em', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({
      status: 'ok',
      total: messages?.length || 0,
      messages: messages || []
    })
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Erro ao buscar mensagens' },
      { status: 500 }
    )
  }
}
