const importPageData = require('./import-page-data');
const importGlobalData = require('./import-global-data');
const setPublicPermissions = require('./../set-public-permissions');

const permissions = require('./../../data/permissions');

async function importData(strapi) {
    // Allow read of application content types
    await setPublicPermissions(strapi, permissions);
    
    // Create all entries
    // await importGlobalData(strapi);
    await importPageData(strapi);
  };

module.exports = importData;