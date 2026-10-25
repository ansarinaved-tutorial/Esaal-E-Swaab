import React from 'react';

export const SpiritualQuote: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#064E3B] via-[#04382A] to-[#064E3B] text-white text-center">
      <div className="absolute inset-0 bg-islamic-pattern-dark opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
        <div className="w-12 h-12 mx-auto rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
          {/* 8-point Islamic star icon */}
          <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
            <rect x="8" y="8" width="24" height="24" rx="2" stroke="#D4AF37" strokeWidth="2" />
            <rect x="8" y="8" width="24" height="24" rx="2" stroke="#D4AF37" strokeWidth="2" transform="rotate(45 20 20)" />
          </svg>
        </div>

        <p className="font-amiri text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#FAF8F0] tracking-wide" dir="rtl">
          وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ هُوَ خَيْرًا وَأَعْظَمَ أَجْرًا
        </p>

        <p className="font-cinzel text-lg sm:text-xl text-[#F4E3A1] font-medium max-w-2xl mx-auto">
          “And whatever good you put forward for yourselves – you will find it with Allah. It is far better and greater in reward.”
        </p>

        <div className="text-xs uppercase tracking-widest text-[#D4AF37]">
          Surah Al-Muzzammil · 73:20
        </div>
      </div>
    </section>
  );
};
