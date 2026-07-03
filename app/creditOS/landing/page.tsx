import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "CreditOS — Análise de Créditos Tributários com IA",
  description:
    "Identifique e recupere créditos tributários esquecidos. Análise automática em minutos. De R$0 a R$500k+. CreditOS por TRÍADE IA.",
};

export default function CreditOSLanding() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-24 overflow-hidden bg-navy">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 80% at 50% -10%, rgba(46,204,113,0.08) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="animate-fade-up flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
            <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">
              Créditos Tributários Esquecidos
            </span>
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
          </div>

          <h1 className="animate-fade-up-delay-1 font-display font-bold text-5xl md:text-6xl text-ice leading-[1.05] tracking-[-0.035em] mb-8">
            Créditos tributários<br />
            que seu contador<br />
            <span className="text-brand">não enxerga.</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-ice/50 leading-relaxed max-w-2xl mx-auto mb-12">
            Split Payment, CBS, IBS, saldo credor de PIS/COFINS. Novos cenários, novos créditos. A IA analisa sua situação fiscal completa e identifica oportunidades de recuperação que passaram desapercebidas.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href="https://pay.cakto.com.br/33vivx8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Começar análise agora <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <Link
              href="/creditOS/sistema"
              className="inline-flex items-center justify-center gap-2 text-ice/50 hover:text-ice text-sm transition-colors px-6 py-3.5 border border-white/[0.08] rounded-lg hover:border-white/[0.18]"
            >
              Ver demonstração
            </Link>
          </div>

          <p className="text-xs text-ice/20 tracking-wide">Análise completa em 7 dias · Parecer técnico incluso · Sem compromisso</p>
        </div>
      </section>

      {/* Problema */}
      <section className="py-32 px-6 bg-navy-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">O Problema</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-5 leading-tight">
              Créditos tributários deixados na mesa
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                titulo: "Reforma Tributária criou novos cenários",
                descricao: "CBS, IBS e Split Payment abrem oportunidades que não existiam antes. Seus sistemas e processos ainda operam no antigo modelo."
              },
              {
                titulo: "Saldo credor esquecido",
                descricao: "PIS e COFINS deixaram créditos acumulados. Com a reforma, esses valores podem ser recuperados — mas ninguém está olhando."
              },
              {
                titulo: "Complexidade além da contabilidade tradicional",
                descricao: "Créditos tributários envolvem cruzamento de operações, prazos, regras estaduais e federais. Seu contador faz contabilidade — não análise estratégica de recuperação."
              },
              {
                titulo: "Tempo é dinheiro (literalmente)",
                descricao: "Cada mês que passa sem recuperar um crédito de R$100k é R$100k ganhando prédio alugado enquanto você trabalha."
              }
            ].map((item, i) => (
              <div key={i} className="border border-white/[0.07] rounded-lg p-6 bg-navy flex gap-4">
                <AlertCircle className="w-5 h-5 text-brand flex-shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="font-semibold text-ice mb-2">{item.titulo}</h3>
                  <p className="text-ice/50 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="py-32 px-6 bg-navy">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">A Solução</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-5 leading-tight">
              Análise automática de créditos tributários com IA
            </h2>
          </div>

          <div className="space-y-6 mb-12">
            {[
              {
                numero: "01",
                titulo: "Mapeamento completo",
                descricao: "A IA analisa toda sua operação fiscal: receitas, despesas, retenções, operações interestaduais, complemento de impostos."
              },
              {
                numero: "02",
                titulo: "Identificação de oportunidades",
                descricao: "Cruzamento automático de cenários tributários. Saldo credor esquecido? Créditos de CBS? Compensações perdidas? Tudo identificado."
              },
              {
                numero: "03",
                titulo: "Parecer técnico",
                descricao: "Análise formatada, documentada e pronta para apresentar ao seu contador ou ao fisco se necessário."
              },
              {
                numero: "04",
                titulo: "Recomendações de ação",
                descricao: "Cada crédito vem com: quanto, como recuperar, prazo máximo de ação, documentação necessária."
              }
            ].map((item, i) => (
              <div key={i} className="border border-white/[0.07] rounded-lg p-6 bg-navy-soft flex gap-6">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 border border-brand/20">
                    <span className="font-display font-bold text-brand text-lg">{item.numero}</span>
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-ice mb-2">{item.titulo}</h3>
                  <p className="text-ice/50 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border border-brand/20 rounded-xl p-8 bg-brand/5">
            <div className="flex items-start gap-4 mb-6">
              <TrendingUp className="w-6 h-6 text-brand flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-ice text-lg mb-2">O que você ganha</h3>
                <ul className="space-y-3">
                  {[
                    "Recuperação mínima de R$50k (mais comum: R$100k-500k)",
                    "Caixa descongelado em dias (em vez de meses)",
                    "Parecer técnico que vale ouro em uma auditoria",
                    "Tranquilidade: nada foi deixado de lado"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-ice/70 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 px-6 bg-navy-soft">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ice mb-6 leading-tight">
            Pronto para descobrir seus créditos?
          </h2>
          <p className="text-ice/50 text-lg mb-10 leading-relaxed">
            Análise completa em até 7 dias. Parecer técnico incluído. Sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="https://pay.cakto.com.br/33vivx8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold text-sm px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Assinar CreditOS — R$497/ano <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <Link
              href="/creditOS/sistema"
              className="inline-flex items-center justify-center gap-2 text-ice/50 hover:text-ice text-sm transition-colors px-8 py-4 border border-white/[0.08] rounded-lg hover:border-white/[0.18]"
            >
              Explorar o sistema
            </Link>
          </div>

          <p className="text-xs text-ice/30">
            Plano anual com melhor custo-benefício. Pagamento único via Cakto. Acesso imediato ao sistema.
          </p>
        </div>
      </section>
    </>
  );
}
