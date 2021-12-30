export default function Investiment({ children: investiment = null }) {
  if (!investiment) {
    return <div>Impossível renderizar o fundo</div>;
  }

  return (
    <div className="border p-2 m-3 mb-4">
      <div>
        <h1 className="text-center font-semibold">{investiment.descricao}</h1>
        <h2 className="text-center font-semibold">
          Resultado do Investimento:
        </h2>
      </div>
      <div className="p-2 mt-0 m-2 flex flex-row items-center justify-between">
        <div className="flex flex-row">
          <div className="pr-1 text-right">
            <ul>
              {investiment.report.map(mes => (
                <li> {mes['month']}/</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {investiment.report.map(year => (
                <li>{year['year']}</li>
              ))}
            </ul>
          </div>
          <div className="ml-7">
            <ul>
              {investiment.report.map(value => (
                <li> {value['value']}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li>{investiment.descricao}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
