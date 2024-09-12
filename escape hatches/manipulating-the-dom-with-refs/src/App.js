import { useRef } from 'react';
import './App.css';

function Carousel() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);

  function handleScrollToFirst() {
    firstRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecond() {
    secondRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThird() {
    thirdRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirst}>
          Tom
        </button>
        <button onClick={handleScrollToSecond}>
          Maru
        </button>
        <button onClick={handleScrollToThird}>
          Jellyklorum
        </button>
      </nav>
      <div>
        <ul>
          <li>
            <img src="https://i.imgur.com/aTtVpES.jpg" ref={firstRef}/>
          </li>
          <li>
            <img src="https://i.imgur.com/aTtVpES.jpg" ref={secondRef}/>
          </li>
          <li>
            <img src="https://i.imgur.com/aTtVpES.jpg" ref={thirdRef}/>
          </li>
        </ul>
      </div>
    </>
  );
}

function Form() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Form />
      <Carousel />
    </div>
  );
}

export default App;
