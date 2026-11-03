import { useEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router';

import i18n, { fallbackLocale, isSupportedLocale } from '@/config/i18n';

export default function LocaleLayout() {
  const { locale } = useParams();
  const isSupportedLocaleValue = isSupportedLocale(locale);

  useEffect(() => {
    if (!isSupportedLocaleValue || !locale) return;

    const title = document.querySelector('meta[name="title"]');
    const description = document.querySelector('meta[name="description"]');

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    document.title = i18n.t('meta.title', { lng: locale });
    title?.setAttribute('content', i18n.t('meta.title', { lng: locale }));
    description?.setAttribute('content', i18n.t('meta.description', { lng: locale }));

    ogTitle?.setAttribute('content', i18n.t('meta.title', { lng: locale }));
    ogDescription?.setAttribute('content', i18n.t('meta.description', { lng: locale }));
    ogLocale?.setAttribute('content', i18n.t('meta.locale', { lng: locale }));

    twitterTitle?.setAttribute('content', i18n.t('meta.title', { lng: locale }));
    twitterDescription?.setAttribute('content', i18n.t('meta.description', { lng: locale }));
  }, [isSupportedLocaleValue, locale]);

  if (!isSupportedLocaleValue) return <Navigate replace to={`/${fallbackLocale}`} />;

  return <Outlet />;
}
