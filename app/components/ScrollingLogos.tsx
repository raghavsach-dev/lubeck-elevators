'use client';

import Image from 'next/image';

interface Logo {
  src: string;
  name: string;
  caption: string;
}

interface ScrollingLogosProps {
  logos: Logo[];
  itemClassName: string;
  speed?: 'normal' | 'fast' | 'slow';
}

export default function ScrollingLogos({ logos, itemClassName, speed = 'normal' }: ScrollingLogosProps) {
  const duration = {
    fast: '40s',
    normal: '80s',
    slow: '120s',
  }[speed];

  // We need to duplicate the logos to create a seamless loop
  const extendedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden relative">
      <div 
        className="flex animate-scroll" 
        style={{ animationDuration: duration }}
      >
        {extendedLogos.map((logo, index) => (
          <div key={index} className={`flex-shrink-0 mx-4 relative group ${itemClassName}`}>
            <div className="relative w-full h-full p-2 bg-[#CFCFCF] border border-white/10 rounded-xl shadow-lg flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-[#D4AF37]/50">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                layout="fill"
                objectFit="contain"
                className="brightness-75 contrast-125 transition-all duration-300 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <p className="text-white text-center text-sm">{logo.caption}</p>
              </div>
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-max bg-[#D4AF37] text-black px-2 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {logo.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 