import Link from 'next/link';

export const metadata = {
  title: 'Produtos | TRIADE IA',
  description: 'Conheça os produtos e soluções de inteligência artificial da TRIADE IA',
};

export default function ProdutosPage() {
  const produtos = [
    {
      id: 'creditos-tributarios',
      nome: 'CreditOS',
      descricao: 'Sistema de Análise de Créditos Tributários com IA',
      href: '/creditOS',
    },
    {
      id: 'caos-ao-sistema',
      nome: 'Do Caos ao Sistema',
      descricao: 'Transforme a complexidade em oportunidade',
      href: '/produtos/do-caos-ao-sistema',
    },
    {
      id: 'soaf-empresario',
      nome: 'SOAF - Versão Empresário',
      descricao: 'Plataforma de análise fiscal para empresas',
      href: '/solucoes/soaf-privado/empresario',
    },
    {
      id: 'soaf-contador',
      nome: 'SOAF - Versão Contador',
      descricao: 'Plataforma de análise fiscal para contadores',
      href: '/solucoes/soaf-privado/contador',
    },
  ];

  return (
    <main className=min-h-screen bg-gradient-to-b from-slate-900 to-slate-800>
      <div className=container mx-auto px-4 py-16>
        <h1 className=text-4xl font-bold text-white mb-4>Nossos Produtos</h1>
        <p className=text-gray-300 mb-12>
          Soluções de inteligência artificial para negócios e gestão pública
        </p>

        <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6>
          {produtos.map((produto) => (
            <Link key={produto.id} href={produto.href}>
              <div className=bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition cursor-pointer border border-slate-700 h-full>
                <h3 className=text-lg font-semibold text-white mb-2>{produto.nome}</h3>
                <p className=text-gray-300 text-sm>{produto.descricao}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
