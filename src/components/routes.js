
import { Counter } from "./counter";
import { Post } from "./post";
import { Home } from './home';
import {App} from "./app";

export default [
    {
        component: App,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/counter',
                component: Counter
            },
            {
                path: '/post',
                component: Post
            }
        ]
    }

]