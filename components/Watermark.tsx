
import React from 'react';

const Watermark: React.FC = () => {
  // Criamos um SVG em string para usar como background repetido
  // O texto é inclinado e possui baixíssima opacidade
  const svgString = `
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <style>
        .text { 
          font-family: 'Inter', sans-serif; 
          font-weight: 900; 
          font-size: 14px; 
          fill: white; 
          text-transform: uppercase;
          letter-spacing: 2px;
        }
      </style>
      <text x="50%" y="50%" text-anchor="middle" class="text" transform="rotate(-25 200 200)">
        Desenvolvido ❤️ por Suprema Sites Express
      </text>
    </svg>
  `;

  const encodedSvg = btoa(svgString);

  return (
    <div 
      className="fixed inset-0 z-[99999] pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: `url('data:image/svg+xml;base64,${encodedSvg}')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '300px 300px'
      }}
    />
  );
};

export default Watermark;
