import type { Metadata } from "next";
import VerticalPage, { buildVerticalMetadata } from "../../components/VerticalPage";

export const metadata: Metadata = buildVerticalMetadata(
  "Recuperação de Créditos Tributários com IA — TRÍADE IA",
  "Motor de IA que processa EFD-Contribuições, DCTF e razão contábil em minutos. Identifica créditos de PIS/COFINS e ICMS não homologados antes da Reforma Tributária de 2027."
);

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O sistema funciona para escritórios com múltiplos clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Processa múltiplas empresas em paralelo, com relatórios individualizados por CNPJ. Um escritório com 30 clientes audita todos em uma única operação.",
      },
    },
    {
      "@type": "Question",
      name: "O parecer gerado é válido para protocolo junto à Receita Federal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O sistema gera memória de cálculo completa, fundamentação em STJ REsp 1.221.170/PR e cronograma de ações. O contador assina e protocola — o sistema prepara, ele executa.",
      },
    },
    {
      "@type": "Question",
      name: "O que acontece com créditos não homologados após 2027?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Com a substituição do ICMS/PIS/COFINS pelo IBS/CBS, a empresa precisará auditar até 5 anos de registros retroativamente. Custo estimado: R$50–100k por empresa, além do risco de perda parcial por ausência de comprovação tempestiva.",
      },
    },
  ],
};

export default function RecuperacaoCreditosPage() {
  return (
    <VerticalPage
      tag="Recuperação de Créditos Tributários"
      title="Do Crédito Dormindo ao Caixa Real"
      subtitle="Auditoria fiscal em minutos. Homologação antes da Reforma de 2027."
      descricao="Motor de análise fiscal que identifica créditos de PIS/COFINS e ICMS não homologados, valida conforme jurisprudência STJ e gera o parecer técnico para homologação antes da Reforma Tributária de 2027."
      desafio="Sua empresa acumula créditos de PIS/COFINS e ICMS não homologados. Estão presos no ativo não circulante — visíveis no balanço, mas sem virar caixa. Com a Reforma Tributária de 2027, quem não homologar agora enfrentará auditoria retroativa de 5 anos e custo de R$50k a R$100k para provar o que poderia ser validado hoje."
      comIA={[
        "Processa EFD-Contribuições, DCTF e razão contábil em minutos",
        "Valida créditos conforme jurisprudência STJ REsp 1.221.170/PR",
        "Calcula proporcionalidade entre exportações e vendas internas automaticamente",
        "Identifica créditos não rastreados em insumos, energia e serviços",
        "Gera parecer técnico e cronograma de homologação com prazos antes da Reforma",
      ]}
      impactos={[
        "Auditoria de 8 horas reduzida a menos de 1 minuto de processamento",
        "R$50k a R$500k em créditos identificados por empresa analisada",
        "70% das empresas têm créditos PIS/COFINS e ICMS não homologados",
        "R$50–100k economizados: custo de auditoria retroativa evitada pós-Reforma",
        "Único sistema em produção real com prefeitura brasileira — Itumbiara-GO, 2026",
      ]}
      faq={[
        {
          q: "O sistema funciona para escritórios com múltiplos clientes?",
          a: "Sim. Processa múltiplas empresas em paralelo, com relatórios individualizados por CNPJ. Um escritório com 30 clientes audita todos em uma única operação.",
        },
        {
          q: "O parecer gerado é válido para protocolo junto à Receita Federal?",
          a: "O sistema gera memória de cálculo completa, fundamentação em STJ REsp 1.221.170/PR e cronograma de ações. O contador assina e protocola — o sistema prepara, ele executa.",
        },
        {
          q: "O que acontece com créditos não homologados após 2027?",
          a: "Com a substituição do ICMS/PIS/COFINS pelo IBS/CBS, a empresa precisará auditar até 5 anos de registros retroativamente. Custo estimado: R$50–100k por empresa, além do risco de perda parcial por ausência de comprovação tempestiva.",
        },
      ]}
      schema={schema}
    />
  );
}
