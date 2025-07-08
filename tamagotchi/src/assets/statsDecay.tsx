import { useState, useEffect } from 'react';

const statsDecay = (statName: string, decayMs: number) => {
    const [level, setLevel] = useState(100);

    useEffect(() => {
        const interval = setInterval(() => {
            chrome.storage.local.get([statName, `lastTime${statName}`], (result) => {
                const savedLevel = result[statName] ?? 100;
                const lastTimeKey = `lastTime${statName}`;
                const lastTime = result[lastTimeKey] ?? Date.now();
              
                const secondsElapsed = (Date.now() - lastTime) / 1000;
                const decay = secondsElapsed / 1000;
              
                const currentLevel = Math.max(0, savedLevel - decay);
                setLevel(currentLevel);
                document.documentElement.style.setProperty(`--${statName}-level`, `${currentLevel}%`);
             });
              
    }, decayMs);

    return () => clearInterval(interval);


    }, [statName]);

    return level;

};

export default statsDecay;