import type { Metadata } from "next";
import { MessageSquare, Target, Bot, BarChart3, Volume2, Workflow } from "lucide-react";
import PilarPage from "../components/PilarPage";

export const metadata: Metadata = {
  title: "IA para Atendimento | TRÍADE IA",
  description: "Agentes de IA que atendem seus clientes 24 horas pelo WhatsApp e outros canais — sem aumentar equipe, sem deixar cliente esperando.",
};

const iconClass = "w-5 h-5";

export default function Atendimento() {
  return (
    <PilarPage
      tag="IA para Atendimento"
      title="Atendimento 24 horas sem aumentar a equipe"
      description="Criamos agentes de IA que atendem seus clientes pelo WhatsApp, Instagram, site e outros canais — em qualquer horário, sem fila de espera, com a linguagem da sua empresa."
      features={[
        {
          icon: <MessageSquare className={iconClass} strokeWidth={1.5} />,
          title: "WhatsApp e canais digitais",
          description: "Agentes integrados ao WhatsApp Business, Instagram Direct e chat do site. Um único sistema gerenciando todos os pontos de contato.",
        },
        {
          icon: <Target className={iconClass} strokeWidth={1.5} />,
          title: "Qualificação de leads automática",
          description: "O agente identifica o perfil do cliente, entende a necessidade e qualifica antes de passar para o time comercial. Sem tempo de equipe desperdiçado em leads frios.",
        },
        {
          icon: <Bot className={iconClass} strokeWidth={1.5} />,
          title: "FAQ e suporte inteligente",
          description: "Responde perguntas frequentes, consulta status de pedidos, agenda reuniões e escalona para humanos apenas quando necessário.",
        },
        {
          icon: <BarChart3 className={iconClass} strokeWidth={1.5} />,
          title: "Relatórios de atendimento",
          description: "Dashboard com volume de atendimentos, tópicos mais frequentes, horários de pico e taxa de resolução automática.",
        },
        {
          icon: <Volume2 className={iconClass} strokeWidth={1.5} />,
          title: "Tom de voz da sua marca",
          description: "O agente é treinado com o vocabulário, estilo e informações do seu negócio. Não parece um robô genérico.",
        },
        {
          icon: <Workflow className={iconClass} strokeWidth={1.5} />,
          title: "Integração com sistemas existentes",
          description: "Conectamos com CRM, ERP, planilhas ou qualquer sistema que você já usa. O agente acessa dados reais para responder com precisão.",
        },
      ]}
      steps={[
        {
          number: "01",
          title: "Mapeamento do atendimento atual",
          description: "Entendemos quais perguntas chegam com mais frequência, qual o fluxo de atendimento hoje e onde está o maior gargalo de tempo da equipe.",
        },
        {
          number: "02",
          title: "Treinamento e configuração do agente",
          description: "Criamos a base de conhecimento, definimos o fluxo de conversação e configuramos o tom de voz alinhado à sua marca.",
        },
        {
          number: "03",
          title: "Integração e testes",
          description: "Conectamos o agente aos canais desejados, realizamos testes com cenários reais e ajustamos antes da ativação.",
        },
        {
          number: "04",
          title: "Ativação e acompanhamento",
          description: "O agente entra em operação. Monitoramos os primeiros dias, ajustamos respostas com base nos atendimentos reais e otimizamos continuamente.",
        },
      ]}
      results={[
        "Redução de 60 a 80% no volume de atendimentos manuais repetitivos",
        "Resposta imediata para clientes em qualquer horário, inclusive fins de semana",
        "Equipe liberada para atendimentos que realmente exigem julgamento humano",
        "Leads qualificados chegando ao comercial com contexto e histórico de conversa",
        "Redução no tempo médio de resposta de horas para segundos",
        "Padronização da comunicação com clientes em todos os canais",
      ]}
    />
  );
}
