/**
 * Create an entry and attach files if there are any
 * @param {*} strapi 
 * @param {*} model 
 * @param {*} entry 
 * @param {*} files 
 */
async function createEntry(strapi, model, entry, files) {
    try {
      const createdEntry = await strapi.query(model).create(entry);
      if (files) {
        await strapi.entityService.uploadFiles(createdEntry, files, {
          model
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
module.exports = createEntry;