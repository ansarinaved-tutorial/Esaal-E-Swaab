import React, { useState } from 'react';
import { Menu, X, Bell } from 'lucide-react';

interface NavbarProps {
  onOpenNotify: () => void;
  onOpenAbout: () => void;
  onOpenFeatures: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenNotify }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F0]/95 backdrop-blur-md border-b border-[#064E3B]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single text element wordmark in Cinzel display face */}
          <a
            href="/"
            className="flex items-center gap-2.5 text-[#064E3B] hover:opacity-95 transition-opacity whitespace-nowrap shrink-0 group"
          >
            {/* Elegant 8-point gold star emblem */}
            <svg
              className="w-7 h-7 text-[#D4AF37] transition-transform duration-500 group-hover:rotate-45"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="8" y="8" width="24" height="24" rx="2" fill="#064E3B" stroke="#D4AF37" strokeWidth="2" />
              <rect x="8" y="8" width="24" height="24" rx="2" fill="#064E3B" stroke="#D4AF37" strokeWidth="2" transform="rotate(45 20 20)" />
              <circle cx="20" cy="20" r="4.5" fill="#D4AF37" />
            </svg>
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-tight text-[#064E3B]">
              Esaal-E-Swaab
            </span>
          </a>

          {/* Zone 2: 4 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#132E27]/80">
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-[#064E3B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Our Vision
            </button>
            <button
              onClick={() => scrollTo('features')}
              className="hover:text-[#064E3B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Spiritual Pillars
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="hover:text-[#064E3B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="hover:text-[#064E3B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Questions
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenNotify}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#064E3B] bg-gradient-to-r from-[#D4AF37] via-[#F4E3A1] to-[#D4AF37] hover:brightness-105 active:scale-[0.98] rounded-lg shadow-sm border border-[#D4AF37]/50 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Bell className="w-4 h-4 text-[#064E3B]" />
              <span>Notify Me at Launch</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#064E3B] hover:bg-[#064E3B]/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#064E3B]/10 py-4 px-2 space-y-2 bg-[#FAF8F0]">
            <button
              onClick={() => scrollTo('about')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-[#132E27] hover:bg-[#064E3B]/5 rounded-md"
            >
              Our Vision
            </button>
            <button
              onClick={() => scrollTo('features')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-[#132E27] hover:bg-[#064E3B]/5 rounded-md"
            >
              Spiritual Pillars
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-[#132E27] hover:bg-[#064E3B]/5 rounded-md"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-[#132E27] hover:bg-[#064E3B]/5 rounded-md"
            >
              Questions
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
