import React, { useState } from 'react';
import { ShieldCheck, Heart, Globe, Database, Download, Loader2, CheckCircle } from 'lucide-react';
import { downloadProjectZip } from '../utils/downloadZip.ts';

interface FooterProps {
  onOpenAbout: () => void;
  onOpenContact: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenHostingerGuide: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAbout,
  onOpenContact,
  onOpenPrivacy,
  onOpenTerms,
  onOpenHostingerGuide,
  onOpenAdmin,
}) => {
  const [downloadStatus, setDownloadStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleDownload = () => {
    downloadProjectZip(setDownloadStatus);
  };
  return (
    <footer className="bg-[#04382A] text-[#FAF8F0] border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Subtle Islamic pattern overlay */}
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <svg
                className="w-6 h-6 text-[#D4AF37]"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" y="8" width="24" height="24" rx="2" fill="#064E3B" stroke="#D4AF37" strokeWidth="2" />
                <rect x="8" y="8" width="24" height="24" rx="2" fill="#064E3B" stroke="#D4AF37" strokeWidth="2" transform="rotate(45 20 20)" />
                <circle cx="20" cy="20" r="4.5" fill="#D4AF37" />
              </svg>
              <span className="font-cinzel text-xl font-bold tracking-tight text-[#F4E3A1]">
                Esaal-E-Swaab
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-sm">
              A serene digital platform bringing hearts together through Quran recitation, good deeds, and collective spiritual dedication.
            </p>

            <div className="pt-1 flex items-center gap-2 text-xs text-[#D4AF37] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Domain: <span className="underline">esaal-e-swaab.com</span></span>
            </div>
          </div>

          {/* Quick Links / Legal Navigation */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Information & Legal
            </h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-[#F4E3A1] transition-colors cursor-pointer text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-[#F4E3A1] transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#F4E3A1] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerms}
                  className="hover:text-[#F4E3A1] transition-colors cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Owner Deployment & Admin Access */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
              Deployment & Project Tools
            </h4>
            <div className="space-y-2">
              <button
                onClick={handleDownload}
                disabled={downloadStatus.type === 'loading'}
                className="w-full inline-flex items-center justify-between px-3 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#F4E3A1] text-xs font-semibold text-[#064E3B] transition-colors shadow-sm cursor-pointer disabled:opacity-60"
              >
                <div className="flex items-center gap-1.5">
                  {downloadStatus.type === 'loading' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : downloadStatus.type === 'success' ? (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-800" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span>
                    {downloadStatus.type === 'loading'
                      ? 'Downloading 238 KB...'
                      : downloadStatus.type === 'success'
                      ? 'Downloaded (238 KB)!'
                      : 'Download Verified ZIP'}
                  </span>
                </div>
                <span className="text-[10px] opacity-80 font-mono">WinRAR Ready</span>
              </button>

              {downloadStatus.message && (
                <div
                  className={`p-2 rounded text-[11px] leading-tight ${
                    downloadStatus.type === 'error'
                      ? 'bg-red-900/60 text-red-200 border border-red-500/40'
                      : downloadStatus.type === 'success'
                      ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-500/40'
                      : 'bg-white/10 text-white/80'
                  }`}
                >
                  {downloadStatus.message}
                </div>
              )}

              <button
                onClick={onOpenHostingerGuide}
                className="w-full inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-[#F4E3A1] border border-[#D4AF37]/30 transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Hostinger & DNS Guide</span>
              </button>

              <button
                onClick={onOpenAdmin}
                className="w-full inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/80 border border-white/10 transition-colors cursor-pointer"
              >
                <Database className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>View Waitlist & Export CSV</span>
              </button>
            </div>
            <p className="text-[11px] text-white/50 pt-1">
              Backend storage active at <code className="font-mono text-[#D4AF37]">/api/notify</code>
            </p>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 Esaal-E-Swaab (esaal-e-swaab.com). All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-white/70">
            <span>Built with devotion for continuous spiritual reward</span>
            <Heart className="w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
