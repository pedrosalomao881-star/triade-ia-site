import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Insights | TRÍADE IA",
  description:
    "Artigos sobre reforma tributária, inteligência artificial para negócios e insights sobre transformação digital. Conteúdo especializado para empresas.",
  openGraph: {
    title: "Blog & Insights | TRÍADE IA",
    description:
      "Artigos sobre reforma tributária, inteligência artificial para negócios e insights sobre transformação digital.",
    type: "website",
    url: "https://triadeiaos.com/blog",
  },
};

const categorias = [
  {
    titulo: "📚 Artigos por Categoria",
    items: [
      {
        name: "Reforma Tributária",
        href: "/blog/reforma-tributaria",
        descricao: "Guias práticos sobre EC 132/2023, CBS, IBS, Split Payment",
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        name: "Sua Empresa AI-First",
        href: "/blog/sua-empresa-ai-first",
        descricao: "Transformação digital, maturidade IA e cases de sucesso",
        icon: <Zap className="w-5 h-5" />,
      },
    ],
  },
  {
    titulo: "💡 Insights",
    items: [
      {
        name: "Todos os Insights",
        href: "/blog/insights",
        descricao: "Análises profundas sobre negócios, operações e inovação",
        icon: <Lightbulb className="w-5 h-5" />,
      },
    ],
  },
  {
    titulo: "🚀 IA para Negócios",
    items: [
      {
        name: "Ver Todos os Segmentos",
        href: "/blog/ia-para-negocios",
        descricao: "IA aplicada a diferentes setores e negócios",
        icon: <Zap className="w-5 h-5" />,
      },
    ],
  },
];

export default function BlogHome() {
  return (
    <main className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="animate-fade-up flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
            <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">
              CONHECIMENTO
            </span>
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ice mb-6">
            Blog & Insights
          </h1>
          <p className="text-lg text-ice/50 max-w-2xl">
            Artigos especializados sobre reforma tributária, transformação digital e inteligência
            artificial para empresas. Conteúdo atualizado e baseado em casos reais.
          </p>
        </div>

        {/* Categorias */}
        <div className="space-y-20">
          {categorias.map((secao, idx) => (
            <section key={idx}>
              <h2 className="text-2xl md:text-3xl font-bold text-ice mb-8">{secao.titulo}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {secao.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group border border-white/[0.08] rounded-2xl p-8 hover:border-brand/40 hover:bg-white/[0.02] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-ice text-lg group-hover:text-brand transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-ice/30 group-hover:text-brand transition-colors" />
                    </div>
                    <p className="text-ice/50 text-sm leading-relaxed">{item.descricao}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-20 border-t border-white/[0.08] pt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-ice mb-4">Tem uma dúvida tributária?</h3>
            <p className="text-ice/50 mb-8 max-w-xl mx-auto">
              Solicite um diagnóstico gratuito com nossos especialistas.
            </p>
            <a
              href="https://wa.me/5564992966118?text=Gostaria%20de%20um%20diagnóstico%20gratuito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Solicitar Diagnóstico <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
