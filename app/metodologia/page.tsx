import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search, Map, Rocket, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Método TRÍADE — Diagnóstico, Roadmap e Implementação AI-First",
  description:
    "Conheça o Método TRÍADE: quatro estágios de análise estruturada que transformam operações em negócios AI-First. Diagnóstico, Mapa de Oportunidades, Roadmap e Evolução Contínua.",
};

const etapas = [
  {
    numero: "01",
    icone: <Search className="w-6 h-6" strokeWidth={1.5} />,
    titulo: "Diagnóstico",
    subtitulo: "Entendemos antes de recomendar",
    descricao: "Mapeamos como sua operação funciona hoje — processo por processo, custo por custo, gargalo por gargalo. Identificamos onde o tempo está sendo desperdiçado, onde os erros ocorrem com mais frequência e onde a margem está sendo corroída silenciosamente.",
    entregaveis: [
      "Relatório de Maturidade Digital (nível 1 a 5)",
      "Mapa de processos críticos com custo estimado de ineficiência",
      "Avaliação de stack tecnológica atual e gaps",
      "Benchmark setorial com contexto da operação",
    ],
    duracao: "60 a 90 min de sessão + 5 dias úteis de análise",
  },
  {
    numero: "02",
    icone: <Map className="w-6 h-6" strokeWidth={1.5} />,
    titulo: "Mapa de Oportunidades",
    subtitulo: "Priorizamos pelo retorno, não pela tecnologia",
    descricao: "Transformamos o diagnóstico em uma lista priorizada de oportunidades — ordenadas por ROI potencial, não por complexidade tecnológica. Cada oportunidade tem um caso de negócio claro: qual o custo atual, qual o ganho esperado, qual o prazo realista.",
    entregaveis: [
      "Lista priorizada de oportunidades de IA (top 5 a 10)",
      "Estimativa de ROI por iniciativa com premissas explícitas",
      "Avaliação de viabilidade técnica e organizacional",
      "Recomendação de onde NÃO investir (tão importante quanto o contrário)",
    ],
    duracao: "Entregue junto com o Roadmap",
  },
  {
    numero: "03",
    icone: <Rocket className="w-6 h-6" strokeWidth={1.5} />,
    titulo: "Roadmap AI-First",
    subtitulo: "Plano real, com cronograma e investimento",
    descricao: "O Roadmap é o plano de transformação fase a fase. Não é uma apresentação de PowerPoint — é um documento operacional com etapas, responsáveis, critérios de sucesso, investimento estimado e KPIs de acompanhamento para cada fase.",
    entregaveis: [
      "Roadmap de 3, 6 e 12 meses com fases definidas",
      "Investimento estimado por fase com faixa de variação",
      "Stack tecnológica recomendada com justificativas",
      "KPIs de sucesso com baseline e metas por etapa",
    ],
    duracao: "Planejamento de 12 meses em 3 fases",
  },
  {
    numero: "04",
    icone: <BarChart2 className="w-6 h-6" strokeWidth={1.5} />,
    titulo: "Implementação e Evolução",
    subtitulo: "Executamos, medimos e aprimoramos",
    descricao: "A implementação segue o Roadmap aprovado — fase a fase, com revisões frequentes e ajustes baseados em resultado real. Não entregamos e sumimos. Acompanhamos os KPIs, medimos o retorno e evoluímos a solução conforme o negócio cresce.",
    entregaveis: [
      "Implementação fase a fase com validações intermediárias",
      "Relatório mensal de desempenho com métricas reais",
      "Revisão trimestral do Roadmap com ajustes de prioridade",
      "Suporte técnico e evolução contínua das soluções",
    ],
    duracao: "Contrato mínimo de 6 meses, evolução contínua",
  },
];

const principios = [
  { titulo: "Resultado antes de ferramenta", descricao: "Nunca recomendamos tecnologia antes de entender o problema. A ferramenta é o último passo, não o primeiro." },
  { titulo: "Transparência total de premissas", descricao: "Toda estimativa de ROI tem premissas explícitas. Você sabe o que assumimos — e pode questionar cada ponto." },
  { titulo: "Critérios de sucesso definidos antes de começar", descricao: "Antes de qualquer implementação, definimos como o sucesso será medido. Sem critério, não há accountability." },
  { titulo: "Evolução contínua, não entrega única", descricao: "IA não é projeto com início e fim. É capacidade que precisa ser construída, medida e aprimorada continuamente." },
];

export default function Metodologia() {
  return (
    <>
      {/* DARK: Hero */}
      <section className="pt-24 pb-20 px-6 bg-navy">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold text-brand border border-brand/20 rounded-full px-4 py-1 mb-6 uppercase tracking-widest">
            Método TRÍADE
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ice leading-tight mb-6">
            Como transformamos operações em negócios AI-First
          </h1>
          <p className="text-ice/55 text-lg leading-relaxed max-w-2xl mb-10">
            Quatro estágios de análise estruturada — do diagnóstico inicial ao acompanhamento de resultado. Cada fase tem entregáveis claros, critérios de sucesso definidos e um responsável por cada decisão.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/diagnostico" className="inline-flex items-center gap-2 bg-brand text-navy font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-brand-dark transition-colors">
              Iniciar com o Diagnóstico <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/quiz" className="inline-flex items-center gap-2 text-ice/45 hover:text-ice text-sm transition-colors px-6 py-3.5 border border-white/[0.08] rounded-lg hover:border-white/[0.18]">
              Fazer o Quiz de Maturidade
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHT: Etapas */}
      <section className="py-24 px-6 bg-paper">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-0">
            {etapas.map((e, i) => (
              <div key={e.numero} className="flex gap-8 group">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl border-2 border-brand/30 bg-brand/[0.06] flex items-center justify-center text-brand group-hover:bg-brand/10 transition-colors">
                    {e.icone}
                  </div>
                  {i < etapas.length - 1 && <div className="w-px flex-1 bg-paper-border my-3" />}
                </div>
                <div className="pb-16 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-brand/60 uppercase tracking-widest">Etapa {e.numero}</span>
                    <span className="text-xs text-ink-muted border border-paper-border rounded-full px-3 py-0.5">{e.duracao}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-ink mb-1">{e.titulo}</h2>
                  <p className="text-ink-soft text-sm font-medium mb-4">{e.subtitulo}</p>
                  <p className="text-ink-soft text-sm leading-relaxed mb-6">{e.descricao}</p>
                  <div className="bg-white border border-paper-border rounded-xl p-5 shadow-sm">
                    <p className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-4">Entregáveis desta etapa</p>
                    <ul className="flex flex-col gap-2.5">
                      {e.entregaveis.map((ent, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-ink-soft text-sm">{ent}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT: Princípios */}
      <section className="py-20 px-6 bg-paper-soft">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-ink-muted uppercase tracking-widest">Nossos princípios</span>
            <h2 className="font-display font-semibold text-2xl text-ink mt-3">O que guia cada decisão do método</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {principios.map((p, i) => (
              <div key={i} className="bg-white border border-paper-border rounded-xl p-6 shadow-sm">
                <h3 className="font-display font-semibold text-ink text-base mb-2">{p.titulo}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK: CTA */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-ice mb-4">O primeiro passo é o Diagnóstico</h2>
          <p className="text-ice/45 text-sm leading-relaxed mb-8">
            Gratuito. Sem obrigação. Sem pitch de vendas durante a sessão. Você recebe o Mapa de Oportunidades e o Roadmap em até 5 dias úteis após a sessão.
          </p>
          <Link href="/diagnostico" className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors text-sm">
            Solicitar Diagnóstico AI-First <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </section>
    </>
  );
}
