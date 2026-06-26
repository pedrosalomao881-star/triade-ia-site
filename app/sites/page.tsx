import type { Metadata } from "next";
import { MousePointerClick, Bot, Globe, MonitorSmartphone, BarChart3, Zap } from "lucide-react";
import PilarPage from "../components/PilarPage";

export const metadata: Metadata = {
  title: "Sites Inteligentes de Conversão | TRÍADE IA",
  description: "Sites de alta conversão com agentes de IA integrados, SEO técnico, automação de captação de leads e funis de venda para empresas que querem crescer digitalmente.",
};

const iconClass = "w-5 h-5";

export default function Sites() {
  return (
    <PilarPage
      tag="Sites Inteligentes de Conversão"
      title="Um site que converte, não só que existe"
      description="Desenvolvemos plataformas digitais de alta conversão com IA integrada — que captam leads, qualificam visitantes e alimentam seu funil comercial enquanto você foca no negócio."
      features={[
        {
          icon: <MousePointerClick className={iconClass} strokeWidth={1.5} />,
          title: "Arquitetura focada em conversão",
          description: "Cada elemento é pensado para transformar visitante em lead e lead em cliente. Copy, CTA, estrutura e velocidade alinhados ao objetivo comercial.",
        },
        {
          icon: <Bot className={iconClass} strokeWidth={1.5} />,
          title: "Agente de IA integrado",
          description: "Chat inteligente no site que responde dúvidas, qualifica visitantes e captura contatos no momento certo — sem formulário genérico que ninguém preenche.",
        },
        {
          icon: <Globe className={iconClass} strokeWidth={1.5} />,
          title: "SEO técnico e estrutural",
          description: "Construído com as melhores práticas de SEO: velocidade, estrutura semântica, dados estruturados e otimização para os termos que seus clientes buscam.",
        },
        {
          icon: <MonitorSmartphone className={iconClass} strokeWidth={1.5} />,
          title: "Mobile primeiro",
          description: "Design responsivo com foco no mobile, onde a maioria dos acessos acontece. Experiência consistente em qualquer dispositivo.",
        },
        {
          icon: <BarChart3 className={iconClass} strokeWidth={1.5} />,
          title: "Analytics e rastreamento de conversão",
          description: "Google Analytics, Meta Pixel e rastreamento configurados corretamente desde o início — para saber exatamente o que gera resultado.",
        },
        {
          icon: <Zap className={iconClass} strokeWidth={1.5} />,
          title: "Performance e velocidade",
          description: "Sites que carregam em menos de 2 segundos. Velocidade não é detalhe técnico — é conversão. Cada segundo a mais de carregamento reduz a taxa de conversão.",
        },
      ]}
      steps={[
        {
          number: "01",
          title: "Estratégia e briefing",
          description: "Entendemos o público-alvo, o objetivo do site, os diferenciais do negócio e os termos que os clientes usam ao buscar sua solução.",
        },
        {
          number: "02",
          title: "Estrutura e copy",
          description: "Definimos a arquitetura de páginas, o fluxo do usuário e escrevemos os textos com foco em comunicar valor e gerar ação — não apenas informar.",
        },
        {
          number: "03",
          title: "Desenvolvimento e integração",
          description: "Construímos o site com código limpo e performático, integramos o agente de IA, configuramos analytics e conectamos com CRM e ferramentas de marketing.",
        },
        {
          number: "04",
          title: "Lançamento e otimização",
          description: "Publicamos, monitoramos os primeiros acessos, identificamos pontos de melhoria e otimizamos com base em dados reais de comportamento.",
        },
      ]}
      results={[
        "Site que gera leads de forma contínua, não apenas um cartão de visitas digital",
        "Agente de IA qualificando visitantes e capturando contatos 24 horas",
        "Melhor posicionamento nos resultados de busca para termos relevantes ao negócio",
        "Experiência fluida em mobile que não perde o visitante por lentidão ou layout quebrado",
        "Dados claros de onde vêm os leads e quais canais geram mais conversão",
        "Integração completa com o processo comercial existente",
      ]}
    />
  );
}
