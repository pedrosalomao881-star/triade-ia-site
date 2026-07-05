import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // 1. Se for soaf-empresa.triadeiaos.com, servir SOAF Empresário
  if (hostname.includes('soaf-empresa')) {
    return NextResponse.rewrite(new URL('/soaf-privado-empresario.html', request.url));
  }

  // 2. Se for soaf-contador.triadeiaos.com, servir SOAF Contador
  if (hostname.includes('soaf-contador')) {
    return NextResponse.rewrite(new URL('/soaf-privado-contador.html', request.url));
  }

  // 3. Proteção /interno (mantém a segurança existente)
  if (!pathname.startsWith('/interno')) return NextResponse.next();
  if (pathname === '/interno/login') return NextResponse.next();
  if (pathname.startsWith('/api/interno')) return NextResponse.next();

  const access = request.cookies.get('interno_access')?.value;
  const token = process.env.INTERNO_PASSWORD || 'triade2026';

  if (access !== token) {
    const url = request.nextUrl.clone();
    url.pathname = '/interno/login';
    url.searchParams.set('redirect', pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
