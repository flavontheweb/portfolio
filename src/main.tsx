import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router';

import i18n, { fallbackLocale, getLocaleFromPath, isSupportedLocale } from '@/config/i18n';

import NotFound from '@/pages/NotFound';
import Home from '@pages/Home.tsx';
import Legal from '@pages/Legal.tsx';

import './index.css';

/**
 * Redirects the user to the appropriate locale-based path if the current path does not include a supported locale.
 */
function LocaleRedirect() {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname) ?? i18n.language;

  return <Navigate replace to={`/${locale}${location.search}${location.hash}`} />;
}

/**
 * Updates the document's meta information (title and description) based on the current locale.
 */
function useUpdateMeta() {
  const { locale } = useParams();
  const isSupportedLocaleValue = isSupportedLocale(locale);

  return useEffect(() => {
    if (!isSupportedLocaleValue || !locale) return;

    const description = document.querySelector('meta[name="description"]');

    document.title = i18n.t('meta.title', { lng: locale });
    description?.setAttribute('content', i18n.t('meta.description', { lng: locale }));
  }, [isSupportedLocaleValue, locale]);
}

/**
 * Layout component that handles locale-specific logic and renders the appropriate content based on the current locale.
 */
function LocaleLayout() {
  const { locale } = useParams();
  const isSupportedLocaleValue = isSupportedLocale(locale);

  useUpdateMeta();

  if (!isSupportedLocaleValue) return <Navigate replace to={`/${fallbackLocale}`} />;

  return <Outlet />;
}

// Entry point for the React application, setting up routing, locale handling, and i18n provider.
const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LocaleRedirect />} />
          <Route path="/:locale" element={<LocaleLayout />}>
            <Route index element={<Home />} />
            <Route path="legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="*" element={<LocaleRedirect />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>,
);
