import type { Metadata } from "next";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

export const metadata: Metadata = {
  title: "IA-First para Contadores | TRÍADE IA",
  description: "Como escritórios contábeis implementam IA como core para atender reforma tributária",
  openGraph: {
    title: "IA-First para Contadores",
    description: "Transformação contábil com inteligência artificial e reforma tributária",
    type: "article",
    url: "https://triadeiaos.com/blog/sua-empresa-ai-first/ai-first-contador",
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ArticleLayout
          slug="ai-first-contador"
          titulo="IA-First para Escritórios Contábeis"
          descricao="Transforme seu escritório em consultoria estratégica com IA"
          autor="TRÍADE IA"
          data="2026-07-15"
          tempoLeitura="12 min"
          categoria="Sua Empresa AI-First"
          categoriaLink="/blog/sua-empresa-ai-first"
        >
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">O Contador Sob Pressão: De Operacional para Estratégico</h2>
            <p className="text-ice/70 leading-relaxed mb-6">
              EC 132/2023 obrigou contadores a compreender 7 agentes tributários diferentes, cada um com regras próprias.
              Quem não evoluir para IA-First vai virar máquina de processar obrigações.
            </p>
            <p className="text-ice/70 leading-relaxed mb-6">
              Realidade de hoje:
            </p>
            <ul className="space-y-3 text-ice/70">
              <li className="flex gap-3">
                <span className="text-brand">•</span>
                <span>60% do tempo de contador é classificação manual de documentos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">•</span>
                <span>Erros em lançamentos custam caro (multas, juros, retrabalho)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">•</span>
                <span>Cliente quer "consultoria tributária", mas contador está preso em E1 do ERP</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">•</span>
                <span>Concorrência: escritórios que implementaram IA estão ganhando clientes</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">Os 5 Passos para Contador AI-First</h2>

            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">Passo 1: Automação de Entrada de Dados</h3>
                <p className="text-ice/70 mb-4">
                  IA extrai dados de NFe, boletos, cupons, contracheques. Lança automaticamente no sistema contábil.
                </p>
                <p className="text-ice/70">
                  <strong>Resultado:</strong> Reduz 40% do tempo de assistente contábil. Menos erros de digitação.
                  Escritório em Brasília que usou SOAF liberou 15 horas/semana por assistente para análise.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">Passo 2: Validação Inteligente de Lançamentos</h3>
                <p className="text-ice/70 mb-4">
                  IA detecta inconsistências antes de virar erro: CNPJ incorreto, natureza de lançamento incompatível, valores outliers.
                </p>
                <p className="text-ice/70">
                  <strong>Ganho:</strong> 95% menos erros em auditorias. Multas por erros contábeis caem 80%.
                  Cliente confia mais no contador porque sabe que validação é rigorosa.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">Passo 3: Reforma Tributária em Tempo Real</h3>
                <p className="text-ice/70 mb-4">
                  IA monitora mudanças de legislação EC 132/2023 e aplica automaticamente. Contador não precisa lembrar de cada nova alíquota.
                </p>
                <p className="text-ice/70">
                  <strong>Impacto:</strong> SOAF identifica se cliente pode aproveitar benefícios que não sabia que tinha.
                  Contador descobre caminhos para economizar impostos → valor agregado massivo.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">Passo 4: Consultoria de Recuperação de Créditos</h3>
                <p className="text-ice/70 mb-4">
                  IA mapeia créditos tributários que cliente está deixando perder. Contador vira consultor que recupera dinheiro.
                </p>
                <p className="text-ice/70">
                  <strong>Negócio novo:</strong> Escritório que implementou recuperação de créditos com IA TRÍADE passa a oferecer "auditoria tributária" como serviço.
                  Margem: 20-30% do crédito recuperado. Cliente de R$ 100K/mês em IRPJ virou R$ 150K quando descobriu créditos perdidos.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">Passo 5: Storytelling de Dados para Cliente</h3>
                <p className="text-ice/70 mb-4">
                  IA gera relatórios visuais que mostram saúde tributária do cliente. Não é apenas números: é estratégia.
                </p>
                <p className="text-ice/70">
                  <strong>Valor percebido:</strong> Cliente vê que contador não é custo: é investimento.
                  Resultado: retenção 40% maior, possibilidade de vender serviços adicionais (consultoria, planejamento).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">O Dilema do Contador: Eficiência ou Irrelevância</h2>
            <div className="bg-brand/10 border border-brand/30 rounded-lg p-6">
              <p className="text-ice/70 mb-4">
                <strong className="text-brand">Cenário A (Sem IA):</strong> Contador continua fazendo contabilidade manual.
                Em 3 anos, é substituído por software genérico. Ganha pelo tempo (não por valor).
              </p>
              <p className="text-ice/70">
                <strong className="text-brand">Cenário B (Com IA-First):</strong> Contador automatiza rotina. Dedica 60% do tempo a consultoria tributária.
                Recupera créditos para clientes. Propõe planejamento tributário. Vira parceiro estratégico.
                Margem 3x maior, clientes pagam prêmio por qualidade.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">Ferramentas para Contador AI-First</h2>
            <ul className="space-y-4 text-ice/70">
              <li className="flex gap-3">
                <span className="text-brand">✓</span>
                <div>
                  <strong><a href="https://app.triadeiaos.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">SOAF Contador:</a></strong>
                  <p className="mt-1">7 agentes IA para validação, automação e reforma tributária em tempo real</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">✓</span>
                <div>
                  <strong><a href="https://triadeiaos.com/produtos/recuperacao-creditos-tributarios" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Diagnóstico de Créditos:</a></strong>
                  <p className="mt-1">Auditoria especializada que identifica créditos perdidos (PIS/COFINS, ICMS, IRPJ)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">✓</span>
                <div>
                  <strong><a href="https://app.triadeiaos.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">Planilha de Simulação:</a></strong>
                  <p className="mt-1">Cliente vê em tempo real impacto da reforma tributária no seu IRPJ</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12 bg-brand/10 border border-brand/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-ice mb-4">Contador: Hora de Evoluir</h3>
            <p className="text-ice/70 mb-6">
              Sua carteira de clientes pode crescer 2-3x se você implementar IA como core. Comece com diagnóstico.
            </p>
            <a
              href="https://wa.me/5564992966118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Agendar Consultoria →
            </a>
          </section>
        </ArticleLayout>
      </div>
    </main>
  );
}
