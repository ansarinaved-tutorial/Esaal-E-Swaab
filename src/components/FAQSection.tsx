import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is Esaal-E-Swaab and what is the purpose of this project?',
      a: 'Esaal-E-Swaab is a dedicated platform designed to bring families, friends, and communities together through organized Quran recitation, daily good deeds, and collective spiritual dedication. The platform simplifies the coordination of weekly portions, tracks collective Khatams, and provides a peaceful, distraction-free environment for dedicating rewards to loved ones and seeking the pleasure of Allah.',
    },
    {
      q: 'Will Esaal-E-Swaab be free for participants?',
      a: 'Yes. The core services—including participating in Quran recitation circles, receiving weekly assignments, tracking collective completion, and engaging in optional spiritual activities—are offered as a genuine community service without commercial ads or subscription paywalls.',
    },
    {
      q: 'Can members across different countries join the same Khatam circle?',
      a: 'Absolutely. Circles can be created by any group organizer and joined by family members worldwide. Whether loved ones reside in London, Toronto, Karachi, Jeddah, or Sydney, everyone reads their respective Juz and marks completion in harmony.',
    },
    {
      q: 'When will the platform launch and what happens when I register my email?',
      a: 'Development is actively underway. We do not publish speculative launch dates; rather, the moment the platform is thoroughly tested and ready for public circles, you will receive a direct notification at your registered email address with priority circle onboarding.',
    },
    {
      q: 'Can I dedicate rewards specifically for departed parents or grandparents?',
      a: 'Yes. When setting up or joining a Khatam circle, you can specify individual intentions or memorial dedications with customized collective supplications (Dua-e-Khatam) shared with all participants.',
    },
  ];

  return (
    <section id="faq" className="py-20 relative bg-[#F4EFE6]/60 border-t border-[#064E3B]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#064E3B]/10 border border-[#D4AF37]/40 text-[#064E3B] text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Common Inquiries</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#064E3B] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#132E27]/75">
            Transparent insights regarding the vision and launch of Esaal-E-Swaab.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#064E3B]/15 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-cinzel font-semibold text-sm sm:text-base text-[#064E3B] hover:text-[#D4AF37] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#132E27]/80 leading-relaxed border-t border-[#064E3B]/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
