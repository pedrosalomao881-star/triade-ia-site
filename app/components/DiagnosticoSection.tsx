'use client';

import React from 'react';

export default function DiagnosticoSection() {
  const etapas = [
    {
      numero: '01',
      titulo: 'Mapeamento da operação',
      descricao: 'Entendemos como cada processo funciona hoje, onde está o gargalo e quanto custa em tempo e dinheiro.',
    },
    {
      numero: '02',
      titulo: 'Identificação de oportunidades',
      descricao: 'Priorizamos as iniciativas de maior ROI — não o que é mais tecnológico, mas o que gera mais resultado.',
    },
    {
      numero: '03',
      titulo: 'Roadmap AI-First personalizado',
      descricao: 'Plano fase a fase com cronograma, investimento estimado e critérios claros de sucesso.',
    },
    {
      numero: '04',
      titulo: 'Acompanhamento e evolução',
      descricao: 'Monitoramos resultados, ajustamos e evoluímos a operação conforme o negócio cresce.',
    },
  ];

  const entregaveis = [
    {
      titulo: 'Relatório de Maturidade Digital',
      descricao: 'Avaliação objetiva do estágio atual nos 5 níveis AI-First.',
    },
    {
      titulo: 'Mapa de Oportunidades',
      descricao: 'Iniciativas priorizadas por ROI — não por complexidade tecnológicas.',
    },
    {
      titulo: 'Roadmap Estratégico',
      descricao: 'Plano fase a fase com cronograma, investimento e KPIs.',
    },
    {
      titulo: 'Sessão Estratégica (60–90 min)',
      descricao: 'Reunião com especialista para análise profunda do seu contexto.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0c1830] to-[#050505] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Coluna Esquerda */}
          <div>
            {/* Tag */}
            <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
              Principal Oferta
            </p>

            {/* Título */}
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
              Diagnóstico AI-First
            </h2>

            {/* Descrição */}
            <p className="text-base text-[#b8bcc8] leading-relaxed font-light mb-12">
              Antes de implementar qualquer tecnologia, entendemos seu negócio. Mapeamos operações, identificamos gargalos e construímos um Roadmap com as oportunidades de maior retorno em ordem de prioridade.
            </p>

            {/* Etapas */}
            <div className="space-y-8 mb-12">
              {etapas.map((etapa) => (
                <div key={etapa.numero} className="flex gap-6">
                  {/* Círculo Número */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-[#00FF87] flex items-center justify-center">
                      <span className="font-bold text-[#00FF87] text-sm tracking-tight">
                        {etapa.numero}
                      </span>
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2 tracking-tight">
                      {etapa.titulo}
                    </h4>
                    <p className="text-sm text-[#a1a5b3] leading-relaxed">
                      {etapa.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão */}
            <a
              href="#diagnostico"
              className="inline-block px-8 py-4 rounded-lg font-semibold bg-[#00FF87] text-[#050505] hover:bg-[#00e576] active:scale-95 transition-all duration-200 shadow-lg shadow-[#00FF87]/20 text-sm tracking-wide"
            >
              Solicitar Diagnóstico Gratuito →
            </a>
          </div>

          {/* Coluna Direita - Card */}
          <div className="bg-[#0a1628] border border-[#1f3a5c] rounded-xl p-8 lg:p-10 backdrop-blur-sm">
            {/* Título do Card */}
            <p className="text-xs font-medium tracking-widest text-[#00E5FF] uppercase mb-8 pb-8 border-b border-[#1f3a5c]">
              O Que Você Recebe
            </p>

            {/* Entregáveis */}
            <div className="space-y-8 mb-10">
              {entregaveis.map((entregavel, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00FF87]" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2 tracking-tight text-sm">
                      {entregavel.titulo}
                    </h4>
                    <p className="text-xs text-[#a1a5b3] leading-relaxed">
                      {entregavel.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rodapé do Card */}
            <div className="pt-8 border-t border-[#1f3a5c]">
              <p className="text-xs text-[#7d8290] text-center tracking-tight leading-relaxed">
                Gratuito · Sem obrigação de contratação · Sem pitch de vendas na sessão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
