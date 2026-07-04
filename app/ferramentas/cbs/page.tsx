import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'CBS Calculadora', description: 'Contribuição Sindical Patronal.' }
export default function Page() {
  return <iframe src="https://cbs-calculadora.vercel.app/" className="w-full h-screen border-0" style={{ minHeight: '100vh' }} />
}
