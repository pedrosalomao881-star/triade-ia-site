import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { SYSTEM_PROMPT, LEAD_CAPTURE_TOOL } from "@/lib/agent/prompt";
import { saveLeadToFile } from "@/lib/leads";

export const runtime = "nodejs";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

type ApiMsg = { role: "user" | "assistant"; content: string | Anthropic.ContentBlock[] };

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
        const firstStream = anthropic.messages.stream({
          model: "claude-sonnet-4-6",
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
          const saved = saveLeadToFile({ ...leadInput, fonte: "agente_comercial" });

          enqueue({
            type: "lead_captured",
            temperatura: leadInput.temperatura,
            nome: leadInput.nome,
            empresa: leadInput.empresa,
            whatsapp: leadInput.whatsapp,
            segmento: leadInput.segmento,
            id: saved.id,
          });

          const followUpStream = anthropic.messages.stream({
            model: "claude-sonnet-4-6",
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
                    content: JSON.stringify({ success: true, id: saved.id }),
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
