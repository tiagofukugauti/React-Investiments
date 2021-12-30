import { deltaPercentual } from '../helpers/DeltaPercentual';
import { resultadoInvestimento } from '../helpers/DeltaPercentual';
import { transformaMes } from '../helpers/TransformaMes';

export default function Investiment({ children: investiment = null }) {
  if (!investiment) {
    return <div>Impossível renderizar o país</div>;
  }

  function roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }

  function numeroNegativo(valor) {
    let valorNegativo = '';
    if (valor['calculos'] < 0) {
      valorNegativo = valor['calculos'];
    } else if (valor['calculos'] === 0) {
      valorNegativo = '0.00';
    } else {
      valorNegativo = '+' + valor['calculos'].toString();
    }
    return valorNegativo;
  }

  let meses = investiment.report.map(mes => {
    return mes['month'];
  });

  let deltas = investiment.report.map(valores => {
    return valores['value'];
  });

  const fontColor = deltas < 0 ? 'text-red-500' : 'text-black';

  return (
    <div className="border p-2 m-3 mb-4">
      <div>
        <h1 className="text-center font-semibold">{investiment.descricao}</h1>
        <h2 className="text-center font-semibold">
          Resultado do Investimento: R${' '}
          {roundToTwo(resultadoInvestimento(deltas)['diferencaAbsoluta'])} (
          {roundToTwo(resultadoInvestimento(deltas)['diferencaRelativa'])}%)
        </h2>
      </div>
      <div className="p-2 mt-0 m-2 flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <div className="pr-1 text-right">
            <ul>
              {transformaMes(meses).map(mes => (
                <li className="pb-1 border-b" key={investiment.month}>
                  {mes}/
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {investiment.report.map(year => (
                <li className="pb-1 border-b" key={investiment.year}>
                  {year['year']}
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-7">
            <ul>
              {investiment.report.map(value => (
                <li className="pb-1 border-b " key={investiment.value}>
                  R$ {roundToTwo(value['value'])}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-6/12">
          <ul>
            {investiment.report.map(value => (
              <li className="border-b pb-1 text-white">{value['value']}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {deltaPercentual(deltas).map(delta => (
              <li
                id={delta['posicao']}
                className={`pb-1 border-b text-right ${fontColor}`}
              >
                {numeroNegativo(delta)}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
