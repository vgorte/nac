import React from 'react';
import brushmask from '../../assets/images/brush_mask.png';

interface GrungeImageMaskProps {
  children: React.ReactNode;
  className?: string;
  withGlow?: boolean;
  glowColor?: string;
  glowOpacity?: number;
}

const GrungeImageMask: React.FC<GrungeImageMaskProps> = ({
  children,
  className = '',
  withGlow = true,
  glowColor = 'rgba(255, 165, 0, 0.5)',
  glowOpacity = 0.3
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Grunge mask container */}
      <div 
        className="w-full h-full transform hover:scale-105 transition-transform duration-300 ease-out"
        style={{
          WebkitMask: `url(${brushmask}) no-repeat center center`,
          mask: `url(${brushmask}) no-repeat center center`,
          WebkitMaskSize: 'contain',
          maskSize: 'contain'
        }}
      >
        {children}
      </div>
      
      {/* Optional glow effect */}
      {withGlow && (
        <div 
          className="absolute inset-0 -z-10 blur-sm"
          style={{
            background: `url(${brushmask}) no-repeat center center`,
            backgroundSize: 'contain',
            filter: `drop-shadow(0 0 10px ${glowColor})`,
            opacity: glowOpacity
          }}
        />
      )}
    </div>
  );
};

export default GrungeImageMask;