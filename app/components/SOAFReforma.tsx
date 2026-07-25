'use client';

import React from 'react';
import Link from 'next/link';

export default function SOAFReforma() {
  return (
    <section id="soaf" className="bg-gradient-to-br from-[#0c1830] to-[#050505] py-32 px-6 border-t border-[#1f3a5c]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
            PARA GESTORES MUNICIPAIS
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
            SOAF para Prefeituras
          </h2>
          <p className="text-base text-[#b8bcc8] max-w-2xl mx-auto leading-relaxed font-light">
            Plataforma especializada para auditoria fiscal municipal. Prepare sua gestão para o novo cenário tributário com inteligência artificial.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Column */}
          <div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00FF87] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#050505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Auditoria Automatizada</h3>
                  <p className="text-sm text-[#a1a5b3]">Análise contínua de conformidade tributária municipal.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00FF87] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#050505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Conformidade EC 132/2023</h3>
                  <p className="text-sm text-[#a1a5b3]">Preparação antecipada para todas as mudanças regulatórias.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00FF87] flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-[#050505]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">Relatórios Executivos</h3>
                  <p className="text-sm text-[#a1a5b3]">Dashboards em tempo real para tomada de decisão.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gradient-to-br from-[#00FF87]/10 to-transparent border border-[#00FF87]/20 rounded-xl p-8">
            <p className="text-sm text-[#b8bcc8] mb-6 leading-relaxed font-light">
              Mais de 7 agentes especializados analisam sua gestão tributária municipal em tempo real. Identificam riscos antes que se tornem passivos.
            </p>
            <Link
              href="https://app.triadeiaos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-[#00FF87] text-[#050505] hover:bg-[#00e576] active:scale-95 transition-all duration-200 shadow-lg shadow-[#00FF87]/20 text-sm tracking-wide"
            >
              Acessar SOAF
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
