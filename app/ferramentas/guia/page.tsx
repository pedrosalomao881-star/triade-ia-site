import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Guia Tributário', description: 'Guia tributário completo.' }
export default function Page() {
  return <iframe src="https://triade-guia-tributario.vercel.app/" className="w-full h-screen border-0" style={{ minHeight: '100vh' }} />
}
