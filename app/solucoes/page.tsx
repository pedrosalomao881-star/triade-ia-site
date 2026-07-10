import type { Metadata } from "next";
import { ArrowRight, Zap, BarChart3, BookOpen, Briefcase, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soluções — Tríade IA",
  description: "Catálogo completo de ferramentas, sistemas e plataformas IA para tributação, crédito, contabilidade e gestão pública.",
};

const sistemasPremiun = [
  {
    id: "soaf-v3",
    titulo: "SOAF V3.0",
    descricao: "Plataforma de auditoria fiscal com IA para secretarias municipais. 7 agentes especializados em análise tributária.",
    categoria: "Gestão Pública",
    cor: "from-blue-500 to-cyan-500",
    icon: Briefcase,
    href: "https://app.triadeiaos.com/login",
    preco: "Sob demanda",
  },
  {
    id: "soaf-privado-empresario",
    titulo: "SOAF Privado — Empresário",
    descricao: "Auditoria fiscal para empresas. Análise de conformidade tributária e detecção de riscos fiscais.",
    categoria: "Empresas",
    cor: "from-green-500 to-emerald-500",
    icon: TrendingUp,
    href: "https://triadeiaos.com/soaf-privado/empresario/index.html",
    preco: "Sob demanda",
  },
  {
    id: "soaf-privado-contador",
    titulo: "SOAF Privado — Contador",
    descricao: "Ferramenta completa para contadores. Análise de conformidade, alertas de prazo e relatórios de risco.",
    categoria: "Contadores",
    cor: "from-purple-500 to-pink-500",
    icon: BarChart3,
    href: "https://triadeiaos.com/soaf-privado/contador/index.html",
    preco: "Sob demanda",
  },
  {
    id: "creditos",
    titulo: "CreditOS",
    descricao: "Sistema inteligente de análise de crédito. Score de solvência, propostas de financiamento e gestão de risco.",
    categoria: "Crédito",
    cor: "from-orange-500 to-red-500",
    icon: Zap,
    href: "https://triadeiaos.com/creditOS/sistema",
    preco: "Sob demanda",
  },
  {
    id: "creditorx",
    titulo: "CreditorX",
    descricao: "Validador inteligente de crédito tributário PIS/COFINS. Análise em tempo real com 8-checks de elegibilidade e gerador de parecer técnico defensável.",
    categoria: "Crédito Tributário",
    cor: "from-rose-500 to-pink-500",
    icon: BarChart3,
    href: "https://triadeiaos.com/creditorX/sistema",
    preco: "Sob demanda",
  },
  {
    id: "contabos",
    titulo: "ContabOS",
    descricao: "CRM para contadores e escritórios. Gestão de clientes, documentos e automação contábil com IA.",
    categoria: "Contabilidade",
    cor: "from-indigo-500 to-blue-500",
    icon: Briefcase,
    href: "https://app-contabos.triadeiaos.com/solucoes",
    preco: "Sob demanda",
  },
];

const ferramentas = [
  {
    id: "fator-r",
    titulo: "Simulador Fator R",
    descricao: "Descubra se sua empresa tem vantagem no Simples Nacional.",
    preco: "R$ 9,90",
    href: "/ferramentas/fator-r",
    cor: "bg-green-100 border-green-300",
  },
  {
    id: "recalculador",
    titulo: "Recalculador CBS/IBS",
    descricao: "Calcule o novo preço de venda para manter a margem.",
    preco: "R$ 9,90",
    href: "/ferramentas/recalculador",
    cor: "bg-blue-100 border-blue-300",
  },
  {
    id: "checklist",
    titulo: "Checklist Split Payment",
    descricao: "8 itens críticos para sua empresa estar pronta.",
    preco: "R$ 9,90",
    href: "/ferramentas/checklist-split",
    cor: "bg-amber-100 border-amber-300",
  },
  {
    id: "planilha",
    titulo: "Planilha de Transição",
    descricao: "Simule o impacto do Split Payment no caixa.",
    preco: "R$ 9,90",
    href: "/ferramentas/planilha-transicao",
    cor: "bg-orange-100 border-orange-300",
  },
  {
    id: "regime",
    titulo: "Regime Certo",
    descricao: "Compare SN, Lucro Presumido e Lucro Real.",
    preco: "R$ 9,90",
    href: "/ferramentas/regime-certo",
    cor: "bg-purple-100 border-purple-300",
  },
  {
    id: "compendio",
    titulo: "Compêndio Tributário",
    descricao: "Guia completo dos regimes tributários.",
    preco: "Gratuito",
    href: "/ferramentas/compendio",
    cor: "bg-indigo-100 border-indigo-300",
  },
];

const ferramentasExtras = [
  {
    titulo: "Fui Taxado!",
    descricao: "Plataforma de denúncia de arbitrariedade tributária.",
    href: "https://triadeiaos.com/fui-taxado",
    preco: "R$ 9,90",
  },
  {
    titulo: "Lixômetro",
    descricao: "Medidor de conformidade tributária e fiscal.",
    href: "https://triadeiaos.com/lixometro",
    preco: "R$ 9,90",
  },
  {
    titulo: "CreditOS Constelação",
    descricao: "Análise visual de créditos e saldo devedor.",
    href: "https://triadeiaos.com/creditOS/constelacao",
    preco: "Gratuito",
  },
  {
    titulo: "Portfolio",
    descricao: "Recuperação de créditos tributários — cases de sucesso.",
    href: "https://triadeiaos.com/portfolio/recuperacao-creditos-tributarios",
    preco: "Gratuito",
  },
];

export default function Solucoes() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">
            Catálogo Completo
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-5 leading-tight">
            Soluções TRÍADE IA
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Ferramentas, sistemas e plataformas IA para tributação, crédito, contabilidade e gestão pública.
          </p>
        </div>
      </section>

      {/* Sistemas Premium */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-brand uppercase tracking-widest">Sistemas Premium</span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 leading-tight">
              Plataformas Completas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sistemasPremiun.map((sistema) => {
              const Icon = sistema.icon;
              return (
                <Link
                  key={sistema.id}
                  href={sistema.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${sistema.cor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Content */}
                  <div className="relative p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${sistema.cor} flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-widest">
                        {sistema.categoria}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-xl text-gray-900 mb-3 group-hover:text-gray-700">
                      {sistema.titulo}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                      {sistema.descricao}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">{sistema.preco}</span>
                      <ArrowRight className="w-5 h-5 text-brand group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ferramentas Low Ticket */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-brand uppercase tracking-widest">
              Ferramentas Tributárias
            </span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 leading-tight">
              Calculadoras & Simuladores
            </h2>
            <p className="text-gray-600 text-sm mt-3 max-w-2xl">
              Ferramentas de baixo ticket para análise rápida da sua situação tributária.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ferramentas.map((ferramenta) => (
              <Link
                key={ferramenta.id}
                href={ferramenta.href}
                className={`group rounded-xl border-2 ${ferramenta.cor} p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                  {ferramenta.titulo}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{ferramenta.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-gray-900">{ferramenta.preco}</span>
                  <ArrowRight className="w-4 h-4 text-brand group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas Extras */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-brand uppercase tracking-widest">Ferramentas Especializadas</span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 leading-tight">
              Análise & Diagnóstico
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ferramentasExtras.map((ferramenta, i) => (
              <Link
                key={i}
                href={ferramenta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-l-4 border-brand bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:border-brand-dark"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand flex-1">
                    {ferramenta.titulo}
                  </h3>
                  <span className="text-xs font-bold text-brand ml-2 whitespace-nowrap">
                    {ferramenta.preco}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{ferramenta.descricao}</p>
                <span className="inline-flex items-center gap-2 text-brand text-sm font-medium group-hover:gap-3 transition-all">
                  Acessar <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-gradient-to-r from-brand to-brand-dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-5">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-md mx-auto">
            Comece com uma ferramenta gratuita ou solicite uma demo de um sistema premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/ferramentas"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Usar Ferramentas Gratuitas <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              Solicitar Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
