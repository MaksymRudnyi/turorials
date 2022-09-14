
  **express-router** is a library for organizing routes of an express application
## Usage

  **express-router** lets you write your express routes in a simpler way.
  You just have to create a 'routes' folder inside your project and place your routes in an index.txt file.
  
  So your app will be structured like this:
  - app.js
  - /routes/
    - index.txt
    - products.js
    - users.js

Then, in your app.js, you just do this after defining app = express():

```js
require('express-router')();
```

  If you want to use another folder for routes:

```js
require('express-router')('thisismynewroutesfolder');
```

  If you do not want to define 'app' globally (**express-router** will check for global.app):

```js
var app = express();
require('express-router')(app);
```

  Or both:

```js
var app = express();
require('express-router')('thisismynewroutesfolder', app);
```

  Finally you structure your routes in the index.txt file like this: method url middleware1,middleware2,...,middlewareN (empty lines and comments are supported):

  ```
  //BEGIN PRODUCT ROUTES
  GET /products products.list
  POST /products products.create
  GET /shoes products.shoes.find,products.shoes.list
  //END PRODUCT ROUTES

  //BEGIN USER ROUTES
  GET /users/new users.new
  POST /users/:user users.show
  //END USER ROUTES
  ```

## Installation

    $ npm install express-router

## License 

(The MIT License)

Copyright (c) 2012 Martín Ciparelli &lt;mciparelli@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.