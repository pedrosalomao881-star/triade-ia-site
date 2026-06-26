import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Zap } from "lucide-react";
import { WA_DEFAULT } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sobre a TRÍADE IA",
  description:
    "Somos uma consultoria especializada em transformação AI-First. Diagnóstico, estratégia e implementação com resultado mensurável — baseados em Itumbiara, Goiás.",
};

const pilares = [
  {
    letra: "E",
    palavra: "Estratégia",
    descricao:
      "Toda implementação começa por diagnóstico. Identificamos oportunidades reais, priorizamos pelo retorno e só depois recomendamos tecnologia.",
  },
  {
    letra: "T",
    palavra: "Tecnologia",
    descricao:
      "Dominamos as ferramentas de IA aplicadas a negócios — agentes, automações, análise de dados e plataformas digitais — e escolhemos o que resolve o problema, não o que está na moda.",
  },
  {
    letra: "R",
    palavra: "Resultado",
    descricao:
      "Medimos o que importa: tempo economizado, custo reduzido, leads gerados, margem expandida. Entregamos números, não narrativas.",
  },
];

const valores = [
  {
    icon: <Target className="w-5 h-5" strokeWidth={1.5} />,
    titulo: "Resultado como critério",
    descricao:
      "Não implementamos tecnologia por implementar. Cada projeto tem critérios de sucesso definidos antes de começar.",
  },
  {
    icon: <Eye className="w-5 h-5" strokeWidth={1.5} />,
    titulo: "Transparência total",
    descricao:
      "Se a IA não for a melhor solução para um problema específico, dizemos isso. Preferimos cliente com resultado a cliente insatisfeito.",
  },
  {
    icon: <Zap className="w-5 h-5" strokeWidth={1.5} />,
    titulo: "Operação AI-First própria",
    descricao:
      "Aplicamos internamente o que entregamos. Nossas próprias operações rodam com agentes e automações — o que desenvolvemos já foi testado na prática.",
  },
];

export default function Sobre() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold text-ice/30 border border-white/10 rounded-full px-4 py-1 mb-6 uppercase tracking-widest">
            Sobre a TRÍADE IA
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ice leading-tight mb-6">
            Consultoria AI-First com raízes em Goiás e visão global
          </h1>
          <p className="text-lg text-ice/55 leading-relaxed">
            A TRÍADE IA nasceu com um propósito claro: conduzir empresas à
            transformação pela Inteligência Artificial — com a seriedade e o método
            de uma consultoria estratégica, e a agilidade de quem já opera no modelo AI-First.
            Sediados em Itumbiara, atendemos empresas em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Os três pilares da marca */}
      <section className="py-20 px-6 bg-navy-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-ice/30 uppercase tracking-widest">
              Nosso nome
            </span>
            <h2 className="font-display font-semibold text-2xl text-ice mt-3">
              Três pilares, um propósito
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pilares.map((p) => (
              <div
                key={p.letra}
                className="border border-white/[0.07] rounded-xl p-7 hover:border-white/[0.14] transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center mb-5">
                  <span className="font-display font-bold text-brand text-xl">{p.letra}</span>
                </div>
                <p className="font-display font-bold text-ice text-lg mb-2">{p.palavra}</p>
                <p className="text-ice/45 text-sm leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão, Visão, Posicionamento */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-xs font-semibold text-brand uppercase tracking-widest mb-3">
              Missão
            </p>
            <p className="text-ice/70 text-sm leading-relaxed">
              Democratizar o acesso à transformação AI-First,
              entregando soluções práticas com resultados mensuráveis para empresas de todos os portes.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-mist uppercase tracking-widest mb-3">
              Visão
            </p>
            <p className="text-ice/70 text-sm leading-relaxed">
              Ser a principal referência em transformação empresarial AI-First no
              Sul de Goiás até 2027, com casos de sucesso em múltiplos segmentos.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
              Posicionamento
            </p>
            <p className="text-ice/70 text-sm leading-relaxed">
              Não somos uma agência de chatbots. Somos uma consultoria estratégica
              que conduz negócios para a era da Inteligência Artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 bg-navy-soft">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold text-ice/30 uppercase tracking-widest">
              Como operamos
            </span>
            <h2 className="font-display font-semibold text-2xl text-ice mt-3">
              Princípios que guiam cada entrega
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <div key={i} className="border border-white/[0.07] rounded-xl p-7">
                <div className="w-10 h-10 rounded-lg bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                  {v.icon}
                </div>
                <h3 className="font-display font-semibold text-ice text-base mb-2">
                  {v.titulo}
                </h3>
                <p className="text-ice/45 text-sm leading-relaxed">{v.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold text-ice/30 uppercase tracking-widest">
            Localização
          </span>
          <h2 className="font-display font-semibold text-2xl text-ice mt-3 mb-5">
            Itumbiara, Goiás
          </h2>
          <p className="text-ice/50 text-sm leading-relaxed max-w-xl mx-auto">
            Sediada em Itumbiara, no Sul de Goiás, a TRÍADE IA atende presencialmente
            e remotamente empresas de toda a região — incluindo a Mesorregião do Sul
            Goiano, Triângulo Mineiro e adjacências.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-navy-soft">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-ice mb-4">
            Pronto para conversar?
          </h2>
          <p className="text-ice/50 text-sm mb-8 leading-relaxed">
            Converse com nossa equipe. A primeira conversa é um diagnóstico, não uma venda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors text-sm"
            >
              Solicitar Diagnóstico AI-First
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <Link
              href="/diagnostico"
              className="inline-flex items-center justify-center text-ice/50 hover:text-ice text-sm transition-colors"
            >
              Entender a metodologia →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
