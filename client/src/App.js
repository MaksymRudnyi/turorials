import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './slider';
import slides from './mock.json'

function App() {
  return (
    <div className="App">
      <Slider slides={slides}/>
    </div>
  );
}

export default App;
