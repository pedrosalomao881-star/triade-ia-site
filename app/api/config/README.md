# API de Configurações — /api/config

Endpoint para gerenciar chaves de configuração e credenciais do sistema SOAF/TRÍADE.

## Setup Inicial

1. **Executar SQL no Supabase:**
   - Abra o SQL Editor em https://app.supabase.com/project/kxoifalopelzaemliruj/sql
   - Execute o conteúdo de `SETUP_SQL.sql`
   - Isso cria a tabela `soaf_config` com segurança RLS

2. **Variáveis de Ambiente:**
   - Certifique-se de que `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` estão definidas

## Endpoints

### 1. POST /api/config
**Salvar ou atualizar uma configuração**

```bash
curl -X POST http://localhost:3000/api/config \
  -H "Content-Type: application/json" \
  -d '{
    "key": "ANTHROPIC_API_KEY",
    "value": "sk-ant-abc123xyz..."
  }'
```

**Response (sucesso 200):**
```json
{
  "success": true,
  "message": "Configuração ANTHROPIC_API_KEY salva com sucesso no servidor",
  "data": {
    "key": "ANTHROPIC_API_KEY",
    "lastUpdated": "2026-07-10T16:11:18.000Z",
    "savedOnServer": true
  }
}
```

**Validações:**
- Chaves `ANTHROPIC_API_KEY` devem começar com `sk-ant-`
- Ambos `key` e `value` são obrigatórios

---

### 2. GET /api/config?key=ANTHROPIC_API_KEY
**Recuperar uma configuração**

```bash
curl http://localhost:3000/api/config?key=ANTHROPIC_API_KEY
```

**Response (sucesso 200):**
```json
{
  "success": true,
  "key": "ANTHROPIC_API_KEY",
  "value": "sk-ant-abc123xyz...",
  "lastUpdated": "2026-07-10T16:11:18.000Z"
}
```

**Erros:**
- 404: Configuração não encontrada
- 400: Parâmetro `key` faltando

---

### 3. DELETE /api/config
**Deletar uma configuração**

```bash
curl -X DELETE http://localhost:3000/api/config \
  -H "Content-Type: application/json" \
  -d '{"key": "ANTHROPIC_API_KEY"}'
```

**Response (sucesso 200):**
```json
{
  "success": true,
  "message": "Configuração ANTHROPIC_API_KEY deletada com sucesso"
}
```

---

## Integração no Frontend

**Exemplo: Salvar chave na página de configurações**

```typescript
async function salvarChave(chave: string) {
  try {
    const response = await fetch('/api/config', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        key: 'ANTHROPIC_API_KEY',
        value: chave
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Erro:', error.error);
      return false;
    }

    const data = await response.json();
    console.log('✅ Salvo no servidor:', data.message);
    return true;
  } catch (err) {
    console.error('Erro de rede:', err);
    return false;
  }
}

// Usar:
const sucesso = await salvarChave(document.getElementById('api-key').value);
if (sucesso) {
  alert('Chave salva com sucesso no servidor!');
  document.getElementById('error-msg').style.display = 'none';
}
```

---

## Segurança

⚠️ **Importante:**
- Essas chaves são **sensíveis** e devem ser transmitidas via HTTPS
- O Supabase RLS garante que apenas usuários autenticados possam acessar
- Considere adicionar rate limiting no frontend/backend
- Não armazene chaves em localStorage para produção (use sessionStorage com TTL)

---

## Troubleshooting

### "Erro ao salvar no servidor — salvo apenas no navegador"
**Causa:** A rota `/api/config` retornou erro
**Solução:**
1. Verifique se a tabela `soaf_config` foi criada (execute `SETUP_SQL.sql`)
2. Verifique se as variáveis de ambiente do Supabase estão corretas
3. Verifique logs do servidor (vercel logs ou console)

### "Chave Anthropic inválida"
**Causa:** Chave não começa com `sk-ant-`
**Solução:** Copie a chave completa do dashboard Anthropic (https://console.anthropic.com/account/keys)

---

## Chaves Suportadas

| Chave | Validação | Exemplo |
|-------|-----------|---------|
| `ANTHROPIC_API_KEY` | Começa com `sk-ant-` | `sk-ant-abc123xyz...` |
| `OPENAI_API_KEY` | Começa com `sk-` | `sk-proj-...` |
| `GOOGLE_API_KEY` | Sem validação | Qualquer string |
| `CUSTOM_CONFIG` | Sem validação | Qualquer string |

---

**Última atualização:** 2026-07-10  
**Criado por:** Claude Windows
