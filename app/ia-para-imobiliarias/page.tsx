import type { Metadata } from "next";
import VerticalPage, { buildVerticalMetadata } from "../components/VerticalPage";

export const metadata: Metadata = buildVerticalMetadata(
  "IA para Imobiliárias — Qualificação de Leads e Atendimento Inteligente",
  "Qualifique leads automaticamente, acelere o atendimento, reduza o tempo de resposta e feche mais negócios. IA aplicada ao mercado imobiliário."
);

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Como a IA qualifica leads imobiliários?", acceptedAnswer: { "@type": "Answer", text: "A IA analisa o perfil do lead (renda estimada, tipo de imóvel buscado, urgência, localização preferida) e classifica automaticamente por probabilidade de conversão, priorizando o tempo do corretor." } },
    { "@type": "Question", name: "A IA pode atender leads fora do horário comercial?", acceptedAnswer: { "@type": "Answer", text: "Sim. Um agente de IA pode responder perguntas, coletar preferências e agendar visitas 24 horas por dia, 7 dias por semana — sem custo adicional de equipe." } },
    { "@type": "Question", name: "Como a IA integra com portais imobiliários?", acceptedAnswer: { "@type": "Answer", text: "Através de webhooks e APIs com Zap Imóveis, OLX, Viva Real e outros portais — os leads chegam automaticamente ao fluxo de atendimento e qualificação." } },
    { "@type": "Question", name: "Corretoras menores também podem implementar?", acceptedAnswer: { "@type": "Answer", text: "Sim. Imobiliárias com 2 a 20 corretores são o perfil que mais se beneficia, pois a IA multiplica a capacidade de atendimento sem contratar mais corretores." } },
  ],
};

export default function ImobiliariasPage() {
  return (
    <VerticalPage
      tag="IA para Imobiliárias"
      title="IA para Imobiliárias"
      subtitle="Mais leads qualificados. Menos tempo perdido com prospects frios."
      descricao="O mercado imobiliário é competitivo e de alto ticket — velocidade de resposta e qualidade do atendimento inicial determinam quem fecha o negócio. A IA permite que sua equipe de corretores se concentre nos leads certos, no momento certo, com o contexto certo para fechar."
      desafio="A maioria das imobiliárias recebe dezenas de leads por semana, mas menos de 20% converte. O restante é desperdiçado por atendimento lento, falta de qualificação e abordagem genérica. Corretores passam horas em conversas que não avançam enquanto leads quentes esfriam."
      comIA={[
        "Qualificação automática de leads com score de propensão de compra",
        "Atendimento inicial 24/7 via WhatsApp com coleta de preferências e perfil",
        "Cruzamento automático de perfil do lead com imóveis disponíveis no portfólio",
        "Agendamento de visitas automatizado com confirmação e lembretes",
        "Nutrição de leads frios com campanhas personalizadas por interesse",
      ]}
      impactos={[
        "Redução de 60% do tempo dos corretores em qualificação inicial",
        "Aumento de 30 a 50% na taxa de resposta dentro de 5 minutos do primeiro contato",
        "Mais visitas agendadas por semana com a mesma equipe",
        "Leads frios reativados automaticamente quando retomam busca",
        "Dados consolidados de funil para decisões de captação de imóveis",
        "Atendimento de qualidade fora do horário comercial sem custo extra de equipe",
      ]}
      faq={[
        { q: "Como a IA qualifica leads imobiliários?", a: "A IA analisa o perfil do lead (renda estimada, tipo de imóvel buscado, urgência, localização preferida) e classifica automaticamente por probabilidade de conversão, priorizando o tempo do corretor." },
        { q: "A IA pode atender leads fora do horário comercial?", a: "Sim. Um agente de IA pode responder perguntas, coletar preferências e agendar visitas 24 horas por dia, 7 dias por semana — sem custo adicional de equipe." },
        { q: "Como a IA integra com portais imobiliários?", a: "Através de webhooks e APIs com Zap Imóveis, OLX, Viva Real e outros portais — os leads chegam automaticamente ao fluxo de atendimento e qualificação." },
        { q: "Corretoras menores também podem implementar?", a: "Sim. Imobiliárias com 2 a 20 corretores são o perfil que mais se beneficia, pois a IA multiplica a capacidade de atendimento sem contratar mais corretores." },
      ]}
      schema={schema}
    />
  );
}
