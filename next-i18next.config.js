// @ts-check
/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  debug: false,
  i18n: {
    defaultLocale: 'en',
<<<<<<< HEAD
<<<<<<< HEAD
    locales: [
      'br',
      'de',
      'es',
      'fr',
      'hi',
      'hu',
      'ja',
      'ru',
      'th',
      'en',
      'ko',
      'pt',
      'ar',
      'id',
      'it',
      'uk',
      'zh',
      'vi',
      'au',
      'gb',
      'lt',
      'cs',
      'el',
      'sv',
      'da',
      'fi',
      'no',
      'tr',
      'zh-tw',
      'bg',
    ],
=======
    locales: [  'br', 'ar', 'de', 'es', 'fr', 'hi', 'hu', 'ja', 'ru', 'th',  'ko', 'pt', 'id', 'it', 'uk', 'zh', 'vi', 'au', 'gb', 'lt',  'cs', 'el', 'sv', 'da', 'fi', 'no', 'tr', 'pl', 'zhtw', 'bg',  'nl', 'sk', 'ro', 'lv', 'et', 'hr', 'sl', 'sr', 'he', 'fa',  'ur', 'bn', 'gu', 'ta', 'te', 'kn', 'ml']
=======
    locales: ['en', 'br', 'ar', 'de', 'es', 'fr', 'hi', 'hu', 'ja', 'ru', 'th',  'ko', 'pt', 'id', 'it', 'uk', 'zh', 'vi', 'au', 'gb', 'lt',  'cs', 'el', 'sv', 'da', 'fi', 'no', 'tr', 'pl', 'zhtw', 'bg',  'nl', 'sk', 'ro', 'lv', 'et', 'hr', 'sl', 'sr', 'he', 'fa', 'ur', 'bn', 'gu', 'ta', 'te', 'kn', 'ml']
>>>>>>> f5cfa08 ([fix] missing 'en' in defaultLocales)
,
>>>>>>> e1608cd (FULL RTL SUPPORT AND MORE LANGUAGES)
  },
  defaultNS: 'common',
  ns: ['agent', 'common', 'constants', 'message'],
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  saveMissing: false,
};
