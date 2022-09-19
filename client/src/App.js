import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
    const [people, setPeople] = useState([]);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     axios.get('https://swapi.dev/api/people/')
    //         .then((data) => {
    //             console.log(data);
    //
    //             setPeople(data.data?.results)
    //             // debugger
    //         })
    // }, []);


    useEffect(async () => {
        try {
            const data = await axios.get('https://swapi.dev/api/people/');

            setPeople(data.data?.results)
        } catch (e) {
            setError('Something went wrong.')
        }

    }, [])

  return (
    <div className="App">
        {error && <h3>{error}</h3>}
        {people.length
            ? (
                <>
                    {people.map((person) => (
                        <h1>{person.name}</h1>
                    ))}
                </>
            )
            : <div>Loading...</div>}
    </div>
  );
}

export default App;
