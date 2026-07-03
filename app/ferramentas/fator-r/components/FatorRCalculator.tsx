"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, XCircle, AlertCircle, X } from "lucide-react";
import { calculateFatorR, type FatorRResult } from "../utils/calculateFatorR";

const EXEMPLO_FOLHA = 50000;
const EXEMPLO_RECEITA = 180000;

export default function FatorRCalculator() {
  const [folha, setFolha] = useState(String(EXEMPLO_FOLHA));
  const [receita, setReceita] = useState(String(EXEMPLO_RECEITA));
  const [result, setResult] = useState<FatorRResult | null>(null);
  const [calculado, setCalculado] = useState(false);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [leadData, setLeadData] = useState({ nome: "", email: "", whatsapp: "" });

  const handleCalculate = () => {
    const folhaMensal = parseFloat(folha);
    const receitaBruta = parseFloat(receita);

    const resultado = calculateFatorR(folhaMensal, receitaBruta);
    setResult(resultado);
    setCalculado(true);
  };

  const handleUnlock = () => {
    setShowLeadModal(true);
  };

  const handleSubmitLead = async () => {
    if (!leadData.nome || !leadData.email || !leadData.whatsapp) {
      alert("Preencha todos os campos");
      return;
    }

    try {
      const response = await fetch("/api/leads/fator-r", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: leadData.nome,
          email: leadData.email,
          whatsapp: leadData.whatsapp,
          folha: parseFloat(folha),
          receita: parseFloat(receita),
        }),
      });

      if (response.ok) {
        window.open("https://pay.cakto.com.br/vrr4iz5_935787", "_blank");
        setShowLeadModal(false);
        setLeadData({ nome: "", email: "", whatsapp: "" });
      }
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Card de Orientação */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8 flex gap-4">
        <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-blue-900 mb-2">
            📊 Isto é um simulador interativo
          </p>
          <p className="text-sm text-blue-800">
            Os campos estão preenchidos com um exemplo. Mude os valores conforme sua empresa e clique em "Calcular Fator R" para ver o resultado.
          </p>
        </div>
      </div>

      {/* Formulário */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Simulador Fator R
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Preencha com seus dados e descubra se tem vantagem no Simples Nacional
        </p>

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
              className="w-full px-4 py-4 text-lg font-semibold text-gray-900 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-2">
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
              className="w-full px-4 py-4 text-lg font-semibold text-gray-900 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-2">
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

          {/* Instrução */}
          <p className="text-center text-sm text-gray-600">
            Teste com seus números reais abaixo
          </p>
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
          <button
            onClick={handleUnlock}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-lg transition-all"
          >
            Desbloquear Análise Completa
          </button>
          <p className="text-xs text-gray-600 text-center mt-3">
            Acesso imediato via Cakto • Relatório em PDF • Histórico de simulações
          </p>
        </div>
      )}

      {/* Modal de Captura de Lead */}
      {showLeadModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Desbloquear Acesso Completo
              </h3>
              <button
                onClick={() => setShowLeadModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              Preencha seus dados abaixo para acessar a análise completa via Cakto.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  value={leadData.nome}
                  onChange={(e) =>
                    setLeadData({ ...leadData, nome: e.target.value })
                  }
                  placeholder="Seu nome"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={leadData.email}
                  onChange={(e) =>
                    setLeadData({ ...leadData, email: e.target.value })
                  }
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  value={leadData.whatsapp}
                  onChange={(e) =>
                    setLeadData({ ...leadData, whatsapp: e.target.value })
                  }
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleSubmitLead}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Continuar para Pagamento
              </button>

              <p className="text-xs text-gray-500 text-center">
                Suas informações serão usadas apenas para liberar seu acesso.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
