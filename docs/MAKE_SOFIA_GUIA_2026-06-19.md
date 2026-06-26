# Make.com — Guia Completo: Agente Sofia no WhatsApp
**Data:** 2026-06-19 | **Status:** Configuração e diagnóstico de problemas

---

## STACK TÉCNICA

| Componente | Valor |
|---|---|
| Z-API Instância | `3F49A518CC8762353E3F724633E5F542` |
| Z-API Token | `56B82265F5698B70C813FF6C` |
| Z-API URL base | `https://api.z-api.io/instances/3F49A518CC8762353E3F724633E5F542/token/56B82265F5698B70C813FF6C` |
| Número Sofia | `6496123145` (WhatsApp Business) |
| Webhook Make.com | `https://hook.us2.make.com/oy6je6mytonu42ln8uccypo17qly6mbu` |
| Claude API Key | Ver arquivo CREDENCIAIS SOFIA_atual_14jun2026.txt |
| Modelo Claude | `claude-haiku-4-5-20251001` |

---

## ESTRUTURA DO CENÁRIO NO MAKE.COM

```
[1] Webhook (Custom)
    ↓
[2] Filter: só mensagens de texto, não grupos
    ↓
[3] HTTP: chamar Claude API
    ↓
[4] HTTP: enviar resposta via Z-API
```

---

## MÓDULO 1 — WEBHOOK (já configurado)

- Tipo: **Webhooks → Custom webhook**
- URL: `https://hook.us2.make.com/oy6je6mytonu42ln8uccypo17qly6mbu`
- Esta URL deve estar cadastrada no Z-API como webhook de entrada

**Para verificar no Z-API:**
1. Acesse https://app.z-api.io/app
2. Selecione a instância da Sofia
3. Vá em "Webhooks" → "On Message Received"
4. Confirme que a URL acima está cadastrada

**Estrutura do payload Z-API recebido:**
```json
{
  "phone": "5564999999999@c.us",
  "fromMe": false,
  "momment": 1234567890,
  "status": "RECEIVED",
  "chatName": "Nome do Contato",
  "senderName": "Nome do Contato",
  "senderPhoto": "...",
  "text": {
    "message": "Olá, quero saber sobre IA"
  },
  "isGroup": false,
  "instanceId": "3F49A518CC8762353E3F724633E5F542",
  "messageId": "ABC123"
}
```

---

## MÓDULO 2 — FILTER (Filtro)

Adicionar um filtro **após o webhook** para evitar processar mensagens indesejadas.

Condições (todas devem ser verdadeiras):
1. `{{1.isGroup}}` = `false` (ignorar grupos)
2. `{{1.fromMe}}` = `false` (ignorar mensagens enviadas pela própria Sofia)
3. `{{1.text.message}}` exists (só processar mensagens de texto)

---

## MÓDULO 3 — HTTP: CLAUDE API

- Tipo: **HTTP → Make a request**
- URL: `https://api.anthropic.com/v1/messages`
- Método: **POST**

**Headers:**
```
x-api-key: [sua chave Claude API]
anthropic-version: 2023-06-01
content-type: application/json
```

**Body (JSON raw):**
```json
{
  "model": "claude-haiku-4-5-20251001",
  "max_tokens": 500,
  "system": "[COLE AQUI O SYSTEM PROMPT DO ARQUIVO SOFIA_SYSTEM_PROMPT.md]",
  "messages": [
    {
      "role": "user",
      "content": "{{1.text.message}}"
    }
  ]
}
```

> ⚠️ Substitua `{{1.text.message}}` pelo mapeamento correto do campo de texto do webhook (módulo 1).

**Resposta esperada da Claude API:**
```json
{
  "content": [
    {
      "type": "text",
      "text": "Olá! Sou a Sof[IA]..."
    }
  ]
}
```

Para extrair o texto da resposta: `{{3.content[].text}}` ou `{{3.content[1].text}}`

---

## MÓDULO 4 — HTTP: Z-API ENVIAR MENSAGEM

- Tipo: **HTTP → Make a request**
- URL: `https://api.z-api.io/instances/3F49A518CC8762353E3F724633E5F542/token/56B82265F5698B70C813FF6C/send-text`
- Método: **POST**

**Headers:**
```
content-type: application/json
Client-Token: [token de segurança do Z-API — ver painel Z-API em "Security Token"]
```

**Body:**
```json
{
  "phone": "{{1.phone}}",
  "message": "{{3.content[1].text}}"
}
```

> ⚠️ O campo `phone` deve ter o formato `5564999999999` (com DDI, sem @c.us). Se o Z-API enviar `5564999999999@c.us`, use uma função de texto para remover o `@c.us`:
> `{{replace(1.phone; "@c.us"; "")}}`

---

## PROBLEMAS COMUNS E SOLUÇÕES

### Problema 1: Cenário não dispara
**Causa provável:** Webhook não está configurado no Z-API  
**Solução:** No painel Z-API → instância da Sofia → Webhooks → "On Message Received" → adicionar a URL do Make.com

### Problema 2: Erro 401 na Claude API
**Causa provável:** API Key incorreta ou expirada  
**Solução:** Usar a chave marcada como [CHAVE ATUAL 14062026 - ATIVA] no arquivo de credenciais

### Problema 3: Erro no header Claude API
**Causa provável:** Falta o header `anthropic-version`  
**Solução:** Adicionar header `anthropic-version: 2023-06-01` obrigatoriamente

### Problema 4: Resposta em branco ou erro no Z-API send
**Causa provável:** O mapeamento do texto da resposta Claude está errado  
**Solução:** Verificar se o campo é `{{3.content[1].text}}` ou `{{3.content[].text}}` — depende de como o Make.com parseia o array. Testar com "Run once" e inspecionar o output do módulo 3.

### Problema 5: Z-API retorna erro 405 ou 401 no envio
**Causa provável:** Falta o `Client-Token` no header  
**Solução:** No painel Z-API → instância → "Security" → copiar o Client-Token e adicionar ao header

### Problema 6: Loop infinito (Sofia respondendo a si mesma)
**Causa provável:** O filtro `fromMe = false` não está ativo  
**Solução:** Adicionar o filtro do Módulo 2 corretamente

---

## ENDPOINT Z-API CORRETO PARA ENVIO

```
POST https://api.z-api.io/instances/{INSTANCE_ID}/token/{TOKEN}/send-text
```

Com body:
```json
{
  "phone": "5564999999999",
  "message": "Texto da resposta"
}
```

> O número deve estar no formato internacional sem `+` e sem espaços.
> Exemplo: número `(64) 99999-9999` → `5564999999999`

---

## CHECKLIST DE ATIVAÇÃO

- [ ] Webhook Z-API configurado apontando para a URL do Make.com
- [ ] Instância Z-API da Sofia está conectada (QR Code escaneado, status "Connected")
- [ ] Filtro para ignorar grupos e mensagens próprias configurado
- [ ] Claude API Key válida e ativa inserida no módulo HTTP
- [ ] Header `anthropic-version: 2023-06-01` presente
- [ ] Mapeamento do texto da resposta Claude correto (`content[1].text`)
- [ ] Client-Token Z-API no header de envio
- [ ] Número de telefone sem `@c.us` no envio
- [ ] Cenário ATIVO no Make.com (botão verde)
- [ ] Teste manual: enviar mensagem para 6496123145 e verificar resposta
