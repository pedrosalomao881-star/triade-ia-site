import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Sua Empresa AI-First | TRÍADE IA",
  description:
    "Transformação digital, inteligência artificial para negócios e cases de sucesso. Aprenda como operações inteligentes triplicam eficiência.",
  openGraph: {
    title: "Sua Empresa AI-First | TRÍADE IA",
    description:
      "Transformação digital com inteligência artificial. Aprenda como preparar sua empresa para o futuro.",
    type: "website",
    url: "https://triadeiaos.com/blog/sua-empresa-ai-first",
  },
};

const artigos = [
  {
    slug: "maturidade-ai-first",
    titulo: "Maturidade IA-First: 8 Passos",
    descricao: "Transforme Sua Empresa com Inteligência Artificial",
    resumo:
      "Não é sobre ter IA. É sobre ser uma empresa AI-First. 8 passos práticos para transformar sua operação, reduzir custos e aumentar receita.",
    autor: "TRÍADE IA",
    data: "2026-07-16",
    leitura: "15 min",
    categoria: "Sua Empresa AI-First",
    imagem: "/images/blog/maturidade-ai-first.png",
  },
  {
    slug: "otimizacao-fluxos-ia",
    titulo: "Otimização de Fluxos com IA",
    descricao: "Reduza custos operacionais e aumente produtividade",
    resumo:
      "Empresa de logística: 40 horas/semana perdidas em entrada manual. Com IA, 90% de redução em 2 meses. Descubra os 5 fluxos que mais consomem tempo e como automatizar.",
    autor: "TRÍADE IA",
    data: "2026-07-15",
    leitura: "12 min",
    categoria: "Sua Empresa AI-First",
    imagem: "/images/blog/otimizacao-fluxos-ia.png",
  },
  {
    slug: "ai-first-gestao-publica",
    titulo: "IA-First para Gestão Pública Municipal",
    descricao: "Implemente inteligência artificial como núcleo da arrecadação tributária",
    resumo:
      "EC 132/2023 redefiniu arrecadação municipal. Prefeituras que implementam IA-First recuperam R$ 2-5M/ano. Conheça os 3 pilares.",
    autor: "TRÍADE IA",
    data: "2026-07-15",
    leitura: "11 min",
    categoria: "Sua Empresa AI-First",
    imagem: "/images/blog/ia-para-gestao-publica.png",
  },
  {
    slug: "ai-first-agroindustrial",
    titulo: "IA-First no Agronegócio: Agroindustrial e Cooperativas",
    descricao: "Otimize operações e conformidade tributária com inteligência artificial",
    resumo:
      "Agroempresas processam 300 exportações/mês com mesma equipe que fazia 50. Créditos agrícolas recuperados automaticamente. 4 eixos da transformação.",
    autor: "TRÍADE IA",
    data: "2026-07-15",
    leitura: "11 min",
    categoria: "Sua Empresa AI-First",
    imagem: "/images/blog/ia-para-agroindustrial.png",
  },
  {
    slug: "ai-first-contador",
    titulo: "IA-First para Escritórios Contábeis",
    descricao: "Transforme seu escritório em consultoria estratégica com IA",
    resumo:
      "Contador deixa de ser operacional para estratégico. 60% menos tempo em entrada de dados, 95% menos erros, consultoria tributária como novo negócio.",
    autor: "TRÍADE IA",
    data: "2026-07-15",
    leitura: "12 min",
    categoria: "Sua Empresa AI-First",
    imagem: "/images/blog/ia-para-contador.png",
  },
  {
    slug: "ai-first-advogado-tributario",
    titulo: "IA-First para Advogados Tributários",
    descricao: "Domine a reforma tributária e aumente relevância jurídica com IA",
    resumo:
      "Reforma tributária criou 3 tipos de novos litígios. Advogado que dominar IA ganha 100+ clientes. Jurisprudência em tempo real, análise quantitativa, novo nicho.",
    autor: "TRÍADE IA",
    data: "2026-07-15",
    leitura: "11 min",
    categoria: "Sua Empresa AI-First",
    imagem: "/images/blog/ia-para-advogado-tributario.png",
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
  imagem: string;
}

function ArticleCard({ slug, titulo, descricao, resumo, autor, data, leitura, imagem }: ArticleCardProps) {

  return (
    <Link
      href={`/blog/sua-empresa-ai-first/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-white/[0.08] rounded-2xl overflow-hidden hover:border-brand/40 hover:bg-white/[0.02] transition-all duration-300"
    >
      <div className="w-full h-64 bg-white/[0.02] overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
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

export default function SuaEmpresaAIFirstCategory() {
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
            Sua Empresa AI-First
          </h1>
          <p className="text-lg text-ice/50">
            Transformação digital, inteligência artificial aplicada a negócios reais, e histórias de
            empresas que escalaram com IA integrada.
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
            <h3 className="text-2xl font-bold text-ice mb-4">Pronto para Transformar Sua Empresa?</h3>
            <p className="text-ice/50 mb-8 max-w-2xl mx-auto">
              Descubra como operações IA-First triplicam eficiência. Solicite um diagnóstico gratuito.
            </p>
            <a
              href="https://wa.me/5564992966118?text=Quero%20transformar%20minha%20empresa%20com%20IA"
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
