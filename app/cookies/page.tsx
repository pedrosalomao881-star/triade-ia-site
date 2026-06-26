import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies da TRÍADE IA — quais cookies utilizamos, para quê e como gerenciá-los.",
};

const ULTIMA_ATUALIZACAO = "26 de junho de 2026";
const EMPRESA = "TRÍADE IA";
const EMAIL = "pedrosalomao881@gmail.com";

const cookies = [
  {
    categoria: "Essenciais",
    cor: "border-l-brand",
    descricao: "Necessários para o funcionamento básico do site. Não podem ser desativados.",
    obrigatorio: true,
    exemplos: [
      { nome: "soaf_demo_session", origem: "TRÍADE IA", duracao: "8 horas", finalidade: "Autenticação na plataforma SOAF" },
      { nome: "cookie_consent", origem: "TRÍADE IA", duracao: "1 ano", finalidade: "Armazenar sua preferência de cookies" },
    ],
  },
  {
    categoria: "Análise e Desempenho",
    cor: "border-l-blue-500",
    descricao: "Permitem entender como os visitantes utilizam o site, para melhorarmos continuamente a experiência.",
    obrigatorio: false,
    exemplos: [
      { nome: "_ga, _ga_*", origem: "Google Analytics", duracao: "2 anos", finalidade: "Análise de tráfego, páginas visitadas e comportamento de navegação" },
      { nome: "_gid", origem: "Google Analytics", duracao: "24 horas", finalidade: "Distinção entre usuários" },
    ],
  },
  {
    categoria: "Marketing e Publicidade",
    cor: "border-l-purple-500",
    descricao: "Utilizados para exibir anúncios relevantes e medir a eficácia de campanhas. Só ativados com seu consentimento.",
    obrigatorio: false,
    exemplos: [
      { nome: "_fbp", origem: "Meta (Facebook/Instagram)", duracao: "3 meses", finalidade: "Rastreamento de conversões para campanhas no Instagram e Facebook Ads" },
      { nome: "fr", origem: "Meta", duracao: "3 meses", finalidade: "Identificação para exibição de anúncios relevantes" },
    ],
  },
  {
    categoria: "Funcionais",
    cor: "border-l-amber-500",
    descricao: "Melhoram a experiência ao lembrar preferências e configurações do usuário.",
    obrigatorio: false,
    exemplos: [
      { nome: "triade_pref", origem: "TRÍADE IA", duracao: "30 dias", finalidade: "Armazenar preferências de tema e interface" },
    ],
  },
];

export default function Cookies() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-navy py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">Transparência · LGPD</span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-3 leading-tight tracking-[-0.035em]">
            Política de Cookies
          </h1>
          <p className="text-ice/40 text-sm">Última atualização: {ULTIMA_ATUALIZACAO}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="space-y-10 text-ink-soft leading-relaxed">

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">O que são cookies?</h2>
            <p className="text-sm">
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você acessa um site. Eles permitem que o site reconheça seu dispositivo em visitas futuras, lembre suas preferências e colete informações sobre como você utiliza o serviço.
            </p>
            <p className="mt-3 text-sm">
              A <strong className="text-ink">{EMPRESA}</strong> utiliza cookies para garantir o funcionamento adequado dos serviços, melhorar a experiência de navegação e, com seu consentimento, para análise de uso e marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-4">Cookies que utilizamos</h2>
            <div className="space-y-6">
              {cookies.map((cat, i) => (
                <div key={i} className={`border-l-4 ${cat.cor} pl-5 pr-0`}>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold text-ink text-base">{cat.categoria}</h3>
                    {cat.obrigatorio ? (
                      <span className="text-xs font-mono font-semibold text-brand/70 border border-brand/30 px-1.5 py-0.5 rounded uppercase tracking-wider">Obrigatório</span>
                    ) : (
                      <span className="text-xs font-mono font-semibold text-ink-muted border border-paper-border px-1.5 py-0.5 rounded uppercase tracking-wider">Opcional</span>
                    )}
                  </div>
                  <p className="text-sm mb-4">{cat.descricao}</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-paper-soft">
                          <th className="text-left p-2.5 font-semibold text-ink border border-paper-border">Cookie</th>
                          <th className="text-left p-2.5 font-semibold text-ink border border-paper-border">Origem</th>
                          <th className="text-left p-2.5 font-semibold text-ink border border-paper-border">Duração</th>
                          <th className="text-left p-2.5 font-semibold text-ink border border-paper-border">Finalidade</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cat.exemplos.map((c, j) => (
                          <tr key={j} className="border-t border-paper-border">
                            <td className="p-2.5 font-mono text-ink border border-paper-border">{c.nome}</td>
                            <td className="p-2.5 border border-paper-border text-ink-soft">{c.origem}</td>
                            <td className="p-2.5 border border-paper-border text-ink-soft">{c.duracao}</td>
                            <td className="p-2.5 border border-paper-border text-ink-soft">{c.finalidade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">Como gerenciar cookies</h2>
            <p className="text-sm mb-4">
              Você pode controlar e gerenciar cookies de diferentes formas:
            </p>
            <div className="space-y-3">
              {[
                {
                  titulo: "Banner de consentimento",
                  desc: "Ao acessar o site pela primeira vez, você pode aceitar ou recusar cookies opcionais pelo banner que é exibido. É possível rever suas preferências a qualquer momento clicando em 'Gerenciar cookies' no rodapé.",
                },
                {
                  titulo: "Configurações do navegador",
                  desc: "A maioria dos navegadores permite bloquear ou excluir cookies. Consulte a documentação do seu navegador: Chrome, Firefox, Safari, Edge ou Opera.",
                },
                {
                  titulo: "Opt-out do Google Analytics",
                  desc: "Instale o complemento de opt-out do Google Analytics disponível em tools.google.com/dlpage/gaoptout para desativar a coleta de dados pelo Google Analytics em todos os sites.",
                },
                {
                  titulo: "Preferências de anúncios Meta",
                  desc: "Gerencie suas preferências de publicidade do Facebook/Instagram em facebook.com/adpreferences.",
                },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-paper-soft rounded-xl border border-paper-border">
                  <p className="font-semibold text-ink text-sm mb-1">{item.titulo}</p>
                  <p className="text-sm text-ink-soft">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm">
              Atenção: desativar cookies essenciais pode comprometer o funcionamento adequado do site e dos sistemas da {EMPRESA}.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">Atualizações desta Política</h2>
            <p className="text-sm">
              Esta Política de Cookies pode ser atualizada quando adicionarmos novos serviços ou parceiros que utilizem cookies. A data de atualização é indicada no topo desta página. Recomendamos revisá-la periodicamente.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">Contato</h2>
            <p className="text-sm">Para dúvidas sobre esta Política de Cookies:</p>
            <div className="mt-3 p-4 bg-paper-soft rounded-xl border border-paper-border">
              <p className="text-sm"><strong className="text-ink">{EMPRESA}</strong></p>
              <p className="text-sm"><a href={`mailto:${EMAIL}`} className="text-brand hover:underline">{EMAIL}</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
