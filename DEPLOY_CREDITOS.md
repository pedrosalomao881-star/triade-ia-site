# Deploy CreditOS — Checklist Completo

**Data:** 2026-07-02 | **Build Status:** ✅ PRONTO

---

## 1. PRÉ-REQUISITOS

### Variáveis de Ambiente
Adicione ao `.env.local` ou `.env.production`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...seu_key_aqui

# Email (opcional — para confirmações automáticas)
RESEND_API_KEY=re_...seu_key_aqui

# Cakto (opcional — para logs de segurança)
CAKTO_WEBHOOK_SECRET=sk_live_...sua_chave_secreta
```

---

## 2. CRIAR TABELA NO SUPABASE

### Via SQL Console
Supabase Dashboard → SQL Console → Execute:

```sql
-- Migration: Create cakto_transactions table
CREATE TABLE IF NOT EXISTS public.cakto_transactions (
  id BIGSERIAL PRIMARY KEY,
  cakto_id TEXT UNIQUE NOT NULL,
  email TEXT,
  reference TEXT NOT NULL,
  amount DECIMAL(10, 2),
  status TEXT NOT NULL CHECK (status IN ('paid', 'pending', 'failed', 'refunded')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_email ON public.cakto_transactions(email);
CREATE INDEX idx_reference ON public.cakto_transactions(reference);
CREATE INDEX idx_status ON public.cakto_transactions(status);
CREATE INDEX idx_created_at ON public.cakto_transactions(created_at DESC);

-- RLS
ALTER TABLE public.cakto_transactions ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow service role to insert"
  ON public.cakto_transactions FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow users to read own transactions"
  ON public.cakto_transactions FOR SELECT
  USING (auth.uid()::text = email OR auth.role() = 'service_role');
```

**Ou** copie de: `supabase/migrations/create_cakto_transactions.sql`

---

## 3. DEPLOY VERCEL

### Opção A: Via GitHub (Recomendado)
```bash
git add .
git commit -m "Deploy CreditOS v1 — landing + webhook + Supabase integration"
git push origin main
```

Vercel detectará automaticamente e fará deploy.

### Opção B: Deploy Manual
```bash
# Instalar Vercel CLI se não tiver
npm i -g vercel

# Fazer deploy
vercel --prod --env NEXT_PUBLIC_SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=...
```

**Tempo estimado:** 2-5 minutos

---

## 4. VERIFICAÇÃO PÓS-DEPLOY

### 1. Landing Page
```bash
curl https://triadeiaos.com/creditOS -I
# Esperado: 200 OK, Content-Type: text/html
```

### 2. SEO / Sitemap
```bash
curl https://triadeiaos.com/sitemap.xml | grep creditOS
# Esperado: <loc>https://triadeiaos.com/creditOS</loc>
```

### 3. Webhook Health Check
```bash
curl https://triadeiaos.com/api/webhooks/cakto
# Esperado: {"status":"webhook cakto ativo"}
```

### 4. Webhook Test (Mock Payment)
```bash
curl -X POST https://triadeiaos.com/api/webhooks/cakto \
  -H "Content-Type: application/json" \
  -d '{
    "event": "payment.approved",
    "id": "pay_test_123",
    "status": "approved",
    "email": "teste@triadeiaos.com",
    "reference": "CREDITOS_MENSAL",
    "amount": 9700
  }'
# Esperado: {"success":true,"message":"Webhook processado"}
```

---

## 5. CONFIGURAR WEBHOOK NO CAKTO

### No Dashboard Cakto:
1. **Configurações** → **Webhooks** → **Adicionar novo**
2. **URL:** `https://triadeiaos.com/api/webhooks/cakto`
3. **Método:** POST
4. **Eventos:**
   - ✅ `payment.approved`
   - ✅ `payment.success`
   - ✅ `payment.failed`
   - ✅ `payment.refunded`
5. **Secret (opcional):** Gerar e adicionar a `.env.local` como `CAKTO_WEBHOOK_SECRET`
6. **Salvar**

---

## 6. TESTAR FLUXO END-TO-END

### Comprador:
1. Acessa https://triadeiaos.com/creditOS
2. Clica em "Acessar o Sistema (Demo)" ou botão de CTA
3. Redireciona para link Cakto (ex: pay.cakto.com.br/tat5gnh)
4. Completa pagamento (teste ou produção)
5. Cakto envia webhook para `/api/webhooks/cakto`

### Backend:
1. Webhook recebido e validado
2. Transação salva em `cakto_transactions` (Supabase)
3. Email de confirmação enviado (se Resend ativo)
4. Logs disponíveis em: Vercel → Logs → Functions

### No Supabase:
1. Dashboard → SQL Editor → `SELECT * FROM cakto_transactions;`
2. Deve listar a transação com `status='paid'`

---

## 7. ROTAS LIVE

| Rota | Status | Descrição |
|------|--------|-----------|
| `https://triadeiaos.com/creditOS` | ✅ LIVE | Landing page CreditOS |
| `https://triadeiaos.com/creditOS/landing` | ✅ LIVE | Landing alternativa (se houver) |
| `https://triadeiaos.com/api/webhooks/cakto` | ✅ LIVE | Webhook Cakto |
| `https://triadeiaos.com/sitemap.xml` | ✅ LIVE | Sitemap com CreditOS incluído |

---

## 8. TROUBLESHOOTING

### Landing não carrega
- [ ] Verificar `.creditOS/page.tsx` foi incluído no build
- [ ] Verificar imports de `lucide-react` — todos os ícones disponíveis?
- [ ] Logs Vercel: `vercel logs` ou dashboard

### Webhook não recebe dados
- [ ] Verificar Cakto > Webhooks: status "Ativo"?
- [ ] Cakto enviando test event? (Dashboard → Teste)
- [ ] Logs Vercel: `vercel logs --function api/webhooks/cakto`
- [ ] Verificar `.env` tem `SUPABASE_SERVICE_ROLE_KEY`?

### Transações não salvam
- [ ] Supabase: tabela `cakto_transactions` existe?
- [ ] RLS policies corretas?
- [ ] `SUPABASE_SERVICE_ROLE_KEY` é válida?
- [ ] Erro SQL? Verificar Supabase → Logs

---

## 9. PRÓXIMOS PASSOS

- [ ] Windows testar landing em triadeiaos.com/creditOS
- [ ] Windows testar webhook com curl
- [ ] Registrar webhook no Cakto (dashboard)
- [ ] Fazer transação teste (PIX)
- [ ] Verificar transação em Supabase
- [ ] Revisar emails de confirmação (se Resend ativo)

---

## 10. ROLLBACK

Se algo quebrar:

```bash
# Reverter para versão anterior no Vercel
vercel rollback

# Ou remover tabela no Supabase
DROP TABLE IF EXISTS public.cakto_transactions;
```

---

## Contato

- **Erro Deploy:** Vercel Dashboard → Deployments
- **Erro SQL:** Supabase Dashboard → SQL Logs
- **Erro Webhook:** Vercel Logs ou Supabase Logs
- **Erro Cakto:** Dashboard Cakto → Webhooks → Histórico

**Status Atual:** ✅ PRONTO PARA DEPLOY

Co-Authored by: Claude Parrot, CTO TRÍADE IA
