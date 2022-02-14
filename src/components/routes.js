import React from 'react';
import {Counter} from "./counter";
import Post from "./post";
import Home from './home';
import NotFound from './notFound'

export default [
    {
        path: '/',
        element: <Home.component/>,
        loadData: Home.loadData
    },
    {
        path: 'counter',
        element: <Counter/>
    },
    {
        path: 'post/:id',
        element: <Post.component/>,
        loadData: (store, path) => Post.loadData(store, path.split('/').pop())
    },
    {
        path: '*',
        element: <NotFound.component/>
    }
]