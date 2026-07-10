import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPABASE_SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("❌ Erro: Variáveis de Supabase não encontradas");
  console.error("NEXT_PUBLIC_SUPABASE_URL:", SUPABASE_URL);
  console.error("NEXT_PUBLIC_SUPABASE_ANON_KEY:", SUPABASE_ANON_KEY ? "✓" : "✗");
  process.exit(1);
}

console.log("📡 Conectando ao Supabase...");
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE || SUPABASE_ANON_KEY);

const SQL = `
CREATE TABLE IF NOT EXISTS public.soaf_config (
  id BIGSERIAL PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_soaf_config_key ON public.soaf_config(key);

ALTER TABLE public.soaf_config ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "Allow select for authenticated" ON public.soaf_config
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY IF NOT EXISTS "Allow insert/update for authenticated" ON public.soaf_config
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow update for authenticated" ON public.soaf_config
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "Allow delete for admin" ON public.soaf_config
  FOR DELETE TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');
`;

try {
  console.log("⚙️  Executando SQL...");
  const { data, error } = await supabase.rpc('exec', { sql: SQL });
  
  if (error) {
    console.error("❌ Erro SQL:", error.message);
    process.exit(1);
  }

  console.log("✅ SQL Executado com Sucesso!");
  console.log("\n📊 Tabelas criadas:");
  console.log("  ✓ soaf_config (id, key, value, created_at, updated_at)");
  console.log("  ✓ Índice: idx_soaf_config_key");
  console.log("  ✓ RLS: Habilitado com 4 policies");
  console.log("\n✨ Agora você pode salvar chaves de API no servidor!");
} catch (err) {
  console.error("❌ Erro:", err.message);
  process.exit(1);
}
