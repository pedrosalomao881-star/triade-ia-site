interface Faixa {
  limite: number
  aliquota: number
  deducao: number
}

// Tabelas Simples Nacional 2024
const ANEXO_I: Faixa[] = [
  { limite: 180000, aliquota: 0.0400, deducao: 0 },
  { limite: 360000, aliquota: 0.0730, deducao: 5940 },
  { limite: 720000, aliquota: 0.0950, deducao: 13860 },
  { limite: 1800000, aliquota: 0.1070, deducao: 22500 },
  { limite: 3600000, aliquota: 0.1430, deducao: 87300 },
  { limite: 4800000, aliquota: 0.1900, deducao: 378000 },
]

const ANEXO_II: Faixa[] = [
  { limite: 180000, aliquota: 0.0450, deducao: 0 },
  { limite: 360000, aliquota: 0.0780, deducao: 5940 },
  { limite: 720000, aliquota: 0.1000, deducao: 13860 },
  { limite: 1800000, aliquota: 0.1120, deducao: 22500 },
  { limite: 3600000, aliquota: 0.1470, deducao: 85500 },
  { limite: 4800000, aliquota: 0.3000, deducao: 720000 },
]

const ANEXO_III: Faixa[] = [
  { limite: 180000, aliquota: 0.0600, deducao: 0 },
  { limite: 360000, aliquota: 0.1120, deducao: 9360 },
  { limite: 720000, aliquota: 0.1350, deducao: 17640 },
  { limite: 1800000, aliquota: 0.1600, deducao: 35640 },
  { limite: 3600000, aliquota: 0.2100, deducao: 125640 },
  { limite: 4800000, aliquota: 0.3300, deducao: 648000 },
]

const ANEXO_V: Faixa[] = [
  { limite: 180000, aliquota: 0.1550, deducao: 0 },
  { limite: 360000, aliquota: 0.1800, deducao: 4500 },
  { limite: 720000, aliquota: 0.1950, deducao: 9900 },
  { limite: 1800000, aliquota: 0.2050, deducao: 17100 },
  { limite: 3600000, aliquota: 0.2300, deducao: 62100 },
  { limite: 4800000, aliquota: 0.3050, deducao: 540000 },
]

function calcularDAS(rb: number, tabela: Faixa[]): number {
  for (const faixa of tabela) {
    if (rb <= faixa.limite) {
      const aliqEfetiva = (rb * faixa.aliquota - faixa.deducao) / rb
      return rb * Math.max(aliqEfetiva, 0)
    }
  }
  return 0
}

export interface ResultadoRegime {
  nome: string
  total: number
  aliquotaEfetiva: number
  detalhes: Record<string, number>
  viavel: boolean
  motivo?: string
  anexo?: string
}

export interface ResultadoCalculo {
  simplesNacional: ResultadoRegime
  lucroPresumido: ResultadoRegime
  lucroReal: ResultadoRegime
  melhorRegime: string
  economia: number
  fatorR: number
}

export function calcular(
  atividade: string,
  faturamentoAnual: number,
  folhaMensal: number
): ResultadoCalculo {
  const rb = faturamentoAnual
  const folhaAnual = folhaMensal * 12
  const fatorR = rb > 0 ? folhaAnual / rb : 0
  const isServico = atividade === 'servicos' || atividade === 'servicos_profissionais'

  // SIMPLES NACIONAL
  const simplesViavel = rb <= 4800000
  let simplesTotal = 0
  let simplesAnexo = ''

  if (simplesViavel) {
    let tabela: Faixa[]
    switch (atividade) {
      case 'comercio':
        tabela = ANEXO_I
        simplesAnexo = 'Anexo I — Comércio'
        break
      case 'industria':
        tabela = ANEXO_II
        simplesAnexo = 'Anexo II — Indústria'
        break
      case 'servicos':
        if (fatorR >= 0.28) {
          tabela = ANEXO_III
          simplesAnexo = `Anexo III (Fator R ${(fatorR * 100).toFixed(0)}%)`
        } else {
          tabela = ANEXO_V
          simplesAnexo = `Anexo V (Fator R ${(fatorR * 100).toFixed(0)}%)`
        }
        break
      case 'servicos_profissionais':
        tabela = ANEXO_V
        simplesAnexo = 'Anexo V — Profissionais'
        break
      default:
        tabela = ANEXO_I
    }
    simplesTotal = calcularDAS(rb, tabela)
  }

  const simplesNacional: ResultadoRegime = {
    nome: 'Simples Nacional',
    total: simplesViavel ? simplesTotal : 0,
    aliquotaEfetiva: simplesViavel && rb > 0 ? simplesTotal / rb : 0,
    detalhes: simplesViavel ? { 'DAS (guia única)': simplesTotal } : {},
    viavel: simplesViavel,
    motivo: !simplesViavel ? 'Faturamento acima de R$ 4,8M/ano' : undefined,
    anexo: simplesAnexo,
  }

  // LUCRO PRESUMIDO
  const presuncaoIRPJ = isServico ? 0.32 : 0.08
  const presuncaoCSLL = isServico ? 0.32 : 0.12

  const baseIRPJ_LP = rb * presuncaoIRPJ
  const baseCSLL_LP = rb * presuncaoCSLL

  const irpj_LP = baseIRPJ_LP * 0.15
  const adicional_LP = Math.max(0, baseIRPJ_LP - 240000) * 0.1
  const csll_LP = baseCSLL_LP * 0.09
  const pis_LP = rb * 0.0065
  const cofins_LP = rb * 0.03
  const lpTotal = irpj_LP + adicional_LP + csll_LP + pis_LP + cofins_LP

  const lucroPresumido: ResultadoRegime = {
    nome: 'Lucro Presumido',
    total: lpTotal,
    aliquotaEfetiva: rb > 0 ? lpTotal / rb : 0,
    detalhes: {
      'IRPJ': irpj_LP + adicional_LP,
      'CSLL': csll_LP,
      'PIS': pis_LP,
      'COFINS': cofins_LP,
    },
    viavel: true,
  }

  // LUCRO REAL
  const margem = isServico ? 0.25 : atividade === 'industria' ? 0.08 : 0.06
  const lucroEstimado = Math.max(0, rb * margem)

  const irpj_LR = lucroEstimado * 0.15
  const adicional_LR = Math.max(0, lucroEstimado - 240000) * 0.1
  const csll_LR = lucroEstimado * 0.09

  const creditoRatio = isServico ? 0 : 0.35
  const pis_LR = rb * 0.0165 * (1 - creditoRatio)
  const cofins_LR = rb * 0.076 * (1 - creditoRatio)
  const lrTotal = irpj_LR + adicional_LR + csll_LR + pis_LR + cofins_LR

  const lucroReal: ResultadoRegime = {
    nome: 'Lucro Real',
    total: lrTotal,
    aliquotaEfetiva: rb > 0 ? lrTotal / rb : 0,
    detalhes: {
      'IRPJ': irpj_LR + adicional_LR,
      'CSLL': csll_LR,
      'PIS': pis_LR,
      'COFINS': cofins_LR,
    },
    viavel: true,
  }

  // COMPARAR
  const regimes = [simplesNacional, lucroPresumido, lucroReal]
    .filter((r) => r.viavel)
    .sort((a, b) => a.total - b.total)

  const melhorRegime = regimes[0]?.nome ?? 'Lucro Presumido'
  const economia = regimes.length > 1 ? regimes[1].total - regimes[0].total : 0

  return { simplesNacional, lucroPresumido, lucroReal, melhorRegime, economia, fatorR }
}

export function fmt(valor: number): string {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  })
}

export function fmtPct(valor: number): string {
  return (valor * 100).toFixed(1) + '%'
}
