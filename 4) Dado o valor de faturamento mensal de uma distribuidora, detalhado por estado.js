const estados = ["SP", "RJ", "MG", "ES", "Outros"];
const faturamento = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53];
let faturaPorEstado = [estados, faturamento];

var total = faturamento.reduce(function (total, i) {
  total += i;
  return total;
});

faturaPorEstado[1].forEach((fatura, i) => {
  var porcentagem = (fatura * 100) / total;
  console.log(
    `O percentual de faturamento mensal de ${
      estados[i]
    } é ${porcentagem.toFixed(2)}%`
  );
});
fff;
