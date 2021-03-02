const fileUtils = require('./../file-utils');
const { global } = require("./../../data/data.json");

async function importGlobalData() {
    // Add images
    const files = {
      favicon: fileUtils.getFileData('favicon.png'),
      'metadata.shareImage': fileUtils.getFileData('undraw-content-team.png'),
      'navbar.logo': fileUtils.getFileData('logo.png'),
      'footer.logo': fileUtils.getFileData('logo.png'),
    };
    // Create entry
    await createEntry('global', global, files);
  }

  module.exports = importGlobalData;