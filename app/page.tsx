import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Clock, RefreshCw, PhoneOff, BarChart2, TrendingDown,
  TrendingUp, Shield, Layers, Wheat, MessageSquare, MonitorSmartphone,
  Stethoscope, Calculator, ShoppingCart, Building2, Truck, CheckCircle2,
} from "lucide-react";
import MaturityModel from "./components/MaturityModel";

export const metadata: Metadata = {
  title: "Reforma Tributária EC 132/2023 — Ferramentas e Consultoria AI-First",
  description:
    "Split Payment, CBS e IBS: entenda a maior reforma tributária desde 1988 e prepare sua empresa com ferramentas gratuitas e consultoria especializada da Tríade IA.",
};

const stats = [
  { numero: "62%", descricao: "das empresas perdem oportunidades por lentidão no primeiro atendimento ao cliente" },
  { numero: "3×", descricao: "mais lento: tempo médio de processo manual versus operação com IA integrada" },
  { numero: "40h", descricao: "mensais desperdiçadas por colaborador em tarefas que podem ser automatizadas" },
];

const problemas = [
  { icon: <Clock className="w-5 h-5" strokeWidth={1.5} />, titulo: "Tempo perdido em tarefas repetitivas", descricao: "A equipe gasta horas em atividades que poderiam ser otimizadas — e o negócio não escala." },
  { icon: <RefreshCw className="w-5 h-5" strokeWidth={1.5} />, titulo: "Retrabalho e erros operacionais", descricao: "Processos manuais geram inconsistências e custos invisíveis que corroem a margem." },
  { icon: <PhoneOff className="w-5 h-5" strokeWidth={1.5} />, titulo: "Oportunidades perdidas por lentidão", descricao: "Enquanto o cliente espera resposta, o concorrente já fechou o negócio." },
  { icon: <BarChart2 className="w-5 h-5" strokeWidth={1.5} />, titulo: "Decisões sem dados confiáveis", descricao: "Gestão baseada em intuição porque os dados existem mas não chegam claros e rápidos." },
  { icon: <TrendingDown className="w-5 h-5" strokeWidth={1.5} />, titulo: "Crescimento limitado pelo custo da equipe", descricao: "Para crescer 30%, a empresa contrata 30%. A margem não expande — só o risco aumenta." },
];

const aplicacoes = [
  { setor: "Clínicas e Laboratórios", icon: <Stethoscope className="w-4 h-4" strokeWidth={1.5} />, desafio: "Recepção sobrecarregada com confirmações manuais. Alta taxa de faltas sem aviso e tempo de espera elevado.", entrega: "Confirmação e triagem automática via WhatsApp. Reagendamento inteligente e lembretes personalizados.", impactos: ["Até -40% de faltas", "+20% de capacidade", "Recepção focada no presencial"] },
  { setor: "Escritórios Contábeis", icon: <Calculator className="w-4 h-4" strokeWidth={1.5} />, desafio: "60% do tempo da equipe em classificação e conferência de documentos. Crescer significa contratar.", entrega: "Análise e classificação automática de documentos fiscais. Alertas de prazo e inconsistências em tempo real.", impactos: ["3× mais clientes atendidos", "-50% tempo operacional", "Equipe focada em consultoria"] },
  { setor: "Cooperativas e Agronegócio", icon: <Wheat className="w-4 h-4" strokeWidth={1.5} />, desafio: "Comunicação manual com centenas de associados. Inadimplência sem visibilidade. Relatórios demoram dias.", entrega: "Comunicação em escala via WhatsApp com IA. Painel de adimplência e relatórios automáticos.", impactos: ["Até -70% tempo de cobrança", "Visibilidade total da carteira", "Comunicação em escala"] },
  { setor: "Distribuidoras", icon: <Truck className="w-4 h-4" strokeWidth={1.5} />, desafio: "Pedidos via WhatsApp gerando erros de digitação. Equipe de vendas sobrecarregada com tarefas operacionais.", entrega: "Pedidos automatizados integrados ao sistema. Time comercial focado em expansão de carteira.", impactos: ["0 erros de digitação", "+35% velocidade", "Equipe focada em vendas"] },
  { setor: "Imobiliárias", icon: <Building2 className="w-4 h-4" strokeWidth={1.5} />, desafio: "Leads chegando por múltiplos canais sem qualificação. Follow-up caindo no esquecimento.", entrega: "Qualificação automática de leads, agendamento de visitas por IA e follow-up contínuo no funil.", impactos: ["+60% taxa de resposta", "Nenhuma oportunidade perdida", "Foco em fechamentos"] },
  { setor: "Comércio e Supermercados", icon: <ShoppingCart className="w-4 h-4" strokeWidth={1.5} />, desafio: "Clientes sem atendimento fora do horário. Campanhas genéricas com baixa retenção.", entrega: "Atendimento inteligente 24h e campanhas personalizadas baseadas no histórico de compra.", impactos: ["Atendimento 24h sem custo extra", "+25% retenção", "Segmentação real"] },
];

const capacidades = [
  { area: "Inteligência de Atendimento", icon: <MessageSquare className="w-5 h-5" strokeWidth={1.5} />, transformacao: "Redesenhamos como sua empresa se relaciona com clientes. A IA opera onde a escala supera a capacidade humana — no primeiro contato, nas respostas frequentes, na triagem. Sua equipe foca no que exige julgamento e empatia.", resultados: ["Atendimento 24h sem aumentar equipe", "Triagem inteligente de prioridades", "Redução de 40% no tempo de resposta"], href: "/atendimento" },
  { area: "Eficiência Operacional", icon: <Layers className="w-5 h-5" strokeWidth={1.5} />, transformacao: "Mapeamos cada processo que consome tempo sem criar valor proporcional. Automatizamos o fluxo, integramos os sistemas e liberamos sua equipe para o trabalho estratégico. Crescimento de receita sem crescimento proporcional de custo.", resultados: ["Processos integrados e sem retrabalho", "Visibilidade em tempo real da operação", "Margem que cresce junto com o volume"], href: "/atendimento" },
  { area: "Inteligência Comercial", icon: <TrendingUp className="w-5 h-5" strokeWidth={1.5} />, transformacao: "Qualificação automática de leads, follow-up sem falhas e funil comercial operando sem depender da memória do vendedor. A IA trata cada prospect com o contexto certo, no momento certo.", resultados: ["Funil comercial sem gargalos manuais", "Follow-up automático e personalizado", "Mais fechamentos com a mesma equipe"], href: "/vendas" },
  { area: "Inteligência Fiscal e Tributária", icon: <Shield className="w-5 h-5" strokeWidth={1.5} />, transformacao: "Para escritórios contábeis e departamentos fiscais que vivem entre prazos, volumes de documentos e risco de penalidade. A IA classifica, cruza, alerta e reduz o custo de revisão.", resultados: ["Menos erros e menos retrabalho", "Obrigações entregues com mais agilidade", "Contador focado em consultoria"], href: "/fiscal" },
  { area: "Presença Digital de Alta Conversão", icon: <MonitorSmartphone className="w-5 h-5" strokeWidth={1.5} />, transformacao: "Sites que existem para gerar resultado — não para parecer bonitos. SEO técnico, funis de captação e IA integrada para personalização e landing pages que convertem o tráfego certo.", resultados: ["Mais leads qualificados por mês", "SEO que cresce e defende posição", "Site como ativo comercial, não custo"], href: "/sites" },
  { area: "IA para Cooperativas e Agronegócio", icon: <Wheat className="w-5 h-5" strokeWidth={1.5} />, transformacao: "Gestão de associados em escala, análise de safra e crédito rural, comunicação em volume. Setor que tem complexidade específica — e precisa de solução que entenda o contexto.", resultados: ["Gestão de centenas de associados sem crescer equipe", "Adimplência monitorada e automatizada", "Relatórios de safra em tempo real"], href: "/agronegocio" },
];

const diferenciais = [
  { numero: "01", titulo: "Resultado antes de tecnologia", corpo: "A maioria das empresas de IA quer vender a ferramenta. Nossa pergunta inicial é diferente: qual o problema real? Qual o custo de não resolver? Qual o ROI mínimo que justifica o investimento? Só depois recomendamos tecnologia.", destaque: "Nunca sugerimos IA onde ela não gera retorno mensurável." },
  { numero: "02", titulo: "Método, não improviso", corpo: "Diagnóstico. Mapa de oportunidades. Roadmap priorizado. Implementação fase a fase. Mensuração de resultados. Evolução contínua. Cada entrega tem critério de sucesso definido antes de começar — e você acompanha cada etapa.", destaque: "Você sabe exatamente o que acontece e por quê em cada fase." },
  { numero: "03", titulo: "Operação AI-First por dentro", corpo: "A TRÍADE IA opera internamente no modelo que entrega. Nossas próprias operações rodam com IA. O que desenvolvemos foi validado na nossa própria operação antes de chegar ao cliente.", destaque: "Não ensinamos o que não praticamos." },
];

export default function Home() {
  return (
    <>
      {/* DARK: Hero — EC 132/2023 */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 py-28 overflow-hidden bg-navy" id="hero">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 100% 80% at 50% -10%, rgba(46,204,113,0.08) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-up flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
            <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">
              REFORMA TRIBUTÁRIA · EC 132/2023 · VIGÊNCIA: JAN 2026
            </span>
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
          </div>
          <h1 className="animate-fade-up-delay-1 font-display font-bold text-5xl md:text-6xl lg:text-7xl text-ice leading-[1.05] tracking-[-0.035em] mb-8">
            EC 132/2023<br />
            redesenhou o sistema<br />
            <span className="text-brand">tributário do Brasil.</span>
          </h1>
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-ice/50 leading-relaxed max-w-2xl mx-auto mb-10">
            O Split Payment vai reter o imposto antes de chegar na sua conta.
            O CBS e IBS substituem tudo que você conhecia sobre PIS, COFINS, ICMS e ISS.
            Quem não se preparar <span className="text-brand font-semibold">vai pagar mais</span> —{" "}
            <span className="whitespace-nowrap">e não vai saber por quê.</span>
          </p>
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link href="/ferramentas" className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold text-sm px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors">
              Calcular o impacto no meu negócio <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/#reforma" className="inline-flex items-center justify-center gap-2 text-ice/50 hover:text-ice text-sm transition-colors px-6 py-3.5 border border-white/[0.08] rounded-lg hover:border-white/[0.18]">
              Entender a reforma
            </Link>
          </div>
          <p className="text-xs text-ice/20 tracking-wide">Análise gratuita · Sem cadastro obrigatório · Baseada em dados reais da sua empresa</p>
        </div>
      </section>

      {/* DARK: O que muda com a Reforma */}
      <section className="py-32 px-6 bg-navy-soft" id="reforma">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">EC 132/2023</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-5 leading-tight">
              O que muda com a Reforma Tributária
            </h2>
            <p className="text-ice/45 text-sm max-w-xl mx-auto leading-relaxed">
              A maior reforma tributária desde 1988. Vigência completa a partir de 2033, mas os impactos operacionais no caixa começam agora.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                label: "CBS — Contribuição sobre Bens e Serviços",
                status: "Federal",
                antes: "PIS + COFINS",
                descricao: "Unifica os dois tributos federais em um único imposto não-cumulativo. Alíquota-padrão estimada em 8,8% sobre receita bruta.",
              },
              {
                label: "IBS — Imposto sobre Bens e Serviços",
                status: "Estadual e Municipal",
                antes: "ICMS + ISS",
                descricao: "Substitui os dois impostos subnacionais. Gestão unificada com repartição automática entre estados e municípios.",
              },
              {
                label: "Split Payment",
                status: "Em vigor Jan 2026",
                antes: "Recolhimento pós-faturamento",
                descricao: "O imposto é retido na própria transação financeira antes de chegar à conta do vendedor — impacto direto no fluxo de caixa.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-white/[0.07] rounded-2xl p-7 bg-navy flex flex-col gap-3">
                <span className="text-xs font-mono font-semibold text-brand/60 uppercase tracking-widest border border-brand/20 px-2 py-0.5 rounded self-start">{item.status}</span>
                <h3 className="font-display font-semibold text-ice text-base leading-snug">{item.label}</h3>
                <p className="text-xs text-ice/30 font-mono uppercase tracking-wider">Substitui: {item.antes}</p>
                <p className="text-ice/50 text-sm leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK: Split Payment */}
      <section className="py-32 px-6 bg-navy" id="split-payment">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">O maior impacto no caixa</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-5 leading-tight">
                Split Payment: imposto retido antes de chegar na sua conta
              </h2>
              <p className="text-ice/55 leading-relaxed mb-6">
                No modelo atual, você fatura, recebe o valor integral e só depois recolhe os impostos. Com o Split Payment, o sistema financeiro retém automaticamente o imposto no momento do pagamento — você recebe o valor já líquido de tributos.
              </p>
              <p className="text-ice/40 text-sm leading-relaxed mb-10">
                O impacto direto é na capital de giro: o dinheiro que antes ficava disponível entre o faturamento e o vencimento dos impostos deixa de existir. Para empresas que usam esse intervalo para financiar operações, a mudança exige planejamento imediato.
              </p>
              <Link href="/ferramentas" className="inline-flex items-center gap-2 bg-brand text-navy font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-brand-dark transition-colors">
                Calcular o impacto no meu negócio <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Modelo atual", descricao: "Empresa fatura → recebe 100% do valor → recolhe os impostos no vencimento (30 a 90 dias depois).", cor: "border-white/[0.07]" },
                { label: "Com Split Payment", descricao: "Empresa fatura → sistema financeiro retém o imposto → empresa recebe somente o valor líquido.", cor: "border-brand/20 bg-brand/[0.04]" },
                { label: "O que isso significa", descricao: "Fim do float tributário. Redução de capital de giro. Gestão de fluxo de caixa exige replanejamento.", cor: "border-white/[0.07]" },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-6 ${item.cor}`}>
                  <p className="text-xs font-mono font-semibold text-ice/40 uppercase tracking-widest mb-2">{item.label}</p>
                  <p className="text-ice/70 text-sm leading-relaxed">{item.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT: Por que agir agora */}
      <section className="py-32 px-6 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <span className="text-xs font-semibold text-ink-muted uppercase tracking-widest">O cenário atual</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-3 mb-5 leading-tight">
              Por que organizações tradicionais estão perdendo terreno
            </h2>
            <p className="text-ink-soft leading-relaxed text-sm">Não é falta de esforço. É falta de estrutura para operar na velocidade que o mercado exige.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {stats.map((s, i) => (
              <div key={i} className="border-l-2 border-brand pl-6">
                <p className="font-display font-bold text-5xl text-ink mb-3">{s.numero}</p>
                <p className="text-ink-soft text-sm leading-relaxed">{s.descricao}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemas.map((p, i) => (
              <div key={i} className="border border-paper-border rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-paper-soft flex items-center justify-center text-ink-muted mb-4">{p.icon}</div>
                <h3 className="font-display font-semibold text-ink text-base mb-2">{p.titulo}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{p.descricao}</p>
              </div>
            ))}
            <Link href="/diagnostico" className="group border border-brand/25 rounded-xl p-6 bg-brand/[0.04] hover:bg-brand/[0.07] hover:border-brand/40 transition-all flex flex-col justify-between">
              <div>
                <p className="font-display font-semibold text-ink text-base mb-2">Reconheceu algum desses cenários?</p>
                <p className="text-ink-soft text-sm leading-relaxed mb-6">O Diagnóstico AI-First identifica onde a IA gera retorno concreto para o seu negócio — gratuito e sem compromisso.</p>
              </div>
              <span className="inline-flex items-center gap-2 text-brand text-sm font-semibold group-hover:gap-3 transition-all">
                Solicitar diagnóstico <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* DARK: Maturidade */}
      <section className="py-32 px-6 bg-navy-soft" id="metodologia">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest">Modelo de Maturidade</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-5">Em qual estágio está sua empresa?</h2>
            <p className="text-ice/45 text-sm max-w-xl mx-auto leading-relaxed">A maioria das organizações ainda opera nos estágios iniciais. O Diagnóstico AI-First mapeia o caminho mais rápido até o topo.</p>
          </div>
          <MaturityModel />
          <div className="text-center mt-14 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quiz" className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold text-sm px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors">
              Descobrir meu nível agora <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/metodologia" className="inline-flex items-center justify-center text-ice/45 hover:text-ice text-sm transition-colors px-6 py-3 border border-white/[0.08] rounded-lg hover:border-white/[0.18]">
              Ver a metodologia completa
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHT: Aplicações Reais */}
      <section className="py-32 px-6 bg-paper-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-ink-muted uppercase tracking-widest">Aplicações Reais</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-3 mb-5">O que acontece quando uma empresa vira AI-First</h2>
            <p className="text-ink-soft text-sm max-w-xl mx-auto">Cenários de transformação por segmento. Cada caso é um padrão que se repete em organizações similares.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {aplicacoes.map((a, i) => (
              <div key={i} className="bg-white border border-paper-border rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand/10 border border-brand/15 flex items-center justify-center text-brand flex-shrink-0">{a.icon}</div>
                  <span className="text-xs font-semibold text-ink-muted uppercase tracking-widest">{a.setor}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-3.5 rounded-xl bg-paper-soft border border-paper-border">
                    <p className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-1.5">Desafio</p>
                    <p className="text-ink-soft text-sm leading-relaxed">{a.desafio}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-brand/[0.06] border border-brand/15">
                    <p className="text-xs font-semibold text-brand/70 uppercase tracking-widest mb-1.5">Com IA</p>
                    <p className="text-ink text-sm leading-relaxed">{a.entrega}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {a.impactos.map((imp, j) => (
                    <span key={j} className="text-xs font-medium text-brand bg-brand/[0.08] border border-brand/15 rounded-full px-3 py-1">{imp}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sofia CTA — experiência real com agente IA */}
          <div className="mt-16 rounded-2xl border border-brand/20 bg-white p-10 md:p-14 text-center relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(46,204,113,0.07) 0%, transparent 65%)" }} />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block text-xs font-semibold text-brand border border-brand/20 rounded-full px-4 py-1.5 mb-6 uppercase tracking-widest">
                Experiência Real · Ao Vivo
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4 leading-tight">
                Converse agora com a Sof[IA]
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed mb-3 max-w-lg mx-auto">
                Nossa agente de atendimento com IA responde dúvidas sobre como a Inteligência Artificial pode transformar sua empresa — com contexto, raciocínio e personalidade.
              </p>
              <p className="text-xs text-ink-muted mb-8 max-w-md mx-auto">
                Não é um chatbot com respostas prontas. É uma demonstração real do que um agente IA inteligente entrega.
              </p>
              <a
                href={`https://wa.me/556496123145?text=${encodeURIComponent("Olá, Sof[IA]! Vi o site da Tríade IA e quero entender como a IA pode transformar minha empresa.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-brand text-navy font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-brand-dark transition-colors"
              >
                <MessageSquare className="w-4 h-4" strokeWidth={2} />
                Falar com a Sof[IA] agora
              </a>
              <p className="text-xs text-ink-muted mt-4">Via WhatsApp · Resposta imediata · Sem cadastro necessário</p>
            </div>
          </div>
        </div>
      </section>

      {/* DARK: Diagnóstico */}
      <section className="py-32 px-6 bg-navy-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-semibold text-brand uppercase tracking-widest">Principal oferta</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-5 leading-tight">Diagnóstico AI-First</h2>
              <p className="text-ice/55 leading-relaxed mb-10">Antes de implementar qualquer tecnologia, entendemos seu negócio. Mapeamos operações, identificamos gargalos e construímos um Roadmap com as oportunidades de maior retorno em ordem de prioridade.</p>
              {[
                { step: "01", titulo: "Mapeamento da operação", desc: "Entendemos como cada processo funciona hoje, onde está o gargalo e quanto custa em tempo e dinheiro." },
                { step: "02", titulo: "Identificação de oportunidades", desc: "Priorizamos as iniciativas de maior ROI — não o que é mais tecnológico, mas o que gera mais resultado." },
                { step: "03", titulo: "Roadmap AI-First personalizado", desc: "Plano fase a fase com cronograma, investimento estimado e critérios claros de sucesso." },
                { step: "04", titulo: "Acompanhamento e evolução", desc: "Monitoramos resultados, ajustamos e evoluímos a operação conforme o negócio cresce." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4 mb-5">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-brand/40 flex items-center justify-center text-brand font-display font-semibold text-xs">{s.step}</div>
                  <div><p className="font-display font-semibold text-ice text-sm mb-1">{s.titulo}</p><p className="text-ice/40 text-sm leading-relaxed">{s.desc}</p></div>
                </div>
              ))}
              <Link href="/diagnostico" className="mt-4 inline-flex items-center gap-2 bg-brand text-navy font-semibold text-sm px-6 py-3.5 rounded-lg hover:bg-brand-dark transition-colors">
                Solicitar Diagnóstico Gratuito <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
            <div className="border border-white/[0.07] rounded-2xl p-8">
              <p className="text-xs font-semibold text-ice/25 uppercase tracking-widest mb-6">O que você recebe</p>
              {[
                { titulo: "Relatório de Maturidade Digital", desc: "Avaliação objetiva do estágio atual nos 5 níveis AI-First." },
                { titulo: "Mapa de Oportunidades", desc: "Iniciativas priorizadas por ROI — não por complexidade tecnológica." },
                { titulo: "Roadmap Estratégico", desc: "Plano fase a fase com cronograma, investimento e KPIs." },
                { titulo: "Sessão Estratégica (60–90 min)", desc: "Reunião com especialista para análise profunda do seu contexto." },
              ].map((e, i) => (
                <div key={i} className="flex gap-3 mb-5">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/15 border border-brand/25 flex items-center justify-center mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-brand" /></div>
                  <div><p className="font-display font-semibold text-ice text-sm mb-1">{e.titulo}</p><p className="text-ice/38 text-xs leading-relaxed">{e.desc}</p></div>
                </div>
              ))}
              <div className="border-t border-white/[0.06] pt-5 mt-2">
                <p className="text-xs text-ice/25 leading-relaxed">Gratuito · Sem obrigação de contratação · Sem pitch de vendas na sessão.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT: Capacidades */}
      <section className="py-32 px-6 bg-paper">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-semibold text-ink-muted uppercase tracking-widest">Capacidades</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-3 mb-5 max-w-2xl leading-tight">
              Inteligência Artificial aplicada em cada área crítica do negócio
            </h2>
            <p className="text-ink-soft text-sm max-w-xl leading-relaxed">
              Não entregamos ferramentas. Entregamos transformações — com impacto mensurável em operação, receita e margem.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capacidades.map((c, i) => (
              <Link key={i} href={c.href} className="group bg-white border border-paper-border rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-brand/30 transition-all flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/15 flex items-center justify-center text-brand group-hover:bg-brand/20 transition-colors">{c.icon}</div>
                  <h3 className="font-display font-semibold text-ink text-sm leading-snug">{c.area}</h3>
                </div>
                <p className="text-ink-soft text-sm leading-relaxed mb-6 flex-1">{c.transformacao}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {c.resultados.map((r, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-ink-soft">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand flex-shrink-0" strokeWidth={2} />{r}
                    </li>
                  ))}
                </ul>
                <span className="text-brand text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                  Explorar capacidade <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHT: Diferenciais */}
      <section className="py-32 px-6 bg-paper-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-semibold text-ink-muted uppercase tracking-widest">Nossa diferença</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink mt-3">Por que a TRÍADE IA</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diferenciais.map((d) => (
              <div key={d.numero} className="bg-white border border-paper-border rounded-2xl p-8 shadow-sm relative overflow-hidden">
                <span className="absolute top-4 right-5 font-display font-bold text-8xl text-paper-soft select-none leading-none">{d.numero}</span>
                <div className="relative z-10">
                  <h3 className="font-display font-semibold text-ink text-lg mb-4">{d.titulo}</h3>
                  <p className="text-ink-soft text-sm leading-relaxed mb-5">{d.corpo}</p>
                  <p className="text-xs font-semibold text-brand border-l-2 border-brand pl-3 leading-relaxed">{d.destaque}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK: CTA Final */}
      <section className="py-32 px-6 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl border border-brand/15 p-16 md:p-24 text-center overflow-hidden" style={{ background: "radial-gradient(ellipse at center, #051e10 0%, #05121F 70%)" }}>
            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold text-brand border border-brand/20 rounded-full px-4 py-1 mb-6 uppercase tracking-widest">Próximo passo</span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mb-5 max-w-2xl mx-auto leading-tight">Pronto para construir uma empresa que lidera?</h2>
              <p className="text-ice/45 text-sm mb-10 max-w-md mx-auto leading-relaxed">Converse com nossa equipe. Sem pitch, sem promessa genérica — só uma análise honesta do potencial da IA no seu negócio.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/diagnostico" className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold text-sm px-8 py-3.5 rounded-lg hover:bg-brand-dark transition-colors">
                  Solicitar Diagnóstico Gratuito <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </Link>
                <Link href="/quiz" className="inline-flex items-center justify-center text-ice/45 hover:text-ice text-sm transition-colors px-6 py-3.5 border border-white/[0.08] rounded-lg hover:border-white/[0.18]">
                  Fazer o Quiz de Maturidade
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
