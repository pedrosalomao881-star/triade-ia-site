import HeroScrollytelling from './components/HeroScrollytelling';
import CenarioAtualSection from './components/CenarioAtualSection';
import EcossistemasTriadeSection from './components/EcossistemasTriadeSection';
import ProblemaSection from './components/ProblemaSection';
import MaturidadeSection from './components/MaturidadeSection';
import ApplicacoesReaisSection from './components/ApplicacoesReaisSection';
import DiagnosticoSection from './components/DiagnosticoSection';
import CapacidadesSection from './components/CapacidadesSection';
import SolucaoSection from './components/SolucaoSection';
import DiferencialSection from './components/DiferencialSection';
import CTAFinalSection from './components/CTAFinalSection';

export default function Home() {
  return (
    <main className="relative bg-[#050505]">
      <HeroScrollytelling />
      <section id="cenario-atual">
        <CenarioAtualSection />
      </section>
      <ProblemaSection />
      <section id="modelo-de-maturidade">
        <MaturidadeSection />
      </section>
      <section id="aplicacoes-reais">
        <ApplicacoesReaisSection />
      </section>
      <EcossistemasTriadeSection />
      <section id="diagnostico-ai-first">
        <DiagnosticoSection />
      </section>
      <section id="capacidades">
        <CapacidadesSection />
      </section>
      <SolucaoSection />
      <section id="nossa-diferenca">
        <DiferencialSection />
      </section>
      <CTAFinalSection />
    </main>
  );
}
