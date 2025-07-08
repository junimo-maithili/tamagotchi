import { useEffect, useState } from 'react'

const CheckIn = () => {

    const [hunger, setHunger] = useState(100);

    useEffect(() => {
        chrome.storage.local.get(['hungerLevel'], (result) => {
          // If the list of websites exists, load it into submittedWebsites
          if (result.hungerLevel) {
            setHunger(result.hungerLevel);
          }
        });
      }, []);
     
    function add() {
        setHunger((prevHunger) => {
            const newHunger = prevHunger + 1;
            chrome.storage.local.set({ hungerLevel: newHunger });
            document.documentElement.style.setProperty('--hunger-level', `${newHunger}%`);
            return newHunger;
        });
    }

    return (
        <div>
            <div id="hungerBar" style={{width: 'var(--hunger-level)'}}>a</div>
            <p>{hunger}</p>
            <button onClick={add}></button>
        </div>
    )
}

export default CheckIn
