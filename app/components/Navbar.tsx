"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { WA_DIAGNOSTICO } from "@/lib/whatsapp";

const reforma = [
  { href: "/#reforma", label: "O que muda (EC 132/2023)" },
  { href: "/#split-payment", label: "Split Payment explicado" },
  { href: "/ferramentas", label: "Ferramentas gratuitas" },
  { href: "https://app.triadeiaos.com", label: "SOAF para prefeituras", external: true },
];

const produtos = [
  { href: "/produtos", label: "Ver catálogo de produtos" },
  { href: "/creditOS", label: "CreditOS — Recuperar Créditos ⚡" },
  { href: "/produtos/do-caos-ao-sistema", label: "Do Caos ao Sistema — R$37" },
  { href: "https://soaf.triadeiaos.com", label: "SOAF — Auditoria Fiscal", external: true },
  { href: "https://contabos.triadeiaos.com", label: "ContabOS — Para Contadores", external: true },
  { href: "/ferramentas", label: "Ferramentas tributárias" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [reformaOpen, setReformaOpen] = useState(false);
  const [produtosOpen, setProdutosOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 border-b border-white/[0.08] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-lg text-ice tracking-tight"
        >
          TRÍADE <span className="text-brand">IA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {/* Reforma 2026 dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-ice/60 hover:text-ice transition-colors py-1">
              Reforma 2026
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" strokeWidth={2} />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-navy-soft border border-white/[0.08] rounded-xl p-2 w-56 shadow-xl shadow-black/40">
                {reforma.map((item) => (
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-sm text-ice/60 hover:text-ice hover:bg-white/[0.04] rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-ice/60 hover:text-ice hover:bg-white/[0.04] rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Produtos dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-ice/60 hover:text-ice transition-colors py-1">
              Produtos
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" strokeWidth={2} />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-navy-soft border border-white/[0.08] rounded-xl p-2 w-56 shadow-xl shadow-black/40">
                {produtos.map((item) => (
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-sm text-ice/60 hover:text-ice hover:bg-white/[0.04] rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm text-ice/60 hover:text-ice hover:bg-white/[0.04] rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>

          <Link href="/solucoes" className="text-sm text-ice/60 hover:text-ice transition-colors font-semibold text-brand">
            Soluções
          </Link>

          <Link href="/manuais" className="text-sm text-ice/60 hover:text-ice transition-colors">
            Manuais
          </Link>

          <Link href="/metodologia" className="text-sm text-ice/60 hover:text-ice transition-colors">
            Metodologia
          </Link>

          <Link href="/sobre" className="text-sm text-ice/60 hover:text-ice transition-colors">
            Sobre
          </Link>
        </nav>

        <a
          href={WA_DIAGNOSTICO}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand text-navy font-semibold text-sm px-4 py-2 rounded-lg hover:bg-brand-dark transition-colors"
        >
          Diagnóstico Gratuito
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ice p-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.08] bg-navy px-6 py-5 flex flex-col gap-1">
          <button
            className="flex items-center justify-between text-sm text-ice/70 py-2 w-full"
            onClick={() => setReformaOpen(!reformaOpen)}
          >
            Reforma 2026
            <ChevronDown className={`w-4 h-4 transition-transform ${reformaOpen ? "rotate-180" : ""}`} strokeWidth={2} />
          </button>
          {reformaOpen && (
            <div className="pl-4 flex flex-col gap-1 mb-1">
              {reforma.map((item) => (
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ice/50 hover:text-ice py-1.5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-ice/50 hover:text-ice py-1.5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          )}

          <button
            className="flex items-center justify-between text-sm text-ice/70 py-2 w-full"
            onClick={() => setProdutosOpen(!produtosOpen)}
          >
            Produtos
            <ChevronDown className={`w-4 h-4 transition-transform ${produtosOpen ? "rotate-180" : ""}`} strokeWidth={2} />
          </button>
          {produtosOpen && (
            <div className="pl-4 flex flex-col gap-1 mb-1">
              {produtos.map((item) => (
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ice/50 hover:text-ice py-1.5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-ice/50 hover:text-ice py-1.5 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
          )}

          <Link href="/solucoes" className="text-sm text-ice/70 hover:text-ice py-2 transition-colors font-semibold text-brand" onClick={() => setOpen(false)}>
            Soluções
          </Link>

          <Link href="/manuais" className="text-sm text-ice/70 hover:text-ice py-2 transition-colors" onClick={() => setOpen(false)}>
            Manuais
          </Link>

          <Link href="/metodologia" className="text-sm text-ice/70 hover:text-ice py-2 transition-colors" onClick={() => setOpen(false)}>
            Metodologia
          </Link>

          <Link href="/sobre" className="text-sm text-ice/70 hover:text-ice py-2 transition-colors" onClick={() => setOpen(false)}>
            Sobre
          </Link>

          <a
            href={WA_DIAGNOSTICO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex justify-center bg-brand text-navy font-semibold text-sm px-4 py-3 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Diagnóstico Gratuito
          </a>
        </div>
      )}
    </header>
  );
}
