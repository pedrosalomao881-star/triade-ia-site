"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { calculateFatorR, type FatorRResult } from "../utils/calculateFatorR";

export default function FatorRCalculator() {
  const [folha, setFolha] = useState("");
  const [receita, setReceita] = useState("");
  const [result, setResult] = useState<FatorRResult | null>(null);
  const [calculado, setCalculado] = useState(false);

  const handleCalculate = () => {
    const folhaMensal = parseFloat(folha);
    const receitaBruta = parseFloat(receita);

    const resultado = calculateFatorR(folhaMensal, receitaBruta);
    setResult(resultado);
    setCalculado(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Formulário */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Simulador Fator R
        </h2>

        <div className="space-y-6">
          {/* Folha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Folha de Pagamento Mensal (R$)
            </label>
            <input
              type="number"
              value={folha}
              onChange={(e) => setFolha(e.target.value)}
              placeholder="Ex: 50.000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Soma de todos os salários pagos no mês
            </p>
          </div>

          {/* Receita */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Receita Bruta Mensal (R$)
            </label>
            <input
              type="number"
              value={receita}
              onChange={(e) => setReceita(e.target.value)}
              placeholder="Ex: 200.000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Receita total antes de impostos
            </p>
          </div>

          {/* Botão */}
          <button
            onClick={handleCalculate}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Calcular Fator R <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Resultado */}
      {calculado && result && (
        <div
          className={`rounded-2xl p-8 shadow-sm border-2 ${
            result.temVantagem
              ? "bg-green-50 border-green-300"
              : "bg-red-50 border-red-300"
          }`}
        >
          <div className="flex items-start gap-4 mb-6">
            {result.temVantagem ? (
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            )}
            <div>
              <p
                className={`text-xl font-bold ${
                  result.temVantagem ? "text-green-900" : "text-red-900"
                }`}
              >
                {result.mensagem}
              </p>
            </div>
          </div>

          {/* Detalhes */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/60 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Folha % Receita</p>
              <p className="text-2xl font-bold text-gray-900">
                {result.folhaPercentual.toFixed(1)}%
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Fator R Governo</p>
              <p className="text-2xl font-bold text-gray-900">
                {result.fatorRGoverno}%
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Alíquota Estimada</p>
              <p className="text-2xl font-bold text-gray-900">
                {result.aliquotaEstimada}%
              </p>
            </div>
            <div className="bg-white/60 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <p
                className={`text-lg font-bold ${
                  result.temVantagem ? "text-green-600" : "text-red-600"
                }`}
              >
                {result.temVantagem ? "Vantagem" : "Sem Vantagem"}
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition-all">
            Desbloquear Análise Completa (R$ 9,90)
          </button>
          <p className="text-xs text-gray-600 text-center mt-3">
            Acesso imediato via Cakto • Relatório em PDF • Histórico de simulações
          </p>
        </div>
      )}
    </div>
  );
}
