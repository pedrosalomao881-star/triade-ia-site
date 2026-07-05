import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // 1. app-contabos.triadeiaos.com → redirecionar para /contabos-app
  if (hostname.includes('app-contabos')) {
    request.nextUrl.pathname = '/contabos-app';
    return NextResponse.rewrite(request.nextUrl);
  }

  // 2. soaf-empresa.triadeiaos.com → redirecionar para /soaf-empresa-app
  if (hostname.includes('soaf-empresa')) {
    request.nextUrl.pathname = '/soaf-empresa-app';
    return NextResponse.rewrite(request.nextUrl);
  }

  // 3. soaf-contador.triadeiaos.com → redirecionar para /soaf-contador-app
  if (hostname.includes('soaf-contador')) {
    request.nextUrl.pathname = '/soaf-contador-app';
    return NextResponse.rewrite(request.nextUrl);
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
