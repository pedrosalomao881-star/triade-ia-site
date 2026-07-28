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
  const configuredSecret = "a1c8a002-1cc7-44aa-8247-95641b75868c";
  if (!configuredSecret) {
    return NextResponse.json({ error: "Webhook não configurado" }, { status: 500 });
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
  const receivedSecret = (headerSecret ?? payload.secret ?? "").trim();

  if (!receivedSecret || !constantTimeEqual(receivedSecret, configuredSecret.trim())) {
    return NextResponse.json(
      {
        error: "Não autorizado",
        debug: {
          source: headerSecret ? "header" : payload.secret ? "body" : "none",
          receivedLength: receivedSecret.length,
          expectedLength: configuredSecret.trim().length,
        },
      },
      { status: 401 }
    );
  }

  console.log(`[soaf-privado-contador:cakto:webhook] evento recebido: ${payload.event ?? "desconhecido"}`, payload);

  return NextResponse.json({ received: true }, { status: 200 });
}
