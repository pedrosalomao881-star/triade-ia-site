import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ChecklistCalculator from "./components/ChecklistCalculator";

export const metadata: Metadata = {
  title: "Checklist Split Payment 2026 — Tríade IA",
  description:
    "8 itens críticos para sua empresa estar pronta para o Split Payment. Verifique cada ponto e receba um relatório personalizado.",
};

export default function ChecklistPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ferramentas"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às Ferramentas
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Sua empresa está preparada <br />
            <span className="text-amber-600">para o Split Payment?</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            O Split Payment muda completamente o fluxo de caixa. A retenção de
            ISS/ICMS acontece na transação, não depois. Este checklist valida
            os 8 pontos críticos para sua empresa estar pronta.
          </p>

          {/* Infos rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Tempo</p>
              <p className="text-xl font-bold text-gray-900">3 minutos</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Itens críticos</p>
              <p className="text-xl font-bold text-gray-900">8</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Resultado</p>
              <p className="text-xl font-bold text-amber-600">Score 0–100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ChecklistCalculator />
        </div>
      </section>

      {/* Contexto */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Por que o Split Payment muda tudo?
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Antes (2025)
              </h3>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <p className="text-gray-700 mb-3">
                  Você recebe o valor total → paga ISS/ICMS depois
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Dia 1:</strong> Cliente compra R$ 100, você recebe
                    R$ 100
                  </p>
                  <p>
                    <strong>Dia 30:</strong> Você paga ISS/ICMS (R$ 11 a R$ 19)
                  </p>
                  <p className="text-amber-600 font-semibold">
                    → Você tinha capital de giro por 30 dias
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Depois (2026+)
              </h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <p className="text-gray-700 mb-3">
                  Você recebe valor líquido → governo fica com retenção
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Dia 1:</strong> Cliente compra R$ 100, você recebe
                    R$ 81–89
                  </p>
                  <p>
                    <strong>Governo:</strong> Fica com R$ 11–19 automaticamente
                  </p>
                  <p className="text-red-600 font-semibold">
                    → Seu caixa fica R$ 11–19 menor imediatamente
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              💡 O que você precisa estar pronto
            </h3>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>
                <strong>Sistema:</strong> PDV/NFC-e que retém automaticamente
              </li>
              <li>
                <strong>Caixa:</strong> Planejamento para menos capital de giro
              </li>
              <li>
                <strong>Fiscal:</strong> Integração com governo funcionando
              </li>
              <li>
                <strong>Operações:</strong> Equipe ciente e treinada
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Próximos passos
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Um relatório personalizado ajuda sua empresa a não ser pega de
            surpresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-amber-700"
            >
              Diagnóstico gratuito
            </Link>
            <Link
              href="/ferramentas/recalculador"
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-gray-300 font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-gray-600"
            >
              Recalculador CBS/IBS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
