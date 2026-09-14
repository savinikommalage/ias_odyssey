import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, Sparkles, PenLine, Camera } from 'lucide-react';
import planeImg from '../assets/logo/Just_the_plane_4-removebg-preview (1).png';
import ocImg from '../assets/pic/WhatsApp Image 2026-09-14 at 21.15.58.jpeg';
import Countdown from '../components/Countdown.jsx';
import { StickerButton, SectionTab, Polaroid, DashedDivider } from '../components/UI.jsx';

export default function Home() {
  const [foundEgg, setFoundEgg] = useState(false);

  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16 max-w-6xl w-full mx-auto">
      <SectionTab>the cover</SectionTab>

      <div className="mt-8 grid md:grid-cols-[1.2fr_1fr] gap-10 sm:gap-14 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-black text-6xl sm:text-8xl leading-[0.9] text-ink tracking-tight"
          >
            ODYSSEY
          </motion.h1>
          <p className="font-hand text-2xl sm:text-3xl mt-4 text-ink/90 max-w-xl">
            An IEEE IAS survival story: alliances, referrals, and one very
            important paper airplane. Turn the page to begin your entry.
          </p>

          <div className="mt-8">
            <p className="font-marker text-marker text-sm mb-2 rotate-[-1deg]">
              T-minus until Odyssey kicks off
            </p>
            <Countdown />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <StickerButton as={Link} to="/register">
              Register Now <Send size={18} />
            </StickerButton>
            <Link
              to="/about"
              className="font-hand text-lg underline decoration-marker decoration-2 underline-offset-4 text-ink hover:text-marker"
            >
              Read the Survival Guide →
            </Link>
          </div>
        </div>

        {/* Hero Polaroid memory + animated plane + hidden easter egg */}
        <div className="relative flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-sm"
          >
            <Polaroid
              img={ocImg}
              caption="Odyssey OC 2026"
              rotate="rotate-[2deg]"
              aspect="aspect-[4/3]"
              className="w-full"
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-8, -3, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 -right-6 z-10 pointer-events-none"
          >
            <img src={planeImg} alt="Paper plane" className="w-24 sm:w-32 h-auto object-contain drop-shadow-[2px_2px_0_#222]" />
          </motion.div>

          {/* Easter egg: click the doodle star tucked in the corner */}
          <button
            aria-label="???"
            onClick={() => setFoundEgg(true)}
            className="absolute -bottom-3 -left-3 text-ink/30 hover:text-marker transition-colors"
          >
            <Sparkles size={28} />
          </button>
        </div>
      </div>

      {foundEgg && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-10 ink-border bg-white/80 p-5 rounded-lg max-w-md rotate-[-1deg] shadow-[4px_4px_0_#222222]"
        >
          <p className="font-hand text-xl flex items-center gap-2">
            <PenLine size={20} className="text-marker" /> Margin note found! Use
            code <span className="font-marker text-marker">FIRSTPAGE</span> for
            an early-bird referral boost on the Register page.
          </p>
        </motion.div>
      )}

      {/* Snapshots from the Archives */}
      <div className="mt-16">
        <div className="flex items-center gap-2 mb-6">
          <Camera className="text-marker" size={24} />
          <h2 className="font-heading font-extrabold text-3xl text-ink">
            From the Chapter Scrapbook
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <Polaroid
            img="/assets/ieee/wso2_bw.jpg"
            caption="Industry Visit & Tech Tour · WSO2"
            rotate="-rotate-1"
            aspect="aspect-[16/10]"
          />
          <Polaroid
            img="/assets/ieee/leadspring3_bw.jpg"
            caption="Squad Strategy & Project Briefing"
            rotate="rotate-2"
            aspect="aspect-[16/10]"
          />
        </div>
      </div>

      <DashedDivider />

      <div className="mt-10 grid sm:grid-cols-3 gap-6 sm:gap-8">
        {[
          {
            title: 'Survival Guide',
            body: 'Speakers, schedule, and the full itinerary — laid out like a field manual.',
            to: '/about',
          },
          {
            title: 'Bring a Squad',
            body: 'Register with friends and climb the referral leaderboard together.',
            to: '/games',
          },
          {
            title: 'Join IAS',
            body: 'A four-step guide to getting your IEEE Industry Applications Society membership.',
            to: '/membership',
          },
        ].map((c, i) => (
          <Link
            to={c.to}
            key={c.title}
            className={`block bg-white/70 ink-border p-5 rounded-lg shadow-[4px_4px_0_#222222] hover:-translate-y-1 transition-transform ${
              i % 2 === 0 ? 'rotate-1' : '-rotate-1'
            }`}
          >
            <h3 className="font-heading font-extrabold text-xl text-ink mb-2">
              {c.title}
            </h3>
            <p className="font-hand text-lg text-ink/80">{c.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
