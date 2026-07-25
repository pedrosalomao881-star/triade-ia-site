import React from 'react';

export default function CTAFinalSection() {
  return (
    <section className="bg-[#050505] py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8">
          Pronto para Transformar Sua Empresa?
        </h2>

        <p className="text-base md:text-lg text-[#b8bcc8] mb-12 leading-relaxed max-w-2xl mx-auto font-light">
          Comece com um diagnóstico estratégico gratuito. Sem compromisso. Você entenderá exatamente onde IA agrega valor — com números.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
          <a
            href="#contato"
            className="px-10 py-4 rounded-lg font-semibold bg-[#00FF87] text-[#050505] hover:bg-[#00e576] active:scale-95 transition-all duration-200 shadow-lg shadow-[#00FF87]/20 text-sm tracking-wide"
          >
            Agendar Diagnóstico Gratuito
          </a>
          <a
            href="#sobre"
            className="px-10 py-4 rounded-lg font-semibold border-2 border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/10 active:scale-95 transition-all duration-200 text-sm tracking-wide"
          >
            Saiba Mais Sobre Nossa Metodologia
          </a>
        </div>

      </div>
    </section>
  );
}
