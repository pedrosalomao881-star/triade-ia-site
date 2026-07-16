import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

export const metadata: Metadata = {
  title: "CBS vs IBS: Entenda a Reforma Tributária 2026 | TRÍADE IA",
  description:
    "O que é CBS (Contribuição sobre Bens e Serviços) e IBS (Imposto sobre Bens e Serviços)? Guia completo sobre a maior reforma tributária desde 1988.",
  keywords:
    "CBS, IBS, reforma tributária 2026, PIS COFINS, ICMS ISS, impostos 2026, alíquota CBS, alíquota IBS",
  openGraph: {
    title: "CBS vs IBS: Entenda a Reforma Tributária 2026",
    description:
      "O que muda no seu imposto em 2026? Guia completo sobre CBS e IBS.",
    type: "article",
    url: "https://triadeiaos.com/blog/reforma-tributaria/cbs-vs-ibs-2026",
    authors: ["TRÍADE IA"],
  },
};

export default function CBSvsIBSArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "CBS vs IBS: Entenda a Reforma Tributária 2026",
    description:
      "O que é CBS e IBS? Guia completo sobre a maior reforma tributária desde 1988.",
    image: "https://triadeiaos.com/images/blog/cbs-vs-ibs.png",
    datePublished: "2026-07-14",
    dateModified: "2026-07-14",
    author: {
      "@type": "Organization",
      name: "TRÍADE IA",
      url: "https://triadeiaos.com",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-navy py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <ArticleLayout
            slug="cbs-vs-ibs-2026"
            titulo="CBS vs IBS: Entenda a Reforma"
            descricao="O Que Muda No Seu Imposto em 2026"
            autor="TRÍADE IA"
            data="2026-07-14"
            tempoLeitura="10 min"
            categoria="Reforma Tributária"
            categoriaLink="/blog/reforma-tributaria"
            imagemUrl="/images/blog/cbs-vs-ibs.png"
          >
            {/* Introdução */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Uma Reforma Completa</h2>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Há 38 anos o Brasil usa o mesmo sistema tributário. PIS, COFINS, ICMS, ISS. Nomes que você
                conhece bem. Regras que você aprendeu a contornar.
              </p>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Tudo isso vai embora. Em 2026-2027, entram dois novos impostos que consolidam tudo em um
                único modelo: <strong className="text-brand">CBS</strong> e{" "}
                <strong className="text-brand">IBS</strong>.
              </p>
              <p className="text-ice/70 leading-relaxed">
                Esse artigo explica o que são, como funcionam e o que você precisa fazer agora.
              </p>
            </section>

            {/* O sistema antigo */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">O Sistema Antigo (Que Vai Acabar)</h2>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-ice mb-4">Impostos Federais Atuais</h3>
                <div className="space-y-4">
                  {[
                    {
                      nome: "PIS",
                      completo: "Programa de Integração Social",
                      aliquota: "1,65%",
                      sobre: "Receita bruta (não-cumulativo)",
                      descricao:
                        "Tributo federal sobre receita. Você paga com base nas vendas, mas pode descontar das compras.",
                    },
                    {
                      nome: "COFINS",
                      completo: "Contribuição para Financiamento da Seguridade Social",
                      aliquota: "7,65%",
                      sobre: "Receita bruta (não-cumulativo)",
                      descricao:
                        "Maior tributo federal. Financia seguridade social. Também tem regime não-cumulativo.",
                    },
                    {
                      nome: "IPI",
                      completo: "Imposto sobre Produtos Industrializados",
                      aliquota: "Varia (0-30%)",
                      sobre: "Produtos industrializados",
                      descricao:
                        "Tributo sobre industrialização. Afeta principalmente indústria. Será consolidado no CBS.",
                    },
                  ]
                    .map((tributo) => (
                      <div key={tributo.nome} className="border-b border-white/[0.08] pb-4 last:border-b-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h4 className="font-bold text-ice">{tributo.nome}</h4>
                            <p className="text-sm text-ice/50">{tributo.completo}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-brand font-bold">{tributo.aliquota}</p>
                            <p className="text-xs text-ice/50">{tributo.sobre}</p>
                          </div>
                        </div>
                        <p className="text-sm text-ice/60">{tributo.descricao}</p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-lg font-bold text-ice mb-4">Impostos Estaduais/Municipais Atuais</h3>
                <div className="space-y-4">
                  {[
                    {
                      nome: "ICMS",
                      completo: "Imposto sobre Circulação de Mercadorias e Serviços",
                      aliquota: "Varia por estado (7-18%)",
                      sobre: "Vendas/Circulação",
                      descricao:
                        "O vilão fiscal. Cada estado tem uma alíquota diferente. Isso causa caos tributário e guerra fiscal entre estados.",
                    },
                    {
                      nome: "ISS",
                      completo: "Imposto sobre Serviços",
                      aliquota: "2-5%",
                      sobre: "Serviços",
                      descricao:
                        "Tributo municipal sobre prestação de serviços. Fragmentado (cada município decide a alíquota).",
                    },
                  ]
                    .map((tributo) => (
                      <div key={tributo.nome} className="border-b border-white/[0.08] pb-4 last:border-b-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h4 className="font-bold text-ice">{tributo.nome}</h4>
                            <p className="text-sm text-ice/50">{tributo.completo}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-brand font-bold">{tributo.aliquota}</p>
                            <p className="text-xs text-ice/50">{tributo.sobre}</p>
                          </div>
                        </div>
                        <p className="text-sm text-ice/60">{tributo.descricao}</p>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            {/* O novo sistema */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">O Sistema Novo (CBS + IBS)</h2>

              <div className="bg-brand/10 border border-brand/30 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-ice mb-4">🎯 Objetivo da Reforma</h3>
                <ul className="space-y-2 text-ice/70 text-sm">
                  <li>
                    ✓ <strong>Simplificar:</strong> De 5+ impostos para 2 principais (CBS + IBS)
                  </li>
                  <li>
                    ✓ <strong>Uniformizar:</strong> Mesma alíquota em todo o país (fim da guerra fiscal)
                  </li>
                  <li>
                    ✓ <strong>Modernizar:</strong> Sistema digital, sem papel, sem burocracia
                  </li>
                  <li>
                    ✓ <strong>Eficiência:</strong> Menos recolhimentos, menos burocracia, menos erro
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                {[
                  {
                    titulo: "CBS — Contribuição sobre Bens e Serviços",
                    subtitulo: "Imposto Federal (substitui PIS + COFINS + IPI)",
                    aliquota: "~8,8%",
                    sobre: "Receita bruta",
                    detalhe:
                      "Único imposto federal sobre produção e serviços. Não-cumulativo (como PIS/COFINS hoje). Afeta todas as empresas.",
                    exemplo: "Empresa fatura R$ 1M em vendas. Paga ~R$ 88K em CBS.",
                  },
                  {
                    titulo: "IBS — Imposto sobre Bens e Serviços",
                    subtitulo: "Imposto Estadual/Municipal (substitui ICMS + ISS)",
                    aliquota: "~14-16% (estimativa)",
                    sobre: "Vendas/Serviços",
                    detalhe:
                      "Único imposto subnacional. Alíquota uniforme em todo o país (fim da diferença entre estados). Gestão unificada de receita entre estados e municípios.",
                    exemplo:
                      "Mesma empresa vende R$ 1M. Paga ~R$ 150K em IBS (antigo ICMS/ISS era ~R$ 200K+).",
                  },
                ]
                  .map((imposto, idx) => (
                    <div key={idx} className="border border-white/[0.08] rounded-lg p-8">
                      <div className="mb-4">
                        <h4 className="text-xl font-bold text-ice">{imposto.titulo}</h4>
                        <p className="text-sm text-ice/60">{imposto.subtitulo}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                        <div>
                          <p className="text-xs text-ice/50 mb-1">Alíquota</p>
                          <p className="text-lg font-bold text-brand">{imposto.aliquota}</p>
                        </div>
                        <div>
                          <p className="text-xs text-ice/50 mb-1">Sobre</p>
                          <p className="text-sm text-ice">{imposto.sobre}</p>
                        </div>
                        <div>
                          <p className="text-xs text-ice/50 mb-1">Tipo</p>
                          <p className="text-sm text-ice">
                            {idx === 0 ? "Não-cumulativo" : "Origem/Destino"}
                          </p>
                        </div>
                      </div>

                      <p className="text-ice/70 mb-4">{imposto.detalhe}</p>

                      <div className="bg-white/[0.02] rounded p-4">
                        <p className="text-xs text-ice/50 mb-2">EXEMPLO PRÁTICO:</p>
                        <p className="text-sm text-ice/70">{imposto.exemplo}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* Comparação lado a lado */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Comparação: Antes vs Depois</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="text-left py-3 px-4 text-ice">Aspecto</th>
                      <th className="text-left py-3 px-4 text-ice">Hoje (2025)</th>
                      <th className="text-left py-3 px-4 text-ice">Amanhã (2027+)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        aspecto: "Impostos Federais",
                        hoje: "PIS + COFINS + IPI (3 tributos)",
                        amanha: "CBS (1 tributo)",
                      },
                      {
                        aspecto: "Impostos Estaduais/Municipais",
                        hoje: "ICMS + ISS (varia por estado)",
                        amanha: "IBS (uniforme)",
                      },
                      {
                        aspecto: "Alíquota Federal Aprox.",
                        hoje: "~9,3% (PIS + COFINS)",
                        amanha: "~8,8% (CBS)",
                      },
                      {
                        aspecto: "Alíquota Estadual/Municipal",
                        hoje: "~10-25% (ICMS varia)",
                        amanha: "~14-16% (IBS uniforme)",
                      },
                      {
                        aspecto: "Simplicidade",
                        hoje: "Muito complexo (muitas regras)",
                        amanha: "Simplificado (regras únicas)",
                      },
                      {
                        aspecto: "Guerra Fiscal",
                        hoje: "Sim (estados competem)",
                        amanha: "Não (uniforme)",
                      },
                    ]
                      .map((row, idx) => (
                        <tr
                          key={idx}
                          className={idx % 2 === 0 ? "bg-white/[0.01]" : ""}
                        >
                          <td className="py-3 px-4 text-ice font-semibold">{row.aspecto}</td>
                          <td className="py-3 px-4 text-ice/60">{row.hoje}</td>
                          <td className="py-3 px-4 text-brand">{row.amanha}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Impacto por setor */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Como Afeta Cada Setor?</h2>

              <div className="space-y-4">
                {[
                  {
                    setor: "Indústria",
                    hoje: "PIS + COFINS + IPI",
                    amanha: "CBS (potencialmente menor com fim do IPI)",
                    impacto: "🟢 Positivo",
                  },
                  {
                    setor: "Comércio",
                    hoje: "PIS + COFINS + ICMS",
                    amanha: "CBS + IBS (uniforme)",
                    impacto: "🟡 Neutro/Positivo",
                  },
                  {
                    setor: "Serviços",
                    hoje: "PIS + COFINS + ISS (varia por município)",
                    amanha: "CBS + IBS (uniforme)",
                    impacto: "🟢 Positivo",
                  },
                  {
                    setor: "Agronegócio",
                    hoje: "PIS + COFINS + ICMS (alíquota reduzida)",
                    amanha: "CBS + IBS (com alíquota diferenciada)",
                    impacto: "🟡 A definir",
                  },
                ]
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="border border-white/[0.08] rounded-lg p-6 flex items-start gap-4"
                    >
                      <div className="flex-1">
                        <h4 className="font-bold text-ice mb-2">{item.setor}</h4>
                        <p className="text-xs text-ice/50 mb-2">
                          <strong>Hoje:</strong> {item.hoje}
                        </p>
                        <p className="text-xs text-ice/50">
                          <strong>2027+:</strong> {item.amanha}
                        </p>
                      </div>
                      <div className="text-2xl min-w-fit">{item.impacto}</div>
                    </div>
                  ))}
              </div>
            </section>

            {/* O que fazer agora */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">O Que Você Precisa Fazer Agora?</h2>

              <div className="space-y-4">
                {[
                  {
                    acao: "Entender a mudança",
                    como: "Leia este artigo. Entenda o que é CBS e IBS. Saiba que alíquota vai mudar.",
                  },
                  {
                    acao: "Homologar créditos PIS/COFINS antigos",
                    como: "Tem crédito acumulado? Homologa agora (até jan/2027). Depois vira histórico.",
                  },
                  {
                    acao: "Revisar fluxo de caixa",
                    como: "Projete como CBS + IBS vão afetar seus custos. Alíquotas podem mudar (para cima ou para baixo).",
                  },
                  {
                    acao: "Atualizar sistemas contábeis",
                    como: "Seu software de fiscal pode precisar atualização. Verifique com seu fornecedor.",
                  },
                  {
                    acao: "Treinar equipe",
                    como: "Fiscal, contabilidade, vendas — todos precisam entender as novas regras.",
                  },
                ]
                  .map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 pb-4 border-b border-white/[0.08] last:border-b-0"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-navy font-bold flex-shrink-0 text-sm">
                        {idx + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-ice mb-1">{item.acao}</h4>
                        <p className="text-sm text-ice/60">{item.como}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="bg-brand/10 border border-brand/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-ice mb-4">Quer Entender Melhor o Impacto?</h3>
                <p className="text-ice/70 mb-6 leading-relaxed">
                  Solicite uma análise personalizada de como CBS + IBS vão afetar sua empresa.
                </p>
                <a
                  href="https://wa.me/5564992966118?text=Quero%20entender%20como%20CBS%20e%20IBS%20vão%20afetar%20minha%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
                >
                  Solicitar Análise Personalizada →
                </a>
              </div>
            </section>
          </ArticleLayout>
        </div>
      </main>
    </>
  );
}
