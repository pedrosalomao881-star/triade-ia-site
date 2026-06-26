import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText, Map, Rocket } from "lucide-react";
import MaturityModel from "../components/MaturityModel";
import DiagnosticoForm from "../components/DiagnosticoForm";

export const metadata: Metadata = {
  title: "Diagnóstico AI-First — Metodologia e Entregáveis",
  description:
    "Mapeamos sua operação, identificamos onde a IA gera retorno real e entregamos um Roadmap AI-First personalizado. Gratuito, sem compromisso.",
};

const etapas = [
  { icon: <FileText className="w-5 h-5" strokeWidth={1.5} />, numero: "01", titulo: "Solicitação", descricao: "Você preenche o formulário com informações básicas sobre sua empresa e desafios atuais. Leva menos de 3 minutos." },
  { icon: <Clock className="w-5 h-5" strokeWidth={1.5} />, numero: "02", titulo: "Sessão estratégica (60–90 min)", descricao: "Reunião online com especialista da TRÍADE IA. Mapeamos operação em profundidade: processos, gargalos, custos ocultos e oportunidades." },
  { icon: <Map className="w-5 h-5" strokeWidth={1.5} />, numero: "03", titulo: "Mapa de oportunidades", descricao: "Em até 5 dias úteis, você recebe o Mapa de Oportunidades — lista priorizada com iniciativas de maior retorno, estimativa de ROI e complexidade." },
  { icon: <Rocket className="w-5 h-5" strokeWidth={1.5} />, numero: "04", titulo: "Roadmap AI-First", descricao: "Plano de implementação fase a fase com cronograma, investimento estimado, tecnologias recomendadas e KPIs de sucesso." },
];

const entregaveis = [
  "Relatório de Maturidade Digital — nível 1 a 5 no modelo AI-First",
  "Mapa priorizado de oportunidades de IA no seu contexto específico",
  "Estimativa de ROI por iniciativa identificada",
  "Roadmap de implementação fase a fase",
  "Recomendação de stack tecnológica adequada à sua realidade",
  "Critérios de sucesso e KPIs para cada etapa do plano",
];

const faq = [
  { q: "O diagnóstico é realmente gratuito?", a: "Sim. Não há cobrança, não há obrigação de contratar e não fazemos pitch de vendas durante a sessão. O objetivo é entregar valor primeiro." },
  { q: "Minha empresa precisa já ter IA implementada?", a: "Não. O diagnóstico é especialmente valioso para empresas que ainda não começaram — é exatamente isso que mapeamos." },
  { q: "Preciso ter conhecimento técnico?", a: "Nenhum. A sessão é conduzida em linguagem de negócios. Empresários e gestores sem background técnico são nosso público principal." },
  { q: "Em quanto tempo recebo os entregáveis?", a: "Agendamos a sessão em até 48 horas após o contato. O Mapa de Oportunidades e o Roadmap são entregues em até 5 dias úteis após a sessão." },
  { q: "Quais segmentos vocês atendem?", a: "Clínicas, laboratórios, cooperativas, agronegócio, escritórios contábeis, distribuidoras, imobiliárias, supermercados, indústrias e prestadores de serviço." },
  { q: "A TRÍADE IA vai me obrigar a contratar algum serviço?", a: "Não. O diagnóstico é independente. Se fizer sentido continuar, apresentamos uma proposta. Se não fizer, você fica com o relatório e o roadmap para usar como quiser." },
];

export default function Diagnostico() {
  return (
    <>
      {/* Hero + Form */}
      <section className="relative pt-24 pb-0 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(46,204,113,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — copy */}
            <div className="pt-6 pb-24">
              <span className="inline-block text-xs font-semibold text-brand border border-brand/20 rounded-full px-4 py-1 mb-6 uppercase tracking-widest">
                Principal oferta
              </span>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-ice leading-tight mb-6">
                Diagnóstico AI-First
              </h1>
              <p className="text-lg text-ice/55 leading-relaxed mb-8">
                Antes de implementar qualquer tecnologia, entendemos seu negócio.
                Mapeamos operações, identificamos onde a IA gera retorno real
                e entregamos um Roadmap personalizado — fase a fase, com ROI estimado.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Gratuito e sem compromisso",
                  "Sessão de 60 a 90 minutos com especialista",
                  "Roadmap entregue em até 5 dias úteis",
                  "Sem pitch de vendas durante a sessão",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" strokeWidth={2} />
                    <span className="text-ice/65 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/[0.06] pt-6">
                <Link href="/quiz" className="inline-flex items-center gap-2 text-ice/40 hover:text-brand text-sm transition-colors">
                  Não sabe seu nível? Faça o Quiz de Maturidade primeiro →
                </Link>
              </div>
            </div>

            {/* Right — form card */}
            <div className="relative" id="diagnostico-form">
              <div
                className="lg:sticky lg:top-24 border border-white/[0.08] rounded-2xl p-8 bg-navy-soft"
              >
                <p className="font-display font-bold text-ice text-xl mb-1">Solicitar Diagnóstico AI-First</p>
                <p className="text-ice/40 text-sm mb-8">Nossa equipe entra em contato em até 48 horas.</p>
                <DiagnosticoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modelo de Maturidade */}
      <section className="py-24 px-6 bg-navy-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest">Modelo de Avaliação</span>
            <h2 className="font-display font-semibold text-2xl text-ice mt-3 mb-4">Como avaliamos sua empresa</h2>
            <p className="text-ice/45 text-sm max-w-lg mx-auto">Identificamos em qual nível sua operação está e qual o caminho mais eficiente para avançar.</p>
          </div>
          <MaturityModel />
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest">Processo</span>
            <h2 className="font-display font-semibold text-2xl text-ice mt-3">Como funciona o Diagnóstico</h2>
          </div>
          <div className="flex flex-col gap-0">
            {etapas.map((e, i) => (
              <div key={e.numero} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-brand/40 flex items-center justify-center text-brand bg-brand/5 flex-shrink-0">{e.icon}</div>
                  {i < etapas.length - 1 && <div className="w-px flex-1 bg-white/[0.05] my-2" />}
                </div>
                <div className="pb-8 pt-1.5">
                  <span className="text-xs font-semibold text-brand/55 uppercase tracking-widest block mb-2">Etapa {e.numero}</span>
                  <h3 className="font-display font-semibold text-ice text-base mb-2">{e.titulo}</h3>
                  <p className="text-ice/42 text-sm leading-relaxed">{e.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregáveis */}
      <section className="py-20 px-6 bg-navy-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest">Entregáveis</span>
            <h2 className="font-display font-semibold text-2xl text-ice mt-3">O que você recebe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {entregaveis.map((e, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-white/[0.06] rounded-xl hover:border-white/[0.12] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-ice/65 text-sm leading-relaxed">{e}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-ice/25 uppercase tracking-widest">Dúvidas</span>
            <h2 className="font-display font-semibold text-2xl text-ice mt-3">Perguntas frequentes</h2>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.05]">
            {faq.map((f, i) => (
              <div key={i} className="py-5">
                <p className="font-display font-semibold text-ice text-sm mb-2">{f.q}</p>
                <p className="text-ice/42 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 bg-navy-soft">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl text-ice mb-4">Solicite agora</h2>
          <p className="text-ice/48 mb-8 text-sm leading-relaxed">Vagas limitadas por mês para garantir a qualidade de cada análise. Preencha o formulário ou fale diretamente pelo WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#diagnostico-form"
              className="inline-flex items-center justify-center gap-2 bg-brand text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors text-sm">
              Solicitar via formulário <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
            <Link href="/quiz" className="inline-flex items-center justify-center text-ice/45 hover:text-ice text-sm transition-colors border border-white/[0.08] rounded-lg px-6 py-3.5 hover:border-white/[0.18]">
              Fazer o Quiz primeiro →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
