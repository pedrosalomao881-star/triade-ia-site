import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Diagnóstico antes de ferramenta: a lição de R$ 300 mil desperdiçados em automação errada",
  description:
    "Empresas que compram ferramentas de IA antes de mapear o problema real desperdiçam investimento e criam mais complexidade. Veja como evitar o erro mais comum na adoção de IA.",
};

export default function ArtigoDiagnostico() {
  return (
    <>
      <section className="pt-24 pb-16 px-6 bg-navy border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <Link href="/insights" className="text-xs text-ice/30 hover:text-ice transition-colors mb-6 inline-flex items-center gap-1.5">
            ← Voltar para Insights
          </Link>
          <div className="flex items-center gap-3 mb-6 mt-4">
            <span className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 rounded-full px-3 py-1">Método</span>
            <span className="text-xs text-ice/30">6 min de leitura</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ice leading-tight mb-6">
            Diagnóstico antes de ferramenta: a lição de R$ 300 mil desperdiçados em automação errada
          </h1>
          <p className="text-ice/50 text-base leading-relaxed">
            Empresas que compram ferramentas de IA antes de mapear o problema real desperdiçam investimento e criam mais complexidade. Veja como evitar o erro mais comum na adoção de IA.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-paper">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-ink-soft text-[15px] leading-relaxed">

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">O padrão mais comum de desperdício em IA</h2>
              <p>Uma distribuidora com 80 funcionários decide "adotar IA". O CEO vê uma demonstração de uma plataforma de automação de processos. Parece poderosa. Contratam por R$80.000 anuais. Passam 6 meses tentando implementar. A equipe não adota. Os processos que deveriam ser automatizados eram mais complexos do que pareciam na demo. O projeto é abandonado.</p>
              <p className="mt-4">Isso não é um caso raro. É o padrão mais comum de adoção de IA em empresas de médio porte. E o erro começa antes da contratação — começa na ausência de diagnóstico.</p>
            </div>

            <div className="border border-paper-border rounded-2xl p-8 bg-white shadow-sm">
              <h3 className="font-display font-bold text-ink text-lg mb-4">O que acontece quando se pula o diagnóstico</h3>
              <div className="space-y-4">
                {[
                  { fase: "Mês 1-2", problema: "Compra da ferramenta", efeito: "Contrato assinado sem entender qual processo vai ser melhorado e como medir o sucesso." },
                  { fase: "Mês 3-4", problema: "Implementação", efeito: "Descoberta de que o processo é mais complexo do que parecia. Integrações não funcionam como esperado." },
                  { fase: "Mês 5-6", problema: "Adoção forçada", efeito: "Equipe resiste porque a ferramenta não resolve o problema real. Workarounds surgem." },
                  { fase: "Mês 7+", problema: "Abandono ou redução", efeito: "Projeto é engavetado ou reduzido a uma fração do escopo original. ROI nunca é medido." },
                ].map((f, i) => (
                  <div key={i} className="flex gap-4 py-4 border-t border-paper-border first:border-0 first:pt-0">
                    <span className="text-xs font-bold text-ink-muted bg-paper-soft rounded-lg px-2.5 py-1 self-start whitespace-nowrap flex-shrink-0">{f.fase}</span>
                    <div>
                      <p className="font-display font-semibold text-ink text-sm">{f.problema}</p>
                      <p className="text-ink-muted text-xs mt-1">{f.efeito}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">Por que o diagnóstico muda tudo</h2>
              <p>O diagnóstico não é uma etapa burocrática antes da implementação. É a etapa que determina se a implementação vai funcionar. Ele responde as perguntas que nenhum vendedor de ferramenta vai responder por você:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Qual processo está custando mais em tempo e erro hoje?",
                  "Qual é o custo real de não resolver esse problema agora?",
                  "A solução mais eficiente é IA, ou é reorganização de processo?",
                  "Qual o ROI mínimo que justifica o investimento?",
                  "Como vamos medir se funcionou?",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand mt-1 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">Sem essas respostas, qualquer decisão de ferramenta é um chute. Com essas respostas, você contrata exatamente o que resolve o problema certo — e sabe como medir o retorno.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">O que um bom diagnóstico entrega</h2>
              <p>Um diagnóstico bem conduzido não demora meses. Em 60 a 90 minutos de sessão estruturada com um especialista, é possível mapear os principais processos, identificar onde o tempo e o dinheiro estão sendo desperdiçados e priorizar as iniciativas de maior retorno.</p>
              <p className="mt-4">O resultado é um Mapa de Oportunidades — não uma lista de ferramentas para comprar, mas uma análise priorizada de onde a IA gera retorno real no contexto específico da empresa. Cada oportunidade tem ROI estimado, nível de complexidade e prazo realista.</p>
            </div>

            <div className="border-l-4 border-brand pl-6 py-2">
              <p className="text-ink font-display font-semibold text-lg leading-relaxed">
                "A ferramenta certa no problema errado gera custo. A ferramenta certa no problema certo gera retorno. O diagnóstico é o que distingue um do outro."
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">O primeiro passo não custa nada</h2>
              <p>O Diagnóstico AI-First da TRÍADE IA é gratuito e sem compromisso de contratação. Não fazemos pitch de ferramenta durante a sessão. Se a IA não for a melhor solução para um problema específico, dizemos isso — e recomendamos o que for melhor para o negócio.</p>
              <p className="mt-4">O retorno de um diagnóstico bem feito é imediato: você passa a saber onde investir e onde não investir em IA. Isso por si só vale o tempo de uma sessão.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl text-ice mb-4">Comece pelo diagnóstico — não pela ferramenta</h2>
          <p className="text-ice/45 text-sm leading-relaxed mb-8">60 a 90 minutos de sessão estruturada. Mapa de Oportunidades e Roadmap em até 5 dias úteis. Gratuito e sem obrigação.</p>
          <Link href="/diagnostico" className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors text-sm">
            Solicitar Diagnóstico AI-First <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </section>
    </>
  );
}
