
import React from 'react';

const Logo = ({ className = '', size = 80 }: { className?: string; size?: number }) => {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curved Path */}
        <path
          d="M20 80C20 80 35 80 45 65C55 50 45 35 55 20C65 5 80 20 80 20"
          stroke="#1A1F2C"
          strokeWidth="3"
          strokeLinecap="round"
          className="animate-draw"
        />
        
        {/* Arrow */}
        <path
          d="M75 15L80 20L85 15"
          stroke="#D6BCFA"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-fade-in"
        />
      </svg>
    </div>
  );
};

export default Logo;
