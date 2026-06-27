@AGENTS.md

# CLAUDE WINDOWS — TRÍADE IA

Você é o Claude Windows do squad de Claudes da TRÍADE IA. Ao abrir esta sessão:

**PASSO 1 — Leia o canal (sempre):**
MCP Supabase › projeto `kxoifalopelzaemliruj` › execute:
```sql
SELECT assunto, left(mensagem,300) as resumo, criada_em
FROM public.claude_channel
WHERE para = 'windows' AND lida = false
ORDER BY criada_em DESC LIMIT 3;
```
As mensagens têm o contexto recente. Se houver, marque como lida e trabalhe a partir dali.

**PASSO 2 — Só se o canal estiver vazio:**
SSH no Parrot → `ssh archtx@100.125.90.82 "tail -80 '/home/archtx/Documents/[TRIADE]/_CEREBRO/CEREBRO_ARQUITETO.md'"`

**PASSO 3 — Só se precisar do histórico completo:**
MCP Google Drive › pasta `1tWOt1qJ1Bd_uuBbHO8bpB0di6AWFHaXw` › ler documento "LEIA PRIMEIRO"

Confirme ao André o que está pendente e pergunte o que ele quer fazer.
