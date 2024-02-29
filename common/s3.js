// FIXME: keep file only if using s3 file upload

const aws = require('aws-sdk');
const crypto = require('crypto');

// initialize a S3 instance
const s3 = new aws.S3({
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
});

const getS3UploadURL = async () => {
  // generate a unique name for image
  const imageName = crypto.randomBytes(16).toString('hex');

  // set up s3 params
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: imageName,
    Expires: 60,
  };

  // get a s3 upload url
  const uploadURL = s3.getSignedUrl('putObject', params);

  return uploadURL;
};

module.exports = {
  s3,
  getS3UploadURL,
};
