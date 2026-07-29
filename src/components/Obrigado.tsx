import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageCircle, Mail, Sparkles, Home } from 'lucide-react';

export const Obrigado: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 text-slate-800 font-sans flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-rose-100 shadow-2xl text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
          Inscrição Confirmada!
        </span>

        <h1 className="text-2xl font-extrabold text-slate-900 mt-3">
          Parabéns! Seja muito bem-vinda ao Método
        </h1>

        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          Enviamos os seus dados de acesso ao curso para o seu e-mail cadastrado.
        </p>

        <div className="my-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-left">
          <h3 className="font-bold text-emerald-900 text-sm flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-emerald-600" />
            <span>Próximos passos:</span>
          </h3>
          <ol className="text-xs text-emerald-800 space-y-1.5 list-decimal list-inside">
            <li>Verifique sua caixa de entrada e spam.</li>
            <li>Acesse o grupo de alunas no WhatsApp.</li>
            <li>Assista à aula de boas-vindas na plataforma.</li>
          </ol>
        </div>

        <div className="space-y-3">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Entrar no Grupo VIP do WhatsApp</span>
          </a>

          <Link
            to="/sitemap"
            className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl flex items-center justify-center gap-2 text-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Voltar ao Mapa de Rotas</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
