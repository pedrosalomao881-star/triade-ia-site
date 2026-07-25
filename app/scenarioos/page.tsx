import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, BarChart3, BookOpen, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ScenarioOS — Análise Tributária Municipal com IA | TRÍADE IA",
  description: "Plataforma de análise tributária municipal com IA para preparação da reforma. Triagem de regimes, documentação de decisão e acompanhamento normativo.",
};

export default function ScenarioOS() {
  const features = [
    {
      icon: BarChart3,
      title: "Triagem de Regimes",
      description: "Análise comparativa de Simples Nacional, Presumido e Lucro Real para seu município.",
    },
    {
      icon: BookOpen,
      title: "Base Normativa Completa",
      description: "Acesso a normas, prazos críticos, alíquotas e cronograma da reforma tributária.",
    },
    {
      icon: Shield,
      title: "Documentação Defensável",
      description: "Gere relatórios técnicos com premissas rastreáveis e referências normativas.",
    },
    {
      icon: CheckCircle2,
      title: "Reforma 2026-2033",
      description: "Acompanhe a transição de ISS para IBS/CBS com dados oficiais versionados.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-teal-900 via-slate-900 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">OS</span>
            </div>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-3 mb-5 leading-tight">
            ScenarioOS
          </h1>
          <p className="text-white/80 text-xl leading-relaxed max-w-2xl mb-8">
            Análise tributária municipal com IA para preparação da reforma. Triagem de regimes, documentação de decisão e acompanhamento normativo.
          </p>
          <Link
            href="/scenarioos-app"
            className="inline-flex items-center gap-3 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
          >
            Acessar Plataforma
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-teal-50 to-green-50 border border-teal-200 rounded-2xl p-12 text-center">
            <h2 className="font-display font-bold text-3xl text-slate-900 mb-4">
              Pronto para começar?
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
              Acesse a plataforma completa e comece sua análise tributária municipal com inteligência artificial.
            </p>
            <Link
              href="https://scenarioos-triade.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-colors"
            >
              Acessar ScenarioOS
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-8">Sobre o ScenarioOS</h2>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              O ScenarioOS é uma plataforma de análise tributária municipal assistida por inteligência artificial.
              Desenvolvido pela TRÍADE IA, foi projetado para secretarias municipais, empresas e contadores que
              precisam tomar decisões informadas sobre regimes tributários.
            </p>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">Base Normativa Versionada</h3>
              <p>
                A plataforma mantém uma matriz normativa versionada que acompanha as alterações legislativas,
                especialmente focada na Reforma Tributária 2026-2033 (EC 132/2023). Cada cálculo é rastreável
                e documentado com referências às normas que o fundamentam.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">Conformidade Garantida</h3>
              <p>
                Não oferecemos recomendações automáticas. Em vez disso, organizamos premissas, indicadores e
                evidências para qualificar a análise técnica. Todas as decisões permanecem sob responsabilidade
                do contador ou advogado tributário.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">Suporte a 9 Cidades</h3>
              <p>
                Atualmente, o ScenarioOS oferece análise versionada para 9 municípios em Goiás, Mato Grosso e
                Minas Gerais. Novas jurisdições são adicionadas conforme dados municipais são validados e
                catalogados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
