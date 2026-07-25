'use client';

import React from 'react';
import PhoneHeadsetIcon from './icons/PhoneHeadsetIcon';
import GearIcon from './icons/GearIcon';
import TrendingUpIcon from './icons/TrendingUpIcon';
import DocumentIcon from './icons/DocumentIcon';
import GlobeIcon from './icons/GlobeIcon';
import LeafIcon from './icons/LeafIcon';

export default function CapacidadesSection() {
  const capacidades = [
    {
      titulo: 'Inteligência de Atendimento',
      descricao: 'Redesenhamos como sua empresa se relaciona com clientes. A IA soma criatividade humana com precisão e escalabilidade.',
      topicos: [
        'Atendimento 24h sem aumentar equipe',
        'Triagem inteligente de prioridades',
        'Redução de 40% no tempo de resposta',
      ],
      icon: 'phone',
    },
    {
      titulo: 'Eficiência Operacional',
      descricao: 'Mapeamos cada processo que consome tempo, dinheiro e energia. Depois, integramos para que a operação cresça sem fricção.',
      topicos: [
        'Processos integrados e sem retrabalho',
        'Visibilidade em tempo real da operação',
        'Margem que cresce junto com o volume',
      ],
      icon: 'gear',
    },
    {
      titulo: 'Inteligência Comercial',
      descricao: 'Qualificação automática de leads, follow-up sem falhas, conversão que não depende de sorte. Seu time vende mais.',
      topicos: [
        'Funil comercial sem gargalos manuais',
        'Follow-up automático e personalizado',
        'Mais fechamentos com a mesma equipe',
      ],
      icon: 'trending',
    },
    {
      titulo: 'Inteligência Fiscal e Tributária',
      descricao: 'Para escritórios contábeis e departamentos fiscais, a IA faz o que consome 60% do tempo: ler, classificar, conferir.',
      topicos: [
        'Menos erros e menos retrabalho',
        'Obrigações entregues com mais agilidade',
        'Contador focado em consultoria',
      ],
      icon: 'document',
    },
    {
      titulo: 'Presença Digital de Alta Conversão',
      descricao: 'Sites que existem para gerar resultado — não para existir. SEO que cresce, design que converte, gestão que prova ROI.',
      topicos: [
        'Mais leads qualificados por mês',
        'SEO que cresce e defende posição',
        'Site como ativo comercial, não custo',
      ],
      icon: 'globe',
    },
    {
      titulo: 'IA para Cooperativas e Agronegócio',
      descricao: 'Gestão de associados em escala, análise de safra, rastreabilidade de lote. Tecnologia que agronegócio realmente usa.',
      topicos: [
        'Gestão de centenas de associados sem crescer equipe',
        'Adimplência monitorada e automatizada',
        'Relatórios de safra em tempo real',
      ],
      icon: 'leaf',
    },
  ];

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'phone':
        return <PhoneHeadsetIcon size={24} color="#00FF87" strokeWidth={2} />;
      case 'gear':
        return <GearIcon size={24} color="#00FF87" strokeWidth={2} />;
      case 'trending':
        return <TrendingUpIcon size={24} color="#00FF87" strokeWidth={2} />;
      case 'document':
        return <DocumentIcon size={24} color="#00FF87" strokeWidth={2} />;
      case 'globe':
        return <GlobeIcon size={24} color="#00FF87" strokeWidth={2} />;
      case 'leaf':
        return <LeafIcon size={24} color="#00FF87" strokeWidth={2} />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#f5f5f7] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-4">
            Capacidades
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#050505] mb-6">
            Inteligência Artificial aplicada em cada área crítica do negócio
          </h2>
          <p className="text-base text-[#57606f] max-w-3xl mx-auto leading-relaxed font-light">
            Não entregamos ferramentas. Entregamos transformações — com impacto mensurável em operação, receita e margem.
          </p>
        </div>

        {/* Grid de Capacidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capacidades.map((cap, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl border border-[#e5e7eb] p-8 hover:shadow-lg hover:border-[#00FF87]/20 transition-all duration-300"
            >
              {/* Ícone Personalizado por Área */}
              <div className="w-12 h-12 rounded-full bg-[#00FF87]/10 border border-[#00FF87]/30 flex items-center justify-center mb-6">
                {renderIcon(cap.icon)}
              </div>

              {/* Título */}
              <h3 className="text-lg font-bold text-[#050505] mb-4 leading-tight">
                {cap.titulo}
              </h3>

              {/* Descrição */}
              <p className="text-sm text-[#57606f] mb-6 leading-relaxed">
                {cap.descricao}
              </p>

              {/* Tópicos */}
              <div className="space-y-3 mb-8 border-t border-[#e5e7eb] pt-6">
                {cap.topicos.map((topico, tidx) => (
                  <div key={tidx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-[#00FF87] mt-1.5" />
                    <span className="text-sm text-[#57606f] leading-relaxed">
                      {topico}
                    </span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <a
                href="#capacidade"
                className="inline-flex items-center text-sm font-semibold text-[#00FF87] hover:text-[#00e576] transition-colors duration-200 group/link"
              >
                Explorar capacidade
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
