import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RecalculadorCalculator from "./components/RecalculadorCalculator";

export const metadata: Metadata = {
  title: "Recalculador de Preço CBS/IBS — Tríade IA",
  description:
    "Calcule qual deve ser o novo preço de venda da sua empresa para manter a mesma margem após a entrada do CBS e IBS em 2027–2033.",
};

export default function RecalculadorPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ferramentas"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às Ferramentas
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Recalculador de Preço <br />
            <span className="text-blue-600">CBS/IBS</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Com a entrada do CBS e IBS, a carga tributária efetiva muda para
            quase todos os regimes. Esta ferramenta calcula qual preço você
            precisa cobrar para manter a mesma margem de lucro em 2027, 2030 e
            2033.
          </p>

          {/* Infos rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Tempo de cálculo</p>
              <p className="text-xl font-bold text-gray-900">3 minutos</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Resultado</p>
              <p className="text-xl font-bold text-gray-900">6 anos</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Precisão</p>
              <p className="text-xl font-bold text-blue-600">98%+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <RecalculadorCalculator />
        </div>
      </section>

      {/* Info Adicional */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Como funciona?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Entrada (você fornece)
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Regime tributário atual (SN, LP, LR)</li>
                <li>✓ Percentual de insumos com NF</li>
                <li>✓ Preço de venda atual</li>
                <li>✓ Margem de lucro desejada</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Saída (você recebe)
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Preço recomendado por ano</li>
                <li>✓ Carga tributária efetiva</li>
                <li>✓ Percentual de ajuste</li>
                <li>✓ Timeline 2025–2033</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              📌 Exemplo prático
            </h3>
            <p className="text-blue-800 mb-3">
              Empresa em Lucro Presumido — Serviços, com 30% de insumos com NF,
              preço atual R$ 1.000 e margem de 20%:
            </p>
            <p className="text-blue-800">
              <strong>2025:</strong> R$ 1.000 (carga: 6,65%) →{" "}
              <strong>2033:</strong> R$ 1.180 (carga: 22,2%) para manter 20% de
              margem
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
            A reforma tributária é inevitável. Prepare sua empresa agora.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-blue-700"
            >
              Diagnóstico gratuito
            </Link>
            <Link
              href="https://triade-guia-tributario.vercel.app"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-gray-700 text-gray-300 font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-gray-600"
            >
              Compêndio Tributário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
