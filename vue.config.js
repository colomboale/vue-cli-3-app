const path = require("path");

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        '/Users/Alessandro/Sites/vue-backoffice/src/assets/scss/global.scss'
      ]
    },
    i18n: {
      locale: 'it',
      fallbackLocale: 'it',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
