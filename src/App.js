import './App.css';
import PriceSlider from './price';

import { useState } from 'react';

function App() {
  const [value, setValue ] = useState([])
  return (
    <div className="App">
      <PriceSlider/>
    </div>
  );
}

export default App;
