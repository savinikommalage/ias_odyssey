import React from 'react';
import odysseyLogo from '../assets/logo/odylogo.png';
import ieeeLogo from '../assets/logo/IEEE-DAsAvZ8f (1).png';
import iasLogo from '../assets/logo/IAS.png';

export default function Footer() {
  return (
    <footer className="w-full text-center pb-6 pt-6 flex flex-col items-center justify-center border-t border-ink/10 mt-auto">
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <img
          src={odysseyLogo}
          alt="Odyssey Logo"
          className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-105"
        />
        <div className="w-[1.5px] h-6 sm:h-7 bg-ink/20 rounded-full" />
        <img
          src={ieeeLogo}
          alt="IEEE Logo"
          className="h-5 sm:h-6 w-auto object-contain transition-transform hover:scale-105"
        />
        <div className="w-[1.5px] h-6 sm:h-7 bg-ink/20 rounded-full" />
        <img
          src={iasLogo}
          alt="IAS Logo"
          className="h-7 sm:h-8 w-auto object-contain transition-transform hover:scale-105"
        />
      </div>
    </footer>
  );
}
