import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()
  const token = process.env.INTERNO_PASSWORD || 'triade2026'

  if (password !== token) {
    return NextResponse.json({ error: 'Senha incorreta' }, { status: 401 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('interno_access', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 7 * 24 * 3600,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
  })
  return response
}
