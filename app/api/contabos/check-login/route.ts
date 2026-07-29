import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  let email: unknown;
  let password: unknown;
  try {
    const body = await request.json();
    email = body?.email;
    password = body?.password;
  } catch {
    return NextResponse.json({ valid: false, error: "Payload inválido" }, { status: 400 });
  }

  if (typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ valid: false, error: "Email obrigatório" }, { status: 400 });
  }
  if (typeof password !== "string" || !password) {
    return NextResponse.json({ valid: false, error: "Senha obrigatória" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !anonKey || !serviceRoleKey) {
    return NextResponse.json({ valid: false, error: "Autenticação não configurada" }, { status: 500 });
  }

  // 1. Autenticação real: a senha precisa bater com o hash no Supabase Auth.
  const authResp = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: anonKey },
    body: JSON.stringify({ email: email.trim(), password }),
  });

  if (!authResp.ok) {
    return NextResponse.json({ valid: false, error: "Credenciais inválidas" }, { status: 200 });
  }

  // 2. Autorização: mesmo com senha certa, só libera se a assinatura estiver ativa.
  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const { data, error } = await supabase
    .from("contabos_subscriptions")
    .select("email, status")
    .ilike("email", email.trim())
    .eq("status", "active")
    .maybeSingle();

  if (error) {
    console.error("[contabos:check-login] erro ao consultar assinatura", error);
    return NextResponse.json({ valid: false, error: "Erro ao verificar assinatura" }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ valid: false, error: "Assinatura inativa. Fale com a Sofia." }, { status: 200 });
  }

  return NextResponse.json({ valid: true }, { status: 200 });
}
