import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hand-drawn comic speech bubble in Jeff Kinney's classic Wimpy Kid style
 */
function SpeechBubble({ text, className = '', tail = 'bottom-left' }) {
  return (
    <div
      className={`pointer-events-none select-none relative bg-white ink-border px-3 py-1 rounded-xl shadow-[3px_3px_0px_#181818] inline-block ${className}`}
    >
      <p className="font-hand font-bold text-sm sm:text-base text-ink leading-tight tracking-wide whitespace-nowrap">
        {text}
      </p>
      {tail === 'bottom-left' && (
        <svg
          viewBox="0 0 18 14"
          className="absolute -bottom-[12px] left-4 w-4 h-3.5"
          fill="none"
        >
          <path
            d="M2 0 L6 13 L14 0"
            fill="#FFFFFF"
            stroke="#181818"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {tail === 'bottom-right' && (
        <svg
          viewBox="0 0 18 14"
          className="absolute -bottom-[12px] right-4 w-4 h-3.5"
          fill="none"
        >
          <path
            d="M4 0 L12 13 L16 0"
            fill="#FFFFFF"
            stroke="#181818"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {tail === 'top-left' && (
        <svg
          viewBox="0 0 18 14"
          className="absolute -top-[12px] left-4 w-4 h-3.5 rotate-180"
          fill="none"
        >
          <path
            d="M2 0 L6 13 L14 0"
            fill="#FFFFFF"
            stroke="#181818"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {tail === 'top-right' && (
        <svg
          viewBox="0 0 18 14"
          className="absolute -top-[12px] right-4 w-4 h-3.5 rotate-180"
          fill="none"
        >
          <path
            d="M4 0 L12 13 L16 0"
            fill="#FFFFFF"
            stroke="#181818"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

/**
 * Character Component displaying images that scroll naturally with the page content
 */
function CharacterDoodle({
  src,
  alt,
  bubbleText,
  bubbleTail = 'bottom-left',
  bubbleClassName = '',
  containerClassName = '',
  imgClassName = '',
}) {
  return (
    <div
      className={`absolute pointer-events-none select-none z-0 transition-all duration-300 ${containerClassName}`}
    >
      {bubbleText && (
        <div className="flex justify-center mb-1">
          <SpeechBubble
            text={bubbleText}
            tail={bubbleTail}
            className={bubbleClassName}
          />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-auto object-contain filter drop-shadow-[2px_3px_0px_rgba(24,24,24,0.2)] ${imgClassName}`}
      />
    </div>
  );
}

/**
 * Unique spatial layouts for each of the 5 main pages.
 * All characters are positioned absolutely so they scroll naturally with the document.
 * 1. Home ("/")
 * 2. About ("/about")
 * 3. Join IAS ("/membership")
 * 4. Register ("/register")
 * 5. Games ("/games")
 */
export default function NotebookBackground() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  return (
    <>
      {/* Fixed background lined paper texture */}
      <div className="fixed inset-0 -z-20 overflow-hidden bg-paper pointer-events-none">
        <div className="absolute inset-0 bg-notebook opacity-90" />
      </div>

      {/* Scrolling character doodles overlay that spans the full page height */}
      <div className="absolute inset-0 w-full min-h-full -z-10 overflow-hidden pointer-events-none select-none">
        {/* ----------------- 1. HOME PAGE ----------------- */}
        {/* Home page characters removed as requested */}

        {/* ----------------- 2. ABOUT PAGE ----------------- */}
        {path === '/about' && (
          <>

            {/* Mid-Right Margin alongside the Itinerary schedule */}
            <CharacterDoodle
              src="/assets/new_characters/six_2.png"
              alt="Character 6"
              bubbleText="SURVIVAL GUIDE!"
              bubbleTail="bottom-left"
              bubbleClassName="rotate-[-2deg]"
              containerClassName="hidden xl:block top-[48%] right-4 xl:right-12"
              imgClassName="h-36 xl:h-48 rotate-[2deg]"
            />

            {/* Bottom-Right Corner near Speakers */}
            <CharacterDoodle
              src="/assets/new_characters/fifth.png"
              alt="Character 5"
              bubbleText="I'M OWNY THWEE!"
              bubbleTail="bottom-left"
              bubbleClassName="rotate-[4deg]"
              containerClassName="hidden md:block bottom-12 right-8 xl:right-24"
              imgClassName="h-32 xl:h-44 rotate-[-3deg]"
            />
          </>
        )}

        {/* ----------------- 3. JOIN IAS / MEMBERSHIP PAGE ----------------- */}
        {path === '/membership' && (
          <>
            {/* Mid-Left Margin alongside Steps */}
            <CharacterDoodle
              src="/assets/new_characters/eigth.png"
              alt="Character 8"
              bubbleText="STEP 1: GET MEMBERSHIP!"
              bubbleTail="bottom-right"
              bubbleClassName="-rotate-[3deg]"
              containerClassName="hidden md:block top-[40%] left-4 xl:left-12"
              imgClassName="h-44 xl:h-56 rotate-[2deg]"
            />

            {/* Top-Right Margin */}
            <CharacterDoodle
              src="/assets/new_characters/seven.png"
              alt="Character 7"
              bubbleText="PLOP!"
              bubbleTail="bottom-left"
              bubbleClassName="rotate-[3deg]"
              containerClassName="hidden xl:block top-36 right-4 2xl:right-12"
              imgClassName="h-40 xl:h-52 rotate-[-3deg]"
            />

            {/* Bottom-Right Corner */}
            <CharacterDoodle
              src="/assets/new_characters/nine.png"
              alt="Character 9"
              bubbleText="JOIN THE SQUAD!"
              bubbleTail="bottom-left"
              bubbleClassName="rotate-[2deg]"
              containerClassName="hidden lg:block bottom-12 right-4 xl:right-12"
              imgClassName="h-44 xl:h-56 rotate-[3deg]"
            />
          </>
        )}

        {/* ----------------- 4. REGISTER PAGE ----------------- */}
        {path === '/register' && (
          <>
            {/* Top-Left Margin */}
            <CharacterDoodle
              src="/assets/new_characters/third.png"
              alt="Character 3"
              bubbleText="DON'T FORGET YOUR SQUAD!"
              bubbleTail="bottom-right"
              bubbleClassName="rotate-[2deg]"
              containerClassName="hidden xl:block top-36 left-4 2xl:left-12"
              imgClassName="h-40 xl:h-52 -rotate-[3deg]"
            />

            {/* Mid-Right Margin beside form fields */}
            <CharacterDoodle
              src="/assets/new_characters/first_2.png"
              alt="Character 1"
              bubbleText="LET'S GOOO!"
              bubbleTail="bottom-left"
              bubbleClassName="rotate-[-3deg]"
              containerClassName="hidden xl:block top-44 right-4 2xl:right-12"
              imgClassName="h-48 xl:h-64 rotate-[2deg]"
            />

          </>
        )}

        {/* ----------------- 5. GAMES PAGE ----------------- */}
        {path === '/games' && (
          <>
            {/* Top-Right Margin */}
            <CharacterDoodle
              src="/assets/new_characters/first_2.png"
              alt="Character 1"
              bubbleText="ZOO-WEE MAMA!"
              bubbleTail="bottom-left"
              bubbleClassName="rotate-[3deg]"
              containerClassName="hidden xl:block top-36 right-4 2xl:right-12"
              imgClassName="h-44 xl:h-56 rotate-[-2deg]"
            />

            {/* Mid-Right Margin beside Leaderboard cards */}
            <CharacterDoodle
              src="/assets/new_characters/nine.png"
              alt="Character 9"
              bubbleText="I LOVE GAMES!"
              bubbleTail="bottom-left"
              bubbleClassName="rotate-[-2deg]"
              containerClassName="hidden xl:block top-[50%] right-4 xl:right-12"
              imgClassName="h-40 xl:h-52 rotate-[3deg]"
            />

            {/* Bottom-Left Margin */}
            <CharacterDoodle
              src="/assets/new_characters/seven.png"
              alt="Character 7"
              bubbleText="VICTORY TIME!"
              bubbleTail="bottom-right"
              bubbleClassName="-rotate-[3deg]"
              containerClassName="hidden md:block bottom-12 left-6 xl:left-16"
              imgClassName="h-44 xl:h-56 rotate-[2deg]"
            />
          </>
        )}
      </div>
    </>
  );
}
