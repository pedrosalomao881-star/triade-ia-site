import type { Metadata } from "next";
import QuizMaturidade from "../components/QuizMaturidade";

export const metadata: Metadata = {
  title: "Quiz de Maturidade AI-First",
  description:
    "Descubra em qual estágio de maturidade AI-First sua empresa está — em menos de 3 minutos. Do Nível 1 (Manual) ao Nível 5 (AI-First).",
};

export default function Quiz() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-brand border border-brand/20 rounded-full px-4 py-1 mb-5 uppercase tracking-widest">
            Diagnóstico Gratuito
          </span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ice leading-tight mb-4">
            Qual é o nível de maturidade AI-First da sua empresa?
          </h1>
          <p className="text-ice/45 text-sm leading-relaxed max-w-sm mx-auto">
            6 perguntas. Menos de 3 minutos. Resultado imediato — e um plano personalizado para avançar.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="border border-white/[0.08] rounded-2xl p-8 md:p-10 bg-navy-card">
          <QuizMaturidade />
        </div>

        <p className="text-center text-xs text-ice/20 mt-6">
          Baseado no Modelo de Maturidade AI-First da TRÍADE IA · Itumbiara, Goiás
        </p>
      </div>
    </section>
  );
}
