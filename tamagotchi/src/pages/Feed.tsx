import { useState, useEffect } from 'react'
import bgImg from '../assets/images/feed_bg_1.png'
import foodImg1 from '../assets/images/worse_food_img.png'
import foodImg2 from '../assets/images/better_food_img.png'


const Feed = () => {
    const startTime = Date.now();
    const [feedTime, setFeedTime] = useState(startTime);
    const [hunger, setHunger] = useState(100);
    const [animatingFoodImg, setAnimatingFoodImg] = useState<string | null>(null);
    const [coins, setCoins] = useState(0);

    // Only run this once
    useEffect(() => {
      chrome.storage.local.get(['coins'], (result) => {
        const newCoins = (result.coins ?? 0) + 10;
        chrome.storage.local.set({ 'coins': newCoins });
        setCoins(newCoins);
      });
    }, []);

    function feedPet(hungerRecovered: number) {
      if (coins > hungerRecovered) {
          setFeedTime(Date.now);
          chrome.storage.local.set({'lastTimehunger': feedTime});

          // Get the current hunger
          chrome.storage.local.get(['hungerLevel'], (result) => {
              setHunger(result.hungerLevel+hungerRecovered);
          });
          chrome.storage.local.set({'hungerLevel': hunger});

          setCoins(coins - hungerRecovered);
          chrome.storage.local.set({'coins': coins})
      } else {
        alert("Not enough coins!")
      }

    }

    

  return (
    <div>
        <img src={bgImg} style={{position: 'relative', top: '10px', width: '250px', pointerEvents: 'none'}} />
        <br/>
        <button className="foodBtn" onClick={() => { feedPet(20); setAnimatingFoodImg(foodImg1); }}>
          <img className="foodImg" src={foodImg1} />
          <p className="foodPrice">20 coins</p>
        </button>
        <button className="foodBtn" onClick={() => { feedPet(50); setAnimatingFoodImg(foodImg2); }}>
          <img className="foodImg" src={foodImg2} />
          <p className="foodPrice">50 coins</p>
        </button>

        {animatingFoodImg && (
          <img
            src={animatingFoodImg}
            className="foodAnimationImg"
            onAnimationEnd={() => setAnimatingFoodImg(null)}
          />
        )}
  </div>
  )
}

export default Feed
