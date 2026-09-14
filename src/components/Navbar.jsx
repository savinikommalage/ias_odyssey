import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import planeImg from '../assets/logo/Just_the_plane_4-removebg-preview (1).png';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Join IAS' },
  { to: '/register', label: 'Register' },
  { to: '/games', label: 'Games' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 w-full">
      <nav className="max-w-6xl w-full mx-auto flex items-center justify-between px-6 sm:px-10 pt-6">
        <NavLink to="/" className="flex items-center gap-2 group">
          <img
            src={planeImg}
            alt="Paper plane"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain -rotate-12 group-hover:-rotate-45 transition-transform duration-300"
          />
          <span className="font-heading font-extrabold text-2xl tracking-tight text-ink">
            ODYSSEY
          </span>
        </NavLink>

        {/* Desktop tabs — look like spiral-bound page tabs */}
        <div className="hidden md:flex items-end gap-1">
          {links.map((l) =>
            l.isExternal ? (
              <a
                key={l.label}
                href={l.to}
                className="font-hand text-lg font-bold px-4 py-2 rounded-t-lg border-2 border-b-0 border-ink -mb-[2px] transition-colors bg-notebookLine/40 text-ink hover:bg-paper/80 hover:text-marker"
              >
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `font-hand text-lg font-bold px-4 py-2 rounded-t-lg border-2 border-b-0 border-ink -mb-[2px] transition-colors ${
                    isActive
                      ? 'bg-paper text-marker'
                      : 'bg-notebookLine/40 text-ink hover:bg-paper/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
      <div className="hidden md:block border-b-2 border-ink max-w-6xl mx-auto" />

      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-paper ink-border border-t-0 mx-4 rounded-b-xl shadow-lg">
          <div className="flex flex-col p-4 gap-2">
            {links.map((l) =>
              l.isExternal ? (
                <a
                  key={l.label}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="font-hand text-xl font-bold px-3 py-2 rounded-lg text-ink hover:text-marker"
                >
                  {l.label}
                </a>
              ) : (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-hand text-xl font-bold px-3 py-2 rounded-lg ${
                      isActive ? 'text-marker bg-notebookLine/30' : 'text-ink'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
