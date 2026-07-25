import ReformaTributariaHero from '@/app/components/ReformaTributariaHero';
import OQueMudaReforma from '@/app/components/OQueMudaReforma';
import SplitPaymentImpacto from '@/app/components/SplitPaymentImpacto';
import EcossistemasTriadeSection from '@/app/components/EcossistemasTriadeSection';
import FerramentasReforma from '@/app/components/FerramentasReforma';
import SOAFReforma from '@/app/components/SOAFReforma';

export const metadata = {
  title: 'Reforma Tributária EC 132/2023 - TRÍADE IA',
  description: 'Entenda o impacto da EC 132/2023 no seu negócio. Split Payment, CBS, IBS e como se preparar para a maior reforma tributária desde 1988.',
};

export default function ReformaTributariaPage() {
  return (
    <main className="relative bg-[#050505]">
      <ReformaTributariaHero />
      <OQueMudaReforma />
      <SplitPaymentImpacto />
      <EcossistemasTriadeSection />
      <FerramentasReforma />
      <SOAFReforma />
    </main>
  );
}
