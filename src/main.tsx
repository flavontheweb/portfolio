import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import i18n from '@/config/i18n';

import LocaleLayout from '@/layouts/LocaleLayout';
import Home from '@/pages/Home';
import Legal from '@/pages/Legal';
import NotFound from '@/pages/NotFound';

import './index.css';

const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to={`/${i18n.language}`} />} />
          <Route path="*" element={<Navigate replace to={`/${i18n.language}`} />} />

          <Route path="/:locale" element={<LocaleLayout />}>
            <Route index element={<Home />} />
            <Route path="legal" element={<Legal />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  </StrictMode>,
);
