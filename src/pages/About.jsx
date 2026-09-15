import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { SectionTab, Polaroid, DashedDivider } from '../components/UI.jsx';
import GuessTheGuest from '../components/GuessTheGuest.jsx';

const schedule = [
  { time: '10:00 - 10:35 AM', title: 'Welcome & Icebreaker', desc: 'Welcome address and opening icebreaker activity.' },
  { time: '10:35 - 11:05 AM', title: 'Guest Speaker Session', desc: 'Inspiring keynote address from our guest speaker.' },
  { time: '11:05 - 11:45 AM', title: 'Morning Mini Games', desc: 'Fun team-building activities & squad challenges.' },
  { time: '11:45 - 12:00 PM', title: 'IEEE IAS Membership Dev Session', desc: 'Insights on IEEE IAS membership benefits & career growth.' },
  { time: '12:00 - 12:30 PM', title: 'Comedian Session', desc: 'Live entertainment & comedy session.' },
  { time: '12:30 - 01:10 PM', title: 'Squad Challenge Games', desc: 'Interactive team games and challenges.' },
  { time: '01:10 - 02:00 PM', title: 'Lunch Break', desc: 'Ration break, lunch, and networking.' },
  { time: '02:00 - 02:15 PM', title: 'IEEE IAS Anniversary Celebration', desc: 'Special celebration for IEEE IAS anniversary.' },
  { time: '02:15 - 03:15 PM', title: 'Afternoon Game Sessions', desc: 'Interactive team games and squad competitions.' },
  { time: '03:15 - 03:30 PM', title: 'IEEE IAS SL Chair\'s Address', desc: 'Keynote address from IEEE IAS Sri Lanka Chapter Chair.' },
  { time: '03:30 - 04:30 PM', title: 'Final Challenge Games', desc: 'High-energy team games and final game rounds.' },
  { time: '04:30 - 05:00 PM', title: 'Prize Ceremony & Closing', desc: 'Awards presentation, vote of thanks & official closing.' },
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
          <Clock className="text-marker" size={22} /> Oct 12, 2026 · 10:00 AM onward
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
          <Polaroid
            key={i}
            caption={
              <span>
                <span className="block">{s.name}</span>
                {s.role && (
                  <span className="block font-marker text-xs sm:text-sm text-marker font-normal tracking-wide mt-0.5">
                    {s.role}
                  </span>
                )}
              </span>
            }
            rotate={i % 2 ? 'rotate-2' : '-rotate-2'}
          >
            <GuessTheGuest variant={i} />
          </Polaroid>
        ))}
      </div>
    </div>
  );
}
