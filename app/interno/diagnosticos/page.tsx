import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diagnósticos Estratégicos — TRÍADE IA Interno',
  robots: { index: false, follow: false },
}

const docs = [
  {
    slug: 'saldo-credor',
    titulo: 'Diagnóstico Estratégico — Saldo Credor + IA',
    descricao: 'Recuperação de Créditos Tributários · PIS/COFINS · ICMS · Reforma Tributária 2027',
    data: 'Junho 2026',
    abas: ['Explicação Completa', 'Análise Estratégica'],
  },
]

export default function DiagnosticosPage() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-3.5 h-3.5 text-brand/40" strokeWidth={1.5} />
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest">
              Interno · Restrito
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl text-ice mb-3">Diagnósticos Estratégicos</h1>
          <p className="text-ice/35 text-sm">Análises confidenciais para o squad TRÍADE IA.</p>
        </div>

        <div className="space-y-4">
          {docs.map(doc => (
            <Link
              key={doc.slug}
              href={`/interno/diagnosticos/${doc.slug}`}
              className="block border border-white/[0.07] rounded-xl p-6 hover:border-brand/20 hover:bg-brand/[0.02] transition-all group"
            >
              <div className="flex items-start gap-4 mb-3">
                <FileText className="w-5 h-5 text-brand/40 mt-0.5 shrink-0 group-hover:text-brand/60 transition-colors" strokeWidth={1.5} />
                <span className="text-xs font-mono text-ice/20 ml-auto">{doc.data}</span>
              </div>
              <h2 className="font-display font-semibold text-ice text-base mb-1">{doc.titulo}</h2>
              <p className="text-ice/35 text-sm mb-4 leading-relaxed">{doc.descricao}</p>
              <div className="flex gap-2">
                {doc.abas.map(aba => (
                  <span key={aba} className="text-xs font-mono text-ice/25 border border-white/[0.06] px-2 py-0.5 rounded">
                    {aba}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
