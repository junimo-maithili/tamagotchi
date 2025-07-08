import { useEffect, useRef } from 'react'
import petImg from '../assets/images/pet.png';

const Pet = () => {
    const petImgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
            if (petImgRef.current) {
            petImgRef.current.onclick = () => {
                alert("PET PETTED");
            }
        }
    }, [])

    return (
        <div>
            <img src={petImg} id='petImg' ref={petImgRef}></img>
        </div>
    )
}

export default Pet
