"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface PriceData {
  carga: number;
  preco: number;
  ajuste: number;
}

export default function RecalculadorCalculator() {
  const [step, setStep] = useState(1);
  const [regime, setRegime] = useState("");
  const [insumos, setInsumos] = useState(30);
  const [preco, setPreco] = useState("");
  const [margem, setMargem] = useState(20);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [resultado, setResultado] = useState<Record<number, PriceData> | null>(null);

  const regimeLabels: Record<string, string> = {
    SN_COM: "Simples Nacional — Comércio",
    SN_IND: "Simples Nacional — Indústria",
    SN_SER: "Simples Nacional — Serviços",
    LP_SER: "Lucro Presumido — Serviços",
    LP_COM: "Lucro Presumido — Comércio",
    LP_IND: "Lucro Presumido — Indústria",
    LR: "Lucro Real",
  };

  const fases: Record<number, string> = {
    2025: "Sistema atual",
    2026: "CBS teste",
    2027: "CBS pleno",
    2028: "IBS 20%",
    2030: "IBS 60%",
    2033: "IVA Dual pleno",
  };

  function getCargas(reg: string, insumosPercent: number) {
    const ins = insumosPercent / 100;
    const creditEff = reg === "LR" ? 1.0 : reg.startsWith("LP") ? 0.55 : 0;
    const valAdicionado = 1 - ins * creditEff;

    const cargaBase: Record<string, number> = {
      SN_COM: 0.071,
      SN_IND: 0.07,
      SN_SER: 0.094,
      LP_SER: 0.06650,
      LP_COM: 0.04930,
      LP_IND: 0.055,
      LR: 0.05850,
    };

    const c0 = cargaBase[reg] || 0.07;
    const cbsIbsPleno = 0.265 * valAdicionado;

    return {
      2025: c0,
      2026: reg.startsWith("SN") ? c0 * 0.98 : c0 + 0.265 * 0.009 * valAdicionado,
      2027: reg.startsWith("SN")
        ? c0 * 0.97
        : 0.088 * valAdicionado + c0 * 0.35,
      2028: reg.startsWith("SN")
        ? c0 * 0.96
        : 0.088 * valAdicionado + 0.177 * 0.2 * valAdicionado + c0 * 0.26,
      2030: reg.startsWith("SN")
        ? c0 * 0.94
        : 0.088 * valAdicionado + 0.177 * 0.6 * valAdicionado + c0 * 0.14,
      2033: reg.startsWith("SN") ? c0 * 0.92 : cbsIbsPleno,
    };
  }

  const handleCalculate = () => {
    if (!regime) {
      alert("Selecione o regime tributário");
      return;
    }
    if (!preco || parseFloat(preco) < 1) {
      alert("Informe o preço de venda");
      return;
    }

    const p = parseFloat(preco);
    const margemFrac = margem / 100;
    const cargas = getCargas(regime, insumos);
    const c0 = cargas[2025];
    const custos = 1 - margemFrac - c0;

    const precos: Record<number, PriceData> = {};
    Object.entries(cargas).forEach(([year, c]) => {
      const yNum = parseInt(year);
      const pNovo = (p * (1 - c0)) / (1 - c);
      precos[yNum] = {
        carga: c,
        preco: pNovo,
        ajuste: (pNovo - p) / p,
      };
    });

    setResultado(precos);
  };

  const fmt = (v: number) =>
    "R$ " +
    v.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const fmtPct = (v: number) => (v * 100).toFixed(1) + "%";

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Card Orientação */}
      {step < 4 && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <p className="font-semibold text-blue-900 mb-2">📊 Calculadora CBS/IBS</p>
          <p className="text-sm text-blue-800">
            Calcule qual será o novo preço de venda para manter a mesma margem
            após a entrada do CBS e IBS em 2027–2033.
          </p>
        </div>
      )}

      {/* Progresso */}
      {step < 4 && (
        <div className="flex gap-1 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded ${
                s < step
                  ? "bg-green-600"
                  : s === step
                  ? "bg-green-400"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      {/* STEP 1: Regime */}
      {step === 1 && (
        <div className="bg-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Regime tributário atual</h2>
          <div className="space-y-4 mb-6">
            <select
              value={regime}
              onChange={(e) => setRegime(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="">Selecione...</option>
              {Object.entries(regimeLabels).map(([k, v]) => (
                <option key={k} value={k}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Percentual de insumos com NF (0–80%)
            </label>
            <input
              type="range"
              min="0"
              max="80"
              value={insumos}
              onChange={(e) => setInsumos(parseInt(e.target.value))}
              className="w-full"
            />
            <p className="text-center text-xl font-bold text-green-600 mt-2">
              {insumos}%
            </p>
          </div>

          <button
            onClick={() => {
              if (!regime) {
                alert("Selecione o regime");
                return;
              }
              setStep(2);
            }}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
          >
            Continuar <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* STEP 2: Preço e Margem */}
      {step === 2 && (
        <div className="bg-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Preço e margem atual</h2>
          <div className="space-y-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preço de venda (R$)
              </label>
              <input
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Ex: 1000"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Margem de lucro líquida (%)
              </label>
              <input
                type="range"
                min="1"
                max="70"
                value={margem}
                onChange={(e) => setMargem(parseInt(e.target.value))}
                className="w-full"
              />
              <p className="text-center text-xl font-bold text-green-600 mt-2">
                {margem}%
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setStep(3)}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              Continuar
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

      {/* STEP 3: Dados */}
      {step === 3 && (
        <div className="bg-white rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Seu nome</h2>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleCalculate}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
            >
              Ver resultado
            </button>
            <button
              onClick={() => setStep(2)}
              className="flex-1 border-2 border-gray-300 text-gray-700 font-semibold py-3 rounded-lg"
            >
              Voltar
            </button>
          </div>
        </div>
      )}

      {/* RESULTADO */}
      {resultado && (
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            Novo preço recomendado
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Preço atual (2025)</p>
              <p className="text-2xl font-bold text-gray-900">{fmt(parseFloat(preco))}</p>
              <p className="text-xs text-gray-500 mt-2">
                Carga: {fmtPct(resultado[2025].carga)}
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
              <p className="text-sm text-green-700 mb-1">Preço 2033 (recomendado)</p>
              <p className="text-2xl font-bold text-green-600">
                {fmt(resultado[2033].preco)}
              </p>
              <p className="text-xs text-green-600 mt-2">
                Carga: {fmtPct(resultado[2033].carga)}
              </p>
            </div>
          </div>

          <table className="w-full mb-8 text-sm">
            <thead>
              <tr className="border-b-2 border-green-300">
                <th className="text-left py-2 text-green-900">Ano</th>
                <th className="text-left py-2 text-green-900">Fase</th>
                <th className="text-right py-2 text-green-900">Carga</th>
                <th className="text-right py-2 text-green-900">Preço</th>
                <th className="text-right py-2 text-green-900">Ajuste</th>
              </tr>
            </thead>
            <tbody>
              {[2025, 2026, 2027, 2028, 2030, 2033].map((year) => {
                const data = resultado[year];
                const adj = data.ajuste;
                const adjStr =
                  adj === 0
                    ? "Base"
                    : (adj > 0 ? "+" : "") + (adj * 100).toFixed(1) + "%";
                return (
                  <tr key={year} className="border-b border-green-200">
                    <td className="py-3 font-bold text-gray-900">{year}</td>
                    <td className="py-3 text-gray-700">{fases[year]}</td>
                    <td className="py-3 text-right text-gray-700">
                      {fmtPct(data.carga)}
                    </td>
                    <td className="py-3 text-right font-bold">{fmt(data.preco)}</td>
                    <td
                      className="py-3 text-right font-bold"
                      style={{
                        color:
                          adj > 0
                            ? "#2ECC71"
                            : adj < 0
                            ? "#EF4444"
                            : "#666",
                      }}
                    >
                      {adjStr}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button
            onClick={() => {
              setStep(1);
              setRegime("");
              setPreco("");
              setNome("");
              setEmail("");
              setResultado(null);
            }}
            className="w-full text-green-600 hover:text-green-700 font-semibold py-3"
          >
            Refazer com outros valores
          </button>
        </div>
      )}
    </div>
  );
}
