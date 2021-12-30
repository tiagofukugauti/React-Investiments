import Investiment from './Investiment';

export default function Investiments({ children: investiments = [] }) {
  return (
    <div>
      {investiments.map(investiment => {
        return <Investiment key={investiment.id}>{investiment}</Investiment>;
      })}
    </div>
  );
}
