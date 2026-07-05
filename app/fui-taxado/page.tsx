import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fui Taxado — Quanto você pagou a mais?',
  description: 'Descubra quanto de imposto sua empresa pagou indevidamente. Análise automática em tempo real.',
  robots: { index: true, follow: true },
}

export default function FuiTaxadoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-emerald-600 flex flex-col justify-center items-center px-4 py-20 text-center">
      {/* Hero */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-3 leading-tight tracking-tight max-w-2xl">
        VOCÊ FOI
      </h1>
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-amber-400 mb-10 leading-tight tracking-tight max-w-2xl">
        TAXADO A MAIS
      </h2>

      <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
        70% das empresas <span className="text-amber-300 font-bold">pagam mais imposto do que deveriam</span>. Descobrimos quanto <span className="text-amber-300 font-bold">você pagou indevidamente</span> nos últimos 5 anos — em minutos, não em meses.
      </p>

      {/* Problema */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-6 max-w-lg mb-10">
        <p className="text-base text-gray-200 leading-relaxed">
          <strong>O Problema:</strong> Erros de cálculo, interpretações divergentes, créditos esquecidos. <u>Seu contador não vê tudo.</u>
        </p>
        <p className="text-base text-gray-200 leading-relaxed mt-3">
          <strong>A Solução:</strong> <u>IA que audita automaticamente</u> cada transação contra jurisprudência STJ (Tema 779).
        </p>
      </div>

      {/* CTA */}
      <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 px-10 py-4 rounded-lg font-semibold text-sm uppercase text-white tracking-widest transform hover:-translate-y-1 animate-pulse">
        Descobrir quanto você pagou a mais
      </button>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-16 tracking-widest">
        @eusouandrerochasalomao · Auditoria fiscal automática
      </p>
    </div>
  )
}
