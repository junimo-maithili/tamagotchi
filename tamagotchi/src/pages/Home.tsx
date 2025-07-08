import bgImg from '../assets/images/bg_img.png';
import CheckIn from './CheckIn';
import Feed from './Feed';
import Pet from './Pet';
import Play from './Play';
import { useState, useRef } from 'react'


const home = () => {
    const [screen, setScreen] = useState('main');
    const bgImgRef = useRef<HTMLImageElement | null>(null);

  return (
    <div>
        {screen == 'main' && (
            <div id='screen1'>
                <img src={bgImg} ref={bgImgRef} id="bgImg"></img>
                <h2>tamagotchi_name</h2>
                <button onClick={() => setScreen('feedScreen')}>feed</button>
                <button onClick={() => setScreen('petScreen')}>pet</button>
                <button onClick={() => setScreen('playScreen')}>play</button>
                <button onClick={() => setScreen('checkIn')}>check-in</button>
            </div>
        )}

        {screen == 'checkIn' && (
            <div id='screen2'>
                <CheckIn />
                <button onClick={() => setScreen('main')}>Back</button>
            </div>
        )}

        {screen == 'feedScreen' && (
            <div id='feedScreen'>
                <Feed />
                <button onClick={() => setScreen('main')}>Back</button>
            </div>
        )}

        {screen == 'petScreen' && (
            <div id='petScreen'>
                <Pet />
                <button onClick={() => setScreen('main')}>Back</button>
            </div>
        )}

        {screen == 'playScreen' && (
            <div id='playScreen'>
                <Play />
                <button onClick={() => setScreen('main')}>Back</button>
            </div>
        )}

    </div>
  )
}

export default home
