import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Por que clínicas perdem até 25% da receita antes do paciente chegar",
  description:
    "Faltas, cancelamentos tardios e confirmações manuais não são apenas inconvenientes operacionais — são buracos de receita que se acumulam silenciosamente mês a mês.",
};

export default function ArtigoClinicas() {
  return (
    <>
      <section className="pt-24 pb-16 px-6 bg-navy border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <Link href="/insights" className="text-xs text-ice/30 hover:text-ice transition-colors mb-6 inline-flex items-center gap-1.5">
            ← Voltar para Insights
          </Link>
          <div className="flex items-center gap-3 mb-6 mt-4">
            <span className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 rounded-full px-3 py-1">Clínicas e Saúde</span>
            <span className="text-xs text-ice/30">5 min de leitura</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ice leading-tight mb-6">
            Por que clínicas perdem até 25% da receita antes do paciente chegar
          </h1>
          <p className="text-ice/50 text-base leading-relaxed">
            Faltas, cancelamentos tardios e processos de confirmação manuais não são apenas inconvenientes operacionais — são buracos de receita que se acumulam silenciosamente mês a mês.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-paper">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-ink-soft text-[15px] leading-relaxed">

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">O custo invisível das faltas</h2>
              <p>Uma clínica com 40 consultas por dia e taxa de falta de 15% está perdendo 6 atendimentos diariamente. Em um mês de 22 dias úteis, são 132 consultas não realizadas. Se o ticket médio for R$200, o buraco é de R$26.400 por mês — antes de qualquer outro custo operacional.</p>
              <p className="mt-4">Mas o número real é maior. Cada falta gera custo triplo: a receita da consulta não acontece, o horário poderia ter sido preenchido por outro paciente, e a equipe foi alocada para preparar o atendimento que não veio.</p>
            </div>

            <div className="border border-paper-border rounded-2xl p-8 bg-white shadow-sm">
              <h3 className="font-display font-bold text-ink text-lg mb-4">Onde a receita vaza — em ordem de impacto</h3>
              <div className="space-y-4">
                {[
                  { item: "Faltas sem aviso", impacto: "10 a 25% da agenda", detalhe: "Paciente não vai e não avisa. Horário desperdiçado, sem possibilidade de reposição." },
                  { item: "Cancelamentos tardios", impacto: "5 a 10% adicional", detalhe: "Avisa com menos de 2h. Tarde demais para reagendar outro paciente no horário." },
                  { item: "Atraso na recepção", impacto: "1 a 3 consultas por dia", detalhe: "Confirmação manual consome tempo da recepcionista que poderia usar para atender melhor." },
                  { item: "Retrabalho administrativo", impacto: "2 a 4h por dia de equipe", detalhe: "Ligar para confirmar, registrar no sistema, atualizar planilha — tudo manual." },
                ].map((c, i) => (
                  <div key={i} className="flex gap-4 py-4 border-t border-paper-border first:border-0 first:pt-0">
                    <div className="flex-1">
                      <p className="font-display font-semibold text-ink text-sm">{c.item}</p>
                      <p className="text-ink-muted text-xs mt-1">{c.detalhe}</p>
                    </div>
                    <span className="text-xs font-bold text-brand bg-brand/[0.08] rounded-lg px-3 py-1 whitespace-nowrap self-start">{c.impacto}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">Por que a confirmação manual não resolve</h2>
              <p>A resposta mais comum é "vamos confirmar por telefone". O problema: ligar para confirmar consome entre 3 e 5 minutos por paciente. Em uma agenda de 40 consultas, são até 3,5 horas de trabalho diário só em confirmações — por uma recepcionista que também está recebendo pacientes, respondendo WhatsApp e gerenciando a fila.</p>
              <p className="mt-4">O resultado é que a confirmação fica incompleta. Ligam para os fáceis de alcançar, deixam os difíceis para depois, e "depois" frequentemente é tarde demais.</p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">O que muda com confirmação automatizada via IA</h2>
              <p>A confirmação automatizada via WhatsApp não é apenas "mandar uma mensagem". Um sistema bem implementado:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Confirma 48h antes com opção de reagendamento em 1 clique",
                  "Lembra novamente 2h antes — e identifica se o paciente não confirmou",
                  "Alerta a recepção sobre horários em risco de falta com tempo suficiente para reagendar",
                  "Aprende com o histórico — identifica pacientes com padrão de falta e aumenta a frequência de contato",
                  "Preenche automaticamente horários vagos com pacientes da lista de espera",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand mt-1 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">Clínicas que implementam esse sistema com boas configurações reduzem a taxa de falta de 15% para 8 a 10% em 60 dias — e liberam 2 a 3 horas diárias da recepção para atendimento presencial de qualidade.</p>
            </div>

            <div className="border-l-4 border-brand pl-6 py-2">
              <p className="text-ink font-display font-semibold text-lg leading-relaxed">
                "Reduzir a taxa de falta de 15% para 9% em uma clínica com 40 consultas/dia representa mais de R$15.000 de receita recuperada por mês."
              </p>
            </div>

            <div>
              <h2 className="font-display font-bold text-2xl text-ink mb-4">O passo seguinte: diagnóstico da sua agenda</h2>
              <p>Antes de contratar qualquer solução, é preciso entender qual porcentagem real da sua agenda está sendo desperdiçada e em qual parte do processo o vazamento é maior. Essa é exatamente a análise que fazemos no Diagnóstico AI-First — específica para o contexto da sua clínica.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-navy">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl text-ice mb-4">Mapear onde sua clínica está perdendo receita</h2>
          <p className="text-ice/45 text-sm leading-relaxed mb-8">O Diagnóstico AI-First identifica os principais vazamentos de receita e qual solução gera retorno mais rápido no contexto específico da sua operação.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/diagnostico" className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-dark transition-colors text-sm">
              Solicitar Diagnóstico <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <Link href="/ia-para-clinicas" className="inline-flex items-center gap-2 text-ice/45 hover:text-ice text-sm transition-colors px-6 py-3.5 border border-white/[0.08] rounded-lg hover:border-white/[0.18]">
              Ver IA para Clínicas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
