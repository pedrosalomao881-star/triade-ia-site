# Plano de Teste — Pagamento Real via Cakto

## ✅ Pré-requisitos

- [ ] Landing `/creditOS/saldo-credor/` funcionando (sem 404)
- [ ] Webhook `/api/webhooks/cakto` respondendo com 200
- [ ] Tabela `creditOS_subscriptions` criada no Supabase
- [ ] Tabela `cakto_transactions` criada no Supabase
- [ ] `RESEND_API_KEY` configurada no Vercel (para emails)
- [ ] Cakto webhook configurado apontando para `/api/webhooks/cakto`

---

## 🧪 Teste de Pagamento Completo

### **Passo 1: Verificar Landing Page (5 min)**

```
URL: https://triadeiaos.com/creditOS/saldo-credor/
```

**O que procurar:**
- ✅ Headline: "Sua empresa está com dinheiro parado no balanço"
- ✅ 3 cards de pricing: R$ 97, R$ 147, R$ 277
- ✅ Countdown pulsante até 31/12/2026
- ✅ Botões com links Cakto visíveis
- ✅ Sem erro 404

**Se houver 404:**
- Hard refresh (Ctrl+Shift+Del)
- Aguardar 3 minutos (Vercel build)
- Notificar Parrot

---

### **Passo 2: Simular Pagamento (10 min)**

**Escolher uma rota:**

#### **Opção A: Pagamento Real com Test Card**
1. Clique em "Assinar Semestral" (R$ 147,00)
2. Na página do Cakto, use test card:
   - Número: `4111 1111 1111 1111`
   - Validade: `12/25`
   - CVV: `123`
3. Complete o checkout com email de teste:
   ```
   test@triadeiaos.com (ou seu email)
   ```

#### **Opção B: Simular via cURL (mais rápido)**
```bash
curl -X POST https://triadeiaos.com/api/webhooks/cakto \
  -H "Content-Type: application/json" \
  -d '{
    "event": "payment.success",
    "id": "test_' $(date +%s) '",
    "status": "success",
    "email": "test@triadeiaos.com",
    "amount": 147,
    "reference": "TEST-SEMESTRAL"
  }'
```

**Esperado:**
```json
{
  "success": true,
  "message": "Webhook processado"
}
```

---

### **Passo 3: Verificar Webhook (2 min)**

**Acessar logs do Vercel:**
```
https://vercel.com/pedrosalomao881-star/triade-ia-site
→ Deployments → Latest → Functions → /api/webhooks/cakto → Logs
```

**O que procurar:**
```
[Cakto Webhook] {
  timestamp: "2026-07-02T23:00:00Z",
  event: "payment.success",
  transactionId: "test_xxx",
  status: "success"
}

[Cakto] Pagamento salvo em BD: xxx
```

Se não aparecer:
- ❌ Webhook não foi acionado
- Verifique se o JSON está correto
- Verifique se Cakto está enviando para URL correta

---

### **Passo 4: Verificar Banco de Dados (3 min)**

**Supabase Studio:**
1. Abra: https://supabase.com/dashboard
2. Projeto: `kxoifalopelzaemliruj`
3. Tabela: `cakto_transactions`

**O que procurar:**
```
Coluna          | Valor
─────────────────────────────
cakto_id        | test_xxx
email           | test@triadeiaos.com
amount          | 147
status          | 'paid'
reference       | TEST-SEMESTRAL
created_at      | 2026-07-02 23:00:00
```

Se não aparecer:
- ❌ Webhook não salvou em BD
- Verifique `SUPABASE_SERVICE_ROLE_KEY`
- Verifique logs do webhook

---

### **Passo 5: Verificar Autenticação (5 min)**

**Criar usuário no Supabase:**
1. Supabase Studio → Authentication → Users
2. Clique em "Create new user"
3. Email: `test@triadeiaos.com`
4. Password: qualquer uma
5. Clique em "Create user"

**Depois, criar subscription:**
1. Tabela: `creditOS_subscriptions`
2. Clique em "Insert row"
3. Preencha:
   ```
   user_id         | [copy do user_id acima]
   plan_type       | 'semestral'
   cakto_transaction_id | 'test_xxx'
   amount          | 147
   active          | true
   expires_at      | 2026-12-02 (data + 6 meses)
   ```

---

### **Passo 6: Testar Acesso a Recursos (5 min)**

**Acessar página protegida:**
```
https://triadeiaos.com/creditOS/recursos/
```

**Esperado (se não autenticado):**
```
"Você precisa estar autenticado para acessar os recursos"
+ Botão "Fazer login ou assinar"
```

**Para autenticar:**
1. Supabase Auth UI (seria necessário implementar)
2. OU acessar com token manualmente via API

**Verificar endpoint:**
```bash
curl https://triadeiaos.com/api/messages
```

Deve retornar array de mensagens não lidas.

---

## 📊 Checklist de Sucesso

- [ ] Landing page abre sem erro
- [ ] Clique em botão Cakto leva ao checkout
- [ ] Pagamento é processado (real ou simulado)
- [ ] Webhook recebe POST com 200 OK
- [ ] Webhook cria/atualiza `cakto_transactions`
- [ ] Webhook cria/atualiza `creditOS_subscriptions`
- [ ] Email de confirmação enviado (se Resend configurado)
- [ ] Usuário consegue acessar `/creditOS/recursos/`
- [ ] Usuário consegue baixar arquivos protegidos

---

## 🔴 Se algo falhar

| Erro | Causa Provável | Solução |
|------|-----------------|---------|
| Landing 404 | Vercel ainda buildando | Aguardar 5 min, hard refresh |
| Webhook 404 | Rota não registrada | Verificar Next.js build logs |
| Webhook 500 | Erro no código | Ver Vercel logs, procurar `console.error` |
| BD vazia | Supabase não conectado | Verificar `SUPABASE_SERVICE_ROLE_KEY` |
| Email não chega | Resend não configurado | Adicionar `RESEND_API_KEY` em Vercel |
| Usuário sem acesso | Subscription não criada | Verificar webhook salvou em BD |

---

## 📈 Fluxo Esperado (Visual)

```
Usuario
   ↓
https://triadeiaos.com/creditOS/saldo-credor/
   ↓ (clica "Assinar Semestral")
https://pay.cakto.com.br/tat5gnh (Cakto checkout)
   ↓ (paga R$ 147,00)
Cakto envia POST → /api/webhooks/cakto
   ↓
Webhook processa:
  1. Busca user_id pelo email
  2. Calcula plano = 'semestral'
  3. Calcula expires_at = +6 meses
  4. Cria/atualiza creditOS_subscriptions
  5. Salva transação em cakto_transactions
  6. Envia email via Resend
   ↓
Usuario acessa https://triadeiaos.com/creditOS/recursos/
   ↓
Supabase verifica: plan_type = 'semestral' ✅
   ↓
Usuario VÊ:
  • Planilha de cálculo (download)
  • Checklist (download)
  • Email template (download)
  • Jurisprudência STJ (download)
   ✅ SUCESSO!
```

---

## 🎯 Próximos Passos após Sucesso

1. Fazer 2-3 mais pagamentos (diferentes planos)
2. Testar refund (se Cakto suportar)
3. Monitorar emails em produção
4. Configurar alertas no Vercel/Supabase
5. Documentar runbook de suporte

---

## 📞 Contatos de Suporte

- **Vercel Issues:** https://vercel.com/support
- **Supabase Issues:** https://supabase.com/docs
- **Cakto Issues:** Suporte Cakto (inserir email/telefone)
- **Resend Issues:** https://resend.com/support
