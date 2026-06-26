const levels = [
  {
    number: "01",
    label: "Manual",
    title: "Empresa Manual",
    description: "Processos em papel, planilhas e WhatsApp. Alta dependência de pessoas para tudo.",
    tag: "onde a maioria está",
    highlight: true,
  },
  {
    number: "02",
    label: "Digital",
    title: "Empresa Digital",
    description: "Usa ferramentas digitais básicas — ERP, e-mail, sistemas — mas sem integração.",
    tag: null,
    highlight: false,
  },
  {
    number: "03",
    label: "Integrada",
    title: "Empresa Integrada",
    description: "Sistemas conectados, dados centralizados, algumas automações em operação.",
    tag: null,
    highlight: false,
  },
  {
    number: "04",
    label: "Inteligente",
    title: "Empresa Inteligente",
    description: "IA em processos específicos. Decisões baseadas em dados. Equipe focada em resultados.",
    tag: null,
    highlight: false,
  },
  {
    number: "05",
    label: "AI-First",
    title: "Empresa AI-First",
    description: "IA como infraestrutura central. Escala sem crescimento proporcional de custo.",
    tag: "destino",
    highlight: false,
  },
];

export default function MaturityModel() {
  return (
    <div className="w-full overflow-x-auto pb-2">
      {/* Connector line — desktop only */}
      <div className="relative hidden lg:block mb-10">
        <div className="absolute top-6 left-[calc(10%+16px)] right-[calc(10%+16px)] h-px bg-gradient-to-r from-brand/20 via-brand/40 to-brand" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 lg:gap-0 min-w-[360px]">
        {levels.map((l, i) => (
          <div key={l.number} className="relative flex flex-col items-center text-center px-3">
            {/* Step circle */}
            <div
              className={`w-12 h-12 rounded-full border flex items-center justify-center font-display font-bold text-sm mb-4 relative z-10 transition-all ${
                l.label === "AI-First"
                  ? "bg-brand border-brand text-navy"
                  : l.highlight
                  ? "bg-brand/10 border-brand/60 text-brand"
                  : "bg-navy border-white/20 text-ice/40"
              }`}
            >
              {l.label === "AI-First" ? "★" : l.number}
            </div>

            {/* Tag */}
            {l.tag && (
              <span
                className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 ${
                  l.highlight
                    ? "bg-brand/10 text-brand border border-brand/20"
                    : "bg-brand/20 text-brand border border-brand/30"
                }`}
              >
                {l.tag}
              </span>
            )}
            {!l.tag && <div className="h-5 mb-2" />}

            <p className="font-display font-semibold text-ice text-sm mb-2">{l.title}</p>
            <p className="text-ice/40 text-xs leading-relaxed">{l.description}</p>

            {/* Arrow between items on small screens */}
            {i < levels.length - 1 && (
              <div className="sm:hidden w-px h-6 bg-white/10 my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
