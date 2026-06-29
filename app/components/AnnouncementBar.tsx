'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Zap } from 'lucide-react'

const STORAGE_KEY = 'creditos_bar_dismissed'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="relative z-50 bg-amber-500 text-navy">
      <div className="max-w-6xl mx-auto px-6 py-2.5 flex items-center justify-center gap-3">
        <Zap className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
        <Link
          href="/creditOS"
          className="text-sm font-semibold text-center hover:underline underline-offset-2"
        >
          Janela fecha em 2027 — Recupere seus créditos de PIS/COFINS antes da Reforma Tributária
          <span className="ml-1.5 font-bold">→</span>
        </Link>
        <button
          onClick={dismiss}
          aria-label="Fechar"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-black/10 rounded transition-colors"
        >
          <X className="w-3.5 h-3.5" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}
