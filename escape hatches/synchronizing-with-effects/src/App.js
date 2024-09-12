import { useState, useRef, useEffect } from 'react';
import './App.css';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  })

  return (
    <video ref={ref} src={src} />
  );
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  function handleClick() {
    setIsPlaying(!isPlaying);
  }
  return (
    <>
      <button onClick={handleClick}>
        { isPlaying ? 'pause' : 'start'}
      </button>
      <VideoPlayer isPlaying={isPlaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />   
    </>
  );
}

export default App;
