import React from 'react';

export default function CenarioAtualSection() {
  const scenarios = [
    {
      title: 'Dados Fragmentados',
      description: 'Informações espalhadas em múltiplos sistemas. Impossível ter visão 360° do negócio ou tomar decisões rápidas com dados confiáveis.',
      accent: '#00FF87',
    },
    {
      title: 'Processos Lentos',
      description: 'Ciclos de aprovação longos, aprovações manuais repetitivas e gargalos operacionais. O mercado muda rápido — sua empresa não.',
      accent: '#00E5FF',
    },
    {
      title: 'Equipes Sobrecarregadas',
      description: 'Time gasta 60% do tempo em tarefas repetitivas. Escalabilidade fica refém do custo de contratação, não da tecnologia.',
      accent: '#00FF87',
    },
  ];

  return (
    <section className="bg-[#050505] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
            O Cenário Atual
          </h2>
          <p className="text-base md:text-lg text-[#b8bcc8] max-w-3xl leading-relaxed font-light">
            Empresas tradicionais operam com{' '}
            <span className="font-semibold text-white">processos manuais</span> que consomem{' '}
            <span className="font-semibold text-[#00FF87]">recursos</span>,{' '}
            <span className="font-semibold text-[#00FF87]">tempo e capital</span>. Enquanto isso,{' '}
            <span className="font-semibold text-white">concorrentes ágeis</span> aproveitam{' '}
            <span className="font-semibold text-[#00E5FF]">inteligência artificial</span> para{' '}
            <span className="font-semibold text-[#00FF87]">escalar sem aumentar custos</span> proporcionalmente.
          </p>
        </div>

        {/* Grid 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scenarios.map((item, idx) => (
            <div
              key={idx}
              className="group relative border border-[#f0f4ff]/10 rounded-xl p-8 bg-gradient-to-br from-[#07101e] to-[#050505] hover:border-[#f0f4ff]/20 transition-all duration-300 overflow-hidden"
            >
              {/* Accent Line */}
              <div
                className="absolute top-0 left-0 h-1 w-12 transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: item.accent }}
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold tracking-tight text-white mb-3 mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#a1a5b3] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Subtle Background Glow */}
              <div
                className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-10 blur-2xl transition-all duration-300 group-hover:opacity-20"
                style={{ backgroundColor: item.accent }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 pt-12 border-t border-[#f0f4ff]/10">
          <p className="text-center text-[#b8bcc8]">
            Resultado:{' '}
            <span className="text-[#00FF87] font-semibold">
              margem reduz, oportunidades se perdem, crescimento desacelera.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
