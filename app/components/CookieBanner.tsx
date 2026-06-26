"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("triade_cookies_ok");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("triade_cookies_ok", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] bg-[#0d1f31] border-t border-white/[0.07] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
      <p className="text-sm text-ice/70 leading-relaxed max-w-2xl">
        A TRÍADE IA utiliza cookies para melhorar a sua experiência, segurança e lhe
        entregar um conteúdo personalizado. Para saber mais acesse a nossa{" "}
        <a
          href="/privacidade"
          className="text-mist underline underline-offset-2 hover:text-ice transition-colors"
        >
          política de privacidade
        </a>
        .
      </p>
      <button
        onClick={accept}
        className="flex-shrink-0 bg-brand text-navy font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-brand-dark transition-colors whitespace-nowrap"
      >
        Entendi ✓
      </button>
    </div>
  );
}
