//TO save the data
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Axios from "axios";
import FileDownload from "js-file-download";
import Markdown from './Markdown/Markdown';




import './styles.css';


export const FileUploader = ({}) => {


  //_------UPLOAD THE USERs FILE --------- b 
    const [file, setFile] = useState([]);

    const onInputChange = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('file', file);

        axios.post('//localhost:8000/upload', data)
            .then((e) => {
                toast.success('Upload Success')
                console.log('Success')
            })
            .catch((e) => {
                toast.error('Upload Error')
                console.error('Error', e)
            })

    }; 

    const download= (e) => {
        e.preventDefault()
        Axios({
          url:"http://localhost:9001",
          method:"GET", 
          responseType:"blob"
        }).then((res)=>{
          console.log(res)
          FileDownload(res.data,"markdown.md")
        })
      }
      

      

    return (
    <form method="post" action="#" id="#" onSubmit={onSubmit}>
        <div class="form-group files">
          <label>Upload Your File </label>
          <input 
                type="file" 
                onChange={onInputChange}
                className="form-control" 
                multiple=''/>
        </div>
        <button >Convert</button> <br/><br/>
        
       

        <button onClick={(e)=>download(e)}>Download</button>
        
        <Markdown />

       

     </form>
    )
};