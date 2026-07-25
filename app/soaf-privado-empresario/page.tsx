import type { Metadata } from "next";
import { ArrowRight, TrendingUp, BarChart3, AlertCircle, Zap, Target, Clock, Layers, ShieldCheck, Building2, Calculator, CreditCard, LineChart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SOAF Privado Empresário — Inteligência Tributária com IA | Tríade IA",
  description: "Análise tributária em tempo real, EC 132/2023, simulações de regime e planejamento fiscal. Preparação completa para a Reforma Tributária.",
};

const features = [
  {
    icon: BarChart3,
    title: "Análise Tributária em Tempo Real",
    description: "Simule impactos da EC 132/2023, calcule carga tributária 2026–2033 e identifique oportunidades de planejamento.",
    badge: "Inteligência"
  },
  {
    icon: Target,
    title: "Simulador de Regime Tributário",
    description: "Compare Simples Nacional, Lucro Presumido e Lucro Real. Descubra qual regime é mais vantajoso para seu negócio.",
    badge: "Simulação"
  },
  {
    icon: TrendingUp,
    title: "Fator R e Indicadores",
    description: "Análise automática de Fator R, alíquotas de ISS e alertas de decadência tributária. Tome decisões baseadas em dados.",
    badge: "Análise"
  },
  {
    icon: AlertCircle,
    title: "Alertas Ativos e Compliance",
    description: "Seja notificado sobre prazos tributários, mudanças normativas (EC 132, LC 116) e obrigações acessórias que vencem.",
    badge: "Conformidade"
  },
  {
    icon: Zap,
    title: "Dashboard Executivo",
    description: "Visão clara de sua situação fiscal: carga atual, estimada em 2033, Fator R e impacto do Split Payment no caixa.",
    badge: "Dashboard"
  },
  {
    icon: Clock,
    title: "Countdown para 2033",
    description: "Acompanhe os dias até o ISS pleno, fases da reforma e transição de impostos. Planeje com antecedência.",
    badge: "Reforma"
  }
];

const agentes = [
  {
    numero: "01",
    titulo: "Consultor de Planejamento Fiscal",
    descricao: "Análise estratégica de regimes, recomendações de planejamento e simulações de cenários.",
    badges: ["Estratégico", "Planejamento", "Reforma"]
  },
  {
    numero: "02",
    titulo: "Investigador de Oportunidades",
    descricao: "Identifica Fator R baixo, subfaturamento, deduções não aproveitadas e riscos de enquadramento.",
    badges: ["Investigação", "Risco", "Conformidade"]
  },
  {
    numero: "03",
    titulo: "Agente ISS/IBS",
    descricao: "Especialista em transição tributária: ISS, NFS-e, LC 116 e IBS. Prepare-se para 2026.",
    badges: ["Jurídico", "Reforma", "IBS"]
  },
  {
    numero: "04",
    titulo: "Auditor de Conformidade",
    descricao: "Verifica prazos decadenciais, obrigações acessórias e alertas de não conformidade.",
    badges: ["Compliance", "Alertas", "CTN"]
  },
  {
    numero: "05",
    titulo: "Simulador de Cenários",
    descricao: "Compare Simples vs. Lucro Presumido vs. Lucro Real. Veja impacto de faturamento, despesas e reforma.",
    badges: ["Simulação", "Análise", "Decisão"]
  },
  {
    numero: "06",
    titulo: "Gestor de Capital de Giro",
    descricao: "Analisa impacto de Split Payment, ISS/IBS e fluxo de caixa. Planeje liquide com segurança.",
    badges: ["Fluxo", "Split", "Caixa"]
  }
];

const stats = [
  { label: "Dias até IBS Pleno", value: "2.354", description: "Extinção do ISS em 01/01/2033" },
  { label: "Fase da Transição", value: "2026", description: "Alíquota teste IBS 0,1%" },
  { label: "Carga Estimada 2033", value: "26,5%", description: "vs. ISS atual de 2–5%" }
];

const faq = [
  {
    pergunta: "O SOAF Privado Empresário é seguro?",
    resposta: "Sim. Dados confidenciais (CNPJ, NFS-e) são processados localmente. Cumprimento total do sigilo fiscal (CTN art. 198)."
  },
  {
    pergunta: "Funciona para Simples Nacional?",
    resposta: "Sim. Análise completa de Fator R, limite de faturamento, regime misto e planejamento de transição."
  },
  {
    pergunta: "Como são as simulações de regime?",
    resposta: "Você entra receita bruta e despesas. O sistema compara Simples vs. Lucro Presumido vs. Lucro Real e mostra economia fiscal."
  },
  {
    pergunta: "A base normativa está atualizada?",
    resposta: "Sim. Inclui EC 132/2023, LC 116/2003, CTN, Resoluções CGIBS, Portarias RFB e mudanças 2026–2033."
  }
];

export default function SOAFPrivadoEmpresario() {
  return (
    <>
      {/* Hero */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#050505] to-[#0c1830]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-[#FFD700] rounded-xl px-4 py-2 font-semibold text-[#050505]">
              SPE
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 leading-tight">
            Inteligência Tributária<br />com IA para Empresários
          </h1>
          <p className="text-base text-[#B8BCC8] mb-8 max-w-2xl mx-auto leading-relaxed">
            Análise em tempo real de seu regime tributário, simulações de planejamento fiscal e preparação completa para a EC 132/2023. Saiba hoje quanto você vai pagar em 2026 e em 2033.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="https://triadeiaos.com/soaf-privado/empresario/index.html"
              className="px-8 py-4 bg-[#00FF87] text-[#050505] font-semibold rounded-lg hover:bg-[#00e576] transition-all"
            >
              Acessar SOAF Privado Empresário →
            </Link>
            <Link
              href="https://triadeiaos.com/soaf-privado/empresario/index.html"
              className="px-8 py-4 border border-white/[0.2] text-white font-semibold rounded-lg hover:border-white/[0.4] transition-all"
            >
              Demo Gratuita
            </Link>
          </div>
          <p className="text-xs text-[#7D8290]">
            Sem cartão de crédito · Acesso 7 dias gratuitos · Reforma EC 132/2023 integrada
          </p>
        </div>
      </section>

      {/* KPIs */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="border border-white/[0.08] rounded-xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505]"
              >
                <p className="text-xs text-[#7D8290] uppercase mb-2">{stat.label}</p>
                <p className="text-4xl md:text-5xl font-bold text-[#00FF87] mb-2">{stat.value}</p>
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
              6 Agentes IA Trabalhando para Você
            </h2>
            <p className="text-base text-[#B8BCC8] mt-4 max-w-2xl">
              Cada agente tem expertise específica em tributação, reforma e planejamento fiscal. Juntos, analisam sua empresa 360°.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentes.map((agente, i) => (
              <div
                key={i}
                className="border border-white/[0.08] rounded-xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00FF87]/30 transition-all"
              >
                <div className="text-4xl font-bold text-[#00FF87] mb-3">{agente.numero}</div>
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

      {/* Features Detailed */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0c1830] to-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-white mb-12">Funcionalidades em Destaque</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="border border-white/[0.08] rounded-xl p-8 bg-gradient-to-br from-[#050505] to-[#0c1830]"
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

      {/* Planos de Assinatura */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs font-mono text-[#FFD700] uppercase mb-4">Planos de Assinatura</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Escolha o Plano <span className="text-[#00FF87]">Ideal</span> para Você
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Plano Mensal */}
            <div className="border border-white/[0.12] rounded-2xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00FF87]/30 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#00FF87] mb-2">Mensal</h3>
                <p className="text-sm text-[#B8BCC8]">Flexibilidade para começar</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/[0.08]">
                <p className="text-xs text-[#7D8290] line-through mb-2">
                  De R$ 497 /mês
                </p>
                <p className="text-5xl font-bold text-[#00FF87]">
                  R$ 47
                  <span className="text-sm text-[#B8BCC8]"> /mês</span>
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Acesso completo à plataforma
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Suporte prioritário
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Atualizações contínuas
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Relatórios e dashboards
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Integrações básicas
                </li>
              </ul>

              <button className="w-full py-3 border border-[#00FF87] text-[#00FF87] font-semibold rounded-lg hover:bg-[#00FF87]/10 transition-all">
                Assinar plano mensal
              </button>
            </div>

            {/* Plano Semestral (Destacado) */}
            <div className="border-2 border-[#00FF87] rounded-2xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] relative ring-1 ring-[#00FF87]/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#00FF87] text-[#050505] text-xs font-bold px-3 py-1 rounded-full">
                  MAIS ESCOLHIDO
                </span>
              </div>

              <div className="mb-6 pt-6">
                <h3 className="text-2xl font-semibold text-[#00FF87] mb-2">Semestral</h3>
                <p className="text-sm text-[#B8BCC8]">Mais economia, mais resultados</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/[0.08]">
                <p className="text-xs text-[#7D8290] line-through mb-2">
                  De R$ 2.497 /semestre
                </p>
                <p className="text-5xl font-bold text-[#00FF87] mb-1">
                  R$ 197
                  <span className="text-sm text-[#B8BCC8]"> /semestre</span>
                </p>
                <p className="text-xs text-[#7D8290]">Equivale a R$ 32,83/mês</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Todos os recursos do plano mensal
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Desconto especial
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Material de Apoio
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Integrações avançadas
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Suporte premium
                </li>
              </ul>

              <button className="w-full py-3 bg-[#00FF87] text-[#050505] font-semibold rounded-lg hover:bg-[#00e576] transition-all">
                Assinar plano semestral
              </button>
            </div>

            {/* Plano Anual */}
            <div className="border border-[#00E5FF]/30 rounded-2xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00E5FF]/60 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#00E5FF] mb-2">Anual</h3>
                <p className="text-sm text-[#B8BCC8]">Máximo desempenho e economia</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/[0.08]">
                <p className="text-xs text-[#7D8290] line-through mb-2">
                  De R$ 4.997 /ano
                </p>
                <p className="text-5xl font-bold text-[#00E5FF] mb-1">
                  R$ 497
                  <span className="text-sm text-[#B8BCC8]"> /ano</span>
                </p>
                <p className="text-xs text-[#7D8290]">Equivale a R$ 41,41/mês</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Todos os recursos dos planos anteriores
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Maior desconto do ano
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Material de Apoio
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Implantação personalizada
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Suporte VIP 24/7
                </li>
              </ul>

              <button className="w-full py-3 border border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF]/10 transition-all">
                Assinar plano anual
              </button>
            </div>
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
              A Reforma Tributária é Inevitável. Prepare-se Hoje.
            </h2>
            <p className="text-base text-[#B8BCC8] mb-6">
              ISS extinto em 2033. IBS a partir de 2026. Split Payment já em 2026. Carga tributária vai aumentar para a maioria das empresas. O SOAF Privado Empresário acompanha a transição em tempo real e calcula seu cenário exato.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-xs text-[#7D8290] uppercase mb-2">2026 — Início</p>
                <p className="text-lg font-semibold text-white">IBS entra em vigor</p>
                <p className="text-sm text-[#B8BCC8] mt-2">ISS e IBS coexistem. Split Payment obrigatório.</p>
              </div>
              <div>
                <p className="text-xs text-[#7D8290] uppercase mb-2">2026–2033 — Transição</p>
                <p className="text-lg font-semibold text-white">7 anos de dupla</p>
                <p className="text-sm text-[#B8BCC8] mt-2">Você precisa emitir NFS-e com ISS e IBS.</p>
              </div>
              <div>
                <p className="text-xs text-[#7D8290] uppercase mb-2">2033 — Extinção</p>
                <p className="text-lg font-semibold text-white">ISS extinto. IBS pleno.</p>
                <p className="text-sm text-[#B8BCC8] mt-2">Modelo de arrecadação muda completamente.</p>
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
            Sua Empresa Não Pode Esperar Mais.
          </h2>
          <p className="text-[#050505]/80 text-lg mb-8 max-w-2xl mx-auto">
            Cada mês que passa sem análise tributária é dinheiro deixado de ganhar. A transição para IBS e Split Payment já começou.
          </p>
          <Link
            href="https://triadeiaos.com/soaf-privado/empresario/index.html"
            className="inline-flex items-center gap-2 bg-[#050505] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#000000] transition-all"
          >
            Comece Análise Gratuita <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-[#050505]/60 mt-6">
            7 dias de acesso completo. Sem necessidade de cartão de crédito.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-[#050505] border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-[#B8BCC8]">Pronto para conhecer sua situação fiscal?</p>
            <p className="text-xs text-[#7D8290] mt-1">SOAF Privado Empresário | Tríade IA | EC 132/2023</p>
          </div>
          <Link
            href="https://triadeiaos.com/soaf-privado/empresario/index.html"
            className="px-8 py-3 bg-[#00FF87] text-[#050505] font-semibold rounded-lg hover:bg-[#00e576] transition-all"
          >
            Acessar Agora →
          </Link>
        </div>
      </section>
    </>
  );
}
