import type { Metadata } from "next";
import Link from "next/link";
import { use } from "react";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

const insightData: Record<string, any> = {
  "diagnostico-antes-da-ferramenta": {
    titulo: "Diagnóstico Antes de Ferramenta",
    descricao: "A lição de R$ 300 mil desperdiçados em automação errada",
    imagemUrl: "/images/blog/insight-diagnostico.png",
    conteudo: `Uma empresa de logística comprou um software de IA por R$ 300 mil. Objetivo: automatizar a classificação de pedidos.

Resultado: 90% de rejeição pelo sistema.

Por quê? Ninguém fez diagnóstico. O real problema não era classificação — era falta de padronização nos dados de entrada. A ferramenta não resolveu nada. Só multiplicou erro.

A lição é clara: antes de comprar qualquer ferramenta de IA, você precisa fazer diagnóstico. Mapear fluxos, entender gargalos reais, validar dados.

Automação sem diagnóstico é como cirurgia sem exame: provável que piore.`,
  },
  "o-que-e-maturidade-ai-first": {
    titulo: "O que é Maturidade AI-First?",
    descricao: "Por que importa mais do que automação",
    imagemUrl: "/images/blog/insight-maturidade.png",
    conteudo: `Maturidade AI-First não é ter IA. É ter IA integrada na forma como você toma decisões, desenha processos, e estrutura operações.

Nível 1 (Reativa): Você vê um problema e tenta resolver com uma ferramenta de IA. Isolado. Funciona só naquele lugar.

Nível 2 (Conectada): IA resolve problema + conecta dados com outros processos. Começa a escalar.

Nível 3 (Inteligência): IA não só resolve — previne. Você usa dados históricos para antecipar problema.

Nível 4 (Sistêmica): IA está em tudo. Vendas, operação, financeiro — tudo fala entre si via IA.

Nível 5 (Autonomous): A empresa toma decisão sozinha. IA não é ferramenta — é neurônio central.

Automação resolve UM problema. Maturidade resolve TODA A EMPRESA.`,
  },
  "clinicas-perdem-receita-antes-do-paciente-chegar": {
    titulo: "Por Que Clínicas Perdem Receita",
    descricao: "Antes do paciente chegar",
    imagemUrl: "/images/blog/insight-clinicas.png",
    conteudo: `Clínica com 50 consultórios. Receita anual: R$ 2.5M. Lucro: R$ 300K.

Faltas: 20% (10 pacientes não aparecem por dia).
Cancelamento tardio: 15% (5 pacientes desistem na hora).
Confirmação manual: 4 horas/dia em equipe administrativa.

Buraco silencioso: R$ 500K/ano em receita perdida.

Não é negligência. É falta de visibilidade. Ninguém sabe quanto está sendo perdido porque o dado vive em agendas fragmentadas.

Com IA conectada: confirmação automática por WhatsApp reduz falta de 20% para 8%. Reagendamento inteligente recupera 70% dos cancelamentos.

Impacto: +R$ 400K em receita nova. Sem contratar.

A receita não está escondida em procedimento novo. Está no buraco que você não vê.`,
  },
};

export const metadata: Metadata = {
  title: "Insight | TRÍADE IA",
  description: "Insight profundo sobre negócios e transformação digital.",
};

export default function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const insight = insightData[slug];

  if (!insight) {
    return (
      <main className="min-h-screen bg-navy py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-ice mb-4">Insight não encontrado</h1>
          <Link href="/blog/insights" className="text-brand hover:underline">
            ← Voltar para Insights
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ArticleLayout
          slug={slug}
          titulo={insight.titulo}
          descricao={insight.descricao}
          autor="TRÍADE IA"
          data="2026-07-15"
          tempoLeitura="7 min"
          categoria="Insights"
          categoriaLink="/blog/insights"
          imagemUrl={insight.imagemUrl}
        >
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">{insight.titulo}</h2>
            <p className="text-ice/70 leading-relaxed">{insight.conteudo}</p>
          </section>

          <section>
            <div className="bg-brand/10 border border-brand/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-ice mb-4">Quer conversar sobre isso?</h3>
              <p className="text-ice/70 mb-6">
                Solicite uma consulta gratuita com nossos especialistas.
              </p>
              <a
                href="https://wa.me/5564992966118"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
              >
                Conversar →
              </a>
            </div>
          </section>
        </ArticleLayout>
      </div>
    </main>
  );
}
