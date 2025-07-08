import { useEffect, useState } from 'react'

const CheckIn = () => {

    const [hunger, setHunger] = useState(100);

    useEffect(() => {
        chrome.storage.local.get(["hungerLevel"], (result) => {
          // If the list of websites exists, load it into submittedWebsites
          if (result.hungerLevel) {
            setHunger(result.hungerLevel);
          }
        });
      }, []);
     
      function add() {
        setHunger(hunger+1);
        chrome.storage.local.set({hungerLevel:hunger});
      }

  return (
    <div>
        <div id="hungerBar"></div>
        <p>{hunger}</p>
        <button onClick={add}></button>
    </div>
  )
}

export default CheckIn
