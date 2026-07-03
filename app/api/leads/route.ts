import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// anon key: INSERT only (RLS policy permite). Leitura admin requer service role.
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

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

    const supabase = getSupabase();
    const { data, error } = await supabase.from("site_leads").insert({
      nome: body.nome,
      empresa: body.empresa,
      whatsapp: body.whatsapp,
      email: body.email ?? null,
      setor: body.setor ?? null,
      source: (body.source as string) ?? "site",
      score,
      temperatura,
    }).select("id").single();

    if (error) {
      console.error("[TRÍADE IA] Erro ao salvar lead:", error.message);
      return NextResponse.json({ success: false, error: "Erro ao salvar" }, { status: 500 });
    }

    console.log("[TRÍADE IA] Lead salvo:", { nome: body.nome, empresa: body.empresa, score, temperatura, id: data.id });

    return NextResponse.json({ success: true, score, temperatura, id: data.id });
  } catch {
    return NextResponse.json({ success: false, error: "Erro interno" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const secret = (request.headers.get("x-admin-secret") ?? "").trim();
  const adminSecret = (process.env.ADMIN_SECRET ?? "").trim();
  if (!adminSecret || secret !== adminSecret) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }
  const supabase = getSupabaseAdmin();
  const { data: leads, error } = await supabase
    .from("site_leads")
    .select("*")
    .order("criado_em", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ leads });
}
