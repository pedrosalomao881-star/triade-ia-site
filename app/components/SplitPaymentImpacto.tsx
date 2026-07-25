'use client';

import React from 'react';

export default function SplitPaymentImpacto() {
  const comparativeCards = [
    {
      tag: 'MODELO ATUAL',
      description: 'Empresa fatura → recebe 100% do valor → recolhe os impostos no vencimento (30 a 90 dias depois).',
    },
    {
      tag: 'COM SPLIT PAYMENT',
      description: 'Empresa fatura → sistema financeiro retém o imposto → empresa recebe somente o valor líquido.',
      highlight: true,
    },
    {
      tag: 'O QUE ISSO SIGNIFICA',
      description: 'Fim do float tributário. Redução de capital de giro. Gestão de fluxo de caixa exige replanejamento.',
    },
  ];

  return (
    <section id="split-payment" className="bg-gradient-to-b from-[#050505] to-[#07101e] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Duas Colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda */}
          <div>
            <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
              O MAIOR IMPACTO NO CAIXA
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8">
              Split Payment: imposto retido antes de chegar na sua conta
            </h2>

            {/* Parágrafos */}
            <p className="text-base text-[#b8bcc8] mb-6 leading-relaxed font-light">
              No modelo atual, você fatura, recebe o valor integral e só depois recolhe os impostos. Com o Split Payment, o sistema financeiro retém automaticamente o imposto no momento do pagamento — você recebe o valor já líquido de tributos.
            </p>

            <p className="text-base text-[#b8bcc8] mb-8 leading-relaxed font-light">
              O impacto direto é na capital de giro: o dinheiro que antes ficava disponível entre o faturamento e o vencimento dos impostos deixa de existir. Para empresas que usam esse intervalo para financiar operações, a mudança exige planejamento imediato.
            </p>

            {/* CTA */}
            <a
              href="#calcular"
              className="inline-block px-8 py-4 rounded-lg font-semibold bg-[#00FF87] text-[#050505] hover:bg-[#00e576] active:scale-95 transition-all duration-200 shadow-lg shadow-[#00FF87]/20 text-sm tracking-wide"
            >
              Calcular o impacto no meu negócio →
            </a>
          </div>

          {/* Coluna Direita - Cards Empilhados */}
          <div className="space-y-4">
            {comparativeCards.map((card, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 ${
                  card.highlight
                    ? 'border-2 border-[#00FF87] bg-gradient-to-br from-[#0c1830] to-[#050505]'
                    : 'border border-[#1f3a5c] bg-gradient-to-br from-[#07101e] to-[#050505]'
                } transition-all duration-300`}
              >
                <p className={`text-xs font-medium tracking-widest uppercase mb-3 ${
                  card.highlight ? 'text-[#00FF87]' : 'text-[#00E5FF]'
                }`}>
                  {card.tag}
                </p>
                <p className="text-sm text-[#b8bcc8] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
