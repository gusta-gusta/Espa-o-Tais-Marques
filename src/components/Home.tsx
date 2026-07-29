import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  MapPin, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Phone, 
  Instagram, 
  ShieldCheck, 
  Award, 
  Heart, 
  Calendar, 
  Sparkle, 
  Users, 
  ArrowRight,
  Menu,
  X,
  Check,
  Building,
  Activity,
  Layers,
  Search
} from 'lucide-react';
import { Logo } from './Logo';

interface HomeProps {
  isPreview?: boolean;
}

export const Home: React.FC<HomeProps> = ({ isPreview }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'todos' | 'facial' | 'corporal'>('todos');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const WHATSAPP_NUMBER = "5512997491441";
  const DEFAULT_MESSAGE = "Olá, vim pelo site e gostaria de mais informações.";

  const getWhatsappLink = (customMessage?: string) => {
    const text = customMessage || DEFAULT_MESSAGE;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsappClick = (customMessage?: string) => {
    window.open(getWhatsappLink(customMessage), '_blank', 'noopener,noreferrer');
  };

  const services = [
    {
      id: 'limpeza-pele',
      title: 'Limpeza de Pele Profunda + Fototerapia',
      category: 'facial',
      subtitle: 'Remoção de cravos, desintoxicação e brilho natural',
      description: 'Protocolo completo com vapor de ozônio, extração indolor, alta frequência e máscara hidroplástica calmante com LEDterapia.',
      tag: 'Mais Pedido',
      benefits: ['Elimina impurezas e cravos', 'Desobstrui os poros', 'Hidratação profunda imediata'],
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'rejuvenescimento',
      title: 'Rejuvenescimento & Microagulhamento Gold',
      category: 'facial',
      subtitle: 'Estímulo intenso de colágeno e rugas atenuadas',
      description: 'Indução percutânea de colágeno com drug delivery de fatores de crescimento e ácido hialurônico para firmeza e viço da pele.',
      tag: 'Alta Performance',
      benefits: ['Atenua linhas de expressão', 'Clareia manchas e melasma', 'Aumenta firmeza da pele'],
      image: 'https://images.unsplash.com/photo-1512290900673-70023021074e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'peeling-quimico',
      title: 'Peeling Químico Renovador',
      category: 'facial',
      subtitle: 'Uniformização do tom da pele e textura aveludada',
      description: 'Ácidos de grau médico selecionados para renovação celular profunda, controle de oleosidade e redução de marcas de acne.',
      tag: 'Efeito Glow',
      benefits: ['Clareamento de hipercromias', 'Pele renovada e uniforme', 'Redução de poros dilatados'],
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'drenagem-linfatica',
      title: 'Drenagem Linfática Método Exclusivo',
      category: 'corporal',
      subtitle: 'Desinchamento imediato e contorno corporal',
      description: 'Manobras suaves e ritmadas que eliminam retenção de líquidos, desintoxicam o organismo e estimulam a circulação.',
      tag: 'Resultado Imediato',
      benefits: ['Alívio do inchaço e sensação de peso', 'Combate a celulite', 'Melhora da circulação'],
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'massagem-modeladora',
      title: 'Massagem Modeladora & Redutora',
      category: 'corporal',
      subtitle: 'Ativação da circulação e remodelagem de curvas',
      description: 'Técnica vigorosa associada a ativos lipolíticos de alta tecnologia para redução de medidas localizadas e firmeza tecidual.',
      tag: 'Redução de Medidas',
      benefits: ['Reduz gordura localizada', 'Melhora o contorno do corpo', 'Ativa o metabolismo local'],
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'pos-operatorio',
      title: 'Estética Pós-Operatória Especializada',
      category: 'corporal',
      subtitle: 'Recuperação segura e rápida pós-cirurgia plástica',
      description: 'Cuidado atencioso para prevenção de fibroses, alívio de hematomas e cicatrização acelerada em lipoaspirações e mamoplastias.',
      tag: 'Cuidado Especialista',
      benefits: ['Previne fibroses e aderências', 'Acelera a cicatrização', 'Reduz dores e hematomas'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const results = [
    {
      title: 'Limpeza de Pele & Controle de Oleosidade',
      description: 'Cliente com acne e poros obstruídos após 1 sessão do protocolo fototerápico.',
      location: 'São José dos Campos - SP',
      tag: 'Facial',
      beforeImg: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Drenagem Linfática & Redução de Inchaço',
      description: 'Resultado imediato pós 1ª sessão de Drenagem no Espaço Taís Marques.',
      location: 'Jardim Aquárius - SJC',
      tag: 'Corporal',
      beforeImg: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Rejuvenescimento & Clareamento de Manchas',
      description: 'Protocolo de 3 sessões de Microagulhamento com peeling suave.',
      location: 'Vila Ema - SJC',
      tag: 'Facial',
      beforeImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      afterImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const testimonials = [
    {
      name: 'Drª. Camila Ribeiro',
      neighborhood: 'Jardim Aquárius, SJC',
      role: 'Advogada',
      comment: 'A Taís é simplesmente maravilhosa! A limpeza de pele dela é indolor e os produtos utilizados são de primeiríssima qualidade. Minha pele mudou completamente desde que comecei o acompanhamento.',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Mariana Santos',
      neighborhood: 'Urbanova, SJC',
      role: 'Empresária',
      comment: 'Espaço acolhedor, limpo e super bem localizado em São José dos Campos. Faço drenagem com a Taís semanalmente, é meu momento de autocuidado essencial. Atendimento impecável!',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Patrícia Oliveira',
      neighborhood: 'Vila Ema, SJC',
      role: 'Arquiteta',
      comment: 'Procurei a Taís para cuidar da minha pele antes do meu casamento e o resultado do tratamento de peeling foi surreal! Todos elogiaram o glow da minha pele. Recomendo de olhos fechados!',
      stars: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
  ];

  const filteredServices = activeTab === 'todos' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-[#FFF9FB] text-slate-800 font-raleway selection:bg-[#E3007B] selection:text-white">
      
      {/* Top Location Bar */}
      <div className="bg-gradient-to-r from-[#E3007B] via-[#C2185B] to-[#7B1FA2] text-white text-xs sm:text-sm font-semibold py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-pink-200 animate-bounce" />
            <span>Atendimento Exclusivo em <strong>São José dos Campos - SP</strong></span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-pink-100">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Seg a Sáb: 08h às 19h
            </span>
            <button 
              onClick={() => handleWhatsappClick()}
              className="hover:underline flex items-center gap-1 font-bold text-white cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              (12) 99749-1441
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <Link to="/home" className="flex items-center">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
            <a href="#sobre" className="hover:text-[#E3007B] transition-colors py-2">Sobre</a>
            <a href="#servicos" className="hover:text-[#E3007B] transition-colors py-2">Serviços</a>
            <a href="#resultados" className="hover:text-[#E3007B] transition-colors py-2">Resultados</a>
            <a href="#depoimentos" className="hover:text-[#E3007B] transition-colors py-2">Depoimentos</a>
            <a href="#agendar" className="hover:text-[#E3007B] transition-colors py-2">Agendar</a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleWhatsappClick()}
              className="bg-gradient-to-r from-[#E3007B] to-[#7B1FA2] hover:from-[#C2185B] hover:to-[#6A1B9A] text-white font-bold px-5 py-2.5 rounded-full shadow-magenta hover:shadow-magenta-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2 text-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Agendar no WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#E3007B]"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-rose-100 px-4 py-4 space-y-3 shadow-lg animate-fadeIn">
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-[#E3007B] py-2 border-b border-rose-50"
            >
              Sobre a Esteticista
            </a>
            <a 
              href="#servicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-[#E3007B] py-2 border-b border-rose-50"
            >
              Serviços & Tratamentos
            </a>
            <a 
              href="#resultados" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-[#E3007B] py-2 border-b border-rose-50"
            >
              Resultados Reais
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-[#E3007B] py-2 border-b border-rose-50"
            >
              Depoimentos de Clientes
            </a>
            <a 
              href="#agendar" 
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-[#E3007B] py-2 border-b border-rose-50"
            >
              Agendar Consulta
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsappClick();
              }}
              className="w-full bg-gradient-to-r from-[#E3007B] to-[#7B1FA2] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md mt-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enviar Mensagem no WhatsApp</span>
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-[#FFF2F7] to-[#FFF9FB]">
        {/* Soft Decorative Ambient Circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-rose-200/40 via-pink-300/20 to-purple-200/30 blur-3xl rounded-full pointer-events-none -z-10"></div>
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-200/30 to-pink-200/20 blur-3xl rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hero Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Location & Rating Badge */}
              <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-white/90 border border-rose-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 shadow-xs mb-6">
                <span className="flex items-center gap-1 text-[#E3007B] font-bold">
                  <MapPin className="w-4 h-4" />
                  São José dos Campos - SP
                </span>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  5.0 (Mais de 300 avaliações)
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight">
                Sua Pele Mais Radiante, Jovem e Saudável em <span className="bg-gradient-to-r from-[#E3007B] via-[#C2185B] to-[#7B1FA2] bg-clip-text text-transparent">São José dos Campos</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A <strong>Esteticista Taís Marques</strong> combina ciência estética, tecnologia avançada e protocolos altamente personalizados para potencializar sua beleza natural e devolver sua autoconfiança.
              </p>

              {/* Key Highlights */}
              <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm font-medium text-slate-700">
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-rose-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E3007B]" />
                  <span>Atendimento Humanizado</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-rose-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E3007B]" />
                  <span>Produtos de Grau Médico</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-rose-100 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E3007B]" />
                  <span>Espaço Acolhedor em SJC</span>
                </div>
              </div>

              {/* Hero Call to Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => handleWhatsappClick()}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E3007B] via-[#D8006C] to-[#7B1FA2] hover:from-[#C2185B] hover:to-[#6A1B9A] text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-magenta-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group uppercase tracking-wide border border-rose-200/30"
                >
                  <MessageCircle className="w-6 h-6 fill-white animate-pulse" />
                  <span>Enviar Mensagem no WhatsApp</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#servicos"
                  className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-rose-50 text-slate-800 font-bold text-sm sm:text-base rounded-2xl border border-rose-200 transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Ver Serviços</span>
                  <ArrowRight className="w-4 h-4 text-[#E3007B]" />
                </a>
              </div>

              {/* Direct Phone Number Reminder */}
              <p className="mt-3 text-xs text-slate-500 font-medium text-center lg:text-left">
                Clique acima para iniciar a conversa no WhatsApp <span className="font-bold text-[#E3007B]">+55 12 99749-1441</span>
              </p>
            </div>

            {/* Hero Image Card (Esteticista Taís Marques) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Decorative Glowing Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E3007B] to-[#7B1FA2] rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>

                <div className="relative bg-white p-3 rounded-3xl border-2 border-rose-200/80 shadow-2xl overflow-hidden">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                      alt="Esteticista Taís Marques em São José dos Campos"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay at Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

                    {/* Bottom Card Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="inline-flex items-center gap-1.5 bg-[#E3007B] px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1 shadow-md">
                        <Sparkles className="w-3 h-3 text-amber-200" />
                        <span>Espaço Taís Marques</span>
                      </div>
                      <h3 className="text-xl font-extrabold text-white leading-tight">
                        Taís Marques
                      </h3>
                      <p className="text-xs text-rose-200 font-medium">
                        Esteticista Especialista em Saúde da Pele & Corpo em SJC
                      </p>
                    </div>
                  </div>

                  {/* Trust Badge Below Image */}
                  <div className="mt-3 p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl border border-rose-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#E3007B]" />
                      <span>Especialista Certificada</span>
                    </div>
                    <span className="text-[#7B1FA2] font-bold">SJC - SP</span>
                  </div>
                </div>

                {/* Floating Badge Left */}
                <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border border-rose-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">+1.500 Pacientes</span>
                    <span className="text-[10px] text-slate-500">Satisfeitas em SJC</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation Quick Buttons Bar */}
      <section className="bg-white border-y border-rose-100 sticky top-20 z-40 shadow-xs py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar text-xs sm:text-sm font-bold">
          <a
            href="#sobre"
            className="px-4 py-2 rounded-full bg-rose-50 hover:bg-[#E3007B] text-[#E3007B] hover:text-white transition-colors whitespace-nowrap border border-rose-200"
          >
            01. Sobre a Taís
          </a>
          <a
            href="#servicos"
            className="px-4 py-2 rounded-full bg-rose-50 hover:bg-[#E3007B] text-[#E3007B] hover:text-white transition-colors whitespace-nowrap border border-rose-200"
          >
            02. Serviços
          </a>
          <a
            href="#resultados"
            className="px-4 py-2 rounded-full bg-rose-50 hover:bg-[#E3007B] text-[#E3007B] hover:text-white transition-colors whitespace-nowrap border border-rose-200"
          >
            03. Resultados
          </a>
          <a
            href="#depoimentos"
            className="px-4 py-2 rounded-full bg-rose-50 hover:bg-[#E3007B] text-[#E3007B] hover:text-white transition-colors whitespace-nowrap border border-rose-200"
          >
            04. Depoimentos
          </a>
          <a
            href="#agendar"
            className="px-4 py-2 rounded-full bg-[#E3007B] text-white hover:bg-[#C2185B] transition-colors whitespace-nowrap shadow-xs"
          >
            05. Agendar Agora
          </a>
        </div>
      </section>

      {/* SECTION: SOBRE (About Esteticista Taís Marques) */}
      <section id="sobre" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border-2 border-rose-200 shadow-2xl bg-rose-50">
                <img 
                  src="https://images.unsplash.com/photo-1512290900673-70023021074e?auto=format&fit=crop&w=800&q=80" 
                  alt="Espaço Estética Taís Marques em São José dos Campos"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-300 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md">
                    Espaço Físico em SJC
                  </span>
                  <h3 className="text-xl font-bold mt-2">Ambiente Confortável e Higienizado</h3>
                  <p className="text-xs text-rose-100 mt-1">
                    Desenvolvido para oferecer máximo relaxamento e segurança biológica.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-[#E3007B] font-bold text-xs uppercase tracking-widest bg-rose-100/80 px-3 py-1 rounded-full mb-3">
                <Heart className="w-3.5 h-3.5" />
                <span>Sobre a Profissional</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Prazer, sou a <span className="text-[#E3007B]">Taís Marques</span>
              </h2>

              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                Atuando com dedicação e excelência em <strong>São José dos Campos - SP</strong>, sou apaixonada por transformar vidas através do cuidado estético ético e personalizado.
              </p>

              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                No <strong>Espaço Taís Marques</strong>, cada cliente é única. Não acredito em receitas prontas: antes de qualquer procedimento, realizo uma avaliação minuciosa da saúde da sua pele para indicar exatamente o que trará os melhores resultados com segurança e conforto.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-y border-rose-100 py-6">
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#E3007B] block">+5 Anos</span>
                  <span className="text-xs text-slate-500 font-semibold">de Experiência em SJC</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#7B1FA2] block">100%</span>
                  <span className="text-xs text-slate-500 font-semibold">Atendimento Individual</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#E3007B] block">Nota 5.0</span>
                  <span className="text-xs text-slate-500 font-semibold">Avaliações no Google</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => handleWhatsappClick("Olá Taís, gostaria de agendar uma avaliação no seu espaço em SJC.")}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#E3007B] to-[#7B1FA2] hover:from-[#C2185B] hover:to-[#6A1B9A] text-white font-bold rounded-xl shadow-md flex items-center gap-2 text-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Falar Diretamente com a Taís</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION: SERVIÇOS (Services Cards) */}
      <section id="servicos" className="py-20 px-4 sm:px-6 bg-[#FFF4F8]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3007B] bg-rose-100 px-3.5 py-1 rounded-full">
              Tratamentos Exclusivos em SJC
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Serviços & Protocolos oferecidos
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Clique em qualquer serviço para agendar sua sessão ou tirar dúvidas no WhatsApp.
            </p>

            {/* Filter Tabs */}
            <div className="mt-6 inline-flex p-1 bg-white rounded-2xl border border-rose-200 shadow-xs">
              <button
                onClick={() => setActiveTab('todos')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'todos'
                    ? 'bg-[#E3007B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#E3007B]'
                }`}
              >
                Todos os Tratamentos
              </button>
              <button
                onClick={() => setActiveTab('facial')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'facial'
                    ? 'bg-[#E3007B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#E3007B]'
                }`}
              >
                Estética Facial
              </button>
              <button
                onClick={() => setActiveTab('corporal')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'corporal'
                    ? 'bg-[#E3007B] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#E3007B]'
                }`}
              >
                Estética Corporal
              </button>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => handleWhatsappClick(`Olá, gostaria de saber mais informações sobre o serviço: ${service.title}`)}
                className="bg-white rounded-3xl overflow-hidden border border-rose-100 shadow-md hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-[#E3007B] shadow-xs">
                      {service.tag}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#E3007B] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-[#7B1FA2] mt-1">
                      {service.subtitle}
                    </p>
                    <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits List */}
                    <div className="mt-4 pt-4 border-t border-rose-50 space-y-1.5">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsappClick(`Olá, gostaria de agendar o serviço: ${service.title}`);
                    }}
                    className="w-full py-3 bg-rose-50 group-hover:bg-gradient-to-r group-hover:from-[#E3007B] group-hover:to-[#7B1FA2] text-[#E3007B] group-hover:text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-xs border border-rose-200 group-hover:border-transparent cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Consultar & Agendar via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => handleWhatsappClick("Olá, gostaria de saber sobre outros tratamentos estéticos disponíveis.")}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#E3007B] hover:text-[#7B1FA2] underline cursor-pointer"
            >
              <span>Não encontrou o que procura? Clique aqui para consultar outros serviços</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION: RESULTADOS (Before & After Showcase) */}
      <section id="resultados" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3007B] bg-rose-100 px-3.5 py-1 rounded-full">
              Resultados Reais em SJC
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Transformações que encantam
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Confira os resultados reais obtidos por clientes no Espaço Taís Marques em São José dos Campos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((res, index) => (
              <div key={index} className="bg-[#FFF9FB] rounded-3xl p-5 border border-rose-100 shadow-md">
                <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden mb-4">
                  <div className="relative aspect-square bg-slate-200">
                    <img src={res.beforeImg} alt="Antes" className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      Antes
                    </span>
                  </div>
                  <div className="relative aspect-square bg-slate-200">
                    <img src={res.afterImg} alt="Depois" className="w-full h-full object-cover" />
                    <span className="absolute bottom-2 left-2 bg-[#E3007B] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                      Depois
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7B1FA2] bg-purple-100 px-2 py-0.5 rounded">
                  {res.tag} • {res.location}
                </span>

                <h3 className="text-base font-bold text-slate-900 mt-2">
                  {res.title}
                </h3>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                  {res.description}
                </p>

                <button
                  onClick={() => handleWhatsappClick(`Olá, vi o resultado de ${res.title} e gostaria de um tratamento parecido.`)}
                  className="mt-4 w-full py-2.5 bg-white hover:bg-rose-50 text-[#E3007B] font-bold text-xs rounded-xl border border-rose-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Quero este Resultado</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: DEPOIMENTOS (Testimonials) */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#FFF4F8] to-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3007B] bg-rose-100 px-3.5 py-1 rounded-full">
              Opinião de Quem Confia
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              O que nossas clientes dizem em SJC
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              A satisfação e o bem-estar de quem passa pelas mãos da Taís Marques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-3xl border border-rose-100 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(test.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{test.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-50 flex items-center gap-3">
                  <img
                    src={test.avatar}
                    alt={test.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-rose-200"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                    <span className="text-xs text-slate-500 font-medium block">{test.role} • {test.neighborhood}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION: AGENDAR (Booking & Location in SJC) */}
      <section id="agendar" className="py-20 px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#E3007B]/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#7B1FA2]/30 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-300 bg-pink-950/80 px-3.5 py-1 rounded-full border border-pink-500/30">
                Agendamento Simplificado
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight leading-tight">
                Pronta para Cuidar da Sua Pele com quem entende?
              </h2>

              <p className="text-slate-300 text-base mt-4 leading-relaxed">
                Agende sua consulta com a <strong>Esteticista Taís Marques</strong> de forma rápida e prática pelo WhatsApp. Respondemos em poucos minutos!
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <MapPin className="w-6 h-6 text-[#E3007B] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Localização em SJC</h4>
                    <p className="text-slate-300 text-xs mt-0.5">
                      São José dos Campos - SP (Próximo aos principais bairros da cidade)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Phone className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Atendimento via WhatsApp</h4>
                    <p className="text-slate-300 text-xs mt-0.5 font-mono">
                      +55 12 99749-1441
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Clock className="w-6 h-6 text-amber-300 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Horários de Funcionamento</h4>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Segunda a Sexta: 08:00 às 19:00 | Sábado: 08:00 às 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Booking Card */}
            <div className="lg:col-span-6">
              <div className="bg-white text-slate-900 rounded-3xl p-8 border border-rose-200 shadow-2xl text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#E3007B]">
                  <MessageCircle className="w-8 h-8 fill-current" />
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900">
                  Agende sua Avaliação
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  Ao clicar no botão abaixo, você será direcionada para a conversa oficial no WhatsApp da Taís Marques.
                </p>

                <div className="my-6 p-4 bg-rose-50 rounded-2xl border border-rose-100 text-left">
                  <span className="text-xs font-bold text-slate-500 uppercase block mb-1">
                    Mensagem padrão pré-preenchida:
                  </span>
                  <p className="text-xs font-mono font-semibold text-[#E3007B]">
                    "{DEFAULT_MESSAGE}"
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsappClick()}
                  className="w-full py-5 bg-gradient-to-r from-[#E3007B] via-[#D8006C] to-[#7B1FA2] hover:from-[#C2185B] hover:to-[#6A1B9A] text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-magenta-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer uppercase tracking-wide"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>Enviar Mensagem Agora</span>
                </button>

                <p className="text-[11px] text-slate-400 mt-4 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Atendimento rápido e direto com a equipe
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <Logo variant="dark" size="sm" />

            <div className="flex items-center gap-6 text-slate-300 font-semibold">
              <a href="#sobre" className="hover:text-[#E3007B]">Sobre</a>
              <a href="#servicos" className="hover:text-[#E3007B]">Serviços</a>
              <a href="#resultados" className="hover:text-[#E3007B]">Resultados</a>
              <a href="#agendar" className="hover:text-[#E3007B]">Contato</a>
            </div>
          </div>

          <div className="mt-8 text-center sm:flex sm:items-center sm:justify-between text-slate-500">
            <p>
              Espaço Taís Marques Esteticista © {new Date().getFullYear()} — São José dos Campos, SP.
            </p>
            <p className="mt-2 sm:mt-0">
              Desenvolvido para Alta Conversão & Agendamentos
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Sticky WhatsApp Button */}
      <button
        onClick={() => handleWhatsappClick()}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group border-2 border-white cursor-pointer"
        title="Falar no WhatsApp com Esteticista Taís Marques"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out group-hover:ml-3 text-xs font-extrabold tracking-wide uppercase">
          Falar com a Taís
        </span>
      </button>

    </div>
  );
};
