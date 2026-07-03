# 🔧 Como Registrar o Webhook Cakto

**Data:** 2026-07-03 | **Status:** PRONTO PARA REGISTRAR

---

## 🎯 O QUE VOCÊ ESTÁ FAZENDO

Você está conectando o Cakto (plataforma de pagamento) ao nosso webhook em:
```
https://triadeiaos.com/api/webhooks/cakto
```

Quando um cliente pagar via Cakto, Cakto automaticamente avisa nosso webhook, que:
1. Salva a transação no Supabase
2. Envia email de confirmação
3. Ativa o acesso do cliente ao CreditOS

---

## 📋 PASSO A PASSO

### PASSO 1: Abrir Dashboard Cakto

1. Abra seu navegador
2. Vá para: **https://admin.cakto.com.br**
3. Faça login com sua conta Cakto
4. Você deve ver um dashboard com estatísticas de pagamentos

---

### PASSO 2: Encontrar Webhooks

No menu esquerdo, procure por:
- ⚙️ **Configurações** ou **Settings**
- **Webhooks** ou **Integrações** ou **API**

Se não conseguir achar, procure em:
- Developer → Webhooks
- Integrações → APIs
- Chat de suporte Cakto (tem um ícone de chat)

---

### PASSO 3: Criar Novo Webhook

Clique em:
- **Adicionar novo webhook** ou
- **Create webhook** ou
- **New webhook** ou
- **+ Webhook**

Você verá um formulário como este:

```
┌─────────────────────────────────────────┐
│  Nome do Webhook: [_______________]      │
│                                         │
│  URL: [https://triadeiaos.com/api/webhooks/cakto]  │
│                                         │
│  Método:  [▼ POST                     ] │
│                                         │
│  Eventos a receber:                    │
│  ☐ payment.confirmed                  │
│  ☑ payment.approved                   │
│  ☑ payment.success                    │
│  ☑ payment.failed                     │
│  ☑ payment.refunded                   │
│  ☑ payment.pending                    │
│                                         │
│  [Gerar Chave Secreta] [Salvar]       │
└─────────────────────────────────────────┘
```

---

### PASSO 4: Preencher os Campos

#### Campo 1: Nome (opcional)
```
Sugestão: "TRÍADE CreditOS"
```

#### Campo 2: URL (OBRIGATÓRIO)
**COPIE E COLE EXATAMENTE:**
```
https://triadeiaos.com/api/webhooks/cakto
```

#### Campo 3: Método (deve ser POST)
```
POST
```

#### Campo 4: Eventos (MARQUE ESTES)
- ✅ **payment.approved** ← IMPORTANTE
- ✅ **payment.success** ← IMPORTANTE
- ✅ **payment.failed** ← IMPORTANTE
- ✅ **payment.refunded** ← IMPORTANTE
- ☐ payment.pending (opcional)

---

### PASSO 5: Gerar Chave Secreta (Opcional)

Se você vir um botão **"Gerar Chave Secreta"** ou **"Generate Secret"**:

1. Clique nele
2. Cakto vai gerar algo como: `sk_live_abc123xyz...`
3. **COPIE** essa chave
4. Guarde em um local seguro (você vai adicionar ao `.env` depois)

Se não houver esse botão, não se preocupe — não é obrigatório.

---

### PASSO 6: Salvar o Webhook

1. Clique em **"Salvar"** ou **"Create"** ou **"Save Webhook"**
2. Você deve ver uma mensagem: 
   ```
   ✅ Webhook criado com sucesso!
   ID: wh_abc123xyz
   Status: Ativo
   ```
3. **COPIE O ID DO WEBHOOK** (você vai usar para testes)

---

## ✅ VERIFICAR SE FUNCIONOU

### Teste 1: Health Check (Rápido)

```bash
curl https://triadeiaos.com/api/webhooks/cakto
```

**Resultado esperado:**
```json
{"status":"webhook cakto ativo"}
```

---

### Teste 2: Simular Pagamento

```bash
curl -X POST https://triadeiaos.com/api/webhooks/cakto \
  -H "Content-Type: application/json" \
  -d '{
    "event":"payment.approved",
    "id":"test_123",
    "email":"teste@triadeiaos.com",
    "reference":"CREDITOS_MENSAL",
    "amount":9700
  }'
```

**Resultado esperado:**
```json
{"success":true,"message":"Webhook processado"}
```

---

### Teste 3: Verificar no Supabase

1. Acesse: https://supabase.com/dashboard/project/kxoifalopelzaemliruj
2. SQL Editor → Execute:
```sql
SELECT * FROM cakto_transactions ORDER BY created_at DESC LIMIT 5;
```

**Você deve ver a transação de teste:**
```
id  | cakto_id  | email                 | reference        | amount | status
1   | test_123  | teste@triadeiaos.com  | CREDITOS_MENSAL  | 9700   | paid
```

---

## 🚨 SE ALGO DER ERRADO

| Erro | Causa | Solução |
|------|-------|---------|
| 404 - Página não encontrada | URL errada | Verifique: `https://triadeiaos.com/api/webhooks/cakto` |
| Connection refused | Servidor offline | Aguarde 5 min + recarregue |
| Invalid event type | Evento não marcado | Marque: approved, success, failed, refunded |
| {"ok":false,"error":"..."} | Erro no processamento | Avisa no canal Supabase |

---

## 📞 SUPORTE

Se tiver dúvida:
1. **Canal Supabase:** Envie mensagem para o Parrot
2. **Chat Cakto:** Acesse o chat de suporte no painel deles
3. **Google:** "Cakto como registrar webhook" + sua língua

---

## 📝 CHECKLIST FINAL

- [ ] Abri o dashboard Cakto
- [ ] Encontrei a seção de Webhooks
- [ ] Preenchi a URL: `https://triadeiaos.com/api/webhooks/cakto`
- [ ] Marquei os 4 eventos: approved, success, failed, refunded
- [ ] Cliquei em "Salvar"
- [ ] Copiei o ID do webhook
- [ ] Testei com curl (health check)
- [ ] Testei com curl (pagamento simulado)
- [ ] Verifiquei no Supabase que a transação foi salva
- [ ] ✅ TUDO FUNCIONANDO!

---

**Boa sorte! Se tiver qualquer dúvida, avisa no canal Supabase! 🚀**

— Claude Parrot, CTO TRÍADE IA
