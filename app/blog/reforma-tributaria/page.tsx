import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Reforma Tributária 2026 | TRÍADE IA",
  description:
    "Guias completos sobre EC 132/2023, CBS, IBS, Split Payment e como sua empresa se prepara para a maior reforma tributária desde 1988.",
  openGraph: {
    title: "Reforma Tributária 2026 | TRÍADE IA",
    description:
      "Guias completos sobre EC 132/2023, CBS, IBS, Split Payment e como sua empresa se prepara.",
    type: "website",
    url: "https://triadeiaos.com/blog/reforma-tributaria",
  },
};

const artigos = [
  {
    slug: "saldo-credor-pis-cofins",
    titulo: "Saldo Credor PIS/COFINS",
    descricao: "Como Recuperar R$ 500K Que Sua Empresa Deixa Para Trás",
    resumo:
      "Sua empresa tem crédito PIS/COFINS dormindo na Receita? Guia prático: 8 validações, M100 vs M500, timeline de homologação e como recuperar em 3 meses.",
    autor: "TRÍADE IA",
    data: "2026-07-10",
    leitura: "12 min",
    categoria: "reforma",
  },
  {
    slug: "janela-de-ouro-janeiro-2027",
    titulo: "A Janela de Ouro: Seu Deadline Final",
    descricao: "Por Que Janeiro/2027 Muda Tudo",
    resumo:
      "Até janeiro de 2027, você pode homologar crédito tributário. Depois disso, perde o direito para sempre. Entenda por que é urgente agir agora.",
    autor: "TRÍADE IA",
    data: "2026-07-12",
    leitura: "8 min",
    categoria: "reforma",
  },
  {
    slug: "cbs-vs-ibs-2026",
    titulo: "CBS vs IBS: Entenda a Reforma",
    descricao: "O Que Muda No Seu Imposto em 2026",
    resumo:
      "A reforma tributária muda tudo. CBS substitui PIS+COFINS. IBS substitui ICMS+ISS. O que significa para sua empresa e como se preparar.",
    autor: "TRÍADE IA",
    data: "2026-07-14",
    leitura: "10 min",
    categoria: "reforma",
  },
];

interface ArticleCardProps {
  slug: string;
  titulo: string;
  descricao: string;
  resumo: string;
  autor: string;
  data: string;
  leitura: string;
}

function ArticleCard({ slug, titulo, descricao, resumo, autor, data, leitura }: ArticleCardProps) {
  const images: Record<string, string> = {
    "saldo-credor-pis-cofins": "/images/blog/saldo-credor-pis-cofins.png",
    "janela-de-ouro-janeiro-2027": "/images/blog/janela-de-ouro.png",
    "cbs-vs-ibs-2026": "/images/blog/cbs-vs-ibs.png",
  };

  return (
    <Link
      href={`/blog/reforma-tributaria/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-white/[0.08] rounded-2xl overflow-hidden hover:border-brand/40 hover:bg-white/[0.02] transition-all duration-300"
    >
      {images[slug] && (
        <div className="w-full h-64 bg-white/[0.02] overflow-hidden">
          <img
            src={images[slug]}
            alt={titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-8">
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
        <span className="font-semibold text-sm">Ler artigo</span>
        <ArrowRight className="w-4 h-4" />
      </div>
      </div>
    </Link>
  );
}

export default function ReformaTributariaCategory() {
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
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ice mb-4">
            Reforma Tributária
          </h1>
          <p className="text-lg text-ice/50">
            Guias, checklists e análises sobre EC 132/2023, CBS, IBS e como sua empresa se
            prepara para a maior reforma tributária desde 1988.
          </p>
        </div>

        {/* Artigos */}
        <div className="space-y-8 mb-20">
          {artigos.map((artigo) => (
            <ArticleCard key={artigo.slug} {...artigo} />
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-white/[0.08] pt-12">
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-ice mb-4">Tem dúvidas sobre a reforma?</h3>
            <p className="text-ice/50 mb-8 max-w-2xl mx-auto">
              Solicite um diagnóstico gratuito e personalizdo com nossos especialistas em
              tributação.
            </p>
            <a
              href="https://wa.me/5564992966118?text=Gostaria%20de%20entender%20como%20a%20reforma%20tributária%20afeta%20minha%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Solicitar Diagnóstico <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
