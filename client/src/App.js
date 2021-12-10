import axios from 'axios';
import React, { useState, useEffect} from 'react';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/user?ID=12345')
            .then(function (response) {
                // handle success
                console.log(response);
                setUsers(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log('my error');
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

  return (
    <div className="App">
      App
        <ul>
        {
            users.map((user) => (
                <li>
                    {user.name}
                </li>
            ))
        }
        </ul>
    </div>
  );
}

export default App;
