import type { Metadata } from "next";
import { ArrowLeft, BookOpen, DollarSign, FileText, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compêndio Tributário — Tríade IA",
  description:
    "Guia completo dos regimes tributários brasileiros: Simples Nacional, Lucro Presumido, Lucro Real e a Reforma Tributária (EC 132/2023).",
};

export default function CompendioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 px-6 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/ferramentas"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar às Ferramentas
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Compêndio <br />
            <span className="text-purple-600">Tributário</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
            Guia completo dos regimes tributários brasileiros. De Simples Nacional
            a Lucro Real, passando pela Reforma Tributária (EC 132/2023) e Split
            Payment.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* SIMPLES NACIONAL */}
          <article>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Simples Nacional</h2>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">O que é?</h3>
              <p className="text-gray-700 mb-3">
                Um regime de tributação simplificada onde o empresário paga um
                único imposto (Documento de Arrecadação do Simples Nacional — DAS),
                que engloba IRPJ, CSLL, PIS, COFINS, ISS e ICMS.
              </p>
              <p className="text-gray-700">
                <strong>Elegibilidade:</strong> Microempresa (receita até R$ 360
                mil/ano) ou Empresa de Pequeno Porte (receita até R$ 4,8 milhões/ano)
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Anexos (por atividade)</h4>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <strong>Anexo I:</strong> Comércio (alíquota: 4% a 19%)
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Anexo II:</strong> Indústria (alíquota: 4,5% a 30%)
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Anexo III:</strong> Serviços com Fator R ≥ 28% (alíquota:
                    6% a 33%)
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Anexo V:</strong> Serviços com Fator R &lt; 28% ou
                    Profissionais Liberais (alíquota: 15,5% a 30,5%)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vantagens</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Guia única de arrecadação (DAS)</li>
                  <li>✓ Obrigações fiscais e contábeis simplificadas</li>
                  <li>✓ Alíquotas geralmente mais baixas</li>
                  <li>✓ Contribuição patronal reduzida ao INSS</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Desvantagens</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✗ Limitado a faturamento máximo de R$ 4,8M/ano</li>
                  <li>✗ Créditos limitados de PIS/COFINS</li>
                  <li>✗ Sem aproveitamento de créditos de ICMS/IPI</li>
                  <li>✗ Proibido para certas atividades</li>
                </ul>
              </div>
            </div>
          </article>

          <hr className="my-8" />

          {/* LUCRO PRESUMIDO */}
          <article>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Lucro Presumido</h2>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">O que é?</h3>
              <p className="text-gray-700 mb-3">
                Regime onde o Fisco presume seu lucro com base em uma percentagem
                da receita bruta. Você paga impostos (IRPJ, CSLL, PIS, COFINS) sobre
                esse lucro presumido, não sobre o lucro real.
              </p>
              <p className="text-gray-700">
                <strong>Elegibilidade:</strong> Faturamento até R$ 78 milhões/ano
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Presunções de Lucro</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Comércio:</strong> 8% da receita bruta
                  </p>
                  <p>
                    <strong>Indústria:</strong> 12% da receita bruta
                  </p>
                  <p>
                    <strong>Serviços:</strong> 32% da receita bruta
                  </p>
                  <p>
                    <strong>Transporte, Profissionais:</strong> 16% a 32% conforme
                    atividade
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impostos sobre o Lucro</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• IRPJ: 15% (+ 10% de adicional se lucro anual &gt; R$ 240k)</li>
                  <li>• CSLL: 9%</li>
                  <li>• PIS: 0,65%</li>
                  <li>• COFINS: 3%</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vantagens</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Sem necessidade de apuração de resultado real</li>
                  <li>✓ Maior simplicidade contábil que Lucro Real</li>
                  <li>✓ Créditos de PIS/COFINS (não-cumulativo)</li>
                  <li>✓ Sem necessidade de ECF (Escrituração Contábil Fiscal)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Desvantagens</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✗ Presunção pode ser maior que lucro real</li>
                  <li>✗ Sem créditos de ICMS/IPI</li>
                  <li>✗ Estimativa mensal de IR/CSLL obrigatória</li>
                </ul>
              </div>
            </div>
          </article>

          <hr className="my-8" />

          {/* LUCRO REAL */}
          <article>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Lucro Real</h2>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">O que é?</h3>
              <p className="text-gray-700 mb-3">
                Regime onde você paga impostos sobre o lucro efetivamente apurado.
                Demanda contabilidade rigorosa, apuração de resultado e cálculo de
                créditos de impostos.
              </p>
              <p className="text-gray-700">
                <strong>Elegibilidade:</strong> Obrigatório para faturamento acima
                de R$ 78 milhões/ano; optativo para empresas menores com atividades
                específicas
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Impostos sobre o Lucro</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• IRPJ: 15% (+ 10% de adicional)</li>
                  <li>• CSLL: 9%</li>
                  <li>• PIS: 1,65% (não-cumulativo com créditos)</li>
                  <li>• COFINS: 7,6% (não-cumulativo com créditos)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Apuração do Lucro</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Lucro Real = Receitas - Despesas</strong>
                </p>
                <p className="text-sm text-gray-700">
                  Exige Demonstração do Resultado do Exercício (DRE) e apuração de
                  LALUR (Livro de Apuração do Lucro Real).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vantagens</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ Você paga sobre lucro real, não presumido</li>
                  <li>✓ Créditos completos de PIS/COFINS</li>
                  <li>✓ Aproveitamento de créditos de ICMS/IPI</li>
                  <li>✓ Pode gerar prejuízos a compensar</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Desvantagens</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✗ Contabilidade complexa e rigorosa</li>
                  <li>✗ Obrigações acessórias numeroasa (ECF, LALUR, etc)</li>
                  <li>✗ Apuração mais trabalhosa</li>
                  <li>✗ Maior risco fiscal</li>
                </ul>
              </div>
            </div>
          </article>

          <hr className="my-8" />

          {/* EC 132/2023 */}
          <article>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">EC 132/2023 — Reforma Tributária</h2>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">O que muda?</h3>
              <p className="text-gray-700">
                A Emenda Constitucional 132/2023 substitui progressivamente PIS/COFINS
                e ICMS/ISS por dois novos impostos:
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">CBS — Contribuição sobre Bens e Serviços</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <strong>Cronograma:</strong>
                  </p>
                  <p>• 2026-2027: CBS teste (taxa reduzida)</p>
                  <p>• 2028: CBS plena (alíquota projetada ~12,5%)</p>
                  <p>
                    <strong>Substitui:</strong> PIS e COFINS (federal)
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">IBS — Imposto sobre Bens e Serviços</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <strong>Cronograma:</strong>
                  </p>
                  <p>• 2028-2033: Transição gradual</p>
                  <p>• 2033+: Alíquota plena (~7-8%)</p>
                  <p>
                    <strong>Substitui:</strong> ICMS e ISS
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Split Payment 2026</h4>
                <p className="text-sm text-gray-700 mb-2">
                  A retenção de ISS passa de responsabilidade do contribuinte para
                  o pagador:
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>
                    • O cliente retém o ISS na transação (não o prestador paga depois)
                  </li>
                  <li>
                    • Impacto imediato no fluxo de caixa de prestadores de serviço
                  </li>
                  <li>
                    • Antecipação de retenção = menos capital de giro disponível
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <hr className="my-8" />

          {/* COMPARATIVO */}
          <article>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparativo Rápido</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      Critério
                    </th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      Simples Nacional
                    </th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      Lucro Presumido
                    </th>
                    <th className="border border-gray-300 p-3 text-left font-semibold">
                      Lucro Real
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold text-gray-700">
                      Faturamento máximo
                    </td>
                    <td className="border border-gray-300 p-3">R$ 4,8M</td>
                    <td className="border border-gray-300 p-3">R$ 78M</td>
                    <td className="border border-gray-300 p-3">Sem limite</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold text-gray-700">
                      Alíquota aprox.
                    </td>
                    <td className="border border-gray-300 p-3">4% a 33%</td>
                    <td className="border border-gray-300 p-3">15,5% a 27,5%</td>
                    <td className="border border-gray-300 p-3">Varia com lucro</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold text-gray-700">
                      Guia única?
                    </td>
                    <td className="border border-gray-300 p-3">✓ Sim (DAS)</td>
                    <td className="border border-gray-300 p-3">✗ Não (GPS)</td>
                    <td className="border border-gray-300 p-3">✗ Não (GPS)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-3 font-semibold text-gray-700">
                      ECF obrigatória?
                    </td>
                    <td className="border border-gray-300 p-3">✗ Não</td>
                    <td className="border border-gray-300 p-3">✗ Não</td>
                    <td className="border border-gray-300 p-3">✓ Sim</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold text-gray-700">
                      Crédito PIS/COFINS
                    </td>
                    <td className="border border-gray-300 p-3">Limitado</td>
                    <td className="border border-gray-300 p-3">Não-cumulativo</td>
                    <td className="border border-gray-300 p-3">Não-cumulativo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Qual regime é o melhor para sua empresa?
          </h2>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
            Depende do faturamento, atividade, lucro e estrutura contábil.
          </p>
          <Link
            href="/ferramentas/regime-certo"
            className="inline-flex items-center gap-2 bg-purple-600 text-white font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Usar o Regime Certo ➜
          </Link>
        </div>
      </section>
    </>
  );
}
