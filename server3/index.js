const express=require("express");
const cors=require("cors");
const fsPromises = require("fs/promises");
var nodePandoc = require('node-pandoc');


const app= express();
app.use(cors());

/*
const http = require('http');
const hostname = 'localhost';
const port = 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.write('Simple refresh!');
    res.write(`<script src=${process.env.BROWSER_REFRESH_URL}></script>`);
    res.end();
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

    if (process.send) {
        process.send({ event: 'online', url: `http://${hostname}:${port}/` })
    }

});

/*
var src, args, callback;
 
src = ("./markdown.docx");
 
// Arguments can be either a single string:
args = '-f docx -t markdown -o ./markdown.md';
// Or in an array of strings -- careful no spaces are present:
args = ['-f','docx','-t','markdown','-o','markdown.md'];

// Set your callback function
callback = function (err, result) {
 
  if (err) {
    console.error('Oh Nos: ',err);
  }
 
  // For output to files, the 'result' will be a boolean 'true'.
  // Otherwise, the converted value will be returned.
  console.log(result);
  return result;
};
 
// Call pandoc/*
nodePandoc(src, args, callback);
*/

//----PRINT ----- //
app.get("/", (req, res, filePath) => {
    
  
    
    console.log(res)
    setTimeout(() => {
      res.download("../server/markdown.md");
    },"3000");
   
  
});


app.listen(9001);