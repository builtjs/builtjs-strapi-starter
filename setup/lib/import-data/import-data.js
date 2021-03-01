const setup = require('./../../../setup/lib');
const permissions = require('./../../data/permissions');

async function importData(strapi) {
    // Allow read of application content types
    await setup.setPublicPermissions(strapi, permissions);
    
    // Create all entries
    await setup.importGlobalData();
    await setup.importPageData();
  };

exports.importData = importData;