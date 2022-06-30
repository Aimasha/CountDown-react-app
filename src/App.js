import { useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(3600);
  const [countdownOn, setCountdownOn] = useState(0);

  const handleStart = () => {
    const newInterval = setInterval(() => {
      setTime((newTime) => newTime - 1);
    }, 1000);
    setCountdownOn(newInterval);
  };

  const handleStop = () => {
    countdownOn && clearInterval(countdownOn);
    setCountdownOn(0);
  };

  const handleReset = () => {
    countdownOn && clearInterval(countdownOn);
    setTime(3600);
    setCountdownOn(0);
  };

  let seconds = ("0" + Math.floor(time % 60)).slice(-2);
  let minutes = ("0" + Math.floor((time / 60) % 60)).slice(-2);
  let hours = ("0" + Math.floor((time / 3600) % 60)).slice(-2);
  return (
    <main>
      <h1 id="display">
        <span id="hours">{hours}</span>:<span id="minutes">{minutes}</span>:
        <span id="seconds">{seconds}</span>
      </h1>
      {countdownOn ? (
        <div>
          <button id="btnStop" onClick={handleStop}>
            Stop
          </button>
          <button id="btnReset" onClick={handleReset}>
            Reset
          </button>
        </div>
      ) : (
        <button id="btnStart" onClick={handleStart}>
          {time >= 3600 ? "Start" : "Resume"}
        </button>
      )}
    </main>
  );
}

export default App;