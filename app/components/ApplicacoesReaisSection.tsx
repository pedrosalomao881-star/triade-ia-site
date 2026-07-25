'use client';

import React, { useState, useEffect } from 'react';

export default function ApplicacoesReaisSection() {
  const segmentos = [
    {
      badge: 'CLÍNICAS E LABORATÓRIOS',
      desafio: 'Recepção sobrecarregada com confirmações manuais. Por falta de filtro, equipamentos ficam sem pré-agenda de clientes.',
      comIa: 'Confirmação e triagem automática via WhatsApp. Agendamento inteligente e histórico do paciente integrado.',
      metricas: ['50% início do dia', '180% agendamentos', 'Mensagem focada no prontuário'],
    },
    {
      badge: 'ESCRITÓRIOS CONTÁBEIS',
      desafio: '60% do tempo da equipe em classificação e conferência de documentos. Deixar do prazo a perder informação.',
      comIa: 'Análise e classificação automática de documentos. Rotinas que presto ao prazo e com 0% erro.',
      metricas: ['60% tempo operacional', 'Entrega 50% antes', 'Erros zerados'],
    },
    {
      badge: 'COOPERATIVAS E AGRONEGÓCIO',
      desafio: 'Comunicação manual com membros da associação. Necessidade demoras para centralizar informação.',
      comIa: 'Comunicação em escala via WhatsApp. Atendimento 24h com histórico integrado.',
      metricas: ['30% retorno de clientes', 'Viabilidade total da carteira'],
    },
    {
      badge: 'DISTRIBUIDORAS',
      desafio: 'Pedidos via WhatsApp gerando erros de digitação. Equipes de vendas desorganizadas.',
      comIa: 'Pedido automático por múltiplos canais sem modificações. Follow-up e carrinho de compras que contém ao final.',
      metricas: ['100% taxa de conversão', 'Zero erros no pedido'],
    },
    {
      badge: 'IMOBILIÁRIAS',
      desafio: 'Leads (aluguel ou imóvel) desorganizados ou com follow-up confuso. Informação perdida rapidamente.',
      comIa: 'Qualificação automática de leads com dados estruturados. Follow-up organizado para o seu time.',
      metricas: ['50% taxa de conversão', 'Acompanhamento real via'],
    },
    {
      badge: 'COMÉRCIO E SUPERMERCADOS',
      desafio: 'Clientes sem atendimento fora do horário. Comparação generalizada com lista de espera de meses.',
      comIa: 'Atendimento 24h com histórico integrado, comparações personalizadas via histórico do cliente.',
      metricas: ['240% aumento', 'Acompanhamento real', 'Segmentação por'],
    },
  ];

  // Estado para efeito typewriter
  const fullText = 'AI-First';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        // Digitando as letras
        setDisplayedText(fullText.substring(0, displayedText.length + 1));

        if (displayedText === fullText) {
          // Terminou de digitar: pausa de 3 segundos (3000ms) antes de começar a apagar
          setTypingSpeed(150);
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 3000);
          return;
        }
      } else {
        // Apagando as letras
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(75);

        if (displayedText === '') {
          // Terminou de apagar: reinicia o loop de digitação
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="bg-[#f5f5f7] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header com Typewriter Effect */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest text-[#00FF87] uppercase mb-6">
            Aplicações Reais
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#050505] mb-8 leading-tight">
            O que acontece quando uma empresa vira
            <br className="hidden sm:inline" />
            <span className="flex items-center justify-center italic bg-gradient-to-r from-[#00FF87] to-[#00E5FF] bg-clip-text text-transparent min-h-[1.4em]">
              {displayedText}
              <span className="inline-block w-[4px] h-[0.8em] bg-[#00E5FF] ml-1.5 animate-pulse not-italic" />
            </span>
          </h2>
          <p className="text-base text-[#57606f] max-w-3xl mx-auto leading-relaxed font-light">
            Cenários de transformação por segmento.
            <br />
            Cada caso é um padrão que se repete em organizações similares.
          </p>
        </div>

        {/* Grid de Segmentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {segmentos.map((seg, idx) => (
            <div
              key={idx}
              className="group border border-[#e5e7eb] rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#00FF87]/10 border border-[#00FF87]/30 mb-4">
                <span className="text-xs font-semibold tracking-wider text-[#00FF87] uppercase">
                  {seg.badge}
                </span>
              </div>

              {/* Desafio */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#050505] mb-2 uppercase tracking-tight">
                  Desafio
                </h4>
                <p className="text-sm text-[#57606f] leading-relaxed">
                  {seg.desafio}
                </p>
              </div>

              {/* Com IA */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#00FF87] mb-2 uppercase tracking-tight">
                  Com IA
                </h4>
                <p className="text-sm text-[#57606f] leading-relaxed">
                  {seg.comIa}
                </p>
              </div>

              {/* Métricas */}
              <div className="space-y-3 border-t border-[#e5e7eb] pt-4">
                {seg.metricas.map((metrica, midx) => (
                  <div key={midx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#00FF87] mt-0.5" />
                    <span className="text-xs text-[#57606f] leading-relaxed">{metrica}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bloco Experiência Real - Ao Vivo */}
        <div className="bg-white rounded-2xl border border-[#e5e7eb] p-12 md:p-16 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-[#00FF87]/10 border border-[#00FF87]/30 mb-6">
            <span className="text-xs font-semibold tracking-wider text-[#00FF87] uppercase">
              Experiência Real - Ao Vivo
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-[#050505] mb-6">
            Converse agora com a Sof[IA]
          </h3>

          <p className="text-base text-[#57606f] max-w-2xl mx-auto mb-2 leading-relaxed font-light">
            Nossa agente de atendimento com IA responde dúvidas sobre a TRÍADE, inteligência artificial para transformar sua empresa — com contexto, histórico e personalização.
          </p>

          <p className="text-xs text-[#a1a5b3] mb-10">
            Siga a conversa. Presença máxima. Sem cadastros obrigatórios.
          </p>

          <a
            href="#sofia"
            className="inline-block px-10 py-4 rounded-lg font-semibold bg-[#00FF87] text-[#050505] hover:bg-[#00e576] active:scale-95 transition-all duration-200 shadow-lg shadow-[#00FF87]/20 text-sm tracking-wide mb-4"
          >
            Falar com a Sof[IA] agora
          </a>

          <p className="text-xs text-[#a1a5b3]">
            via WhatsApp. Resposta imediata. Sem comerciários necessários.
          </p>
        </div>
      </div>
    </section>
  );
}
