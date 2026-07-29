import React from 'react';
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Sitemap } from './components/Sitemap';
import { LpVideo } from './components/LpVideo';
import { LpOferta } from './components/LpOferta';
import { Obrigado } from './components/Obrigado';
import { Home } from './components/Home';

/**
 * Função utilitária para detecção de ambiente proxy de preview (Google IDX, Cloud Shell, Stackblitz, etc.)
 * Retorna true para acionar o HashRouter (#) evitando erros 404 de roteamento relativo.
 */
export function checkPreviewEnvironment(): boolean {
  if (typeof window === 'undefined') return false;

  const hostname = window.location.hostname || '';
  const href = window.location.href || '';

  const proxyIndicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox',
  ];

  return proxyIndicators.some(
    (indicator) => hostname.includes(indicator) || href.includes(indicator)
  );
}

export default function App() {
  const isPreview = checkPreviewEnvironment();
  const hostname = typeof window !== 'undefined' ? window.location.hostname : '';

  // Seleção de Roteador baseada no ambiente
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        {/* Redirecionamento Inteligente da Rota Raiz (/) */}
        <Route
          path="/"
          element={
            isPreview ? (
              <Navigate to="/sitemap" replace />
            ) : (
              <Navigate to="/home" replace />
            )
          }
        />

        {/* Mapeamento de Rotas da Aplicação */}
        <Route
          path="/home"
          element={<Home isPreview={isPreview} />}
        />
        <Route
          path="/sitemap"
          element={<Sitemap isPreview={isPreview} hostname={hostname} />}
        />
        <Route
          path="/lp-video"
          element={<LpVideo isPreview={isPreview} />}
        />
        <Route
          path="/lp-oferta"
          element={<LpOferta isPreview={isPreview} />}
        />
        <Route
          path="/obrigado"
          element={<Obrigado />}
        />

        {/* Fallback de rotas inexistentes */}
        <Route
          path="*"
          element={<Navigate to={isPreview ? "/sitemap" : "/lp-video"} replace />}
        />
      </Routes>
    </Router>
  );
}
