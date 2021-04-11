// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en';
import tr from './tr';

const resources = {
    en: {
        common: en,
    },
    tr: {
        common: tr,
    },
};

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        ns: ['common'],
        defaultNS: 'common',
        fallbackLng: 'en',
        supportedLngs: ['en', 'tr'],
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
