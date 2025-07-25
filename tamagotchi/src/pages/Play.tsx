import { useState, useEffect } from 'react';

const Play = () => {
  const colours = ['#8fd3f2', '#bf8ff2', '#aef28f', '#f29c8f'];

  const [correctSequence, setCorrectSequence] = useState<number[]>([]);
  const [inputtedSequence, setInputtedSequence] = useState<number[]>([]);
  const [answer, setAnswer] = useState<'true' | 'false' | 'unset'>('unset');

  const startTime = Date.now();
  const [funTime, setFunTime] = useState(startTime);
  const [fun, setFun] = useState(100);

  useEffect(() => {
    generateSequence();
  }, []);

  function addFun() {
        setFunTime(Date.now);
        chrome.storage.local.set({'lastTimefun': funTime});

        // Get the current hunger
        chrome.storage.local.get(['funLevel'], (result) => {
            setFun(result.hungerLevel+40);
        });
        chrome.storage.local.set({'funLevel': fun});
        
        chrome.storage.local.get(['coins'], (result) => {
          const newCoins = (result.coins ?? 0) + 10;
          chrome.storage.local.set({ 'coins': newCoins });
        });

    }
  

  function generateSequence() {
    const seq = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
    setCorrectSequence(seq);
    setInputtedSequence([]);
    setAnswer('unset');
  }

  function addColour(index: number) {
    setInputtedSequence(prev => [...prev, index]);
  }

  function submit() {
    if (inputtedSequence.length < 4) {
      setAnswer('false');
      return;
    }

    const isCorrect = correctSequence.every((val, i) => val === inputtedSequence[i]);
    setAnswer(isCorrect ? 'true' : 'false');

    if (isCorrect) {
        addFun();
    }

  }

  function resetSelection() {
    generateSequence();
  }

  return (
    <div>
    <div className="writingBg" id="playText">
      <br />
      <br />
      <p>Click the buttons in the correct order!</p>

      {/* Show sequence (for testing or debugging) */}
      <div>
        <p><strong>Target:</strong></p>
        {correctSequence.map((index, i) => (
          <button key={`target-${i}`} style={{backgroundColor: colours[index]}} disabled/>))}
      </div>

      <p><strong>Your Input:</strong></p>
      {inputtedSequence.map((index, i) => (
        <button key={`button-${i}`} style={{ backgroundColor: colours[index], }} disabled/>
      ))}

      <br /><br />

      <p><strong>Choices:</strong></p>
      {colours.map((color, index) => (<button key={index} style={{backgroundColor: color}} onClick={() => addColour(index)}/>))}

      <br /> <br />

      <button onClick={submit}>Submit</button>
      <button onClick={resetSelection}>Restart</button>

      <br /><br />

     
    </div>
    {answer === 'true' && <h3 className='playMessage'> CORRECT! Click Restart to play again!</h3>}
      {answer === 'false' && <h3 className='playMessage'> INCORRECT! Try again.</h3>}
    </div>
  );
};

export default Play;
