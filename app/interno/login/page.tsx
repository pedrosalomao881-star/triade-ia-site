'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function InternoLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/interno/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      const params = new URLSearchParams(window.location.search)
      router.push(params.get('redirect') || '/interno/diagnosticos')
    } else {
      setError('Senha incorreta')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.08] bg-white/[0.03] mb-6">
            <Lock className="w-5 h-5 text-brand/60" strokeWidth={1.5} />
          </div>
          <span className="block text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest mb-3">
            TRÍADE IA · Interno
          </span>
          <h1 className="font-display font-bold text-2xl text-ice mb-2">Área Restrita</h1>
          <p className="text-ice/35 text-sm">Documentos estratégicos confidenciais</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="password"
            placeholder="Senha de acesso"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-ice text-sm placeholder:text-ice/20 focus:outline-none focus:border-brand/40 transition-colors"
          />
          {error && <p className="text-red-400/80 text-xs pl-1">{error}</p>}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-brand text-navy font-semibold text-sm py-3 rounded-lg hover:bg-brand/90 disabled:opacity-40 transition-all"
          >
            {loading ? 'Verificando…' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  )
}
