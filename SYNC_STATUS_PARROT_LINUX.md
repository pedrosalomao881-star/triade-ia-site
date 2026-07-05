# 🔄 SYNC STATUS - JARVIS ↔ PARROT LINUX

**Link Google Drive Claudes:**  
https://drive.google.com/drive/folders/1tWOt1qJ1Bd_uuBbHO8bpB0di6AWFHaXw

---

## 📋 BRIEFING PARA PARROT LINUX

### Objetivo
Colocar 3 subdomínios NO AR para MVP validation (Cakto) até segunda-feira (2026-07-07).

### Subdomínios Esperados
```
app-contabos.triadeiaos.com      → ContabOS Sistema (Dashboard)
soaf-empresa.triadeiaos.com      → SOAF Empresário (Sistema)
soaf-contador.triadeiaos.com     → SOAF Contador (Sistema)
```

### Status Atual
❌ **CRÍTICO**: Todos retornam HOME do site (Reforma Tributária)  
⏰ **Tempo de retrabalho**: Desde sexta-feira (5 dias)  
🎯 **Prioridade**: MÁXIMA

### Arquivos Originais (Parrot Linux)
Verificar existência e validar:
- `C:\TRIADE WINDOWS\PRODUTOS\ContabOS\contabos-sistema.html` (134 KB)
- `C:\TRIADE WINDOWS\PRODUTOS\soaf-privado\soaf-privado-sistema.html` (85 KB - usado para ambos Empresa e Contador)

### Arquivos no GitHub (Windows/Vercel)
```
git@github.com:pedrosalomao881-star/triade-ia-site.git
Branch: main
Commit: d73f68b

Estrutura:
public/contabos/sistema/index.html         ✅
public/soaf-empresa/index.html             ✅
public/soaf-contador/index.html            ✅

app/contabos-app/page.tsx                  ✅
app/soaf-empresa-app/page.tsx              ✅
app/soaf-contador-app/page.tsx             ✅

middleware.ts                              ✅
```

---

## 🔍 DIAGNÓSTICO NECESSÁRIO (PARROT LINUX)

### 1. Validar Arquivos HTML
```bash
file C:\TRIADE\ WINDOWS\PRODUTOS\ContabOS\contabos-sistema.html
file C:\TRIADE\ WINDOWS\PRODUTOS\soaf-privado\soaf-privado-sistema.html
```

Questões:
- São arquivos SPA completos (index.html com CSS/JS inline)?
- Ou precisa de pasta /assets ou /dist?
- Têm dependências de servidor (API, backend)?

### 2. Testar Isoladamente
- Abrir o arquivo HTML localmente em navegador
- Funciona? (DOM, interações, dados mock?)
- Se não, qual é o erro? (console)

### 3. Estrutura de Deployment
Sugestões:
- Copiar assets junto com HTML?
- Usar servidor estático (http-server, python -m http.server)?
- Ou integrar com N8N/Evolution API em Parrot?

---

## 🛠️ TENTATIVAS WINDOWS/VERCEL

### Commit 1: `75908a5`
- Middleware redireciona hosts para páginas
- Páginas usam `readFileSync` + `dangerouslySetInnerHTML`
- **Resultado**: 404 ou HOME padrão

### Commit 2: `b8d8cef`
- API routes para servir HTML
- Middleware redireciona para `/api/contabos-system`
- **Resultado**: API routes retornam 404

### Commit 3: Vários anteriores
- Rewrites em next.config.ts
- SOAF subdomínios no Vercel
- next.config rewrites com `has[type:host]`

---

## ⚡ OPÇÕES TÉCNICAS

### Opção A: Server-Side Rendering (Next.js)
```tsx
export async function getServerSideProps() {
  const html = readFileSync('...');
  return { props: { html } };
}
```
**Problema**: Vercel pode não ter permissão de acesso a arquivos

### Opção B: Static Files (Nginx/Vercel)
```nginx
server_name app-contabos.triadeiaos.com;
root /var/www/contabos/;
index index.html;
```
**Problema**: Vercel não permite nginx customizado

### Opção C: CDN + Static Export
- Exportar HTML para CDN
- Configurar Cloudflare Workers para redirecionar subdomínios
- **Vantagem**: Funciona em edge, sem dependência de Vercel API

### Opção D: Proxy Reverso (Parrot Linux)
- Parrot Linux hospedar os HTMLs nativamente
- Usar Cloudflare CNAME para apontar subdomínios para Parrot
- **Vantagem**: Simples, funciona garantido

---

## 📞 PRÓXIMAS AÇÕES

### Imediato (Hoje):
1. Parrot Linux: Validar arquivos HTML originais
2. Windows/Vercel: Ajustar approach baseado em feedback Parrot

### Curto Prazo (2ª-feira):
1. Implementar solução escolhida
2. Testar subdomínios em produção
3. Comunicar com Cakto para validação MVP

---

**Gerado por**: JARVIS Claude Windows  
**Timestamp**: 2026-07-05 18:22 UTC  
**Próxima sincronização**: Quando Parrot Linux responder  

**Parrot Linux**: Favor responder com:
- ✅ ou ❌ - Arquivos HTML existem?
- Estrutura dos arquivos (assets, dependências)?
- Sugestão de approach melhor?
