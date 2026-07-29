import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  const sizeClasses = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
  };

  const textColorClass = variant === 'dark' ? 'text-white' : 'text-slate-800';
  const subtextColorClass = variant === 'dark' ? 'text-rose-200' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem SVG mimicking the uploaded logo */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 120 120"
          className={size === 'sm' ? 'w-10 h-10' : size === 'lg' ? 'w-18 h-18' : 'w-14 h-14'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Grey Outer Filled Circle Background */}
          <circle cx="60" cy="60" r="48" fill="#9CA3AF" fillOpacity="0.85" />
          
          {/* Inner Magenta Filled Crescent / Heart Arc */}
          <path
            d="M 60 12 C 33.49 12 12 33.49 12 60 C 12 86.51 33.49 108 60 108 C 50 96 46 80 46 60 C 46 40 50 24 60 12 Z"
            fill="#E3007B"
          />

          {/* Graceful Female Silhouette in White */}
          <path
            d="M 64 28 C 66.5 28 68.5 26 68.5 23.5 C 68.5 21 66.5 19 64 19 C 61.5 19 59.5 21 59.5 23.5 C 59.5 26 61.5 28 64 28 Z M 72 32 C 68 34 62 35 58 39 C 55 42 53 47 52 52 C 51 57 53 62 55 67 C 57 72 56 78 52 84 C 50 87 47 90 45 92 C 50 92 56 88 60 82 C 64 76 66 70 65 63 C 68 62 72 58 75 52 C 78 46 76 38 72 32 Z"
            fill="#FFFFFF"
          />

          {/* Purple Outer Swirling Ring */}
          <circle
            cx="60"
            cy="60"
            r="54"
            stroke="#7B1FA2"
            strokeWidth="3.5"
            strokeDasharray="300"
            strokeDashoffset="30"
          />

          {/* Purple Botanical Leaves Accent at Bottom Right */}
          <path
            d="M 85 82 C 95 82 105 75 105 65 C 95 65 85 72 85 82 Z"
            fill="#7B1FA2"
          />
          <path
            d="M 92 94 C 102 94 112 87 112 77 C 102 77 92 84 92 94 Z"
            fill="#9C27B0"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className="text-[11px] sm:text-[12px] font-medium text-slate-500 uppercase tracking-wider font-raleway leading-none mb-0.5">
          Espaço
        </span>
        <span className="font-serif italic font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-[#E3007B] via-[#C2185B] to-[#7B1FA2] bg-clip-text text-transparent leading-none">
          Taís Marques
        </span>
        <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] ${subtextColorClass} font-raleway mt-0.5`}>
          E S T E T I C I S T A
        </span>
      </div>
    </div>
  );
};
