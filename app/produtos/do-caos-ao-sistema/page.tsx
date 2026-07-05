export const metadata = {
  title: 'Do Caos ao Sistema | TRIADE IA',
  description: 'Transforme a complexidade em oportunidade com TRIADE IA',
};

export default function DoCAosAoSistemaPage() {
  return (
    <main className=min-h-screen bg-gradient-to-b from-slate-900 to-slate-800>
      <div className=container mx-auto px-4 py-16>
        <h1 className=text-4xl font-bold text-white mb-4>Do Caos ao Sistema</h1>
        <p className=text-gray-400 mb-8>
          Transforme a complexidade em oportunidade
        </p>

        <div className=bg-slate-800 rounded-lg p-8 border border-slate-700>
          <section className=mb-8>
            <h2 className=text-2xl font-semibold text-white mb-4>Visão Geral</h2>
            <p className=text-gray-300 mb-4>
              A jornada de transformação digital começa com o entendimento da realidade atual.
              TRIADE IA ajuda organizações a estruturar processos caóticos em sistemas eficientes
              e escaláveis.
            </p>
          </section>

          <section className=mb-8>
            <h2 className=text-2xl font-semibold text-white mb-4>Diferenciais</h2>
            <ul className=list-disc list-inside space-y-2 text-gray-300>
              <li>Diagnóstico preciso da situação atual</li>
              <li>Roadmap personalizado de transformação</li>
              <li>Implementação assistida por IA</li>
              <li>Suporte contínuo e otimização</li>
            </ul>
          </section>

          <section>
            <h2 className=text-2xl font-semibold text-white mb-4>Próximos Passos</h2>
            <p className=text-gray-300 mb-4>
              Entre em contato com nosso time para agendar uma diagnóstico gratuito.
            </p>
            <a
              href=/atendimento
              className=inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition
            >
              Solicitar Diagnóstico
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
