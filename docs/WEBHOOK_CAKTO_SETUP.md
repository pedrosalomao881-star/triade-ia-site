# Setup Webhook Cakto → CreditOS

## Visão Geral

Quando um cliente paga via Cakto, o webhook automáticamente:
1. Recebe notificação de pagamento
2. Busca o usuário no Supabase pelo email
3. Cria/atualiza a subscription com o plano correto
4. Libera acesso aos recursos protegidos

---

## URL do Webhook

```
https://triadeiaos.com/api/webhooks/cakto
```

**Método:** POST

---

## Payload Esperado do Cakto

```json
{
  "event": "payment.confirmed",
  "transaction_id": "cakto_123456",
  "customer_email": "user@example.com",
  "amount": 147.00,
  "currency": "BRL",
  "product_id": "creditOS-semestral",
  "status": "success",
  "created_at": "2026-07-02T22:30:00Z",
  "metadata": {
    "plan": "semestral",
    "custom_field": "valor"
  }
}
```

### Campos Obrigatórios

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `event` | string | Sempre `payment.confirmed` |
| `transaction_id` | string | ID único do Cakto |
| `customer_email` | string | Email do cliente |
| `amount` | number | Valor pago (97, 147 ou 277) |
| `status` | string | Sempre `success` |
| `created_at` | string | ISO 8601 timestamp |

### Campos Opcionais

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `product_id` | string | ID do produto (creditOS-mensal, creditOS-semestral, creditOS-anual) |
| `currency` | string | Moeda (BRL) |
| `metadata` | object | Dados adicionais |

---

## Mapeamento de Valores → Planos

O webhook mapeia automaticamente baseado no **valor pago**:

| Valor | Plano | Duração | Acesso a Recursos |
|-------|-------|---------|-------------------|
| R$ 97,00 | `mensal` | 1 mês | ❌ Não |
| R$ 147,00 | `semestral` | 6 meses | ✅ Sim |
| R$ 277,00 | `anual` | 1 ano | ✅ Sim |

Se o `product_id` for enviado, usa ele em vez do valor.

---

## Dados no Supabase

Quando o webhook é processado com sucesso, cria ou atualiza a tabela `creditOS_subscriptions`:

```sql
INSERT INTO creditOS_subscriptions (
  user_id,
  plan_type,
  cakto_transaction_id,
  amount,
  active,
  expires_at,
  created_at,
  updated_at
) VALUES (
  'uuid-do-usuario',
  'semestral',
  'cakto_123456',
  147.00,
  true,
  '2026-12-02T22:30:00Z',
  NOW(),
  NOW()
);
```

---

## Fluxo Completo

```
1. Cliente clica em botão Cakto
   ↓
2. Cliente realiza pagamento no Cakto
   ↓
3. Cakto envia POST para https://triadeiaos.com/api/webhooks/cakto
   ↓
4. Webhook recebe payload
   ↓
5. Busca usuário no Supabase pelo email
   ↓
6. Cria/atualiza subscription
   ↓
7. Retorna 200 OK
   ↓
8. Cliente acessa /creditOS/recursos/ → VÊ SUA SUBSCRIPTION → BAIXA ARQUIVOS
```

---

## Setup no Painel Cakto

1. **Acesse:** [painel.cakto.com](https://painel.cakto.com)
2. **Menu:** Configurações → Webhooks
3. **Adicionar novo webhook:**
   - **URL:** `https://triadeiaos.com/api/webhooks/cakto`
   - **Evento:** `payment.confirmed`
   - **Método:** POST
4. **Salvar**

### Testar Webhook

```bash
curl -X POST https://triadeiaos.com/api/webhooks/cakto \
  -H "Content-Type: application/json" \
  -d '{
    "event": "payment.confirmed",
    "transaction_id": "test_123",
    "customer_email": "test@example.com",
    "amount": 147,
    "currency": "BRL",
    "status": "success",
    "created_at": "2026-07-02T22:30:00Z"
  }'
```

Esperado: `{ "ok": true, "message": "Pagamento registrado com sucesso" }`

---

## Logs de Webhook

Os webhooks são registrados em console (Vercel Logs):

```
[Cakto Webhook] {
  event: "payment.confirmed",
  transaction_id: "cakto_123456",
  email: "user@example.com",
  status: "success",
  timestamp: "2026-07-02T22:30:00Z"
}

[Cakto] Subscription criada: {
  user_id: "uuid-123",
  plan_type: "semestral",
  expires_at: "2026-12-02T22:30:00Z"
}
```

---

## Validações

### Email não encontrado

Se o email não existir no Supabase:
- ✅ Webhook retorna 200 (sucesso)
- ⚠️ Subscription **não é criada**
- 📧 TODO: Enviar email de validação ao cliente

**Próximo passo:** Implementar criação automática de usuário ou welcome email.

### Plano calculado incorretamente

Se o valor não for 97, 147 ou 277, o webhook usa lógica de fallback:
- < 120 → `mensal`
- 120–200 → `semestral`
- \> 200 → `anual`

**Recomendação:** Sempre envie o `product_id` para ser seguro.

---

## Checklist de Deploy

- [ ] Webhook rota criada em `/api/webhooks/cakto`
- [ ] Tabela `creditOS_subscriptions` criada no Supabase
- [ ] Variável `SUPABASE_SERVICE_ROLE_KEY` configurada em .env (Vercel)
- [ ] Webhook registrado no painel Cakto
- [ ] Teste de webhook realizado com sucesso
- [ ] Logs verificados no Vercel
- [ ] Usuário de teste realiza pagamento → Verifica se subscription foi criada

---

## Troubleshooting

### Webhook não chega

**Verificar:**
1. URL está correta? `https://triadeiaos.com/api/webhooks/cakto`
2. Endpoint está respondendo? GET `/api/webhooks/cakto` deve retornar 200
3. Logs do Vercel mostram erros?

### Subscription não é criada

**Verificar:**
1. Email no webhook corresponde a usuário no Supabase?
2. Tabela `creditOS_subscriptions` existe?
3. `SUPABASE_SERVICE_ROLE_KEY` está configurada?
4. Logs mostram erro ao inserir?

### Cliente não consegue acessar recursos

**Verificar:**
1. `plan_type` está `semestral` ou `anual` (não `mensal`)?
2. `active` está `true`?
3. `expires_at` é futuro?
4. Supabase auth está funcionando?

---

## Observações de Segurança

⚠️ **TODO:** Implementar validação de assinatura Cakto

Atualmente, qualquer um pode POST para o webhook. Quando Cakto fornecer:
- API Key ou Secret
- Assinatura HMAC

Adicionar validação:

```typescript
// Validar assinatura do webhook
const signature = request.headers.get('x-cakto-signature')
const hash = crypto
  .createHmac('sha256', process.env.CAKTO_WEBHOOK_SECRET!)
  .update(JSON.stringify(payload))
  .digest('hex')

if (signature !== hash) {
  return NextResponse.json({ error: 'Assinatura inválida' }, { status: 401 })
}
```

---

## Próximas Features

- [ ] Enviar email de confirmação ao cliente
- [ ] Webhook para `payment.refunded` → desativar subscription
- [ ] Dashboard do cliente mostrando data de expiração
- [ ] Auto-renovação de subscription (se configurado)
- [ ] Registro de auditoria (tabela de logs)
