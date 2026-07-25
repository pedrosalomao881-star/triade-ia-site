'use client';

import React, { useState, useLayoutEffect } from 'react';

interface TypewriterTextProps {
  prefix: string;
  typeText: string;
  className?: string;
}

export default function TypewriterText({
  prefix,
  typeText,
  className = '',
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useLayoutEffect(() => {
    let timeout: NodeJS.Timeout;
    let blinkInterval: NodeJS.Timeout;

    // Modo digitação (typing)
    if (!isDeleting && displayText.length < typeText.length) {
      timeout = setTimeout(() => {
        setDisplayText(typeText.slice(0, displayText.length + 1));
        setIsBlinking(false);
      }, 80); // velocidade de digitação
    }

    // Modo cursor piscando após completar
    if (displayText.length === typeText.length && !isDeleting) {
      setIsBlinking(true);

      // Aguarda 3 segundos antes de começar a apagar
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    }

    // Modo apagando (deleting)
    if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(typeText.slice(0, displayText.length - 1));
      }, 40); // velocidade de apagamento (mais rápido)
    }

    // Reinicia o loop
    if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setIsBlinking(false);
    }

    // Cursor piscando
    if (isBlinking) {
      blinkInterval = setInterval(() => {
        setIsBlinking((prev) => !prev);
      }, 530); // intervalo de piscar
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(blinkInterval);
    };
  }, [displayText, isDeleting, isBlinking, typeText]);

  return (
    <span className={className}>
      {prefix}
      <span className="italic bg-gradient-to-r from-[#00FF87] to-[#00E5FF] bg-clip-text text-transparent">
        {displayText}
      </span>
      {isBlinking && (
        <span className="italic text-[#00FF87] ml-0.5 animate-pulse">|</span>
      )}
    </span>
  );
}
