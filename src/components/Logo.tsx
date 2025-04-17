
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
        {/* Main Trail Marker */}
        <path
          d="M30 80L50 20L70 80"
          stroke="#E2E8F0"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
        />
        
        {/* Trail Arrow Line */}
        <path
          d="M30 80L50 20L70 80"
          stroke="#1A1F2C"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-draw"
          strokeDasharray="200"
        />

        {/* Trail Points */}
        <circle cx="50" cy="20" r="3" fill="#D6BCFA" className="animate-fade-in" />
        <circle cx="30" cy="80" r="2.5" fill="#D6BCFA" className="animate-fade-in" />
        <circle cx="70" cy="80" r="2.5" fill="#D6BCFA" className="animate-fade-in" />
      </svg>
    </div>
  );
};

export default Logo;
