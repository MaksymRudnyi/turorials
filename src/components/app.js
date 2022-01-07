import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Counter } from "./counter";
import { Post } from "./post";

import './styles.scss';

export const App = () => {

    return (
        <div className="body">
            <Switch>
                <Route path="/counter"><Counter/></Route>
                <Route path="/post"><Post/></Route>
                <Route path="/">SSR</Route>
            </Switch>

            <Link to="/">home</Link> |{" "}
            <Link to="/post">Post</Link> |{" "}
            <Link to="/counter">Counter</Link>
        </div>
    )
};