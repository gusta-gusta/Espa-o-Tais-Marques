import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Volume2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Users, 
  CheckCircle2, 
  ChevronRight, 
  MessageCircle, 
  Award, 
  Zap, 
  Gift, 
  Star,
  MapPin,
  Lock,
  ArrowRight
} from 'lucide-react';

interface LpVideoProps {
  isPreview: boolean;
}

export const LpVideo: React.FC<LpVideoProps> = ({ isPreview }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#fff7f9] text-slate-800 font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Countdown Banner */}
      <div className="bg-gradient-to-r from-rose-700 via-pink-700 to-rose-800 text-white py-2 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md">
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
        <span>AULA EXCLUSIVA DIA DAS MULHERES: As vagas com 70% de desconto encerram em breve!</span>
        <span className="bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-mono text-xs font-bold text-amber-200 ml-2">
          08m 42s
        </span>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/lp-video" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 flex items-center justify-center text-white font-serif font-bold text-lg shadow-md shadow-rose-500/30">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-slate-900 tracking-tight text-lg leading-none">
                Elegância <span className="text-rose-600 font-sans font-light">Estética</span>
              </span>
              <span className="text-[10px] text-rose-500 uppercase font-semibold tracking-widest">
                Dra. Eliana & Treinamentos
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
              isPreview 
                ? 'bg-amber-100 text-amber-800 border border-amber-300' 
                : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isPreview ? 'bg-amber-500 animate-ping' : 'bg-emerald-500 animate-pulse'}`}></span>
              {isPreview ? 'HashRouter (Preview Mode)' : 'BrowserRouter (Production)'}
            </span>

            <Link
              to="/sitemap"
              className="text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-200 transition-colors"
            >
              Mapa de Rotas
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-8 pb-16 px-4 sm:px-6 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-rose-300/30 via-pink-300/20 to-amber-200/20 blur-3xl rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-100 to-pink-100 border border-rose-200/80 px-4 py-1.5 rounded-full text-rose-800 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
            <Award className="w-4 h-4 text-rose-600" />
            <span>Masterclass de Estética Avançada & Alta Conversão</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight">
            Aprenda a Lotar sua Agenda na Estética com os <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent">Protocolos de Alto Valor</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Assista ao vídeo exclusivo abaixo e descubra o passo a passo científico e estratégico para se posicionar como autoridade e faturar até 5x mais.
          </p>

          {/* VSL Video Container */}
          <div className="mt-8 relative max-w-3xl mx-auto bg-slate-900 rounded-2xl shadow-2xl shadow-rose-900/20 overflow-hidden border-2 border-rose-200/50 group">
            <div className="relative aspect-video w-full bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 flex items-center justify-center">
              
              {/* Simulated Video Thumbnail / Player */}
              <div className="absolute inset-0 bg-cover bg-center opacity-85" style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80')`
              }}></div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

              {/* Live Badge Top Right */}
              <div className="absolute top-4 right-4 bg-rose-600/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                <span>AO VIVO ({1482} assistindo)</span>
              </div>

              {/* Center Play Button Overlay */}
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 text-white flex items-center justify-center shadow-2xl shadow-rose-600/50 hover:scale-110 active:scale-95 transition-all duration-300 group-hover:from-rose-500 group-hover:to-pink-500 cursor-pointer"
                >
                  <Play className="w-10 h-10 ml-1 fill-white" />
                  <span className="absolute -bottom-8 text-xs font-bold text-white uppercase tracking-wider bg-slate-900/80 px-3 py-1 rounded-full border border-white/20">
                    Clique para Assistir
                  </span>
                </button>
              ) : (
                <div className="relative z-10 text-center text-white p-6 bg-slate-900/90 rounded-2xl border border-rose-500/30 max-w-md mx-4 animate-fadeIn">
                  <div className="w-12 h-12 bg-rose-600/20 rounded-full flex items-center justify-center mx-auto mb-3 text-rose-400">
                    <Volume2 className="w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Áudio do Vídeo Ativado!</h3>
                  <p className="text-xs text-slate-300 mb-4">A apresentação está sendo reproduzida. Garanta sua vaga no botão abaixo.</p>
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="text-xs text-rose-400 hover:underline"
                  >
                    Pausar transmissão
                  </button>
                </div>
              )}

              {/* Video Bottom Bar Mockup */}
              <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 backdrop-blur-md p-3 flex items-center justify-between text-white text-xs border-t border-white/10">
                <div className="flex items-center gap-3">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-rose-400">
                    <Play className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-slate-300">14:20 / 38:45</span>
                </div>
                <div className="flex items-center gap-2 text-rose-300 font-semibold text-[11px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Método Dra. Eliana®</span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA Section */}
          <div className="mt-10 max-w-xl mx-auto text-center">
            <Link
              to="/lp-oferta"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-pink-500 text-white text-lg sm:text-xl font-extrabold rounded-2xl shadow-xl shadow-rose-600/35 hover:shadow-2xl hover:shadow-rose-600/50 transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide border-2 border-rose-300/30"
            >
              <span className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-amber-300 animate-bounce" />
                <span>Quero Garantir Minha Vaga Com Desconto</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Garantia Incondicional de 7 Dias
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4 text-rose-600" />
                Pagamento 100% Seguro
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4 text-pink-600" />
                Mais de 4.200 alunas formadas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Photo Inspiration Showcase (Matching attached artwork) */}
      <section className="py-12 bg-gradient-to-b from-white to-pink-50/50 border-y border-rose-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gradient-to-r from-rose-900 via-rose-950 to-pink-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
            
            {/* Soft Ambient Background Light Effect */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-rose-500/20 rounded-full blur-3xl"></div>

            <div className="md:col-span-7 z-10">
              <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-200 border border-rose-400/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Gift className="w-3.5 h-3.5 text-pink-300" />
                <span>Edição Especial Dia das Mulheres</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-pink-50 leading-tight">
                Feliz Dia das <span className="text-pink-300 italic font-normal">Mulheres</span>
              </h2>

              <p className="mt-4 text-rose-100 text-sm sm:text-base leading-relaxed">
                Celebre a força, elegância e independência da mulher na estética. Ganhe bônus exclusivos preparados para impulsionar a sua carreira e elevar a autoestima de centenas de clientes.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-xs font-medium">
                <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-pink-300" />
                  <span>Certificado Reconhecido</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-pink-300" />
                  <span>Mentoria ao Vivo</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-pink-300" />
                  <span>Kit de Fichas de Anamnese</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 p-2.5 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-pink-300" />
                  <span>Suporte VIP 1 ano</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 z-10 flex justify-center">
              <div className="relative">
                <div className="w-56 sm:w-64 h-72 sm:h-80 rounded-2xl overflow-hidden border-4 border-rose-300/40 shadow-2xl relative bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                    alt="Dra. Eliana Estética" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <span className="font-serif italic text-lg font-bold text-pink-200">Dra. Eliana Sales</span>
                    <p className="text-[11px] text-rose-200 uppercase tracking-widest font-sans">Especialista em Estética Facial</p>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-900 font-bold p-3 rounded-2xl shadow-xl text-center text-xs border border-amber-100">
                  <Star className="w-4 h-4 mx-auto fill-slate-900 mb-0.5" />
                  <span>Top 1% Mentoras</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-100/80 px-3 py-1 rounded-full">
            Transformação Garantida
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            O que você vai dominar no método
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Um ecossistema completo de conhecimento técnico e posicionamento comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-lg shadow-rose-950/5 hover:border-rose-300 transition-all">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-4 font-bold text-xl">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Protocolos de Rejuvenescimento</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Associe técnicas modernas de estimulação de colágeno sem dor e com recuperação ultra rápida.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-lg shadow-rose-950/5 hover:border-rose-300 transition-all">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-4 font-bold text-xl">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Script de Vendas no Consultório</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Aprenda a apresentar planos de tratamento de alto valor sem depender de dar descontos desnecessários.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-rose-100 shadow-lg shadow-rose-950/5 hover:border-rose-300 transition-all">
            <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 mb-4 font-bold text-xl">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Posicionamento Premium nas Redes</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Atraia clientes qualificados dispostos a pagar pelo valor do seu atendimento de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 bg-white border-t border-rose-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Dúvidas Frequentes (FAQ)
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Por quanto tempo terei acesso ao treinamento?",
                a: "O acesso é vitalício, incluindo todas as atualizações futuras de aulas e materiais em PDF."
              },
              {
                q: "Serve para iniciantes em estética?",
                a: "Sim! O método foi estruturado desde o nível básico até os protocolos mais avançados com linguagem simples e didática."
              },
              {
                q: "Como receberei os bônus e o certificado?",
                a: "Imediatamente após a confirmação da inscrição, você receberá um e-mail com seus dados de acesso à plataforma exclusiva."
              },
              {
                q: "Como funciona a garantia?",
                a: "Você tem 7 dias para testar todo o conteúdo. Se achar que não é para você, devolvemos 100% do seu dinheiro sem burocracia."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="border border-rose-100 rounded-xl overflow-hidden bg-rose-50/30"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 font-semibold text-slate-900 flex justify-between items-center gap-4 hover:bg-rose-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-rose-600 transition-transform duration-200 ${activeFaq === index ? 'rotate-90' : ''}`} />
                </button>

                {activeFaq === index && (
                  <div className="p-4 pt-0 text-slate-600 text-sm border-t border-rose-100/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-slate-300 font-bold mb-2">
            Elegância Estética © {new Date().getFullYear()} - Todos os direitos reservados.
          </p>
          <p className="max-w-xl mx-auto text-slate-500 leading-relaxed mb-4">
            Este site não faz parte do site do Facebook nem do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira.
          </p>
          <div className="flex items-center justify-center gap-4 text-rose-400 font-medium">
            <Link to="/sitemap" className="hover:underline">Mapa de Rotas</Link>
            <span>•</span>
            <Link to="/lp-oferta" className="hover:underline">Ver Oferta</Link>
            <span>•</span>
            <Link to="/obrigado" className="hover:underline">Área do Aluno</Link>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/5511999999999?text=Ola!%20Gostaria%20de%20tirar%20duvidas%20sobre%20o%20Treinamento"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
        title="Falar com Suporte no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out group-hover:ml-2 text-xs font-bold">
          Dúvidas? Fale Conosco
        </span>
      </a>
    </div>
  );
};
