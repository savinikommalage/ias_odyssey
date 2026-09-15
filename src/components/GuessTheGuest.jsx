import React from 'react';

/**
 * Clean "Guess The Guest" mystery speaker silhouette.
 * Styled to match the reference image and fit the Odyssey notebook polaroid aesthetic.
 */
export default function GuessTheGuest({ variant = 0, className = '' }) {
  // 3 distinct, realistic mystery silhouettes
  const silhouettes = [
    // Variant 0: Direct inspiration from reference (rounded head, glasses silhouette, ears)
    {
      path: (
        <>
          {/* Main silhouette: Head, ears, neck, and broad shoulders */}
          <path
            d="M 160,32 
               C 134,32 118,50 118,80 
               C 118,88 114,90 112,94 
               C 110,98 112,106 116,108 
               C 119,118 126,126 138,132 
               L 138,142 
               C 114,148 65,168 20,240 
               L 300,240 
               C 255,168 206,148 182,142 
               L 182,132 
               C 194,126 201,118 204,108 
               C 208,106 210,98 208,94 
               C 206,90 202,88 202,80 
               C 202,50 186,32 160,32 Z"
            fill="#1c1c1c"
          />
          {/* Distinct silhouette glasses frames */}
          <g fill="none" stroke="#2d2d2d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <rect x="130" y="73" width="24" height="17" rx="3" fill="#141414" stroke="#333333" strokeWidth="2.5" />
            <rect x="166" y="73" width="24" height="17" rx="3" fill="#141414" stroke="#333333" strokeWidth="2.5" />
            <line x1="154" y1="80" x2="166" y2="80" stroke="#333333" strokeWidth="3" />
            <line x1="120" y1="78" x2="130" y2="80" stroke="#333333" strokeWidth="2.5" />
            <line x1="190" y1="80" x2="200" y2="78" stroke="#333333" strokeWidth="2.5" />
          </g>
        </>
      ),
    },
    // Variant 1: Longer / shoulder-length hair silhouette (clean solid contour)
    {
      path: (
        <>
          <path
            d="M 160,30 
               C 190,30 210,50 212,82 
               C 214,110 218,136 226,165 
               C 228,176 218,180 210,172 
               C 200,160 196,146 184,138 
               C 208,146 254,168 295,240 
               L 25,240 
               C 66,168 112,146 136,138 
               C 124,146 120,160 110,172 
               C 102,180 92,176 94,165 
               C 102,136 106,110 108,82 
               C 110,50 130,30 160,30 Z"
            fill="#1c1c1c"
          />
        </>
      ),
    },
    // Variant 2: Clean head & shoulders with stylish hair fade / collar silhouette
    {
      path: (
        <>
          <path
            d="M 160,30 
               C 134,30 118,50 118,78 
               C 118,88 114,92 112,96 
               C 110,102 114,106 117,108 
               C 122,118 128,126 138,132 
               L 138,142 
               C 112,148 62,168 18,240 
               L 302,240 
               C 258,168 208,148 182,142 
               L 182,132 
               C 192,126 198,118 203,108 
               C 206,106 210,102 208,96 
               C 206,92 202,88 202,78 
               C 202,50 186,30 160,30 Z"
            fill="#1c1c1c"
          />
          {/* Subtle blazer / lapel collar outline */}
          <path
            d="M 148,142 L 160,165 L 172,142"
            fill="none"
            stroke="#2d2d2d"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      ),
    },
  ];

  const current = silhouettes[variant % silhouettes.length];

  return (
    <div className={`relative w-full h-full select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 320 240"
        className="w-full h-full block"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Soft warm spotlight background matching Odyssey paper tones */}
          <radialGradient id={`glow-${variant}`} cx="50%" cy="38%" r="62%">
            <stop offset="0%" stopColor="#fff8b9" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#faecd0" />
            <stop offset="100%" stopColor="#dbe8ee" />
          </radialGradient>

          {/* Torso text drop-shadow filter */}
          <filter id={`shadow-${variant}`} x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="0.8" floodColor="#000000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* Polaroid inner photo backdrop */}
        <rect width="320" height="240" fill={`url(#glow-${variant})`} />

        {/* Subtle notebook graph lines / dots texture in background */}
        <g stroke="#8CBED6" strokeWidth="0.8" opacity="0.25" strokeDasharray="3 6">
          <line x1="0" y1="40" x2="320" y2="40" />
          <line x1="0" y1="80" x2="320" y2="80" />
          <line x1="0" y1="120" x2="320" y2="120" />
        </g>

        {/* Silhouette Figure */}
        {current.path}

        {/* Playful question mark marker stamp */}
        <g transform="translate(212, 48) rotate(14)">
          <text
            x="0"
            y="0"
            fontFamily="'Permanent Marker', cursive"
            fontSize="28"
            fill="#558203"
            fontWeight="bold"
            className="select-none"
          >
            ?
          </text>
        </g>

        {/* "GUESS THE GUEST" Stamped Bold Typography */}
        <g
          textAnchor="middle"
          filter={`url(#shadow-${variant})`}
          className="pointer-events-none select-none font-heading font-black"
        >
          <text
            x="160"
            y="170"
            fontFamily="'Montserrat', 'Poppins', sans-serif"
            fontWeight="900"
            fontSize="21"
            fill="#fff8b9"
            letterSpacing="0.1em"
          >
            GUESS
          </text>
          <text
            x="160"
            y="192"
            fontFamily="'Montserrat', 'Poppins', sans-serif"
            fontWeight="900"
            fontSize="17"
            fill="#fff8b9"
            letterSpacing="0.16em"
          >
            THE
          </text>
          <text
            x="160"
            y="218"
            fontFamily="'Montserrat', 'Poppins', sans-serif"
            fontWeight="900"
            fontSize="24"
            fill="#fff8b9"
            letterSpacing="0.1em"
          >
            GUEST
          </text>
        </g>
      </svg>
    </div>
  );
}
