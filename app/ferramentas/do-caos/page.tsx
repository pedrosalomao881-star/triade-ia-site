import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Do Caos ao Sistema', description: 'Ebook reforma tributária.' }
export default function Page() {
  return <iframe src="https://do-caos-ao-sistema.vercel.app/" className="w-full h-screen border-0" style={{ minHeight: '100vh' }} />
}
