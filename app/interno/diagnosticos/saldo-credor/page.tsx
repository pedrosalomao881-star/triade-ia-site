'use client'
import { useEffect } from 'react'

declare global {
  interface Window {
    switchTab: (i: number) => void
    downloadHTML: (docId: string) => void
  }
}

const CSS = `
:root {
  --bg:        #0a0a0a;
  --surface:   #111111;
  --surface2:  #1a1a1a;
  --border:    #222222;
  --border2:   #2e2e2e;
  --indigo:    #6366f1;
  --indigo-lt: #818cf8;
  --indigo-dk: #4f46e5;
  --amber:     #f59e0b;
  --emerald:   #10b981;
  --text:      #f0f0f0;
  --muted:     #6b7280;
  --muted2:    #9ca3af;
  --code-bg:   #161616;
  --radius:    8px;
}
.sc-header {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 48px 40px 36px;
  text-align: center;
}
.sc-header .badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--indigo-lt);
  background: rgba(99,102,241,.12);
  border: 1px solid rgba(99,102,241,.25);
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 20px;
}
.sc-header h1 {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -.02em;
  color: var(--text);
  margin-bottom: 8px;
}
.sc-header p { color: var(--muted2); font-size: 14px; }
.tabs-wrap {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0 40px;
  display: flex;
  gap: 4px;
}
.tab-btn {
  padding: 14px 20px;
  border: none;
  background: none;
  color: var(--muted);
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: color .2s, border-color .2s;
  white-space: nowrap;
}
.tab-btn:hover { color: var(--text); }
.tab-btn.active { color: var(--indigo-lt); border-bottom-color: var(--indigo); }
.sc-doc { display: none; max-width: 860px; margin: 0 auto; padding: 48px 40px 80px; }
.sc-doc.active { display: block; }
.sc-controls { display: flex; gap: 10px; margin-bottom: 40px; flex-wrap: wrap; }
.sc-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 9px 18px; border-radius: var(--radius);
  font-family: inherit; font-size: 13px; font-weight: 500;
  cursor: pointer; border: 1px solid transparent;
  transition: all .2s;
}
.sc-btn-primary { background: var(--indigo); color: #fff; border-color: var(--indigo); }
.sc-btn-primary:hover { background: var(--indigo-dk); border-color: var(--indigo-dk); }
.sc-btn-secondary { background: var(--surface2); color: var(--muted2); border-color: var(--border2); }
.sc-btn-secondary:hover { color: var(--text); border-color: var(--indigo); }
.sc-toc {
  background: var(--surface2);
  border: 1px solid var(--border2);
  border-radius: var(--radius);
  padding: 20px 24px;
  margin-bottom: 40px;
}
.sc-toc-title {
  font-size: 11px; font-weight: 600; letter-spacing: .08em;
  text-transform: uppercase; color: var(--muted); margin-bottom: 12px;
}
.sc-toc ul { list-style: none; }
.sc-toc li { margin-bottom: 6px; }
.sc-toc a { color: var(--muted2); text-decoration: none; font-size: 13px; transition: color .2s; }
.sc-toc a:hover { color: var(--indigo-lt); }
.sc-doc h2 {
  font-size: 20px; font-weight: 700; letter-spacing: -.01em;
  color: var(--text); margin: 48px 0 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}
.sc-doc h2:first-of-type { margin-top: 0; }
.sc-doc h3 { font-size: 16px; font-weight: 600; color: var(--indigo-lt); margin: 32px 0 12px; }
.sc-doc h4 {
  font-size: 11px; font-weight: 600; color: var(--muted);
  text-transform: uppercase; letter-spacing: .07em; margin: 20px 0 8px;
}
.sc-doc p { color: var(--muted2); margin-bottom: 14px; }
.sc-doc strong { color: var(--text); font-weight: 600; }
.sc-doc em { color: var(--muted2); font-style: italic; }
.sc-doc ul, .sc-doc ol { margin: 0 0 14px 20px; color: var(--muted2); }
.sc-doc li { margin-bottom: 6px; }
.sc-doc pre {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-left: 3px solid var(--indigo);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin: 16px 0 20px;
  overflow-x: auto;
  font-family: 'SF Mono', 'Fira Mono', 'Consolas', monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #c9d1d9;
  white-space: pre;
}
.sc-doc code {
  font-family: 'SF Mono', 'Fira Mono', 'Consolas', monospace;
  font-size: 12px;
  background: var(--code-bg);
  border: 1px solid var(--border2);
  color: var(--indigo-lt);
  padding: 2px 6px;
  border-radius: 4px;
}
.sc-box {
  border-radius: var(--radius);
  padding: 18px 20px;
  margin: 16px 0 20px;
  border-left: 3px solid;
}
.sc-box-info { background: rgba(99,102,241,.07); border-color: var(--indigo); }
.sc-box-warn { background: rgba(245,158,11,.08); border-color: var(--amber); }
.sc-box-warn p, .sc-box-warn li { color: #f59e0b; }
.sc-box-warn strong { color: #fbbf24; }
.sc-box-ok { background: rgba(16,185,129,.07); border-color: var(--emerald); }
.sc-box-ok p, .sc-box-ok li { color: #10b981; }
.sc-box-ok strong { color: #34d399; }
.sc-box p:last-child { margin-bottom: 0; }
.sc-doc table { width: 100%; border-collapse: collapse; margin: 16px 0 24px; font-size: 14px; }
.sc-doc th {
  background: var(--surface2);
  color: var(--muted);
  font-size: 11px; font-weight: 600;
  text-transform: uppercase; letter-spacing: .06em;
  padding: 10px 14px;
  border: 1px solid var(--border);
  text-align: left;
}
.sc-doc td { padding: 10px 14px; border: 1px solid var(--border); color: var(--muted2); vertical-align: top; }
.sc-doc tr:hover td { background: var(--surface2); }
.sc-section {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 28px 20px;
  margin-bottom: 16px;
  background: var(--surface);
}
.sc-section h3 { margin-top: 0; }
.sc-footer { border-top: 1px solid var(--border); padding: 32px 40px; text-align: center; }
.sc-footer p { color: var(--muted); font-size: 13px; margin-bottom: 4px; }
.sc-footer strong { color: var(--muted2); }
.sc-breadcrumb {
  background: #0d0d0d;
  border-bottom: 1px solid var(--border);
  padding: 10px 40px;
  font-size: 12px;
  font-family: monospace;
}
.sc-breadcrumb a { color: var(--muted); text-decoration: none; transition: color .2s; }
.sc-breadcrumb a:hover { color: var(--indigo-lt); }
@media (max-width: 640px) {
  .sc-header { padding: 32px 20px 24px; }
  .sc-header h1 { font-size: 22px; }
  .tabs-wrap { padding: 0 16px; overflow-x: auto; }
  .sc-doc { padding: 32px 20px 60px; }
  .sc-section { padding: 20px 16px 14px; }
  .sc-breadcrumb { padding: 10px 16px; }
}
@media print {
  .tabs-wrap, .sc-controls, .sc-footer, .sc-breadcrumb { display: none; }
  .sc-doc { display: block !important; }
  .sc-section { border: 1px solid #ddd; background: white; }
  .sc-doc pre { background: #f5f5f5; color: #333; border-left-color: #6366f1; }
}
`

const CONTENT = `
<div class="sc-breadcrumb">
  <a href="/interno/diagnosticos">← Diagnósticos</a>
</div>

<div class="sc-header">
  <div class="badge">TRÍADE IA · Análise Confidencial · Junho 2026</div>
  <h1>Diagnóstico Estratégico — Saldo Credor + IA</h1>
  <p>Recuperação de Créditos Tributários · PIS/COFINS · ICMS · Reforma Tributária 2027</p>
</div>

<div class="tabs-wrap">
  <button class="tab-btn active" onclick="switchTab(0)">Explicação Completa</button>
  <button class="tab-btn" onclick="switchTab(1)">Análise Estratégica</button>
</div>

<div class="sc-doc active" id="sc-doc1">
  <div class="sc-controls">
    <button class="sc-btn sc-btn-primary" onclick="window.print()">Imprimir / PDF</button>
    <button class="sc-btn sc-btn-secondary" onclick="downloadHTML('sc-doc1')">Baixar HTML</button>
  </div>

  <h2>Explicação Completa</h2>
  <p style="color:var(--muted);font-size:13px;margin-bottom:32px;">Quebra do jargão tributário em linguagem acessível.</p>

  <div class="sc-toc">
    <div class="sc-toc-title">Índice</div>
    <ul>
      <li><a href="#s1">1 · Créditos não homologados</a></li>
      <li><a href="#s2">2 · EFD-Contribuições, DCTF e Razão Contábil</a></li>
      <li><a href="#s3">3 · Ativo Não Circulante</a></li>
      <li><a href="#s4">4 · Barreira Probatória na Reforma Tributária</a></li>
      <li><a href="#s5">5 · O Problema Central</a></li>
      <li><a href="#s6">6 · Motor de IA Detalhado</a></li>
      <li><a href="#s7">7 · Cases de Saldo Credor &gt; R$ 100k</a></li>
      <li><a href="#s8">8 · Estratégia LinkedIn — CNJ e CRC</a></li>
      <li><a href="#s9">9 · Agente de Recuperação — Ciclo Completo</a></li>
      <li><a href="#s10">10 · Plano Técnico de Implementação</a></li>
    </ul>
  </div>

  <div id="s1" class="sc-section">
    <h3>1 · Créditos não homologados</h3>
    <h4>O que significa</h4>
    <p>Imagine que você paga <strong>imposto</strong> ao governo toda vez que compra algo para sua empresa.</p>
    <p><strong>Exemplo:</strong> Você compra matéria-prima e paga R$ 1.000 de imposto. Depois vende o produto e paga mais R$ 1.500. A lei permite abater o primeiro do segundo — você paga só R$ 500. Mas esse <strong>direito de abater precisa ser registrado, validado e homologado</strong> (autorizado pelo governo).</p>
    <h4>O problema</h4>
    <p>Muitas empresas não fazem essa validação por falta de tempo, desconhecimento ou burocracia percebida. Resultado: <strong>milhões de créditos ficam na gaveta, sem uso.</strong></p>
    <h4>Dados de mercado</h4>
    <ul>
      <li>60–70% das empresas deixam créditos acumulados sem validação</li>
      <li>Tamanho médio por empresa: <strong>R$ 50k a R$ 500k</strong> (alguns chegam a R$ 5M)</li>
    </ul>
  </div>

  <div id="s2" class="sc-section">
    <h3>2 · EFD-Contribuições, DCTF e Razão Contábil</h3>
    <h4>EFD-Contribuições</h4>
    <p>Arquivo de log mensal enviado ao governo. Registra todas as entradas, impostos pagos em compras e cálculo do imposto a pagar. Analogia: o <code>git log</code> da contabilidade fiscal.</p>
    <pre>MÊS: Janeiro/2026
Vendas:                  R$ 100.000
Imposto pago em compras: R$   8.000
Imposto sobre vendas:    R$  12.000
Diferença:              -R$   4.000  → CRÉDITO (usar depois)</pre>
    <h4>DCTF</h4>
    <p>Relatório oficial que a empresa envia ao governo declarando quanto de imposto tem direito a abater, quanto usará neste mês e quanto guarda para depois.</p>
    <h4>Razão Contábil</h4>
    <p>Registro financeiro bruto de cada transação. Analogia: <code>SELECT * FROM transacoes WHERE data &gt;= '2026-01-01'</code>.</p>
    <pre>01/01/2026 · Compra matéria-prima     R$ 10.000 → Estoque
01/01/2026 · Imposto de entrada        R$  1.200 → Imposto a Recuperar
05/01/2026 · Venda de produto         R$ 15.000 → Receita
05/01/2026 · Imposto de saída         R$  1.800 → Imposto a Pagar</pre>
    <h4>Como o agente usa os três documentos</h4>
    <pre>AGENTE DE IA
──────────────────────────────────────────
1. Lê EFD-Contribuições (XML)
   → extrai: imposto pago, imposto devido

2. Lê DCTF (PDF/TXT)
   → extrai: créditos declarados

3. Lê Razão Contábil (Excel)
   → valida se compras foram legais

4. Cruza os três
   → garante consistência

5. Calcula créditos reais
   → quanto efetivamente pode usar

6. Gera parecer técnico
   → "Você tem R$ 200k de crédito válido.
       Homologue antes da Reforma."</pre>
  </div>

  <div id="s3" class="sc-section">
    <h3>3 · Ativo Não Circulante — onde os créditos dormem</h3>
    <pre>BALANÇO PATRIMONIAL
─────────────────────────────────────────────
ATIVO

├─ ATIVO CIRCULANTE (R$ 100k)
│  ├─ Caixa: R$ 50k          → uso imediato
│  ├─ Estoque: R$ 30k        → vende em 30 dias
│  └─ Contas a receber: R$ 20k
│
└─ ATIVO NÃO CIRCULANTE (R$ 200k)
   ├─ Imobilizado: R$ 100k   → prédios, máquinas
   ├─ Intangível: R$ 80k     → marcas, patentes
   └─ CRÉDITOS TRIBUTÁRIOS: R$ 20k  ← DORMINDO AQUI
      → visíveis no balanço, mas não viram caixa
      → precisam de homologação (6–12 meses)</pre>
    <div class="sc-box sc-box-info">
      <p>Analogia: é como ter <strong>R$ 20k em Bitcoin numa carteira com seed perdida</strong>. O ativo existe — mas não está acessível até o processo ser concluído.</p>
    </div>
  </div>

  <div id="s4" class="sc-section">
    <h3>4 · Barreira Probatória — o gatilho real da Reforma de 2027</h3>
    <p>Em 2027, ICMS e PIS/COFINS são substituídos por <strong>IBS</strong> (estadual) e <strong>CBS</strong> (federal). Créditos antigos precisam ser portados para o novo sistema.</p>
    <pre>CENÁRIO 1 — HOMOLOGAR AGORA
└── Governo reconhece o crédito (ex: R$ 200k)
    └── Portável para IBS/CBS sem dificuldade
    └── Prova: simples (documento emitido pelo governo)

CENÁRIO 2 — NÃO HOMOLOGAR
└── Em 2027, empresa alega: "Tenho R$ 200k do sistema antigo"
    └── Governo: "Cadê a prova? Você não declarou."
    └── Empresa audita 5 anos de registros retroativamente
    └── Custo: R$ 50–100k em auditoria externa
    └── Risco real de perder o crédito por falta de comprovação</pre>
    <div class="sc-box sc-box-warn">
      <p><strong>Janela de ação:</strong> menos de 24 meses. Cada mês sem homologar aumenta o custo e o risco probatório.</p>
    </div>
  </div>

  <div id="s5" class="sc-section">
    <h3>5 · O Problema Central</h3>
    <pre>Empresa recebe nota fiscal de compra
  ↓
Paga imposto na compra: R$ 5.000
  ↓
Registra como "despesa" no sistema contábil
  ↓
NUNCA identifica que poderia recuperar esse imposto
  ↓
Acumula créditos por 5–10 anos sem perceber
  ↓
Descoberta: "Tenho R$ 500k de crédito aqui?"
  ↓
Processo de homologação: 6–12 meses
  ↓
Recuperação: dinheiro entra no caixa</pre>
    <h4>Quem sofre mais</h4>
    <ul>
      <li><strong>Exportadores:</strong> não sabem que exportação isenta o imposto de saída</li>
      <li><strong>Indústrias:</strong> muitos insumos com imposto, sem rastreamento</li>
      <li><strong>Serviços:</strong> energia, aluguel e outros com crédito recuperável ignorado</li>
    </ul>
    <h4>Por que é B2B escalável</h4>
    <ul>
      <li>Não depende de setor específico — qualquer empresa que compra, paga imposto</li>
      <li>Estimativa: 99% das empresas deixam créditos de lado</li>
    </ul>
  </div>

  <div id="s6" class="sc-section">
    <h3>6 · Motor de IA — Funcionamento Detalhado</h3>
    <h4>Ponto 1 — Processamento automático de documentos</h4>
    <p>Hoje um contador abre manualmente XMLs, PDFs e planilhas (4–8 horas). Com o motor:</p>
    <pre>INPUT: pasta com EFD-Contribuições.xml, DCTF.pdf,
       RazaoContabil.xlsx, NotasFiscais.csv

1. Parse XML              →  2 seg
2. Extração PDF           → 10 seg
3. Validação Excel        →  5 seg
4. Identificação de erros → 20 seg
5. Geração de relatório   → 10 seg
──────────────────────────────────
TOTAL: ~1 minuto  (vs. 8 horas manual)</pre>
    <h4>Ponto 2 — Validação por STJ REsp 1.221.170/PR</h4>
    <p>A decisão define: só é crédito válido se o bem/serviço for <strong>essencial para a atividade da empresa</strong>.</p>
    <pre>Contador: "Tenho R$ 10k de crédito de compras diversas"

Agente verifica cada item:
├─ Papel A4:             ✓ essencial
├─ Energia elétrica:     ✓ essencial
├─ Cerveja (festa):      ✗ não essencial
└─ Multa de trânsito:    ✗ não essencial

CRÉDITO VALIDADO: R$ 8.500  (removeu R$ 1.500 inválidos)</pre>
    <h4>Ponto 3 — Regra de proporcionalidade</h4>
    <pre>EMPRESA: exporta 30% + vende internamente 70%

Crédito total de compras: R$ 100.000

Crédito ressarcível (exportação):
  = R$ 100.000 × 30% = R$ 30.000
  → solicitar ressarcimento ao governo

Crédito compensável (mercado interno):
  = R$ 100.000 × 70% = R$ 70.000
  → compensar com impostos futuros</pre>
    <h4>Ponto 4 — Cronograma com alertas antes da Reforma</h4>
    <pre>HOJE (junho/2026)
│
├─ Ação 1: Auditar e validar PIS/COFINS
│  → prazo: 31/12/2026  · urgência: ALTA
│
├─ Ação 2: Homologar créditos de ICMS
│  → prazo: 30/06/2027  · urgência: ALTA
│
└─ Ação 3: Converter créditos antigos no novo sistema
   → prazo: 31/12/2027  · urgência: CRÍTICA

Email automático ao contador:
"Você tem 127 dias para homologar R$ 200k.
 Se não agir, perde. Quer que a gente cuide?"</pre>
  </div>

  <div id="s7" class="sc-section">
    <h3>7 · Cases de Saldo Credor &gt; R$ 100k</h3>
    <pre>CASE 1 — Exportadora de Tecnologia
  Crédito dormindo:  R$ 450.000  (3 anos acumulados)
  Crédito validado:  R$ 380.000
  Honorário (10%):   R$  38.000

CASE 2 — Indústria de Alimentos
  Crédito dormindo:  R$ 250.000  (5 anos)
  Créditos extras encontrados: R$ 80.000
  Total recuperado:  R$ 260.000
  Economia vs. auditoria manual: ~R$ 80.000

CASE 3 — Serviços Profissionais
  Crédito dormindo:  R$ 120.000  (2 anos)
  Validação:         10 dias
  Crédito real:      R$ 115.000
  Honorário (5%):    R$   5.750  · break-even: 1 mês</pre>
    <h4>Potencial de mercado</h4>
    <p>800k empresas × 70% com crédito não homologado × 50% de alcance = <strong>280.000 clientes potenciais</strong>.</p>
  </div>

  <div id="s8" class="sc-section">
    <h3>8 · Estratégia LinkedIn — CNJ e CRC</h3>
    <p>Magistrados, contadores e auditores são os <em>gatekeepers</em> de acesso às empresas com crédito dormindo. LinkedIn técnico é o canal de menor resistência.</p>
    <pre>SEMANA 1 — Conteúdo de autoridade
"Você deixa R$ 200k dormindo?

80% das empresas não sabem que têm direito
a créditos tributários acumulados.

Exportadores: R$ 450k em média.
Indústrias:   R$ 280k em média.

A Reforma Tributária (2027) muda as regras.
Sem homologação agora → auditoria cara depois.

Webinar técnico — quinta-feira."

#Tributação #ICMS #ReformaTributária

SEMANA 2–3: Engajamento com comentários de contadores
SEMANA 4:   Oferta — webinar gratuito
SEMANA 5:   Oferta paga — SaaS</pre>
    <h4>Métricas esperadas</h4>
    <table>
      <thead><tr><th>Métrica</th><th>Estimativa</th></tr></thead>
      <tbody>
        <tr><td>Alcance</td><td>5.000–10.000 contadores/auditores</td></tr>
        <tr><td>CTR</td><td>3–5%</td></tr>
        <tr><td>Leads qualificados</td><td>150–500</td></tr>
        <tr><td>Conversão lead → cliente</td><td>5–10%</td></tr>
        <tr><td>Clientes mensais estimados</td><td>7–50</td></tr>
      </tbody>
    </table>
  </div>

  <div id="s9" class="sc-section">
    <h3>9 · Agente de Recuperação — Ciclo Completo</h3>
    <pre>PASSO 1 — GERAÇÃO
  Empresa compra matéria-prima: R$ 10.000
  Imposto pago: R$ 1.200  →  crédito gerado

PASSO 2 — ACÚMULO (DORMINDO)
  3 anos depois: R$ 1.200 × 12 × 3 = R$ 43.200 dormindo

PASSO 3 — DESCOBERTA
  Contador: "Encontrei R$ 43.200 no balanço."

PASSO 4 — VALIDAÇÃO (agente entra aqui)
  ├─ Crédito válido conforme STJ?
  ├─ Registrado corretamente em EFD/DCTF?
  ├─ Proporcionalidade aplicada?
  └─ Output: "R$ 38.500 válidos para homologação"

PASSO 5 — HOMOLOGAÇÃO
  Governo reconhece o crédito. Processo: 3–6 meses.

PASSO 6 — MONETIZAÇÃO
  Opção A: Compensar imposto futuro
            Deve R$ 50k → paga só R$ 11.500
  Opção B: Ressarcimento em dinheiro (exportadores)
            Governo deposita na conta
  Opção C: Venda do crédito para terceiros
            Recebe caixa imediato (desconto 5–10%)</pre>
  </div>

  <div id="s10" class="sc-section">
    <h3>10 · Plano Técnico de Implementação</h3>
    <table>
      <thead><tr><th>Item</th><th>Detalhe</th></tr></thead>
      <tbody>
        <tr><td>Stack</td><td>React + FastAPI + Python + PostgreSQL + Docker</td></tr>
        <tr><td>Esforço estimado</td><td>160 horas (9–12 semanas)</td></tr>
        <tr><td>Custo (terceirizado)</td><td>R$ 17–50k</td></tr>
        <tr><td>Break-even</td><td>10–15 clientes pagantes</td></tr>
        <tr><td>Margem</td><td>75–80% (produto digital puro)</td></tr>
      </tbody>
    </table>
    <div class="sc-box sc-box-warn">
      <p><strong>Nota:</strong> O plano técnico completo (~15.000 palavras) cobre arquitetura, divisão de tarefas, riscos técnicos e métricas de MVP. Disponível para detalhamento sob demanda.</p>
    </div>
  </div>
</div>

<div class="sc-doc" id="sc-doc2">
  <div class="sc-controls">
    <button class="sc-btn sc-btn-primary" onclick="window.print()">Imprimir / PDF</button>
    <button class="sc-btn sc-btn-secondary" onclick="downloadHTML('sc-doc2')">Baixar HTML</button>
  </div>

  <h2>Análise Estratégica</h2>
  <p style="color:var(--muted);font-size:13px;margin-bottom:32px;">Oportunidades de negócio e recomendações para a TRÍADE IA.</p>

  <div class="sc-toc">
    <div class="sc-toc-title">Índice</div>
    <ul>
      <li><a href="#a1">1 · IA Fiscal + Saldo Credor = Product-Market Fit</a></li>
      <li><a href="#a2">2 · Agente de IA para Consultores e Escritórios</a></li>
      <li><a href="#a3">3 · Consultoria de Urgência — Reforma Tributária</a></li>
      <li><a href="#afin">Análise Financeira</a></li>
      <li><a href="#acrit">Crítica ao Modelo Atual</a></li>
      <li><a href="#apas">Próximos Passos</a></li>
      <li><a href="#acen">Cenário Financeiro 12 Meses</a></li>
      <li><a href="#ahon">Crítica Honesta</a></li>
      <li><a href="#adec">Decisão Recomendada</a></li>
    </ul>
  </div>

  <div class="sc-box sc-box-info">
    <p>O diagnóstico trata de um <strong>ativo fiscal pouco explorado</strong>: créditos tributários acumulados (PIS/COFINS/ICMS) que permanecem presos no balanço em vez de se transformar em caixa real. Três oportunidades diretas para a TRÍADE IA foram identificadas.</p>
  </div>

  <div id="a1" class="sc-section">
    <h3>1 · IA Fiscal Itumbiara + Saldo Credor = Product-Market Fit</h3>
    <p>O mercado carece de automação neste processo:</p>
    <ul>
      <li>Gestão de saldos credores exige auditoria complexa (EFD + DCTF + Contabilidade)</li>
      <li>Validação manual é cara, lenta e propensa a erros</li>
      <li>Empresas deixam <strong>milhões dormindo</strong> no ativo não circulante</li>
    </ul>
    <h4>Sua oportunidade</h4>
    <ul>
      <li>Lê automaticamente EFD-Contribuições, DCTF e razão contábil</li>
      <li>Identifica créditos presumidos vs. ordinários</li>
      <li>Calcula rateio de proporcionalidade</li>
      <li>Gera parecer técnico para PER/DCOMP ou ICMS transfer</li>
      <li>Avisa sobre prazos críticos da Reforma Tributária</li>
    </ul>
    <div class="sc-box sc-box-ok">
      <p><strong>Potencial:</strong> Serviço B2B escalável. Toda empresa média ou grande tem esse problema — independente de setor.</p>
    </div>
  </div>

  <div id="a2" class="sc-section">
    <h3>2 · Agente de IA para Consultores e Escritórios</h3>
    <p>Consultores tributários precisam de um motor que:</p>
    <ul>
      <li>Processe documentos contábeis automaticamente</li>
      <li>Valide créditos conforme STJ REsp 1.221.170/PR</li>
      <li>Aplique a regra de proporcionalidade sem erros humanos</li>
      <li>Gere cronograma de ações antes da Reforma</li>
    </ul>
    <h4>Modelo de venda</h4>
    <p>SaaS ou white-label para escritórios de contabilidade, consultorias tributárias e firmas de auditoria. Métrica de sucesso: montante de créditos identificados e monetizados pelos clientes.</p>
  </div>

  <div id="a3" class="sc-section">
    <h3>3 · Consultoria de Urgência — Reforma Tributária</h3>
    <div class="sc-box sc-box-warn">
      <p>"A empresa que não homologar e validar seus créditos sob as regras atuais enfrentará uma barreira probatória gigantesca no futuro."</p>
    </div>
    <p><strong>Janela:</strong> menos de 24 meses antes do IBS/CBS entrar em vigor. Isso cria urgência de compra genuína — sem forçar narrativa.</p>
  </div>

  <div id="afin" class="sc-section">
    <h3>Análise Financeira — ROI para a TRÍADE</h3>
    <table>
      <thead><tr><th>Métrica</th><th>Estimativa</th></tr></thead>
      <tbody>
        <tr><td>Esforço para MVP</td><td>120–180 horas</td></tr>
        <tr><td>Custo de desenvolvimento</td><td>R$ 30–50k (terceirizado) ou R$ 0 (founder-led)</td></tr>
        <tr><td>Preço SaaS</td><td>R$ 500–2.000/mês por cliente</td></tr>
        <tr><td>Payback</td><td>3–6 meses (10–15 clientes iniciais)</td></tr>
        <tr><td>TAM (mercado total)</td><td>~800k empresas com potencial saldo credor</td></tr>
        <tr><td>Potencial anual (2–5% do mercado)</td><td>R$ 5–15M</td></tr>
      </tbody>
    </table>
  </div>

  <div id="acrit" class="sc-section">
    <h3>Crítica ao Modelo Atual</h3>
    <p>A "IA Fiscal Itumbiara" hoje é muito municipal. O diagnóstico mostra que:</p>
    <ol style="margin-left:20px;color:var(--muted2);">
      <li style="margin-bottom:10px;"><strong>O verdadeiro valor</strong> não está em automação de rotina fiscal, mas em <strong>descoberta de ativos dormindo</strong>.</li>
      <li style="margin-bottom:10px;"><strong>O cliente paga por resultado</strong>, não por processo. Uma empresa que recupera R$ 500k pagará R$ 50–100k em consultoria sem questionar.</li>
      <li><strong>A Reforma cria urgência real</strong> — é o acelerador de vendas mais poderoso disponível agora.</li>
    </ol>
  </div>

  <div id="apas" class="sc-section">
    <h3>Próximos Passos Recomendados</h3>
    <h4>Fase 1 — Validação (2 semanas)</h4>
    <ul>
      <li>Entrevistar 5–10 escritórios/consultorias tributárias</li>
      <li>Pergunta-chave: <em>"Quantos clientes deixam créditos não homologados? Qual o tamanho médio?"</em></li>
      <li>Buscar cases de saldo credor acima de R$ 100k</li>
    </ul>
    <h4>Fase 2 — MVP (4–6 semanas)</h4>
    <ul>
      <li>Agente que processa EFD-Contribuições (PDF/arquivo)</li>
      <li>Calcula crédito ordinário vs. presumido</li>
      <li>Gera resumo executivo em português</li>
      <li>Integração com 1–2 plataformas contábeis (Omni, Bling)</li>
    </ul>
    <h4>Fase 3 — Go-to-market (8 semanas)</h4>
    <ul>
      <li>Parceria com 1–2 escritórios como beta</li>
      <li>Case study com números reais</li>
      <li>Lançamento no LinkedIn para CNJ/CRC</li>
      <li>Preço inicial: R$ 1.000–1.500/cliente/mês</li>
    </ul>
  </div>

  <div id="acen" class="sc-section">
    <h3>Cenário Financeiro — 12 Meses</h3>
    <pre>Mês 1–2:   MVP + 2 clientes beta               R$      0/mês
Mês 3–4:   5 clientes @ R$ 1.000               R$  5.000/mês
Mês 5–6:   15 clientes @ R$ 1.200              R$ 18.000/mês
Mês 7–9:   35 clientes @ R$ 1.500              R$ 52.500/mês
Mês 10–12: 60 clientes @ R$ 1.800              R$ 108.000/mês

RECEITA ANUAL PROJETADA: R$ 300–400k (conservador)
MARGEM: 75–80% (produto digital)</pre>
  </div>

  <div id="ahon" class="sc-section">
    <h3>Crítica Honesta</h3>
    <h4>Posição privilegiada</h4>
    <ul>
      <li>Know-how fiscal real — sistema em produção na Prefeitura de Itumbiara-GO</li>
      <li>Domínio profundo de automação e IA</li>
      <li>Mercado com dor genuína e urgência de prazo</li>
    </ul>
    <h4>Riscos a endereçar</h4>
    <ul>
      <li>Competição virá rápido se o produto demonstrar viabilidade</li>
      <li>Precisará de 50+ clientes em 12 meses para ser defensável</li>
      <li>A diferença real não será o produto — será sales e relacionamento</li>
    </ul>
  </div>

  <div id="adec" class="sc-section">
    <div class="sc-box sc-box-ok">
      <p><strong>Recomendação:</strong> Pivote a "IA Fiscal Itumbiara" de solução municipal genérica para um <strong>agente de recuperação de créditos tributários B2B</strong>.</p>
      <p>É mais específico, urgente (janela de Reforma), rentável (cliente paga por resultado real) e escalável (mercado nacional, não só Itumbiara).</p>
    </div>
  </div>
</div>

<div class="sc-footer">
  <p><strong>Diagnóstico Estratégico — Saldo Credor + IA</strong></p>
  <p>TRÍADE IA · Preparado para André Rocha Salomão · Junho 2026</p>
  <p style="margin-top:12px;font-size:12px;">Documento confidencial.</p>
</div>
`

export default function SaldoCredorPage() {
  useEffect(() => {
    window.switchTab = function (i: number) {
      document.querySelectorAll<HTMLElement>('.tab-btn').forEach((b, idx) =>
        b.classList.toggle('active', idx === i)
      )
      document.querySelectorAll<HTMLElement>('.sc-doc').forEach((d, idx) =>
        d.classList.toggle('active', idx === i)
      )
    }

    window.downloadHTML = function (docId: string) {
      const el = document.getElementById(docId)
      if (!el) return
      const a = document.createElement('a')
      a.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(el.innerHTML)
      a.download = docId === 'sc-doc1' ? 'explicacao-completa.html' : 'analise-estrategica.html'
      a.click()
    }

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') window.switchTab(0)
      if (e.key === 'ArrowRight') window.switchTab(1)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  return (
    <div
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        background: '#0a0a0a',
        color: '#f0f0f0',
        minHeight: '100vh',
        fontSize: '15px',
        lineHeight: '1.7',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div dangerouslySetInnerHTML={{ __html: CONTENT }} />
    </div>
  )
}
