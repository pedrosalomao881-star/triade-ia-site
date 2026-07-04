"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { calcular, fmt, fmtPct, type ResultadoCalculo } from "../lib/calculos";

export default function RegimeCertoCalculator() {
  const [step, setStep] = useState(1);
  const [atividade, setAtividade] = useState("");
  const [faturamento, setFaturamento] = useState("");
  const [folha, setFolha] = useState("");
  const [resultado, setResultado] = useState<ResultadoCalculo | null>(null);

  const atividades = [
    { id: "comercio", label: "Comércio" },
    { id: "industria", label: "Indústria" },
    { id: "servicos", label: "Serviços" },
    { id: "servicos_profissionais", label: "Profissionais Liberais" },
  ];

  const handleCalcular = () => {
    const fat = parseFloat(faturamento.replace(/\D/g, "") || "0");
    const fol = parseFloat(folha.replace(/\D/g, "") || "0");

    if (!atividade) {
      alert("Selecione uma atividade");
      return;
    }
    if (fat < 1 || fol < 1) {
      alert("Informe valores válidos");
      return;
    }

    const res = calcular(atividade, fat, fol);
    setResultado(res);
  };

  if (resultado) {
    const melhorRegime = [
      resultado.simplesNacional,
      resultado.lucroPresumido,
      resultado.lucroReal,
    ].filter((r) => r.viavel && r.nome === resultado.melhorRegime)[0];

    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-2xl p-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {resultado.melhorRegime}
            </h2>
            <p className="text-lg text-gray-700">
              é a melhor opção para sua empresa
            </p>
          </div>

          {/* Comparativo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[resultado.simplesNacional, resultado.lucroPresumido, resultado.lucroReal]
              .filter((r) => r.viavel)
              .map((regime) => (
                <div
                  key={regime.nome}
                  className={`rounded-lg p-6 border-2 ${
                    regime.nome === resultado.melhorRegime
                      ? "bg-green-100 border-green-400"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <p className="text-sm text-gray-600 mb-2">{regime.nome}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-1">
                    {fmt(regime.total)}
                  </p>
                  <p className="text-xs text-gray-500">
                    Alíquota: {fmtPct(regime.aliquotaEfetiva)}
                  </p>
                  {regime.anexo && (
                    <p className="text-xs text-gray-600 mt-2">{regime.anexo}</p>
                  )}
                </div>
              ))}
          </div>

          {/* Economia */}
          {resultado.economia > 0 && (
            <div className="bg-green-100 border border-green-300 rounded-lg p-6 mb-8">
              <p className="text-sm text-green-700 mb-2">Economia potencial</p>
              <p className="text-2xl font-bold text-green-900">
                {fmt(resultado.economia)} por ano
              </p>
            </div>
          )}

          {/* Detalhes */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Detalhamento</h3>
            <div className="space-y-3">
              {Object.entries(melhorRegime?.detalhes || {}).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-gray-600">{key}</span>
                  <span className="font-semibold text-gray-900">{fmt(value)}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setStep(1);
              setAtividade("");
              setFaturamento("");
              setFolha("");
              setResultado(null);
            }}
            className="w-full text-green-600 hover:text-green-700 font-semibold py-3"
          >
            Refazer simulação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Orientação */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <p className="font-semibold text-blue-900 mb-2">
          🎯 Qual é seu regime certo?
        </p>
        <p className="text-sm text-blue-800">
          Compare Simples Nacional, Lucro Presumido e Lucro Real em 3 minutos.
        </p>
      </div>

      {/* Progresso */}
      {step < 3 && (
        <div className="flex gap-1 mb-8">
          {[1, 2].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded ${
                s <= step ? "bg-green-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* STEP 1: Atividade */}
      {step === 1 && (
        <div className="bg-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Qual é sua atividade?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {atividades.map((a) => (
              <button
                key={a.id}
                onClick={() => {
                  setAtividade(a.id);
                  setStep(2);
                }}
                className={`p-4 rounded-lg border-2 transition-all text-left font-semibold ${
                  atividade === a.id
                    ? "border-green-500 bg-green-50 text-green-900"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: Dados */}
      {step === 2 && (
        <div className="bg-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Dados da empresa</h2>
          <div className="space-y-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Faturamento anual (R$)
              </label>
              <input
                type="text"
                value={faturamento}
                onChange={(e) =>
                  setFaturamento(e.target.value.replace(/\D/g, "").slice(0, 12))
                }
                placeholder="Ex: 500000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Folha de pagamento mensal (R$)
              </label>
              <input
                type="text"
                value={folha}
                onChange={(e) =>
                  setFolha(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                placeholder="Ex: 10000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleCalcular}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
            >
              Ver resultado <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setStep(1)}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg"
            >
              Voltar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
