import './App.css';
import Lottie from 'react-lottie';
import loader from './loader.json';
import { useState } from 'react';

function App() {
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div className="App">
      <h1>Lottie files</h1>

      <Lottie options={defaultOptions}
              width={300}
              isPaused={isPaused}
              isStopped={isStopped}
      />

      <br/>
      <button onClick={() => setIsStopped(!isStopped)}>Stop</button>
      <button onClick={() => setIsPaused(!isPaused)}>Run</button>
    </div>
  );
}

export default App;
