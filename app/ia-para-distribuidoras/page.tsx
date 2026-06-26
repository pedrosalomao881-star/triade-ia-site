import type { Metadata } from "next";
import VerticalPage, { buildVerticalMetadata } from "../components/VerticalPage";

export const metadata: Metadata = buildVerticalMetadata(
  "IA para Distribuidoras — Pedidos Automatizados e Eficiência Logística",
  "Automatize a entrada de pedidos, reduza erros de separação, otimize rotas e ganhe visibilidade em tempo real sobre sua operação. IA para distribuidoras e atacadistas."
);

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Como a IA automatiza a entrada de pedidos em distribuidoras?", acceptedAnswer: { "@type": "Answer", text: "A IA pode receber pedidos via WhatsApp, e-mail ou formulário, estruturá-los automaticamente e integrá-los ao ERP — eliminando digitação manual e reduzindo erros." } },
    { "@type": "Question", name: "A IA pode prever demanda e otimizar estoque?", acceptedAnswer: { "@type": "Answer", text: "Sim. Com histórico de vendas e dados externos (sazonalidade, promoções, eventos), a IA identifica padrões e sugere pontos de reposição antes que o estoque crítico seja atingido." } },
    { "@type": "Question", name: "Qual o retorno típico para distribuidoras?", acceptedAnswer: { "@type": "Answer", text: "Os principais ganhos são: redução de erros de separação (economia em devoluções), mais pedidos processados com a mesma equipe e redução de rupturas de estoque." } },
    { "@type": "Question", name: "A solução integra com meu ERP atual?", acceptedAnswer: { "@type": "Answer", text: "Sim. Trabalhamos com integrações para os principais ERPs do segmento (TOTVS, Sankhya, Omie, Bling e outros) via API ou importação estruturada." } },
  ],
};

export default function DistribuidorasPage() {
  return (
    <VerticalPage
      tag="IA para Distribuição"
      title="IA para Distribuidoras"
      subtitle="Mais pedidos processados. Menos erros. Melhor margem."
      descricao="Distribuidoras operam com margens apertadas e volume alto — qualquer ineficiência na entrada de pedidos, separação ou logística come diretamente o lucro. A IA pode transformar sua operação em um modelo mais ágil, com menos erros e mais capacidade de crescimento sem aumento proporcional de custo."
      desafio="Entrada manual de pedidos é lenta e sujeita a erros. Ruptura de estoque gera perda de vendas. Erros de separação criam devoluções e retrabalho. Equipes comerciais passam tempo demais em tarefas operacionais que poderiam ser automatizadas — tempo que poderia ir para relacionamento e expansão de carteira."
      comIA={[
        "Entrada automatizada de pedidos via WhatsApp, e-mail e formulários com integração ao ERP",
        "Previsão de demanda com base em histórico, sazonalidade e dados externos",
        "Alertas automáticos de ruptura iminente antes que o estoque acabe",
        "Assistente para a equipe comercial com sugestão de pedido com base no histórico do cliente",
        "Relatórios automáticos de desempenho por rota, cliente e categoria",
      ]}
      impactos={[
        "Redução de 70% no tempo de digitação e processamento de pedidos",
        "Menos erros de separação com conferência assistida por IA",
        "Redução de rupturas de estoque com alertas e reposição preditiva",
        "Equipe comercial com mais tempo para relacionamento e expansão de carteira",
        "Visibilidade em tempo real do desempenho por cliente, produto e rota",
        "Crescimento de volume sem crescimento proporcional de equipe administrativa",
      ]}
      faq={[
        { q: "Como a IA automatiza a entrada de pedidos em distribuidoras?", a: "A IA pode receber pedidos via WhatsApp, e-mail ou formulário, estruturá-los automaticamente e integrá-los ao ERP — eliminando digitação manual e reduzindo erros." },
        { q: "A IA pode prever demanda e otimizar estoque?", a: "Sim. Com histórico de vendas e dados externos (sazonalidade, promoções, eventos), a IA identifica padrões e sugere pontos de reposição antes que o estoque crítico seja atingido." },
        { q: "Qual o retorno típico para distribuidoras?", a: "Os principais ganhos são: redução de erros de separação (economia em devoluções), mais pedidos processados com a mesma equipe e redução de rupturas de estoque." },
        { q: "A solução integra com meu ERP atual?", a: "Sim. Trabalhamos com integrações para os principais ERPs do segmento (TOTVS, Sankhya, Omie, Bling e outros) via API ou importação estruturada." },
      ]}
      schema={schema}
    />
  );
}
