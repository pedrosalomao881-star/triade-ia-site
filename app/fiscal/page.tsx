import type { Metadata } from "next";
import { FileText, ShieldCheck, BarChart3, Cpu, Scale, Link2 } from "lucide-react";
import Link from "next/link";
import PilarPage from "../components/PilarPage";

export const metadata: Metadata = {
  title: "Inteligência Fiscal — SOAF | TRÍADE IA",
  description: "SOAF v3.0 — plataforma de auditoria fiscal com IA para prefeituras. 7 agentes especializados: Terminal Fiscal, Investigador de Sonegação, Apontador de Omissão e mais. ISS, IBS, ITBI, IPTU.",
};

const iconClass = "w-5 h-5";

export default function Fiscal() {
  return (
    <>
      {/* Banner SOAF v3.0 */}
      <section className="pt-28 pb-0 px-6 bg-navy">
        <div className="max-w-4xl mx-auto">
          <div className="border border-brand/20 bg-brand/[0.04] rounded-lg px-8 py-6 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">Produto ativo</span>
              <h2 className="font-display font-bold text-xl text-ice mt-1 mb-2 leading-tight">
                SOAF v3.0 — Sistema Operacional de Auditoria Fiscal
              </h2>
              <p className="text-ice/50 text-sm leading-relaxed">
                7 agentes de IA especializados em ISS, IBS, ITBI e IPTU. Terminal Fiscal, Investigador de Sonegação, Apontador de Omissão, Classificador de Conformidade e geração de autos de infração — para prefeituras e secretarias municipais.
              </p>
            </div>
            <Link
              href="https://app.triadeiaos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-brand text-navy font-semibold text-sm px-6 py-3 rounded-sm hover:bg-brand/90 transition-colors whitespace-nowrap"
              style={{ borderRadius: '1px' }}
            >
              Acessar SOAF
            </Link>
          </div>
        </div>
      </section>

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
    </>
  );
}
