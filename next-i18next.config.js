const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'kr',
    locales: ['kr', 'en'],
    localePath: path.resolve('./public/locales'),
    otherLanguages: ['kr', 'en'],
    defaultLanguage: 'kr',
    fallbackLng: ['kr'],
  },
};
