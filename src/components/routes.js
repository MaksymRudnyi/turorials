import React from 'react';
import { Counter } from "./counter";
import { Post } from "./post";
import { Home } from './home';

export default [

            {
                path: '/',
                exact: true,
                element: <Home/>
            },
            {
                path: '/counter',
                element: <Counter/>
            },
            {
                path: '/post',
                element: <Post/>
            }

]