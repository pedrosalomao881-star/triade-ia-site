import { MessageSquare, TrendingUp, Workflow, ShieldCheck, MousePointerClick } from "lucide-react";

const badges = [
  {
    icon: <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.5} />,
    label: "Atendimento 24h",
    style: { top: "22%", left: "4%", animationDelay: "0s" },
  },
  {
    icon: <TrendingUp className="w-3.5 h-3.5" strokeWidth={1.5} />,
    label: "IA para Vendas",
    style: { top: "14%", right: "4%", animationDelay: "0.9s" },
  },
  {
    icon: <Workflow className="w-3.5 h-3.5" strokeWidth={1.5} />,
    label: "Automação",
    style: { top: "52%", left: "3%", animationDelay: "1.6s" },
  },
  {
    icon: <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} />,
    label: "Inteligência Fiscal",
    style: { top: "56%", right: "3.5%", animationDelay: "0.4s" },
  },
  {
    icon: <MousePointerClick className="w-3.5 h-3.5" strokeWidth={1.5} />,
    label: "Alta Conversão",
    style: { bottom: "26%", right: "5.5%", animationDelay: "1.2s" },
  },
];

export default function FloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden xl:block" aria-hidden="true">
      {badges.map((b) => (
        <div
          key={b.label}
          className="absolute flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-full px-3.5 py-2 text-xs text-ice/55 shadow-[0_0_18px_rgba(46,204,113,0.06)]"
          style={{
            ...b.style,
            animation: `float 5s ease-in-out ${b.style.animationDelay} infinite`,
            willChange: "transform",
          }}
        >
          <span className="text-brand/70">{b.icon}</span>
          {b.label}
        </div>
      ))}
    </div>
  );
}
