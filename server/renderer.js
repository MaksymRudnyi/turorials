import {StaticRouter} from "react-router-dom/server";
import {Provider} from "react-redux";
import React from "react";
const ReactDOMServer = require( 'react-dom/server' );
const fs = require( 'fs' );
const path = require( 'path' );
import serialize from 'serialize-javascript';

const { App } = require( '../src/components/app' );

export default (req, store, context) => {
    let indexHTML = fs.readFileSync( path.resolve( __dirname, '../dist/index.html' ), {
        encoding: 'utf8',
    } );

    console.log(req.originalUrl);

    let appHTML = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.originalUrl } context={context}>
                <App/>
            </StaticRouter>
        </Provider>
    );

    indexHTML = indexHTML.replace( '<div id="app"></div>', `<div id="app">${appHTML}</div>` );
    indexHTML = indexHTML.replace( '<script id="initState"></script>', `<script>window.__PRELOADED_STATE__ =${serialize(store.getState())}</script>` );

    return indexHTML;
}