import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

// Desktop: a 3D page-turn anchored at the left "spine".
const desktopVariants = {
  initial: { rotateY: -90, opacity: 0.4, transformOrigin: 'left center' },
  animate: {
    rotateY: 0,
    opacity: 1,
    transformOrigin: 'left center',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    rotateY: 80,
    opacity: 0,
    transformOrigin: 'left center',
    transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
  },
};

// Mobile: a snappy 2D horizontal paper slide.
const mobileVariants = {
  initial: { x: '100vw', opacity: 0.6 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { x: '-40vw', opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};

export default function PageFlip({ children }) {
  const location = useLocation();
  const isMobile = useIsMobile();
  const variants = isMobile ? mobileVariants : desktopVariants;

  return (
    <div style={{ perspective: 1800 }} className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ transformStyle: 'preserve-3d' }}
          className="min-h-[70vh]"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
