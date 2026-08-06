import React from 'react';
// IMPORTANTE: Importando a imagem corretamente no topo
import logoImagem from '../../assets/logo.webp';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  const textColorClass = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const subtextColorClass = variant === 'dark' ? 'text-rose-200' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      
      {/* SÍMBOLO DA LOGO */}
      <div className={`relative flex-shrink-0 ${sizeClasses[size]}`}>
        <img 
          src={logoImagem} 
          alt="Logo Taís Marques" 
          className="w-full h-full object-contain drop-shadow-sm"
        />
      </div>

    </div>
  );
};