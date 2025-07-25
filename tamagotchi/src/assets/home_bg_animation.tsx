import { useState, useEffect, forwardRef } from 'react';
import bgImg from '../assets/images/home_bg_1.png';
import bgImg2 from '../assets/images/home_bg_2.png';

const HomePetAnimation = forwardRef<HTMLImageElement, {}>((_, ref) => {
  const [currentFrame, setCurrentFrame] = useState(bgImg);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame(prev => prev === bgImg ? bgImg2 : bgImg);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img
        ref={ref}
        src={currentFrame}
        style={{ width: '300px', position: 'relative', right: '25px', bottom: '20px' }}
      />
    </div>
  );
});

export default HomePetAnimation;
