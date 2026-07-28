import type { Metadata } from "next";
import { ArrowRight, BarChart3, AlertCircle, Users, TrendingUp, Zap, Target, Clock, Layers, ShieldCheck, Building2, Calculator, CreditCard, LineChart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const planos = [
  {
    nome: "Mensal",
    subtitulo: "O essencial para começar",
    preco: "R$ 147",
    cadencia: "/mês",
    recursos: [
      "Acesso completo ao motor do SOAF Contador",
      "Gestão de até 5 clientes na carteira",
      "Atualizações normativas padrão do mês",
    ],
    checkoutUrl: "https://pay.cakto.com.br/33b4oyt",
  },
  {
    nome: "Semestral",
    subtitulo: "Mais economia, mais resultados",
    preco: "R$ 697",
    cadencia: "/semestre",
    equivalente: "Equivalente a R$ 116/mês",
    recursos: [
      "Todos os recursos do plano mensal",
      "Gestão de até 20 clientes na carteira",
      "Benchmarking de carteira para identificar oportunidades",
      "Kit de orientação prática (checklists de conformidade e transição ISS → IBS)",
      "Suporte ágil em horário comercial",
    ],
    checkoutUrl: "https://pay.cakto.com.br/qoqyd3s",
  },
  {
    nome: "Anual",
    subtitulo: "O passaporte AI-First",
    preco: "R$ 997",
    cadencia: "/ano",
    equivalente: "Equivalente a R$ 83/mês",
    destaque: true,
    recursos: [
      "Call estratégica 1:1 com o fundador (30 min) — onboarding executivo AI-First",
      "Acesso exclusivo à IA Sofia, nossa consultora tributária 24/7",
      "Gestão ilimitada de clientes na carteira",
      "Acesso total ao Hub e Ecossistema TRÍADE",
      "Descontos especiais em ScenarioOS, CreditOS e SOAF Empresário",
      "Biblioteca completa de Dossiês Executivos",
      "Atualizações 2027 garantidas",
      "Preço congelado por 12 meses",
      "Suporte VIP prioritário",
    ],
    checkoutUrl: "https://pay.cakto.com.br/34v24nd",
  },
];

export const metadata: Metadata = {
  title: "SOAF Privado Contador — Inteligência Tributária para Escritórios | Tríade IA",
  description: "Gestão de carteira tributária, análise de clientes, EC 132/2023, simulações de regime. Plataforma IA para contadores e escritórios contábeis.",
};

const features = [
  {
    icon: Users,
    title: "Gestão de Carteira de Clientes",
    description: "Monitore risco tributário de cada cliente, identifique ações urgentes e oportunidades de planejamento.",
    badge: "Carteira"
  },
  {
    icon: BarChart3,
    title: "Análise Tributária por Cliente",
    description: "Simule impactos da EC 132/2023, carga tributária 2026–2033 e regimes ideais para cada contribuinte.",
    badge: "Análise"
  },
  {
    icon: TrendingUp,
    title: "Benchmarking de Carteira",
    description: "Compare performance de clientes: impacto médio da reforma, risco alto vs. baixo, oportunidades de replanejamento.",
    badge: "Benchmark"
  },
  {
    icon: AlertCircle,
    title: "Alertas por Cliente e Obrigação",
    description: "Notificações automáticas sobre decadência, Nota Nacional, NFS-e em atraso, mudanças normativas (EC 132, CGIBS).",
    badge: "Alertas"
  },
  {
    icon: Zap,
    title: "Dashboard Executivo Escritório",
    description: "Visão integrada: total de clientes, risco médio, impacto reforma na carteira, obrigações vencendo esta semana.",
    badge: "Dashboard"
  },
  {
    icon: Target,
    title: "Simulador por Cliente",
    description: "Compare Simples vs. Lucro Presumido vs. Lucro Real para cada cliente. Identifique economia fiscal individualizada.",
    badge: "Simulação"
  }
];

const agentes = [
  {
    numero: "01",
    titulo: "Diretor Financeiro IA",
    nivel: "Nível 1",
    descricao: "Visão estratégica: plano de ação 30/90/180 dias para carteira. Benchmarking e ROI de planejamento.",
    badges: ["Estratégico", "Planejamento", "Reforma"]
  },
  {
    numero: "02",
    titulo: "Consultor Tributário IA",
    nivel: "Nível 2",
    descricao: "Orquestrador: roteia cada cliente ao agente especialista correto. Todas as 8 skills tributárias.",
    badges: ["Orquestração", "Consultoria", "Expertise"]
  },
  {
    numero: "03",
    titulo: "Agente Serviços (ISS → IBS)",
    nivel: "Nível 2",
    descricao: "Especialista em prestadores de serviço: LC 116, NFS-e, transição ISS/IBS. Impacto por alíquota.",
    badges: ["Jurídico", "Serviços", "IBS"]
  },
  {
    numero: "04",
    titulo: "Agente Produtos (ICMS → IBS)",
    nivel: "Nível 2",
    descricao: "Especialista em comércio e indústria: ICMS, NF-e, regime de substituição, transição IBS.",
    badges: ["Comércio", "ICMS", "IBS"]
  },
  {
    numero: "05",
    titulo: "Agente Regime Tributário",
    nivel: "Nível 2",
    descricao: "Compare Simples Nacional vs. Lucro Presumido vs. Lucro Real por cliente. Fator R e enquadramento.",
    badges: ["Regime", "Análise", "Decisão"]
  },
  {
    numero: "06",
    titulo: "Agente Simulador da Reforma",
    nivel: "Nível 2",
    descricao: "Projeta carga tributária até 2033 por cliente. CBS, IBS, Split Payment, Nota Nacional.",
    badges: ["Reforma", "Simulação", "Projeção"]
  },
  {
    numero: "07",
    titulo: "Agente Precificação & Margem",
    nivel: "Empresário",
    descricao: "Repasse de alíquota e recalculadora de preços pós-reforma para negociação com clientes.",
    badges: ["Precificação", "Margem", "Vendas"]
  },
  {
    numero: "08",
    titulo: "Agente Nota Nacional",
    nivel: "Compliance",
    descricao: "Credenciamento de clientes no sistema Nota Nacional: checklist, prazos, impacto de atraso.",
    badges: ["Compliance", "NF", "Obrigação"]
  },
  {
    numero: "09",
    titulo: "Auditor de Conformidade Carteira",
    nivel: "Nível 2",
    descricao: "Verifica por cliente: decadência (5 anos CTN art. 173), obrigações acessórias, risco de multa.",
    badges: ["Compliance", "CTN", "Risco"]
  }
];

const stats = [
  { label: "Clientes na Carteira", value: "5", description: "Carteira ativa monitorada", highlight: false },
  { label: "Clientes em Risco Alto", value: "2", description: "Ação urgente necessária", highlight: true },
  { label: "Impacto Médio Carteira", value: "+3,1 p.p.", description: "Aumento estimado até 2033", highlight: false },
  { label: "Obrigações Esta Semana", value: "3", description: "DAS vence 20/07/2026", highlight: true }
];

const faq = [
  {
    pergunta: "O SOAF Privado Contador é seguro para dados dos meus clientes?",
    resposta: "Sim. Dados dos clientes (CNPJ, faturamento, regime) processados localmente. Sigilo Fiscal CTN art. 198 garantido."
  },
  {
    pergunta: "Funciona para diferentes tipos de cliente?",
    resposta: "Sim. Cobre Simples Nacional, Lucro Presumido, Lucro Real, optantes e não-optantes por regime."
  },
  {
    pergunta: "Como gerencio a carteira?",
    resposta: "Dashboard mostra todos os clientes, risco, impacto da reforma, alertas vencendo. Clique em um cliente para análise detalhada."
  },
  {
    pergunta: "Os agentes geram relatórios para enviar aos clientes?",
    resposta: "Sim. Relatórios automáticos de impacto reforma, recomendação de regime, plano de ação 30/90/180 dias."
  },
  {
    pergunta: "Como funciona o benchmarking?",
    resposta: "Compara sua carteira: cliente A vs. cliente B, impacto médio, identificação de outliers e oportunidades."
  }
];

export default function SOAFPrivadoContador() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#050505] to-[#0c1830]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-[#FFD700] rounded-xl px-4 py-2 font-semibold text-[#050505]">
              SPC
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            Inteligência Tributária<br />com IA para Contadores
          </h1>
          <p className="text-base text-[#B8BCC8] mb-8 max-w-2xl mx-auto leading-relaxed">
            Gestão completa de carteira tributária. Monitore risco de cada cliente, simule impacto da EC 132/2023 e planeje transição ISS → IBS. 9 agentes especializados em reforma tributária.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="https://triadeiaos.com/soaf-privado/contador/index.html"
              className="px-8 py-4 bg-[#00FF87] text-[#050505] font-semibold rounded-lg hover:bg-[#00e576] transition-all"
            >
              Acessar SOAF Privado Contador →
            </Link>
            <Link
              href="https://triadeiaos.com/soaf-privado/contador/index.html"
              className="px-8 py-4 border border-white/[0.2] text-white font-semibold rounded-lg hover:border-white/[0.4] transition-all"
            >
              Demo Gratuita
            </Link>
          </div>
          <p className="text-xs text-[#7D8290]">
            Sem cartão de crédito · Acesso 7 dias gratuitos · 9 agentes + 5 clientes demo inclusos
          </p>
        </div>
      </section>

      {/* KPIs Dashboard */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`border rounded-xl p-8 ${
                  stat.highlight
                    ? 'border-[#FF4444] bg-gradient-to-br from-[#1a0c0c] to-[#050505]'
                    : 'border-white/[0.08] bg-gradient-to-br from-[#0c1830] to-[#050505]'
                }`}
              >
                <p className="text-xs text-[#7D8290] uppercase mb-2">{stat.label}</p>
                <p className={`text-4xl md:text-5xl font-bold mb-2 ${
                  stat.highlight ? 'text-[#FF4444]' : 'text-[#00FF87]'
                }`}>
                  {stat.value}
                </p>
                <p className="text-sm text-[#B8BCC8]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-mono text-[#00FF87] uppercase mb-4">Capacidades</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              6 Capacidades Principais + 9 Agentes
            </h2>
            <p className="text-base text-[#B8BCC8] mt-4 max-w-2xl">
              Ferramentas completas para gerenciar carteira tributária, analisar risco de clientes e preparar para a reforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="border border-white/[0.08] rounded-xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00FF87]/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-[#00FF87]" strokeWidth={1.5} />
                    <span className="text-xs px-2 py-1 rounded bg-[#00E5FF]/10 text-[#00E5FF]">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-sm text-[#B8BCC8]">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9 Agentes */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1830] to-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-white mb-12">9 Agentes IA Especializados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentes.map((agente, i) => (
              <div
                key={i}
                className="border border-white/[0.08] rounded-xl p-8 bg-gradient-to-br from-[#050505] to-[#0c1830]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-4xl font-bold text-[#00FF87]">{agente.numero}</p>
                    <p className="text-xs text-[#7D8290] uppercase mt-1">{agente.nivel}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{agente.titulo}</h3>
                <p className="text-sm text-[#B8BCC8] mb-4">{agente.descricao}</p>
                <div className="flex flex-wrap gap-2">
                  {agente.badges.map((badge, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 rounded bg-[#00FF87]/10 text-[#00FF87]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos de Assinatura */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-xs font-mono text-[#FFD700] uppercase mb-4">Planos de Lançamento</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Escolha o Plano <span className="text-[#00FF87]">Ideal</span> para Você
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex items-center justify-center gap-3 text-center px-6 py-4 mb-10 border border-[#00FF87]/25 rounded-xl bg-[#00FF87]/[0.04]">
            <ShieldCheck className="w-5 h-5 text-[#00FF87] flex-shrink-0" />
            <p className="text-sm text-[#B8BCC8]">
              <strong className="text-white">Garantia Incondicional:</strong> Teste por 7 dias. Se não atender, devolvemos 100% do seu investimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-stretch">
            {planos.map((plano) => (
              <div
                key={plano.nome}
                className={`relative rounded-2xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] transition-all flex flex-col ${
                  plano.destaque
                    ? "border-2 border-[#00FF87] ring-1 ring-[#00FF87]/20"
                    : "border border-white/[0.12] hover:border-[#00FF87]/30"
                }`}
              >
                {plano.destaque && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#00FF87] text-[#050505] text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                      MAIS VANTAJOSO
                    </span>
                  </div>
                )}

                <div className={`mb-6 ${plano.destaque ? "pt-6" : ""}`}>
                  <h3 className="text-2xl font-semibold text-[#00FF87] mb-2">{plano.nome}</h3>
                  <p className="text-sm text-[#B8BCC8]">{plano.subtitulo}</p>
                </div>

                <div className="mb-8 pb-8 border-b border-white/[0.08]">
                  <p className="text-5xl font-bold text-[#00FF87]">
                    {plano.preco}
                    <span className="text-sm text-[#B8BCC8]"> {plano.cadencia}</span>
                  </p>
                  {plano.equivalente && (
                    <p className="text-xs text-[#7D8290] mt-2">{plano.equivalente}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plano.recursos.map((recurso) => (
                    <li key={recurso} className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                      <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                      {recurso}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plano.checkoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 text-center font-semibold rounded-lg transition-all ${
                    plano.destaque
                      ? "bg-[#00FF87] text-[#050505] hover:bg-[#00e576]"
                      : "border border-[#00FF87] text-[#00FF87] hover:bg-[#00FF87]/10"
                  }`}
                >
                  Assinar plano {plano.nome.toLowerCase()}
                </Link>
              </div>
            ))}
          </div>

          {/* Rodapé de Segurança */}
          <div className="flex items-center justify-center gap-3 text-sm text-[#B8BCC8] pt-8 border-t border-white/[0.08]">
            <svg className="w-5 h-5 text-[#00FF87]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            Todos os planos incluem segurança de dados e conformidade com a LGPD.
          </div>
        </div>
      </section>

      {/* ECOSSISTEMA TRÍADE — MARQUEE INFINITO */}
      <section className="py-24 px-6 bg-[#050505] overflow-hidden">
        <div className="max-w-6xl mx-auto mb-16">
          <p className="text-xs font-mono text-[#FFD700] uppercase tracking-[0.15em] text-center mb-6">
            Ecossistema TRÍADE
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
            Inteligência distribuída.<br />Um hub completo de soluções tributárias.
          </h2>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Mask */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(90deg, #050505 0%, transparent 10%, transparent 90%, #050505 100%)'
            }}
          />

          {/* Marquee */}
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {/* First set */}
            {[
              { name: "ScenarioOS", href: "/solucoes", icon: Layers, color: "#F59E0B", tag: "Análise Tributária Municipal" },
              { name: "SOAF V3.0", href: "/solucoes", icon: ShieldCheck, color: "#06B6D4", tag: "Auditoria Fiscal Pública" },
              { name: "SOAF Privado Empresário", href: "/soaf-privado-empresario", icon: Building2, color: "#10B981", tag: "Gestão Tributária Empresarial" },
              { name: "SOAF Privado Contador", href: "/soaf-privado-contador", icon: Calculator, color: "#8B5CF6", tag: "Conformidade Contábil" },
              { name: "CreditOS", href: "/solucoes", icon: CreditCard, color: "#3B82F6", tag: "Análise Inteligente de Crédito" },
              { name: "ContabOS", href: "/solucoes", icon: LineChart, color: "#EC4899", tag: "CRM e Automação Contábil" }
            ].map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={i}
                  href={solution.href}
                  className="group bg-neutral-900/80 border border-neutral-800/80 hover:border-emerald-500/50 hover:bg-neutral-800/50 transition-all duration-300 rounded-2xl px-5 py-3.5 flex items-center gap-3.5 flex-shrink-0 whitespace-nowrap backdrop-blur-md shadow-lg cursor-pointer"
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-lg opacity-10"
                      style={{ backgroundColor: solution.color }}
                    />
                    <Icon
                      className="w-5 h-5 relative z-10"
                      color={solution.color}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-neutral-100">{solution.name}</span>
                    <span className="text-xs text-neutral-500">{solution.tag}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-auto" />
                </Link>
              );
            })}

            {/* Second set (duplicate for infinite loop) */}
            {[
              { name: "ScenarioOS", href: "/solucoes", icon: Layers, color: "#F59E0B", tag: "Análise Tributária Municipal" },
              { name: "SOAF V3.0", href: "/solucoes", icon: ShieldCheck, color: "#06B6D4", tag: "Auditoria Fiscal Pública" },
              { name: "SOAF Privado Empresário", href: "/soaf-privado-empresario", icon: Building2, color: "#10B981", tag: "Gestão Tributária Empresarial" },
              { name: "SOAF Privado Contador", href: "/soaf-privado-contador", icon: Calculator, color: "#8B5CF6", tag: "Conformidade Contábil" },
              { name: "CreditOS", href: "/solucoes", icon: CreditCard, color: "#3B82F6", tag: "Análise Inteligente de Crédito" },
              { name: "ContabOS", href: "/solucoes", icon: LineChart, color: "#EC4899", tag: "CRM e Automação Contábil" }
            ].map((solution, i) => {
              const Icon = solution.icon;
              return (
                <Link
                  key={`duplicate-${i}`}
                  href={solution.href}
                  className="group bg-neutral-900/80 border border-neutral-800/80 hover:border-emerald-500/50 hover:bg-neutral-800/50 transition-all duration-300 rounded-2xl px-5 py-3.5 flex items-center gap-3.5 flex-shrink-0 whitespace-nowrap backdrop-blur-md shadow-lg cursor-pointer"
                >
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-lg opacity-10"
                      style={{ backgroundColor: solution.color }}
                    />
                    <Icon
                      className="w-5 h-5 relative z-10"
                      color={solution.color}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-neutral-100">{solution.name}</span>
                    <span className="text-xs text-neutral-500">{solution.tag}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-auto" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tailwind CSS Animation */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>

      {/* Reforma Section */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-[#00FF87] pl-8">
            <p className="text-xs font-mono text-[#00FF87] uppercase mb-4">EC 132/2023</p>
            <h2 className="text-3xl font-semibold text-white mb-4">
              A Reforma vai Impactar sua Carteira. Prepare-se Hoje.
            </h2>
            <p className="text-base text-[#B8BCC8] mb-6">
              ISS extinto em 2033. IBS a partir de 2026. Split Payment obrigatório. Nota Nacional credenciamento urgente. Sua carteira precisa de análise individualizada antes que mudem os regimes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-xs text-[#7D8290] uppercase mb-2">2026 — Início</p>
                <p className="text-lg font-semibold text-white">IBS entra em vigor</p>
                <p className="text-sm text-[#B8BCC8] mt-2">Split Payment obrigatório. Nota Nacional credenciamento.</p>
              </div>
              <div>
                <p className="text-xs text-[#7D8290] uppercase mb-2">2026–2033 — Transição</p>
                <p className="text-lg font-semibold text-white">7 anos de dupla</p>
                <p className="text-sm text-[#B8BCC8] mt-2">ISS e IBS coexistem. Seus clientes precisam de NF-e dupla.</p>
              </div>
              <div>
                <p className="text-xs text-[#7D8290] uppercase mb-2">2033 — Extinção</p>
                <p className="text-lg font-semibold text-white">ISS extinto. IBS pleno.</p>
                <p className="text-sm text-[#B8BCC8] mt-2">Modelo de arrecadação muda completamente para sua carteira.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1830] to-[#050505]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-12">Dúvidas Frequentes</h2>

          <div className="space-y-6">
            {faq.map((item, i) => (
              <div
                key={i}
                className="border border-white/[0.08] rounded-xl p-8 bg-gradient-to-br from-[#050505] to-[#0c1830]"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.pergunta}</h3>
                <p className="text-sm text-[#B8BCC8]">{item.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#00FF87] to-[#00E5FF]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#050505] mb-6">
            Seus Clientes Não Podem Esperar Mais.
          </h2>
          <p className="text-[#050505]/80 text-lg mb-8 max-w-2xl mx-auto">
            A transição tributária já começou. Cada mês de atraso é um cliente que não sabe qual regime escolher em 2026.
          </p>
          <Link
            href="https://triadeiaos.com/soaf-privado/contador/index.html"
            className="inline-flex items-center gap-2 bg-[#050505] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#000000] transition-all"
          >
            Comece Demonstração Gratuita <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-[#050505]/60 mt-6">
            7 dias de acesso completo. Sem necessidade de cartão de crédito. 5 clientes demo já cadastrados.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-[#050505] border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-[#B8BCC8]">Pronto para gerir sua carteira?</p>
            <p className="text-xs text-[#7D8290] mt-1">SOAF Privado Contador | Tríade IA | EC 132/2023</p>
          </div>
          <Link
            href="https://triadeiaos.com/soaf-privado/contador/index.html"
            className="px-8 py-3 bg-[#00FF87] text-[#050505] font-semibold rounded-lg hover:bg-[#00e576] transition-all"
          >
            Acessar Agora →
          </Link>
        </div>
      </section>
    </>
  );
}
