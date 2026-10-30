import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router/internal/react-server-client';

import NotFound from '@pages/404.tsx';
import Home from '@pages/Home.tsx';
import Legal from '@pages/Legal.tsx';

import './index.css';

const root = document.getElementById('root');

createRoot(root!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
