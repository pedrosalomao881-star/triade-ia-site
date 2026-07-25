'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterNumberProps {
  targetValue: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CounterNumber({
  targetValue,
  suffix = '',
  prefix = '',
  duration = 1800,
  className = '',
}: CounterNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Inicia quando 10% do elemento está visível
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const animateCounter = () => {
    const startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: easeOutQuad para suavidade elegante
      const easeProgress = 1 - Math.pow(1 - progress, 2);
      const currentValue = Math.floor(targetValue * easeProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Garantir que o valor final é exato
        setDisplayValue(targetValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  };

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
