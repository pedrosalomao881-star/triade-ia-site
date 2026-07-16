import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights | TRÍADE IA",
  description:
    "Análises profundas sobre negócios, operações, inteligência artificial e transformação digital.",
  openGraph: {
    title: "Insights | TRÍADE IA",
    description: "Análises profundas e insights sobre negócios e inovação.",
    type: "website",
    url: "https://triadeiaos.com/blog/insights",
  },
};

const insights = [
  {
    slug: "diagnostico-antes-da-ferramenta",
    titulo: "Diagnóstico Antes de Ferramenta",
    descricao: "A lição de R$ 300 mil desperdiçados em automação errada",
    resumo:
      "Empresas que compram ferramentas de IA antes de mapear o problema real desperdiçam investimento e criam mais complexidade.",
    autor: "TRÍADE IA",
    data: "2026-07-09",
    leitura: "6 min",
  },
  {
    slug: "o-que-e-maturidade-ai-first",
    titulo: "O que é Maturidade AI-First?",
    descricao: "Por que importa mais do que automação",
    resumo:
      "A maioria das empresas confunde automação com transformação. Entenda os 5 níveis de maturidade AI-First.",
    autor: "TRÍADE IA",
    data: "2026-07-11",
    leitura: "7 min",
  },
  {
    slug: "clinicas-perdem-receita-antes-do-paciente-chegar",
    titulo: "Por Que Clínicas Perdem Receita",
    descricao: "Antes do paciente chegar",
    resumo:
      "Faltas, cancelamentos tardios e processos manuais são buracos de receita que se acumulam silenciosamente.",
    autor: "TRÍADE IA",
    data: "2026-07-13",
    leitura: "5 min",
  },
];

interface InsightCardProps {
  slug: string;
  titulo: string;
  descricao: string;
  resumo: string;
  autor: string;
  data: string;
  leitura: string;
}

function InsightCard({ slug, titulo, descricao, resumo, autor, data, leitura }: InsightCardProps) {
  return (
    <Link
      href={`/blog/insights/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-white/[0.08] rounded-2xl p-8 hover:border-brand/40 hover:bg-white/[0.02] transition-all duration-300"
    >
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-ice group-hover:text-brand transition-colors mb-2">
          {titulo}
        </h3>
        <p className="text-ice/60 text-lg">{descricao}</p>
      </div>

      <p className="text-ice/50 mb-6 leading-relaxed">{resumo}</p>

      <div className="flex items-center justify-between text-sm text-ice/40 mb-6">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" /> {autor}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {new Date(data).toLocaleDateString("pt-BR")}
          </span>
        </div>
        <span>{leitura} de leitura</span>
      </div>

      <div className="flex items-center gap-2 text-brand group-hover:gap-4 transition-all">
        <span className="font-semibold text-sm">Ler insight</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}

export default function InsightsCategory() {
  return (
    <main className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="animate-fade-up flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
            <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">
              CATEGORIA
            </span>
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ice mb-4">Insights</h1>
          <p className="text-lg text-ice/50">
            Análises profundas sobre negócios, operações, inteligência artificial e transformação
            digital.
          </p>
        </div>

        {/* Insights */}
        <div className="space-y-8 mb-20">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} {...insight} />
          ))}
        </div>
      </div>
    </main>
  );
}
