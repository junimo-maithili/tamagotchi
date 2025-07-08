import bgImg from '../assets/images/bg_img.png';
import CheckIn from './CheckIn';


const home = () => {

    function changePage() {
        const screen1 = document.getElementById('screen1');
        const screen2 = document.getElementById('screen2');

        if (screen1 && screen2) {
            screen1.style.display = 'none';
            screen2.style.display = 'block';
        }

    }

    
  return (
    <div>
        <div id="screen1">
            <img src={bgImg} id="bgImg"></img>
            <h2>tamagotchi_name</h2>
            <button>feed</button>
            <button>pet</button>
            <button>play</button>
            <button onClick={changePage}>check-in</button>
        </div>
        <div id="screen2">
            <CheckIn />
        </div>
    </div>
  )
}

export default home
