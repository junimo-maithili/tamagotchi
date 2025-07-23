import statsDecay from '../assets/statsDecay.tsx';
import { useState } from 'react';

const CheckIn = () => {
    const hunger = statsDecay('hunger', 10);
    const coziness = statsDecay('coziness', 10);
    const fun = statsDecay('fun', 10);
    const [name, setName] = useState('buddy');

    function addName () {
      chrome.storage.local.set({petName:name});
    }


  return (
    <div>
      <p>Hunger: {Math.floor(hunger)}</p>
      <div id="hungerBar" style={{width: 'var(--hunger-level)'}}></div>

      <p>Coziness: {Math.floor(coziness)}</p>
      <div id="cozinessBar" style={{width: 'var(--coziness-level)'}}></div>

      <p>Fun: {Math.floor(fun)}</p>
      <div id="funBar" style={{width: 'var(--fun-level)'}}></div>

      <form onSubmit={addName}>
        <span className="addWesbite">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="submit"
            value="Submit"
          />
          </span>
      </form>

    </div>
  );
};

export default CheckIn;
