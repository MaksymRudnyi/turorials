import React from 'react';
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

import { Counter } from "./counter";
import { Post } from "./post";

import './styles.scss';

export const App = () => {

    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<h1>SSR</h1>} />
                <Route path="counter" element={<Counter />} />
                <Route path="post" element={<Post />} />
            </Routes>

            <Link to="/">home</Link> |{" "}
            <Link to="/post">Post</Link> |{" "}
            <Link to="/counter">Counter</Link>
        </div>
    )
};