const setup = require('./../../../setup/lib');
const createEntry = require('./../create-entry');
const fileUtils = require('./../file-utils');

const { pages } = require("./../../data");

async function importPageData() {
    const getPageCover = slug => {
      switch (slug) {
        case '':
          return fileUtils.getFileData('undraw-content-team.png');
        default:
          return null;
      };
    }
  
    return pages.map(async (page) => {
      const files = {};
      const shareImage = getPageCover(page.slug);
      if (shareImage) {
        files['metadata.shareImage'] = shareImage;
      }
      // Check if dynamic zone has attached files
      page.contentSections.forEach((section, index) => {
        if (section.__component === 'sections.hero') {
          files[`contentSections.${index}.picture`] = fileUtils.getFileData('undraw-content-team.svg');
        } else if (section.__component === 'sections.feature-rows-group') {
          const getFeatureMedia = (featureIndex) => {
            switch (featureIndex) {
              case 0:
                return fileUtils.getFileData('undraw-design-page.svg');
              case 1:
                return fileUtils.getFileData('undraw-create-page.svg');
              default:
                return null;
            }
          };
          section.features.forEach((feature, featureIndex) => {
            files[`contentSections.${index}.features.${featureIndex}.media`] = getFeatureMedia(featureIndex);
          });
        } else if (section.__component === 'sections.feature-columns-group') {
          const getFeatureMedia = (featureIndex) => {
            switch (featureIndex) {
              case 0:
                return fileUtils.getFileData('preview.svg');
              case 1:
                return fileUtils.getFileData('devices.svg');
              case 2:
                return fileUtils.getFileData('palette.svg');
              default:
                return null;
            }
          };
          section.features.forEach((feature, featureIndex) => {
            files[`contentSections.${index}.features.${featureIndex}.icon`] = getFeatureMedia(featureIndex);
          });
        } else if (section.__component === 'sections.testimonials-group') {
          section.logos.forEach((logo, logoIndex) => {
            files[`contentSections.${index}.logos.${logoIndex}.logo`] = fileUtils.getFileData('logo.png');
          });
          section.testimonials.forEach((testimonial, testimonialIndex) => {
            files[`contentSections.${index}.testimonials.${testimonialIndex}.logo`] = fileUtils.getFileData('logo.png');
            files[`contentSections.${index}.testimonials.${testimonialIndex}.picture`] = fileUtils.getFileData('user.png');
          });
        }
      });
      await createEntry('page', page, files);
    });
  }

module.exports = importPageData;