import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { WA_DEFAULT } from "@/lib/whatsapp";

const WA_LINK = WA_DEFAULT;

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface PilarPageProps {
  tag: string;
  title: string;
  description: string;
  features: Feature[];
  steps: Step[];
  results: string[];
}

export default function PilarPage({ tag, title, description, features, steps, results }: PilarPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold text-brand border border-brand/30 rounded-full px-4 py-1 mb-6 uppercase tracking-widest">
            {tag}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ice leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-ice/60 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors text-sm"
            >
              Agendar Diagnóstico de IA
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-navy-soft">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-semibold text-2xl text-ice text-center mb-12">O que entregamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="group border border-white/10 rounded-xl p-6 hover:border-brand/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4 group-hover:bg-brand/20 transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-display font-semibold text-ice text-base mb-2">{f.title}</h3>
                <p className="text-ice/50 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-semibold text-2xl text-ice text-center mb-12">Como funciona</h2>
          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-brand/50 flex items-center justify-center text-brand font-display font-semibold text-sm">
                  {s.number}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ice mb-1">{s.title}</h3>
                  <p className="text-ice/50 text-sm leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 bg-navy-soft">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-semibold text-2xl text-ice text-center mb-10">Resultados que sua empresa vai perceber</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-brand mt-0.5 flex-shrink-0">
                  <Check className="w-5 h-5" strokeWidth={2} />
                </span>
                <span className="text-ice/70 text-sm leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-ice mb-4">
            Pronto para colocar essa solução pra trabalhar?
          </h2>
          <p className="text-ice/50 mb-8 text-sm">
            Converse com nossa equipe e descubra como aplicar Inteligência Artificial no seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors text-sm"
            >
              Falar com especialista
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center text-ice/60 hover:text-ice text-sm transition-colors"
            >
              Ver outras soluções →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
