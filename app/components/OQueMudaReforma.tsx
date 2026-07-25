'use client';

import React from 'react';

export default function OQueMudaReforma() {
  const cards = [
    {
      tag: 'FEDERAL',
      title: 'CBS — Contribuição sobre Bens e Serviços',
      subtitle: 'SUBSTITUI: PIS + COFINS',
      description: 'Unifica os dois tributos federais em um único imposto não-cumulativo. Alíquota-padrão estimada em 8,8% sobre receita bruta.',
    },
    {
      tag: 'ESTADUAL E MUNICIPAL',
      title: 'IBS — Imposto sobre Bens e Serviços',
      subtitle: 'SUBSTITUI: ICMS + ISS',
      description: 'Substitui os dois impostos subnacionais. Gestão unificada com repartição automática entre estados e municípios.',
    },
    {
      tag: 'EM VIGOR JAN 2026',
      title: 'Split Payment',
      subtitle: 'SUBSTITUI: RECOLHIMENTO PÓS-FATURAMENTO',
      description: 'O imposto é retido na própria transação financeira antes de chegar à conta do vendedor — impacto direto no fluxo de caixa.',
    },
  ];

  return (
    <section id="o-que-e-cbs-ibs" className="scroll-mt-24 bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
            EC 132/2023
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
            O que muda com a Reforma Tributária
          </h2>
          <p className="text-base text-[#b8bcc8] max-w-2xl mx-auto leading-relaxed font-light">
            A maior reforma tributária desde 1988. Vigência completa a partir de 2033, mas os impactos operacionais no caixa começam agora.
          </p>
        </div>

        {/* Grid de 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-[#1f3a5c] rounded-xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00FF87]/30 transition-all duration-300"
            >
              {/* Tag */}
              <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
                {card.tag}
              </p>

              {/* Título */}
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                {card.title}
              </h3>

              {/* Subtítulo */}
              <p className="text-xs text-[#7d8290] uppercase tracking-widest mb-4">
                {card.subtitle}
              </p>

              {/* Descrição */}
              <p className="text-sm text-[#a1a5b3] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
