import React from 'react';
import { MapPin, Clock, User } from 'lucide-react';
import { SectionTab, Polaroid, DashedDivider } from '../components/UI.jsx';

const schedule = [
  { time: '09:00', title: 'Basecamp Check-In', desc: 'Registration, badges, and squad grouping.' },
  { time: '10:00', title: 'Opening Briefing', desc: 'Welcome address and the rules of the UN Alliance game.' },
  { time: '11:00', title: 'Keynote: Field Notes on Industry Applications', desc: 'Guest speaker session.' },
  { time: '13:00', title: 'Ration Break', desc: 'Lunch and networking.' },
  { time: '14:00', title: 'Workshop Trail', desc: 'Parallel technical workshops — pick your route.' },
  { time: '16:30', title: 'Alliance Draft Finale', desc: 'Live leaderboard reveal and prize drop.' },
];

const speakers = [
  { name: 'To Be Announced', role: 'Keynote Speaker' },
  { name: 'To Be Announced', role: 'Workshop Lead' },
  { name: 'To Be Announced', role: 'IAS Guest' },
];

export default function About() {
  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16 max-w-5xl w-full mx-auto">
      <SectionTab>the master plan</SectionTab>
      <h1 className="font-heading font-black text-5xl sm:text-6xl mt-4 text-ink tracking-tight">
        Survival Guide
      </h1>
      <p className="font-hand text-2xl sm:text-3xl mt-3 max-w-2xl text-ink/90">
        Everything you need to make it through Odyssey — where it happens,
        when things kick off, and who's leading the expedition.
      </p>

      <div className="mt-8 flex flex-wrap gap-6">
        <div className="flex items-center gap-2 font-hand text-xl">
          <MapPin className="text-marker" size={22} /> SLIIT Campus, Malabe
        </div>
        <div className="flex items-center gap-2 font-hand text-xl">
          <Clock className="text-marker" size={22} /> Oct 13, 2026 · 09:00 onward
        </div>
      </div>

      <DashedDivider />

      <h2 className="font-heading font-extrabold text-3xl text-ink mb-6">
        The Itinerary &amp; Field Records
      </h2>
      
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
        {/* Schedule Timeline */}
        <div className="relative border-l-2 border-dashed border-marker/60 ml-3 space-y-8">
          {schedule.map((s, i) => (
            <div key={i} className="pl-8 relative">
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-marker ink-border" />
              <p className="font-marker text-marker text-sm">{s.time}</p>
              <h3 className="font-heading font-bold text-xl text-ink">{s.title}</h3>
              <p className="font-hand text-lg text-ink/80">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Polaroids alongside Itinerary */}
        <div className="space-y-8 flex flex-col items-center">
          <Polaroid
            img="/assets/ieee/pathtointern_bw.jpg"
            caption="Field Workshop · Path to Intern"
            rotate="rotate-2"
            aspect="aspect-[4/3]"
            className="w-full max-w-sm"
          />
          <Polaroid
            img="/assets/ieee/leadspring3_bw.jpg"
            caption="Squad Strategy & Alliance Briefing"
            rotate="-rotate-2"
            aspect="aspect-[4/3]"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      <DashedDivider />

      <h2 className="font-heading font-extrabold text-3xl text-ink mb-6">
        Field Guides (Speakers)
      </h2>
      <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
        {speakers.map((s, i) => (
          <Polaroid key={i} caption={s.name} rotate={i % 2 ? 'rotate-2' : '-rotate-2'}>
            <User size={48} className="text-ink/30" />
          </Polaroid>
        ))}
      </div>
    </div>
  );
}
