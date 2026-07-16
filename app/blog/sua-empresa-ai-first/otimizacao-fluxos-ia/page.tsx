import type { Metadata } from "next";
import ArticleLayout from "@/app/blog/components/ArticleLayout";

export const metadata: Metadata = {
  title: "Otimização de Fluxos com IA | TRÍADE IA",
  description: "Reduza custos operacionais e aumente produtividade com automação inteligente de processos",
  openGraph: {
    title: "Otimização de Fluxos com IA",
    description: "Como implementar IA para otimizar processos e aumentar eficiência",
    type: "article",
    url: "https://triadeiaos.com/blog/sua-empresa-ai-first/otimizacao-fluxos-ia",
    images: [
      {
        url: "https://triadeiaos.com/images/blog/otimizacao-fluxos-ia.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <ArticleLayout
          slug="otimizacao-fluxos-ia"
          titulo="Otimização de Fluxos com IA"
          descricao="Reduza custos operacionais e aumente produtividade com automação inteligente"
          autor="TRÍADE IA"
          data="2026-07-15"
          tempoLeitura="12 min"
          categoria="Sua Empresa AI-First"
          categoriaLink="/blog/sua-empresa-ai-first"
          imagemUrl="/images/blog/otimizacao-fluxos-ia.png"
        >
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">O Custo Real da Ineficiência</h2>
            <p className="text-ice/70 leading-relaxed mb-6">
              Empresa de logística: 40 horas/semana perdidas em entrada manual de dados.
              Custo anual: R$ 120 mil. Resultado com IA: redução de 90% em 2 meses.
            </p>
            <p className="text-ice/70 leading-relaxed">
              Esse não é um caso isolado. Em setores como logística, varejo, contabilidade e operações tributárias,
              fluxos manuais consomem recursos valiosos que poderiam ser dedicados a decisões estratégicas.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">Os 5 Fluxos que Mais Consomem Tempo</h2>

            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">1. Classificação e Categorização de Documentos</h3>
                <p className="text-ice/70 mb-3">
                  O maior culpado: entrada de NFe, cupons, recibos, boletos em sistemas diversos.
                </p>
                <p className="text-ice/70">
                  Com IA: <span className="text-brand">OCR inteligente + classificação automática</span> reduz 80% do tempo manual.
                  Solução TRÍADE: <a href="https://app.triadeiaos.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">SOAF</a> classifica documentos tributários automaticamente.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">2. Validação de Dados e Detecção de Inconsistências</h3>
                <p className="text-ice/70 mb-3">
                  Conferir manualmente se CNPJs, CPFs, valores estão corretos é tarefa que consome horas.
                </p>
                <p className="text-ice/70">
                  Com IA: <span className="text-brand">Validação em tempo real</span> evita erros antes de envios.
                  Em contabilidade, nossa <a href="https://app.triadeiaos.com" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">plataforma</a> valida alertas de prazo e inconsistências automaticamente.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">3. Extração de Dados de Documentos Complexos</h3>
                <p className="text-ice/70 mb-3">
                  Tabelas em PDFs, notas fiscais com layouts variados, planilhas desorganizadas.
                </p>
                <p className="text-ice/70">
                  Com IA: <span className="text-brand">Reconhecimento de padrões</span> extrai dados com 98% de precisão.
                  Para reforma tributária: a IA interpreta automaticamente saldos, créditos e débitos de qualquer documento.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">4. Roteamento Inteligente de Tarefas</h3>
                <p className="text-ice/70 mb-3">
                  Quem valida? Quem aprova? Quem processa? Sem automação, fica manual e lento.
                </p>
                <p className="text-ice/70">
                  Com IA: <span className="text-brand">Workflows automáticos</span> baseados em regras e prioridades.
                  Reduz tempo de processamento de 3 dias para 2 horas.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/[0.08] rounded-lg p-6">
                <h3 className="text-xl font-bold text-ice mb-3">5. Integração de Sistemas Diferentes</h3>
                <p className="text-ice/70 mb-3">
                  ERP, sistema contábil, software tributário, planilhas Google — tudo desconectado.
                </p>
                <p className="text-ice/70">
                  Com IA: <span className="text-brand">Middleware inteligente</span> conecta sistemas e sincroniza dados em tempo real.
                  Impacto: -60% no tempo de reconciliação.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-ice mb-6">A Reforma Tributária Acelerou Essa Necessidade</h2>
            <p className="text-ice/70 leading-relaxed mb-6">
              Com EC 132/2023, prefeituras, contadores e empresas agora precisam processar muito mais informação:
            </p>
            <ul className="space-y-3 text-ice/70 mb-6">
              <li className="flex gap-3">
                <span className="text-brand">•</span>
                <span><strong>SOAF (Sistema de Otimização Automática Fiscal):</strong> 7 agentes IA que processam a reforma em tempo real</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">•</span>
                <span><strong>CreditOS:</strong> Recuperação de créditos tributários com 40% mais precisão via IA</span>
              </li>
              <li className="flex gap-3">
                <span className="text-brand">•</span>
                <span><strong>Ferramentas TRÍADE:</strong> Todas usam otimização de fluxo para reduzir carga manual</span>
              </li>
            </ul>
            <p className="text-ice/70">
              Empresas que não otimizarem seus fluxos vão ficar para trás. Aquelas que implementarem IA agora vão crescer 3x mais rápido.
            </p>
          </section>

          <section className="mb-12 bg-brand/10 border border-brand/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-ice mb-4">Comece Agora: Auditoria Gratuita de Fluxos</h3>
            <p className="text-ice/70 mb-6">
              Mapeamos seus processos, identificamos onde IA pode economizar tempo e dinheiro.
            </p>
            <a
              href="https://wa.me/5564992966118"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Agendar Análise →
            </a>
          </section>
        </ArticleLayout>
      </div>
    </main>
  );
}
