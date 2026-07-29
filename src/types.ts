export interface RouteItem {
  path: string;
  name: string;
  description: string;
  category: 'Landing Pages' | 'Checkout & Conversão' | 'Sistema & Debug';
  status: 'Ativo' | 'Preview' | 'Novo';
}

export interface EnvironmentInfo {
  isPreview: boolean;
  hostname: string;
  href: string;
  detectedRule: string | null;
  routerType: 'HashRouter' | 'BrowserRouter';
}
