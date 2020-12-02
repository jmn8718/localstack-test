const { expect } = require("chai");
const fs = require("fs");
const path = require("path");

const { uploadFile } = require("../../src/aws/s3");
const config = require("../../src/config");

describe("aws s3", function () {
  describe("uploadFile", function () {
    it("should upload a file", async function () {
      const filePath = path.resolve(__dirname, "image.jpg");
      const data = fs.createReadStream(filePath);
      const filename = `image-${Date.now()}.jpg`;
      const response = await uploadFile(filename, data);

      const uploadedLocation = `${config.S3_BUCKET_NAME}/${filename}`;
      expect(response).to.have.property("Location");
      expect(response.Location).to.include(uploadedLocation);
      expect(response.Key).to.include(filename);
    });
  });
});
