import { allInvestiments } from '../data/investments-2-1';
import { corrigeDados } from '../helpers/NovosDados';

let dadosCorrigidos = corrigeDados(allInvestiments);

for (var fundos of dadosCorrigidos) {
  for (var reports of fundos['report']) {
    console.log(reports['month']);
  }
}

let numeros = [
  1000, 1110, 1209.09, 1258.29, 1333.79, 1187.08, 1305.78, 1384.13, 1481.02,
  1525.45, 1647.48, 1614.54,
];

let resultados = []; /*?*/

for (let i = 0; i < numeros.length; i++) /*?*/ {
  if (i === 0) {
    resultados.push(0);
  } else {
    let calculos = ((numeros[i] / numeros[i - 1] - 1) * 100).toFixed(2); /*?*/
    resultados.push(calculos); /*?*/
  }
}
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let resultados2 = [];

for (let i = 0; i < valores.length; i++) /*?*/ {
  let mes = valores[i]; /*?*/
  let nomeMes = '';

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
  console.log(nomeMes);
  resultados2 = nomeMes.slice(); /*?*/
  //resultados2.push(nomeMes);
  console.log(resultados2); /*?*/
}

// for (let i = 0; i < valores.length; i++) {
//   //let mes = valores[i];
//   let nomeMes = [];

//   if (valores === 1) {
//     nomeMes = 'jan';
//   } else if (valores === 2) {
//     nomeMes = 'fev';
//   } else if (valores === 3) {
//     nomeMes = 'mar';
//   } else if (valores === 4) {
//     nomeMes = 'abr';
//   } else if (valores === 5) {
//     nomeMes = 'mai';
//   } else if (valores === 6) {
//     nomeMes = 'jun';
//   } else if (valores === 7) {
//     nomeMes = 'jul';
//   } else if (valores === 8) {
//     nomeMes = 'ago';
//   } else if (valores === 9) {
//     nomeMes = 'set';
//   } else if (valores === 10) {
//     nomeMes = 'out';
//   } else if (valores === 11) {
//     nomeMes = 'nov';
//   } else if (valores === 12) {
//     nomeMes = 'dez';
//   }
//   console.log('nomeMes');
//   console.log(nomeMes);
//   resultados.push(nomeMes);
// }
// console.log('resultados');
// console.log(resultados);
// return resultados;
// }
