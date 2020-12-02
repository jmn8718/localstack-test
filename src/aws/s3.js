const AWS = require("aws-sdk");
const config = require("../config");

AWS.config.update({
  region: config.AWS_REGION,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_KEY,
});

const S3 = new AWS.S3({
  endpoint: config.AWS_HOST,
  s3ForcePathStyle: true,
});

const uploadFile = async (key, data) => {
  try {
    const response = await S3.upload({
      Bucket: config.S3_BUCKET_NAME,
      Key: key,
      Body: data,
    }).promise();
    return response;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  uploadFile,
};
