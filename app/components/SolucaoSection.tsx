import React from 'react';

export default function SolucaoSection() {
  const steps = [
    {
      number: 1,
      title: 'Diagnóstico Estratégico',
      description: 'Mapeamos seus processos, identificamos gargalos, modelamos impacto financeiro. Você entende exatamente onde IA agrega valor.',
      accent: '#00FF87',
    },
    {
      number: 2,
      title: 'Roadmap Personalizado',
      description: 'Desenhamos uma jornada em fases: prioridades viáveis, timeline realista, ROI previsível. Sem promessas — só números.',
      accent: '#00E5FF',
    },
    {
      number: 3,
      title: 'Implementação & Treinamento',
      description: 'Executamos com sua equipe, treina-se junto. Quando saímos, você continua sozinho — confiante e competente.',
      accent: '#00FF87',
    },
    {
      number: 4,
      title: 'Otimização Contínua',
      description: 'Acompanhamos resultados, refinamos modelos, celebramos wins. IA é jornada, não destino.',
      accent: '#00E5FF',
    },
  ];

  return (
    <section className="bg-[#050505] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF87]/20 bg-[#00FF87]/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]" />
            <span className="text-xs font-medium tracking-widest text-[#00FF87] uppercase">
              Metodologia Comprovada
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Nossa Solução
          </h2>
          <p className="text-base md:text-lg text-[#b8bcc8] max-w-3xl leading-relaxed font-light">
            Substituímos processos manuais por sistemas inteligentes que aprendem, evoluem e escalam com sua empresa. Sem substituir pessoas — amplificando o que elas fazem bem.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-8 items-start group">
              {/* Number Circle */}
              <div
                className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-black text-lg text-[#050505] transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: step.accent }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold tracking-tight text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#b8bcc8] text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Result Box */}
        <div className="mt-20 p-8 border border-[#00FF87]/30 rounded-xl bg-[#00FF87]/5 backdrop-blur-sm">
          <p className="text-center text-base md:text-lg text-white">
            <span className="text-[#00FF87] font-semibold">Resultado: </span>
            Margem aumenta. Equipe engajada. Crescimento acelerado.
          </p>
        </div>
      </div>
    </section>
  );
}
