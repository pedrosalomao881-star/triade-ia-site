import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// Tabela esperada: soaf_config (id, user_id, key, value, created_at, updated_at)
// Considere adicionar segurança de autenticação

export async function POST(request: NextRequest) {
  try {
    const { key, value } = await request.json();

    if (!key || !value) {
      return NextResponse.json(
        { error: "key e value são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação básica de chaves de API
    if (key === "ANTHROPIC_API_KEY" && !value.startsWith("sk-ant-")) {
      return NextResponse.json(
        { error: "Chave Anthropic inválida. Deve começar com sk-ant-" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    // Tentar atualizar, se não existir, inserir
    const { data: existing } = await supabase
      .from("soaf_config")
      .select("id")
      .eq("key", key)
      .single();

    let result;
    if (existing) {
      result = await supabase
        .from("soaf_config")
        .update({
          value,
          updated_at: new Date().toISOString(),
        })
        .eq("key", key)
        .select()
        .single();
    } else {
      result = await supabase
        .from("soaf_config")
        .insert({
          key,
          value,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .select()
        .single();
    }

    if (result.error) {
      console.error("Erro ao salvar config:", result.error);
      return NextResponse.json(
        { error: "Erro ao salvar configuração no servidor" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Configuração ${key} salva com sucesso no servidor`,
      data: {
        key,
        lastUpdated: new Date().toISOString(),
        savedOnServer: true,
      },
    });
  } catch (error) {
    console.error("Erro no endpoint /api/config:", error);
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const key = request.nextUrl.searchParams.get("key");

    if (!key) {
      return NextResponse.json(
        { error: "Parâmetro 'key' é obrigatório" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    const { data, error } = await supabase
      .from("soaf_config")
      .select("value, updated_at")
      .eq("key", key)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: `Configuração '${key}' não encontrada` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      key,
      value: data.value,
      lastUpdated: data.updated_at,
    });
  } catch (error) {
    console.error("Erro no GET /api/config:", error);
    return NextResponse.json(
      { error: "Erro ao recuperar configuração" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { key } = await request.json();

    if (!key) {
      return NextResponse.json(
        { error: "key é obrigatório" },
        { status: 400 }
      );
    }

    const supabase = getSupabase();

    const { error } = await supabase
      .from("soaf_config")
      .delete()
      .eq("key", key);

    if (error) {
      return NextResponse.json(
        { error: "Erro ao deletar configuração" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Configuração ${key} deletada com sucesso`,
    });
  } catch (error) {
    console.error("Erro no DELETE /api/config:", error);
    return NextResponse.json(
      { error: "Erro ao deletar configuração" },
      { status: 500 }
    );
  }
}
