import type { Metadata } from "next";
import { FileText, ShieldCheck, BarChart3, Cpu, Scale, Link2 } from "lucide-react";
import PilarPage from "../components/PilarPage";

export const metadata: Metadata = {
  title: "Inteligência Fiscal | TRÍADE IA",
  description: "Auditoria fiscal com IA, cruzamento de dados tributários e inteligência fiscal para escritórios de contabilidade e gestão pública.",
};

const iconClass = "w-5 h-5";

export default function Fiscal() {
  return (
    <PilarPage
      tag="Inteligência Fiscal"
      title="Auditoria Fiscal e Análise Tributária com Inteligência Artificial"
      description="Cruzamos dados, identificamos inconsistências e automatizamos a análise fiscal em volumes que seriam inviáveis manualmente — com precisão e velocidade que nenhuma equipe humana consegue replicar."
      features={[
        {
          icon: <FileText className={iconClass} strokeWidth={1.5} />,
          title: "Análise automatizada de documentos",
          description: "O agente lê, classifica e extrai dados de notas fiscais, contratos, guias de pagamento e outros documentos fiscais — sem digitação manual.",
        },
        {
          icon: <ShieldCheck className={iconClass} strokeWidth={1.5} />,
          title: "Auditoria inteligente",
          description: "Identifica inconsistências, pendências e oportunidades de recuperação tributária em grandes volumes de dados que seriam inviáveis de analisar manualmente.",
        },
        {
          icon: <BarChart3 className={iconClass} strokeWidth={1.5} />,
          title: "Inteligência fiscal e tributária",
          description: "Painéis com visão consolidada de tributos, obrigações, prazos e alertas — para gestores tomarem decisões com base em dados atualizados.",
        },
        {
          icon: <Cpu className={iconClass} strokeWidth={1.5} />,
          title: "Automação de obrigações acessórias",
          description: "Reduz o trabalho operacional de preenchimento, conferência e envio de obrigações periódicas, liberando o contador para atividades de maior valor.",
        },
        {
          icon: <Scale className={iconClass} strokeWidth={1.5} />,
          title: "Soluções para gestão pública",
          description: "Ferramentas de IA para administrações tributárias municipais: análise de arrecadação, identificação de inadimplência e suporte à fiscalização.",
        },
        {
          icon: <Link2 className={iconClass} strokeWidth={1.5} />,
          title: "Integração com sistemas contábeis",
          description: "Conectamos com os principais ERPs e softwares contábeis do mercado. O agente trabalha com os sistemas que você já usa.",
        },
      ]}
      steps={[
        {
          number: "01",
          title: "Levantamento dos processos fiscais",
          description: "Mapeamos quais processos consomem mais tempo da equipe, quais erros acontecem com mais frequência e onde existe maior risco de inconsistência.",
        },
        {
          number: "02",
          title: "Desenvolvimento da solução customizada",
          description: "Criamos o agente de análise fiscal configurado para os tipos de documentos, legislação aplicável e processos específicos do seu escritório ou organização.",
        },
        {
          number: "03",
          title: "Integração e validação",
          description: "Conectamos com os sistemas existentes, validamos os resultados com a equipe técnica e ajustamos os parâmetros de análise antes da implantação plena.",
        },
        {
          number: "04",
          title: "Operação e evolução contínua",
          description: "Monitoramos o desempenho, incorporamos mudanças na legislação e expandimos as capacidades do sistema conforme a necessidade da operação evolui.",
        },
      ]}
      results={[
        "Redução significativa no tempo de análise e conferência de documentos fiscais",
        "Menor risco de erros em obrigações acessórias e declarações",
        "Capacidade de processar volumes de documentos que seriam inviáveis manualmente",
        "Equipe contábil focada em consultoria e decisão estratégica, não em digitação",
        "Identificação de oportunidades de recuperação tributária que passariam despercebidas",
        "Conformidade fiscal com menor esforço operacional",
      ]}
    />
  );
}
