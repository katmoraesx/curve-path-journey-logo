
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
        {/* Outer Steering Wheel Circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#E2E8F0"
          strokeWidth="8"
          className="animate-draw"
          strokeDasharray="251.2"
        />

        {/* Inner Ring */}
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="#1A1F2C"
          strokeWidth="4"
          className="animate-draw"
          strokeDasharray="157"
        />

        {/* Steering Wheel Grips */}
        <path
          d="M50 25L50 35M50 65L50 75M25 50L35 50M65 50L75 50"
          stroke="#1A1F2C"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-draw"
          strokeDasharray="40"
        />

        {/* Center Point */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="#D6BCFA"
          className="animate-fade-in"
        />
      </svg>
    </div>
  );
};

export default Logo;

