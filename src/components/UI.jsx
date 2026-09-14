import React from 'react';

export function StickerButton({ children, className = '', as: As = 'button', ...props }) {
  return (
    <As
      className={`inline-flex items-center gap-2 font-heading font-extrabold text-lg text-paper bg-marker px-6 py-3 rounded-md ink-border shadow-[4px_4px_0_#222222] rotate-[-2deg] hover:rotate-0 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#222222] transition-all duration-150 ${className}`}
      {...props}
    >
      {children}
    </As>
  );
}

export function Tape({ className = '' }) {
  return <div className={`tape absolute w-16 h-6 -rotate-6 ${className}`} />;
}

export function Polaroid({
  img,
  caption,
  rotate = '-rotate-2',
  className = '',
  aspect = 'aspect-[4/3]',
  tapePos = '-top-3 left-1/2 -translate-x-1/2',
  children,
}) {
  return (
    <div
      className={`relative bg-white p-3 pb-5 ink-border shadow-[5px_5px_0_rgba(34,34,34,0.3)] transition-transform hover:-translate-y-1 hover:shadow-[7px_7px_0_#222] ${rotate} ${className}`}
    >
      <Tape className={tapePos} />
      <div className={`bg-notebookLine/20 ${aspect} flex items-center justify-center overflow-hidden border border-ink/40 rounded-sm`}>
        {img ? (
          <img
            src={img}
            alt={caption || 'Odyssey moment'}
            className="w-full h-full object-cover grayscale contrast-125 brightness-95 hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          children
        )}
      </div>
      {caption && (
        <p className="font-hand text-center mt-2.5 text-ink text-lg sm:text-xl leading-snug font-bold">
          {caption}
        </p>
      )}
    </div>
  );
}

export function SectionTab({ children, className = '' }) {
  return (
    <span
      className={`inline-block font-marker text-marker text-sm sm:text-base bg-paper px-3 py-1 ink-border rotate-[-2deg] shadow-[2px_2px_0_#222222] ${className}`}
    >
      {children}
    </span>
  );
}

export function DashedDivider() {
  return (
    <div className="w-full border-t-2 border-dashed border-ink/40 my-8" />
  );
}
