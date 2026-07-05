import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // 1. app-contabos.triadeiaos.com → serve ContabOS sistema
  if (hostname.includes('app-contabos')) {
    return NextResponse.rewrite(new URL('/api/contabos-system', request.url));
  }

  // 2. soaf-empresa.triadeiaos.com → serve SOAF Empresário
  if (hostname.includes('soaf-empresa')) {
    return NextResponse.rewrite(new URL('/api/soaf-empresa-system', request.url));
  }

  // 3. soaf-contador.triadeiaos.com → serve SOAF Contador
  if (hostname.includes('soaf-contador')) {
    return NextResponse.rewrite(new URL('/api/soaf-contador-system', request.url));
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
