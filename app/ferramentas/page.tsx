import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Ferramentas Tributárias Gratuitas — Tríade IA",
  description:
    "Calculadoras e ferramentas gratuitas para navegar a Reforma Tributária EC 132/2023. Fator R, CBS/IBS, Split Payment e mais.",
}; // force rebuild

const ferramentas = [
  {
    titulo: "Simulador Fator R",
    descricao: "Descubra se sua empresa tem vantagem no Simples Nacional usando o Fator R — índice de folha sobre receita que define a alíquota do ISSQN.",
    href: "/ferramentas/fator-r",
    tag: "Simples Nacional",
  },
  {
    titulo: "Recalculador CBS/IBS",
    descricao: "Calcule qual deve ser o novo preço de venda para manter a mesma margem após a entrada do CBS e IBS em 2027–2033.",
    href: "/ferramentas/recalculador",
    tag: "EC 132/2023",
  },
  {
    titulo: "Checklist Split Payment",
    descricao: "8 itens críticos para sua empresa estar pronta para o Split Payment. Verifique cada ponto e receba um score personalizado.",
    href: "/ferramentas/checklist-split",
    tag: "Split Payment",
  },
  {
    titulo: "Planilha de Transição 2026–2033",
    descricao: "Simule o impacto do Split Payment no capital de giro da sua empresa ano a ano.",
    href: "/ferramentas/planilha-transicao",
    tag: "Split Payment",
  },
  {
    titulo: "Compêndio Tributário",
    descricao: "Guia completo dos regimes tributários brasileiros: Simples Nacional, Lucro Presumido e Lucro Real — com EC 132/2023 incorporada.",
    href: "https://triade-guia-tributario.vercel.app",
    tag: "Guia",
  },
];

const sistemas = [
  {
    titulo: "SOAF v3.0 — Sistema Operacional de Auditoria Fiscal",
    descricao: "Plataforma de auditoria fiscal com IA para secretarias municipais. 7 agentes especializados: Terminal Fiscal, Investigador de Sonegação, Apontador de Omissão, Classificador de Conformidade e geração de autos de infração. Reforma Tributária integrada — ISS, IBS, ITBI, IPTU.",
    href: "https://app.triadeiaos.com",
    tag: "Para prefeituras",
  },
  {
    titulo: "ContabOS — Sistema para Escritórios Contábeis",
    descricao: "Workspace de IA para contadores: análise de documentos, classificação automática, alertas de prazo e geração de relatórios. Operação contábil AI-First.",
    href: "https://pay.cakto.com.br/vrr4iz5_935787",
    tag: "Para contadores",
  },
];

export default function Ferramentas() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-6 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(46,204,113,0.06) 0%, transparent 60%)" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">EC 132/2023</span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ice mt-3 mb-5 leading-tight tracking-[-0.035em]">
            Ferramentas tributárias gratuitas
          </h1>
          <p className="text-ice/50 text-lg leading-relaxed max-w-2xl">
            Calculadoras e simuladores para navegar a Reforma Tributária. Use, compartilhe — sem cadastro obrigatório.
          </p>
        </div>
      </section>

      {/* Ferramentas gratuitas */}
      <section className="py-20 px-6 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-ink-muted uppercase tracking-widest">Calculadoras e simuladores</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mt-2 leading-tight">Ferramentas gratuitas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ferramentas.map((f, i) => (
              <a
                key={i}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-paper-border rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-brand/30 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-ink-muted uppercase tracking-widest border border-paper-border px-2 py-0.5 rounded">
                    {f.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-ink-muted group-hover:text-brand transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-ink text-lg mb-3">{f.titulo}</h3>
                <p className="text-ink-soft text-sm leading-relaxed flex-1 mb-4">{f.descricao}</p>
                <span className="inline-flex items-center gap-1.5 text-brand text-sm font-medium group-hover:gap-2.5 transition-all">
                  Acessar ferramenta <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sistemas */}
      <section className="py-20 px-6 bg-navy-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest">Sistemas com IA</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-ice mt-2 leading-tight">Plataformas para profissionais</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sistemas.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-white/[0.07] rounded-2xl p-8 hover:border-brand/20 hover:bg-brand/[0.03] transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest border border-brand/20 px-2 py-0.5 rounded">
                    {s.tag}
                  </span>
                  <ExternalLink className="w-4 h-4 text-ice/30 group-hover:text-brand/60 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-ice text-lg mb-3">{s.titulo}</h3>
                <p className="text-ice/50 text-sm leading-relaxed flex-1 mb-4">{s.descricao}</p>
                <span className="inline-flex items-center gap-1.5 text-brand text-sm font-medium group-hover:gap-2.5 transition-all">
                  Acessar plataforma <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Diagnóstico */}
      <section className="py-24 px-6 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">Próximo passo</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-5 leading-tight">
            As ferramentas mostram o problema.<br />O diagnóstico mostra o caminho.
          </h2>
          <p className="text-ice/45 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Um especialista analisa o seu caso específico e entrega um plano de adequação à Reforma Tributária — gratuito e sem compromisso.
          </p>
          <Link
            href="/diagnostico"
            className="inline-flex items-center gap-2 bg-brand text-navy font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-brand-dark transition-colors"
          >
            Solicitar Diagnóstico Gratuito <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </section>
    </>
  );
}
