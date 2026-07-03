-- Migration: Create cakto_transactions table
-- Description: Store Cakto payment webhook data

CREATE TABLE IF NOT EXISTS public.cakto_transactions (
  id BIGSERIAL PRIMARY KEY,
  cakto_id TEXT UNIQUE NOT NULL,
  email TEXT,
  reference TEXT NOT NULL,
  amount DECIMAL(10, 2),
  status TEXT NOT NULL CHECK (status IN ('paid', 'pending', 'failed', 'refunded')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Indexes for common queries
  INDEX idx_email (email),
  INDEX idx_reference (reference),
  INDEX idx_status (status),
  INDEX idx_created_at (created_at DESC)
);

-- Enable RLS if needed
ALTER TABLE public.cakto_transactions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role (API) to insert
CREATE POLICY "Allow service role to insert"
  ON public.cakto_transactions
  FOR INSERT
  WITH CHECK (true);

-- Policy: Allow service role to read own transactions
CREATE POLICY "Allow users to read own transactions"
  ON public.cakto_transactions
  FOR SELECT
  USING (auth.uid()::text = email OR auth.role() = 'service_role');

-- Comment
COMMENT ON TABLE public.cakto_transactions IS 'Transactions from Cakto payment gateway webhooks';
COMMENT ON COLUMN public.cakto_transactions.cakto_id IS 'Unique transaction ID from Cakto';
COMMENT ON COLUMN public.cakto_transactions.reference IS 'Product/plan reference (e.g., CREDITOS_MENSAL)';
COMMENT ON COLUMN public.cakto_transactions.status IS 'Payment status: paid, pending, failed, refunded';
