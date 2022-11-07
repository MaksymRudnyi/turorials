import './App.css';
import { CircleSlider } from "react-circle-slider";

function App() {
  const value = 300;
  const handleChange = (value) => {
    console.log('value: ', value);
  }

  return (
    <div className="App">
      <CircleSlider value={value}
                    knobRadius={22}
                    circleWidth={10}
                    progressWidth={12}
                    max={850}
                    min={300}
                    size={202}
                    showPercentage={true}
                    onChange={handleChange} />
    </div>
  );
}

export default App;
