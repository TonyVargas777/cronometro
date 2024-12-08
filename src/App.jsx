import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 0.01);
      }, 10);
      setRunning(true);
    }
  };

  const stopTimer = () => {
    if (running) {
      clearInterval(timerRef.current);
      setRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setTime(0.00);
    setRunning(false);
  };

  return (
    <div className="App">
      <h1>Contador/Reloj</h1>
      <div className="timer">{time.toFixed(2)}s</div>
      <div className="buttons">
        <button onClick={startTimer}>Iniciar</button>
        <button onClick={stopTimer}>Detener</button>
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
  );
}

export default App;
