import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Maturidade IA-First: 8 Passos Para Transformar Sua Empresa | TRÍADE IA",
  description:
    "Como transformar sua empresa em uma organização IA-First. 8 passos práticos: diagnóstico, roadmap, implementação e mensuração de resultados.",
  keywords:
    "IA-First, inteligência artificial empresarial, transformação digital, operações com IA, automação inteligente, diagnóstico IA",
  openGraph: {
    title: "Maturidade IA-First: 8 Passos Para Transformar Sua Empresa",
    description:
      "Guia prático: como operações IA-First triplicam eficiência e reduzem custos.",
    type: "article",
    url: "https://triadeiaos.com/blog/sua-empresa-ai-first/maturidade-ai-first",
    authors: ["TRÍADE IA"],
  },
};

export default function MaturidadeAIFirstArticle() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Maturidade IA-First: 8 Passos Para Transformar Sua Empresa",
    description:
      "Guia prático: 8 passos para operações IA-First e transformação digital.",
    image: "https://triadeiaos.com/images/blog/maturidade-ai-first.png",
    datePublished: "2026-07-16",
    dateModified: "2026-07-16",
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
            slug="maturidade-ai-first"
            titulo="Maturidade IA-First: 8 Passos"
            descricao="Transforme Sua Empresa com Inteligência Artificial"
            autor="TRÍADE IA"
            data="2026-07-16"
            tempoLeitura="15 min"
            categoria="Sua Empresa AI-First"
            categoriaLink="/blog/sua-empresa-ai-first"
            imagemUrl="/images/blog/maturidade-ai-first.png"
          >
            {/* Introdução */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Não É Sobre Ter IA. É Sobre Ser IA-First.</h2>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Muitas empresas compram uma ferramenta de IA. Alguns a testam. Poucos a integram. Bem
                menos ainda chegam a ser uma <strong>organização IA-First</strong>.
              </p>
              <p className="text-ice/70 mb-4 leading-relaxed">
                Ser IA-First significa que inteligência artificial não é um departamento ou uma
                ferramenta. É como você funciona. É como seus processos são desenhados. É a base de suas
                decisões.
              </p>
              <p className="text-ice/70 leading-relaxed">
                Esse artigo detalha os 8 passos para chegar lá — não como teoria, mas como prática.
              </p>
            </section>

            {/* Contexto */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Por Que IA-First Importa?</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                Números simples, mas poderosos:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { numero: "3×", descricao: "Mais rápido: Operações AI-First vs manuais" },
                  { numero: "-50%", descricao: "Menos custo: Redução em tarefas repetitivas" },
                  {
                    numero: "+40%",
                    descricao: "Mais receita: Vendas e conversão melhoram com atendimento IA",
                  },
                ]
                  .map((stat, idx) => (
                    <div key={idx} className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6 text-center">
                      <p className="text-3xl font-bold text-brand mb-2">{stat.numero}</p>
                      <p className="text-sm text-ice/60">{stat.descricao}</p>
                    </div>
                  ))}
              </div>

              <p className="text-ice/70 leading-relaxed">
                Esses números não são teóricos. Vêm de empresas que implementaram IA-First e mediram o
                resultado.
              </p>
            </section>

            {/* Os 8 passos */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Os 8 Passos Para Maturidade IA-First</h2>

              <div className="space-y-6">
                {[
                  {
                    numero: 1,
                    titulo: "Diagnóstico Profundo",
                    descricao:
                      "Não é uma pesquisa. É uma análise de 30-40 horas de cada processo crítico. Você precisa saber: quanto tempo cada operação consome, qual é o custo, quantas pessoas estão envolvidas, onde há retrabalho.",
                    acao: "Mapeie seus 5 processos mais custosos",
                  },
                  {
                    numero: 2,
                    titulo: "Identificar Oportunidades",
                    descricao:
                      "Nem todo processo pode ser automatizado com IA. Alguns precisam de IA para clareza (análise de dados). Outros para velocidade (atendimento). Outros para qualidade (classificação). Você precisa saber qual oportunidade vale para cada processo.",
                    acao:
                      "Priorize: Alto impacto + Viável + Rápido ROI = comece por aí",
                  },
                  {
                    numero: 3,
                    titulo: "Roadmap Realista",
                    descricao:
                      "Não implemente tudo de uma vez. Um roadmap realista tem 3-4 fases de 6 meses cada. Fase 1 é MVP (mínimo viável). Fases seguintes escalem o que funcionou.",
                    acao: "Defina fases: MVP (3 meses) → Expansão (6 meses) → Escala (12+ meses)",
                  },
                  {
                    numero: 4,
                    titulo: "Começar Pequeno (MVP)",
                    descricao:
                      "Seu MVP não é a solução perfeita. É a solução suficiente para testar hipótese. Exemplo: Não crie um agente de IA para lidar com 100% dos atendimentos. Comece com 20% (clientes que falam sobre tópicos simples).",
                    acao:
                      "MVP bem-sucedido em 30 dias, não em 180 dias planejados.",
                  },
                  {
                    numero: 5,
                    titulo: "Integração com Sistemas Existentes",
                    descricao:
                      "IA não funciona sozinha. Precisa se integrar com seu CRM, seu ERP, seu banco de dados. Sem integração, você tem dois sistemas paralelos (um manual, outro com IA) — e ninguém usa o com IA.",
                    acao:
                      "Mapeie integrações: APIs, webhooks, banco de dados compartilhado",
                  },
                  {
                    numero: 6,
                    titulo: "Treinar & Adotar",
                    descricao:
                      "A ferramenta está lá, mas seu time não sabe usar. Treinamento não é uma workshop de 2 horas. É prática diária, suporte contínuo, e incentivo para usar (não para evitar).",
                    acao:
                      "Dedique 2 semanas: 2h/dia treinamento + suporte ao vivo para dúvidas",
                  },
                  {
                    numero: 7,
                    titulo: "Medir & Iterar",
                    descricao:
                      "Você precisa saber se funciona. Defina KPIs antes (tempo economizado, erros reduzidos, satisfação cliente) e acompanhe semana a semana. Se não funciona, itere rápido.",
                    acao:
                      "Dashboard: tempo economizado, custos reduzidos, satisfação (NPS/NSS)",
                  },
                  {
                    numero: 8,
                    titulo: "Escalar & Refinar",
                    descricao:
                      "MVP funcionou? Agora expanda para 100% do processo. Refine baseado em aprendizado: ajuste prompts, regras, fluxos. Escale para outros departamentos.",
                    acao: "Multiplique em 10× o escopo, mantenha o time pequeno",
                  },
                ]
                  .map((passo) => (
                    <div key={passo.numero} className="border border-white/[0.08] rounded-lg p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-navy font-bold text-lg">
                          {passo.numero}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-ice">{passo.titulo}</h4>
                        </div>
                      </div>

                      <p className="text-ice/70 mb-4 leading-relaxed">{passo.descricao}</p>

                      <div className="bg-white/[0.02] rounded p-4 border border-white/[0.08]">
                        <p className="text-xs text-ice/50 mb-2">AÇÃO PRÁTICA:</p>
                        <p className="text-sm text-brand font-semibold">{passo.acao}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* Timeline realista */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">Timeline Realista: Do Diagnóstico à Escala</h2>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-8">
                <div className="space-y-6">
                  {[
                    {
                      mes: "Mês 1-2",
                      fase: "Diagnóstico & Roadmap",
                      atividades: [
                        "Análise profunda dos processos",
                        "Identificação de oportunidades",
                        "Definição de KPIs e ROI esperado",
                      ],
                      resultado: "Roadmap 12-24 meses pronto",
                    },
                    {
                      mes: "Mês 3-4",
                      fase: "MVP #1 (Piloto)",
                      atividades: [
                        "Configuração e testes de IA",
                        "Integração com 1 sistema (CRM, por exemplo)",
                        "Suporte com manual de uso",
                      ],
                      resultado: "Primeira IA rodando em produção (20% de escopo)",
                    },
                    {
                      mes: "Mês 5-6",
                      fase: "Validação & Aprendizado",
                      atividades: [
                        "Acompanhamento diário de métricas",
                        "Feedback do time",
                        "Ajustes (prompts, regras, fluxos)",
                      ],
                      resultado: "Confirmado que funciona. ROI positivo.",
                    },
                    {
                      mes: "Mês 7-12",
                      fase: "Expansão (100% + Novos Processos)",
                      atividades: [
                        "Escalar primeiro processo para 100%",
                        "Implementar 2-3 MVPs novos",
                        "Treinar mais departamentos",
                      ],
                      resultado: "3-4 processos rodando com IA. Economia visível.",
                    },
                  ]
                    .map((timeline, idx) => (
                      <div key={idx} className="pb-6 border-b border-white/[0.08] last:border-b-0">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-navy font-bold text-sm">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-mono text-brand font-bold">{timeline.mes}</p>
                            <h4 className="text-lg font-bold text-ice">{timeline.fase}</h4>
                          </div>
                        </div>

                        <div className="ml-14">
                          <p className="text-xs text-ice/50 mb-2">ATIVIDADES:</p>
                          <ul className="space-y-1 mb-4">
                            {timeline.atividades.map((ativ, i) => (
                              <li key={i} className="text-sm text-ice/70 flex items-start gap-2">
                                <span className="text-brand mt-1">•</span>
                                <span>{ativ}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="text-sm text-ice">
                            <strong>Resultado esperado:</strong> {timeline.resultado}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>

            {/* Erros comuns */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">7 Erros Comuns (E Como Evitar)</h2>

              <div className="space-y-4">
                {[
                  {
                    erro: "Começar grande demais",
                    resultado:
                      "Projeto falha em 3 meses. Time fica com medo de tentar de novo. IA = estigma de fracasso.",
                    solucao: "Comece com MVP pequeno. Prove que funciona. Depois escale.",
                  },
                  {
                    erro: "Esquecer integração",
                    resultado:
                      "IA funciona, mas dados não falam com seu sistema. Você muda manualmente. Dois sistemas paralelos.",
                    solucao: "Integração é pré-requisito. Não é nice-to-have.",
                  },
                  {
                    erro: "Não treinar o time",
                    resultado:
                      "Ferramenta bonita, ninguém usa. Investimento perdido. Time volta ao manual (é o que conhece).",
                    solucao: "Treinar é 30% do tempo de implementação. Não é opcional.",
                  },
                  {
                    erro: "Escolher ferramenta antes de diagnóstico",
                    resultado:
                      "Ferramenta não resolve o problema real. Você força a solução ao problema. Fracasso garantido.",
                    solucao: "Diagnóstico → Problema definido → Depois escolha ferramenta.",
                  },
                  {
                    erro: "Não medir nada",
                    resultado:
                      "Você não sabe se funciona. Depois de 6 meses, alguém pergunta: 'Qual é o ROI?' Você não tem resposta.",
                    solucao: "Defina métricas no Passo 1. Acompanhe semana a semana.",
                  },
                  {
                    erro: "Esperar perfeição",
                    resultado:
                      "MVP leva 6 meses para estar 'pronto'. Mercado muda. Você chega atrasado.",
                    solucao: "MVP em 30 dias com 70% de funcionalidade. Refine depois com uso real.",
                  },
                  {
                    erro: "Subestimar mudança de cultura",
                    resultado:
                      "Time resiste. 'Máquina não entende contexto.' 'IA vai tirar meu emprego.' Adoção é lenta ou nula.",
                    solucao:
                      "Comunique desde o início: IA amplifica pessoas, não substitui. Role model: mostre líderes usando.",
                  },
                ]
                  .map((item, idx) => (
                    <details
                      key={idx}
                      className="group border border-white/[0.08] rounded-lg overflow-hidden"
                    >
                      <summary className="cursor-pointer p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                        <div>
                          <h4 className="font-bold text-ice">❌ {item.erro}</h4>
                        </div>
                        <span className="text-brand group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <div className="px-6 pb-6 border-t border-white/[0.08] space-y-4">
                        <div>
                          <p className="text-xs text-ice/50 mb-2">SE NÃO EVITAR:</p>
                          <p className="text-sm text-ice/70">{item.resultado}</p>
                        </div>
                        <div>
                          <p className="text-xs text-brand mb-2 font-bold">✓ SOLUÇÃO:</p>
                          <p className="text-sm text-ice/70">{item.solucao}</p>
                        </div>
                      </div>
                    </details>
                  ))}
              </div>
            </section>

            {/* Métrica essencial */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-ice mb-6">A Métrica Essencial: Tempo & Custo</h2>
              <p className="text-ice/70 mb-6 leading-relaxed">
                No final, tudo se reduz a uma equação simples:
              </p>

              <div className="bg-brand/10 border border-brand/30 rounded-lg p-8 mb-6">
                <p className="text-center text-lg font-bold text-ice mb-6">
                  Tempo Economizado × Custo/Hora + Erros Prevenidos = ROI IA
                </p>
                <p className="text-ice/70 leading-relaxed">
                  Exemplo: Uma operação manual leva 40 horas/mês (1 pessoa). Com IA, leva 4 horas. Se a
                  pessoa custa R$ 4.000/mês, você economiza R$ 3.600/mês. Se a IA custa R$ 500/mês, ROI =
                  R$ 3.100/mês. Payback em menos de 1 mês.
                </p>
              </div>

              <p className="text-ice/70 leading-relaxed">
                Sempre calcule assim. Se ROI &lt; 1 mês, implemente. Se &gt; 6 meses, repense a
                oportunidade.
              </p>
            </section>

            {/* CTA */}
            <section>
              <div className="bg-brand/10 border border-brand/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-ice mb-4">
                  Quer Seguir Esse Roadmap? A TRÍADE Ajuda Você.
                </h3>
                <p className="text-ice/70 mb-6 leading-relaxed">
                  Cada empresa é diferente. Seu diagnóstico + roadmap personalizados levam 2-3 semanas.
                  Depois, você tem um plano pronto para executar — ou nos contrata para executar junto.
                </p>
                <a
                  href="https://wa.me/5564992966118?text=Quero%20implementar%20IA-First%20na%20minha%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
                >
                  Solicitar Diagnóstico Personalizado →
                </a>
              </div>
            </section>
          </ArticleLayout>
        </div>
      </main>
    </>
  );
}
