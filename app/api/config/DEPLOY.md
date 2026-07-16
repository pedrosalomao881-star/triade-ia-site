# Deploy — Correção do Erro de Salvamento de Chave

## Problema
Página de Configurações retorna: **"Erro ao salvar no servidor — salvo apenas no navegador"**

## Solução Implementada

### 1. Nova Rota de API
✅ Criada: `/app/api/config/route.ts`
- POST: Salvar/atualizar configuração
- GET: Recuperar configuração
- DELETE: Deletar configuração
- Validações: Chaves Anthropic validam formato `sk-ant-*`

### 2. Novo Componente React
✅ Criado: `/app/components/ConfigKeyForm.tsx`
- Formulário reutilizável para salvar chaves
- Fallback local em caso de erro
- Feedback visual (sucesso/erro)

### 3. Nova Página de Configurações
✅ Criada: `/app/interno/configuracoes/page.tsx`
- Integra o componente ConfigKeyForm
- Mostra status do sistema
- Interface idêntica ao print do usuário

### 4. Migration SQL
✅ Criada: `/app/api/config/SETUP_SQL.sql`
- Tabela `soaf_config` com campos: id, key, value, timestamps
- Row Level Security (RLS) habilitado
- Índices para performance

---

## Passos de Deploy

### Passo 1: Executar SQL no Supabase
```bash
# 1. Abrir https://app.supabase.com/project/kxoifalopelzaemliruj/sql
# 2. Copiar conteúdo de app/api/config/SETUP_SQL.sql
# 3. Executar
```

**Saída esperada:**
```
CREATE TABLE
CREATE INDEX
ALTER TABLE
CREATE POLICY (x3)
```

---

### Passo 2: Deploy para Vercel
```bash
cd C:/triade-ia-site

# 1. Commit dos arquivos
git add -A
git commit -m "feat(config): Corrigir salvamento de chaves de API

- Adicionar rota /api/config (POST/GET/DELETE)
- Componente ConfigKeyForm para interface
- Página /interno/configuracoes integrada
- Migration SQL para tabela soaf_config"

# 2. Push (batched, não rebuild múltiplo)
git push origin main
```

**Verificar deploy:**
- https://soaf-triade.vercel.app/interno/configuracoes → deve carregar
- Tentar salvar uma chave → deve retornar sucesso no servidor

---

### Passo 3: Testar Integração

**Test 1: Salvar chave (curl)**
```bash
curl -X POST https://soaf-triade.vercel.app/api/config \
  -H "Content-Type: application/json" \
  -d '{
    "key": "ANTHROPIC_API_KEY",
    "value": "sk-ant-abc123xyz..."
  }'
```

**Test 2: Recuperar chave**
```bash
curl https://soaf-triade.vercel.app/api/config?key=ANTHROPIC_API_KEY
```

**Test 3: UI (manual)**
1. Abrir https://soaf-triade.vercel.app/interno/configuracoes
2. Copiar chave do https://console.anthropic.com/account/keys
3. Colar em "Chave SK (Anthropic)"
4. Clicar "Salvar chave"
5. Resultado: **✓ Salva no servidor: sk-ant-...xyz**

---

## Troubleshooting

### Erro: "Erro ao salvar no servidor"
**Verificar:**
1. Tabela `soaf_config` existe no Supabase?
   ```sql
   SELECT * FROM public.soaf_config LIMIT 1;
   ```

2. Variáveis de ambiente corretas?
   ```bash
   echo $NEXT_PUBLIC_SUPABASE_URL
   echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```

3. Logs de erro?
   ```bash
   vercel logs soaf-triade
   ```

### Erro: "Chave Anthropic inválida"
- Copiar chave **completa** de https://console.anthropic.com
- Deve começar com `sk-ant-`
- Exemplo correto: `sk-ant-abc123XYZ...opqrst1234567890`

### Teste local antes de deploy
```bash
cd C:/triade-ia-site
npm run dev

# Abrir http://localhost:3000/interno/configuracoes
```

---

## Arquivos Modificados/Criados

| Arquivo | Tipo | Status |
|---------|------|--------|
| `/app/api/config/route.ts` | **Criado** | ✅ |
| `/app/api/config/SETUP_SQL.sql` | **Criado** | ✅ |
| `/app/api/config/README.md` | **Criado** | ✅ |
| `/app/api/config/DEPLOY.md` | **Criado** | ✅ |
| `/app/components/ConfigKeyForm.tsx` | **Criado** | ✅ |
| `/app/interno/configuracoes/page.tsx` | **Criado** | ✅ |

---

## Rollback (se necessário)

```bash
git revert HEAD --no-edit
git push origin main
```

Vercel automaticamente fará redeploy da versão anterior.

---

## Próximos Passos (Opcional)

1. **Autenticação:** Adicionar check de auth no `/api/config`
   ```typescript
   const user = await getCurrentUser(); // Se implementado
   if (!user?.isAdmin) return 401;
   ```

2. **Rate Limiting:** Proteger contra brute force
   ```typescript
   import { Ratelimit } from '@upstash/ratelimit';
   ```

3. **Auditoria:** Logar who changed what when
   ```typescript
   await logConfigChange(key, oldValue, newValue, user.id);
   ```

4. **Encryption:** Criptografar valores sensíveis
   ```typescript
   const encrypted = await encryptValue(value);
   ```

---

**Deploy feito por:** Claude Windows  
**Data:** 2026-07-10  
**Versão:** v1.0
