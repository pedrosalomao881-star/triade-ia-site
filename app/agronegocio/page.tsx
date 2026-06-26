import type { Metadata } from "next";
import { Wheat, BarChart3, Users, FileText, Cpu, Bell } from "lucide-react";
import PilarPage from "../components/PilarPage";

export const metadata: Metadata = {
  title: "IA para Agronegócio",
  description:
    "Inteligência Artificial para cooperativas, produtores rurais e distribuidoras do agronegócio em Goiás. Gestão de associados, análise de safra, crédito rural e automação de processos.",
};

const iconClass = "w-5 h-5";

export default function Agronegocio() {
  return (
    <PilarPage
      tag="IA para Agronegócio"
      title="Inteligência Artificial para o Campo e para o Escritório"
      description="O agronegócio tem volume de dados, processos complexos e necessidade de decisões rápidas. A IA entra onde a planilha não escala — sem mudar a operação que já funciona, só tornando ela mais inteligente."
      features={[
        {
          icon: <Users className={iconClass} strokeWidth={1.5} />,
          title: "Gestão de associados e cooperados",
          description: "Automação do cadastro, atualização de cotas, comunicação personalizada em lote e relatórios de adimplência — sem trabalho manual da equipe administrativa.",
        },
        {
          icon: <BarChart3 className={iconClass} strokeWidth={1.5} />,
          title: "Análise de safra e produtividade",
          description: "Consolidação de dados de produção, histórico por talhão, comparativo entre períodos e alertas de desvio de meta — em um painel atualizado automaticamente.",
        },
        {
          icon: <FileText className={iconClass} strokeWidth={1.5} />,
          title: "Crédito rural e obrigações acessórias",
          description: "Controle de contratos de financiamento, alertas de vencimento, análise de capacidade de pagamento e suporte ao preenchimento de declarações obrigatórias.",
        },
        {
          icon: <Cpu className={iconClass} strokeWidth={1.5} />,
          title: "Automação de processos internos",
          description: "Pedidos de insumos, emissão de notas, controle de estoque de armazém e fluxo de aprovações — automatizados e integrados ao ERP existente.",
        },
        {
          icon: <Bell className={iconClass} strokeWidth={1.5} />,
          title: "Atendimento ao produtor via WhatsApp",
          description: "Agente de IA que responde dúvidas de associados, consulta saldo de cotas, informa prazos de entrega e encaminha solicitações para o setor responsável.",
        },
        {
          icon: <Wheat className={iconClass} strokeWidth={1.5} />,
          title: "Inteligência comercial para distribuidoras",
          description: "Análise de carteira de clientes, previsão de demanda por safra, automação de follow-up de pedidos e alertas de inadimplência para o time comercial.",
        },
      ]}
      steps={[
        {
          number: "01",
          title: "Diagnóstico da operação",
          description: "Mapeamos os processos da cooperativa ou distribuidora: do campo ao escritório. Identificamos onde há mais perda de tempo, dado e dinheiro.",
        },
        {
          number: "02",
          title: "Priorização por retorno",
          description: "Definimos as automações e integrações de maior impacto imediato — respeitando a sazonalidade do agronegócio e os sistemas já em uso.",
        },
        {
          number: "03",
          title: "Desenvolvimento e integração",
          description: "Construímos os agentes e automações integrados ao ERP, WhatsApp e sistemas internos da organização. Sem impacto na operação em curso.",
        },
        {
          number: "04",
          title: "Treinamento e evolução contínua",
          description: "A equipe é capacitada para operar as novas ferramentas. O sistema evolui conforme o negócio cresce e novas necessidades surgem.",
        },
      ]}
      results={[
        "Redução do tempo de atendimento ao cooperado e produtor rural",
        "Equipe administrativa focada em análise, não em digitação",
        "Dados de safra e carteira disponíveis em tempo real para decisão",
        "Menor risco de inadimplência com alertas e acompanhamento automático",
        "Comunicação em escala com associados sem aumentar equipe",
        "Integração com sistemas já existentes — sem substituir o que funciona",
      ]}
    />
  );
}
