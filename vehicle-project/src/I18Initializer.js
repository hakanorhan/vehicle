import React from 'react'
import i18next from "i18next";
/* -------------------------------------------------------------
                          Languages
------------------------------------------------------------- */ 
import german from "./static-data/de/global.json";
import english from "./static-data/en/global.json";

import SupportedLanguages from './classes/SupportedLanguages'

/* All supported languages */
export const supportedLanguages = [new SupportedLanguages("Deutsch","de"),
   new SupportedLanguages("English", "en")]

i18next.init({
  interpolation: { escapeValue: false },
  lng: "de",
  resources: {
    en: {
      global: english,
    },
    de: {
      global: german,
    },
  },
});

export default function I18Initializer() {
  return i18next;
}
