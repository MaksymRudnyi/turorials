import './App.css';
import { useState } from 'react';

import { SimpleSlider } from "./components/SimpleSlider";
import data from './mock.json';

function App() {
  const [selectedMovie, setSelectedMovie ] = useState(-1);
  return (
    <div className="App">
      {data.map((movie, index) => <h2 onClick={() => setSelectedMovie(index)} key={movie.id}>{movie.title}</h2>)}
      <hr/>
      {selectedMovie !== -1 && <SimpleSlider initialSlide={selectedMovie}/>}
    </div>
  );
}

export default App;
