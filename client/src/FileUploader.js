import React, { useState } from 'react';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';




const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const s3 = new S3({
    accessKeyId: "",
    secretAccessKey: "",
    region: "",
  });

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const setObjectPublicReadAccess = async (bucket, key) => {
    const params = {
      Bucket: bucket,
      Key: key,
      ACL: 'public-read',
    };

    try {
      await s3.putObjectAcl(params).promise();
      console.log('Public read access granted for', key);
    } catch (error) {
      console.error('Error setting object ACL:', error);
    }
  };

  const uploadFile = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    // Configure S3


    const params = {
      Bucket: '',
      Key: `${uuidv4()}-${file.name}`,
      Body: file,
      ContentType: file.type
    };

    try {
      const data = await s3.upload(params).promise();
      console.log('Upload success:', data.Location);
      // await setObjectPublicReadAccess(params.Bucket, params.Key);
      setImageUrl(data.Location);
      alert('File uploaded successfully.');
    } catch (error) {
      console.error('Upload error:', error);
      alert('File upload failed.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={uploadFile}>Upload</button>
      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default FileUploader;

