import { useEffect, useRef, useState } from 'react'
import HomePetAnimation from '../assets/home_bg_animation';

const Pet = () => {
    const petImgRef = useRef<HTMLImageElement | null>(null);

    const startTime = Date.now();
    const [petTime, setPetTime] = useState(startTime);
    const [coziness, setCoziness] = useState(100);

    useEffect(() => {
        const img = petImgRef.current;

        if (img) {
            img.onclick = () => {
                alert("PET PETTED")
                
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
        </div>
    )
}

export default Pet
