import {renderRoutes} from "react-router-config";

const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );

const React = require( 'react' );
const ReactDOMServer = require( 'react-dom/server' );
import {matchRoutes} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import appRoutes from "../src/components/routes";
import createStore from '../src/components/store';
import renderer from './renderer';

const app = express();

// const { App } = require( '../src/components/app' );

app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../dist' ) ) );

app.use( '*', ( req, res ) => {
    const routes = matchRoutes(appRoutes, req.originalUrl);

    const context = {};
    const store = createStore();

    const promises = routes
        ?.map(({ route }) => {
            return route.loadData ? route.loadData(store, req.originalUrl) : null;
        })
        ?.map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(reject);
                });
            }
            return null;
        });

    Promise.all(promises).then(() => {
        // const context = {};
        // const content = renderer(req, store, context);
        const html = renderer(req, store, context);

        res.contentType( 'text/html' );
        res.status( 200 );

        res.send( html );
    });


} );

app.listen( '9000', () => {
    console.log( 'Express server started at <http://localhost:9000>' );
} );