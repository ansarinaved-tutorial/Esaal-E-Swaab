import React from 'react';
import { Heart, Compass, ShieldCheck, Sparkles, Layers } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#FAF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B]/10 border border-[#D4AF37]/40 text-[#064E3B] text-xs font-semibold tracking-wider uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Sacred Vision</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#064E3B] tracking-tight mb-4 text-balance">
            Connecting Hearts Through the Light of the Quran
          </h2>
          <p className="text-base sm:text-lg text-[#132E27]/80 leading-relaxed text-balance">
            Esaal-E-Swaab was conceived out of a profound longing: to turn individual moments of worship into a united, uplifting tapestry of collective mercy.
          </p>
        </div>

        {/* 2-Column Story & Understanding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Understanding Esaal-E-Swaab */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/80 rounded-2xl p-8 border border-[#064E3B]/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-4">
                <span className="font-amiri text-2xl text-[#064E3B] font-bold">
                  إِيصَالُ الثَّوَاب
                </span>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  The Tradition of Conveying Reward
                </span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-[#064E3B] mb-3">
                A Timeless Act of Love and Continuous Dua
              </h3>

              <p className="text-sm sm:text-base text-[#132E27]/85 leading-relaxed mb-4">
                In classical Islamic tradition, <strong>Esaal-e-Swaab</strong> is the blessed practice of conveying the spiritual rewards of recitation of the Holy Quran, sincere supplications, and righteous charitable deeds to departed parents, beloved relatives, and the entire Ummah.
              </p>

              <p className="text-sm sm:text-base text-[#132E27]/85 leading-relaxed">
                When a loved one departs this world, physical gatherings become harder as families spread across cities and continents. Esaal-E-Swaab provides a serene, organized sanctuary where hearts remain closely intertwined through weekly reading circles, collective Khatams, and ongoing virtues.
              </p>
            </div>

            {/* Core Values / Anti-Slop Truths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/70 border border-[#064E3B]/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#064E3B] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#064E3B] mb-1">
                    Pure & Commercial-Free
                  </h4>
                  <p className="text-xs text-[#132E27]/75 leading-relaxed">
                    Zero distracting banner ads, zero algorithmic noise. Designed purely for peaceful spiritual devotion.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/70 border border-[#064E3B]/10 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#064E3B] text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#064E3B] mb-1">
                    Privacy by Design
                  </h4>
                  <p className="text-xs text-[#132E27]/75 leading-relaxed">
                    No data monetizing or public broadcasting. Family circles remain private, respectful, and safe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Philosophy Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#064E3B] via-[#04382A] to-[#02281D] text-white p-8 sm:p-10 shadow-xl border border-[#D4AF37]/40 overflow-hidden">
              {/* Islamic geometric pattern backdrop */}
              <div className="absolute inset-0 bg-islamic-pattern-dark opacity-20 pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-4">
                  <span className="font-cinzel text-sm font-semibold tracking-wider text-[#F4E3A1]">
                    OUR CORE PRINCIPLE
                  </span>
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>

                <blockquote className="space-y-3">
                  <p className="font-amiri text-2xl sm:text-3xl text-[#FAF8F0] leading-relaxed text-right dir-rtl">
                    « أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ »
                  </p>
                  <p className="font-cinzel text-base text-[#F4E3A1] italic">
                    “The most beloved deeds to Allah are those that are most consistent, even if they are small.”
                  </p>
                  <footer className="text-xs text-white/70 tracking-wide">
                    — Sahih al-Bukhari & Sahih Muslim
                  </footer>
                </blockquote>

                <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-white/80 leading-relaxed">
                  <p>
                    Rather than overwhelming individuals with unreachable targets, Esaal-E-Swaab focuses on gentle, weekly consistency. When ten, twenty, or thirty individuals take on small manageable portions, full Khatams emerge effortlessly with immense barakah.
                  </p>
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs pt-1">
                    <Layers className="w-4 h-4" />
                    <span>Every letter recited carries tenfold reward.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
