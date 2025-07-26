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
    <div className='writingBg' id='checkInText'>
      <br/>
      <p>Hunger: {Math.floor(hunger)}</p>
      <div id='hungerBar' style={{width: 'var(--hunger-level)'}}></div>

      <p>Coziness: {Math.floor(coziness)}</p>
      <div id='cozinessBar' style={{width: 'var(--coziness-level)'}}></div>

      <p>Fun: {Math.floor(fun)}</p>
      <div id='funBar' style={{width: 'var(--fun-level)'}}></div>

      <p> Change name:</p>
      <form onSubmit={addName}>
        <span className='changeName'>
          <input
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type='submit'
            value='Submit'
            id='nameChangeButton'
          />
          </span>
      </form>
      <br/> <br/>
    </div>
  );
};

export default CheckIn;
