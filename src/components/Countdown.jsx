import React, { useEffect, useState } from 'react';

// Set the real Odyssey event date/time here (Sri Lanka Time: UTC+05:30).
export const EVENT_DATE = new Date('2026-10-12T10:00:00+05:30');

function getTimeLeft(target) {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const Unit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="ink-border bg-paper rounded-lg px-3 py-2 sm:px-4 sm:py-3 shadow-[3px_3px_0_#222222] rotate-[-1deg]">
      <span className="font-heading font-black text-2xl sm:text-4xl text-marker tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="font-hand text-sm sm:text-base mt-1 text-ink/80">{label}</span>
  </div>
);

export default function Countdown({ target = EVENT_DATE }) {
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="flex gap-3 sm:gap-5 items-center">
      <Unit value={time.days} label="days" />
      <span className="font-marker text-2xl text-ink/50 -mt-4">:</span>
      <Unit value={time.hours} label="hrs" />
      <span className="font-marker text-2xl text-ink/50 -mt-4">:</span>
      <Unit value={time.minutes} label="min" />
      <span className="font-marker text-2xl text-ink/50 -mt-4">:</span>
      <Unit value={time.seconds} label="sec" />
    </div>
  );
}
