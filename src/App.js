import './App.css';
import ReactSlider from 'react-slider';

import { useState } from 'react';

function App() {
  const [value, setValue ] = useState([])
  return (
    <div className="App">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[1950, 2023]}
        max={2023}
        min={1950}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        onChange={(value, index) => setValue(value)}
      />

      <hr/>

      Start: {value[0]}
      <br/>
      End: {value[1]}
    </div>
  );
}

export default App;
