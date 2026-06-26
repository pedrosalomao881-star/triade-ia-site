import type { Metadata } from "next";
import { TrendingUp, Target, Bell, Filter, Database, BarChart3 } from "lucide-react";
import PilarPage from "../components/PilarPage";

export const metadata: Metadata = {
  title: "IA para Vendas | TRÍADE IA",
  description: "Agentes de IA que qualificam leads, fazem follow-up automático e nutrem o funil comercial — gerando mais oportunidades sem aumentar o time de vendas.",
};

const iconClass = "w-5 h-5";

export default function Vendas() {
  return (
    <PilarPage
      tag="IA para Vendas"
      title="Um vendedor que nunca para de trabalhar"
      description="Criamos agentes de IA que abordam leads, fazem follow-up no momento certo, qualificam oportunidades e alimentam seu funil comercial — sem depender da memória ou da disponibilidade do time."
      features={[
        {
          icon: <TrendingUp className={iconClass} strokeWidth={1.5} />,
          title: "Prospecção e abordagem inicial",
          description: "O agente identifica e aborda leads com mensagens personalizadas no canal certo — WhatsApp, email ou Instagram — no momento mais provável de resposta.",
        },
        {
          icon: <Target className={iconClass} strokeWidth={1.5} />,
          title: "Qualificação automática",
          description: "Conversa com o lead, entende a necessidade, o porte da empresa e o orçamento antes de passar para o vendedor. Equipe comercial só fala com quem tem potencial real.",
        },
        {
          icon: <Bell className={iconClass} strokeWidth={1.5} />,
          title: "Follow-up no momento certo",
          description: "Nunca mais perder venda por falta de follow-up. O agente sabe quando retomar a conversa com base no comportamento e no estágio do funil.",
        },
        {
          icon: <Filter className={iconClass} strokeWidth={1.5} />,
          title: "Nutrição de leads",
          description: "Sequências automáticas de conteúdo relevante para leads que ainda não estão prontos para comprar — mantendo a marca presente até o momento da decisão.",
        },
        {
          icon: <Database className={iconClass} strokeWidth={1.5} />,
          title: "CRM atualizado automaticamente",
          description: "Cada interação fica registrada. O CRM é atualizado sem depender do vendedor preencher manualmente após cada conversa.",
        },
        {
          icon: <BarChart3 className={iconClass} strokeWidth={1.5} />,
          title: "Relatórios de conversão",
          description: "Taxa de conversão por canal, estágio de funil, tempo médio de fechamento e motivos de perda. Dados para decisões comerciais baseadas em realidade.",
        },
      ]}
      steps={[
        {
          number: "01",
          title: "Mapeamento do funil atual",
          description: "Entendemos o processo comercial hoje: onde entram os leads, quais etapas existem, onde as oportunidades se perdem e o que o vendedor mais repete.",
        },
        {
          number: "02",
          title: "Configuração do agente comercial",
          description: "Criamos os fluxos de qualificação, follow-up e nutrição. Definimos os gatilhos de passagem para o time humano e integramos com o CRM existente.",
        },
        {
          number: "03",
          title: "Testes com leads reais",
          description: "Rodamos o agente com um volume controlado de leads, medimos a taxa de resposta e qualificação, e ajustamos as abordagens antes de escalar.",
        },
        {
          number: "04",
          title: "Operação e otimização contínua",
          description: "O agente entra em operação plena. Monitoramos as métricas e ajustamos as mensagens, sequências e critérios de qualificação conforme os resultados aparecem.",
        },
      ]}
      results={[
        "Aumento no volume de leads qualificados chegando ao comercial",
        "Follow-up de 100% das oportunidades sem depender da memória do vendedor",
        "Redução no ciclo de vendas por abordagem no momento certo",
        "Time comercial focado em fechar negócios, não em tarefas administrativas",
        "CRM sempre atualizado e com histórico completo de cada interação",
        "Processo comercial previsível e mensurável, independente de pessoa",
      ]}
    />
  );
}
