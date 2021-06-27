import {useState } from 'react'
import './App.css';

const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`);

const List = ({list}) => {
    const [filer, setFilter] = useState('');
    const filteredElements = list.filter((item) => item.includes(filer));

    return (
        <>
            <input type="text" placeholder="Filter" onChange={(e) => setFilter(e.target.value)}/>

            <ul>
                {filteredElements.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </>
    )
};

const Clicker = ({children}) => {
    const [n, setN] = useState(0);

    return (
        <div data-count={n}>
            {children}
            <p>Clicked {n} times</p>
            <button onClick={() => setN(n + 1)}>Click me</button>
        </div>
    )
};

function App() {
  return (
    <div className="App">
        <Clicker>
            <List list={list}/>
        </Clicker>
    </div>
  );
}

export default App;
