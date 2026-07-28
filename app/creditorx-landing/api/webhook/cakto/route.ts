import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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
  data?: {
    customer?: { email?: string };
    offer?: { name?: string };
  };
  [key: string]: unknown;
};

export async function POST(request: Request) {
  const configuredSecret = "8c73bd42-01fb-411b-8242-e49948b0ee83";

  const rawBody = await request.text();
  let payload: CaktoWebhookPayload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Payload inválido" }, { status: 400 });
  }

  const headerSecret =
    request.headers.get("x-cakto-secret") ?? request.headers.get("x-webhook-secret");
  const receivedSecret = (headerSecret ?? payload.secret ?? "").trim();

  if (!receivedSecret || !constantTimeEqual(receivedSecret, configuredSecret.trim())) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  console.log(`[creditorx:cakto:webhook] evento recebido: ${payload.event ?? "desconhecido"}`, payload);

  if (payload.event === "purchase_approved") {
    const email = payload.data?.customer?.email;
    if (email) {
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
        const { error } = await supabase
          .from("creditorx_subscriptions")
          .upsert({ email, status: "active" }, { onConflict: "email" });
        if (error) {
          console.error("[creditorx:cakto:webhook] falha ao liberar acesso no Supabase", error);
        }
      } catch (error) {
        console.error("[creditorx:cakto:webhook] erro inesperado ao acionar Supabase", error);
      }
    }
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
