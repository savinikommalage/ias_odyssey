# Odyssey-web

The Odyssey event website — a "Diary of a Wimpy Kid"-styled digital journal
for IEEE IAS event registration and gamified PR.

## Stack
React + Vite, Tailwind CSS, Framer Motion, Lucide icons, Supabase (registration storage).

## Getting started
```bash
npm install
cp .env.example .env   # fill in VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
npm run dev
```

## Structure
```
src/
  components/
    NotebookBackground.jsx   # global paper + doodle backdrop
    Navbar.jsx                # spiral-tab navigation
    PageFlip.jsx               # route transition (3D flip desktop / slide mobile)
    Countdown.jsx              # live event countdown
    UI.jsx                     # StickerButton, Polaroid, SectionTab, etc.
  pages/
    Home.jsx
    About.jsx
    BecomeMember.jsx
    Register.jsx
    Games.jsx
  lib/
    supabaseClient.js
```

## Supabase
The Register page writes to an `odyssey_registrations` table with columns:
`full_name, email, university, squad_referral, ias_member, ias_member_id`.
