import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const Post = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        return axios.get( 'https://jsonplaceholder.typicode.com/posts/' ).then( response => {
            setData(response.data[0]);
    } );
    }, []);

    return (
        <div>
            post
            <h1>{data?.title}</h1>
            <h2>{data?.body}</h2>
        </div>
    )
};