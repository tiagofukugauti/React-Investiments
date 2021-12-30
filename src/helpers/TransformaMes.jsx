export function transformaMes(valores) {
  let resultados = [];

  for (let i = 0; i < valores.length; i++) {
    let mes = parseInt(valores[i]);
    let nomeMes = [];

    switch (mes) {
      case 1:
        nomeMes = 'jan';
        break;
      case 2:
        nomeMes = 'fev';
        break;
      case 3:
        nomeMes = 'mar';
        break;
      case 4:
        nomeMes = 'abr';
        break;
      case 5:
        nomeMes = 'mai';
        break;
      case 6:
        nomeMes = 'jun';
        break;
      case 7:
        nomeMes = 'jul';
        break;
      case 8:
        nomeMes = 'ago';
        break;
      case 9:
        nomeMes = 'set';
        break;
      case 10:
        nomeMes = 'out';
        break;
      case 11:
        nomeMes = 'nov';
        break;
      case 12:
        nomeMes = 'dez';
        break;
      default:
        nomeMes = 'Mês inexistente';
    }
    resultados.push(nomeMes);
    //console.log('nomeMes');
    //console.log(nomeMes);
  }
  //console.log('resultados');
  //console.log(resultados);
  return resultados;
}
