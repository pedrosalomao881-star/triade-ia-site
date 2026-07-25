'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollytelling() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Estado para efeito typewriter em "Transforma"
  const fullText = 'Transforma';
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Efeito de typewriter para "Transforma"
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));

        if (displayedText === fullText) {
          setTypingSpeed(150);
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 3000);
          return;
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(75);

        if (displayedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  // Efeito de scrollytelling para o vídeo
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Limpar ScrollTrigger anterior
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    video.pause();
    video.currentTime = 0;

    // Configurar animação apenas após vídeo estar pronto
    const onMetadata = () => {
      const duration = video.duration || 10;

      const tween = gsap.to(video, {
        currentTime: duration,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${Math.max(1200, duration * 300)}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    };

    if (video.readyState >= 1) {
      onMetadata();
    } else {
      video.addEventListener('loadedmetadata', onMetadata);
    }

    return () => {
      video.removeEventListener('loadedmetadata', onMetadata);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] overflow-hidden"
    >
      {/* Vídeo Background */}
      <video
        ref={videoRef}
        src="/piramide_otimizado.mp4"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60 z-0"
        muted
        playsInline
        preload="auto"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505] z-1 pointer-events-none" />

      {/* Conteúdo Centralizado */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl tracking-tighter text-white mb-8 leading-none" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro", sans-serif' }}>
            <span className="font-medium block">
              Inteligência Artificial que
            </span>
            <span className="inline-flex items-center font-extrabold italic bg-gradient-to-r from-[#00FF87] to-[#00E5FF] bg-clip-text text-transparent">
              {displayedText}
              <span className="inline-block w-[4px] h-[0.8em] bg-[#00E5FF] ml-1.5 animate-pulse not-italic" />
            </span>
          </h1>

          {/* Descrição */}
          <p className="text-base md:text-lg text-[#b8bcc8] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Soluções inteligentes para automação, análise de dados e tomada de decisão.
            <span className="block text-[#00FF87] mt-2 font-medium">
              Tecnologia segura, ética e com resultado real.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#solucoes"
              className="px-8 py-3.5 rounded-lg font-semibold bg-[#00FF87] text-[#050505] hover:bg-[#00e576] active:scale-95 transition-all duration-200 shadow-lg shadow-[#00FF87]/20 text-sm tracking-wide"
            >
              Agendar Diagnóstico
            </a>
            <a
              href="#diferenciais"
              className="px-8 py-3.5 rounded-lg font-semibold border border-[#f0f4ff]/20 text-[#f0f4ff] hover:bg-[#f0f4ff]/5 active:scale-95 transition-all duration-200 text-sm tracking-wide backdrop-blur-sm"
            >
              Conheça a Metodologia
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
