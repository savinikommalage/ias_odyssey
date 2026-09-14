import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotebookBackground from './components/NotebookBackground.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import BecomeMember from './pages/BecomeMember.jsx';
import Register from './pages/Register.jsx';
import Games from './pages/Games.jsx';

export default function App() {

  return (
    <div className="relative min-h-screen flex flex-col justify-between text-ink selection:bg-marker selection:text-paper">
      <NotebookBackground />
      <Navbar />
      <main className="flex-1 flex flex-col justify-start relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<BecomeMember />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="text-center font-hand text-ink/60 pb-8 pt-6">
        Odyssey · IEEE IAS Student Branch
      </footer>
    </div>
  );
}
