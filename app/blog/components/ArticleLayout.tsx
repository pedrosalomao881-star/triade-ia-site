import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

interface ArticleLayoutProps {
  slug: string;
  titulo: string;
  descricao: string;
  autor: string;
  data: string;
  tempoLeitura: string;
  categoria: string;
  categoriaLink: string;
  children: React.ReactNode;
  keywords?: string;
  imagemUrl?: string;
}

export function ArticleHeader({
  slug,
  titulo,
  descricao,
  autor,
  data,
  tempoLeitura,
  categoria,
  categoriaLink,
  imagemUrl,
}: Omit<ArticleLayoutProps, "children">) {
  return (
    <>
      {/* Imagem de destaque */}
      {imagemUrl && (
        <div className="w-full mb-12 rounded-2xl overflow-hidden border border-white/[0.08]">
          <img
            src={imagemUrl}
            alt={titulo}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-ice/50">
        <Link href="/blog" className="hover:text-ice transition-colors">
          Blog
        </Link>
        <span>/</span>
        <Link href={categoriaLink} className="hover:text-ice transition-colors">
          {categoria}
        </Link>
        <span>/</span>
        <span className="text-ice/70">{titulo}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
          <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">
            {categoria}
          </span>
          <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
        </div>

        <h1 className="font-display font-bold text-5xl md:text-6xl text-ice mb-4 leading-tight">
          {titulo}
        </h1>

        <p className="text-xl text-ice/60 mb-8">{descricao}</p>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-ice/50 pb-8 border-b border-white/[0.08]">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" /> {autor}
          </span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {new Date(data).toLocaleDateString("pt-BR")}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> {tempoLeitura} de leitura
          </span>
        </div>
      </div>
    </>
  );
}

export function ArticleFooter({ categoriaLink, categoria }: { categoriaLink: string; categoria: string }) {
  return (
    <footer className="mt-20 border-t border-white/[0.08] pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Back to category */}
        <Link
          href={categoriaLink}
          className="group flex items-center gap-2 text-brand hover:gap-4 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para {categoria}</span>
        </Link>

        {/* CTA */}
        <a
          href="https://wa.me/5564992966118"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-brand hover:gap-4 transition-all"
        >
          <span>Conversar com especialista</span>
          <span>→</span>
        </a>
      </div>

      {/* Related */}
      <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8">
        <h3 className="text-lg font-bold text-ice mb-4">Explore mais conteúdo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/blog"
            className="text-ice/60 hover:text-ice transition-colors text-sm"
          >
            ← Ver todos os artigos
          </Link>
          <Link
            href={categoriaLink}
            className="text-ice/60 hover:text-ice transition-colors text-sm"
          >
            ← Ver categoria {categoria}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function ArticleLayout({
  slug,
  titulo,
  descricao,
  autor,
  data,
  tempoLeitura,
  categoria,
  categoriaLink,
  children,
  imagemUrl,
}: ArticleLayoutProps) {
  return (
    <>
      <ArticleHeader
        slug={slug}
        titulo={titulo}
        descricao={descricao}
        autor={autor}
        data={data}
        tempoLeitura={tempoLeitura}
        categoria={categoria}
        categoriaLink={categoriaLink}
        imagemUrl={imagemUrl}
      />

      {/* Content */}
      <article className="prose prose-invert max-w-none mb-20">
        {children}
      </article>

      <ArticleFooter categoriaLink={categoriaLink} categoria={categoria} />
    </>
  );
}
