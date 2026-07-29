import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check, ShieldCheck, Zap, Sparkles, ArrowLeft, Star, Clock } from 'lucide-react';

interface LpOfertaProps {
  isPreview: boolean;
}

export const LpOferta: React.FC<LpOfertaProps> = ({ isPreview }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 text-slate-800 font-sans pb-16">
      {/* Navigation */}
      <header className="bg-white border-b border-rose-100 py-4 px-6 sticky top-0 z-30 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/lp-video" className="inline-flex items-center gap-2 text-rose-600 font-bold text-sm hover:underline">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Vídeo</span>
          </Link>

          <span className="text-xs font-semibold px-2.5 py-1 bg-rose-100 text-rose-800 rounded-full">
            Oferta Especial Dia das Mulheres
          </span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 pt-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Desconto de 70% Liberado</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Escolha o Seu Plano de Inscrição
          </h1>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Garantia total de satisfação de 7 dias ou seu dinheiro de volta.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 border-2 border-rose-500 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gradient-to-l from-rose-600 to-pink-600 text-white font-bold text-xs px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
            Mais Vendido
          </div>

          <h2 className="text-2xl font-bold text-slate-900">Combo Masterclass + Mentoria</h2>
          <p className="text-xs text-slate-500 mt-1">Acesso completo com todos os bônus exclusivos</p>

          <div className="my-6 p-4 bg-rose-50/60 rounded-2xl border border-rose-100">
            <span className="text-xs text-slate-400 line-through block">De R$ 997,00</span>
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-bold text-rose-700">12x de</span>
              <span className="text-4xl font-black text-rose-600">R$ 29,70</span>
            </div>
            <span className="text-xs text-slate-600 font-medium">ou R$ 297,00 à vista no Pix</span>
          </div>

          <ul className="space-y-3 text-sm text-slate-700 mb-8">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Acesso vitalício ao treinamento em vídeo</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Kit com 15 Fichas de Anamnese Editáveis</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Certificado de Conclusão de 40 horas</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Grupo VIP no WhatsApp com a Dra. Eliana</span>
            </li>
          </ul>

          <Link
            to="/obrigado"
            className="w-full py-4 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-center rounded-xl shadow-lg shadow-rose-500/30 flex items-center justify-center gap-2 uppercase tracking-wide transition-all transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Garantir Vaga Agora</span>
          </Link>

          <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Pagamento 100% Criptografado & Seguro
          </p>
        </div>
      </div>
    </div>
  );
};
