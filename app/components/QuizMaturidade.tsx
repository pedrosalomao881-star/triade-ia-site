"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Lead } from "@/types";

const QUESTIONS = [
  {
    id: "processos",
    categoria: "Processos",
    pergunta: "Como sua equipe organiza as tarefas e processos do dia a dia?",
    opcoes: [
      { label: "No papel, na memória ou no WhatsApp sem critério", pontos: 0 },
      { label: "Em planilhas separadas por área ou pessoa", pontos: 1 },
      { label: "Em sistemas digitais ou plataformas integradas", pontos: 2 },
    ],
  },
  {
    id: "atendimento",
    categoria: "Atendimento",
    pergunta: "Como sua empresa atende clientes fora do horário comercial?",
    opcoes: [
      { label: "Não atende — só no expediente da equipe", pontos: 0 },
      { label: "Com esforço manual ou revezamento da equipe", pontos: 1 },
      { label: "Com automação parcial ou sistema rodando 24h", pontos: 2 },
    ],
  },
  {
    id: "decisoes",
    categoria: "Tomada de Decisão",
    pergunta: "Com base em que sua empresa toma decisões estratégicas?",
    opcoes: [
      { label: "Experiência e intuição da liderança", pontos: 0 },
      { label: "Relatórios periódicos gerados manualmente", pontos: 1 },
      { label: "Dados em tempo real e dashboards atualizados", pontos: 2 },
    ],
  },
  {
    id: "equipe",
    categoria: "Eficiência Operacional",
    pergunta: "Quanto do tempo da equipe vai para tarefas repetitivas ou operacionais?",
    opcoes: [
      { label: "Mais de 60% — é o nosso dia a dia", pontos: 0 },
      { label: "Entre 30% e 60%", pontos: 1 },
      { label: "Menos de 30% — automatizamos bastante", pontos: 2 },
    ],
  },
  {
    id: "vendas",
    categoria: "Vendas e Relacionamento",
    pergunta: "Como é o follow-up com clientes e oportunidades na sua empresa?",
    opcoes: [
      { label: "Informal — depende da memória ou iniciativa individual", pontos: 0 },
      { label: "Manual, com planilha ou agenda", pontos: 1 },
      { label: "Automatizado ou com CRM estruturado", pontos: 2 },
    ],
  },
  {
    id: "ia",
    categoria: "Inteligência Artificial",
    pergunta: "Sua empresa já utiliza alguma solução de Inteligência Artificial?",
    opcoes: [
      { label: "Não, nunca implementamos nada do tipo", pontos: 0 },
      { label: "Tentamos, mas não avançou como esperávamos", pontos: 1 },
      { label: "Sim, temos soluções funcionando em produção", pontos: 2 },
    ],
  },
];

const NIVEIS = [
  {
    nivel: 1,
    label: "Empresa Manual",
    faixa: [0, 2],
    descricao:
      "Sua operação depende fortemente de esforço humano em tarefas que poderiam ser otimizadas. O potencial de ganho com IA é máximo — e o ponto de partida correto faz toda a diferença.",
    proximoPasso:
      "Identificar as 3 iniciativas de maior retorno e estruturar a primeira camada de eficiência operacional.",
    cor: "brand",
  },
  {
    nivel: 2,
    label: "Empresa Digital",
    faixa: [3, 5],
    descricao:
      "Você usa ferramentas digitais, mas elas não conversam entre si. A operação funciona, mas crescer custa caro em pessoas e tempo — e o próximo nível exige integração.",
    proximoPasso:
      "Integrar os sistemas existentes e automatizar os processos de maior volume para liberar capacidade da equipe.",
    cor: "brand",
  },
  {
    nivel: 3,
    label: "Empresa Integrada",
    faixa: [6, 8],
    descricao:
      "Sua empresa tem boa estrutura digital e algumas automações. O próximo passo é aplicar inteligência — fazer os sistemas não só executar tarefas, mas tomar decisões.",
    proximoPasso:
      "Implementar IA nos processos de maior impacto estratégico: atendimento, vendas ou análise de dados.",
    cor: "brand",
  },
  {
    nivel: 4,
    label: "Empresa Inteligente",
    faixa: [9, 10],
    descricao:
      "Você já aplica IA em processos específicos e colhe resultados concretos. A evolução é transformar IA em infraestrutura central — não uma ferramenta isolada, mas a base da operação.",
    proximoPasso:
      "Construir um ecossistema AI-First integrado em toda a operação, com IA conectando todas as áreas.",
    cor: "brand",
  },
  {
    nivel: 5,
    label: "Empresa AI-First",
    faixa: [11, 12],
    descricao:
      "Você está no nível mais avançado. IA não é uma iniciativa — é a forma como vocês operam. O foco agora é escala e expansão das capacidades já consolidadas.",
    proximoPasso:
      "Expandir as capacidades AI-First para novos mercados, produtos ou unidades de negócio.",
    cor: "brand",
  },
];

function getNivel(score: number) {
  return NIVEIS.find((n) => score >= n.faixa[0] && score <= n.faixa[1]) ?? NIVEIS[0];
}

type Fase = "perguntas" | "resultado" | "formulario" | "sucesso";

const SETORES = [
  "Clínicas e Saúde",
  "Contabilidade",
  "Agronegócio e Cooperativas",
  "Comércio e Supermercados",
  "Imobiliária",
  "Distribuidoras e Indústria",
  "Serviços",
  "Outro",
];

export default function QuizMaturidade() {
  const [fase, setFase] = useState<Fase>("perguntas");
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostas, setRespostas] = useState<number[]>([]);
  const [selecionado, setSelecionado] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [form, setForm] = useState({ nome: "", empresa: "", email: "", whatsapp: "", setor: "" });

  const score = respostas.reduce((a, b) => a + b, 0);
  const nivel = getNivel(score);

  function selecionar(pontos: number) {
    if (transitioning) return;
    setSelecionado(pontos);
  }

  function avancar() {
    if (selecionado === null || transitioning) return;
    setTransitioning(true);
    const novas = [...respostas, selecionado];

    setTimeout(() => {
      if (questaoAtual < QUESTIONS.length - 1) {
        setRespostas(novas);
        setQuestaoAtual((q) => q + 1);
        setSelecionado(null);
      } else {
        setRespostas(novas);
        setFase("resultado");
      }
      setTransitioning(false);
    }, 280);
  }

  async function enviarLead(e: FormEvent) {
    e.preventDefault();
    const lead: Lead = {
      nome: form.nome,
      empresa: form.empresa,
      email: form.email || undefined,
      whatsapp: form.whatsapp,
      setor: form.setor || undefined,
      nivelMaturidade: nivel.nivel,
      source: "quiz",
    };

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
    } catch {
      // non-blocking — redirect happens regardless
    }

    setFase("sucesso");
    const url = buildWhatsAppUrl({ nome: form.nome, empresa: form.empresa, setor: form.setor, nivel: nivel.nivel });
    setTimeout(() => window.open(url, "_blank"), 800);
  }

  if (fase === "perguntas") {
    const q = QUESTIONS[questaoAtual];
    const progresso = ((questaoAtual + 1) / QUESTIONS.length) * 100;

    return (
      <div style={{ opacity: transitioning ? 0 : 1, transition: "opacity 0.28s ease" }}>
        {/* Progresso */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-xs font-medium text-ice/35 uppercase tracking-widest">
              {q.categoria}
            </span>
            <span className="text-xs text-ice/30">
              {questaoAtual + 1} de {QUESTIONS.length}
            </span>
          </div>
          <div className="h-0.5 bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full bg-brand rounded-full transition-all duration-500"
              style={{ width: `${progresso}%` }}
            />
          </div>
        </div>

        <h2 className="font-display font-bold text-2xl md:text-3xl text-ice mb-8 leading-tight">
          {q.pergunta}
        </h2>

        <div className="flex flex-col gap-3 mb-10">
          {q.opcoes.map((opt, i) => (
            <button
              key={i}
              onClick={() => selecionar(opt.pontos)}
              className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                selecionado === opt.pontos
                  ? "border-brand bg-brand/[0.08] text-ice"
                  : "border-white/[0.08] hover:border-white/[0.18] text-ice/65 hover:text-ice"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-4.5 h-4.5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${
                    selecionado === opt.pontos ? "border-brand" : "border-white/20"
                  }`}
                  style={{ width: "18px", height: "18px" }}
                >
                  {selecionado === opt.pontos && (
                    <div className="w-2 h-2 rounded-full bg-brand" />
                  )}
                </div>
                <span className="text-sm leading-relaxed">{opt.label}</span>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={avancar}
          disabled={selecionado === null}
          className={`inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded-lg transition-all ${
            selecionado !== null
              ? "bg-brand text-navy hover:bg-brand-dark cursor-pointer"
              : "bg-white/[0.04] text-ice/20 cursor-not-allowed"
          }`}
        >
          {questaoAtual < QUESTIONS.length - 1 ? "Próxima pergunta" : "Ver meu resultado"}
          <ChevronRight className="w-4 h-4" strokeWidth={2} />
        </button>
      </div>
    );
  }

  if (fase === "resultado") {
    return (
      <div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-brand bg-brand/10 mb-6">
            <span className="font-display font-bold text-3xl text-brand">{nivel.nivel}</span>
          </div>
          <p className="text-xs font-semibold text-ice/30 uppercase tracking-widest mb-2">
            Sua empresa está no
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mb-4">
            {nivel.label}
          </h2>
          <p className="text-ice/55 text-sm leading-relaxed max-w-lg mx-auto mb-6">
            {nivel.descricao}
          </p>
          <div className="inline-block border border-brand/20 bg-brand/[0.04] rounded-xl px-5 py-3 text-left">
            <p className="text-xs text-brand font-semibold uppercase tracking-widest mb-1.5">
              Próximo passo recomendado
            </p>
            <p className="text-ice/70 text-sm">{nivel.proximoPasso}</p>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 text-center">
          <p className="text-ice/50 text-sm mb-6">
            Quer receber um Diagnóstico personalizado para o Nível {nivel.nivel} e entender
            como avançar?
          </p>
          <button
            onClick={() => setFase("formulario")}
            className="inline-flex items-center gap-2 bg-brand text-navy font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors"
          >
            Receber meu Diagnóstico AI-First
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    );
  }

  if (fase === "formulario") {
    const isValid = form.nome.trim() && form.empresa.trim() && form.whatsapp.trim();

    return (
      <form onSubmit={enviarLead}>
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 rounded-full px-4 py-1 mb-5">
            <span className="text-brand text-xs font-semibold">
              Nível {nivel.nivel} — {nivel.label}
            </span>
          </div>
          <h2 className="font-display font-bold text-2xl text-ice mb-2">
            Para onde enviamos o Diagnóstico?
          </h2>
          <p className="text-ice/45 text-sm leading-relaxed">
            Nossa equipe vai entrar em contato com um plano personalizado para o seu nível de maturidade.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          {[
            { key: "nome", label: "Nome completo *", placeholder: "Seu nome", type: "text" },
            { key: "empresa", label: "Empresa *", placeholder: "Nome da empresa", type: "text" },
            { key: "whatsapp", label: "WhatsApp *", placeholder: "(64) 9 9999-9999", type: "tel" },
            { key: "email", label: "E-mail", placeholder: "seu@email.com", type: "email" },
          ].map((f) => (
            <div key={f.key}>
              <label className="text-xs text-ice/35 uppercase tracking-widest mb-1.5 block">
                {f.label}
              </label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key as keyof typeof form]}
                onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-brand/40 rounded-xl px-4 py-3 text-sm text-ice placeholder:text-ice/20 outline-none transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="text-xs text-ice/35 uppercase tracking-widest mb-1.5 block">
              Setor da empresa
            </label>
            <select
              value={form.setor}
              onChange={(e) => setForm((p) => ({ ...p, setor: e.target.value }))}
              className="w-full bg-navy-soft border border-white/[0.08] focus:border-brand/40 rounded-xl px-4 py-3 text-sm text-ice outline-none transition-colors"
            >
              <option value="">Selecionar setor</option>
              {SETORES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`w-full flex items-center justify-center gap-2 font-semibold text-sm px-7 py-4 rounded-xl transition-all ${
            isValid
              ? "bg-brand text-navy hover:bg-brand-dark cursor-pointer"
              : "bg-white/[0.04] text-ice/20 cursor-not-allowed"
          }`}
        >
          Solicitar meu Diagnóstico AI-First
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </button>

        <p className="text-center text-xs text-ice/20 mt-4">
          Sem spam. Sem lista de e-mail. Só o diagnóstico que você pediu.
        </p>
      </form>
    );
  }

  return (
    <div className="text-center py-8">
      <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-8 h-8 text-brand" strokeWidth={1.5} />
      </div>
      <h2 className="font-display font-bold text-2xl text-ice mb-3">
        Perfeito{form.nome ? `, ${form.nome.split(" ")[0]}` : ""}!
      </h2>
      <p className="text-ice/55 text-sm leading-relaxed max-w-sm mx-auto">
        Nossa equipe vai entrar em contato pelo WhatsApp com o seu Diagnóstico personalizado
        e os próximos passos para o Nível {nivel.nivel + 1 <= 5 ? nivel.nivel + 1 : 5}.
      </p>
    </div>
  );
}
