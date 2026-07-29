import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  ExternalLink, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  PlaySquare, 
  ShoppingBag, 
  CheckSquare, 
  Globe
} from 'lucide-react';
import { RouteItem } from '../types';

interface SitemapProps {
  isPreview: boolean;
  hostname: string;
}

export const Sitemap: React.FC<SitemapProps> = ({ isPreview, hostname }) => {
  const routes: RouteItem[] = [
    {
      path: '/lp-video',
      name: 'Landing Page Principal (VDSL / Vídeo)',
      description: 'Página de Vendas em Vídeo com estética de alta conversão, contador regressivo e prova social.',
      category: 'Landing Pages',
      status: 'Ativo',
    },
    {
      path: '/lp-oferta',
      name: 'LP Oferta Especial & Bônus',
      description: 'Página com grade de ofertas exclusivas, tabela comparativa e checkout rápido.',
      category: 'Landing Pages',
      status: 'Novo',
    },
    {
      path: '/obrigado',
      name: 'Página de Agradecimento',
      description: 'Pós-compra com orientações de acesso ao curso/evento e link do grupo de WhatsApp.',
      category: 'Checkout & Conversão',
      status: 'Ativo',
    },
    {
      path: '/sitemap',
      name: 'Mapa de Rotas (Sitemap)',
      description: 'Painel de navegação de desenvolvimento e diagnóstico de ambiente proxy/cloud.',
      category: 'Sistema & Debug',
      status: 'Preview',
    },
  ];

  const proxyIndicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox',
  ];

  const currentHref = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 text-slate-800 font-sans pb-16">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide shadow-sm flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
        <span>Arquitetura de Roteamento Híbrido Agressivo Ativada</span>
        <span className="hidden md:inline-block bg-white/20 px-2 py-0.5 rounded text-[11px] font-mono uppercase">
          {isPreview ? 'Ambiente Proxy detected' : 'Modo Produção'}
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-rose-100">
          <div>
            <div className="flex items-center gap-2 text-rose-600 font-semibold text-sm tracking-wider uppercase mb-1">
              <Network className="w-4 h-4" />
              <span>Painel de Desenvolvimento & Rotas</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sitemap & Diagnóstico de Proxy
            </h1>
            <p className="text-slate-600 mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
              Visualização de todas as páginas da Landing Page e status de detecção de ambiente para roteamento seguro entre nuvem (HashRouter) e produção (BrowserRouter).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/lp-video"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold px-5 py-3 rounded-xl shadow-lg shadow-rose-500/25 transition-all duration-200 transform hover:-translate-y-0.5 text-sm"
            >
              <PlaySquare className="w-4 h-4" />
              <span>Ir para LP Vídeo</span>
            </Link>
          </div>
        </div>

        {/* Environment Status Diagnostic Card */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl shadow-rose-950/5 border border-rose-100/80">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl ${isPreview ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-900">Diagnóstico do Motor de Roteamento</h2>
                <p className="text-xs text-slate-500">Detecção automática via <code className="bg-slate-100 px-1 py-0.5 rounded text-rose-600">checkPreviewEnvironment()</code></p>
              </div>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              isPreview 
                ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
            }`}>
              {isPreview ? 'HashRouter (Preview Mode)' : 'BrowserRouter (Production)'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100">
              <span className="text-xs text-slate-500 font-medium block mb-1">Hostname Atual</span>
              <code className="text-xs sm:text-sm font-mono font-semibold text-rose-950 break-all">{hostname || 'localhost'}</code>
            </div>

            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100">
              <span className="text-xs text-slate-500 font-medium block mb-1">Roteador em Execução</span>
              <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4 text-rose-600" />
                <span>{isPreview ? 'HashRouter (URL com #)' : 'BrowserRouter (URL Limpa)'}</span>
              </div>
            </div>

            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100">
              <span className="text-xs text-slate-500 font-medium block mb-1">Status da Allowlist</span>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isPreview ? 'Indicador de Proxy Detectado' : 'Dominio de Producao Limpo'}</span>
              </div>
            </div>
          </div>

          {/* Allowlist indicator tags */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              String Identificadoras na Allowlist:
            </span>
            <div className="flex flex-wrap gap-2">
              {proxyIndicators.map((indicator) => {
                const matched = hostname.includes(indicator) || currentHref.includes(indicator);
                return (
                  <span
                    key={indicator}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono border transition-colors ${
                      matched
                        ? 'bg-rose-600 text-white font-bold border-rose-700 shadow-sm'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {indicator} {matched && '✓'}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-6 h-6 text-rose-600" />
              <span>Rotas Mapeadas da Aplicação</span>
            </h2>
            <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-xs">
              {routes.length} rotas disponíveis
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map((route) => (
              <div
                key={route.path}
                className="bg-white rounded-2xl p-6 border border-rose-100/80 shadow-md shadow-rose-950/5 hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-rose-50 text-rose-700 border border-rose-200">
                      {route.category}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded text-emerald-700 bg-emerald-50 border border-emerald-200">
                      {route.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors flex items-center gap-2">
                    {route.path === '/lp-video' && <PlaySquare className="w-4 h-4 text-rose-500" />}
                    {route.path === '/lp-oferta' && <ShoppingBag className="w-4 h-4 text-pink-500" />}
                    {route.path === '/obrigado' && <CheckSquare className="w-4 h-4 text-emerald-500" />}
                    {route.path === '/sitemap' && <Globe className="w-4 h-4 text-rose-500" />}
                    <span>{route.name}</span>
                  </h3>

                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {route.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-200">
                    {route.path}
                  </span>

                  <Link
                    to={route.path}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 group-hover:text-rose-700 group-hover:underline"
                  >
                    <span>Acessar Rota</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture Info Card */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold tracking-tight">Por que utilizar o Roteamento Híbrido Agressivo?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm leading-relaxed">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h4 className="font-bold text-rose-300 mb-2 flex items-center gap-2">
                <span className="bg-rose-500/20 text-rose-300 text-xs px-2 py-0.5 rounded">Preview Mode</span>
                HashRouter (#) em Proxies Cloud
              </h4>
              <p>
                Ambientes como Google IDX, Cloud Shell, WebContainer e Stackblitz utilizam proxies reversos com URLs dinâmicas que costumam falhar ao recarregar a página com sub-rotas via <code className="text-amber-300">BrowserRouter</code>. O <code className="text-amber-300">HashRouter</code> evita erros 404 mantendo a rota no fragmento hash.
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <h4 className="font-bold text-rose-300 mb-2 flex items-center gap-2">
                <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2 py-0.5 rounded">Production Mode</span>
                BrowserRouter em Produção (Vercel/AWS)
              </h4>
              <p>
                Essencial para captação limpa de parâmetros UTMs em campanhas de tráfego pago (Meta Ads, Google Ads), disparo correto de Pixels de Rastreamento e indexação SEO amigável.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
