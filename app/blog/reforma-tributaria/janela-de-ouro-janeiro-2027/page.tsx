import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Janela de Ouro: Seu Deadline Final (Janeiro/2027) | TRÍADE IA",
  description:
    "Por que janeiro/2027 é o deadline final para homologar crédito tributário. Entenda as regras, a reforma e por que é urgente agir agora.",
  keywords:
    "deadline janeiro 2027, homologação crédito tributário, reforma tributária, LC 214/2025, prazo homologação",
  openGraph: {
    title: "Janela de Ouro: Seu Deadline Final (Janeiro/2027)",
    description: "Por que janeiro/2027 é o deadline final para homologar crédito tributário.",
    type: "article",
    url: "https://triadeiaos.com/blog/reforma-tributaria/janela-de-ouro-janeiro-2027",
    authors: ["TRÍADE IA"],
  },
};

export default function JanelaDeOuroArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Janela de Ouro: Seu Deadline Final (Janeiro/2027)",
    description:
      "Por que janeiro/2027 é o deadline final para homologar crédito tributário. Entenda as regras e por que é urgente agir agora.",
    image: "https://triadeiaos.com/images/blog/janela-de-ouro.png",
    datePublished: "2026-07-12",
    dateModified: "2026-07-12",
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
            slug="janela-de-ouro-janeiro-2027"
            titulo="A Janela de Ouro: Seu Deadline Final"
            descricao="Por Que Janeiro/2027 Muda Tudo"
            autor="TRÍADE IA"
            data="2026-07-12"
            tempoLeitura="8 min"
            categoria="Reforma Tributária"
            categoriaLink="/blog/reforma-tributaria"
            imagemUrl="/images/blog/janela-de-ouro.png"
          >
            {/* Introdução */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">A Hora da Verdade</h2>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Existe um deadline que você não pode perder. Não é uma recomendação. Não é um conselho.
                É uma lei.
              </p>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Até <strong className="text-brand">janeiro/2027</strong>, sua empresa pode homologar
                créditos tributários junto à Receita Federal. Depois dessa data, você perde o direito.
                Definitivamente.
              </p>
              <p className="text-ice/70 leading-relaxed">
                Isso não é teórico. Significa dinheiro real — potencialmente R$ 100 mil, R$ 500 mil ou
                mais — que sua empresa pode recuperar. Mas apenas se agir agora.
              </p>
            </section>

            {/* Por que existe esse prazo */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Por Que Existe Esse Prazo?</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                O Brasil está mudando seu sistema tributário. Pela primeira vez desde 1988, os impostos
                federais, estaduais e municipais estão sendo reescritos. Isso inclui o fim dos tributos
                antigos (PIS, COFINS, ICMS, ISS) e a introdução de novos (CBS, IBS).
              </p>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-ice mb-4">A Transição Tributária</h3>
                <div className="space-y-4 text-ice/70 text-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-brand font-bold min-w-fit">2026:</span>
                    <p>Dois sistemas rodando ao mesmo tempo (antigo + novo)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-brand font-bold min-w-fit">Jan/2027:</span>
                    <p>
                      <strong className="text-ice">PONTO DE CORTE.</strong> O novo sistema (CBS/IBS)
                      ativa. Créditos antigos viram "histórico".
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-brand font-bold min-w-fit">2027+:</span>
                    <p>Apenas o novo sistema funciona. Créditos antigos perderam validade.</p>
                  </div>
                </div>
              </div>

              <p className="text-ice/70 leading-relaxed">
                É como trocar de moeda: você tem uma nota de R$ 100 que vai deixar de ser aceita em
                janeiro/2027. Se você não trocar ou usar antes dessa data, vira papel.
              </p>
            </section>

            {/* Lei LC 214/2025 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">LC 214/2025: A Lei Que Define o Prazo</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                A Lei Complementar 214/2025 é clara: qualquer crédito de PIS/COFINS acumulado precisa
                ser homologado até janeiro/2027. Essa não é uma sugestão do governo. É uma exigência.
              </p>

              <div className="bg-brand/10 border border-brand/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-ice mb-4">📋 O que diz a LC 214/2025</h3>
                <ul className="space-y-3 text-ice/70 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold mt-1">•</span>
                    <span>
                      Créditos PIS/COFINS não homologados até janeiro/2027 perdem validade no novo
                      sistema
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold mt-1">•</span>
                    <span>Não há prorrogação. Não há exceção. Não há "segunda chance".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold mt-1">•</span>
                    <span>
                      Empresas em Lucro Real (não-cumulativo) são as afetadas: indústria, comércio,
                      distribuição, agronegócio
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand font-bold mt-1">•</span>
                    <span>
                      Governo não vai "avisar" você. É sua responsabilidade descobrir se tem direito e
                      agir.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* A urgência é real */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Por Que a Urgência é Real?</h2>

              <div className="space-y-6">
                {[
                  {
                    numero: 1,
                    titulo: "Tempo de Processamento",
                    descricao:
                      "Homologar um crédito não é instantâneo. Validação, parecer técnico, análise da Receita — tudo junto leva 2-4 meses. Se você deixa para dezembro/2026, pode não dar tempo.",
                  },
                  {
                    numero: 2,
                    titulo: "Fila da Receita",
                    descricao:
                      "Conforme o prazo se aproxima, mais empresas vão tentar homologar. A Receita fica sobrecarregada. Análises demoram ainda mais.",
                  },
                  {
                    numero: 3,
                    titulo: "Dinheiro Está Aí",
                    descricao:
                      "Seu crédito já existe. Está na Receita, registrado, documentado. Você não precisa 'ganhar' nada — apenas 'recuperar' o que é seu.",
                  },
                  {
                    numero: 4,
                    titulo: "Depois Você Perde",
                    descricao:
                      "Se não agir até janeiro/2027, você perde o direito. Não há recurso administrativo, não há apelo. É final.",
                  },
                ]
                  .map((item) => (
                    <div key={item.numero} className="border border-white/[0.08] rounded-lg p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-navy font-bold">
                          {item.numero}
                        </div>
                        <h4 className="text-lg font-bold text-ice">{item.titulo}</h4>
                      </div>
                      <p className="text-ice/70 leading-relaxed">{item.descricao}</p>
                    </div>
                  ))}
              </div>
            </section>

            {/* Timeline */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Timeline: Quando Agir</h2>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-8">
                <div className="space-y-6">
                  {[
                    {
                      periodo: "Agora (Jul-Set/2026)",
                      status: "🟢 IDEAL",
                      acao: "Faça a validação e homologação. Você tem tempo.",
                    },
                    {
                      periodo: "Out-Nov/2026",
                      status: "🟡 URGENTE",
                      acao: "Ainda dá tempo, mas a fila fica maior. Não deixe para depois.",
                    },
                    {
                      periodo: "Dez/2026",
                      status: "🔴 CRÍTICO",
                      acao: "Últimos 30 dias. Fila máxima. Risco de não terminar no prazo.",
                    },
                    {
                      periodo: "Jan/2027+",
                      status: "❌ PERDIDO",
                      acao: "Deadline passou. Você perde o direito.",
                    },
                  ]
                    .map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 pb-6 border-b border-white/[0.08] last:border-b-0"
                      >
                        <div className="min-w-fit">
                          <p className="font-bold text-ice">{item.periodo}</p>
                          <p className="text-sm text-brand">{item.status}</p>
                        </div>
                        <p className="text-ice/70 flex-1">{item.acao}</p>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            {/* Quanto você pode perder */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Quanto Você Pode Perder?</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                Depende do seu negócio. Mas números do mercado são claros:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { label: "Empresas afetadas", numero: "~50.000", detalhe: "em Lucro Real" },
                  { label: "Saldo médio por empresa", numero: "R$ 200K-500K", detalhe: "alguns chegam a R$ 1M+" },
                  { label: "Total em jogo", numero: "R$ 25-50 bi", detalhe: "conservador" },
                ]
                  .map((stat, idx) => (
                    <div key={idx} className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6 text-center">
                      <p className="text-sm text-ice/50 mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold text-brand mb-1">{stat.numero}</p>
                      <p className="text-xs text-ice/40">{stat.detalhe}</p>
                    </div>
                  ))}
              </div>

              <p className="text-ice/70 leading-relaxed">
                <strong className="text-ice">Isso significa:</strong> Se sua empresa tem R$ 300 mil em crédito
                e você não agir, esse dinheiro vira zero. Não é devolvido. Não é transferido. Desaparece.
              </p>
            </section>

            {/* Próximos passos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Seus Próximos Passos</h2>

              <div className="space-y-4">
                {[
                  {
                    numero: 1,
                    acao: "Validar seu crédito",
                    como: "Use uma ferramenta como CreditOS ou procure um contador. Saiba exatamente quanto você tem direito.",
                  },
                  {
                    numero: 2,
                    acao: "Reunir documentação",
                    como: "DRE dos últimos 5 anos, apurações de PIS/COFINS, ECF, comprovantes operacionais.",
                  },
                  {
                    numero: 3,
                    acao: "Preparar parecer técnico",
                    como: "Documento que justifica seu crédito. Pode ser feito por contador ou consultoria especializada.",
                  },
                  {
                    numero: 4,
                    acao: "Homologar na Receita",
                    como: "Enviar parecer + documentação. Aguardar análise (30-90 dias).",
                  },
                  {
                    numero: 5,
                    acao: "Receber liberação",
                    como: "Crédito aprovado. Você pode usar para pagar impostos ou solicitar restituição.",
                  },
                ]
                  .map((step) => (
                    <div key={step.numero} className="flex gap-4 pb-4 border-b border-white/[0.08] last:border-b-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-navy font-bold flex-shrink-0">
                        {step.numero}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-ice mb-1">{step.acao}</h4>
                        <p className="text-sm text-ice/60">{step.como}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <div className="bg-brand/10 border border-brand/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-ice mb-4">Não Deixe Para Depois</h3>
                <p className="text-ice/70 mb-6 leading-relaxed">
                  Sua janela de ouro está aberta agora. Em janeiro/2027, fecha para sempre. Use o CreditOS
                  para validar seu crédito em 5 minutos e ter certeza.
                </p>
                <Link
                  href="/creditOS"
                  className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
                >
                  Validar Meu Crédito Agora →
                </Link>
              </div>
            </section>
          </ArticleLayout>
        </div>
      </main>
    </>
  );
}
