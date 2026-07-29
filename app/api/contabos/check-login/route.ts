import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  let email: unknown;
  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json({ valid: false, error: "Payload inválido" }, { status: 400 });
  }

  if (typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ valid: false, error: "Email obrigatório" }, { status: 400 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ valid: false, error: "Autenticação não configurada" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  const { data, error } = await supabase
    .from("contabos_subscriptions")
    .select("email, status")
    .ilike("email", email.trim())
    .eq("status", "active")
    .maybeSingle();

  if (error) {
    console.error("[contabos:check-login] erro ao consultar Supabase", error);
    return NextResponse.json({ valid: false, error: "Erro ao verificar credencial" }, { status: 500 });
  }

  return NextResponse.json({ valid: Boolean(data) }, { status: 200 });
}
