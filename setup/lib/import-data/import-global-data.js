const setup = require('./../../../setup/lib');
const { global } = require("./../../data");

async function importGlobalData() {
    // Add images
    const files = {
      favicon: setup.fileUtils.getFileData('favicon.png'),
      'metadata.shareImage': setup.fileUtils.getFileData('undraw-content-team.png'),
      'navbar.logo': setup.fileUtils.getFileData('logo.png'),
      'footer.logo': setup.fileUtils.getFileData('logo.png'),
    };
    // Create entry
    await createEntry('global', global, files);
  }

exports.importGlobalData = importGlobalData;