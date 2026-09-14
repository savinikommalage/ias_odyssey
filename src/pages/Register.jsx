import React from 'react';
import { Send, Users, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionTab, StickerButton, DashedDivider, Tape } from '../components/UI.jsx';

const REGISTRATION_URL = 'https://odyssey-web-main.vercel.app/login.html';

export default function Register() {
  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16 max-w-4xl w-full mx-auto">
      <SectionTab>the conversion zone</SectionTab>
      <h1 className="font-heading font-black text-5xl sm:text-6xl mt-4 text-ink tracking-tight">
        Register for Odyssey
      </h1>
      <p className="font-hand text-2xl sm:text-3xl mt-3 text-ink/90 max-w-2xl">
        Stake your claim on the map. Bring your squad along for extra points
        on the leaderboard and unlock exclusive alliance perks.
      </p>

      <div className="mt-8 relative bg-white/75 ink-border rounded-xl p-6 sm:p-10 shadow-[6px_6px_0_#222222]">
        <Tape className="-top-3 right-10" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 font-marker text-sm text-marker bg-paper px-2.5 py-0.5 border border-ink/40 rotate-[-1deg] shadow-[1px_1px_0_#222]">
              <Sparkles size={16} /> OFFICIAL PORTAL
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink mt-3">
              Ready to Join the Expedition?
            </h2>
            <p className="font-hand text-xl sm:text-2xl text-ink/80 mt-2">
              Sign up through our official portal to access your digital badge, draft alliances, and track your referral points in real-time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <StickerButton
                as="a"
                href={REGISTRATION_URL}
                className="text-xl sm:text-2xl px-8 py-4"
              >
                Register Now <Send size={22} />
              </StickerButton>
            </div>
          </div>

          <div className="space-y-4 bg-paper/60 border-2 border-dashed border-ink/30 rounded-lg p-5">
            <h3 className="font-heading font-bold text-xl text-ink">
              What's Included:
            </h3>
            <ul className="space-y-2.5 font-hand text-lg sm:text-xl text-ink/90">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={20} className="text-marker shrink-0 mt-0.5" />
                <span>Full access to keynote &amp; workshop tracks</span>
              </li>
              <li className="flex items-start gap-2">
                <Users size={20} className="text-marker shrink-0 mt-0.5" />
                <span>Squad referral draft &amp; alliance points</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck size={20} className="text-marker shrink-0 mt-0.5" />
                <span>Fast-track check-in for IEEE IAS members</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <DashedDivider />

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white/60 ink-border rounded-lg p-5 rotate-[-1deg] shadow-[4px_4px_0_#222222]">
          <h3 className="font-heading font-bold text-xl text-ink flex items-center gap-2">
            <Users size={20} className="text-marker" /> Bring a Squad
          </h3>
          <p className="font-hand text-lg sm:text-xl text-ink/80 mt-2">
            Form alliances with classmates and earn leaderboard bonus multipliers when registering with your squad code.
          </p>
        </div>

        <div className="bg-white/60 ink-border rounded-lg p-5 rotate-[1deg] shadow-[4px_4px_0_#222222]">
          <h3 className="font-heading font-bold text-xl text-ink flex items-center gap-2">
            <Sparkles size={20} className="text-marker" /> Early Bird Flex
          </h3>
          <p className="font-hand text-lg sm:text-xl text-ink/80 mt-2">
            Early registrants receive exclusive Odyssey stickers, physical survival guide kits, and guaranteed ration packs.
          </p>
        </div>
      </div>
    </div>
  );
}
