import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { FeaturesSection } from './components/FeaturesSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { HowItWorksSection } from './components/HowItWorksSection.tsx';
import { SpiritualQuote } from './components/SpiritualQuote.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { Footer } from './components/Footer.tsx';
import { NotificationModal } from './components/NotificationModal.tsx';
import { LegalModals } from './components/Modals/LegalModals.tsx';
import { HostingerGuideModal } from './components/Modals/HostingerGuideModal.tsx';
import { AdminSubscribersModal } from './components/Modals/AdminSubscribersModal.tsx';

export default function App() {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState('Weekly Quran Assignments & Khatam');
  const [legalModalType, setLegalModalType] = useState<'about' | 'contact' | 'privacy' | 'terms' | null>(null);
  const [hostingerGuideOpen, setHostingerGuideOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  const handleOpenNotifyWithInterest = (interest: string) => {
    setSelectedInterest(interest);
    setNotifyModalOpen(true);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F0] text-[#132E27] flex flex-col font-jakarta selection:bg-[#D4AF37]/30 selection:text-[#064E3B]">
      
      {/* Top Bar Navigation */}
      <Navbar
        onOpenNotify={() => setNotifyModalOpen(true)}
        onOpenAbout={() => scrollTo('about')}
        onOpenFeatures={() => scrollTo('features')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with exact required headline, subtitle, and Quran on Rehal */}
        <HeroSection onOpenNotifyModal={() => setNotifyModalOpen(true)} />

        {/* The 3 Core Feature Cards */}
        <FeaturesSection onSelectFeature={handleOpenNotifyWithInterest} />

        {/* About Section explaining vision & spiritual dedication */}
        <AboutSection />

        {/* 4-Step Practical Journey */}
        <HowItWorksSection />

        {/* Quranic Ayah of Perpetual Reward */}
        <SpiritualQuote />

        {/* Clarifying Questions & Transparent Insights */}
        <FAQSection />
      </main>

      {/* Footer with required legal pages & copyright */}
      <Footer
        onOpenAbout={() => setLegalModalType('about')}
        onOpenContact={() => setLegalModalType('contact')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenHostingerGuide={() => setHostingerGuideOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Interactive Modals */}
      <NotificationModal
        isOpen={notifyModalOpen}
        onClose={() => setNotifyModalOpen(false)}
        defaultInterest={selectedInterest}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <HostingerGuideModal
        isOpen={hostingerGuideOpen}
        onClose={() => setHostingerGuideOpen(false)}
      />

      <AdminSubscribersModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

    </div>
  );
}
