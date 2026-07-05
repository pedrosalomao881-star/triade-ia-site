import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lixômetro — Quanto você desperdiça em impostos?',
  description: 'Mede o desperdício fiscal invisível da sua empresa. Identifica ineficiências que custam R$ milhares por ano.',
  robots: { index: true, follow: true },
}

export default function LixometroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-blue-600 flex flex-col justify-center items-center px-4 py-20 text-center">
      {/* Hero */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-3 leading-tight tracking-tight max-w-2xl">
        SEU LIXO
      </h1>
      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-amber-400 mb-10 leading-tight tracking-tight max-w-2xl">
        FISCAL CUSTA CARO
      </h2>

      <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed mb-10">
        <span className="text-amber-300 font-bold">Desperdício fiscal invisível:</span> créditos não aproveitados, ineficiências operacionais, <span className="text-amber-300 font-bold">oportunidades perdidas</span>. Quanto sua empresa desperdicia todo ano?
      </p>

      {/* Problema + Número */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 max-w-lg mb-10">
        <div className="text-5xl font-black text-blue-400 mb-3">R$ ?</div>
        <p className="text-base text-gray-200 leading-relaxed">
          Em média, empresas <u>desperdizam R$ 30k–120k/ano</u> em ineficiências fiscais. <strong>Você sabe quanto é o seu?</strong>
        </p>
      </div>

      {/* CTA */}
      <button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 px-10 py-4 rounded-lg font-semibold text-sm uppercase text-white tracking-widest transform hover:-translate-y-1 animate-pulse">
        Medir meu desperdício fiscal
      </button>

      {/* Footer */}
      <p className="text-xs text-gray-500 mt-16 tracking-widest">
        @eusouandrerochasalomao · Diagnóstico fiscal automático
      </p>
    </div>
  )
}