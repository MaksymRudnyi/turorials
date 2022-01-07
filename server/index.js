const path = require( 'path' );

// https://github.com/kriasoft/isomorphic-style-loader TO FIX css modules loading issue
require( 'ignore-styles' );

require( '@babel/register')( {
    configFile: path.resolve( __dirname, '../babel.config.js' ),
} );

require( './express.js' );