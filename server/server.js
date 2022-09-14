const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');

var nodePandoc = require('node-pandoc');

const app = express();
/*
app.use(express.static('public'));
*/
app.use(cors());



/*const deleteFile = async (filePath) => {
    try {
      await fsPromises.unlink(filePath);
      console.log('Successfully removed file!');
    } catch (err) {
      console.log(err);
    }
  };

//deleteFile('../server3/markdown.md');
*/

//-------------UPLOAD OF THE DOCUMENT -------//
export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename:(req, file, cb) => {
        cb(null, "markdown.docx")
    }
});

const upload = multer({storage}).single('file')

/////-------------CONVERSION OF THE DOCX - PANDOC ------////////

var src, args, callback;
 
src = ("./public/markdown.docx");
 
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
 

//--------------API-----------------------//

app.post('/upload', (req, res) => {
    //  deleteFile("../../../fileupload8/server/markdown.md")
    upload(req,res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }else{
            function send(){
                res.status(200).send(req.file),
                fs.copyFile('./public/markdown.docx', './markdown.docx', 
                (err) => { 
                    if (err) throw err;
                    console.log('error');
                  }); 
            }
        }
        
        return send();
    })

    nodePandoc(src, args, callback);
});



app.listen(8000, () => {
    console.log('App is running on port 8000')
});

