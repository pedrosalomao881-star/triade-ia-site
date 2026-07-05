import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PlanilhaCalculator from "./components/PlanilhaCalculator";

export const metadata: Metadata = {
  title: "Planilha de Transição Tributária 2026–2033 — Tríade IA",
  description:
    "Calcule o impacto do Split Payment no capital de giro da sua empresa ano a ano.",
};

export default function PlanilhaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ferramentas"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às Ferramentas
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Planilha de Transição <br />
            <span className="text-orange-600">2026–2033</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            O Split Payment retém impostos na transação. Quanto capital de giro
            sua empresa vai perder? Esta planilha simula o impacto ano a ano,
            regime a regime, para que você possa se preparar.
          </p>

          {/* Infos rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Anos analisados</p>
              <p className="text-xl font-bold text-gray-900">6</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Entrada de dados</p>
              <p className="text-xl font-bold text-gray-900">5 campos</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Resultado</p>
              <p className="text-xl font-bold text-orange-600">Tabela dinâmica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planilha */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <PlanilhaCalculator />
        </div>
      </section>

      {/* Contexto */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            O que acontece com o capital de giro?
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Antes (2025)
              </h3>
              <p className="text-gray-700 mb-2">
                R$ 100 mil de faturamento/mês = R$ 100 mil no seu caixa
              </p>
              <p className="text-sm text-gray-600">
                Você retém impostos depois. Capital fica com você por ~30 dias.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Depois (2026+)
              </h3>
              <p className="text-gray-700 mb-2">
                R$ 100 mil de faturamento/mês = R$ 80–90 mil no seu caixa
              </p>
              <p className="text-sm text-gray-600">
                Governo retém R$ 10–20 mil automaticamente. Capital fica{" "}
                <strong>menor e imediato</strong>.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Impacto Anual
              </h3>
              <p className="text-gray-700 mb-3">
                Se você recebe a cada 30 dias:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  • <strong>Retém/mês:</strong> R$ 10–20 mil × 12 meses
                </li>
                <li>
                  • <strong>Total/ano:</strong> R$ 120–240 mil <em>saem do caixa</em>
                </li>
                <li>
                  • <strong>Capital imobilizado:</strong> Aquele dinheiro que você
                  tinha por 30 dias agora não tem mais
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              💡 Por que isso importa?
            </h3>
            <p className="text-blue-800 text-sm mb-3">
              Muitas empresas usam esse capital de giro para:
            </p>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>✓ Pagar fornecedores a prazo</li>
              <li>✓ Pagar folha de pagamento</li>
              <li>✓ Manter estoque</li>
              <li>✓ Reinvestir no negócio</li>
            </ul>
            <p className="text-blue-800 text-sm mt-3">
              Sem esse capital, você pode precisar de <strong>empréstimo</strong>{" "}
              ou <strong>reduzir operações</strong>.
            </p>
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
            Conhecer o impacto é o primeiro passo para se preparar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-orange-700"
            >
              Diagnóstico gratuito
            </Link>
            <Link
              href="/ferramentas/checklist-split"
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-gray-300 font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-gray-600"
            >
              Checklist Split Payment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
