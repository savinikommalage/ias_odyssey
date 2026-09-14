import React from 'react';
import { Phone, Mail, Handshake, Sparkles } from 'lucide-react';
import { SectionTab, DashedDivider } from '../components/UI.jsx';
import sadurshanImg from '../assets/pic/Sadurshan Sugumar.jpeg';
import irushiImg from '../assets/pic/Irushi Umanda.jpeg';
import chanumiImg from '../assets/pic/Chanumi Yavindi.jpeg';
import rumanaImg from '../assets/pic/Rumana Azmi.jpg.jpeg';
import sahnasImg from '../assets/pic/IMG_4675.JPG.jpeg';

export default function Contact() {
  const contacts = [
    {
      name: 'Sadurshan Sugumar',
      phone: '077 478 8857',
      rawPhone: '0774788857',
      email: 'sugumarsadurshan@gmail.com',
      img: sadurshanImg,
    },
    {
      name: 'Irushi Umanda',
      phone: '071 581 5835',
      rawPhone: '0715815835',
      email: 'irushiumanda3@gmail.com',
      img: irushiImg,
    },
    {
      name: 'Chanumi Yavindi',
      phone: '070 192 0213',
      rawPhone: '0701920213',
      email: 'mahawaththachanumi@gmail.com',
      img: chanumiImg,
    },
  ];

  const partnershipContacts = [
    {
      name: 'Rumana Azmi',
      role: 'Event Chairperson',
      phone: '071 594 6052',
      rawPhone: '0715946052',
      img: rumanaImg,
    },
    {
      name: 'Sahnas Thufail',
      role: 'Event Vice-Chairperson',
      phone: '071 663 3585',
      rawPhone: '0716633585',
      img: sahnasImg,
    },
  ];

  return (
    <div className="px-6 sm:px-10 py-10 sm:py-16 max-w-6xl w-full mx-auto font-hand">
      <SectionTab>contact us</SectionTab>

      {/* ===== HEADER BRANDING SECTION ===== */}
      <div className="mt-8 bg-[#fffdf0] border-2 border-black rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0_#222] relative overflow-hidden">
        {/* Top Tape */}
        <div className="absolute -top-1 right-12 w-28 h-7 bg-gray-300/70 transform rotate-3 shadow-sm border-l border-r border-gray-400/30 pointer-events-none" />

        <p className="text-xl sm:text-2xl text-ink/90 italic leading-relaxed max-w-3xl">
          Have questions about the event or squad referrals? Reach out directly to our Odyssey delegate management team.
        </p>

        {/* ===== 3 KEY CONTACT CARDS ===== */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {contacts.map((c) => (
            <div
              key={c.name}
              className="bg-white border-2 border-black p-5 rounded-2xl shadow-[6px_6px_0_#222] hover:-translate-y-1 transition-transform relative flex flex-col items-center text-center"
            >
              {/* Photo Frame with Black & White styling */}
              <div className="w-full h-64 overflow-hidden rounded-tl-2xl rounded-tr-sm rounded-bl-sm rounded-br-[45px] border-2 border-[#558203] bg-gray-100 mb-4 shadow-inner relative">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover grayscale brightness-105 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Contact Information */}
              <h3 className="font-heading font-black text-xl sm:text-2xl text-ink tracking-tight">
                {c.name}
              </h3>

              <div className="mt-4 flex flex-col gap-2 w-full items-center">
                <a
                  href={`tel:${c.rawPhone}`}
                  className="inline-flex items-center justify-center gap-2 font-hand text-base text-ink/90 hover:text-[#558203] bg-notebookLine/30 px-3 py-1.5 rounded-full border border-gray-300 transition-colors w-full"
                >
                  <Phone size={16} className="text-[#558203]" />
                  <span className="font-bold">{c.phone}</span>
                </a>

                <a
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center justify-center gap-2 font-hand text-xs text-ink/90 hover:text-[#558203] bg-notebookLine/30 px-3 py-1.5 rounded-full border border-gray-300 transition-colors w-full truncate"
                  title={c.email}
                >
                  <Mail size={14} className="text-[#558203] shrink-0" />
                  <span className="font-bold truncate">{c.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DashedDivider />

      {/* ===== PARTNERSHIPS SECTION ===== */}
      <div className="mt-12 bg-[#f0f7e6] border-2 border-[#558203] rounded-2xl p-6 sm:p-10 shadow-[8px_8px_0_#3a5802] relative overflow-hidden">
        {/* Decorative Tape */}
        <div className="absolute -top-1 left-10 w-24 h-7 bg-gray-300/70 transform -rotate-2 shadow-sm border-l border-r border-gray-400/30 pointer-events-none" />

        {/* Badge */}
        <div className="flex items-center gap-2 mb-2">
          <Handshake size={20} className="text-[#558203]" />
          <span className="bg-[#558203] text-white font-hand font-bold text-xs tracking-wider uppercase px-3 py-1 rounded-md shadow-[2px_2px_0_#3a5802]">
            Partnerships & Sponsorships
          </span>
        </div>

        <h2 className="font-heading font-black text-3xl sm:text-4xl text-ink uppercase tracking-tight">
          Want to Partner With Us?
        </h2>

        <p className="mt-3 text-lg sm:text-xl text-ink/80 italic leading-relaxed max-w-3xl">
          We're open to collaborations with companies, tech leaders, and organizations who want to empower future engineers. Whether it's branding, workshops, swag packs, or keynote sponsorships — let's make it happen.
        </p>

        {/* Perks Highlights */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🎯', title: 'Brand Visibility', desc: 'Logo on all event media, banners, and digital channels' },
            { icon: '🎤', title: 'Keynote Slots', desc: 'Address 200+ aspiring tech professionals directly' },
            { icon: '🎁', title: 'Swag & Ration Packs', desc: 'Your branded merch in every attendee kit' },
          ].map((perk) => (
            <div key={perk.title} className="bg-white/80 border border-[#558203]/40 rounded-xl p-4 shadow-sm">
              <span className="text-2xl">{perk.icon}</span>
              <h4 className="font-heading font-bold text-base text-ink mt-1">{perk.title}</h4>
              <p className="font-hand text-sm text-ink/70 italic">{perk.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-hand text-lg text-ink/90 font-bold flex items-center gap-2">
          <Sparkles size={18} className="text-[#558203]" />
          Reach out to our event leads below to discuss partnership opportunities:
        </p>

        {/* Partnership Contact Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
          {partnershipContacts.map((c) => (
            <div
              key={c.name}
              className="bg-white border-2 border-[#558203] p-5 rounded-2xl shadow-[6px_6px_0_#3a5802] hover:-translate-y-1 transition-transform relative flex flex-col items-center text-center"
            >
              {/* Photo Frame with Black & White styling */}
              <div className="w-full h-64 overflow-hidden rounded-tl-2xl rounded-tr-sm rounded-bl-sm rounded-br-[45px] border-2 border-[#558203] bg-gray-100 mb-4 shadow-inner relative">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover grayscale brightness-105 hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <h3 className="font-heading font-black text-xl sm:text-2xl text-ink tracking-tight">
                {c.name}
              </h3>
              <span className="mt-1 bg-[#558203]/15 border border-[#558203] text-[#3a5802] font-hand font-bold text-xs tracking-wider uppercase px-3 py-0.5 rounded-md">
                {c.role}
              </span>

              <div className="mt-4 w-full">
                <a
                  href={`tel:${c.rawPhone}`}
                  className="inline-flex items-center justify-center gap-2 font-hand text-base text-ink/90 hover:text-[#558203] bg-[#e2f0d9]/60 px-3 py-1.5 rounded-full border border-[#558203]/40 transition-colors w-full"
                >
                  <Phone size={16} className="text-[#558203]" />
                  <span className="font-bold">{c.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== OFFICIAL EVENT EMAIL ===== */}
      <div className="mt-10 flex justify-center">
        <a
          href="mailto:ieee.iasodyssey@gmail.com"
          className="inline-flex items-center gap-2 font-hand text-base sm:text-lg text-ink/90 hover:text-[#558203] bg-[#fffdf0] px-5 py-3 rounded-full border-2 border-black shadow-[4px_4px_0_#222] transition-colors"
        >
          <Mail size={18} className="text-[#558203]" />
          <span className="font-bold">ieee.iasodyssey@gmail.com</span>
          <span className="text-xs text-ink/60 uppercase tracking-wider ml-1">— Official Event Mail</span>
        </a>
      </div>
    </div>
  );
}
