'use client';

import React from 'react';

export default function DiferencialSection() {
  const pilares = [
    {
      numero: '01',
      titulo: 'Resultado antes de tecnologia',
      descricao: 'A maioria das empresas de IA quer vender a ferramenta. Nós começamos pelo resultado que você quer e só aí escolhemos a tecnologia.',
      destaque: 'Nunca sugerimos IA onde ela não gera retorno mensurável.',
    },
    {
      numero: '02',
      titulo: 'Método, não improviso',
      descricao: 'Diagnóstico. Mapa de oportunidades. Roadmap priorizado. Implementação faseada. Cada fase tem critérios claros de sucesso — você sabe exatamente o que acontece.',
      destaque: 'Você sabe exatamente o que acontece e por quê em cada fase.',
    },
    {
      numero: '03',
      titulo: 'Operação AI-First por dentro',
      descricao: 'A TRÍADE IA opera internamente no modelo que entrega aos clientes. IA em recrutamento, operação, análise, atendimento ao cliente.',
      destaque: 'Não ensinamos o que não praticamos.',
    },
  ];

  return (
    <section className="bg-[#f5f5f7] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
            Nossa Diferença
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#050505]">
            Por que a TRÍADE IA
          </h2>
        </div>

        {/* Grid de 3 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilares.map((pilar, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl border border-[#e5e7eb] p-10 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Número de Fundo */}
              <div className="absolute -top-4 -right-8 text-6xl font-black tracking-tighter text-[#e5e7eb] opacity-40 select-none pointer-events-none">
                {pilar.numero}
              </div>

              {/* Conteúdo */}
              <div className="relative z-10">
                {/* Título */}
                <h3 className="text-xl font-bold text-[#050505] mb-4 leading-tight tracking-tight">
                  {pilar.titulo}
                </h3>

                {/* Descrição */}
                <p className="text-sm text-[#57606f] mb-8 leading-relaxed">
                  {pilar.descricao}
                </p>

                {/* Frase em Destaque */}
                <div className="border-t border-[#e5e7eb] pt-6">
                  <p className="text-sm font-semibold text-[#00FF87] leading-relaxed">
                    {pilar.destaque}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
