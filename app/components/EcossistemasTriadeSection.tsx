'use client';

import Link from 'next/link';
import { Layers, ShieldCheck, Building2, Calculator, CreditCard, LineChart, ArrowUpRight } from 'lucide-react';

const solutions = [
  { name: "ScenarioOS", href: "/solucoes", icon: Layers, color: "#F59E0B", tag: "Análise Tributária Municipal" },
  { name: "SOAF V3.0", href: "/solucoes", icon: ShieldCheck, color: "#06B6D4", tag: "Auditoria Fiscal Pública" },
  { name: "SOAF Privado Empresário", href: "/soaf-privado-empresario", icon: Building2, color: "#10B981", tag: "Gestão Tributária Empresarial" },
  { name: "SOAF Privado Contador", href: "/soaf-privado-contador", icon: Calculator, color: "#8B5CF6", tag: "Conformidade Contábil" },
  { name: "CreditOS", href: "/solucoes", icon: CreditCard, color: "#3B82F6", tag: "Análise Inteligente de Crédito" },
  { name: "ContabOS", href: "/solucoes", icon: LineChart, color: "#EC4899", tag: "CRM e Automação Contábil" }
];

export default function EcossistemasTriadeSection() {
  return (
    <section className="py-24 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto mb-16">
        <p className="text-xs font-mono text-[#FFD700] uppercase tracking-[0.15em] text-center mb-6">
          Ecossistema TRÍADE
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          Inteligência distribuída.<br />Um hub completo de soluções tributárias.
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Mask */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(90deg, #050505 0%, transparent 10%, transparent 90%, #050505 100%)'
          }}
        />

        {/* Marquee */}
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
          {/* First set */}
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <Link
                key={i}
                href={solution.href}
                className="group bg-neutral-900/80 border border-neutral-800/80 hover:border-emerald-500/50 hover:bg-neutral-800/50 transition-all duration-300 rounded-2xl px-5 py-3.5 flex items-center gap-3.5 flex-shrink-0 whitespace-nowrap backdrop-blur-md shadow-lg cursor-pointer"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-lg opacity-10"
                    style={{ backgroundColor: solution.color }}
                  />
                  <Icon
                    className="w-5 h-5 relative z-10"
                    color={solution.color}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-neutral-100">{solution.name}</span>
                  <span className="text-xs text-neutral-500">{solution.tag}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-auto" />
              </Link>
            );
          })}

          {/* Second set (duplicate for infinite loop) */}
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <Link
                key={`duplicate-${i}`}
                href={solution.href}
                className="group bg-neutral-900/80 border border-neutral-800/80 hover:border-emerald-500/50 hover:bg-neutral-800/50 transition-all duration-300 rounded-2xl px-5 py-3.5 flex items-center gap-3.5 flex-shrink-0 whitespace-nowrap backdrop-blur-md shadow-lg cursor-pointer"
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-lg opacity-10"
                    style={{ backgroundColor: solution.color }}
                  />
                  <Icon
                    className="w-5 h-5 relative z-10"
                    color={solution.color}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-neutral-100">{solution.name}</span>
                  <span className="text-xs text-neutral-500">{solution.tag}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-auto" />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
