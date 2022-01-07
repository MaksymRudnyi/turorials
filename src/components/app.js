import React, {useState} from 'react';

import './styles.scss';

export const App = () => {
    console.log('app');
    const [count, setCount] = useState(0);

    return (
        <div className="body">
            App
            <div>Clicked: {count}</div>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
};