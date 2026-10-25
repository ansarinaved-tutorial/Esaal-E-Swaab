import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { NotificationForm } from './NotificationForm.tsx';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  defaultInterest = 'Weekly Quran Assignments & Khatam',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#064E3B]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F0] rounded-2xl shadow-2xl border border-[#D4AF37]/50 p-6 sm:p-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Subtle decorative Islamic corner ornament */}
        <div className="absolute top-0 right-0 p-4 opacity-15 pointer-events-none">
          <svg className="w-24 h-24 text-[#064E3B]" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="100,0 100,100 0,0" />
          </svg>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#132E27]/60 hover:text-[#064E3B] hover:bg-[#064E3B]/5 rounded-lg transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase tracking-wider font-semibold text-[#064E3B]">
            Priority Launch Waitlist
          </span>
        </div>

        <h3 id="modal-title" className="font-cinzel text-xl sm:text-2xl font-bold text-[#064E3B] mb-2">
          Join the Circle of Spiritual Dedication
        </h3>

        <p className="text-sm text-[#132E27]/80 mb-6">
          Be notified the moment Esaal-E-Swaab opens for weekly Quran assignments, collective Khatams, and good deeds.
        </p>

        <NotificationForm defaultInterest={defaultInterest} compact={false} />
      </div>
    </div>
  );
};
