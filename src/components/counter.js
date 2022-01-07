import React, {useState} from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="body">
            <div>Clicked: {count}</div>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}