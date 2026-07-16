-- Migration: Criar tabela soaf_config para armazenar configurações de sistema
-- Execute no Supabase SQL Editor (kxoifalopelzaemliruj)

CREATE TABLE IF NOT EXISTS public.soaf_config (
  id BIGSERIAL PRIMARY KEY,
  key TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Adicionar índice para buscas rápidas
CREATE INDEX IF NOT EXISTS idx_soaf_config_key ON public.soaf_config(key);

-- Adicionar policy de segurança (RLS)
ALTER TABLE public.soaf_config ENABLE ROW LEVEL SECURITY;

-- Policy: Permitir SELECT para authenticated users
CREATE POLICY "Allow select for authenticated" ON public.soaf_config
  FOR SELECT TO authenticated
  USING (true);

-- Policy: Permitir INSERT/UPDATE para admin (ajuste conforme necessário)
CREATE POLICY "Allow insert/update for authenticated" ON public.soaf_config
  FOR INSERT TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow update for authenticated" ON public.soaf_config
  FOR UPDATE TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Permitir DELETE apenas para admin
CREATE POLICY "Allow delete for admin" ON public.soaf_config
  FOR DELETE TO authenticated
  USING (auth.jwt() ->> 'role' = 'admin');

-- Insert de exemplo (comentado)
-- INSERT INTO public.soaf_config (key, value)
-- VALUES ('ANTHROPIC_API_KEY', 'sk-ant-...')
-- ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
