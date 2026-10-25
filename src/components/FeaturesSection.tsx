import React from 'react';
import { BookOpen, Users2, Moon, ChevronRight, Bookmark, HeartHandshake, Sparkles } from 'lucide-react';

interface FeaturesSectionProps {
  onSelectFeature: (featureName: string) => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onSelectFeature }) => {
  const features = [
    {
      id: 'weekly-assignments',
      title: 'Weekly Quran Assignments',
      subtitle: 'Steady Reflection & Recitation',
      badge: '01 · Individual & Group Pace',
      description:
        'Personalized and structured weekly Quran portions (such as Juz, Hizb, or selected Surahs) thoughtfully distributed to match your life schedule. Build a harmonious, lifelong habit of continuous recitation without feeling rushed.',
      highlights: [
        'Organized weekly reading schedules',
        'Gentle spiritual reminders for accountability',
        'Accommodates beginners to fluent reciters',
      ],
      icon: BookOpen,
      modalInterest: 'Weekly Quran Assignments',
      accentGlow: 'from-[#064E3B]/10 to-[#D4AF37]/10',
      illustration: (
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-[#064E3B] to-[#043326] flex items-center justify-center p-6 border border-[#D4AF37]/30">
          <div className="absolute inset-0 bg-islamic-pattern opacity-10" />
          {/* Stylized Quran open page vector */}
          <div className="relative flex items-center justify-center">
            <div className="w-24 h-32 bg-[#FAF8F0] rounded-r-md rounded-l-sm shadow-xl border-l-4 border-[#04281E] p-3 flex flex-col justify-between -rotate-6">
              <div className="flex justify-between items-center border-b border-[#D4AF37]/40 pb-1">
                <span className="text-[9px] font-bold text-[#064E3B]">الجزء ١</span>
                <span className="text-[9px] text-[#D4AF37] font-serif">Al-Baqarah</span>
              </div>
              <div className="space-y-1 opacity-70">
                <div className="h-1 bg-[#064E3B]/40 rounded-full w-full" />
                <div className="h-1 bg-[#064E3B]/40 rounded-full w-5/6" />
                <div className="h-1 bg-[#064E3B]/40 rounded-full w-4/6" />
                <div className="h-1 bg-[#064E3B]/40 rounded-full w-full" />
              </div>
              <div className="flex items-center gap-1 text-[8px] text-[#064E3B]/80 font-medium pt-1 border-t border-[#D4AF37]/30">
                <Bookmark className="w-2.5 h-2.5 text-[#D4AF37]" />
                <span>Weekly Portion</span>
              </div>
            </div>

            <div className="w-24 h-32 bg-[#FFFDF7] rounded-l-md rounded-r-sm shadow-xl border-r-4 border-[#04281E] p-3 flex flex-col justify-between rotate-6 -ml-3">
              <div className="flex justify-between items-center border-b border-[#D4AF37]/40 pb-1">
                <span className="text-[9px] text-[#D4AF37] font-serif">Ayaat 1–141</span>
                <span className="text-[9px] font-bold text-[#064E3B]">سورة البقرة</span>
              </div>
              <div className="space-y-1 opacity-70">
                <div className="h-1 bg-[#064E3B]/40 rounded-full w-full" />
                <div className="h-1 bg-[#064E3B]/40 rounded-full w-full" />
                <div className="h-1 bg-[#064E3B]/40 rounded-full w-5/6" />
                <div className="h-1 bg-[#064E3B]/40 rounded-full w-3/4" />
              </div>
              <div className="text-right text-[8px] text-[#D4AF37] font-semibold">
                Completed with care
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'collective-khatam',
      title: 'Collective Quran Completion',
      subtitle: 'United in Spiritual Reward (Esaal-E-Swaab)',
      badge: '02 · Global & Family Circles',
      description:
        'Gather family circles, friends, or participate in global Ummah circles to complete full 30-Juz Khatam-al-Quran collectively. Dedicate the spiritual rewards (Esaal-e-Swaab) to departed parents, ancestors, the ill, and all seekers of mercy.',
      highlights: [
        'Dedicated circles for departed loved ones',
        'Real-time collective completion status',
        'Coordinated Khatam Duas & shared intentions',
      ],
      icon: Users2,
      modalInterest: 'Collective Quran Completion',
      accentGlow: 'from-[#064E3B]/10 to-[#D4AF37]/10',
      illustration: (
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-[#064E3B] to-[#03291E] flex items-center justify-center p-6 border border-[#D4AF37]/30">
          <div className="absolute inset-0 bg-islamic-pattern opacity-10" />
          {/* Circular 30 Juz wheel representation */}
          <div className="relative flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-dashed border-[#D4AF37]/60 flex items-center justify-center p-2 animate-spin-slow">
              <div className="w-24 h-24 rounded-full border border-[#D4AF37]/80 flex items-center justify-center bg-[#064E3B]/80">
                <div className="text-center">
                  <span className="block font-cinzel text-xs font-bold text-[#F4E3A1]">30 JUZ</span>
                  <span className="block text-[8px] tracking-widest uppercase text-[#FAF8F0]/80">One Khatam</span>
                </div>
              </div>
            </div>
            {/* Surrounding orbit avatars representing family & circle */}
            <div className="absolute -top-1 w-6 h-6 rounded-full bg-[#D4AF37] text-[#064E3B] flex items-center justify-center text-[10px] font-bold shadow-md">
              1
            </div>
            <div className="absolute -bottom-1 w-6 h-6 rounded-full bg-[#D4AF37] text-[#064E3B] flex items-center justify-center text-[10px] font-bold shadow-md">
              15
            </div>
            <div className="absolute -left-1 w-6 h-6 rounded-full bg-[#D4AF37] text-[#064E3B] flex items-center justify-center text-[10px] font-bold shadow-md">
              8
            </div>
            <div className="absolute -right-1 w-6 h-6 rounded-full bg-[#D4AF37] text-[#064E3B] flex items-center justify-center text-[10px] font-bold shadow-md">
              23
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'spiritual-activities',
      title: 'Optional Spiritual Activities',
      subtitle: 'Holistic Good Deeds & Reminders',
      badge: '03 · Daily Sunnah & Virtues',
      description:
        'Complement recitation with meaningful voluntary deeds. Engage in coordinated daily Salawat (Durood Shareef) upon Prophet Muhammad ﷺ, morning & evening Adhkar, sincere Istighfar, and shared reminders for charitable sadaqah.',
      highlights: [
        'Daily Durood & Salawat counters & circles',
        'Morning & evening Sunnah Adhkar',
        'Virtuous deeds inspired by authentic Hadith',
      ],
      icon: Moon,
      modalInterest: 'Optional Spiritual Activities',
      accentGlow: 'from-[#064E3B]/10 to-[#D4AF37]/10',
      illustration: (
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-[#064E3B] to-[#043326] flex items-center justify-center p-6 border border-[#D4AF37]/30">
          <div className="absolute inset-0 bg-islamic-pattern opacity-10" />
          {/* Spiritual lantern and prayer beads graphic */}
          <div className="relative flex items-center justify-center gap-4">
            {/* Handcrafted Lantern SVG */}
            <svg className="w-20 h-28 text-[#D4AF37]" viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 5 L50 20" stroke="#D4AF37" strokeWidth="2.5" />
              <circle cx="50" cy="5" r="4" fill="none" stroke="#D4AF37" strokeWidth="2" />
              {/* Lantern Cap */}
              <path d="M25 35 Q50 15 75 35 Z" fill="#D4AF37" />
              {/* Glass Chamber with amber glow */}
              <path d="M25 35 L32 95 L68 95 L75 35 Z" fill="#F59E0B" fillOpacity="0.25" stroke="#D4AF37" strokeWidth="2" />
              {/* Internal flame candle */}
              <ellipse cx="50" cy="75" rx="7" ry="12" fill="#FEF08A" />
              <ellipse cx="50" cy="73" rx="3.5" ry="7" fill="#F59E0B" />
              {/* Filigree bars */}
              <line x1="50" y1="35" x2="50" y2="95" stroke="#D4AF37" strokeWidth="1.5" />
              <line x1="38" y1="35" x2="42" y2="95" stroke="#D4AF37" strokeWidth="1.2" />
              <line x1="62" y1="35" x2="58" y2="95" stroke="#D4AF37" strokeWidth="1.2" />
              {/* Base */}
              <path d="M30 95 L25 110 L75 110 L70 95 Z" fill="#D4AF37" />
              <path d="M50 110 L50 125" stroke="#D4AF37" strokeWidth="2" />
              <circle cx="50" cy="125" r="3" fill="#D4AF37" />
            </svg>

            {/* Prayer beads tasbih loop */}
            <div className="w-16 h-16 rounded-full border-2 border-dotted border-[#D4AF37] flex items-center justify-center relative">
              <Sparkles className="w-6 h-6 text-[#FDE68A]" />
              <span className="absolute -bottom-2 bg-[#D4AF37] text-[#064E3B] text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                Salawat
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#F4EFE6]/70 border-y border-[#064E3B]/10">
      {/* Background Islamic pattern */}
      <div className="absolute inset-0 bg-islamic-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B]/10 border border-[#D4AF37]/40 text-[#064E3B] text-xs font-semibold tracking-wider uppercase mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Spiritual Pillars of Esaal-E-Swaab</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064E3B] tracking-tight mb-4 text-balance">
            Designed for Continuous Blessing & Collective Harmony
          </h2>
          <p className="text-base sm:text-lg text-[#132E27]/80 leading-relaxed text-balance">
            Three core elements thoughtfully architected to elevate your daily relationship with the Holy Quran and maximize shared spiritual reward.
          </p>
        </div>

        {/* Feature Cards Grid (3-column responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative flex flex-col justify-between bg-white/95 rounded-2xl border border-[#064E3B]/15 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/80 transition-all duration-300"
              >
                {/* Visual Top Preview */}
                <div className="mb-6">
                  {feature.illustration}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  {/* Clean unboxed editorial badge */}
                  <div className="text-xs font-semibold text-[#064E3B] tracking-wider uppercase mb-1">
                    {feature.badge}
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#064E3B] mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {feature.title}
                  </h3>

                  <div className="text-xs font-medium text-[#132E27]/60 italic mb-3">
                    {feature.subtitle}
                  </div>

                  <p className="text-sm text-[#132E27]/80 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-auto space-y-2 border-t border-[#064E3B]/10 pt-4 mb-6">
                    {feature.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#132E27]/85 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onSelectFeature(feature.modalInterest)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-[#064E3B] bg-[#064E3B]/5 hover:bg-[#064E3B] hover:text-[#FAF8F0] border border-[#064E3B]/20 transition-all cursor-pointer group/btn"
                >
                  <span>Notify Me for this feature</span>
                  <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
