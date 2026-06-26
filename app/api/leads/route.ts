import { NextRequest, NextResponse } from "next/server";
import { readLeadsFromFile, saveLeadToFile } from "@/lib/leads";

function scoreLead(lead: Record<string, unknown>): { score: number; temperatura: "quente" | "morno" | "frio" } {
  let score = 0;
  const nivel = Number(lead.nivelMaturidade ?? 0);
  if (nivel >= 3) score += 3; else if (nivel >= 1) score += 1;
  const fat = String(lead.faturamento ?? "");
  if (fat.includes("10M") || fat.includes("2M")) score += 3;
  else if (fat.includes("500")) score += 2;
  else score += 1;
  const func = String(lead.funcionarios ?? "");
  if (func.includes("200") || func.includes("51")) score += 3;
  else if (func.includes("11")) score += 2;
  else score += 1;
  const urg = String(lead.urgencia ?? "");
  if (urg.includes("30")) score += 3;
  else if (urg.includes("pesquisando")) score += 2;
  else score += 1;
  const temperatura: "quente" | "morno" | "frio" = score >= 9 ? "quente" : score >= 5 ? "morno" : "frio";
  return { score, temperatura };
}

export async function POST(request: NextRequest) {
  try {
    const body: Record<string, unknown> = await request.json();

    if (!body.nome || !body.whatsapp) {
      return NextResponse.json({ success: false, error: "Nome e WhatsApp obrigatórios" }, { status: 400 });
    }

    const { score, temperatura } = scoreLead(body);
    const saved = saveLeadToFile({ ...body, score, temperatura, fonte: "formulario" });

    console.log("[TRÍADE IA] Lead:", { nome: body.nome, empresa: body.empresa, score, temperatura });

    return NextResponse.json({ success: true, score, temperatura, id: saved.id });
  } catch {
    return NextResponse.json({ success: false, error: "Erro interno" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-admin-secret");
  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }
  const leads = readLeadsFromFile();
  return NextResponse.json({ leads });
}
