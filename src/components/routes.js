import React from 'react';
import {Counter} from "./counter";
import Post from "./post";
import {Home} from './home';
import NotFound from './notFound'

export default [
    {
        path: '/',
        exact: true,
        element: <Home/>
    },
    {
        path: 'counter',
        element: <Counter/>
    },
    {
        path: 'post',
        exact: true,
        element: <Post.component/>,
        loadData: Post.loadData
    },
    {
        path: '*',
        element: <NotFound.component/>
    }
]