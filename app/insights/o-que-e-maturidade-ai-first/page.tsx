import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "O que é Maturidade AI-First e por que importa mais do que automação",
  description:
    "A maioria das empresas confunde automação com transformação. Entenda a diferença entre os 5 níveis de maturidade AI-First e por que avançar de nível exige mais do que contratar uma ferramenta.",
};

export default function ArtigoMaturidade() {
  return (
    <>
      <section className="pt-24 pb-16 px-6 bg-navy border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <Link href="/insights" className="text-xs text-ice/30 hover:text-ice transition-colors mb-6 inline-flex items-center gap-1.5">
            ← Voltar para Insights
          </Link>
          <div className="flex items-center gap-3 mb-6 mt-4">
            <span className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 rounded-full px-3 py-1">Estratégia</span>
            <span className="text-xs text-ice/30">7 min de leitura</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ice leading-tight mb-6">
            O que é Maturidade AI-First e por que importa mais do que automação
          </h1>
          <p className="text-ice/50 text-base leading-relaxed">
            A maioria das empresas confunde automação com transformação. São coisas completamente diferentes — e entender essa distinção é o primeiro passo para investir em IA de forma que gere retorno real.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-paper">
        <div className="max-w-3xl mx-auto prose-custom">
          <div className="space-y-8 text-ink-soft text-[15px] leading-relaxed">

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">Automação não é transformação</h2>
              <p>Quando uma empresa conecta um chatbot ao WhatsApp, ela não virou AI-First. Quando uma distribuidora automatiza o envio de pedidos por e-mail, ela não virou AI-First. Essas são automações pontuais — úteis, mas superficiais.</p>
              <p className="mt-4">Transformação AI-First é diferente. É quando a Inteligência Artificial deixa de ser uma ferramenta que executa tarefas isoladas e se torna uma capacidade estrutural do negócio — integrada aos processos de decisão, à operação diária e à estratégia de crescimento.</p>
              <p className="mt-4">A distinção parece sutil, mas tem implicações profundas em como a empresa investe, contrata, escala e compete.</p>
            </div>

            <div className="border border-paper-border rounded-2xl p-8 bg-white shadow-sm">
              <h3 className="font-display font-bold text-ink text-lg mb-6">Os 5 Níveis de Maturidade AI-First</h3>
              <div className="space-y-5">
                {[
                  { nivel: "Nível 1", nome: "Manual", descricao: "Processos dependem inteiramente de pessoas. Sem digitalização consistente. Dados existem no papel ou em planilhas desconectadas." },
                  { nivel: "Nível 2", nome: "Digitalizado", descricao: "Operação digital, mas sem integração. Sistemas existem mas não conversam. IA ainda está fora do horizonte operacional." },
                  { nivel: "Nível 3", nome: "Automatizado", descricao: "Automações pontuais funcionando. Tarefas repetitivas sendo executadas por sistemas. Ainda sem aprendizado ou adaptação inteligente." },
                  { nivel: "Nível 4", nome: "Inteligente", descricao: "IA integrada a decisões operacionais. Sistemas aprendem com dados históricos. A equipe trabalha com assistência de IA em processos críticos." },
                  { nivel: "Nível 5", nome: "AI-First", descricao: "IA como capacidade estratégica central. Decisões, operação e crescimento dependem de inteligência artificial de forma estrutural. A empresa é mais eficiente, mais rápida e mais difícil de ser copiada." },
                ].map((n, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="inline-block text-xs font-bold text-brand bg-brand/[0.08] rounded-lg px-2.5 py-1 whitespace-nowrap">{n.nivel}</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-ink text-sm mb-1">{n.nome}</p>
                      <p className="text-ink-muted text-sm">{n.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">Por que a maioria das empresas trava no Nível 3</h2>
              <p>O salto do Nível 3 (Automatizado) para o Nível 4 (Inteligente) é onde a maioria das empresas trava. E o motivo não é falta de tecnologia disponível — é falta de estrutura para usá-la bem.</p>
              <p className="mt-4">Empresas no Nível 3 têm automações que funcionam, mas cada uma é uma ilha. O chatbot não sabe o que acontece no ERP. A automação de e-mail não sabe o que o time de vendas está fazendo. O sistema de agendamento não aprende com os padrões de comportamento dos clientes.</p>
              <p className="mt-4">Para avançar ao Nível 4, é preciso integração de dados, definição de critérios de decisão e uma arquitetura que permita que diferentes sistemas se comuniquem e aprendam juntos. Isso não se compra em uma ferramenta — se constrói com método.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">O que muda quando uma empresa vira AI-First</h2>
              <p>Empresas que chegam ao Nível 5 têm vantagens estruturais que são difíceis de replicar:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Escalam sem contratar proporcionalmente — a IA absorve o volume que cresceria a folha",
                  "Tomam decisões mais rápidas com dados consolidados em tempo real",
                  "Atendem melhor com menos esforço, porque os processos são desenhados com IA desde o início",
                  "Identificam oportunidades que concorrentes não enxergam porque não têm os dados organizados",
                  "Criam uma barreira competitiva que se fortalece com o tempo — quanto mais dados, melhor a IA fica",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand mt-1 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-brand pl-6 py-2">
              <p className="text-ink font-display font-semibold text-lg leading-relaxed">
                "A pergunta não é se sua empresa vai adotar IA. É se vai adotar antes ou depois dos seus concorrentes."
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">Por onde começar</h2>
              <p>O primeiro passo não é contratar uma ferramenta. É entender em qual nível sua empresa está hoje e qual o gap para o próximo nível. Essa análise — o Diagnóstico de Maturidade — é o ponto de partida do Método TRÍADE.</p>
              <p className="mt-4">Sem diagnóstico, o investimento em IA é um tiro no escuro. Com diagnóstico, você sabe exatamente onde investir primeiro para gerar o maior retorno no menor tempo.</p>
            </div>

          </div>
        </div>
      </section>

      {/* DARK: CTA */}
      <section className="py-16 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl text-ice mb-4">Descubra o nível de maturidade da sua empresa</h2>
          <p className="text-ice/45 text-sm leading-relaxed mb-8">Em 6 perguntas, o Quiz de Maturidade AI-First avalia em qual estágio sua operação está — e qual o caminho mais rápido para avançar.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors text-sm">
              Fazer o Quiz <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/diagnostico" className="inline-flex items-center gap-2 text-ice/45 hover:text-ice text-sm transition-colors px-6 py-3.5 border border-white/[0.08] rounded-lg hover:border-white/[0.18]">
              Solicitar Diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
