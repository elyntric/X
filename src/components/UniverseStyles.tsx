import React from 'react';

const UniverseStyles: React.FC = () => {
  return (
    <style jsx>{`
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      
      @keyframes nebula1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(30px, -20px) scale(1.1); }
        66% { transform: translate(-20px, 30px) scale(0.9); }
      }
      
      @keyframes nebula2 {
        0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        50% { transform: translate(-40px, 20px) scale(1.2) rotate(180deg); }
      }
      
      @keyframes nebula3 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        25% { transform: translate(20px, -30px) scale(0.8); }
        75% { transform: translate(-30px, -10px) scale(1.1); }
      }
      
      @keyframes shootingStar {
        0% { 
          transform: translateX(-100px) translateY(-100px) scale(0);
          opacity: 0;
        }
        10% { 
          transform: translateX(-50px) translateY(-50px) scale(1);
          opacity: 1;
        }
        90% { 
          transform: translateX(200px) translateY(200px) scale(1);
          opacity: 1;
        }
        100% { 
          transform: translateX(300px) translateY(300px) scale(0);
          opacity: 0;
        }
      }
      
      @keyframes galaxyRotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes travelBorder {
        0% {
          transform: translateX(-100%) translateY(0) rotate(0deg);
          top: 0;
          left: 0;
        }
        25% {
          transform: translateX(0) translateY(-100%) rotate(90deg);
          top: 0;
          right: 0;
          left: auto;
        }
        50% {
          transform: translateX(100%) translateY(0) rotate(180deg);
          bottom: 0;
          right: 0;
          top: auto;
          left: auto;
        }
        75% {
          transform: translateX(0) translateY(100%) rotate(270deg);
          bottom: 0;
          left: 0;
          right: auto;
          top: auto;
        }
        100% {
          transform: translateX(-100%) translateY(0) rotate(360deg);
          top: 0;
          left: 0;
          bottom: auto;
          right: auto;
        }
      }
    `}</style>
  );
};

export default UniverseStyles;