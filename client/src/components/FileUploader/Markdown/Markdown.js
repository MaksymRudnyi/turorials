import React, { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import MarkdownPreview from '@uiw/react-markdown-preview';




export default function Markdown() {

 
  const file_name = 'markdown.md';

  //turorials\client\src\components\FileUploader\Markdown\Markdown.js


  const [value, setValue] = useState("");

  //----- IMPORT THE MARKDOWN FILE -------
  useEffect(() => {
    import(`../../../../../server/${file_name}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          //.then(res => console.log(res))
          .then(res => setValue(res))
      })
      .catch(err => console.log(err));
  });


  //ONLY preview : < MarkdownPreview source={value} /> 

  return (
    <div>
      <div className="container">

      <MDEditor
        value={value}
        onChange={setValue}
      />
        <div>

        

        </div>
      
      
      </div>
    </div>
  );
};







