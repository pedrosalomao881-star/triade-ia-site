import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SOAF Privado Contador — TRÍADE IA',
  description: 'Plataforma especializada para contadores: análise de reforma tributária, relatórios prontos para cliente, embasamento jurídico automático.',
  robots: { index: true, follow: true },
}

export default function SoafPrivadoContadorPage() {
  return (
    <iframe
      src="/soaf-privado-contador.html"
      className="w-full h-screen border-0"
      title="SOAF Privado Contador"
      style={{ minHeight: '100vh' }}
    />
  )
}
