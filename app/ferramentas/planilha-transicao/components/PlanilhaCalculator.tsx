"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ResultadoAnual {
  ano: number;
  faturamento: number;
  recebimentoDia30: number;
  retencaoPercentual: number;
  retencaoValor: number;
  capitalRetido: number;
  capitalRetidoDias: number;
  impactoFluxoCaixa: number;
}

export default function PlanilhaCalculator() {
  const [faturamento, setFaturamento] = useState("1200000");
  const [regime, setRegime] = useState("LR");
  const [margem, setMargem] = useState("18");
  const [insumos, setInsumos] = useState("30");
  const [prazoRecebimento, setPrazoRecebimento] = useState("30");
  const [showResults, setShowResults] = useState(false);
  const [resultados, setResultados] = useState<ResultadoAnual[]>([]);

  const regimes: Record<string, string> = {
    SN: "Simples Nacional",
    LP: "Lucro Presumido",
    LR: "Lucro Real",
  };

  const calcular = () => {
    const fat = parseFloat(faturamento.replace(/\D/g, "") || "0");
    const marg = parseFloat(margem) / 100;
    const ins = parseFloat(insumos) / 100;
    const prazo = parseInt(prazoRecebimento);

    if (fat < 1) {
      alert("Informe um faturamento válido");
      return;
    }

    // Cargas tributárias por regime e ano (simplificado)
    const cargas: Record<string, Record<number, number>> = {
      SN: { 2025: 0.08, 2026: 0.078, 2027: 0.076, 2028: 0.074, 2030: 0.07, 2033: 0.065 },
      LP: { 2025: 0.0665, 2026: 0.085, 2027: 0.12, 2028: 0.16, 2030: 0.20, 2033: 0.265 },
      LR: { 2025: 0.0585, 2026: 0.088, 2027: 0.16, 2028: 0.20, 2030: 0.24, 2033: 0.265 },
    };

    const anos = [2025, 2026, 2027, 2028, 2030, 2033];
    const novoResultados: ResultadoAnual[] = anos.map((ano) => {
      const carga = cargas[regime]?.[ano] || 0.1;
      const faturamentoMensal = fat / 12;
      const recebimentoDia30 = faturamentoMensal;
      const retencaoPercentual = carga;
      const retencaoValor = faturamentoMensal * retencaoPercentual;
      const capitalRetido = (faturamentoMensal * retencaoPercentual * prazo) / 30;
      const capitalRetidoDias = prazo;
      const impactoFluxoCaixa = retencaoValor * 12; // Anual

      return {
        ano,
        faturamento: fat,
        recebimentoDia30,
        retencaoPercentual,
        retencaoValor,
        capitalRetido,
        capitalRetidoDias,
        impactoFluxoCaixa,
      };
    });

    setResultados(novoResultados);
    setShowResults(true);
  };

  const fmt = (v: number) =>
    "R$ " +
    v.toLocaleString("pt-BR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  const fmtPct = (v: number) => (v * 100).toFixed(1) + "%";

  if (showResults && resultados.length > 0) {
    const piorImpacto = resultados.reduce((a, b) =>
      a.impactoFluxoCaixa > b.impactoFluxoCaixa ? a : b
    );

    const melhorCenario = resultados.reduce((a, b) =>
      a.retencaoPercentual < b.retencaoPercentual ? a : b
    );

    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6">
            Impacto de Capital de Giro
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <p className="text-sm text-gray-600 mb-2">Pior impacto anual</p>
              <p className="text-3xl font-bold text-red-600">
                {fmt(piorImpacto.impactoFluxoCaixa)}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Em {piorImpacto.ano} ({fmtPct(piorImpacto.retencaoPercentual)})
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <p className="text-sm text-gray-600 mb-2">Melhor cenário</p>
              <p className="text-3xl font-bold text-green-600">
                {fmt(melhorCenario.impactoFluxoCaixa)}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Em {melhorCenario.ano} ({fmtPct(melhorCenario.retencaoPercentual)})
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="text-left py-3 px-4 text-gray-700">Ano</th>
                  <th className="text-right py-3 px-4 text-gray-700">Carga</th>
                  <th className="text-right py-3 px-4 text-gray-700">Retenção/Mês</th>
                  <th className="text-right py-3 px-4 text-gray-700">Capital Retido</th>
                  <th className="text-right py-3 px-4 text-gray-700">Impacto Anual</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((r) => (
                  <tr
                    key={r.ano}
                    className={`border-b ${
                      r.retencaoPercentual > 0.15 ? "bg-red-50" : ""
                    }`}
                  >
                    <td className="py-3 px-4 font-bold text-gray-900">
                      {r.ano}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-700">
                      {fmtPct(r.retencaoPercentual)}
                    </td>
                    <td className="py-3 px-4 text-right text-gray-700">
                      {fmt(r.retencaoValor)}
                    </td>
                    <td className="py-3 px-4 text-right font-semibold text-gray-900">
                      {fmt(r.capitalRetido)}
                    </td>
                    <td className="py-3 px-4 text-right font-bold text-red-600">
                      {fmt(r.impactoFluxoCaixa)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>Interpretação:</strong> O "Capital Retido" é quanto seu
              caixa fica imobilizado. O "Impacto Anual" é o total retido ao
              longo do ano.
            </p>
          </div>

          <button
            onClick={() => {
              setShowResults(false);
              setResultados([]);
            }}
            className="w-full mt-6 text-red-600 hover:text-red-700 font-semibold py-3"
          >
            Refazer com outros valores
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Card Orientação */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <p className="font-semibold text-blue-900 mb-2">
          📊 Planilha de Transição
        </p>
        <p className="text-sm text-blue-800">
          Calcule o impacto do Split Payment no seu capital de giro ano a ano
          (2025–2033).
        </p>
      </div>

      {/* Formulário */}
      <div className="bg-white rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6">Seu cenário</h2>

        <div className="space-y-6 mb-8">
          {/* Regime */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Regime tributário
            </label>
            <select
              value={regime}
              onChange={(e) => setRegime(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            >
              {Object.entries(regimes).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* Faturamento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Faturamento anual (R$)
            </label>
            <input
              type="text"
              value={faturamento}
              onChange={(e) =>
                setFaturamento(
                  e.target.value.replace(/\D/g, "").slice(0, 12)
                )
              }
              placeholder="Ex: 1200000"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Margem */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Margem líquida (%)
            </label>
            <input
              type="number"
              value={margem}
              onChange={(e) => setMargem(e.target.value)}
              placeholder="Ex: 18"
              min="1"
              max="70"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Insumos */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Insumos com NF (%)
            </label>
            <input
              type="number"
              value={insumos}
              onChange={(e) => setInsumos(e.target.value)}
              placeholder="Ex: 30"
              min="0"
              max="80"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Prazo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Prazo de recebimento (dias)
            </label>
            <input
              type="number"
              value={prazoRecebimento}
              onChange={(e) => setPrazoRecebimento(e.target.value)}
              placeholder="Ex: 30"
              min="0"
              max="90"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <button
          onClick={calcular}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
        >
          Calcular impacto <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
