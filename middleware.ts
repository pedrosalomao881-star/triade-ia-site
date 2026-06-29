import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (!pathname.startsWith('/interno')) return NextResponse.next()
  if (pathname === '/interno/login') return NextResponse.next()
  if (pathname.startsWith('/api/interno')) return NextResponse.next()

  const access = request.cookies.get('interno_access')?.value
  const token = process.env.INTERNO_PASSWORD || 'triade2026'

  if (access !== token) {
    const url = request.nextUrl.clone()
    url.pathname = '/interno/login'
    url.searchParams.set('redirect', pathname)
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/interno/:path*'],
}
