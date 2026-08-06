import React from 'react';
// IMPORTANTE: Importando a imagem corretamente no topo
import logoImagem from '../../assets/logo.webp';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  // Ajustamos as larguras para um formato retangular longo
  const sizeClasses = {
    sm: 'w-32', // Aprox. 128px de largura
    md: 'w-48', // Aprox. 192px de largura
    lg: 'w-64', // Aprox. 256px de largura
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
          className="w-full h-auto object-contain drop-shadow-sm"
        />
      </div>

    </div>
  );
};