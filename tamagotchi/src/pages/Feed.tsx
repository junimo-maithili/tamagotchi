import { useState, useEffect } from 'react'

const Feed = () => {
    const startTime = Date.now();
    const [feedTime, setFeedTime] = useState(startTime);
    const [hunger, setHunger] = useState(100);

    function feedPet() {
        setFeedTime(Date.now);
        chrome.storage.local.set({'lastTimeFed': feedTime});

        // Get the current hunger
        chrome.storage.local.get(['hungerLevel'], (result) => {
            setHunger(result.hungerLevel);
        });
        chrome.storage.local.set({'hungerLevel': hunger});
    }

    useEffect(() => {
        const interval = setInterval(() => {    
            let secondsElapsed = Date.now() - feedTime;
            let calculatedHunger = 100 - secondsElapsed/100;
            setHunger(calculatedHunger);
        })

        return () => clearInterval(interval);

    }, [feedTime])
  return (
    <div>
      So basically as soon as someone feeds the animal, record the time, save it in storage, save the hunger at that time, and then dynamically calculate
      the hunger based on the initial time
      <button onClick={feedPet}></button>
    </div>
  )
}

export default Feed
