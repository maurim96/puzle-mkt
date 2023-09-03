const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeDetection: false,
  },
  reloadOnPrerender: true,
  localePath: path.resolve('./public/locales'),
};
