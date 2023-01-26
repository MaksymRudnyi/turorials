import './App.css';
import { Slider } from './slider';
import slides from './mock.json';

function App() {
  return (
    <Slider slides={slides}/>
  );
}

export default App;
