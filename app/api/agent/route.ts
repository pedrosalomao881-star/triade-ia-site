import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { SYSTEM_PROMPT, LEAD_CAPTURE_TOOL } from "@/lib/agent/prompt";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export const runtime = "nodejs";

type ApiMsg = { role: "user" | "assistant"; content: string | Anthropic.ContentBlock[] };

// Função para obter a chave da API Anthropic (do Supabase ou variável de ambiente)
async function getAnthropicApiKey(): Promise<string> {
  const supabase = getSupabase();

  // Tentar buscar do Supabase primeiro
  try {
    const { data, error } = await supabase
      .from("soaf_config")
      .select("value")
      .eq("key", "ANTHROPIC_API_KEY")
      .single();

    if (!error && data?.value) {
      return data.value;
    }
  } catch (e) {
    // Ignorar erro e usar fallback
  }

  // Fallback: usar variável de ambiente
  const envKey = process.env.ANTHROPIC_API_KEY;
  if (!envKey) {
    throw new Error("ANTHROPIC_API_KEY não configurada no Supabase nem em variáveis de ambiente");
  }
  return envKey;
}

function sse(payload: object): string {
  return `data: ${JSON.stringify(payload)}\n\n`;
}

export async function POST(request: NextRequest) {
  const { messages }: { messages: ApiMsg[] } = await request.json();

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const enqueue = (payload: object) =>
        controller.enqueue(encoder.encode(sse(payload)));

      try {
        // Obter chave do Supabase
        const apiKey = await getAnthropicApiKey();
        const anthropic = new Anthropic({ apiKey });

        const firstStream = anthropic.messages.stream({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 1024,
          system: SYSTEM_PROMPT,
          tools: [LEAD_CAPTURE_TOOL],
          messages: messages as Anthropic.MessageParam[],
        });

        for await (const event of firstStream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            enqueue({ type: "delta", text: event.delta.text });
          }
        }

        const finalMsg = await firstStream.finalMessage();
        const toolUse = finalMsg.content.find(
          (b): b is Anthropic.ToolUseBlock => b.type === "tool_use"
        );

        if (toolUse && toolUse.name === "capturar_lead") {
          const leadInput = toolUse.input as Record<string, unknown>;
          const supabase = getSupabase();
          const { data: savedLead } = await supabase.from("site_leads").insert({
            nome: leadInput.nome ?? null,
            empresa: leadInput.empresa ?? null,
            whatsapp: leadInput.whatsapp ?? null,
            setor: leadInput.segmento ?? null,
            source: "agente_comercial",
            temperatura: leadInput.temperatura ?? null,
          }).select("id").single();
          const savedId = savedLead?.id ?? crypto.randomUUID();

          enqueue({
            type: "lead_captured",
            temperatura: leadInput.temperatura,
            nome: leadInput.nome,
            empresa: leadInput.empresa,
            whatsapp: leadInput.whatsapp,
            segmento: leadInput.segmento,
            id: savedId,
          });

          const followUpStream = anthropic.messages.stream({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            tools: [LEAD_CAPTURE_TOOL],
            messages: [
              ...(messages as Anthropic.MessageParam[]),
              { role: "assistant", content: finalMsg.content },
              {
                role: "user",
                content: [
                  {
                    type: "tool_result",
                    tool_use_id: toolUse.id,
                    content: JSON.stringify({ success: true, id: savedId }),
                  },
                ],
              },
            ],
          });

          for await (const event of followUpStream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              enqueue({ type: "delta", text: event.delta.text });
            }
          }

          await followUpStream.finalMessage();
        }

        enqueue({ type: "done" });
      } catch (e) {
        enqueue({
          type: "error",
          message: e instanceof Error ? e.message : "Erro interno",
        });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
