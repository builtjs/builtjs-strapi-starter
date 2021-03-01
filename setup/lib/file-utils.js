const fs = require('fs');

exports.fileUtils = {
  getFileSizeInBytes: function (filePath) {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats["size"];
    return fileSizeInBytes;
  },
  getFileData: function(fileName) {
    const filePath = `./data/uploads/${fileName}`;
  
    // Parse the file metadata
    const size = this.getFileSizeInBytes(filePath);
    const ext = fileName.split(".").pop();
    const mimeType = `image/${ext === 'svg' ? 'svg+xml' : ext}`;
  
    return {
      path: filePath,
      name: fileName,
      size,
      type: mimeType,
    }
  }
};
