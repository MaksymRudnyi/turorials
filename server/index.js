const AWS = require('aws-sdk');
const fs = require('fs');

// Load AWS credentials
// AWS.config.loadFromPath('./credentials.json');

// Initialize S3 client
const s3 = new AWS.S3();

// Replace with the path to the file you want to upload
const filePath = './1.png';

// Replace with your desired S3 bucket name and key
const bucketName = '';
const key = '1.png';

// Upload the file to S3
function uploadFile(filePath, bucketName, key) {
  const fileStream = fs.createReadStream(filePath);
  fileStream.on('error', function (err) {
    console.log('File Error', err);
  });

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: fileStream,
  };

  s3.upload(params, function (err, data) {
    if (err) {
      console.log('Error', err);
    }
    if (data) {
      console.log('Upload Success', data.Location);
    }
  });
}

// Execute the upload function
uploadFile(filePath, bucketName, key);
