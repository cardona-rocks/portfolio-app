import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from "./assets/translations/en.json";
import fr from "./assets/translations/es.json";

const resources = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr,
    },
};

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		debug: true,
		fallbackLng: 'en',
		detection: {
			order: ["cookie", "localStorage", "navigator", "htmlTag"],
			caches: ["cookie"],
		},
		// interpolation: {
		// 	escapeValue: false, // not needed for react as it escapes by default
		// }
});

export default i18n;
