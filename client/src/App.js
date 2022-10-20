import './App.css';

const Person = ({ name }) => (
  <h1>Hello, {name}</h1>
);

function App() {
  const dataInArray = [
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Kate'
    },
    {
      id: 3,
      name: 'Lisa'
    },
    {
      id: 4,
      name: 'Max'
    }
  ];

  return (
    <div className="App">
      Loop inside React JSX
      <br/>

      {
        dataInArray.map(({ name, id }) => <div key={id}><Person name={name} /></div>)
      }
    </div>
  );
}

export default App;
