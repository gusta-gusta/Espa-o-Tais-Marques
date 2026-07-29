import React from 'react';

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
      {/* Emblem SVG matching official uploaded logo */}
      <div className={`relative flex-shrink-0 ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Swirling Purple Arc Ring */}
          <path
            d="M 100 8 C 45 8 8 45 8 100 C 8 145 38 182 82 192 C 86 193 90 190 90 186 C 90 182 87 178 83 177 C 46 168 18 137 18 100 C 18 55 55 18 100 18 C 145 18 182 55 182 100 C 182 120 175 138 163 152 C 160 155 160 160 163 163 C 166 166 171 166 174 162 C 189 146 198 124 198 100 C 198 45 155 8 100 8 Z"
            fill="#7B1FA2"
          />

          {/* Grey Base Circle */}
          <circle cx="100" cy="100" r="76" fill="#8E8E93" />

          {/* Pink/Magenta Inner Circle Overlay */}
          <path
            d="M 100 24 C 58 24 24 58 24 100 C 24 142 58 176 100 176 C 104 176 108 176 112 175 C 95 158 85 132 85 100 C 85 68 95 42 112 25 C 108 24 104 24 100 24 Z"
            fill="#E3007B"
          />

          {/* Graceful White Silhouette with Raised Arm */}
          <circle cx="108" cy="52" r="10" fill="#FFFFFF" />
          <path
            d="M 108 38 C 112 30 120 25 128 22 C 130 21 132 23 131 25 C 126 31 118 36 112 40 Z"
            fill="#FFFFFF"
          />
          <path
            d="M 104 62 C 96 68 88 78 84 92 C 80 106 82 122 88 136 C 92 146 98 156 106 164 C 112 170 120 174 128 176 C 118 168 112 156 110 142 C 108 128 112 114 120 102 C 128 90 132 78 126 66 C 122 58 114 54 108 52 Z"
            fill="#FFFFFF"
          />

          {/* Purple Botanical Leaves Accent at Bottom Right */}
          <g transform="translate(130, 135) scale(0.9)">
            <path
              d="M 10 30 C 0 10 -20 0 -30 5 C -25 25 -10 35 10 30 Z"
              fill="#7B1FA2"
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />
            <path
              d="M 35 25 C 20 0 -10 -10 -25 -2 C -15 20 10 35 35 25 Z"
              fill="#7B1FA2"
              stroke="#FFFFFF"
              strokeWidth="3"
            />
          </g>
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span className="text-[11px] sm:text-[12px] font-medium text-slate-500 uppercase tracking-widest font-raleway leading-none mb-0.5">
          Espaço
        </span>
        <span className="font-serif italic font-black text-2xl sm:text-3xl bg-gradient-to-r from-[#E3007B] via-[#C2185B] to-[#7B1FA2] bg-clip-text text-transparent leading-none py-0.5">
          Taís Marques
        </span>
        <span className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] ${subtextColorClass} font-raleway mt-0.5`}>
          E S T E T I C I S T A
        </span>
      </div>
    </div>
  );
};

