import React, { useState } from 'react';
import {
  Trophy,
  Users,
  Award,
  Sparkles,
  Gamepad2,
  BookOpen,
  Flag,
  Timer,
  Target,
  Search,
} from 'lucide-react';
import { SectionTab, DashedDivider, Tape, Polaroid } from '../components/UI.jsx';

const gamesList = [
  {
    id: 1,
    title: 'Animal SOS',
    teamFormat: '3 representatives per team',
    icon: '🦁',
    description:
      'Players are blindfolded and each team is assigned an animal sound. They are scattered around the playing area and must continuously make their assigned sound to locate their teammates without removing their blindfolds.',
    winCondition: 'First team to reunite all three teammates.',
    category: 'Communication & Chaos',
  },
  {
    id: 2,
    title: 'Sticky Note Shake-Off',
    teamFormat: '1 representative per team',
    icon: '📝',
    description:
      'Sticky notes are attached all over the player’s clothing. Without any help, they must shake, jump, dance and wiggle until every sticky note falls off.',
    winCondition: 'First player to remove all sticky notes.',
    category: 'Speed & Agility',
  },
  {
    id: 3,
    title: 'Chair Traffic Jam',
    teamFormat: '4–6 players per team',
    icon: '🪑',
    description:
      'Team members sit in a row of chairs with one empty chair at one end. The empty chair is passed along the line as everyone moves over one seat until it reaches the opposite end.',
    winCondition: 'First team to move the empty chair to the other end.',
    category: 'Team Strategy',
  },
  {
    id: 4,
    title: 'Mission: Find My Shoe',
    teamFormat: 'Relay (entire team)',
    icon: '👟',
    description:
      'All players remove their shoes, which are mixed together at the finish line. One player at a time runs to find their own shoes, puts them on correctly, returns and tags the next teammate.',
    winCondition: 'First team to complete the relay.',
    category: 'Relay Battle',
  },
  {
    id: 5,
    title: 'Stay in the Box',
    teamFormat: '1 representative per team',
    icon: '📦',
    description:
      'Blindfolded players stand inside a taped square while the facilitator gives commands such as jump, spin, jog or clap. Players must stay inside the box while completing the actions.',
    winCondition: 'Player(s) still inside the box when time is up.',
    category: 'Balance & Focus',
  },
  {
    id: 6,
    title: 'Maximum Bottle Reach',
    teamFormat: '1 representative per team',
    icon: '🍾',
    description:
      'Standing completely behind a marked line, players stretch as far as possible to place a bottle without crossing the line. The bottle should be placed as far away as they can reach. Teammates will hold onto the player making sure the player doesn\'t fall.',
    winCondition: 'Bottle placed the greatest distance from the line without crossing it.',
    category: 'Trust & Physics',
  },
  {
    id: 7,
    title: 'Bag Catch Duo',
    teamFormat: '2 representatives per team',
    icon: '🛍️',
    description:
      'One teammate tosses a lightweight plastic bag into the air while the other teammate attempts to catch it before it touches the ground.',
    winCondition: 'Most successful catches or fastest successful catch.',
    category: 'Coordination',
  },
  {
    id: 8,
    title: 'The Art of Balancing Cups',
    teamFormat: '1 model + teammates',
    icon: '🥤',
    description:
      'One teammate holds a pose while the rest of the team carefully balances plastic cups on different parts of their body without letting them fall.',
    winCondition: 'Team that balances the most cups within the time limit.',
    category: 'Steady Hands',
  },
  {
    id: 9,
    title: 'Strike a Pose',
    teamFormat: 'Whole team or volunteers',
    icon: '📸',
    description:
      'Players are shown funny or unusual poses and have one minute to recreate as many as possible. This is intended as a fun activity rather than a competitive game.',
    winCondition: 'Optional: No winner or “Most Accurate Team.”',
    category: 'Fun & Comedy',
  },
  {
    id: 10,
    title: 'Balloon vs T-Shirt',
    teamFormat: '1 representative per team',
    icon: '🎈',
    description:
      'Players toss a balloon into the air and must put on a T-shirt while continuously keeping the balloon from touching the ground.',
    winCondition: 'First player to fully wear the T-shirt without dropping the balloon.',
    category: 'Multitasking',
  },
];

const leaderboard = [
  { rank: 1, name: 'Team Voltage', points: 1420 },
  { rank: 2, name: 'Circuit Breakers', points: 1305 },
  { rank: 3, name: 'The Alliance', points: 1180 },
  { rank: 4, name: 'Squad Odyssey', points: 990 },
  { rank: 5, name: 'IAS Insurgents', points: 875 },
];

const medalColor = ['text-yellow-500', 'text-gray-400', 'text-amber-700'];

export default function Games() {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGames = gamesList.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.teamFormat.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16 max-w-6xl w-full mx-auto">
      <SectionTab>the challenge manual</SectionTab>
      <h1 className="font-heading font-black text-5xl sm:text-6xl mt-4 text-ink tracking-tight">
        Games &amp; Challenges
      </h1>
      <p className="font-hand text-2xl sm:text-3xl mt-3 text-ink/90 max-w-3xl">
        10 high-energy squad battles designed to test alliances, coordination, and survival instincts. Check the rulebook and prepare your squad!
      </p>

      {/* Search Bar */}
      <div className="mt-8 flex items-center gap-3 bg-white/75 ink-border rounded-lg px-4 py-2.5 max-w-md shadow-[3px_3px_0_#222222]">
        <Search size={20} className="text-marker" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search games or team formats…"
          className="bg-transparent font-hand text-lg w-full text-ink focus:outline-none"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-xs font-heading font-bold text-ink/60 hover:text-marker"
          >
            CLEAR
          </button>
        )}
      </div>

      {/* 10 Games Grid */}
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {filteredGames.map((game, i) => (
          <div
            key={game.id}
            className={`relative bg-white/80 ink-border rounded-xl p-6 sm:p-7 shadow-[5px_5px_0_#222222] transition-transform hover:-translate-y-1 ${
              i % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'
            }`}
          >
            {/* Number Tag */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-marker ink-border flex items-center justify-center font-heading font-black text-paper text-lg rotate-[-4deg] shadow-[2px_2px_0_#222]">
              {game.id}
            </div>

            {/* Header */}
            <div className="flex items-start justify-between gap-4 pl-4">
              <div>
                <span className="font-marker text-xs text-marker uppercase tracking-wide">
                  {game.category}
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink mt-0.5 flex items-center gap-2">
                  <span>{game.title}</span>
                  <span className="text-2xl">{game.icon}</span>
                </h2>
              </div>
              <span className="inline-flex items-center gap-1 font-marker text-xs bg-paper px-2.5 py-1 border border-ink/40 rounded shadow-[1px_1px_0_#222] whitespace-nowrap text-ink">
                <Users size={14} className="text-marker" />
                {game.teamFormat}
              </span>
            </div>

            {/* Description */}
            <div className="mt-4 pl-4 border-l-2 border-dashed border-marker/50 space-y-3">
              <div>
                <p className="font-marker text-xs text-ink/60 uppercase">
                  How to Play
                </p>
                <p className="font-hand text-lg sm:text-xl text-ink/90 mt-0.5 leading-snug">
                  {game.description}
                </p>
              </div>

              {/* Win Condition */}
              <div className="bg-paper/70 border border-ink/30 rounded-md p-2.5">
                <p className="font-marker text-xs text-marker flex items-center gap-1">
                  <Target size={14} /> Winning Condition
                </p>
                <p className="font-hand font-bold text-base sm:text-lg text-ink mt-0.5">
                  {game.winCondition}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DashedDivider />

      {/* Leaderboard & Passport Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Leaderboard */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="text-marker" size={26} />
            <h2 className="font-heading font-extrabold text-3xl text-ink">
              UN Alliance Leaderboard
            </h2>
          </div>
          <div className="bg-white/70 ink-border rounded-lg shadow-[5px_5px_0_#222222] divide-y-2 divide-dashed divide-ink/20">
            {leaderboard.map((t) => (
              <div
                key={t.rank}
                className="flex items-center justify-between px-5 py-3"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-heading font-black text-2xl w-8 ${
                      medalColor[t.rank - 1] || 'text-ink/60'
                    }`}
                  >
                    #{t.rank}
                  </span>
                  <span className="font-hand text-xl text-ink">{t.name}</span>
                </div>
                <span className="font-marker text-marker text-lg">
                  {t.points} pts
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Odyssey Passport */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="text-marker" size={24} />
            <h2 className="font-heading font-extrabold text-3xl text-ink">
              Odyssey Passport
            </h2>
          </div>
          <div className="bg-ink text-paper rounded-lg p-6 shadow-[5px_5px_0_#558203] -rotate-1">
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading font-black text-xl tracking-widest">
                PASSPORT
              </span>
              <Flag size={22} className="text-marker" />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full border-2 border-dashed border-paper/40 flex flex-col items-center justify-center text-paper/70 font-marker text-xs"
                >
                  <span className="text-[10px]">G{i + 1}</span>
                  <span>{i < 3 ? '✓' : '★'}</span>
                </div>
              ))}
            </div>
            <p className="font-hand text-paper/80 mt-4 text-sm sm:text-base">
              Participate in games and collect all 10 challenge stamps to unlock the exclusive Odyssey Champion Badge!
            </p>
          </div>
        </section>
      </div>

      {/* Squad Action Snapshot */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/60 ink-border rounded-xl p-6 shadow-[4px_4px_0_#222]">
        <div>
          <span className="font-marker text-xs text-marker uppercase">Field Dispatch</span>
          <h3 className="font-heading font-extrabold text-2xl text-ink">Squad Alliances in Action</h3>
          <p className="font-hand text-lg text-ink/80 max-w-md mt-1">
            Every game requires sharp communication, agility, and team coordination. Check the challenge manual and lead your alliance to victory!
          </p>
        </div>
        <Polaroid
          img="/assets/ieee/leadspring_bw.jpg"
          caption="Squad War Room · Alliances Assemble"
          rotate="rotate-2"
          aspect="aspect-[4/3]"
          className="max-w-xs w-full shrink-0"
        />
      </div>
    </div>
  );
}
