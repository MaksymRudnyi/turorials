import './App.css';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      App

      <button onClick={() => setShow(!show)}>Show/hide</button>

      <h1 display-if={show}>Show this code</h1>
    </div>
  );
}

export default App;
