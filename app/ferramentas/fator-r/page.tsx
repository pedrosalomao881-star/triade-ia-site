import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import FatorRCalculator from "./components/FatorRCalculator";

export const metadata: Metadata = {
  title: "Simulador Fator R — Tríade IA",
  description:
    "Descubra se sua empresa no Simples Nacional tem vantagem com o Fator R. Simule em 2 minutos.",
};

export default function FatorRPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ferramentas"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às Ferramentas
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Simulador Fator R
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            O Fator R é o índice de folha sobre receita que define sua alíquota
            no Simples Nacional. Descubra em 2 minutos se sua empresa tem
            vantagem.
          </p>

          {/* Informações rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Tempo de cálculo</p>
              <p className="text-xl font-bold text-gray-900">2 minutos</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Fator R Governo</p>
              <p className="text-xl font-bold text-gray-900">28%</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Redução alíquota</p>
              <p className="text-xl font-bold text-green-600">Até 8%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FatorRCalculator />
        </div>
      </section>

      {/* Info Adicional */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Como funciona o Fator R?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O que é?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                O Fator R é um índice que relaciona a folha de pagamento com a
                receita bruta. Ele define se sua empresa tem direito a uma
                alíquota reduzida no Simples Nacional.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Como calcular?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Divida a folha mensal pela receita bruta e multiplique por 100.
                Se o resultado for maior que 28% (Fator R do governo), sua
                alíquota cai para até 8%.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-3">
              📌 Exemplo prático
            </h3>
            <p className="text-green-800 mb-3">
              Sua empresa tem receita mensal de R$ 200.000 e folha de R$
              60.000. O Fator R é: (60.000 ÷ 200.000) × 100 = <strong>30%</strong>
            </p>
            <p className="text-green-800">
              Como 30% &gt; 28%, sua alíquota é reduzida! ✅
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
