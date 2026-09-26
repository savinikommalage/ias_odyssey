import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Sparkles, Award, BookOpen, HelpCircle, Lock } from 'lucide-react';
import { Tape } from './UI.jsx';
import GuessTheGuest from './GuessTheGuest.jsx';
import jayImg from "../assets/pic/Jay's Photo With Crossed Arms - Jayantha Fernando.jpeg";

export default function KeynoteRevealCard({ className = '' }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef(null);

  // Detect when the card is scrolled into view (requires 30% visibility, triggers once)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  // Trigger reveal flip only when user scrolls down to this section
  useEffect(() => {
    if (isInView) {
      // 550ms pause: user clearly sees the mystery silhouette first, then witnesses the flip
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, 550);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={cardRef} className={`relative flex flex-col items-center ${className}`}>
      {/* Sparkle Doodles on Reveal */}
      <AnimatePresence>
        {isRevealed && (
          <>
            <motion.div
              key="sparkle-1"
              initial={{ opacity: 0, scale: 0, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -top-7 -left-3 z-30 pointer-events-none text-marker"
            >
              <Sparkles size={30} className="fill-marker/20 animate-pulse" />
            </motion.div>

            <motion.div
              key="sparkle-2"
              initial={{ opacity: 0, scale: 0, rotate: -25 }}
              animate={{ opacity: 1, scale: 1, rotate: 15 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.65, duration: 0.4 }}
              className="absolute -top-6 -right-4 z-30 pointer-events-none text-red-600"
            >
              <Sparkles size={24} className="fill-red-500/20" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 3D Flip Card Container */}
      <div className="w-full [perspective:1200px] select-none">
        <motion.div
          animate={{ rotateY: isRevealed ? 180 : 0 }}
          transition={{
            duration: 0.85,
            ease: [0.34, 1.35, 0.64, 1], // lively snappy flip
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="relative w-full"
        >
          {/* =========================================
              FRONT FACE: BLANK / MYSTERY GUESS THE GUEST
              ========================================= */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="w-full bg-white p-3.5 pb-5 ink-border shadow-[6px_6px_0_#222] -rotate-1 hover:rotate-0 hover:-translate-y-1 hover:shadow-[9px_9px_0_#222] transition-all duration-300 flex flex-col justify-between"
          >
            <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />

            {/* Mystery Silhouette Canvas: Square Aspect Ratio */}
            <div className="relative aspect-square w-full overflow-hidden ink-border bg-[#faecd0] rounded-sm flex items-center justify-center">
              <GuessTheGuest variant={0} className="w-full h-full" />

              {/* Classified Watermark */}
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-ink/80 text-paper text-[10px] font-heading font-black tracking-widest px-2 py-0.5 rounded uppercase">
                <Lock size={11} /> Classified
              </div>

              {/* Pulsing Hint Badge */}
              <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-marker text-paper text-[11px] font-heading font-black px-2 py-0.5 rounded shadow-[1px_1px_0_#222] animate-bounce">
                Revealing...
              </div>
            </div>

            {/* Mystery Front Caption & Intel */}
            <div className="mt-3.5 text-center px-1">
              <h3 className="font-heading font-black text-2xl sm:text-[1.65rem] text-ink tracking-tight leading-tight">
                To Be Announced
              </h3>
              <p className="font-heading font-bold text-xs sm:text-sm text-marker uppercase tracking-wider mt-1">
                Keynote Speaker
              </p>
              <p className="font-heading font-medium text-xs sm:text-sm text-ink/75 leading-tight">
                Odyssey 2026 Special Guest
              </p>

              {/* Locked dossier card */}
              <div className="mt-3 text-left relative bg-paper/70 ink-border p-2.5 rounded shadow-[2px_2px_0_#222]">
                <div className="flex items-center gap-1.5 text-ink/70 font-marker text-xs uppercase tracking-wide">
                  <HelpCircle size={13} className="text-marker" />
                  <span>Dossier Sealed:</span>
                </div>
                <p className="font-hand font-bold text-base sm:text-lg text-ink/80 leading-snug mt-0.5 italic">
                  “Unlocking keynote speaker clearance…”
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              BACK FACE: REVEALED JAYANTHA FERNANDO
              ========================================= */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
            className="absolute inset-0 w-full h-full bg-white p-3.5 pb-5 ink-border shadow-[6px_6px_0_#222] -rotate-1 hover:rotate-0 hover:-translate-y-1 hover:shadow-[9px_9px_0_#222] transition-all duration-300 flex flex-col justify-between"
          >
            <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />

            {/* Photo Container: Square Aspect Ratio & Centered for Full Crossed Arms & Face */}
            <div className="relative aspect-square w-full overflow-hidden ink-border bg-black rounded-sm group">
              <motion.img
                key="revealed-jay-img"
                initial={{ scale: 1.05, filter: 'contrast(1.05) brightness(0.95)' }}
                animate={{ scale: 1, filter: 'contrast(1.02) brightness(1)' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                src={jayImg}
                alt="Jayantha Fernando - Keynote Speaker with Crossed Arms"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle top/bottom gradient overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20" />

              {/* Slamming "REVEALED!" Rubber Ink Stamp */}
              <AnimatePresence>
                {isRevealed && (
                  <motion.div
                    key="stamp-revealed"
                    initial={{ opacity: 0, scale: 2.8, rotate: -32 }}
                    animate={{ opacity: 1, scale: 1, rotate: -12 }}
                    transition={{
                      delay: 0.35,
                      duration: 0.35,
                      type: 'spring',
                      stiffness: 420,
                      damping: 17,
                    }}
                    className="absolute top-2 right-2 z-20 pointer-events-none select-none"
                  >
                    <div className="border-[3px] border-red-600 bg-red-600 text-paper font-heading font-black text-xs sm:text-sm tracking-widest px-2.5 py-0.5 rounded shadow-[3px_3px_0_rgba(0,0,0,0.5)] uppercase">
                      REVEALED!
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Corner badge indicating Official Keynote */}
              <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1.5 bg-marker text-paper px-2.5 py-1 rounded text-[11px] font-heading font-black uppercase tracking-wider ink-border shadow-[2px_2px_0_#222]">
                <Award size={13} className="text-paper" /> Keynote Speaker
              </div>
            </div>

            {/* Revealed Speaker Info */}
            <div className="mt-3.5 text-center px-1">
              <h3 className="font-heading font-black text-2xl sm:text-[1.65rem] text-ink tracking-tight leading-tight">
                Jayantha Fernando
              </h3>

              <p className="font-heading font-bold text-xs sm:text-sm text-marker uppercase tracking-wider mt-1">
                Managing Director
              </p>
              <p className="font-heading font-medium text-xs sm:text-sm text-ink/75 leading-tight">
                Coaching Consortium International (Pvt) Ltd
              </p>

              {/* Hand-Noted Scrapbook Session Card */}
              <div className="mt-3 text-left relative bg-paper/70 ink-border p-2.5 rounded shadow-[2px_2px_0_#222] rotate-[0.5deg]">
                <div className="flex items-center gap-1.5 text-marker font-marker text-xs uppercase tracking-wide">
                  <BookOpen size={13} />
                  <span>Keynote Session Topic:</span>
                </div>
                <p className="font-hand font-bold text-base sm:text-lg text-ink leading-snug mt-0.5">
                  “How to balance work life and student life while having fun”
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
