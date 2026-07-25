'use client';

import React from 'react';

export default function ReformaTributariaHero() {
  return (
    <section id="ec132-2023" className="scroll-mt-24 bg-gradient-to-b from-[#07101e] to-[#050505] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tag Superior */}
        <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-8 flex items-center justify-center gap-4">
          <span className="hidden sm:inline">—</span>
          <span>REFORMA TRIBUTÁRIA · EC 132/2023 · VIGÊNCIA: JAN 2026</span>
          <span className="hidden sm:inline">—</span>
        </p>

        {/* Headline Principal */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[1.1]">
          EC 132/2023 redesenhou o sistema{' '}
          <span className="text-[#00FF87]">tributário do Brasil</span>.
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-[#b8bcc8] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          O Split Payment vai reter o imposto antes de chegar na sua conta. O CBS e IBS substituem tudo que você conhecia sobre PIS, COFINS, ICMS e ISS. Quem não se preparar{' '}
          <span className="font-semibold text-[#00FF87]">vai pagar mais</span> — e não vai saber por quê.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
          <a
            href="#calcular"
            className="px-8 py-4 rounded-lg font-semibold bg-[#00FF87] text-[#050505] hover:bg-[#00e576] active:scale-95 transition-all duration-200 shadow-lg shadow-[#00FF87]/20 text-sm tracking-wide"
          >
            Calcular o impacto no meu negócio →
          </a>
          <a
            href="#entender"
            className="px-8 py-4 rounded-lg font-semibold border border-[#f0f4ff]/20 text-[#f0f4ff] hover:bg-[#f0f4ff]/5 active:scale-95 transition-all duration-200 text-sm tracking-wide backdrop-blur-sm"
          >
            Entender a reforma
          </a>
        </div>

        {/* Rodapé do Hero */}
        <p className="text-xs text-[#7d8290] tracking-widest">
          Análise gratuita · Sem cadastro obrigatório · Baseada em dados reais da sua empresa
        </p>
      </div>
    </section>
  );
}
