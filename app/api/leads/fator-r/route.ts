import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export async function POST(request: NextRequest) {
  try {
    const { nome, email, whatsapp, folha, receita } = await request.json();

    if (!nome || !email || !whatsapp) {
      return NextResponse.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.from("leads_fator_r").insert([
      {
        nome,
        email,
        whatsapp,
        folha,
        receita,
        criado_em: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error("Erro ao salvar lead:", error);
      return NextResponse.json(
        { error: "Erro ao salvar dados" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Lead salvo com sucesso" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
