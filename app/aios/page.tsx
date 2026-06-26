import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, Bot, Cpu, Network, Database, BarChart3,
  CheckCircle2, AlertTriangle, Zap, Building2, Scale, Stethoscope,
  Calculator, Wheat, Shield,
} from "lucide-react";
import { WA_DEFAULT } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "AI Operating System | TRÍADE IA",
  description:
    "Não é chatbot. É um Sistema Operacional de IA — agentes especializados orquestrando processos inteiros para empresas que precisam crescer sem crescer o time.",
};

const diferencas = [
  {
    aspecto: "Comportamento",
    chatbot: "Reativo — só age quando perguntado",
    aios: "Proativo — executa processos sem esperar comando",
  },
  {
    aspecto: "Escopo",
    chatbot: "Responde perguntas isoladas",
    aios: "Opera fluxos inteiros de ponta a ponta",
  },
  {
    aspecto: "Especialização",
    chatbot: "Genérico para qualquer assunto",
    aios: "Nichado — conhece a fundo um setor específico",
  },
  {
    aspecto: "Integração",
    chatbot: "Ferramenta isolada",
    aios: "Agentes orquestrados que se comunicam entre si",
  },
  {
    aspecto: "Base de conhecimento",
    chatbot: "Treinamento geral",
    aios: "Base proprietária do nicho (leis, processos, regras do setor)",
  },
  {
    aspecto: "Resultado",
    chatbot: "Resposta — o humano ainda decide e age",
    aios: "Entrega — o sistema fecha o ciclo operacional",
  },
];

const etapas = [
  {
    num: "01",
    titulo: "Nicho definido",
    desc: "Um AIOS não serve para tudo — e é isso que o torna poderoso. Mapeamos os processos operacionais e de backoffice específicos do seu setor antes de escrever uma linha de código.",
    icon: <Building2 className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    num: "02",
    titulo: "Squad Agêntica",
    desc: "Em vez de um agente genérico, montamos um time de agentes especializados: cada um com função clara (financeiro, jurídico, comercial, operacional) e alçada definida de decisão.",
    icon: <Network className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    num: "03",
    titulo: "Base de Conhecimento Nichada",
    desc: "A inteligência do sistema vem de uma base construída com o know-how real do setor: legislações, processos internos, regras de negócio, histórico de casos e melhores práticas.",
    icon: <Database className="w-5 h-5" strokeWidth={1.5} />,
  },
  {
    num: "04",
    titulo: "OS Instalável e Escalável",
    desc: "O resultado é um produto instalável — não um serviço artesanal. O mesmo AIOS pode ser replicado em múltiplas empresas do mesmo segmento com custo marginal próximo de zero.",
    icon: <Cpu className="w-5 h-5" strokeWidth={1.5} />,
  },
];

const especialistas = [
  { num: "01", nome: "Auditor Estratégico", funcao: "Prioridade de casos por risco" },
  { num: "02", nome: "Interpretador Jurídico", funcao: "Legislação · CTN · EC 132/2023" },
  { num: "03", nome: "Auditor Investigador", funcao: "Cruzamento de dados fiscais" },
  { num: "04", nome: "Estruturador de Evidências", funcao: "Provas e fundamentos do auto" },
  { num: "05", nome: "Redator Oficial", funcao: "Minutas, autos e notificações" },
  { num: "06", nome: "Inteligência Tributária", funcao: "Cálculos, multas e REFIS" },
  { num: "07", nome: "Extrator de Dados", funcao: "Leitura de qualquer documento" },
  { num: "08", nome: "Observatório da Reforma", funcao: "IBS, CBS e transição fiscal" },
  { num: "09", nome: "Visualizador Inteligente", funcao: "Dashboards e análise visual" },
];

const nichos = [
  { icon: <Calculator className="w-5 h-5" strokeWidth={1.5} />, setor: "Contabilidade", produto: "Contab OS", desc: "Classificação, obrigações, prazos e análise — o escritório cresce sem contratar." },
  { icon: <Scale className="w-5 h-5" strokeWidth={1.5} />, setor: "Advocacia", produto: "Legal OS", desc: "Pesquisa jurídica, prazos processuais, petições e contratos — escritório com capacidade de boutique." },
  { icon: <Stethoscope className="w-5 h-5" strokeWidth={1.5} />, setor: "Saúde", produto: "Clínica OS", desc: "Recepção, triagem, agendamento e follow-up — clínica operando sem gargalo humano." },
  { icon: <Wheat className="w-5 h-5" strokeWidth={1.5} />, setor: "Agronegócio", produto: "Agro OS", desc: "Gestão de safra, crédito rural, associados e comunicação em escala." },
  { icon: <Shield className="w-5 h-5" strokeWidth={1.5} />, setor: "Gestão Pública", produto: "Fiscal OS ✓", desc: "Auditoria fiscal, auto de infração e inteligência tributária para prefeituras. Já implantado." },
  { icon: <BarChart3 className="w-5 h-5" strokeWidth={1.5} />, setor: "Financeiro", produto: "Finance OS", desc: "Conciliação, cobranças, fluxo de caixa e análise — operação financeira sem retrabalho." },
];

export default function AiosPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand border border-brand/30 rounded-full px-4 py-1.5 mb-8 uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" strokeWidth={2} />
            AI Operating System
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-ice leading-[1.05] tracking-tight mb-6">
            Não é mais um chatbot.<br />
            <span className="text-brand">É um sistema operacional.</span>
          </h1>
          <p className="text-lg text-ice/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Empresas que crescem sem crescer o time estão operando com AI OS — agentes especializados orquestrando processos inteiros, automatizando decisões e entregando resultados sem esperar um humano acionar cada etapa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Quero um AI OS para minha empresa
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <Link
              href="/diagnostico"
              className="text-sm text-ice/50 hover:text-ice transition-colors underline underline-offset-4"
            >
              Fazer diagnóstico gratuito primeiro
            </Link>
          </div>
        </div>
      </section>

      {/* ── CHATBOT vs AIOS ──────────────────────────── */}
      <section className="py-20 px-6 bg-navy-card border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-ice/40 uppercase tracking-widest">A diferença que muda tudo</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3">
              Chatbot reage. AI OS <span className="text-brand">opera.</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-xs font-semibold text-ice/30 uppercase tracking-wider pb-4 pr-6 w-28">Aspecto</th>
                  <th className="text-left pb-4 pr-6">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-ice/50 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5">
                      <Bot className="w-4 h-4" strokeWidth={1.5} />
                      Chatbot
                    </div>
                  </th>
                  <th className="text-left pb-4">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-brand bg-brand/10 border border-brand/20 rounded-lg px-3 py-1.5">
                      <Cpu className="w-4 h-4" strokeWidth={1.5} />
                      AI OS
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05]">
                {diferencas.map((d) => (
                  <tr key={d.aspecto}>
                    <td className="py-4 pr-6 text-xs font-semibold text-ice/30 uppercase tracking-wider whitespace-nowrap">{d.aspecto}</td>
                    <td className="py-4 pr-6 text-sm text-ice/50">{d.chatbot}</td>
                    <td className="py-4 text-sm text-ice font-medium">{d.aios}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── COMO CONSTRUÍMOS ─────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-ice/40 uppercase tracking-widest">Metodologia</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3">
              Como a TRÍADE IA constrói um AI OS
            </h2>
            <p className="text-ice/50 mt-4 max-w-xl mx-auto">
              Não instalamos IA por cima de um processo quebrado. Mapeamos, estruturamos e construímos do zero — para que o sistema funcione como produto, não como projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {etapas.map((e) => (
              <div key={e.num} className="bg-navy-card border border-white/[0.08] rounded-xl p-6 flex gap-5">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4 flex-shrink-0">
                    {e.icon}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-brand/60 uppercase tracking-widest mb-1">{e.num}</div>
                  <h3 className="font-display font-bold text-lg text-ice mb-2">{e.titulo}</h3>
                  <p className="text-sm text-ice/50 leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FISCAL OS — CASE REAL ────────────────────── */}
      <section className="py-20 px-6 bg-navy-card border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-gold border border-gold/30 rounded-full px-4 py-1.5 mb-6 uppercase tracking-widest">
                Case Real · Em Operação
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-ice leading-tight mb-4">
                Fiscal OS —<br />o primeiro AI OS<br />da TRÍADE IA.
              </h2>
              <p className="text-ice/50 leading-relaxed mb-6">
                Desenvolvido para a SEMFAZ de Itumbiara, o Fiscal OS é um sistema operacional completo de fiscalização tributária municipal. Um time de 9 agentes especializados substitui semanas de trabalho manual em minutos.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Análise de caso em 4 minutos vs. 3–5 dias no processo manual",
                  "Fundamentação jurídica automática com base no CTM, CTN e EC 132/2023",
                  "Auto de infração redigido na hora — pronto para assinar",
                  "Zero conexão com sistemas internos da prefeitura — dados seguros",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-sm text-ice/70">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="font-display font-bold text-3xl text-brand">4 min</div>
                  <div className="text-xs text-ice/40 uppercase tracking-wider mt-1">por análise fiscal</div>
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-brand">92%</div>
                  <div className="text-xs text-ice/40 uppercase tracking-wider mt-1">redução de tempo</div>
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-brand">9</div>
                  <div className="text-xs text-ice/40 uppercase tracking-wider mt-1">agentes em paralelo</div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-ice/30 uppercase tracking-widest mb-4">Squad Agêntica · Fiscal OS</div>
              <div className="flex flex-col gap-2">
                {especialistas.map((e) => (
                  <div
                    key={e.num}
                    className="flex items-center gap-3 bg-navy border border-white/[0.06] rounded-lg px-4 py-3 hover:border-brand/30 transition-colors"
                  >
                    <span className="text-xs font-bold text-brand/50 w-6 flex-shrink-0">{e.num}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-ice truncate">{e.nome}</div>
                      <div className="text-xs text-ice/40 truncate">{e.funcao}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POR QUE AGORA ────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy-card border border-brand/20 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
              </div>
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">Janela de oportunidade</span>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-ice mt-1">
                  Os próximos 12 meses separam quem lidera de quem fecha.
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  titulo: "EC 132/2023 em vigência",
                  corpo: "A reforma tributária que extingue o ISS e cria o IBS já está em transição. De 2026 a 2033, todo município precisa de inteligência fiscal atualizada em tempo real.",
                },
                {
                  titulo: "Barreira tecnológica zerada",
                  corpo: "Empresas menores com AI OS já competem com grandes corporações. A vantagem não é mais de tamanho — é de velocidade de implementação.",
                },
                {
                  titulo: "Margem vs. margem",
                  corpo: "Operações com AI OS registram saltos de 30% para 60% de margem. Quem não implementar vai competir com estrutura de custo 2× mais cara que o concorrente.",
                },
              ].map((item) => (
                <div key={item.titulo}>
                  <h3 className="font-semibold text-sm text-ice mb-2">{item.titulo}</h3>
                  <p className="text-sm text-ice/50 leading-relaxed">{item.corpo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── NICHOS ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-navy-card border-y border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-ice/40 uppercase tracking-widest">Verticais</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3">
              Para qual nicho construímos o próximo AI OS?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {nichos.map((n) => (
              <div
                key={n.setor}
                className={`bg-navy border rounded-xl p-5 ${
                  n.produto.includes("✓")
                    ? "border-brand/30 bg-brand/5"
                    : "border-white/[0.08] hover:border-white/20 transition-colors"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-ice/60">
                    {n.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                    n.produto.includes("✓")
                      ? "text-brand bg-brand/10"
                      : "text-ice/30 bg-white/[0.04]"
                  }`}>
                    {n.produto}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-ice mb-1">{n.setor}</h3>
                <p className="text-xs text-ice/50 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-ice leading-tight mb-5">
            Sua empresa está pronta para operar com um AI OS?
          </h2>
          <p className="text-ice/50 mb-10 leading-relaxed">
            O diagnóstico é gratuito. Em uma conversa, mapeamos os processos da sua operação e mostramos onde um AI OS gera mais resultado — em qual ordem implementar e o que esperar de retorno.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors text-base"
            >
              Solicitar Diagnóstico AI-First
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </a>
          </div>
          <p className="text-xs text-ice/30 mt-6">Gratuito · Sem compromisso · Resposta em até 24h</p>
        </div>
      </section>
    </>
  );
}
