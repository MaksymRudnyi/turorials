import './App.css';
import { useState } from 'react';

const Baner = ({ text }) => (
  <p>text is - {text}</p>
)

function App() {
  const [isActiveBaner, setActiveBaner] = useState(true);
  return (
    <div className="App">
      App
      <button onClick={() => setActiveBaner(!isActiveBaner)}>Change</button>
      <br/>
      <Baner display-if={isActiveBaner} text={'Hello world!'}/>
    </div>
  );
}

export default App;
