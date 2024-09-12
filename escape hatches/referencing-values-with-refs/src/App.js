import { useRef, useState } from 'react';
import './App.css';

function Counter() {
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert("you clicked " + ref.current + " times!")
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}

function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time Passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
      <StopWatch />
    </div>
  );
}

export default App;
