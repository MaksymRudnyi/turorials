import React from 'react';
import {
    Link,
    useRoutes
} from "react-router-dom";

// import { renderRoutes } from 'react-router-config';
import routes from "./routes";

import './styles.scss';

export const App = ({ route }) => {
    const element = useRoutes(routes);
    return (
        <div className="body">
            <Link to="/">home</Link> |{" "}
            <Link to="/post">Post</Link> |{" "}
            <Link to="/counter">Counter</Link>

            <div>
                {element}
            </div>
        </div>
    )
};