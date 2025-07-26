import { useEffect, useRef, useState } from 'react'
import HomePetAnimation from '../assets/home_bg_animation';
import heartImg from '../assets/images/heart_img.png'

const Pet = () => {
    const petImgRef = useRef<HTMLImageElement | null>(null);
    const startTime = Date.now();
    const [petTime, setPetTime] = useState(startTime);
    const [coziness, setCoziness] = useState(100);
    const [hearts, setHearts] = useState(false);

    useEffect(() => {
        const img = petImgRef.current;
        if (img) {
            img.onclick = () => {
                setHearts(true);
                setTimeout(() => setHearts(false), 1000);
                
                setPetTime(Date.now);
                chrome.storage.local.set({'lastTimecoziness': petTime});

                chrome.storage.local.get(['cozinessLevel'], (result) => {
                    setCoziness(result.hungerLevel+5);
                });

                chrome.storage.local.set({'cozinessLevel': coziness});
            }
        }
    });
    
    return (
        <div>
            <HomePetAnimation ref={petImgRef}/>
            
            {hearts && <>
                <img style={{position: 'absolute', left: `${Math.floor(Math.random()*200)}px`, top: `${Math.floor(Math.random()*300)}px`}} src={heartImg} className='heartImg' />
                <img style={{position: 'absolute', left: `${Math.floor(Math.random()*200)}px`, top: `${Math.floor(Math.random()*300)}px`}} src={heartImg} className='heartImg' />
                <img style={{position: 'absolute', left: `${Math.floor(Math.random()*200)}px`, top: `${Math.floor(Math.random()*300)}px`}} src={heartImg} className='heartImg' />
                <img style={{position: 'absolute', left: `${Math.floor(Math.random()*200)}px`, top: `${Math.floor(Math.random()*300)}px`}} src={heartImg} className='heartImg' />
            </> }
           </div>
    )
}

export default Pet
