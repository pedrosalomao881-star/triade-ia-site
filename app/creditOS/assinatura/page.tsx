import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Clock, Zap, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CreditOS — Assine e Recupere seus Créditos Tributários | TRÍADE IA',
  description: 'Identifique, valide e homologue créditos de PIS/COFINS e ICMS antes da Reforma Tributária de 2027. Assinatura mensal, anual ou bienal.',
  robots: { index: true, follow: true },
}

const CAKTO = {
  mensal: 'https://pay.cakto.com.br/6kdv3xk_993511',
  semestral: 'https://pay.cakto.com.br/3diya39_993535',
  anual: 'https://pay.cakto.com.br/jyygigx_993540',
}

const planos = [
  {
    id: 'mensal',
    nome: 'Mensal',
    preco: 'R$ 97',
    ciclo: '/mês',
    equivalente: null,
    destaque: false,
    beneficio: 'Sem fidelidade — cancele quando quiser',
    link: CAKTO.mensal,
  },
  {
    id: 'semestral',
    nome: 'Semestral',
    preco: 'R$ 147',
    ciclo: '/6 meses',
    equivalente: 'R$ 24,50/mês',
    destaque: true,
    beneficio: '~75% de desconto vs. mensal',
    link: CAKTO.semestral,
  },
  {
    id: 'anual',
    nome: 'Anual',
    preco: 'R$ 277',
    ciclo: '/ano',
    equivalente: 'R$ 23,08/mês',
    destaque: false,
    beneficio: '~76% de desconto vs. mensal',
    link: CAKTO.anual,
  },
]

const incluso = [
  'Upload ilimitado de EFD-Contribuições, DCTF e Razão Contábil',
  'Validação automática conforme STJ REsp 1.221.170/PR (essencialidade)',
  'Cálculo de proporcionalidade exportação vs. mercado interno',
  'Parecer técnico com memória de cálculo, pronto para protocolo',
  'Alertas de prazo antes da virada CBS/IBS (31/12/2026)',
  'Atualizações automáticas conforme a Reforma avança',
]

const faq = [
  {
    q: 'Posso trocar de plano depois?',
    a: 'Sim. Você pode fazer upgrade do mensal para o anual (ou bienal) a qualquer momento — o valor já pago é descontado proporcionalmente.',
  },
  {
    q: 'O pagamento é recorrente?',
    a: 'Sim, via Pix automático. Cada plano cobra no seu próprio ciclo (mensal, anual ou a cada 2 anos) até você cancelar — o cancelamento é feito diretamente no seu banco, sem burocracia.',
  },
  {
    q: 'O parecer gerado é válido para protocolo na Receita Federal?',
    a: 'O sistema gera memória de cálculo completa e fundamentação jurídica (STJ REsp 1.221.170/PR). O contador assina e protocola — o CreditOS prepara, ele executa.',
  },
]

export default function CreditOSAssinaturaPage() {
  return (
    <main className="min-h-screen bg-navy">

      {/* ── HERO ── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest border border-brand/20 px-3 py-1 rounded-full mb-8">
            CreditOS · Assinatura
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ice leading-tight tracking-tight mb-6">
            Sua empresa tem{' '}
            <span className="text-brand">R$ 200k dormindo</span>{' '}
            no balanço.
          </h1>
          <p className="text-ice/50 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            O CreditOS identifica, valida e homologa seus créditos de PIS/COFINS e ICMS
            antes que a janela feche em 31/12/2026. Assine e comece agora.
          </p>
          <Link
            href="#planos"
            className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-8 py-4 hover:bg-brand/90 transition-colors text-sm"
            style={{ borderRadius: '2px' }}
          >
            Ver planos
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '70%', label: 'das empresas têm créditos não homologados' },
            { value: 'R$ 50–500k', label: 'valor médio por empresa auditada' },
            { value: '31/12/2026', label: 'prazo para registrar créditos na EFD (LC 214/2025)' },
          ].map(s => (
            <div key={s.value} className="text-center">
              <div className="font-display font-bold text-3xl text-brand mb-2">{s.value}</div>
              <div className="text-ice/40 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── URGÊNCIA (curta) ── */}
      <section className="py-16 px-6 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-3.5 h-3.5 text-brand/50" strokeWidth={1.5} />
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest">A janela se fecha</span>
          </div>
          <p className="text-ice/55 text-base leading-relaxed">
            A LC 214/2025 exige que créditos do sistema antigo (PIS/COFINS, ICMS) estejam registrados na
            EFD-Contribuições até <strong className="text-amber-400/80">31/12/2026</strong> para serem portados
            ao novo regime CBS/IBS. Depois disso, a empresa enfrenta auditoria retroativa de até 5 anos —
            custo estimado de R$50–100k. Cada mês sem homologação aumenta esse risco.
          </p>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUSO ── */}
      <section className="py-16 px-6 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Zap className="w-3.5 h-3.5 text-brand/50" strokeWidth={1.5} />
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest">Toda assinatura inclui</span>
          </div>
          <ul className="space-y-3">
            {incluso.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-brand/60 mt-0.5 shrink-0" strokeWidth={2} />
                <span className="text-ice/55 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PLANOS ── */}
      <section id="planos" className="py-20 px-6 border-b border-white/[0.06] bg-white/[0.015] scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-bold text-3xl text-ice mb-3 leading-tight">
              Escolha seu plano
            </h2>
            <p className="text-ice/45 text-sm">
              Cobrança recorrente via Pix automático · cancele quando quiser direto no seu banco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {planos.map(p => (
              <div
                key={p.id}
                className={`relative rounded-xl p-8 flex flex-col ${
                  p.destaque
                    ? 'border-2 border-brand bg-brand/[0.06] md:-translate-y-3 shadow-[0_0_40px_-12px_rgba(46,204,113,0.35)]'
                    : 'border border-white/[0.08] bg-white/[0.02]'
                }`}
              >
                {p.destaque && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-navy text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Recomendado
                  </span>
                )}
                <h3 className="font-display font-semibold text-ice text-lg mb-1">{p.nome}</h3>
                <div className="mb-1">
                  <span className="font-display font-bold text-4xl text-ice">{p.preco}</span>
                  <span className="text-ice/40 text-sm ml-1">{p.ciclo}</span>
                </div>
                {p.equivalente && (
                  <div className="text-brand/70 text-xs font-mono mb-4">{p.equivalente}</div>
                )}
                {!p.equivalente && <div className="mb-4" />}
                <p className="text-ice/45 text-sm leading-relaxed mb-8 flex-1">{p.beneficio}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3.5 text-sm transition-colors ${
                    p.destaque
                      ? 'bg-brand text-navy hover:bg-brand/90'
                      : 'border border-white/[0.15] text-ice/70 hover:border-brand/40 hover:text-ice'
                  }`}
                  style={{ borderRadius: '2px' }}
                >
                  Assinar {p.nome}
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            ))}
          </div>

          <p className="text-ice/25 text-xs text-center mt-10 max-w-lg mx-auto">
            Pagamento processado pela Cakto. Ambiente seguro. Nota fiscal emitida automaticamente.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <AlertTriangle className="w-3.5 h-3.5 text-brand/50" strokeWidth={1.5} />
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest">Perguntas frequentes</span>
          </div>
          <div className="space-y-8">
            {faq.map((item, i) => (
              <div key={i}>
                <h3 className="font-display font-semibold text-ice text-base mb-2">{item.q}</h3>
                <p className="text-ice/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 px-6 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl text-ice mb-4 leading-tight">
            Quanto sua empresa tem dormindo?
          </h2>
          <p className="text-ice/45 text-sm leading-relaxed mb-8">
            Assine agora e comece a identificar seus créditos hoje mesmo.
          </p>
          <Link
            href="#planos"
            className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-10 py-4 hover:bg-brand/90 transition-colors text-sm"
            style={{ borderRadius: '2px' }}
          >
            Ver planos
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
          <p className="text-ice/20 text-xs mt-6">
            TRÍADE IA — Itumbiara, GO
          </p>
        </div>
      </section>

    </main>
  )
}
