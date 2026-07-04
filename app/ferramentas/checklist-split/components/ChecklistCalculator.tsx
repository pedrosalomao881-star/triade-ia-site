"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";

interface ChecklistItem {
  id: string;
  titulo: string;
  descricao: string;
  categoria: "sistema" | "fiscal" | "operacional" | "financeiro";
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "1",
    titulo: "Sistema de PDV/Nota Fiscal atualizado",
    descricao:
      "Seu sistema de ponto de venda integra com a NFC-e e emite corretamente?",
    categoria: "sistema",
  },
  {
    id: "2",
    titulo: "Retenção de impostos configurada",
    descricao:
      "Sistema pronto para reter ISS/ICMS automaticamente na transação?",
    categoria: "sistema",
  },
  {
    id: "3",
    titulo: "Comunicação com governo",
    descricao:
      "Integração com SEFAZ, e-financeira, EFD-Reinf testada e ativa?",
    categoria: "fiscal",
  },
  {
    id: "4",
    titulo: "Fluxo de caixa mapeado",
    descricao:
      "Você sabe exatamente como o Split Payment vai impactar seu caixa?",
    categoria: "financeiro",
  },
  {
    id: "5",
    titulo: "Fornecedores comunicados",
    descricao:
      "Seus fornecedores sabem que os prazos de recebimento vão mudar?",
    categoria: "operacional",
  },
  {
    id: "6",
    titulo: "Margens recalculadas",
    descricao:
      "Preços de venda ajustados para a nova realidade de capital de giro?",
    categoria: "operacional",
  },
  {
    id: "7",
    titulo: "Treinamento de equipe",
    descricao:
      "Seus operadores, fiscalistas e financeiro entendem o novo fluxo?",
    categoria: "operacional",
  },
  {
    id: "8",
    titulo: "Plano B definido",
    descricao: "Você tem alternativas se a retenção não acontecer a tempo?",
    categoria: "financeiro",
  },
];

const CATEGORIAS = [
  { id: "sistema", label: "Sistema", color: "blue" },
  { id: "fiscal", label: "Fiscal", color: "green" },
  { id: "operacional", label: "Operacional", color: "amber" },
  { id: "financeiro", label: "Financeiro", color: "red" },
];

export default function ChecklistCalculator() {
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [email, setEmail] = useState("");
  const [showResults, setShowResults] = useState(false);

  const toggleCheck = (id: string) => {
    const newChecked = new Set(checked);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setChecked(newChecked);
  };

  const percentage = Math.round((checked.size / CHECKLIST_ITEMS.length) * 100);

  const handleSubmit = () => {
    if (!email) {
      alert("Informe seu e-mail");
      return;
    }
    setShowResults(true);
  };

  const colorMap = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    green: "bg-green-50 border-green-200 text-green-900",
    amber: "bg-amber-50 border-amber-200 text-amber-900",
    red: "bg-red-50 border-red-200 text-red-900",
  };

  const bgColor = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    amber: "bg-amber-600",
    red: "bg-red-600",
  };

  if (showResults) {
    const status =
      percentage === 100
        ? "✅ Sua empresa ESTÁ pronta!"
        : percentage >= 75
        ? "🟡 Quase lá — 1 ou 2 ajustes"
        : percentage >= 50
        ? "🔴 Caminho a percorrer"
        : "❌ Muito a fazer";

    const recommendation =
      percentage === 100
        ? "Parabéns! Você tem tudo pronto para o Split Payment. Apenas monitore as atualizações legais e de software."
        : percentage >= 75
        ? "Você está quase pronto. Identifique os itens faltantes e resolva nas próximas semanas."
        : percentage >= 50
        ? "Você tem a metade do caminho. Priorize sistema e fiscal antes das operações."
        : "Comece por: 1) Sistema PDV, 2) Retenção de impostos, 3) Integração com governo.";

    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-green-600 mb-2">
              {percentage}%
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{status}</h2>
          </div>

          <div className="bg-white rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Sua recomendação:</h3>
            <p className="text-gray-700 mb-4">{recommendation}</p>

            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-gray-700">
                Próximos passos:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  ✓ Agendar reunião com seu fornecedor de PDV/NFC-e
                </li>
                <li>✓ Revisar integração com SEFAZ/e-financeira</li>
                <li>✓ Recalcular margens e fluxo de caixa</li>
                <li>✓ Comunicar equipe e fornecedores</li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => {
              setChecked(new Set());
              setEmail("");
              setShowResults(false);
            }}
            className="w-full text-blue-600 hover:text-blue-700 font-semibold py-3"
          >
            Refazer checklist
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Card Orientação */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <p className="font-semibold text-blue-900 mb-2">✅ Checklist Split Payment</p>
        <p className="text-sm text-blue-800">
          8 itens críticos para sua empresa estar pronta para o Split Payment em
          2026.
        </p>
      </div>

      {/* Progresso */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold text-gray-700">Progresso</p>
          <p className="text-sm font-bold text-green-600">
            {checked.size} de {CHECKLIST_ITEMS.length}
          </p>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-600 transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Checklist por categoria */}
      <div className="space-y-6 mb-8">
        {CATEGORIAS.map((cat) => {
          const items = CHECKLIST_ITEMS.filter((i) => i.categoria === cat.id);
          return (
            <div key={cat.id}>
              <h3 className="font-semibold text-gray-900 mb-3">{cat.label}</h3>
              <div className="space-y-3">
                {items.map((item) => {
                  const isChecked = checked.has(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        isChecked
                          ? `${
                              colorMap[
                                cat.color as keyof typeof colorMap
                              ]
                            } border-current`
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isChecked
                              ? bgColor[cat.color as keyof typeof bgColor] +
                                " border-current text-white"
                              : "border-gray-300"
                          }`}
                        >
                          {isChecked && <Check className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {item.titulo}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.descricao}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Email e Submit */}
      <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">
          Seu e-mail para receber o resultado
        </h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 mb-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
        >
          Ver meu resultado <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-xs text-gray-500 text-center mt-3">
          Não compartilhamos seu e-mail com ninguém
        </p>
      </div>
    </div>
  );
}
