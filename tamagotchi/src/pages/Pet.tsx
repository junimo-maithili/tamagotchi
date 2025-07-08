import { useEffect, useRef, useState } from 'react'
import petImg from '../assets/images/pet.png';

const Pet = () => {
    const petImgRef = useRef<HTMLImageElement | null>(null);

    const startTime = Date.now();
    const [petTime, setPetTime] = useState(startTime);
    const [coziness, setCoziness] = useState(100);

    useEffect(() => {
        if (petImgRef.current) {
            petImgRef.current.onclick = () => {
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
            <img src={petImg} id='petImg' ref={petImgRef}></img>
        </div>
    )
}

export default Pet
