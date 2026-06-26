import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da TRÍADE IA — como coletamos, usamos e protegemos seus dados pessoais.",
};

const ULTIMA_ATUALIZACAO = "26 de junho de 2026";
const DPO_EMAIL = "pedrosalomao881@gmail.com";
const EMPRESA = "TRÍADE IA";
const CIDADE = "Itumbiara, Estado de Goiás";

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-navy py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">LGPD · Lei 13.709/2018</span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-3 leading-tight tracking-[-0.035em]">
            Política de Privacidade
          </h1>
          <p className="text-ice/40 text-sm">Última atualização: {ULTIMA_ATUALIZACAO}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-sm max-w-none text-ink-soft leading-relaxed space-y-8">

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">1. Identificação do Controlador</h2>
            <p>
              A <strong className="text-ink">{EMPRESA}</strong>, com sede em {CIDADE}, é a controladora dos dados pessoais coletados por meio de seus sites, ferramentas digitais e serviços de consultoria, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
            <p className="mt-3">
              Encarregado de Proteção de Dados (DPO): <a href={`mailto:${DPO_EMAIL}`} className="text-brand hover:underline">{DPO_EMAIL}</a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">2. Dados Coletados</h2>
            <p>Coletamos os seguintes dados pessoais:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                { dado: "Nome completo", finalidade: "Identificação e personalização do atendimento" },
                { dado: "Endereço de e-mail", finalidade: "Envio de materiais, comunicações e diagnósticos" },
                { dado: "Número de WhatsApp", finalidade: "Contato direto, suporte e envio de conteúdo" },
                { dado: "Dados da empresa (CNPJ, faturamento, regime tributário)", finalidade: "Análise fiscal e geração de diagnóstico personalizado" },
                { dado: "Dados de navegação (cookies, IP, dispositivo)", finalidade: "Análise de uso, melhoria da experiência e segurança" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 p-3 bg-paper-soft rounded-lg border border-paper-border text-sm">
                  <span className="font-medium text-ink min-w-[200px] flex-shrink-0">{item.dado}</span>
                  <span className="text-ink-soft">{item.finalidade}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm">
              Não coletamos dados sensíveis (origem racial, convicções religiosas, dados biométricos, saúde ou vida sexual) conforme definido no art. 5º, II da LGPD.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">3. Base Legal do Tratamento</h2>
            <p>O tratamento dos seus dados pessoais é realizado com fundamento nas seguintes bases legais (art. 7º da LGPD):</p>
            <ul className="mt-3 space-y-2 list-disc pl-5">
              <li><strong className="text-ink">Consentimento</strong> — para envio de e-mails de marketing e comunicações promocionais;</li>
              <li><strong className="text-ink">Execução de contrato</strong> — quando os dados são necessários para prestação dos serviços contratados;</li>
              <li><strong className="text-ink">Legítimo interesse</strong> — para análises de uso do site, prevenção de fraudes e melhoria dos serviços;</li>
              <li><strong className="text-ink">Cumprimento de obrigação legal</strong> — quando exigido pela legislação tributária ou fiscal brasileira.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">4. Finalidades do Tratamento</h2>
            <p>Utilizamos seus dados para:</p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Fornecer diagnósticos tributários e relatórios personalizados;</li>
              <li>Enviar conteúdos educativos, ferramentas gratuitas e materiais sobre reforma tributária;</li>
              <li>Realizar contato comercial mediante solicitação do titular;</li>
              <li>Melhorar nossos produtos, ferramentas e serviços com base no comportamento de uso;</li>
              <li>Cumprir obrigações legais e regulatórias;</li>
              <li>Prevenir fraudes e garantir a segurança dos sistemas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">5. Compartilhamento de Dados</h2>
            <p>Não vendemos seus dados pessoais. Podemos compartilhá-los com:</p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li><strong className="text-ink">Parceiros de tecnologia</strong> — provedores de serviços de nuvem, armazenamento e comunicação (ex: Google, Vercel, Supabase) que atuam como operadores sob contrato de confidencialidade;</li>
              <li><strong className="text-ink">Plataformas de análise</strong> — Google Analytics para análise de tráfego e comportamento de navegação;</li>
              <li><strong className="text-ink">Autoridades públicas</strong> — quando exigido por determinação legal, judicial ou regulatória.</li>
            </ul>
            <p className="mt-3 text-sm">Todos os terceiros com quem compartilhamos dados estão sujeitos a obrigações contratuais de confidencialidade e tratamento adequado.</p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">6. Prazo de Retenção</h2>
            <p>Retemos seus dados pelo tempo necessário às finalidades descritas nesta política ou conforme exigido por lei:</p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Dados de leads e contatos: até 2 anos após o último contato ou cancelamento da inscrição;</li>
              <li>Dados de clientes: pelo período contratual acrescido de 5 anos (prazo prescricional tributário);</li>
              <li>Logs de acesso: 6 meses, conforme o Marco Civil da Internet (Lei nº 12.965/2014);</li>
              <li>Dados de cookies: conforme definido na Política de Cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">7. Direitos do Titular</h2>
            <p>Nos termos dos arts. 17 a 22 da LGPD, você tem direito a:</p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li><strong className="text-ink">Confirmação e acesso</strong> — saber se tratamos seus dados e obter cópia;</li>
              <li><strong className="text-ink">Correção</strong> — atualizar dados incompletos, inexatos ou desatualizados;</li>
              <li><strong className="text-ink">Anonimização, bloqueio ou eliminação</strong> — para dados desnecessários ou tratados em desconformidade;</li>
              <li><strong className="text-ink">Portabilidade</strong> — receber seus dados em formato estruturado;</li>
              <li><strong className="text-ink">Revogação do consentimento</strong> — a qualquer momento, para os tratamentos baseados em consentimento;</li>
              <li><strong className="text-ink">Oposição</strong> — ao tratamento realizado com base em legítimo interesse;</li>
              <li><strong className="text-ink">Informação sobre compartilhamento</strong> — saber com quem seus dados são compartilhados.</li>
            </ul>
            <p className="mt-3">
              Para exercer seus direitos, entre em contato com nosso DPO: <a href={`mailto:${DPO_EMAIL}`} className="text-brand hover:underline">{DPO_EMAIL}</a>. Respondemos em até 15 dias úteis.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">8. Segurança dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, destruição ou divulgação indevida, incluindo criptografia em trânsito (TLS/HTTPS), controles de acesso baseados em perfil e monitoramento de segurança.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">9. Transferência Internacional</h2>
            <p>
              Alguns de nossos fornecedores de tecnologia estão localizados fora do Brasil (ex: servidores Vercel nos EUA, Google). Nesses casos, garantimos que a transferência ocorre mediante garantias adequadas, como cláusulas contratuais padrão ou certificações de conformidade reconhecidas pela ANPD.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">10. Alterações desta Política</h2>
            <p>
              Esta Política pode ser atualizada periodicamente. A data da última atualização está indicada no topo deste documento. Alterações significativas serão comunicadas por e-mail aos titulares cadastrados ou mediante aviso destacado no site.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">11. Contato e Reclamações</h2>
            <p>
              Para dúvidas, solicitações ou reclamações sobre o tratamento de dados pessoais:
            </p>
            <div className="mt-3 p-4 bg-paper-soft rounded-xl border border-paper-border">
              <p className="text-sm"><strong className="text-ink">{EMPRESA}</strong></p>
              <p className="text-sm text-ink-soft">{CIDADE}</p>
              <p className="text-sm"><a href={`mailto:${DPO_EMAIL}`} className="text-brand hover:underline">{DPO_EMAIL}</a></p>
            </div>
            <p className="mt-3 text-sm">
              Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD) por meio do portal <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">gov.br/anpd</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
