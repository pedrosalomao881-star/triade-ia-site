import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, TrendingUp, Shield, Zap, BarChart3, Layers, ShieldCheck, Building2, Calculator, CreditCard, LineChart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CreditorX — Recuperação de Crédito Tributário PIS/COFINS | Tríade IA",
  description: "Plataforma inteligente para validação e recuperação de créditos tributários. Análise automática de EFD, Livro Razão e conformidade LGPD.",
};

const pilares = [
  {
    icon: BarChart3,
    titulo: "Análise Automática",
    descricao: "Processamento inteligente de EFD-CONTRIB e Livro Razão. Zero erros humanos, máxima conformidade fiscal.",
    destaque: "Tecnologia IA"
  },
  {
    icon: Shield,
    titulo: "Segurança Absoluta",
    descricao: "Dados processados localmente, sigilo fiscal garantido conforme CTN art. 198. Conformidade total com LGPD.",
    destaque: "Compliance"
  },
  {
    icon: TrendingUp,
    titulo: "Recuperação Otimizada",
    descricao: "Identifica automaticamente créditos PIS/COFINS não aproveitados. Documentação pronta para ação.",
    destaque: "Resultado"
  },
  {
    icon: Zap,
    titulo: "Decisão em Minutos",
    descricao: "Upload, análise automática, relatório executivo. Tudo integrado. Nenhuma fricção.",
    destaque: "Velocidade"
  }
];

export default function CreditorXLanding() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-40 px-6 bg-[#0A0A0C] relative overflow-hidden">
        {/* Grid de fundo sutil */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: 'linear-gradient(90deg, #ffffff 0.5px, transparent 0.5px), linear-gradient(0deg, #ffffff 0.5px, transparent 0.5px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Overline */}
          <div className="mb-8 inline-block">
            <p className="text-xs font-mono text-[#FFD700] tracking-[0.15em] uppercase">
              Crédito Tributário
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-[-0.02em]">
            Recupere Créditos
            <br />
            <span className="text-[#00FF87]">que você não vê.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#B8BCC8] mb-12 max-w-3xl mx-auto leading-relaxed">
            CreditorX identifica automaticamente créditos PIS/COFINS não aproveitados. Tecnologia IA + conformidade fiscal absoluta. Análise completa em minutos.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link
              href="/creditorx"
              className="px-8 py-4 bg-[#00FF87] text-[#0A0A0C] font-semibold rounded-lg hover:bg-[#00e576] transition-all"
            >
              Iniciar Análise Gratuita →
            </Link>
            <Link
              href="#contato"
              className="px-8 py-4 border border-white/[0.2] text-white font-semibold rounded-lg hover:border-white/[0.4] transition-all"
            >
              Falar com Especialista
            </Link>
          </div>

          {/* Trust signals */}
          <p className="text-sm text-[#7D8290]">
            Sem cartão de crédito · Análise 100% confidencial · Conformidade LGPD garantida
          </p>
        </div>

        {/* Elemento visual vetorial (sutil) */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.05] pointer-events-none">
          <div className="w-full h-full border-2 border-[#00E5FF] rounded-full" />
        </div>
      </section>

      {/* PROBLEMA / TENSÃO */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-mono text-[#00FF87] tracking-[0.15em] uppercase mb-4">
              O Cenário Atual
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Créditos que <span className="text-[#FFD700]">dormem</span> em seus arquivos.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#B8BCC8] text-lg leading-relaxed mb-4">
                Enquanto sua empresa processa rotina fiscal, oportunidades de recuperação de créditos PIS/COFINS passam despercebidas. Falta de tempo, expertise sobrecarregada ou simplesmente desconhecimento.
              </p>
              <p className="text-[#B8BCC8] text-lg leading-relaxed">
                O custo? Milhares em créditos não utilizados. O risco? Passivos tributários desnecessários.
              </p>
            </div>
            <div className="border-l border-[#00FF87]/30 pl-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#7D8290] uppercase tracking-wider">Tempo gasto hoje</p>
                  <p className="text-2xl font-bold text-white">40–60 horas</p>
                </div>
                <div>
                  <p className="text-sm text-[#7D8290] uppercase tracking-wider">Taxa de erro manual</p>
                  <p className="text-2xl font-bold text-white">15–25%</p>
                </div>
                <div>
                  <p className="text-sm text-[#7D8290] uppercase tracking-wider">Créditos perdidos/ano</p>
                  <p className="text-2xl font-bold text-[#00FF87]">R$ 50K+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES / CAPACIDADES */}
      <section className="py-32 px-6 bg-[#0A0A0C]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <p className="text-xs font-mono text-[#00FF87] tracking-[0.15em] uppercase mb-4">
              Como Funciona
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tecnologia que entrega <span className="text-[#00E5FF]">resultado.</span>
            </h2>
            <p className="text-lg text-[#B8BCC8] max-w-2xl mx-auto">
              Quatro pilares que transformam conformidade fiscal em oportunidade de recuperação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pilares.map((pilar, i) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={i}
                  className="border border-white/[0.08] rounded-xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00FF87]/30 transition-all"
                >
                  <div className="mb-6">
                    <Icon className="w-8 h-8 text-[#00FF87]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{pilar.titulo}</h3>
                  <p className="text-sm text-[#B8BCC8] mb-4">{pilar.descricao}</p>
                  <span className="text-xs px-2 py-1 rounded bg-[#00E5FF]/10 text-[#00E5FF]">
                    {pilar.destaque}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLANOS DE ASSINATURA */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-xs font-mono text-[#FFD700] uppercase mb-4">Planos de Assinatura</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white">
              Escolha o Plano <span className="text-[#00FF87]">Ideal</span> para Você
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* MENSAL */}
            <div className="border border-white/[0.12] rounded-2xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00FF87]/30 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#00FF87] mb-2">Mensal</h3>
                <p className="text-sm text-[#B8BCC8]">Flexibilidade para começar</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/[0.08]">
                <p className="text-xs text-[#7D8290] line-through mb-2">De R$ 497 /mês</p>
                <p className="text-5xl font-bold text-[#00FF87]">R$ 47<span className="text-sm text-[#B8BCC8]"> /mês</span></p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Análise de 1 EFD-CONTRIB
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Relatório executivo digital
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Suporte por email
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Conformidade LGPD completa
                </li>
              </ul>

              <button className="w-full py-3 border border-[#00FF87] text-[#00FF87] font-semibold rounded-lg hover:bg-[#00FF87]/10 transition-all">
                Assinar Mensal
              </button>
            </div>

            {/* SEMESTRAL (DESTAQUE) */}
            <div className="border-2 border-[#00FF87] rounded-2xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] relative ring-1 ring-[#00FF87]/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#00FF87] text-[#050505] text-xs font-bold px-3 py-1 rounded-full">
                  MAIS ESCOLHIDO
                </span>
              </div>

              <div className="mb-6 pt-6">
                <h3 className="text-2xl font-semibold text-[#00FF87] mb-2">Trimestral</h3>
                <p className="text-sm text-[#B8BCC8]">Mais economia, mais resultados</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/[0.08]">
                <p className="text-xs text-[#7D8290] line-through mb-2">De R$ 1.497 /trimestre</p>
                <p className="text-5xl font-bold text-[#00FF87] mb-1">R$ 127<span className="text-sm text-[#B8BCC8]"> /trimestre</span></p>
                <p className="text-xs text-[#7D8290]">Equivale a R$ 42,33/mês</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Todos os recursos do plano mensal
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Análise de até 5 EFDs
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Consultoria técnica (1 sessão)
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00FF87] font-bold mt-0.5">✓</span>
                  Suporte prioritário
                </li>
              </ul>

              <button className="w-full py-3 bg-[#00FF87] text-[#050505] font-semibold rounded-lg hover:bg-[#00e576] transition-all">
                Assinar Trimestral
              </button>
            </div>

            {/* ANUAL */}
            <div className="border border-[#00E5FF]/30 rounded-2xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00E5FF]/60 transition-all">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#00E5FF] mb-2">Anual</h3>
                <p className="text-sm text-[#B8BCC8]">Máximo desempenho e economia</p>
              </div>

              <div className="mb-8 pb-8 border-b border-white/[0.08]">
                <p className="text-xs text-[#7D8290] line-through mb-2">De R$ 2.997 /ano</p>
                <p className="text-5xl font-bold text-[#00E5FF] mb-1">R$ 397<span className="text-sm text-[#B8BCC8]"> /ano</span></p>
                <p className="text-xs text-[#7D8290]">Equivale a R$ 33,08/mês</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Todos os recursos dos planos anteriores
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Análise ilimitada de EFDs
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Consultoria estratégica (4 sessões)
                </li>
                <li className="flex items-start gap-3 text-sm text-[#B8BCC8]">
                  <span className="text-[#00E5FF] font-bold mt-0.5">✓</span>
                  Suporte VIP 24/7
                </li>
              </ul>

              <button className="w-full py-3 border border-[#00E5FF] text-[#00E5FF] font-semibold rounded-lg hover:bg-[#00E5FF]/10 transition-all">
                Assinar Anual
              </button>
            </div>
          </div>

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

      {/* FECHAMENTO / CTA FINAL */}
      <section className="py-32 px-6 bg-gradient-to-r from-[#00FF87] to-[#00E5FF]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#050505] mb-6">
            Seus créditos não podem esperar mais.
          </h2>
          <p className="text-[#050505]/80 text-lg mb-8 max-w-2xl mx-auto">
            A recuperação de PIS/COFINS é um direito. CreditorX torna isso simples, seguro e comprovado.
          </p>
          <Link
            href="/creditorx"
            className="inline-flex items-center gap-2 bg-[#050505] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#000000] transition-all"
          >
            Iniciar Minha Análise Gratuita <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-[#050505]/60 mt-6">
            15 minutos de análise. Sem compromisso. Sem cartão de crédito.
          </p>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 px-6 bg-[#050505] border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm text-[#B8BCC8]">Precisa de ajuda ou tem dúvidas?</p>
            <p className="text-xs text-[#7D8290] mt-1">CreditorX | Tríade IA | Tecnologia Tributária</p>
          </div>
          <Link
            href="/creditorx"
            className="px-8 py-3 bg-[#00FF87] text-[#050505] font-semibold rounded-lg hover:bg-[#00e576] transition-all"
          >
            Acessar Plataforma →
          </Link>
        </div>
      </section>
    </>
  );
}
