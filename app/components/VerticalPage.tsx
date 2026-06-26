import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WA_DEFAULT } from "@/lib/whatsapp";

export interface FaqItem {
  q: string;
  a: string;
}

export interface VerticalPageProps {
  tag: string;
  title: string;
  subtitle: string;
  descricao: string;
  desafio: string;
  comIA: string[];
  impactos: string[];
  faq: FaqItem[];
  schema: object;
}

export function buildVerticalMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title: `${title} | TRÍADE IA`, description },
  };
}

export default function VerticalPage({
  tag,
  title,
  subtitle,
  descricao,
  desafio,
  comIA,
  impactos,
  faq,
  schema,
}: VerticalPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold text-brand border border-brand/20 rounded-full px-4 py-1 mb-6 uppercase tracking-widest">
            {tag}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ice leading-tight mb-4">
            {title}
          </h1>
          <p className="text-ice/45 text-base mb-6 font-display">{subtitle}</p>
          <p className="text-ice/55 leading-relaxed text-sm max-w-2xl mx-auto mb-10">{descricao}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold px-6 py-3.5 rounded-lg hover:bg-brand-dark transition-colors text-sm"
            >
              Solicitar Diagnóstico AI-First <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center text-ice/45 hover:text-ice text-sm transition-colors border border-white/[0.08] rounded-lg px-6 py-3.5 hover:border-white/[0.18]"
            >
              Fazer Quiz de Maturidade →
            </Link>
          </div>
        </div>
      </section>

      {/* Desafio */}
      <section className="py-20 px-6 bg-navy-soft">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest block mb-4">O Desafio</span>
              <p className="text-ice/60 text-sm leading-relaxed">{desafio}</p>
            </div>
            <div>
              <span className="text-xs font-semibold text-brand/60 uppercase tracking-widest block mb-4">Com IA</span>
              <ul className="flex flex-col gap-3">
                {comIA.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-ice/65 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impactos */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest">Resultados</span>
            <h2 className="font-display font-semibold text-2xl text-ice mt-3">Impactos mensuráveis</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {impactos.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-white/[0.06] rounded-xl hover:border-white/[0.12] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-ice/65 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-navy-soft">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest">FAQ</span>
            <h2 className="font-display font-semibold text-2xl text-ice mt-3">Dúvidas frequentes</h2>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.05]">
            {faq.map((f, i) => (
              <div key={i} className="py-5">
                <p className="font-display font-semibold text-ice text-sm mb-2">{f.q}</p>
                <p className="text-ice/42 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-ice mb-4">Próximo passo</h2>
          <p className="text-ice/45 text-sm leading-relaxed mb-8">
            Em uma sessão de 60 a 90 minutos, mapeamos as oportunidades de IA no seu negócio
            e entregamos um Roadmap personalizado — gratuito, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold px-7 py-4 rounded-lg hover:bg-brand-dark transition-colors text-sm"
            >
              Solicitar Diagnóstico AI-First <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-ice/45 hover:text-ice text-sm transition-colors border border-white/[0.08] rounded-lg px-6 py-4 hover:border-white/[0.18]"
            >
              Falar pelo WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
