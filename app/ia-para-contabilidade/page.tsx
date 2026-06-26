import type { Metadata } from "next";
import VerticalPage, { buildVerticalMetadata } from "../components/VerticalPage";

export const metadata: Metadata = buildVerticalMetadata(
  "IA para Contabilidade — Análise Fiscal e Automação Contábil em Goiás",
  "Reduza o tempo gasto em tarefas repetitivas, automatize obrigações acessórias e entregue mais valor estratégico aos seus clientes. IA para escritórios contábeis em Goiás."
);

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quais tarefas contábeis a IA pode automatizar?", acceptedAnswer: { "@type": "Answer", text: "Classificação de lançamentos, conciliação bancária, geração de obrigações acessórias, extração de dados de documentos fiscais e alertas de vencimento de obrigações." } },
    { "@type": "Question", name: "A IA é confiável para tarefas fiscais?", acceptedAnswer: { "@type": "Answer", text: "A IA funciona como assistente com supervisão humana. Ela processa volumes grandes com precisão, mas o contador valida e assina a responsabilidade técnica — como sempre." } },
    { "@type": "Question", name: "Meu escritório precisa ser grande para se beneficiar?", acceptedAnswer: { "@type": "Answer", text: "Não. Escritórios com 5 a 50 funcionários geralmente têm o maior retorno, pois a IA multiplica a capacidade sem necessidade de contratação imediata." } },
    { "@type": "Question", name: "Como a IA ajuda na retenção de clientes contábeis?", acceptedAnswer: { "@type": "Answer", text: "Liberando o contador de tarefas operacionais, ele passa a oferecer análises estratégicas, planejamento tributário e consultoria — o que diferencia o escritório e aumenta a percepção de valor." } },
  ],
};

export default function ContabilidadePage() {
  return (
    <VerticalPage
      tag="IA para Contabilidade"
      title="IA para Escritórios Contábeis"
      subtitle="Menos operação. Mais consultoria. Mais margem."
      descricao="Escritórios contábeis estão sob pressão constante: volume crescente de obrigações, clientes exigindo mais e equipes no limite. A IA não substitui o contador — multiplica o que ele consegue fazer. A TRÍADE IA identifica onde sua operação pode ser automatizada para liberar tempo para o que gera mais valor."
      desafio="A maior parte do tempo de um escritório contábil é consumida por tarefas repetitivas e de baixo valor: lançamentos, conciliações, retirada de dados de documentos, geração de relatórios padronizados. Isso deixa pouco espaço para a consultoria estratégica que os clientes realmente precisam — e que justifica honorários maiores."
      comIA={[
        "Classificação automática de lançamentos contábeis com aprendizado contínuo",
        "Extração de dados de NF-e, NF-S e documentos fiscais sem digitação manual",
        "Conciliação bancária automatizada com alertas de divergências",
        "Geração assistida de obrigações acessórias (SPED, ECF, EFD) com menos retrabalho",
        "Dashboard por cliente com indicadores financeiros e alertas proativos",
      ]}
      impactos={[
        "Redução de 50 a 70% do tempo em tarefas de digitação e classificação",
        "Capacidade de atender 30% mais clientes sem aumentar equipe proporcional",
        "Menos erros em obrigações acessórias e menor risco de multas",
        "Contador com tempo para oferecer consultoria tributária e planejamento",
        "Maior satisfação e retenção de clientes com entregas mais rápidas",
        "Diferencial competitivo claro em relação a concorrentes operacionais",
      ]}
      faq={[
        { q: "Quais tarefas contábeis a IA pode automatizar?", a: "Classificação de lançamentos, conciliação bancária, geração de obrigações acessórias, extração de dados de documentos fiscais e alertas de vencimento de obrigações." },
        { q: "A IA é confiável para tarefas fiscais?", a: "A IA funciona como assistente com supervisão humana. Ela processa volumes grandes com precisão, mas o contador valida e assina a responsabilidade técnica — como sempre." },
        { q: "Meu escritório precisa ser grande para se beneficiar?", a: "Não. Escritórios com 5 a 50 funcionários geralmente têm o maior retorno, pois a IA multiplica a capacidade sem necessidade de contratação imediata." },
        { q: "Como a IA ajuda na retenção de clientes contábeis?", a: "Liberando o contador de tarefas operacionais, ele passa a oferecer análises estratégicas, planejamento tributário e consultoria — o que diferencia o escritório e aumenta a percepção de valor." },
      ]}
      schema={schema}
    />
  );
}
