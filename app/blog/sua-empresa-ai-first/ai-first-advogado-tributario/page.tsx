import type { Metadata } from "next";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

export const metadata: Metadata = {
  title: "IA-First para Advogados Tributários | TRÍADE IA",
  description: "Como advogados usam IA para dominar reforma tributária e virar especialistas",
  openGraph: {
    title: "IA-First para Advogados Tributários",
    description: "Transformação jurídica tributária com inteligência artificial",
    type: "article",
    url: "https://triadeiaos.com/blog/sua-empresa-ai-first/ai-first-advogado-tributario",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ArticleLayout
          slug="ai-first-advogado-tributario"
          titulo="IA-First para Advogados Tributários"
          descricao="Domine a reforma tributária e aumente relevância jurídica com IA"
          autor="TRÍADE IA"
          data="2026-07-15"
          tempoLeitura="11 min"
          categoria="Sua Empresa AI-First"
          categoriaLink="/blog/sua-empresa-ai-first"
        >
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">O Advogado Tributário na Era da Reforma</h2>
            <p className="text-ice/70 leading-relaxed mb-6">
              EC 132/2023 é a maior reforma tributária em 40 anos. Criou 7 agentes tributários diferentes, cada um com jurisprudência própria.
              Advogado que não dominar essa complexidade vai ficar para trás.
            </p>
            <p className="text-ice/70 leading-relaxed mb-6">
              Desafios atuais:
            </p>
            <ul className="space-y-3 text-ice/70">
              <li className="flex gap-3">
                <span className="text-brand">→</span>
                <span>Reforma muda tão rápido que jurisprudência está em movimento</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">→</span>
                <span>Cliente quer saber se tem direito a benefício; falta visibilidade no sistema</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">→</span>
                <span>Pesquisa jurídica manual consome 50% do tempo de trabalho</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">→</span>
                <span>Competição: advogados que usam IA estão vencendo arbitragens</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">Os 4 Superpoderes do Advogado IA-First</h2>

            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">🔍 Superpoder 1: Jurisprudência em Tempo Real</h3>
                <p className="text-ice/70 mb-4">
                  IA monitora decisões do CARF, STJ, STF sobre reforma tributária em tempo real.
                  Você sabe antes da concorrência qual jurisprudência está consolidando.
                </p>
                <p className="text-ice/70">
                  <strong>Resultado:</strong> Advogado que defendia cliente em caso sobre IS sobre PIS (SOAF) descobriu que CARF mudou jurisprudência.
                  Preparou ação antes de concorrentes. Ganhou posicionamento de expertise.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">📊 Superpoder 2: Análise Quantitativa de Direitos Tributários</h3>
                <p className="text-ice/70 mb-4">
                  IA calcula quanto cliente pode recuperar em juros, atualização monetária, multas dispensáveis.
                  Você chega na reunião com número, não com opinião.
                </p>
                <p className="text-ice/70">
                  <strong>Impacto:</strong> Advogado apresentou análise IA ao cliente: poderia recuperar R$ 2.3M em créditos.
                  Cliente fechou contrato de consultoria tributária. Margem: 20% do valor recuperado.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">🎯 Superpoder 3: Mapeamento Inteligente de Argumentação</h3>
                <p className="text-ice/70 mb-4">
                  IA identifica qual argumento jurídico tem maior taxa de sucesso para seu caso específico.
                  Não é achismo: é análise de padrões de 10 anos de jurisprudência.
                </p>
                <p className="text-ice/70">
                  <strong>Resultado:</strong> Defesa de mandado de segurança contra Receita: IA indicou que argumento sobre "segurança jurídica"
                  tem 78% de sucesso em casos similares. Advogado estruturou defesa em torno disso. Ganhou.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">💼 Superpoder 4: Consultoria Estratégica para Cliente</h3>
                <p className="text-ice/70 mb-4">
                  Deixa de ser "advogado que resolve problema" para ser "advogado que previne problema".
                  IA mostra janelas de oportunidade (como reforma tributária "janela de ouro").
                </p>
                <p className="text-ice/70">
                  <strong>Novo negócio:</strong> Advogado em São Paulo começou a oferecer "auditoria tributária preventiva" com SOAF.
                  Identifica riscos antes de virar disputa. Cliente paga consultoria regularmente. Receita passiva.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">Reforma Tributária: A Maior Oportunidade Jurídica da Década</h2>
            <p className="text-ice/70 leading-relaxed mb-6">
              EC 132/2023 criou 3 tipos de litígios:
            </p>
            <div className="space-y-4">
              <div className="bg-white/[0.02] border border-brand/30 rounded-lg p-6">
                <p className="text-ice/70 mb-2">
                  <strong className="text-brand">1. Direitos ao Regime Anterior</strong> (ICMS, IRPJ, IRRF)
                </p>
                <p className="text-ice/70">
                  Clientes têm direito a créditos de períodos antes da reforma. Advogado que domina esse direito ganha 100+ clientes.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-brand/30 rounded-lg p-6">
                <p className="text-ice/70 mb-2">
                  <strong className="text-brand">2. Benefícios não Consolidados</strong> (Lei Kandir, Suframa, etc)
                </p>
                <p className="text-ice/70">
                  Reforma não extinguiu benefícios antigos; alguns ainda podem ser aproveitados. IA identifica janelas.
                </p>
              </div>
              <div className="bg-white/[0.02] border border-brand/30 rounded-lg p-6">
                <p className="text-ice/70 mb-2">
                  <strong className="text-brand">3. Interpretações Conflitantes</strong> (CARF vs Receita)
                </p>
                <p className="text-ice/70">
                  Jurisprudência ainda se forma. Advogado que entra agora com casos-teste define precedentes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">Ferramentas para Advogado Tributário AI-First</h2>
            <ul className="space-y-4 text-ice/70">
              <li className="flex gap-3">
                <span className="text-brand">✓</span>
                <div>
                  <strong><a href="https://app.triadeiaos.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">SOAF Jurídico:</a></strong>
                  <p className="mt-1">7 agentes IA que interpretam reforma tributária, geram parecer técnico, indicam jurisprudência relevante</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">✓</span>
                <div>
                  <strong><a href="https://triadeiaos.com/portfolio/recuperacao-creditos-tributarios" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Diagnóstico Jurídico de Créditos:</a></strong>
                  <p className="mt-1">Identifica direitos tributários que cliente pode explorar judicialmente</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">✓</span>
                <div>
                  <strong><a href="https://app.triadeiaos.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Planilha de Simulação:</a></strong>
                  <p className="mt-1">Calcula valor de disputa + probabilidade de sucesso + jurisprudência aplicável</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">O Advogado do Futuro</h2>
            <p className="text-ice/70 leading-relaxed mb-6">
              Não é mais o que passa 50 horas pesquisando jurisprudência. É o que usa IA para sintetizar complexidade
              e oferecer valor estratégico ao cliente.
            </p>
            <div className="bg-brand/10 border border-brand/30 rounded-lg p-6">
              <p className="text-ice/70 mb-4">
                <strong className="text-brand">Sua escolha:</strong>
              </p>
              <p className="text-ice/70 mb-4">
                <strong>A)</strong> Continua como "advogado que resolve disputa" (receita por hora, concorrência feroz)
              </p>
              <p className="text-ice/70">
                <strong>B)</strong> Vira "consultor tributário que usa IA" (receita por valor agregado, retenção de cliente alta, novo nicho)
              </p>
            </div>
          </section>

          <section className="mb-12 bg-brand/10 border border-brand/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-ice mb-4">Advogado: Hora de Especializar com IA</h3>
            <p className="text-ice/70 mb-6">
              Solicite demonstração de como SOAF transforma sua prática tributária. Veja como IA identifica oportunidades que você estava perdendo.
            </p>
            <a
              href="https://wa.me/5564992966118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Agendar Demo de SOAF →
            </a>
          </section>
        </ArticleLayout>
      </div>
    </main>
  );
}
