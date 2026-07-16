import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Saldo Credor PIS/COFINS: Recuperar R$ 500K Dormindo | TRÍADE IA",
  description:
    "Sua empresa tem crédito PIS/COFINS dormindo? Guia prático: 8 validações, M100 vs M500, timeline de homologação e como recuperar em 3 meses com CreditOS.",
  keywords:
    "saldo credor COFINS, crédito PIS dormindo, homologação crédito, parecer técnico, recuperação crédito tributário, M100, M500",
  openGraph: {
    title: "Saldo Credor PIS/COFINS: Como Recuperar R$ 500K Que Sua Empresa Deixa Para Trás",
    description:
      "Guia completo sobre créditos PIS/COFINS, validações tributárias e como recuperar em 3 meses",
    type: "article",
    url: "https://triadeiaos.com/blog/reforma-tributaria/saldo-credor-pis-cofins",
    authors: ["TRÍADE IA"],
  },
};

export default function SaldoCredorArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Saldo Credor PIS/COFINS: Como Recuperar R$ 500K Que Sua Empresa Deixa Para Trás",
    description:
      "Guia completo sobre créditos PIS/COFINS, validações tributárias e como recuperar em 3 meses",
    image: "https://triadeiaos.com/images/blog/saldo-credor-pis-cofins.jpg",
    datePublished: "2026-07-10",
    dateModified: "2026-07-10",
    author: {
      "@type": "Organization",
      name: "TRÍADE IA",
      url: "https://triadeiaos.com",
    },
    publisher: {
      "@type": "Organization",
      name: "TRÍADE IA",
      logo: {
        "@type": "ImageObject",
        url: "https://triadeiaos.com/logo.png",
      },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-navy py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ArticleLayout
            slug="saldo-credor-pis-cofins"
            titulo="Saldo Credor PIS/COFINS"
            descricao="Como Recuperar R$ 500K Que Sua Empresa Deixa Para Trás"
            autor="TRÍADE IA"
            data="2026-07-10"
            tempoLeitura="12 min"
            categoria="Reforma Tributária"
            categoriaLink="/blog/reforma-tributaria"
            imagemUrl="/images/blog/saldo-credor-pis-cofins.png"
          >
            {/* Introdução */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">O Crédito Dormindo na Sua Empresa</h2>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Sua empresa provavelmente tem dinheiro dormindo. Muito dinheiro. Pode ser R$ 100 mil,
                R$ 500 mil, ou até mais. Está na Receita Federal, em forma de crédito PIS/COFINS não
                homologado.
              </p>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Esse crédito é resultado de uma simples equação: sua empresa compra insumos, paga
                PIS/COFINS sobre eles, mas depois vende produtos ou serviços em um regime não-cumulativo.
                Isso cria um saldo credor — literalmente dinheiro que o governo deve para você.
              </p>
              <p className="text-ice/70 leading-relaxed">
                <strong className="text-ice">O problema?</strong> A maioria das empresas não sabe que
                tem. E até janeiro/2027, você precisa agir.
              </p>
            </section>

            {/* Por que é urgente */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Por Que É Urgente (Janeiro/2027)</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                A reforma tributária muda as regras do jogo. Quando o novo sistema (IBS/CBS) entrar em
                vigor no final de 2026/início de 2027, os créditos PIS/COFINS antigos perdem validade.
              </p>

              <div className="bg-brand/10 border border-brand/30 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-brand mb-4">📅 Timeline Crítica</h3>
                <ul className="space-y-3 text-ice/70">
                  <li>
                    <strong className="text-ice">Até Jan/2027:</strong> Você pode homologar seu crédito
                    junto à Receita
                  </li>
                  <li>
                    <strong className="text-ice">Jan/2027+:</strong> Novo sistema IBS/CBS ativa, créditos
                    antigos viram histórico
                  </li>
                  <li>
                    <strong className="text-ice">Depois de Jan/2027:</strong> Você perde o direito.
                    Definitivamente.
                  </li>
                </ul>
              </div>

              <p className="text-ice/70 leading-relaxed">
                Isso não é uma sugestão. É uma lei (LC 214/2025). E se você não agir até janeiro/2027,
                esse dinheiro vira água.
              </p>
            </section>

            {/* Como funciona */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Como Funciona o Saldo Credor?</h2>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-8 mb-6">
                <h3 className="text-lg font-bold text-ice mb-4">A Equação Simples</h3>
                <div className="space-y-4 text-ice/70">
                  <div className="flex items-start gap-4">
                    <span className="text-brand font-bold min-w-fit">1️⃣ Compras:</span>
                    <p>Sua empresa compra insumos, matéria-prima, produtos para revender.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-brand font-bold min-w-fit">2️⃣ Imposto:</span>
                    <p>Você paga PIS + COFINS sobre essas compras (não-cumulativo).</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-brand font-bold min-w-fit">3️⃣ Vendas:</span>
                    <p>Você vende, mas em regime não-cumulativo (nem todo cliente paga imposto).</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-brand font-bold min-w-fit">4️⃣ Resultado:</span>
                    <p className="text-brand font-semibold">Saldo credor: governo deve para você.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-ice mb-4">Quem Pode Recuperar?</h3>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Nem toda empresa tem direito. Você pode homologar um crédito PIS/COFINS se:
              </p>
              <ul className="space-y-2 text-ice/70 mb-6">
                <li>✅ Sua empresa está em Lucro Real (não Presumido)</li>
                <li>✅ Você trabalha com compras e vendas (ou insumos de produção)</li>
                <li>✅ Regime não-cumulativo (aplicável em indústria, comércio, distribuição)</li>
                <li>✅ Sem débitos ativos com a Receita Federal</li>
              </ul>

              <p className="text-ice/70 leading-relaxed">
                <strong className="text-ice">Quem NÃO pode:</strong> Empresas em Lucro Presumido, MEI,
                prestadores de serviços puros (consultoria, contabilidade), ou com débitos em aberto.
              </p>
            </section>

            {/* Processo */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">O Processo de Homologação (3 Passos)</h2>

              <div className="space-y-6">
                {[
                  {
                    numero: 1,
                    titulo: "Validação do Crédito",
                    descricao:
                      "Primeiro, você precisa saber QUANTO seu empresa tem direito. Isso exige análise dos últimos 5 anos de DRE, ECF e apurações de PIS/COFINS.",
                    duracao: "5-10 dias",
                  },
                  {
                    numero: 2,
                    titulo: "Parecer Técnico",
                    descricao:
                      "Com o valor confirmado, você encaminha um parecer técnico à Receita Federal. Esse parecer detalha por que seu crédito é válido (legislação, jurisprudência).",
                    duracao: "10-15 dias",
                  },
                  {
                    numero: 3,
                    titulo: "Homologação + Liberação",
                    descricao:
                      "A Receita analisa (pode levar 30-90 dias). Se aprovado, seu crédito é liberado. Você pode usar para pagar outros impostos ou solicitar restituição.",
                    duracao: "30-90 dias",
                  },
                ]
                  .map((step) => (
                    <div key={step.numero} className="border border-white/[0.08] rounded-lg p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-navy font-bold text-sm">
                          {step.numero}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-ice">{step.titulo}</h4>
                          <p className="text-sm text-ice/50">~{step.duracao}</p>
                        </div>
                      </div>
                      <p className="text-ice/70 leading-relaxed">{step.descricao}</p>
                    </div>
                  ))}
              </div>
            </section>

            {/* M100 vs M500 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">M100 vs M500: Qual Usar?</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                Existem dois formulários para homologar: o M100 (créditos acumulados) e o M500 (regime
                não-cumulativo). A escolha depende do seu negócio.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    titulo: "📋 M100",
                    quando: "Créditos Acumulados",
                    descricao: "Para créditos que se acumularam ao longo dos anos (sem utilização)",
                    exemplo: "Empresa que compra muito, mas não consegue usar o crédito todo",
                    aliquota: "Até 100% do crédito",
                  },
                  {
                    titulo: "📊 M500",
                    quando: "Regime Não-Cumulativo",
                    descricao: "Para operações do seu dia-a-dia no regime não-cumulativo",
                    exemplo:
                      "Empresa que vende com ICMS reduzido ou para órgãos públicos (isentos)",
                    aliquota: "Até 100% do crédito",
                  },
                ]
                  .map((modelo) => (
                    <div key={modelo.titulo} className="border border-white/[0.08] rounded-lg p-6">
                      <h4 className="text-lg font-bold text-ice mb-2">{modelo.titulo}</h4>
                      <p className="text-sm text-brand font-semibold mb-3">{modelo.quando}</p>
                      <p className="text-ice/70 text-sm mb-4">{modelo.descricao}</p>
                      <p className="text-ice/60 text-xs mb-3">
                        <strong>Exemplo:</strong> {modelo.exemplo}
                      </p>
                      <p className="text-xs text-ice/50">Limite: {modelo.aliquota}</p>
                    </div>
                  ))}
              </div>
            </section>

            {/* Quanto recuperar */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Quanto Sua Empresa Pode Recuperar?</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                Isso depende de 4 fatores: seu volume de compras, regime de apuração, período analisado
                e legislação aplicável.
              </p>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-lg font-bold text-ice mb-4">Estimativa Rápida</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left py-3 px-4 text-ice">Tipo de Empresa</th>
                      <th className="text-left py-3 px-4 text-ice">Faturamento Anual</th>
                      <th className="text-left py-3 px-4 text-ice">Saldo Credor Médio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tipo: "Indústria", faturamento: "R$ 5-10M", credito: "R$ 100k-500k" },
                      { tipo: "Distribuição", faturamento: "R$ 3-8M", credito: "R$ 75k-300k" },
                      { tipo: "Comércio", faturamento: "R$ 2-5M", credito: "R$ 50k-200k" },
                      { tipo: "Agronegócio", faturamento: "R$ 1-10M", credito: "R$ 50k-500k+" },
                    ]
                      .map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white/[0.01]" : ""}
                        >
                          <td className="py-3 px-4 text-ice/70">{row.tipo}</td>
                          <td className="py-3 px-4 text-ice/70">{row.faturamento}</td>
                          <td className="py-3 px-4 text-ice">{row.credito}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-brand/10 border border-brand/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-ice mb-4">
                  Descubra Quanto Sua Empresa Pode Recuperar
                </h3>
                <p className="text-ice/70 mb-6 leading-relaxed">
                  Acesse o CreditOS e faça uma validação gratuita em 5 minutos. Você vai saber o valor
                  exato e ter um mapa para recuperar seu crédito.
                </p>
                <Link
                  href="/creditOS"
                  className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
                >
                  Acessar CreditOS →
                </Link>
              </div>
            </section>

            {/* Checklist */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Checklist: Você Está Pronto?</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                Antes de homologar, verifique se você tem tudo pronto:
              </p>

              <ul className="space-y-3">
                {[
                  "Seus últimos 5 anos de DRE (Demonstração de Resultado do Exercício)",
                  "ECF (Escrituração Contábil Fiscal) dos últimos 5 anos",
                  "Apurações mensais/trimestrais de PIS/COFINS",
                  "Comprovantes de operações que geraram o crédito",
                  "Declarações de faturamento e custos",
                  "Dados bancários (para receber a restituição, se aprovado)",
                ]
                  .map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-ice/70"
                    >
                      <span className="text-brand font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold text-ice mb-6">Perguntas Frequentes</h2>

              <div className="space-y-4">
                {[
                  {
                    pergunta: "Quanto custa para homologar um crédito?",
                    resposta:
                      "A homologação é gratuita. Você pode fazer sozinho ou com ajuda de um contador/consultoria. Existem também plataformas (como CreditOS) que validam e guiam o processo.",
                  },
                  {
                    pergunta: "E se a Receita negar meu crédito?",
                    resposta:
                      "Você pode contestar via recurso administrativo. Mas isso é raro se o parecer técnico for bem feito. Na maioria dos casos, créditos válidos são aprovados.",
                  },
                  {
                    pergunta: "Quanto tempo leva para receber?",
                    resposta:
                      "Contando validação, parecer e análise da Receita: entre 2-4 meses. Alguns casos mais complexos podem levar até 6-12 meses.",
                  },
                  {
                    pergunta: "E se perder o prazo de janeiro/2027?",
                    resposta:
                      "Você perde o direito permanentemente. Não há prorrogação ou segunda chance. Por isso é urgente agir agora.",
                  },
                ]
                  .map((faq, idx) => (
                    <details
                      key={idx}
                      className="group border border-white/[0.08] rounded-lg overflow-hidden"
                    >
                      <summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                        <h4 className="font-semibold text-ice">{faq.pergunta}</h4>
                        <span className="text-brand group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-6 text-ice/70 leading-relaxed border-t border-white/[0.08]">
                        {faq.resposta}
                      </div>
                    </details>
                  ))}
              </div>
            </section>
          </ArticleLayout>
        </div>
      </main>
    </>
  );
}
