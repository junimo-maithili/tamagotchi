import statsDecay from '../assets/statsDecay.tsx';

const CheckIn = () => {
    const hunger = statsDecay('hunger', 100);
    const fun = statsDecay('fun', 100);

  return (
    <div>
      <p>Hunger: {Math.floor(hunger)}</p>
      <div id="hungerBar" style={{width: 'var(--hunger-level)'}}></div>

      <p>Fun: {Math.floor(fun)}</p>
      <div id="funBar" style={{width: 'var(--fun-level)'}}></div>

    </div>
  );
};

export default CheckIn;
