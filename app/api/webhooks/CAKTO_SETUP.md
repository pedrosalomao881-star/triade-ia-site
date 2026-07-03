# Webhook Cakto — Setup Guia

## Resumo
Webhook para processar eventos de pagamento do Cakto. Recebe callbacks quando um cliente conclui/falha um pagamento nos links Cakto.

**URL do webhook:** `https://triadeiaos.com/api/webhooks/cakto`

---

## 1. CONFIGURAR NO CAKTO

### Passo 1: Acessar dashboard Cakto
1. Abra https://admin.cakto.com.br/ (ou seu painel)
2. Vá para **Configurações** → **Webhooks** → **Adicionar novo webhook**

### Passo 2: Registrar a URL
- **URL:** `https://triadeiaos.com/api/webhooks/cakto`
- **Método:** POST
- **Eventos a receber:**
  - ✅ `payment.approved` (pagamento confirmado)
  - ✅ `payment.success` (alternativa: pagamento sucesso)
  - ✅ `payment.failed` (pagamento falhou)
  - ✅ `payment.refunded` (reembolso processado)

### Passo 3: Gerar chave secreta (opcional mas recomendado)
Se Cakto oferece geração de secret/token para assinatura:
1. Copie a chave gerada
2. Adicione ao `.env.local`:
   ```
   CAKTO_WEBHOOK_SECRET=sua_chave_aqui
   ```
3. Cakto enviará header `x-cakto-signature` — será validado pelo webhook

---

## 2. TESTAR O WEBHOOK

### Teste 1: Health check
```bash
curl https://triadeiaos.com/api/webhooks/cakto
# Resposta esperada:
# {"status":"webhook cakto ativo"}
```

### Teste 2: Simular pagamento aprovado
```bash
curl -X POST https://triadeiaos.com/api/webhooks/cakto \
  -H "Content-Type: application/json" \
  -d '{
    "event": "payment.approved",
    "id": "pay_test_123",
    "status": "approved",
    "email": "cliente@exemplo.com",
    "reference": "CREDITOS_MENSAL",
    "amount": 9700
  }'
```

Resposta esperada: `{"success":true,"message":"Webhook processado"}`

---

## 3. EVENTOS SUPORTADOS

| Evento | Ação |
|--------|------|
| `payment.approved` | Criar/ativar conta do cliente, enviar email confirmação |
| `payment.success` | Alias de `payment.approved` |
| `payment.pending` | Log (cliente fez PIX, aguardando liquidação) |
| `payment.failed` | Enviar email de falha, tentar novamente |
| `payment.refunded` | Desativar acesso, notificar suporte |

---

## 4. INTEGRAÇÃO COM BANCO DE DADOS

**Arquivo:** `app/api/webhooks/cakto/route.ts`

Atual: loga eventos apenas (TODO comments)

**Para ativar persistência:**

### Opção A: Supabase
```typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// Em handlePaymentSuccess:
await supabase.from('transactions').insert({
  cakto_id: data.transactionId,
  email: data.email,
  reference: data.reference,
  amount: data.amount,
  status: 'paid',
  created_at: new Date(),
})
```

### Opção B: PostgreSQL direto
```typescript
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

// Em handlePaymentSuccess:
await pool.query(
  'INSERT INTO transactions (cakto_id, email, reference, amount, status) VALUES ($1, $2, $3, $4, $5)',
  [data.transactionId, data.email, data.reference, data.amount, 'paid']
)
```

---

## 5. INTEGRAÇÃO COM EMAIL

**Para enviar confirmações automaticamente:**

### Opção A: Resend (recomendado)
```bash
npm install resend
```

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendConfirmationEmail(email: string, reference?: string) {
  await resend.emails.send({
    from: 'noreply@triadeiaos.com',
    to: email,
    subject: 'Pagamento confirmado — CreditOS',
    html: `
      <h1>Bem-vindo ao CreditOS!</h1>
      <p>Seu pagamento foi confirmado.</p>
      <p><a href="https://triadeiaos.com/creditOS/sistema/">Acessar o sistema</a></p>
    `,
  })
}
```

### Opção B: SendGrid
```bash
npm install @sendgrid/mail
```

---

## 6. VARIÁVEIS DE AMBIENTE

Adicione ao `.env.local`:

```env
# Cakto Webhook
CAKTO_WEBHOOK_SECRET=sk_live_sua_chave_secreta_aqui

# Opcional: Database
DATABASE_URL=postgresql://user:password@host/db

# Opcional: Email
RESEND_API_KEY=re_sua_chave_aqui
SENDGRID_API_KEY=SG.sua_chave_aqui
```

---

## 7. LOGS E MONITORAMENTO

Todos os eventos são logados:
- **Sucesso:** `[Cakto] Pagamento confirmado: {transactionId}`
- **Falha:** `[Cakto] Pagamento falhou: {transactionId}`
- **Erro:** `[Cakto Webhook Error] {detalhes}`

Para production, configure alertas no seu serviço de logs (Sentry, LogRocket, DataDog).

---

## 8. FLUXO FINAL

```
Cliente clica em link Cakto
    ↓
Completa pagamento
    ↓
Cakto confirma → envia POST para /api/webhooks/cakto
    ↓
Webhook valida assinatura
    ↓
Salva transação no DB
    ↓
Envia email confirmação
    ↓
Ativa acesso ao cliente no CreditOS
```

---

## Contato

Dúvidas sobre integração? Contacte suporte Cakto ou André.
