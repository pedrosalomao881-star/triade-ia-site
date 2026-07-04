export interface FatorRResult {
  folhaPercentual: number;
  fatorRGoverno: number;
  temVantagem: boolean;
  aliquotaEstimada: number;
  mensagem: string;
}

export function calculateFatorR(
  folhaMensal: number,
  receitaBruta: number
): FatorRResult {
  if (folhaMensal <= 0 || receitaBruta <= 0) {
    return {
      folhaPercentual: 0,
      fatorRGoverno: 0.28,
      temVantagem: false,
      aliquotaEstimada: 0,
      mensagem: "Valores devem ser maiores que zero",
    };
  }

  const folhaPercentual = (folhaMensal / receitaBruta) * 100;
  const fatorRGoverno = 28; // 28% conforme LC 123/2006

  const temVantagem = folhaPercentual > fatorRGoverno;

  let aliquotaEstimada = 0;
  if (folhaPercentual <= fatorRGoverno) {
    aliquotaEstimada = 8;
  } else if (folhaPercentual > fatorRGoverno) {
    aliquotaEstimada = 11;
  }

  const mensagem = temVantagem
    ? `✅ Sua empresa TEM VANTAGEM! Folha de ${folhaPercentual.toFixed(
        1
      )}% > Fator R ${fatorRGoverno}% → Alíquota reduzida até 8%`
    : `❌ Sua empresa NÃO tem vantagem. Folha de ${folhaPercentual.toFixed(
        1
      )}% ≤ Fator R ${fatorRGoverno}% → Alíquota padrão 11%`;

  return {
    folhaPercentual,
    fatorRGoverno,
    temVantagem,
    aliquotaEstimada,
    mensagem,
  };
}
