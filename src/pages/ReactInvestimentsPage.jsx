import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Investments from '../components/Investiments';
import TextInput from '../components/TextInput';
import { allInvestiments } from '../data/investments-2-1';
import { corrigeDados } from '../helpers/NovosDados';

export default function ReactInvestimentsPage() {
  const [investimentFilter, setInvestimentFilter] = useState('Fundo');
  let dadosCorrigidos = corrigeDados(allInvestiments);

  function handleInvestimentFilterChange(newInvestimentFilter) {
    setInvestimentFilter(newInvestimentFilter);
  }

  const filteredInvestiments = dadosCorrigidos.filter(({ descricao }) => {
    return descricao
      .toLocaleLowerCase()
      .includes(investimentFilter.toLocaleLowerCase());
  });

  console.log(filteredInvestiments);

  return (
    <div>
      <Header>React Investiments</Header>
      <Main>
        <TextInput
          id="inputInvestimentFilter"
          labelDescription="Informe o tipo de fundo:"
          inputValue={investimentFilter}
          onInputChange={handleInvestimentFilterChange}
          autoFocus
        />
        <Investments>{filteredInvestiments}</Investments>
      </Main>
    </div>
  );
}
