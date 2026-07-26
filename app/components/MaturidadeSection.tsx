'use client';

import React from 'react';
import Link from 'next/link';

const radarPulseStyle = `
  @keyframes radarPulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }

  .radar-pulse {
    animation: radarPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;

export default function MaturidadeSection() {
  const stages = [
    {
      number: '01',
      label: 'ONDE A MAIORIA ESTÁ',
      title: 'Empresa Manual',
      description: 'Processos em papel, planilhas e WhatsApp. Alta dependência de pessoas para tudo.',
      isFirst: true,
    },
    {
      number: '02',
      label: '',
      title: 'Empresa Digital',
      description: 'Usa ferramentas digitais básicas — ERP, e-mail, sistemas — mas sem integração.',
    },
    {
      number: '03',
      label: '',
      title: 'Empresa Integrada',
      description: 'Sistemas conectados, dados centralizados, algumas automações em operação.',
    },
    {
      number: '04',
      label: '',
      title: 'Empresa Inteligente',
      description: 'IA em processos específicos. Decisões baseadas em dados. Equipe focada em resultados.',
    },
    {
      number: '05',
      label: 'DESTINO',
      title: 'Empresa AI-First',
      description: 'IA como infraestrutura central. Escala sem crescimento proporcional de custo.',
      isLast: true,
      icon: true,
    },
  ];

  return (
    <>
      <style>{radarPulseStyle}</style>
      <section className="bg-gradient-to-b from-[#0c1830] to-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
            Modelo de Maturidade
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Em qual estágio está sua empresa?
          </h2>
          <p className="text-base text-[#b8bcc8] max-w-2xl mx-auto leading-relaxed font-light">
            A maioria das organizações ainda opera nos estágios iniciais. O Diagnóstico AI-First mapeia o caminho mais rápido até o topo.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative py-20">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-10 left-[6%] right-[6%] h-px bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent" />

          {/* Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
            {stages.map((stage, idx) => (
              <div key={idx} className="flex flex-col items-center">
                {/* Circle Number */}
                <div className="relative mb-8">
                  {/* Radar Pulse Ring */}
                  {(stage.isFirst || stage.isLast) && (
                    <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#00FF87] radar-pulse" />
                  )}

                  <div
                    className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-bold tracking-tight transition-all duration-300 hover:scale-110 ${
                      stage.isFirst || stage.isLast
                        ? 'bg-[#00FF87] text-[#050505]'
                        : 'bg-[#0c1830] border-2 border-[#4a5a7a] text-[#b8bcc8]'
                    }`}
                  >
                    {stage.icon ? (
                      <span className="text-xl">★</span>
                    ) : (
                      stage.number
                    )}
                  </div>
                </div>

                {/* Label */}
                {stage.label && (
                  <p className="text-xs font-semibold tracking-widest text-[#00FF87] uppercase mb-4">
                    {stage.label}
                  </p>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 text-center tracking-tight">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#a1a5b3] text-center leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-[#f0f4ff]/10">
          <Link
            href="/quiz"
            className="px-8 py-3.5 rounded-lg font-semibold bg-[#00FF87] text-[#050505] hover:bg-[#00e576] active:scale-95 transition-all duration-200 shadow-lg shadow-[#00FF87]/20 text-sm tracking-wide"
          >
            Descobrir meu nível agora →
          </Link>
          <Link
            href="/metodologia"
            className="text-[#a1a5b3] hover:text-[#00E5FF] transition-colors duration-200 text-sm font-medium"
          >
            Ver a metodologia completa
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
