import bgImg from '../assets/images/bg_img.png';
import CheckIn from './CheckIn';
import Feed from './Feed';
import { useState } from 'react'


const home = () => {
    const [screen, setScreen] = useState('main');

  return (
    <div>
        {screen == 'main' && (
            <div id='screen1'>
                <img src={bgImg} id="bgImg"></img>
                <h2>tamagotchi_name</h2>
                <button onClick={() => setScreen('feedScreen')}>feed</button>
                <button>pet</button>
                <button>play</button>
                <button onClick={() => setScreen('checkIn')}>check-in</button>
            </div>
        )}

        {screen == 'checkIn' && (
            <div id='screen2'>
                <CheckIn />
            </div>
        )}

        {screen == 'feedScreen' && (
            <div id="feedScreen">
                <Feed />
            </div>
        )}
    </div>
  )
}

export default home
