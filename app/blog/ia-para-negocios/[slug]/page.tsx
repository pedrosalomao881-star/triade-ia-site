import type { Metadata } from "next";
import Link from "next/link";
import { use } from "react";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

const setoresData: Record<string, any> = {
  clinicas: {
    titulo: "IA para Clínicas e Laboratórios",
    descricao: "Confirmação de consultas, triagem automática, reagendamento inteligente",
    imagemUrl: "/images/blog/ia-para-clinicas.png",
  },
  contabilidade: {
    titulo: "IA para Escritórios Contábeis",
    descricao: "Classificação de documentos, alertas de prazo, análise de inconsistências",
    imagemUrl: "/images/blog/ia-para-contabilidade.png",
  },
  cooperativas: {
    titulo: "IA para Cooperativas e Agronegócio",
    descricao: "Gestão de associados, comunicação em escala, adimplência automatizada",
    imagemUrl: "/images/blog/ia-para-cooperativas.png",
  },
  distribuidoras: {
    titulo: "IA para Distribuidoras",
    descricao: "Pedidos automatizados, integração com sistema, sem erros de digitação",
    imagemUrl: "/images/blog/ia-para-distribuidoras.png",
  },
  imobiliarias: {
    titulo: "IA para Imobiliárias",
    descricao: "Qualificação de leads, agendamento automático, follow-up contínuo",
    imagemUrl: "/images/blog/ia-para-imobiliarias.png",
  },
  supermercados: {
    titulo: "IA para Supermercados e Comércio",
    descricao: "Atendimento 24h, campanhas personalizadas, retenção de clientes",
    imagemUrl: "/images/blog/ia-para-supermercados.png",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const setor = setoresData[slug];

  if (!setor) {
    return { title: "Setor não encontrado" };
  }

  return {
    title: `${setor.titulo} | TRÍADE IA`,
    description: setor.descricao,
    openGraph: {
      title: setor.titulo,
      description: setor.descricao,
      type: "article",
      url: `https://triadeiaos.com/blog/ia-para-negocios/${slug}`,
    },
  };
}

export default function SetorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const setor = setoresData[slug];

  if (!setor) {
    return (
      <main className="min-h-screen bg-navy py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-ice mb-4">Setor não encontrado</h1>
          <Link href="/blog/ia-para-negocios" className="text-brand hover:underline">
            ← Voltar para IA para Negócios
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
          titulo={setor.titulo}
          descricao={setor.descricao}
          autor="TRÍADE IA"
          data="2026-07-15"
          tempoLeitura="8 min"
          categoria="IA para Negócios"
          categoriaLink="/blog/ia-para-negocios"
          imagemUrl={setor.imagemUrl}
        >
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">Como IA Transforma Este Setor</h2>
            <p className="text-ice/70 mb-6 leading-relaxed">
              A inteligência artificial está revolucionando operações em {setor.titulo.toLowerCase()}.
              Quando implementada corretamente, IA não substitui pessoas — libera tempo para trabalho estratégico e relacional.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-ice mb-4">Resultados Comprovados</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-ice/70">
                  <span className="text-brand">✓</span>
                  <span>Redução significativa de tarefas manuais repetitivas</span>
                </li>
                <li className="flex gap-3 text-ice/70">
                  <span className="text-brand">✓</span>
                  <span>Disponibilidade 24/7 sem aumento de custos operacionais</span>
                </li>
                <li className="flex gap-3 text-ice/70">
                  <span className="text-brand">✓</span>
                  <span>Melhora na qualidade e consistência dos serviços</span>
                </li>
                <li className="flex gap-3 text-ice/70">
                  <span className="text-brand">✓</span>
                  <span>Aumento de satisfação de clientes/associados</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-16 bg-brand/10 border border-brand/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-ice mb-4">Pronto para transformar seu negócio?</h3>
            <p className="text-ice/70 mb-6">
              Solicite uma análise gratuita de como IA pode impactar sua operação específica.
            </p>
            <a
              href="https://wa.me/5564992966118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Conversar com Especialista →
            </a>
          </section>
        </ArticleLayout>
      </div>
    </main>
  );
}
