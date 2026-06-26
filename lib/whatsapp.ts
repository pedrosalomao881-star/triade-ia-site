const PHONE = "556492966118";

interface WhatsAppContext {
  nome?: string;
  empresa?: string;
  setor?: string;
  nivel?: number;
  origem?: string;
}

const MATURITY_LABELS: Record<number, string> = {
  1: "Empresa Manual",
  2: "Empresa Digital",
  3: "Empresa Integrada",
  4: "Empresa Inteligente",
  5: "Empresa AI-First",
};

export function buildWhatsAppUrl(ctx?: WhatsAppContext): string {
  let text: string;

  if (!ctx || Object.keys(ctx).length === 0) {
    text = "Olá! Quero solicitar o Diagnóstico AI-First da TRÍADE IA.";
  } else {
    const parts: string[] = ["Olá!"];

    if (ctx.nome && ctx.empresa) {
      parts.push(`Sou ${ctx.nome}, da ${ctx.empresa}.`);
    } else if (ctx.nome) {
      parts.push(`Me chamo ${ctx.nome}.`);
    }

    if (ctx.setor) parts.push(`Atuo no setor: ${ctx.setor}.`);

    if (ctx.nivel) {
      const label = MATURITY_LABELS[ctx.nivel] ?? `Nível ${ctx.nivel}`;
      parts.push(`Fiz o Quiz de Maturidade e estou no ${label} (Nível ${ctx.nivel}/5).`);
    }

    parts.push("Gostaria de solicitar o Diagnóstico AI-First da TRÍADE IA.");
    text = parts.join(" ");
  }

  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

// Pre-built constants — import these instead of hardcoding WA_LINK everywhere
export const WA_DEFAULT = buildWhatsAppUrl();
export const WA_DIAGNOSTICO = buildWhatsAppUrl({ origem: "diagnostico" });
export const WA_QUIZ = buildWhatsAppUrl({ origem: "quiz" });
