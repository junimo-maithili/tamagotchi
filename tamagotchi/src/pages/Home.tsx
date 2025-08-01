import CheckIn from './CheckIn';
import Feed from './Feed';
import Pet from './Pet';
import Play from './Play';
import { useState, useEffect } from 'react'
import HomePetAnimation from '../assets/home_bg_animation';
import bgImg from '../assets/images/bg_img.png'


const home = () => {
    const [screen, setScreen] = useState('main');
    const [name, setName] = useState('buddy');
    const [coins, setCoins] = useState(0);
    
    useEffect(() => {
        chrome.storage.local.get('petName', (result) => {
            if (result.petName) {
              setName(result.petName);
            }
        });

        const interval = setInterval(() => {
    chrome.storage.local.get('coins', (result) => {
      if (typeof result.coins === 'number') {
        setCoins(result.coins);
      }
    });
    }, 1000);

    return () => clearInterval(interval);

    }, []);

  return (
    <div className='outerDiv' style={{ backgroundImage: `url(${bgImg})` }}>
        <h2 style={{color: 'rgb(239, 0, 207)', position: 'absolute', top: '20px', right: '20px', textAlign: 'right'}}>{coins} coins!</h2>
        <h2 style={{color: 'rgb(239, 0, 207)', position: 'absolute', top: '20px', textAlign: 'left', paddingLeft: '20px', alignSelf: 'flex-start', borderBottom: 'none', padding: 'none'}}>{name}</h2>
        <br/>
        {screen == 'main' && (
            <div id='screen1'>
                <HomePetAnimation />
                <div className='mainNavButtons'> 
                <br/> <br/> <br/> <br/>
                    <button onClick={() => setScreen('feedScreen')}>feed</button>
                    <button onClick={() => setScreen('petScreen')}>pet</button>
                    <button onClick={() => setScreen('playScreen')}>play</button>
                    <button onClick={() => setScreen('checkIn')}>stats</button>
                </div>
            </div>
        )}

        {screen == 'checkIn' && (
            <div id='screen2'>
                <CheckIn />
                <button className='homeButton' onClick={() => setScreen('main')}>Back</button>
            </div>
        )}

        {screen == 'feedScreen' && (
            <div id='feedScreen'>
                <Feed />
                <button className='homeButton' onClick={() => setScreen('main')}>Back</button>
            </div>
        )}

        {screen == 'petScreen' && (
            <div id='petScreen'>
                <Pet />
                <button className='homeButton' onClick={() => setScreen('main')}>Back</button>
            </div>
        )}

        {screen == 'playScreen' && (
            <div id='playScreen'>
                <Play />
                <button className='homeButton' onClick={() => setScreen('main')}>Back</button>
            </div>
        )}

    </div>
  )
}

export default home
