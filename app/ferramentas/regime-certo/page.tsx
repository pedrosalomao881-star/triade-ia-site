import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import RegimeCertoCalculator from "./components/RegimeCertoCalculator";

export const metadata: Metadata = {
  title: "Qual é seu Regime Certo? — Tríade IA",
  description:
    "Compare Simples Nacional, Lucro Presumido e Lucro Real em 3 minutos. Descubra quanto sua empresa pode economizar.",
};

export default function RegimeCertoPage() {
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
            Sua empresa está <br />
            <span className="text-green-600">no regime certo?</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Compare Simples Nacional, Lucro Presumido e Lucro Real em 3 minutos.
            Descubra quanto sua empresa pode economizar por ano escolhendo o regime
            ideal.
          </p>

          {/* Infos rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Tempo</p>
              <p className="text-xl font-bold text-gray-900">3 minutos</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Regimes</p>
              <p className="text-xl font-bold text-gray-900">3 opções</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Resultado</p>
              <p className="text-xl font-bold text-green-600">Economia R$</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <RegimeCertoCalculator />
        </div>
      </section>

      {/* Contexto */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Por que o regime correto importa?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Simples Nacional
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Um imposto único (DAS) que engloba IRPJ, CSLL, PIS, COFINS, ISS e
                ICMS.
              </p>
              <p className="text-xs text-gray-500">
                <strong>Melhor para:</strong> Comércio, indústria e serviços com
                faturamento até R$ 4,8M/ano
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Lucro Presumido
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Presume seu lucro. Você paga IRPJ, CSLL, PIS e COFINS sobre essa
                presunção.
              </p>
              <p className="text-xs text-gray-500">
                <strong>Melhor para:</strong> Empresas com faturamento até R$ 78M/ano
                e margem previsível
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-amber-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Lucro Real
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Você paga impostos sobre o lucro real. Requer contabilidade mais
                rigorosa.
              </p>
              <p className="text-xs text-gray-500">
                <strong>Melhor para:</strong> Empresas grandes ou com muitos créditos
                de insumos
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              💡 Como escolhemos o melhor regime?
            </h3>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>
                ✓ <strong>Simples Nacional:</strong> Tabelas 2024 com cálculo de
                Fator R para serviços
              </li>
              <li>
                ✓ <strong>Lucro Presumido:</strong> Presunções por setor (comércio,
                indústria, serviços)
              </li>
              <li>
                ✓ <strong>Lucro Real:</strong> Margem estimada com créditos de
                PIS/COFINS
              </li>
              <li>
                ✓ <strong>Comparação:</strong> Qual regime tem menor imposto anual
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
            Com o regime ideal identificado, planeje sua transição com ajuda profissional.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-green-700"
            >
              Diagnóstico completo
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
