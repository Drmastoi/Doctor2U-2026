import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = "", variant = 'light' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-medical-900';
  const subtextColor = variant === 'light' ? 'text-teal-400' : 'text-teal-600';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* House Outline */}
        <svg 
          viewBox="0 0 100 100" 
          className={`absolute inset-0 w-full h-full ${variant === 'light' ? 'stroke-white' : 'stroke-medical-900'}`}
          fill="none" 
          strokeWidth="4"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M10 40 L50 10 L90 40 L90 90 L10 90 Z" />
          {/* Medical Cross inside House */}
          <path 
            d="M50 35 V75 M30 55 H70" 
            className={variant === 'light' ? 'stroke-teal-400' : 'stroke-teal-600'}
            strokeWidth="8"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display font-bold text-2xl tracking-tight ${textColor}`}>
          DOCTOR 2 U
        </span>
        <span className={`text-[9px] uppercase tracking-[0.2em] font-bold mt-1 ${subtextColor}`}>
          PRIVATE MEDICAL DOCTORS
        </span>
      </div>
    </div>
  );
}
