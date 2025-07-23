import { useState } from 'react'
import bgImg from '../assets/images/feed_bg_1.png'
import foodImg1 from '../assets/images/worse_food_img.png'
import foodImg2 from '../assets/images/better_food_img.png'


const Feed = () => {
    const startTime = Date.now();
    const [feedTime, setFeedTime] = useState(startTime);
    const [hunger, setHunger] = useState(100);
    const [animatingFoodImg, setAnimatingFoodImg] = useState<string | null>(null);


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
        <img src={bgImg} style={{ width: "200px"}}></img>
        <br/>
        <button onClick={() => { feedPet(20); setAnimatingFoodImg(foodImg1); }}>
          <img className="foodImg" src={foodImg1} />
        </button>
        <button onClick={() => { feedPet(50); setAnimatingFoodImg(foodImg2); }}>
          <img className="foodImg" src={foodImg2} />
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
