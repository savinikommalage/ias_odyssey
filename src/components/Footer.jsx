import React from 'react';
import odysseyLogo from '../assets/logo/odylogo.png';
import ieeeLogo from '../assets/logo/IEEE-DAsAvZ8f (1).png';
import iasLogo from '../assets/logo/IAS.png';

export default function Footer() {
  return (
    <footer className="w-full text-center pb-6 pt-5 flex flex-col items-center justify-center border-t border-ink/10 mt-auto px-4 overflow-hidden">
      {/* Mobile view (< sm): stacked cleanly into 2 balanced, legible rows */}
      <div className="flex sm:hidden flex-col items-center gap-3.5 w-full max-w-sm mx-auto">
        <img
          src={odysseyLogo}
          alt="Odyssey Logo"
          className="h-10 w-auto max-w-[160px] object-contain transition-transform active:scale-105"
        />
        <div className="flex items-center justify-center gap-4 w-full px-2">
          <img
            src={ieeeLogo}
            alt="SLIIT IEEE Student Branch Logo"
            className="h-5 max-h-6 w-auto max-w-[44%] object-contain"
          />
          <div className="w-[1.5px] h-6 bg-ink/20 rounded-full shrink-0" />
          <img
            src={iasLogo}
            alt="SLIIT IEEE IAS Chapter Logo"
            className="h-6 max-h-7 w-auto max-w-[50%] object-contain"
          />
        </div>
      </div>

      {/* Tablet & Desktop view (>= sm): single sleek horizontal row with dividers */}
      <div className="hidden sm:flex items-center justify-center gap-5 md:gap-7 max-w-4xl mx-auto px-4">
        <img
          src={odysseyLogo}
          alt="Odyssey Logo"
          className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform hover:scale-105 shrink-0"
        />
        <div className="w-[1.5px] h-6 sm:h-7 bg-ink/20 rounded-full shrink-0" />
        <img
          src={ieeeLogo}
          alt="SLIIT IEEE Student Branch Logo"
          className="h-5 sm:h-6 w-auto object-contain transition-transform hover:scale-105 shrink-0"
        />
        <div className="w-[1.5px] h-6 sm:h-7 bg-ink/20 rounded-full shrink-0" />
        <img
          src={iasLogo}
          alt="SLIIT IEEE IAS Chapter Logo"
          className="h-7 sm:h-8 w-auto object-contain transition-transform hover:scale-105 shrink-0"
        />
      </div>
    </footer>
  );
}
