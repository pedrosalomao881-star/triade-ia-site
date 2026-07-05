import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Regime Certo', description: 'Simulador de regime tributário.' }
export default function Page() {
  return <iframe src="https://regime-certo.vercel.app/" className="w-full h-screen border-0" style={{ minHeight: '100vh' }} />
}
