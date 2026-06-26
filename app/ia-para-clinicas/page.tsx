import type { Metadata } from "next";
import VerticalPage, { buildVerticalMetadata } from "../components/VerticalPage";

export const metadata: Metadata = buildVerticalMetadata(
  "IA para Clínicas e Saúde — Automação e Atendimento Inteligente",
  "Reduza faltas, automatize confirmações, otimize o faturamento e libere sua equipe para o que realmente importa: o atendimento. IA aplicada a clínicas em Itumbiara e Goiás."
);

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Como a IA pode reduzir faltas em clínicas?", acceptedAnswer: { "@type": "Answer", text: "Sistemas de IA enviam confirmações automáticas por WhatsApp, fazem reagendamentos preventivos e identificam pacientes com histórico de falta, reduzindo em até 40% a taxa de no-show." } },
    { "@type": "Question", name: "A IA substitui a recepcionista?", acceptedAnswer: { "@type": "Answer", text: "Não. A IA automatiza tarefas repetitivas como agendamento e confirmação, liberando a recepcionista para atendimentos que exigem julgamento e empatia." } },
    { "@type": "Question", name: "Em quanto tempo é possível ver resultados?", acceptedAnswer: { "@type": "Answer", text: "As primeiras melhorias são visíveis em 30 a 60 dias após a implementação — especialmente na redução de faltas e na agilidade do atendimento inicial." } },
    { "@type": "Question", name: "A solução funciona com meu software de gestão atual?", acceptedAnswer: { "@type": "Answer", text: "Em geral sim. Trabalhamos com integrações via API e webhooks que se conectam aos principais sistemas do mercado de saúde." } },
  ],
};

export default function ClinicasPage() {
  return (
    <VerticalPage
      tag="IA para Saúde"
      title="IA para Clínicas e Consultórios"
      subtitle="Menos faltas. Mais atendimentos. Melhor experiência."
      descricao="Clínicas enfrentam desafios operacionais que consomem tempo e reduzem receita: confirmação manual de consultas, alto índice de faltas, faturamento demorado e atendimento inicial lento. A TRÍADE IA mapeia onde a IA gera mais retorno na sua clínica e implementa soluções que funcionam."
      desafio="A maioria das clínicas perde entre 15% e 30% da capacidade produtiva com faltas não avisadas, processos manuais de agendamento e tempo gasto em tarefas administrativas que poderiam ser automatizadas. A equipe está ocupada demais com rotina para focar em atendimento de qualidade."
      comIA={[
        "Confirmação automática de consultas via WhatsApp com reagendamento integrado",
        "Triagem inicial automatizada com coleta de queixas e histórico antes da consulta",
        "Faturamento e pré-autorização assistidos por IA com menos erros e mais agilidade",
        "Análise de ocupação e sugestão de horários para maximizar a agenda",
        "Atendimento fora do horário comercial para dúvidas frequentes e marcações",
      ]}
      impactos={[
        "Redução de 30 a 40% na taxa de faltas sem aviso",
        "Aumento de 20% na capacidade de atendimento sem contratar mais pessoal",
        "Economia de 2 a 4 horas diárias da equipe administrativa",
        "Melhora significativa na satisfação do paciente no primeiro contato",
        "Faturamento mais ágil com menos erros de cobrança",
        "Dados consolidados para decisões estratégicas da clínica",
      ]}
      faq={[
        { q: "Como a IA pode reduzir faltas em clínicas?", a: "Sistemas de IA enviam confirmações automáticas por WhatsApp, fazem reagendamentos preventivos e identificam pacientes com histórico de falta, reduzindo em até 40% a taxa de no-show." },
        { q: "A IA substitui a recepcionista?", a: "Não. A IA automatiza tarefas repetitivas como agendamento e confirmação, liberando a recepcionista para atendimentos que exigem julgamento e empatia." },
        { q: "Em quanto tempo é possível ver resultados?", a: "As primeiras melhorias são visíveis em 30 a 60 dias após a implementação — especialmente na redução de faltas e na agilidade do atendimento inicial." },
        { q: "A solução funciona com meu software de gestão atual?", a: "Em geral sim. Trabalhamos com integrações via API e webhooks que se conectam aos principais sistemas do mercado de saúde." },
      ]}
      schema={schema}
    />
  );
}
