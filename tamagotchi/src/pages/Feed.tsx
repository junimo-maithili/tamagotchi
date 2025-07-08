import { useState } from 'react'

const Feed = () => {
    const startTime = Date.now();
    const [feedTime, setFeedTime] = useState(startTime);
    const [hunger, setHunger] = useState(100);

    function feedPet(hungerRecovered: number) {

        setFeedTime(Date.now);
        chrome.storage.local.set({'lastTimehunger': feedTime});

        // Get the current hunger
        chrome.storage.local.get(['hungerLevel'], (result) => {
            setHunger(result.hungerLevel+hungerRecovered);
        });
        chrome.storage.local.set({'hungerLevel': hunger});
    }

  return (
    <div>
        <button onClick={() => feedPet(20)}>food</button>
        <button onClick={() => feedPet(50)}>better food</button>
    </div>
  )
}

export default Feed
