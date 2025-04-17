
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
          stroke="#18837E"
          strokeWidth="8"
          className="animate-draw"
          strokeDasharray="251.2"
        />

        {/* Road Path Ring */}
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="#18837E"
          strokeOpacity="0.6"
          strokeWidth="3"
          className="animate-draw"
          strokeDasharray="157"
          strokeDashoffset="10"
        />

        {/* Steering Wheel Grips */}
        <path
          d="M50 25L50 35M50 65L50 75M25 50L35 50M65 50L75 50"
          stroke="#18837E"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-draw"
          strokeDasharray="40"
        />

        {/* Center Point with Gradient */}
        <circle
          cx="50"
          cy="50"
          r="4"
          fill="#18837E"
          className="animate-fade-in"
          opacity="0.8"
        />

        {/* Dynamic Road Markers */}
        <circle
          cx="50"
          cy="15"
          r="2"
          fill="#18837E"
          className="animate-fade-in"
          opacity="0.6"
        />
        <circle
          cx="85"
          cy="50"
          r="2"
          fill="#18837E"
          className="animate-fade-in"
          opacity="0.6"
        />
        <circle
          cx="50"
          cy="85"
          r="2"
          fill="#18837E"
          className="animate-fade-in"
          opacity="0.6"
        />
        <circle
          cx="15"
          cy="50"
          r="2"
          fill="#18837E"
          className="animate-fade-in"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default Logo;
