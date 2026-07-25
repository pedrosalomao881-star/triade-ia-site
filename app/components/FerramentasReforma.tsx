'use client';

import React from 'react';

export default function FerramentasReforma() {
  const ferramentas = [
    {
      title: 'Calculadora de Impacto Split Payment',
      description: 'Simule o impacto da retenção de impostos no seu fluxo de caixa em tempo real.',
    },
    {
      title: 'Planilha de Simulação CBS e IBS',
      description: 'Compare alíquotas antes e depois da reforma com base na sua atividade.',
    },
    {
      title: 'Diagnóstico Tributário AI-First',
      description: 'Análise completa do cenário tributário da sua empresa com recomendações.',
    },
  ];

  return (
    <section id="ferramentas" className="bg-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
            RECURSOS GRATUITOS
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Ferramentas para sua Preparação
          </h2>
          <p className="text-base text-[#b8bcc8] max-w-2xl mx-auto leading-relaxed font-light">
            Acesso gratuito a calculadoras, planilhas e diagnósticos para você entender agora o impacto da reforma no seu negócio.
          </p>
        </div>

        {/* Grid de Ferramentas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ferramentas.map((ferramenta, idx) => (
            <div
              key={idx}
              className="border border-[#1f3a5c] rounded-xl p-8 bg-gradient-to-br from-[#0c1830] to-[#050505] hover:border-[#00FF87]/30 hover:shadow-lg hover:shadow-[#00FF87]/10 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-4 leading-tight">
                {ferramenta.title}
              </h3>
              <p className="text-sm text-[#a1a5b3] leading-relaxed">
                {ferramenta.description}
              </p>
              <button className="mt-6 text-sm font-semibold text-[#00FF87] hover:text-[#00e576] transition-colors flex items-center gap-2">
                Acessar ferramenta
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
