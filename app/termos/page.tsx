import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da TRÍADE IA — condições para utilização dos serviços, ferramentas e produtos digitais.",
};

const ULTIMA_ATUALIZACAO = "26 de junho de 2026";
const EMPRESA = "TRÍADE IA";
const CIDADE = "Itumbiara, Estado de Goiás";
const EMAIL = "pedrosalomao881@gmail.com";

export default function Termos() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header */}
      <div className="bg-navy py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">Condições de Uso</span>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ice mt-3 mb-3 leading-tight tracking-[-0.035em]">
            Termos de Uso
          </h1>
          <p className="text-ice/40 text-sm">Última atualização: {ULTIMA_ATUALIZACAO}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-sm max-w-none text-ink-soft leading-relaxed space-y-8">

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar qualquer serviço, ferramenta, conteúdo ou produto digital oferecido pela <strong className="text-ink">{EMPRESA}</strong>, com sede em {CIDADE}, você declara ter lido, compreendido e concordado com estes Termos de Uso em sua integralidade.
            </p>
            <p className="mt-3">
              Caso não concorde com qualquer disposição destes Termos, você deve cessar imediatamente o uso dos serviços. A utilização continuada dos serviços após eventual atualização destes Termos implica aceitação das modificações.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">2. Descrição dos Serviços</h2>
            <p>A {EMPRESA} disponibiliza:</p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Ferramentas digitais gratuitas para análise tributária (Simulador Fator R, Calculadora CBS/IBS, Checklist Split Payment e demais);</li>
              <li>Produtos digitais pagos (ebooks, guias, planilhas e materiais educativos sobre regimes tributários e Reforma Tributária EC 132/2023);</li>
              <li>Serviços de consultoria em Inteligência Artificial para empresas (diagnóstico, roadmap e implementação);</li>
              <li>Sistemas de software (SOAF, ContabOS e demais plataformas), sujeitos a contratos específicos;</li>
              <li>Conteúdos informativos e educativos sobre tributação e tecnologia.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">3. Natureza Educativa e Limitações</h2>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-900 text-sm font-medium">
                Todos os conteúdos, ferramentas, calculadoras, guias e materiais disponibilizados pela {EMPRESA} têm finalidade exclusivamente educativa e informativa.
              </p>
            </div>
            <p className="mt-4">
              As informações fornecidas <strong className="text-ink">não constituem assessoria jurídica, contábil, fiscal ou financeira profissional</strong> e não substituem a consulta a profissionais habilitados (contador, advogado tributarista, assessor financeiro). Os cálculos e simulações são estimativas baseadas em parâmetros gerais e podem diferir da situação específica de cada empresa.
            </p>
            <p className="mt-3">
              A {EMPRESA} não se responsabiliza por decisões tomadas com base exclusiva nas informações e ferramentas disponibilizadas sem o acompanhamento de um profissional qualificado.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponibilizado pela {EMPRESA} — incluindo, sem limitação, textos, imagens, gráficos, ferramentas, softwares, marcas, logotipos, metodologias, relatórios e demais materiais — é protegido pela legislação de direitos autorais e propriedade intelectual (Lei nº 9.610/1998 e legislação aplicável).
            </p>
            <p className="mt-3">
              É vedado ao usuário reproduzir, distribuir, modificar, comercializar, sublicenciar ou criar obras derivadas a partir do conteúdo da {EMPRESA} sem autorização prévia e expressa por escrito. O uso permitido é exclusivamente pessoal e não comercial.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">5. Produtos Digitais Pagos</h2>
            <p>
              A compra de produtos digitais (ebooks, guias, planilhas) está sujeita às seguintes condições:
            </p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>O acesso ao produto é disponibilizado imediatamente após confirmação do pagamento;</li>
              <li>Por tratar-se de produto digital com acesso imediato, aplicam-se as exceções do art. 49, parágrafo único do Código de Defesa do Consumidor (CDC) ao direito de arrependimento;</li>
              <li>O conteúdo é para uso pessoal do comprador e não pode ser revendido, distribuído ou compartilhado publicamente;</li>
              <li>A {EMPRESA} reserva-se o direito de atualizar os produtos a qualquer momento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">6. Obrigações do Usuário</h2>
            <p>O usuário se compromete a:</p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Fornecer informações verdadeiras e atualizadas ao utilizar formulários e ferramentas;</li>
              <li>Utilizar os serviços exclusivamente para finalidades lícitas;</li>
              <li>Não tentar acessar sistemas, dados ou áreas restritas sem autorização;</li>
              <li>Não utilizar os serviços para fins de engenharia reversa, reprodução ou concorrência desleal;</li>
              <li>Não automatizar acesso às ferramentas por meio de bots ou scrapers sem autorização prévia.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">7. Limitação de Responsabilidade</h2>
            <p>
              Na extensão máxima permitida pela lei aplicável, a {EMPRESA} não será responsável por:
            </p>
            <ul className="mt-3 space-y-1 list-disc pl-5">
              <li>Danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou impossibilidade de uso dos serviços;</li>
              <li>Decisões fiscais, contábeis ou financeiras tomadas com base nas ferramentas e conteúdos disponibilizados;</li>
              <li>Interrupções temporárias nos serviços por manutenção, falhas técnicas ou eventos fora do controle razoável;</li>
              <li>Conteúdo de sites de terceiros referenciados ou vinculados.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">8. Disponibilidade dos Serviços</h2>
            <p>
              A {EMPRESA} empenha esforços razoáveis para manter seus serviços disponíveis, mas não garante disponibilidade ininterrupta. Manutenções programadas ou emergenciais podem causar indisponibilidades temporárias, sem gerar direito a indenização.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">9. Modificações dos Serviços e Termos</h2>
            <p>
              A {EMPRESA} reserva-se o direito de modificar, suspender ou encerrar qualquer serviço a qualquer momento, com ou sem aviso prévio. Estes Termos podem ser alterados unilateralmente; a versão vigente é sempre a publicada nesta página com a data de atualização indicada.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">10. Foro e Lei Aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de <strong className="text-ink">Itumbiara, Estado de Goiás</strong>, com exclusão de qualquer outro, por mais privilegiado que seja, para dirimir quaisquer controvérsias decorrentes destes Termos.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-ink text-xl mb-3">11. Contato</h2>
            <p>Dúvidas sobre estes Termos de Uso podem ser enviadas para:</p>
            <div className="mt-3 p-4 bg-paper-soft rounded-xl border border-paper-border">
              <p className="text-sm"><strong className="text-ink">{EMPRESA}</strong></p>
              <p className="text-sm text-ink-soft">{CIDADE}</p>
              <p className="text-sm"><a href={`mailto:${EMAIL}`} className="text-brand hover:underline">{EMAIL}</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
