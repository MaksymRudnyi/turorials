const express = require('express');
const multer = require('multer');
const cors = require('cors');
var nodePandoc = require('node-pandoc');

import convertRoutes from './routes/convert.js';

const app = express();

app.use(cors());
app.use(express.Router('public'));



/*
//------------UPLOAD document----
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './')
    },
    filename:(req, file, cb) => {
        cb(null, file.originalname);
    },
    
});
/*
const upload = multer({storage}).single('file')



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename:(req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});
*/


/*------------NODE PANDOC -------*/
/*
var src, args, callback;
 
src = ("./public/Programming notes.docx");
 
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
 
// Call pandoc
nodePandoc(src, args, callback);

*/
/*
app.listen(8000, () => {
    console.log('App is running on port 8000')
});

app.post('/upload', (req, res) => {
    upload(req,res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }

        return res.status(200).send(req.file)
    })
});

app.get("/", (req, res) => {
    console.log(res)
    res.download("./public/markdown.md")
})


*/