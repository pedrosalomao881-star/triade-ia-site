import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Manual de Uso — SOAF v3.0 · Tríade IA",
  description:
    "Guia completo do Sistema Operacional de Auditoria Fiscal com IA. 11 módulos cobrindo Terminal Fiscal, Squad de Agentes, Investigador de Sonegação, Apontador de Omissão e mais.",
};

const modulos = [
  {
    num: "01",
    titulo: "Login e Perfis de Acesso",
    tempo: "0:30 – 1:30",
    conteudo: `Na tela de acesso você vê dois campos: usuário e senha. Antes de digitar, observe o seletor de perfil acima — GESTOR, AUDITOR ou LEITURA. Selecione o perfil correspondente ao seu cargo.

O perfil AUDITOR é o mais comum — dá acesso a todos os módulos operacionais. GESTOR vê relatórios consolidados. LEITURA é somente consulta, sem ações.

No canto esquerdo, o contador regressivo mostra os dias restantes até a extinção do ISS em 01/01/2033 — um lembrete constante do prazo da Reforma Tributária.

Digite usuário e senha e clique em Acessar Sistema.`,
  },
  {
    num: "02",
    titulo: "Dashboard",
    tempo: "1:30 – 3:30",
    conteudo: `O Dashboard é o ponto de partida de cada sessão. No topo, quatro indicadores críticos do município: ISS Arrecadado (R$2,84M), IPTU Lançado (R$18,4M), Dívida Ativa (R$41,2M) e 3.847 Contribuintes ISS cadastrados.

As setas verdes e vermelhas mostram variação em relação ao período anterior — de imediato você sabe se a arrecadação está acima ou abaixo da meta.

Logo abaixo, a Central de Alertas Prioritários: prazos decadenciais vencendo em 47 dias, 14 prestadores sem DES, 8 execuções em risco de prescrição intercorrente e penalidades CBS/IBS entrando em vigor em agosto/2026.

No lado direito, o contador regressivo do ISS e os cards dos 7 Agentes IA disponíveis. Um clique abre o Terminal Fiscal com o agente ativo.`,
    dica: "O alerta em roxo sobre CBS/IBS é crítico — indica que a Resolução CGIBS 6/2026 impõe penalidades a partir de agosto/2026.",
  },
  {
    num: "03",
    titulo: "Terminal Fiscal",
    tempo: "3:30 – 6:00",
    conteudo: `O Terminal Fiscal é o coração do SOAF. Aqui você consulta os 7 agentes especializados usando linguagem natural — escreva como faria uma pergunta para um colega especialista.

No topo, selecione o agente para o caso que vai analisar. O Consultor de Gestão Tributária responde questões estratégicas. O Agente ISSQN cuida do imposto sobre serviços. O Investigador trata de sonegação.

As consultas sugeridas aparecem automaticamente: "Analisar risco de decadência em lançamentos de ISS de 2019", "Identificar prestadores com obrigações omissas no último trimestre", "Quais contribuintes têm maior risco de inadimplência?"

O agente consulta a base normativa — CTN art. 173, LC 116, CTM municipal — e entrega análise com fundamentação legal, prazo exato e ação recomendada. No rodapé: nível de confiança ALTO/MÉDIO/BAIXO e normativas citadas.`,
  },
  {
    num: "04",
    titulo: "Squad de Agentes",
    tempo: "6:00 – 7:30",
    conteudo: `Na aba Squad de Agentes você vê a arquitetura completa: 7 agentes especializados, cada um com nível de especialização e skills disponíveis.

Secretário de Finanças — visão executiva, relatórios de alto impacto.
Consultor de Gestão Tributária — análise estratégica e indicadores fiscais.
Agente IPTU/ITR/IBS Imóveis — tributos sobre propriedade e reforma.
Agente ISSQN/IBS Consumo — serviços, NFS-e, transição ISS para IBS.
Agente Cadastro Fiscal — CNPJ, irregularidades cadastrais, SEFAZ.
Agente Contencioso Administrativo — autos de infração, defesas, PAF.
Agente Contencioso Jurídico — execução fiscal, embargos, representação ao MP.

A legenda das 10 Skills — Estratégico, Jurídico, Investigador, Evidências, Relator, Inteligência, Extrator, Reforma, Classificador, Preparador — orienta o agente a responder de um ângulo específico.`,
  },
  {
    num: "05",
    titulo: "Painel Auditor",
    tempo: "7:30 – 8:30",
    conteudo: `O Painel Auditor é o dashboard pessoal do auditor. Mostra suas consultas do mês, alertas resolvidos, créditos auditados e prazos em risco.

As Consultas Recentes listam seus últimos casos com o agente usado e o nível de confiança da análise. Um clique reabre a consulta completa.

Nos Meus Alertas, apenas os alertas atribuídos a você — filtrado do total da Central. O botão Gerenciar Alertas leva direto para a Central com o filtro aplicado.

O Acesso Rápido aos Agentes permite abrir o Terminal Fiscal diretamente no agente certo para o tributo que vai trabalhar: IPTU/ITB, ISSQN/IBS, Cadastro, Cont. Adm, Cont. Jur.`,
  },
  {
    num: "06",
    titulo: "Cadastro de Contribuintes",
    tempo: "8:30 – 9:30",
    conteudo: `O Cadastro reúne todos os contribuintes registrados no município — 12 cadastrados com 8 pendências e R$305.600 em risco estimado.

A barra de pesquisa aceita nome, CNPJ ou inscrição municipal. Os filtros por situação são fundamentais: Regular, Pendente, Omisso e Dívida Ativa.

Cada linha mostra regime tributário, situação, data da última declaração e débito estimado. O sistema já calcula o potencial de recuperação.

Clique em qualquer contribuinte para abrir o perfil completo e acionar o agente ISSQN ou Investigador diretamente para aquele CNPJ.`,
  },
  {
    num: "07",
    titulo: "Apontador de Omissão",
    tempo: "9:30 – 10:45",
    conteudo: `O Apontador de Omissão é um dos módulos mais poderosos para geração de receita imediata. O sistema varre automaticamente os contribuintes e identifica omissões por tipo: DES Não Entregue, NFS-e Omissa, Divergência Cadastral e IPTU em Aberto.

7 omissões identificadas com estimativa total de R$159.100 em tributos não recolhidos. Cada item mostra contribuinte, tipo, período, estimativa e nível de risco — ALTO ou CRÍTICO.

O botão de ação em cada linha abre o Terminal Fiscal com o agente certo já carregado e o contexto do contribuinte preenchido. Em segundos você tem o embasamento legal para a notificação.`,
    dica: "Gamma Construções Ltda — NFS-e omissa Mar/2026, R$54.000 estimado, CRÍTICO. Ação imediata recomendada.",
  },
  {
    num: "08",
    titulo: "Investigador de Sonegação",
    tempo: "10:45 – 12:30",
    conteudo: `O Investigador de Sonegação é a inteligência fiscal avançada do SOAF. Calcula um Score de Risco de 1 a 100 para cada contribuinte cruzando múltiplos indicadores: subfaturamento, contratos públicos sem NFS-e correspondente, cancelamentos suspeitos, divergência NFS-e com SEFIN.

Score acima de 75 é CRÍTICO — ação imediata. Entre 51 e 75 é ALTO. Abaixo de 50, monitoramento.

Ômega Construções atingiu score 88 com potencial sonegado de R$2.615.000. Três indícios identificados: subfaturamento em obra de R$2,1M licenciada pelo SEINFRA (peso 30), contrato público sem NFS-e correspondente — Prefeitura Municipal R$340.000 (peso 25), cancelamentos suspeitos 38% acima da média setorial (peso 21).

Os botões permitem três ações diretas: Analisar com Agente IA, Gerar Auto de Infração, ou Representação ao MP.`,
    dica: "Sigilo Fiscal EC/TN art. 198 — os dados são usados exclusivamente para investigação administrativa. A caracterização de crime tributário (Lei 8.137/1990) leva à lavratura de auto de infração ou encaminhamento ao Ministério Público.",
  },
  {
    num: "09",
    titulo: "Classificador de Conformidade e Órgão Preparador",
    tempo: "12:30 – 13:45",
    conteudo: `O Classificador de Conformidade recebe uma descrição de operação em linguagem livre e determina o tributo aplicável, alíquota, competência e impacto da Reforma Tributária. Ideal para operações atípicas ou questionamentos de contribuintes.

O Órgão Preparador vai um passo além: gera os documentos fiscais oficiais. Selecione o tipo — Auto de Infração, Notificação Fiscal, Despacho Decisório ou Parecer Técnico — preencha os dados do caso e o agente gera o documento com fundamentação legal completa, pronto para revisão e assinatura.`,
  },
  {
    num: "10",
    titulo: "Documentos e Portal NF-e",
    tempo: "13:45 – 15:00",
    conteudo: `Em Documentos, faça upload de PDFs, planilhas, imagens e XMLs de NF-e. O sistema processa e disponibiliza para análise pelos agentes. Arraste o arquivo ou clique para selecionar — até 50MB por arquivo.

O Portal NF-e traz diretamente os Informes Técnicos e Notas Técnicas publicados pela SEFAZ Nacional — sincronização automática a cada 24h. Cada item tem um botão Explicar com IA: clique e o sistema traduz o documento técnico em linguagem prática para o auditor municipal, com o impacto específico para o município.`,
  },
  {
    num: "11",
    titulo: "Central de Alertas e Base Normativa",
    tempo: "15:00 – 16:30",
    conteudo: `A Central de Alertas consolida todos os avisos do sistema com filtro por criticidade. Cada alerta tem botões Consultar IA e Resolver — o primeiro abre o Terminal com contexto carregado, o segundo marca como tratado.

A Base Normativa reúne as 23 normativas que fundamentam todas as análises do SOAF: EC 132/2023, Resolução CGIBS 6/2026, Decreto 12.955/2026, CTN, LC 116, LC 214, CTM Itumbiara e jurisprudências do STJ e STF. Use a busca e os filtros por tipo para encontrar o artigo exato que você precisa citar.`,
  },
];

export default function ManualSOAF() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-16 px-6 bg-navy border-b border-white/[0.07] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(46,204,113,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            href="/manuais"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-ice/30 hover:text-brand transition-colors mb-8 uppercase tracking-widest"
          >
            <ArrowLeft className="w-3 h-3" strokeWidth={2} /> Manuais
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest border border-brand/20 px-2 py-0.5">
              SOAF v3.0
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ice mb-4 leading-tight tracking-[-0.035em]">
            Manual de Uso
          </h1>
          <p className="text-ice/45 text-sm leading-relaxed max-w-xl mb-8">
            Sistema Operacional de Auditoria Fiscal com Inteligência Artificial.
            Para auditores, gestores e secretarias municipais.
          </p>
          <div className="flex items-center gap-8">
            {[
              { num: "11", label: "Módulos" },
              { num: "7", label: "Agentes IA" },
              { num: "23", label: "Normativas" },
              { num: "17 min", label: "Duração" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-xl text-brand">{s.num}</div>
                <div className="text-xs font-mono text-ice/25 uppercase tracking-widest mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOC */}
      <section className="bg-navy-soft border-b border-white/[0.06] px-6 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-mono text-ice/25 uppercase tracking-widest mb-5">Índice</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {modulos.map((m) => (
              <a
                key={m.num}
                href={`#mod${m.num}`}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-ice/50 hover:text-brand hover:bg-brand/[0.06] transition-all text-sm"
              >
                <span className="font-mono text-xs text-brand/40 min-w-[20px]">{m.num}</span>
                {m.titulo}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="bg-navy px-6 py-4">
        <div className="max-w-4xl mx-auto divide-y divide-white/[0.06]">
          {modulos.map((m) => (
            <div key={m.num} id={`mod${m.num}`} className="py-16 scroll-mt-20">
              <div className="flex items-start gap-4 mb-8">
                <span className="font-mono text-xs font-semibold text-brand/60 bg-brand/[0.08] border border-brand/20 px-2.5 py-1 whitespace-nowrap mt-1">
                  MÓDULO {m.num}
                </span>
                <div>
                  <h2 className="font-display font-bold text-xl text-ice leading-tight">
                    {m.titulo}
                  </h2>
                  <p className="text-xs font-mono text-ice/25 mt-1">{m.tempo}</p>
                </div>
              </div>

              <div className="border-l-2 border-brand/25 pl-6 mb-6">
                <p className="text-xs font-mono font-semibold text-brand/50 uppercase tracking-widest mb-4">
                  Narração
                </p>
                {m.conteudo.split("\n\n").map((para, i) => (
                  <p key={i} className="text-ice/60 text-sm leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>

              {m.dica && (
                <div className="bg-yellow-500/[0.05] border border-yellow-500/20 rounded-lg px-5 py-4 text-sm text-yellow-200/70">
                  <span className="font-semibold text-yellow-200/90 mr-1.5">Destaque:</span>
                  {m.dica}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-soft border-t border-white/[0.06] px-6 py-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono text-ice/25 uppercase tracking-widest mb-2">Pronto para usar</p>
            <p className="font-display font-semibold text-ice text-lg">Acesse o SOAF v3.0</p>
            <p className="text-ice/40 text-sm mt-1">Plataforma de auditoria fiscal para prefeituras</p>
          </div>
          <a
            href="https://app.triadeiaos.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-navy font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Acessar plataforma
          </a>
        </div>
      </section>
    </>
  );
}
