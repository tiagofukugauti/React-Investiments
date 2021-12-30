export function deltaPercentual(valores) {
  let resultados = [];

  for (let i = 0; i < valores.length; i++) {
    let dados = {
      calculos: 0,
      fonteVermelha: '',
      posicao: i,
    };
    let fonteVermelha = '';
    let calculos = 0;
    if (i === 0) {
      dados['calculos'] = 0.0;
      dados['fonteVermelha'] = fonteVermelha;
      resultados.push(dados);
    } else {
      calculos = ((valores[i] / valores[i - 1] - 1) * 100).toFixed(2);
      if (calculos < 0) {
        fonteVermelha = 'text-red-500';
      }
      dados['calculos'] = calculos;
      dados['fonteVermelha'] = fonteVermelha;
      resultados.push(dados);
    }
  }
  return resultados;
}

export function resultadoInvestimento(valores) {
  //console.log(valores);
  //console.log(valores[0]);
  //console.log(valores[-2]);
  let diferencaAbsoluta =
    parseFloat(valores[valores.length - 1]) - parseFloat(valores[0]);
  let diferencaRelativa = (
    (parseFloat(valores[valores.length - 1]) / parseFloat(valores[0]) - 1) *
    100
  ).toFixed(2);
  //console.log(diferencaAbsoluta);
  //console.log(diferencaRelativa);
  return {
    diferencaAbsoluta: diferencaAbsoluta,
    diferencaRelativa: diferencaRelativa,
  };
}
