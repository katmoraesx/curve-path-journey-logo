
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
        {/* Background Road */}
        <path
          d="M15 80C15 80 30 80 45 60C60 40 50 30 65 15C80 0 85 15 85 15"
          stroke="#E2E8F0"
          strokeWidth="12"
          strokeLinecap="round"
          className="animate-draw"
        />
        
        {/* Main Road Line */}
        <path
          d="M15 80C15 80 30 80 45 60C60 40 50 30 65 15C80 0 85 15 85 15"
          stroke="#1A1F2C"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-draw"
          strokeDasharray="200"
        />
        
        {/* Road Markers */}
        <circle cx="15" cy="80" r="3" fill="#D6BCFA" className="animate-fade-in" />
        <circle cx="45" cy="60" r="2.5" fill="#D6BCFA" className="animate-fade-in" />
        <circle cx="65" cy="15" r="2" fill="#D6BCFA" className="animate-fade-in" />
      </svg>
    </div>
  );
};

export default Logo;
