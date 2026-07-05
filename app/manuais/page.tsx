import Link from 'next/link';

export const metadata = {
  title: 'Manuais e Documentação | TRIADE IA',
  description: 'Guias, tutoriais e documentação técnica dos produtos TRIADE IA',
};

export default function ManuaisPage() {
  const manuais = [
    {
      id: 'soaf',
      titulo: 'Manual SOAF',
      descricao: 'Guia completo de uso da plataforma SOAF',
      href: '/manuais/soaf',
    },
    {
      id: 'creditOS',
      titulo: 'Guia CreditOS',
      descricao: 'Como usar o sistema de análise de créditos tributários',
      href: '/creditOS',
    },
  ];

  return (
    <main className=min-h-screen bg-gradient-to-b from-slate-900 to-slate-800>
      <div className=container mx-auto px-4 py-16>
        <h1 className=text-4xl font-bold text-white mb-4>Manuais e Documentação</h1>
        <p className=text-gray-300 mb-12>
          Recursos e guias para ajudá-lo a aproveitar ao máximo nossas soluções
        </p>

        <div className=grid grid-cols-1 md:grid-cols-2 gap-6>
          {manuais.map((manual) => (
            <Link key={manual.id} href={manual.href}>
              <div className=bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition cursor-pointer border border-slate-700>
                <h3 className=text-xl font-semibold text-white mb-2>{manual.titulo}</h3>
                <p className=text-gray-300>{manual.descricao}</p>
              </div>
            </Link>
          ))}
        </div>

        <section className=mt-12 bg-slate-800 rounded-lg p-8 border border-slate-700>
          <h2 className=text-2xl font-semibold text-white mb-4>Precisa de Ajuda?</h2>
          <p className=text-gray-300 mb-4>
            Se não encontrou o que procura, entre em contato com nosso time de suporte.
          </p>
          <a
            href=/atendimento
            className=inline-block bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition
          >
            Entrar em Contato
          </a>
        </section>
      </div>
    </main>
  );
}
