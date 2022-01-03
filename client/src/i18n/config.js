import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './locales/en/translations.json';
import translationsHE from './locales/he/translations.json';

const resources = {
    en: {
        translation: translationsEN,
    },
    he: {
        translation: translationsHE,
    },
};

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        lng: 'he',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
