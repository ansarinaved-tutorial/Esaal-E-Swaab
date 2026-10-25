import React from 'react';
import { QuranRehalVisual } from './QuranRehalVisual.tsx';
import { NotificationForm } from './NotificationForm.tsx';
import { Sparkles, Shield, Compass } from 'lucide-react';

interface HeroSectionProps {
  onOpenNotifyModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenNotifyModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28 bg-[#FAF8F0]">
      {/* Background Islamic geometric pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-70 pointer-events-none" />

      {/* Ambient warm light accents */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(6,78,59,0.08) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Spiritual Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/10 border border-[#D4AF37]/50 text-[#064E3B] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>esaal-e-swaab.com · Official Spiritual Project</span>
            </div>

            {/* Exact Main Heading */}
            <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-bold text-[#064E3B] tracking-tight leading-[1.15] text-balance">
              A New Journey of Spiritual Rewards Is Coming Soon
            </h1>

            {/* Exact Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#132E27]/85 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 text-balance">
              Bringing hearts together through Quran recitation, good deeds, and collective spiritual dedication. A meaningful new journey is on its way.
            </p>

            {/* Inline Notification Card */}
            <div className="pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-[#064E3B]/15 shadow-lg shadow-[#064E3B]/5">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-cinzel font-bold text-[#064E3B] flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#D4AF37]" />
                    Be the First to Recite with Us
                  </span>
                  <span className="text-[#132E27]/60">Zero Spam Guaranteed</span>
                </div>

                <NotificationForm compact={true} />
              </div>
            </div>

            {/* Trust and Domain Assurance */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#132E27]/70 font-medium">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#064E3B]" />
                <span>Verified Domain: esaal-e-swaab.com</span>
              </div>
              <div className="hidden sm:block text-[#D4AF37]">·</div>
              <div>Free Community Service</div>
              <div className="hidden sm:block text-[#D4AF37]">·</div>
              <div>Ad-Free & Peaceful</div>
            </div>

          </div>

          {/* Right Column: Beautiful Quran Resting on Traditional Rehal */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <QuranRehalVisual size="lg" className="mx-auto" />
            
            {/* Caption beneath visual */}
            <div className="mt-4 text-center">
              <span className="font-amiri text-lg text-[#064E3B] font-bold block">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </span>
              <span className="text-xs text-[#132E27]/70 font-cinzel tracking-wider uppercase">
                The Holy Quran · The Fountain of Eternal Light
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
