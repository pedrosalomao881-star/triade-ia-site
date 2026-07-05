import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SOAF Privado Empresário — TRÍADE IA',
  description: 'Plataforma de análise de reforma tributária para empresários: simule impacto, planeje estratégia fiscal, receba recomendações personalizadas.',
  robots: { index: true, follow: true },
}

export default function SoafPrivadoEmpresarioPage() {
  return (
    <iframe
      src="/soaf-privado-empresario.html"
      className="w-full h-screen border-0"
      title="SOAF Privado Empresário"
      style={{ minHeight: '100vh' }}
    />
  )
}
