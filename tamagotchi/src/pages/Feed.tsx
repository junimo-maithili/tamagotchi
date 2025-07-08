import { useState, useEffect } from 'react'

const Feed = () => {
    const startTime = Date.now();
    const [feedTime, setFeedTime] = useState(startTime);
    const [hunger, setHunger] = useState(100);

    function feedPet(hungerRecovered: number) {

        setFeedTime(Date.now);
        chrome.storage.local.set({'lastTimeFed': feedTime});

        // Get the current hunger
        chrome.storage.local.get(['hungerLevel'], (result) => {
            setHunger(result.hungerLevel+hungerRecovered);
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
        <button onClick={() => feedPet(20)}>food</button>
        <button onClick={() => feedPet(50)}>better food</button>
    </div>
  )
}

export default Feed
