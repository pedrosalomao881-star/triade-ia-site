"use client";

import { useState, useEffect } from "react";

const TYPEWRITER_TEXT = "liderarão a próxima década.";
const TYPING_SPEED = 70; // ms por letra
const LOOP_PAUSE = 3000; // espera após completar antes de reiniciar

export default function HeroHeadline() {
  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  // Cursor piscando
  useEffect(() => {
    const id = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Typewriter em loop
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      setDisplayed("");
      let i = 0;

      const typeNext = () => {
        i++;
        setDisplayed(TYPEWRITER_TEXT.slice(0, i));
        if (i < TYPEWRITER_TEXT.length) {
          timeoutId = setTimeout(typeNext, TYPING_SPEED);
        } else {
          // Aguarda e reinicia
          timeoutId = setTimeout(runCycle, LOOP_PAUSE);
        }
      };

      timeoutId = setTimeout(typeNext, TYPING_SPEED);
    };

    // Pequeno delay inicial para não colidir com a animação de entrada da página
    timeoutId = setTimeout(runCycle, 600);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <h1 className="animate-fade-up-delay-1 font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.10] mb-7 tracking-tight text-center">
      {/* Linha 1 — Gordita Light (Raleway 300) */}
      <span
        className="block text-ice sm:whitespace-nowrap"
        style={{ fontFamily: "var(--font-gordita), sans-serif", fontWeight: 300 }}
      >
        {/*   = espaço não-separável — garante "empresas que" juntos em mobile */}
        Construindo as empresas{" "}que
      </span>

      {/* Linha 2 — Poppins + gradient + typewriter */}
      <span
        className="block"
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontWeight: 700,
          background: "linear-gradient(90deg, #2ECC71 0%, #41A2CF 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {displayed}
        {/* Cursor piscando */}
        <span
          aria-hidden
          style={{
            display: "inline-block",
            width: "3px",
            height: "0.9em",
            verticalAlign: "text-bottom",
            marginLeft: "2px",
            background: "linear-gradient(180deg, #2ECC71, #41A2CF)",
            borderRadius: "1px",
            opacity: cursorOn ? 1 : 0,
            transition: "opacity 0.1s",
          }}
        />
      </span>
    </h1>
  );
}
