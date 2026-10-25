import React from 'react';
import { UserCheck, BookOpenCheck, HeartHandshake, Award } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Join or Form a Circle',
      description:
        'Create a private reading circle for your family or join a broader community group dedicated to ongoing Quran recitation and Esaal-E-Swaab.',
      icon: UserCheck,
    },
    {
      num: '2',
      title: 'Receive Your Weekly Portion',
      description:
        'A manageable weekly portion (such as 1 Juz, half a Juz, or specific Surahs) is allocated to you with gentle weekly reminders.',
      icon: BookOpenCheck,
    },
    {
      num: '3',
      title: 'Complete at Your Peace',
      description:
        'Read from your physical Quran or preferred Mushaf, taking time to reflect and mark completion whenever you finish your portion.',
      icon: HeartHandshake,
    },
    {
      num: '4',
      title: 'Collective Dua & Reward Dedication',
      description:
        'As each circle completes all 30 Juz, a collective Khatam Dua is offered, dedicating the boundless reward to departed and beloved souls.',
      icon: Award,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative bg-[#FAF8F0] border-t border-[#064E3B]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] block mb-2">
            The Journey Ahead
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#064E3B] mb-4">
            How Collective Recitation Works
          </h2>
          <p className="text-sm sm:text-base text-[#132E27]/80">
            A gentle, unhurried workflow designed for ease and peaceful spiritual devotion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-xl p-6 border border-[#064E3B]/10 shadow-sm flex flex-col justify-between hover:border-[#D4AF37]/60 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#064E3B]/10 text-[#064E3B] flex items-center justify-center font-cinzel font-bold text-base">
                    {step.num}
                  </div>
                  <Icon className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#064E3B] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#132E27]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
