import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights — IA, Estratégia e Transformação Empresarial",
  description:
    "Artigos sobre Inteligência Artificial aplicada a negócios, estratégia AI-First e transformação empresarial. Da TRÍADE IA — consultoria baseada em Itumbiara, Goiás.",
};

const artigos = [
  {
    slug: "o-que-e-maturidade-ai-first",
    categoria: "Estratégia",
    titulo: "O que é Maturidade AI-First e por que importa mais do que automação",
    resumo: "A maioria das empresas confunde automação com transformação. Entenda a diferença entre os 5 níveis de maturidade AI-First e por que avançar de nível exige mais do que contratar uma ferramenta.",
    tempo: "7 min",
    destaque: true,
  },
  {
    slug: "clinicas-perdem-receita-antes-do-paciente-chegar",
    categoria: "Clínicas e Saúde",
    titulo: "Por que clínicas perdem até 25% da receita antes do paciente chegar",
    resumo: "Faltas, cancelamentos tardios e processos de confirmação manuais não são apenas inconvenientes operacionais — são buracos de receita que se acumulam silenciosamente mês a mês.",
    tempo: "5 min",
    destaque: false,
  },
  {
    slug: "diagnostico-antes-da-ferramenta",
    categoria: "Método",
    titulo: "Diagnóstico antes de ferramenta: a lição de R$ 300 mil desperdiçados em automação errada",
    resumo: "Empresas que compram ferramentas de IA antes de mapear o problema real desperdiçam investimento e criam mais complexidade. Veja como evitar o erro mais comum na adoção de IA.",
    tempo: "6 min",
    destaque: false,
  },
];

const categorias = ["Todos", "Estratégia", "Método", "Clínicas e Saúde", "Contabilidade", "Cooperativas", "Agronegócio"];

export default function Insights() {
  return (
    <>
      {/* DARK: Header */}
      <section className="pt-24 pb-16 px-6 bg-navy border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold text-brand border border-brand/20 rounded-full px-4 py-1 mb-6 uppercase tracking-widest">
            Insights
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ice leading-tight mb-4">
            Inteligência Artificial aplicada a negócios reais
          </h1>
          <p className="text-ice/45 text-sm leading-relaxed max-w-xl">
            Estratégia, método e casos de transformação — escritos por quem implementa IA em operações reais, não por quem vende hype.
          </p>
        </div>
      </section>

      {/* LIGHT: Artigos */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-4xl mx-auto">
          {/* Categorias */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categorias.map((c, i) => (
              <span key={i} className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors cursor-pointer ${i === 0 ? "bg-ink text-paper border-ink" : "bg-white text-ink-muted border-paper-border hover:border-ink-muted"}`}>
                {c}
              </span>
            ))}
          </div>

          {/* Destaque */}
          {artigos.filter(a => a.destaque).map(a => (
            <Link key={a.slug} href={`/insights/${a.slug}`} className="group block bg-white border border-paper-border rounded-2xl p-10 shadow-sm hover:shadow-md hover:border-brand/30 transition-all mb-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-brand bg-brand/[0.08] border border-brand/15 rounded-full px-3 py-1">{a.categoria}</span>
                <span className="text-xs text-ink-muted">{a.tempo} de leitura</span>
              </div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4 leading-snug group-hover:text-brand transition-colors">{a.titulo}</h2>
              <p className="text-ink-soft text-sm leading-relaxed mb-6">{a.resumo}</p>
              <span className="inline-flex items-center gap-2 text-brand text-sm font-semibold group-hover:gap-3 transition-all">
                Ler artigo <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </span>
            </Link>
          ))}

          {/* Demais artigos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {artigos.filter(a => !a.destaque).map(a => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="group bg-white border border-paper-border rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-brand/30 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-ink-muted bg-paper-soft border border-paper-border rounded-full px-3 py-1">{a.categoria}</span>
                  <span className="text-xs text-ink-muted">{a.tempo}</span>
                </div>
                <h2 className="font-display font-semibold text-ink text-base mb-3 leading-snug group-hover:text-brand transition-colors flex-1">{a.titulo}</h2>
                <p className="text-ink-muted text-sm leading-relaxed mb-5">{a.resumo}</p>
                <span className="inline-flex items-center gap-1.5 text-brand text-sm font-medium group-hover:gap-2.5 transition-all mt-auto">
                  Ler <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DARK: CTA */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl text-ice mb-4">Aplique o que leu na sua empresa</h2>
          <p className="text-ice/45 text-sm leading-relaxed mb-8">
            O Diagnóstico AI-First mapeia exatamente onde a IA gera retorno no seu contexto específico.
          </p>
          <Link href="/diagnostico" className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors text-sm">
            Solicitar Diagnóstico <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </section>
    </>
  );
}
