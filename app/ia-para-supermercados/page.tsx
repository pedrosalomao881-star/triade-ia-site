import type { Metadata } from "next";
import VerticalPage, { buildVerticalMetadata } from "../components/VerticalPage";

export const metadata: Metadata = buildVerticalMetadata(
  "IA para Supermercados — Atendimento, Estoque e Precificação Inteligente",
  "Reduza perdas, automatize atendimento ao cliente, otimize preços e ganhe eficiência operacional. IA para supermercados e varejistas de alimentação."
);

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Como a IA pode ajudar supermercados a reduzir perdas?", acceptedAnswer: { "@type": "Answer", text: "Através de análise preditiva de validade, controle inteligente de estoque e previsão de demanda por produto e categoria — reduzindo desperdício e rupturas simultaneamente." } },
    { "@type": "Question", name: "A IA pode auxiliar na precificação dinâmica?", acceptedAnswer: { "@type": "Answer", text: "Sim. A IA analisa concorrência, custo, margem e histórico de vendas para sugerir ajustes de preço que maximizem receita sem perder competitividade." } },
    { "@type": "Question", name: "Como funciona o atendimento ao cliente com IA no varejo?", acceptedAnswer: { "@type": "Answer", text: "Um agente de IA responde perguntas sobre horários, promoções, disponibilidade de produtos e políticas via WhatsApp ou site — 24 horas por dia, sem fila." } },
    { "@type": "Question", name: "Supermercados menores podem implementar IA?", acceptedAnswer: { "@type": "Answer", text: "Sim. O escopo e o investimento são dimensionados ao porte. Supermercados regionais com 1 a 5 unidades têm retorno claro nas áreas de estoque, atendimento e promoções." } },
  ],
};

export default function SupermercadosPage() {
  return (
    <VerticalPage
      tag="IA para Varejo"
      title="IA para Supermercados"
      subtitle="Menos perda. Mais giro. Melhor atendimento."
      descricao="Supermercados e varejistas de alimentação enfrentam margens apertadas, alta rotatividade de produtos e clientes cada vez mais exigentes. A IA pode aumentar a eficiência operacional em múltiplas frentes — de estoque a atendimento — sem aumentar o quadro de pessoal."
      desafio="Produtos vencendo no estoque, rupturas nos itens mais vendidos, precificação desatualizada e atendimento ao cliente sobrecarregado são problemas que consomem margem diariamente. A falta de dados consolidados em tempo real dificulta decisões rápidas de reposição e promoção."
      comIA={[
        "Previsão de demanda por produto e categoria com alertas de reposição automáticos",
        "Controle de validade com sugestão de ação preventiva antes da perda",
        "Precificação assistida com análise de margem, concorrência e elasticidade",
        "Atendimento ao cliente via WhatsApp para dúvidas, promoções e pedidos",
        "Relatórios de giro, perda e desempenho por seção em tempo real",
      ]}
      impactos={[
        "Redução de 20 a 35% em perdas por vencimento e ruptura",
        "Melhora na margem com precificação mais estratégica e menos manual",
        "Atendimento ao cliente 24/7 sem custo adicional de equipe",
        "Mais agilidade na decisão de reposição com dados em tempo real",
        "Melhor experiência do cliente com comunicação proativa de promoções",
        "Equipe de loja focada no que é presencial — a IA cuida do restante",
      ]}
      faq={[
        { q: "Como a IA pode ajudar supermercados a reduzir perdas?", a: "Através de análise preditiva de validade, controle inteligente de estoque e previsão de demanda por produto e categoria — reduzindo desperdício e rupturas simultaneamente." },
        { q: "A IA pode auxiliar na precificação dinâmica?", a: "Sim. A IA analisa concorrência, custo, margem e histórico de vendas para sugerir ajustes de preço que maximizem receita sem perder competitividade." },
        { q: "Como funciona o atendimento ao cliente com IA no varejo?", a: "Um agente de IA responde perguntas sobre horários, promoções, disponibilidade de produtos e políticas via WhatsApp ou site — 24 horas por dia, sem fila." },
        { q: "Supermercados menores podem implementar IA?", a: "Sim. O escopo e o investimento são dimensionados ao porte. Supermercados regionais com 1 a 5 unidades têm retorno claro nas áreas de estoque, atendimento e promoções." },
      ]}
      schema={schema}
    />
  );
}
