import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import desktopEN from '@/locales/en/desktop.json';
import homeEN from '@/locales/en/home.json';
import legalEN from '@/locales/en/legal.json';
import metaEN from '@/locales/en/meta.json';
import notFoundEN from '@/locales/en/notFound.json';

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const fallbackLocale: Locale = 'en';

const resources = {
  fr: {
    translation: {
      meta: metaEN,
      home: homeEN,
      desktop: desktopEN,

      legal: legalEN,
      notFound: notFoundEN,
    },
  },
  en: {
    translation: {
      meta: metaEN,
      home: homeEN,
      desktop: desktopEN,

      legal: legalEN,
      notFound: notFoundEN,
    },
  },
} as const;

export function getLocaleFromPath(pathname: string): Locale | undefined {
  const pathLocale = pathname.split('/')[1];
  return locales.find((locale) => locale === pathLocale);
}

export function isSupportedLocale(locale: string | undefined): boolean {
  return locales.some((supportedLocale) => supportedLocale === locale);
}

const initialLocale =
  getLocaleFromPath(window.location.pathname) ??
  navigator.languages
    .map((language) => language.split('-')[0])
    .find((language): language is Locale => locales.some((locale) => locale === language)) ??
  fallbackLocale;

void i18n.use(initReactI18next).init({
  resources,
  lng: initialLocale,
  fallbackLng: fallbackLocale,
  supportedLngs: locales,
  interpolation: {
    escapeValue: false,
  },
});

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: (typeof resources)[typeof fallbackLocale];
  }
}

export default i18n;
