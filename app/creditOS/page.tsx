import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, TrendingUp, FileCheck, AlertTriangle, Zap, BarChart2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CreditOS — Recuperação de Créditos Tributários com IA | TRÍADE IA',
  description: 'Motor de IA que identifica, valida e homologa créditos de PIS/COFINS e ICMS antes da Reforma Tributária de 2027. Em minutos, não em semanas.',
  robots: { index: true, follow: true },
}

const stats = [
  { value: '70%', label: 'das empresas têm créditos não homologados' },
  { value: 'R$ 50–500k', label: 'valor médio por empresa auditada' },
  { value: '2027', label: 'prazo final antes da Reforma Tributária' },
]

const steps = [
  {
    n: '01',
    title: 'Upload dos arquivos',
    desc: 'EFD-Contribuições, DCTF e Razão Contábil. Qualquer formato — XML, PDF, Excel.',
  },
  {
    n: '02',
    title: 'Análise em minutos',
    desc: 'O agente cruza os três documentos, aplica o teste de essencialidade do STJ e calcula proporcionalidade automaticamente.',
  },
  {
    n: '03',
    title: 'Parecer técnico pronto',
    desc: 'Relatório com memória de cálculo, base jurídica (REsp 1.221.170/PR) e cronograma de ações antes da Reforma.',
  },
]

const features = [
  { icon: <FileCheck className="w-4 h-4" strokeWidth={1.5} />, text: 'Extrai créditos PIS/COFINS do EFD-Contribuições (M100 e M500)' },
  { icon: <FileCheck className="w-4 h-4" strokeWidth={1.5} />, text: 'Valida cada item conforme STJ REsp 1.221.170/PR (essencialidade)' },
  { icon: <FileCheck className="w-4 h-4" strokeWidth={1.5} />, text: 'Calcula proporcionalidade exportação vs. mercado interno' },
  { icon: <FileCheck className="w-4 h-4" strokeWidth={1.5} />, text: 'Identifica créditos dormindo em energia, insumos e fretes' },
  { icon: <FileCheck className="w-4 h-4" strokeWidth={1.5} />, text: 'Gera PER/DCOMP ou relatório de transferência de ICMS' },
  { icon: <FileCheck className="w-4 h-4" strokeWidth={1.5} />, text: 'Cronograma de prazos com alertas antes da CBS/IBS 2027' },
]

const timeline = [
  { year: '2026', label: 'AGORA', action: 'Janela de ouro — validar com regras atuais', urgency: 'alto', color: 'text-brand border-brand/40 bg-brand/[0.06]' },
  { year: '2027', label: 'CBS/IBS', action: 'PIS/COFINS substituídos. Créditos precisam estar homologados antes disso.', urgency: 'critico', color: 'text-amber-400 border-amber-400/40 bg-amber-400/[0.06]' },
  { year: '2033', label: 'EXTINÇÃO', action: 'ICMS, ISS, PIS e COFINS extintos. Sem registro: auditoria retroativa de 5 anos, R$50–100k por empresa.', urgency: 'perigo', color: 'text-red-400 border-red-400/40 bg-red-400/[0.06]' },
]

export default function CreditOSPage() {
  return (
    <main className="min-h-screen bg-navy">

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest border border-brand/20 px-3 py-1 rounded-full mb-8">
            CreditOS · Agente de Recuperação Tributária
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ice leading-tight tracking-tight mb-6">
            Sua empresa tem{' '}
            <span className="text-brand">R$ 200k dormindo</span>{' '}
            no balanço.
            <br />
            A Reforma Tributária extingue esse direito em 2027.
          </h1>
          <p className="text-ice/50 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            O CreditOS identifica, valida e homologa seus créditos de PIS/COFINS e ICMS
            antes que a janela feche. Em minutos — não em semanas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-8 py-4 rounded-sm hover:bg-brand/90 transition-colors text-sm"
              style={{ borderRadius: '2px' }}
            >
              Quero meu diagnóstico gratuito
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link
              href="/portfolio/recuperacao-creditos-tributarios"
              className="inline-flex items-center gap-2 border border-white/[0.1] text-ice/60 font-medium px-8 py-4 rounded-sm hover:border-brand/30 hover:text-ice/80 transition-colors text-sm"
              style={{ borderRadius: '2px' }}
            >
              Ver como funciona
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(s => (
            <div key={s.value} className="text-center">
              <div className="font-display font-bold text-3xl text-brand mb-2">{s.value}</div>
              <div className="text-ice/40 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEMA (DOR) ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <AlertTriangle className="w-3.5 h-3.5 text-brand/50" strokeWidth={1.5} />
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest">O problema</span>
          </div>
          <h2 className="font-display font-bold text-3xl text-ice mb-6 leading-tight">
            Créditos tributários dormindo no seu balanço não viram caixa sozinhos.
          </h2>
          <p className="text-ice/50 text-base leading-relaxed mb-8">
            Toda vez que sua empresa compra insumos, paga energia ou contrata serviços, gera créditos de PIS/COFINS e ICMS. Eles aparecem no ativo não circulante — visíveis, mas inúteis sem homologação.
          </p>
          <div className="bg-white/[0.02] border border-white/[0.07] rounded-xl p-6 font-mono text-sm leading-loose">
            <div className="text-ice/20 mb-3 text-xs uppercase tracking-wider">BALANÇO PATRIMONIAL — ATIVO</div>
            <div className="text-ice/40">├─ Caixa: R$ 50.000 <span className="text-emerald-400/60">→ uso imediato</span></div>
            <div className="text-ice/40">├─ Estoque: R$ 30.000</div>
            <div className="text-ice/40">│</div>
            <div className="text-brand/80">└─ Créditos tributários: R$ 200.000</div>
            <div className="text-ice/30 ml-4">→ <span className="text-amber-400/70">dormindo aqui</span></div>
            <div className="text-ice/30 ml-4">→ precisam de homologação para virar caixa</div>
          </div>
          <p className="text-ice/35 text-sm mt-6 leading-relaxed">
            Um contador leva 4–8 horas para auditar um único CNPJ manualmente. Escritórios com 30 clientes multiplicam isso por meses. A maioria não faz — e o crédito fica parado.
          </p>
        </div>
      </section>

      {/* ── URGÊNCIA (TIMELINE) ── */}
      <section className="py-20 px-6 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <Clock className="w-3.5 h-3.5 text-brand/50" strokeWidth={1.5} />
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest">A janela se fecha</span>
          </div>
          <h2 className="font-display font-bold text-3xl text-ice mb-4 leading-tight">
            A Reforma Tributária não é promessa. É lei — e muda tudo em 2027.
          </h2>
          <p className="text-ice/50 text-base leading-relaxed mb-12">
            EC 132/2023 substitui PIS/COFINS pelo CBS e ICMS pelo IBS. Créditos do sistema antigo precisam estar provados antes da transição — ou a empresa enfrenta auditoria retroativa de 5 anos.
          </p>
          <div className="space-y-4">
            {timeline.map(t => (
              <div key={t.year} className={`border rounded-lg px-6 py-5 ${t.color}`}>
                <div className="flex items-start gap-4">
                  <div>
                    <div className="font-display font-bold text-2xl">{t.year}</div>
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider opacity-70">{t.label}</div>
                  </div>
                  <div className="pt-1">
                    <p className="text-ice/60 text-sm leading-relaxed">{t.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-ice/30 text-sm">
            Cada mês sem homologação aumenta o custo de prova e o risco de perda do crédito.
          </div>
        </div>
      </section>

      {/* ── SOLUÇÃO ── */}
      <section className="py-20 px-6 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <Zap className="w-3.5 h-3.5 text-brand/50" strokeWidth={1.5} />
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest">A solução</span>
          </div>
          <h2 className="font-display font-bold text-3xl text-ice mb-4 leading-tight">
            8 horas de auditoria manual em menos de 1 minuto.
          </h2>
          <p className="text-ice/50 text-base leading-relaxed mb-12">
            O CreditOS é um agente de IA especializado em créditos tributários. Processa EFD-Contribuições, DCTF e razão contábil em paralelo — e entrega o parecer técnico pronto para protocolo.
          </p>
          <ul className="space-y-3 mb-12">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-brand/60 mt-0.5 shrink-0">{f.icon}</span>
                <span className="text-ice/55 text-sm leading-relaxed">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="py-20 px-6 border-t border-white/[0.06] bg-white/[0.015]">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <BarChart2 className="w-3.5 h-3.5 text-brand/50" strokeWidth={1.5} />
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest">Como funciona</span>
          </div>
          <h2 className="font-display font-bold text-3xl text-ice mb-12 leading-tight">
            Três passos do arquivo ao parecer.
          </h2>
          <div className="space-y-6">
            {steps.map(s => (
              <div key={s.n} className="flex gap-6 items-start">
                <div className="shrink-0 w-10 h-10 rounded-full border border-brand/20 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-brand/60">{s.n}</span>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ice text-base mb-1">{s.title}</h3>
                  <p className="text-ice/45 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-2xl mx-auto text-center">
          <TrendingUp className="w-8 h-8 text-brand/40 mx-auto mb-6" strokeWidth={1} />
          <h2 className="font-display font-bold text-3xl text-ice mb-4 leading-tight">
            Quanto sua empresa tem dormindo?
          </h2>
          <p className="text-ice/45 text-base leading-relaxed mb-10">
            Faça o diagnóstico gratuito. Em minutos você sabe o potencial da sua carteira de créditos — antes que a janela feche.
          </p>
          <Link
            href="/diagnostico"
            className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-10 py-4 hover:bg-brand/90 transition-colors text-sm"
            style={{ borderRadius: '2px' }}
          >
            Quero meu diagnóstico gratuito
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
          <p className="text-ice/20 text-xs mt-6">
            Sem compromisso · Resposta em até 24h · TRÍADE IA — Itumbiara, GO
          </p>
        </div>
      </section>

    </main>
  )
}
