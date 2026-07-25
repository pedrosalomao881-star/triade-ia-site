import React from 'react';
import { Clock, RefreshCw, PhoneOff, BarChart2, TrendingDown, AlertCircle } from 'lucide-react';
import CounterNumber from './CounterNumber';

export default function ProblemaSection() {
  const stats = [
    { numero: '62%', descricao: 'das empresas perdem oportunidades por lentidão no primeiro atendimento' },
    { numero: '3×', descricao: 'mais lento: tempo médio de processo manual versus IA integrada' },
    { numero: '40h', descricao: 'mensais desperdiçadas por colaborador em tarefas automatizáveis' },
  ];

  const problemas = [
    {
      icon: Clock,
      titulo: 'Tempo Perdido em Tarefas Repetitivas',
      descricao: 'A equipe gasta horas em atividades que poderiam ser otimizadas — e o negócio não escala.',
    },
    {
      icon: RefreshCw,
      titulo: 'Retrabalho e Erros Operacionais',
      descricao: 'Processos manuais geram inconsistências e custos invisíveis que corroem a margem.',
    },
    {
      icon: PhoneOff,
      titulo: 'Oportunidades Perdidas por Lentidão',
      descricao: 'Enquanto o cliente espera resposta, o concorrente já fechou o negócio.',
    },
    {
      icon: BarChart2,
      titulo: 'Decisões Sem Dados Confiáveis',
      descricao: 'Gestão baseada em intuição porque os dados existem mas não chegam claros e rápidos.',
    },
    {
      icon: TrendingDown,
      titulo: 'Crescimento Limitado pelo Custo da Equipe',
      descricao: 'Para crescer 30%, a empresa contrata 30%. A margem não expande — só o risco aumenta.',
    },
    {
      icon: AlertCircle,
      titulo: 'Sem Visibilidade da Operação',
      descricao: 'Relatórios atrasados, métricas desatualizadas, decisões que já chegam tarde.',
    },
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#050505] mb-6">
            Por Que Organizações Tradicionais Estão Perdendo Terreno
          </h2>
          <p className="text-base md:text-lg text-[#57606f] max-w-3xl leading-relaxed font-light">
            Não é falta de esforço. É falta de estrutura para operar na velocidade que o mercado exige.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, i) => {
            // Extrair número e sufixo
            const numberMatch = stat.numero.match(/^(\d+)/);
            const number = numberMatch ? parseInt(numberMatch[1]) : 0;
            const suffix = stat.numero.replace(/^\d+/, '');

            return (
              <div key={i} className="border-l-3 border-[#00FF87] pl-6">
                <p className="text-5xl md:text-6xl font-black text-[#050505] mb-3 tracking-tighter">
                  <CounterNumber
                    targetValue={number}
                    suffix={suffix}
                    duration={2000}
                  />
                </p>
                <p className="text-[#57606f] text-sm leading-relaxed">{stat.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* Problemas Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#050505] mb-3 tracking-tight">
            Sua Empresa Reconhece Algum Desses?
          </h3>
          <p className="text-[#57606f] text-sm mb-12">
            A maioria das organizações enfrenta pelo menos um deles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemas.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="group border border-[#e5e7eb] rounded-xl p-6 bg-gradient-to-br from-white to-[#f9fafb] hover:border-[#00FF87] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#f3f4f6] group-hover:bg-[#00FF87]/10 flex items-center justify-center text-[#00FF87] mb-4 transition-all duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-[#050505] text-base mb-3 tracking-tight">{p.titulo}</h4>
                  <p className="text-[#57606f] text-sm leading-relaxed">{p.descricao}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
