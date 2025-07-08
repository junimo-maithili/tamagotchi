import statsDecay from '../assets/statsDecay.tsx';

const CheckIn = () => {
    const hunger = statsDecay('hunger', 10);
    const coziness = statsDecay('coziness', 10);
    const fun = statsDecay('fun', 10);
    


  return (
    <div>
      <p>Hunger: {Math.floor(hunger)}</p>
      <div id="hungerBar" style={{width: 'var(--hunger-level)'}}></div>

      <p>Coziness: {Math.floor(coziness)}</p>
      <div id="cozinessBar" style={{width: 'var(--coziness-level)'}}></div>

      <p>Fun: {Math.floor(fun)}</p>
      <div id="funBar" style={{width: 'var(--fun-level)'}}></div>

    </div>
  );
};

export default CheckIn;
