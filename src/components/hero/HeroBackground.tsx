import React from 'react';

const HeroBackground: React.FC = () => {
  return (
    <>
      {/* Dark Mode Universe Background */}
      <div className="absolute inset-0 overflow-hidden dark:block hidden">
        {/* Enhanced Starfield for Mobile */}
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 80 : 120)].map((_, i) => (
            <div
              key={`dark-star-${i}`}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Nebula Clouds */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full opacity-25 sm:opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)',
              left: '10%',
              top: '20%',
              animation: 'nebula1 20s ease-in-out infinite',
              filter: 'blur(30px) sm:blur(40px)'
            }}
          />
          <div 
            className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full opacity-20 sm:opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(236,72,153,0.3) 50%, transparent 70%)',
              right: '15%',
              top: '30%',
              animation: 'nebula2 25s ease-in-out infinite reverse',
              filter: 'blur(40px) sm:blur(50px)'
            }}
          />
          <div 
            className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full opacity-15 sm:opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, rgba(6,182,212,0.3) 50%, transparent 70%)',
              left: '60%',
              bottom: '20%',
              animation: 'nebula3 30s ease-in-out infinite',
              filter: 'blur(50px) sm:blur(60px)'
            }}
          />
        </div>

        {/* Enhanced Shooting Stars */}
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 8 : 12)].map((_, i) => (
            <div
              key={`dark-shooting-star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full opacity-90 sm:opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `shootingStar ${Math.random() * 3 + 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Galaxy Spiral */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-full h-full opacity-8 sm:opacity-5"
            style={{
              background: `conic-gradient(from 0deg, 
                transparent 0deg, 
                rgba(6,182,212,0.4) 45deg, 
                transparent 90deg, 
                rgba(147,51,234,0.4) 135deg, 
                transparent 180deg, 
                rgba(236,72,153,0.4) 225deg, 
                transparent 270deg, 
                rgba(6,182,212,0.4) 315deg, 
                transparent 360deg)`,
              animation: 'galaxyRotate 60s linear infinite',
              borderRadius: '50%',
              filter: 'blur(80px) sm:blur(100px)'
            }}
          />
        </div>
      </div>

      {/* Light Mode Background */}
      <div className="absolute inset-0 overflow-hidden block dark:hidden">
        {/* Enhanced Starfield for Light Mode */}
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 60 : 90)].map((_, i) => (
            <div
              key={`light-star-${i}`}
              className="absolute bg-gray-400 rounded-full opacity-40 sm:opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Light Nebula Clouds */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full opacity-15 sm:opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)',
              left: '10%',
              top: '20%',
              animation: 'nebula1 20s ease-in-out infinite',
              filter: 'blur(30px) sm:blur(40px)'
            }}
          />
          <div 
            className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full opacity-12 sm:opacity-8"
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)',
              right: '15%',
              top: '30%',
              animation: 'nebula2 25s ease-in-out infinite reverse',
              filter: 'blur(40px) sm:blur(50px)'
            }}
          />
          <div 
            className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full opacity-10 sm:opacity-6"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)',
              left: '60%',
              bottom: '20%',
              animation: 'nebula3 30s ease-in-out infinite',
              filter: 'blur(50px) sm:blur(60px)'
            }}
          />
        </div>

        {/* Enhanced Light Mode Shooting Stars */}
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 9 : 14)].map((_, i) => (
            <div
              key={`light-shooting-star-${i}`}
              className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-50 sm:opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `shootingStar ${Math.random() * 3 + 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Enhanced Light Galaxy Spiral */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-full h-full opacity-5 sm:opacity-3"
            style={{
              background: `conic-gradient(from 0deg, 
                transparent 0deg, 
                rgba(6,182,212,0.2) 45deg, 
                transparent 90deg, 
                rgba(147,51,234,0.2) 135deg, 
                transparent 180deg, 
                rgba(236,72,153,0.2) 225deg, 
                transparent 270deg, 
                rgba(6,182,212,0.2) 315deg, 
                transparent 360deg)`,
              animation: 'galaxyRotate 60s linear infinite',
              borderRadius: '50%',
              filter: 'blur(80px) sm:blur(100px)'
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HeroBackground;