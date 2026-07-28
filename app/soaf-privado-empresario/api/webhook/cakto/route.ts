import { NextResponse } from "next/server";

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

type CaktoWebhookPayload = {
  event?: string;
  secret?: string;
  [key: string]: unknown;
};

export async function POST(request: Request) {
  const configuredSecret = process.env.CAKTO_WEBHOOK_SECRET_SOAF_EMPRESARIO;
  if (!configuredSecret) {
    return NextResponse.json(
      {
        error: "Webhook não configurado",
        debug: {
          hasThisVar: !!process.env.CAKTO_WEBHOOK_SECRET_SOAF_EMPRESARIO,
          hasContadorVar: !!process.env.CAKTO_WEBHOOK_SECRET_SOAF_CONTADOR,
          hasAdminSecret: !!process.env.ADMIN_SECRET,
          hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
          hasInternoPassword: !!process.env.INTERNO_PASSWORD,
          vercelEnv: process.env.VERCEL_ENV ?? null,
          totalEnvKeys: Object.keys(process.env).length,
        },
      },
      { status: 500 }
    );
  }

  const rawBody = await request.text();
  let payload: CaktoWebhookPayload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const headerSecret =
    request.headers.get("x-cakto-secret") ?? request.headers.get("x-webhook-secret");
  const receivedSecret = headerSecret ?? payload.secret ?? "";

  if (!receivedSecret || !constantTimeEqual(receivedSecret, configuredSecret)) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  console.log(`[soaf-privado-empresario:cakto:webhook] evento recebido: ${payload.event ?? "desconhecido"}`, payload);

  return NextResponse.json({ received: true }, { status: 200 });
}
