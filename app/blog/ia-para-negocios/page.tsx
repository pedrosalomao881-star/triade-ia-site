import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Stethoscope, Calculator, Wheat, Truck, Building2, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "IA para Negócios: 6 Setores Transformados | TRÍADE IA",
  description:
    "Como inteligência artificial impacta indústria, comércio, clínicas, contabilidade, cooperativas e agronegócio. Casos práticos e ROI.",
  openGraph: {
    title: "IA para Negócios: 6 Setores Transformados",
    description: "Como IA transforma operações em diferentes segmentos.",
    type: "website",
    url: "https://triadeiaos.com/blog/ia-para-negocios",
  },
};

const setores = [
  {
    slug: "clinicas",
    nome: "Clínicas e Laboratórios",
    icon: <Stethoscope className="w-6 h-6" />,
    descricao: "Confirmação de consultas, triagem automática, reagendamento inteligente",
    impacto: "-40% de faltas | +20% capacidade",
  },
  {
    slug: "contabilidade",
    nome: "Escritórios Contábeis",
    icon: <Calculator className="w-6 h-6" />,
    descricao: "Classificação de documentos, alertas de prazo, análise de inconsistências",
    impacto: "3× mais clientes | -50% tempo operacional",
  },
  {
    slug: "cooperativas",
    nome: "Cooperativas e Agronegócio",
    icon: <Wheat className="w-6 h-6" />,
    descricao: "Gestão de associados, comunicação em escala, adimplência automatizada",
    impacto: "-70% tempo de cobrança | Visibilidade total",
  },
  {
    slug: "distribuidoras",
    nome: "Distribuidoras",
    icon: <Truck className="w-6 h-6" />,
    descricao: "Pedidos automatizados, integração com sistema, sem erros de digitação",
    impacto: "0 erros | +35% velocidade",
  },
  {
    slug: "imobiliarias",
    nome: "Imobiliárias",
    icon: <Building2 className="w-6 h-6" />,
    descricao: "Qualificação de leads, agendamento automático, follow-up contínuo",
    impacto: "+60% taxa de resposta | Nenhuma oportunidade perdida",
  },
  {
    slug: "supermercados",
    nome: "Supermercados e Comércio",
    icon: <ShoppingCart className="w-6 h-6" />,
    descricao: "Atendimento 24h, campanhas personalizadas, retenção de clientes",
    impacto: "Atendimento 24h | +25% retenção",
  },
];

export default function IAParaNegociosHome() {
  return (
    <main className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
            <span className="text-xs font-mono font-semibold text-brand/70 uppercase tracking-widest">
              IA para Negócios
            </span>
            <span className="h-px w-8 bg-brand/40 flex-shrink-0" />
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-ice mb-6">
            6 Setores Transformados
          </h1>
          <p className="text-lg text-ice/50 max-w-2xl mx-auto">
            Como inteligência artificial impacta operações em indústria, comércio, saúde, contabilidade,
            agronegócio e varejo. Conheça o caso do seu setor.
          </p>
        </div>

        {/* Grid de setores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {setores.map((setor) => (
            <Link
              key={setor.slug}
              href={`/blog/ia-para-negocios/${setor.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white/[0.08] rounded-2xl p-8 hover:border-brand/40 hover:bg-white/[0.02] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                  {setor.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-ice text-lg group-hover:text-brand transition-colors">
                    {setor.nome}
                  </h3>
                </div>
              </div>

              <p className="text-ice/50 text-sm mb-6 leading-relaxed">{setor.descricao}</p>

              <div className="pt-6 border-t border-white/[0.08]">
                <p className="text-xs text-brand font-semibold mb-4">{setor.impacto}</p>
                <div className="flex items-center gap-2 text-ice/60 group-hover:text-brand transition-colors">
                  <span className="text-sm">Ver detalhes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-white/[0.08] pt-12">
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-ice mb-4">Seu Setor Não Está Listado?</h3>
            <p className="text-ice/50 mb-8 max-w-2xl mx-auto">
              IA funciona em praticamente todos os setores. Converse com nossos especialistas para
              entender como sua operação pode se transformar.
            </p>
            <a
              href="https://wa.me/5564992966118?text=Quero%20saber%20como%20IA%20pode%20transformar%20meu%20setor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Conversar com Especialista <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
