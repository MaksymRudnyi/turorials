import express from 'express';
const multer = require('multer');
const cors = require('cors');
import mongoose from 'mongoose';
import nodePandoc from 'node-pandoc';


const router = express.Router();

const app = express();

app.use(cors());
app.use(express.static('public'));


//------------UPLOAD document----
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './')
    },
    filename:(req, file, cb) => {
        cb(null, file.originalname);
    },
    
});


export const uploadDoc = (async(req,res) => {

        upload(req,res, (err) => {
            if (err) {
                return res.status(500).json(err)
            }
            return res.status(200).send(req.file)
        })

});


export const convertToMD = (async (req, res) => {


    let src = './TEST.docx';
    // Arguments can be either a single String or in an Array
    let args = '-f docx -t markdown -o ./markdown.md';
    // Set your callback function
    const callback = (err, result)=> {
    if (err) console.error('Oh Nos: ',err)
    return console.log(result), result
    }
    // Call pandoc
    nodePandoc(src, args, callback);
    
   
    console.log(res)
    res.download("./public/markdown.md")
    
    

});

export default router;