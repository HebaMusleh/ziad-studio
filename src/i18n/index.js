import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../mock/en.json";
import ar from "../mock/ar.json";

const lang = localStorage.getItem("lang") || "ar";

i18n.use(initReactI18next).init({
  resources: { ...en, ...ar },
  lng: lang,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;