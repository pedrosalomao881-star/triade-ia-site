import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Planilha Transição', description: 'Transição de regime tributário.' }
export default function Page() {
  return <iframe src="https://planilha-transicao.vercel.app/" className="w-full h-screen border-0" style={{ minHeight: '100vh' }} />
}
