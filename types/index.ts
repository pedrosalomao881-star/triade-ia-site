// ─── Domain types ─────────────────────────────────────────────────────────────
// Phase 2: these interfaces will back the TRÍADE IA Platform (Portal, CRM, etc.)
// Phase 1.5: used only for the lead capture flow and quiz

export type LeadSource = "quiz" | "diagnostico" | "vertical" | "home" | "whatsapp";

export type LeadStatus = "new" | "contacted" | "qualified" | "proposal" | "closed" | "lost";

export interface Lead {
  id?: string;
  nome: string;
  empresa: string;
  email?: string;
  whatsapp: string;
  setor?: string;
  nivelMaturidade?: number; // 1-5
  source?: LeadSource;
  status?: LeadStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ProjectPhase = "diagnostico" | "roadmap" | "desenvolvimento" | "implantacao" | "evolucao";
export type ProjectStatus = "planejado" | "em_andamento" | "concluido" | "pausado";

export interface EtapaRoadmap {
  numero: number;
  titulo: string;
  descricao: string;
  duracaoSemanas: number;
  investimentoEstimado?: number;
  kpis: string[];
}

export interface Roadmap {
  id?: string;
  clienteId: string;
  etapas: EtapaRoadmap[];
  investimentoTotal?: number;
  roiEstimado?: number;
  prazoTotalSemanas?: number;
  criadoEm?: Date;
}

export interface Projeto {
  id: string;
  clienteId: string;
  titulo: string;
  descricao: string;
  fase: ProjectPhase;
  status: ProjectStatus;
  kpis?: Record<string, number>;
  roadmap?: Roadmap;
  dataInicio?: Date;
  dataFim?: Date;
  criadoEm?: Date;
}

export interface Diagnostico {
  id?: string;
  leadId: string;
  nivelMaturidade: number;
  respostas: Record<string, number>; // questionId → pontos
  oportunidades?: string[];
  roadmap?: Roadmap;
  realizadoEm?: Date;
}

export interface Cliente {
  id: string;
  nome: string;
  empresa: string;
  setor: string;
  email?: string;
  whatsapp: string;
  nivelMaturidade: number;
  status: "lead" | "diagnostico" | "proposta" | "ativo" | "inativo";
  projetos?: Projeto[];
  criadoEm: Date;
  atualizadoEm?: Date;
}
