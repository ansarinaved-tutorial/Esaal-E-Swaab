import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, Mail, FileText, Info, Copy, Check } from 'lucide-react';

interface LegalModalProps {
  type: 'about' | 'contact' | 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [contactSubject, setContactSubject] = useState('General Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@esaal-e-swaab.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('success');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#064E3B]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#FAF8F0] rounded-2xl shadow-2xl border border-[#D4AF37]/50 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#064E3B]/10 bg-white/60">
          <div className="flex items-center gap-2.5">
            {type === 'about' && <Info className="w-5 h-5 text-[#D4AF37]" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-[#D4AF37]" />}
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-[#D4AF37]" />}
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#064E3B]">
              {type === 'about' && 'About Us · Esaal-E-Swaab'}
              {type === 'contact' && 'Contact Us · Get in Touch'}
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms and Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#132E27]/60 hover:text-[#064E3B] hover:bg-[#064E3B]/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#132E27]/85 leading-relaxed">
          {/* ABOUT US */}
          {type === 'about' && (
            <div className="space-y-4">
              <p>
                <strong>Esaal-E-Swaab</strong> (<span className="text-[#064E3B] font-semibold">esaal-e-swaab.com</span>) is an upcoming digital platform dedicated to reviving and organizing collective spiritual dedication through Quran recitation, voluntary good deeds, and continuous supplication.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-base pt-2">
                Our Genesis & Mission
              </h4>
              <p>
                The platform was founded to bridge the geographical distance separating families, relatives, and close friends who wish to honor their deceased loved ones, pray for those undergoing illness or hardship, and consistently connect with the words of Allah Almighty.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-base pt-2">
                What Sets Us Apart
              </h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>No Commercial Clutter:</strong> We do not serve third-party advertisements or algorithmic clickbait.</li>
                <li><strong>Peaceful Experience:</strong> Designed with soothing emerald, ivory, and gold aesthetics that promote calm reflection rather than stress.</li>
                <li><strong>Respectful Privacy:</strong> Family circles and individual names remain private and confidential.</li>
              </ul>
              <p className="pt-2 text-xs text-[#064E3B] font-medium">
                Official Domain: https://esaal-e-swaab.com
              </p>
            </div>
          )}

          {/* CONTACT US */}
          {type === 'contact' && (
            <div className="space-y-4">
              <p>
                We welcome your suggestions, partnership inquiries, and prayers as we prepare for the launch of Esaal-E-Swaab.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#064E3B]/15 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#132E27]/60 block font-medium">Official Contact Email</span>
                  <span className="font-mono text-sm font-bold text-[#064E3B]">contact@esaal-e-swaab.com</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#064E3B]/10 text-[#064E3B] hover:bg-[#064E3B] hover:text-[#FAF8F0] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {contactStatus === 'success' ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs">
                  Thank you! Your message has been received. Our team will review your inquiry and respond to your email.
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-[#132E27]/80 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="yourname@domain.com"
                      className="w-full px-3 py-2 rounded-lg border border-[#064E3B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#132E27]/80 mb-1">
                      Topic
                    </label>
                    <select
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#064E3B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Circle Coordination">Circle Coordination Question</option>
                      <option value="Technical or Domain Feedback">Technical or Domain Feedback</option>
                      <option value="Spiritual Guidance Collaboration">Spiritual Guidance Collaboration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#132E27]/80 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="How can we assist you or what would you like to share?"
                      className="w-full px-3 py-2 rounded-lg border border-[#064E3B]/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#064E3B] text-white text-xs font-semibold hover:bg-[#04382A] transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}

          {/* PRIVACY POLICY */}
          {type === 'privacy' && (
            <div className="space-y-3">
              <div className="text-xs text-[#132E27]/60">
                Effective Date: October 2026 · Domain: esaal-e-swaab.com
              </div>
              <p>
                At Esaal-E-Swaab, we view your trust as a sacred responsibility. This Privacy Policy details how we handle your personal information.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-sm pt-1">
                1. Information We Collect
              </h4>
              <p>
                During our Coming Soon phase, we collect only the email address and optional interest selections you voluntarily submit to receive launch notifications.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-sm pt-1">
                2. How We Use Information
              </h4>
              <p>
                Your email is used solely to notify you when the Esaal-E-Swaab platform becomes available and to provide necessary onboarding details for Quran recitation circles.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-sm pt-1">
                3. Zero Third-Party Sale or Tracking
              </h4>
              <p>
                We do not sell, rent, monetize, or disclose your personal data to marketing third parties or advertisement brokers.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-sm pt-1">
                4. Unsubscription & Deletion
              </h4>
              <p>
                You may request complete removal of your email from our notification list at any time by contacting contact@esaal-e-swaab.com or using the unsubscribe link provided in our launch communication.
              </p>
            </div>
          )}

          {/* TERMS AND CONDITIONS */}
          {type === 'terms' && (
            <div className="space-y-3">
              <div className="text-xs text-[#132E27]/60">
                Last Updated: October 2026 · Domain: esaal-e-swaab.com
              </div>
              <p>
                Welcome to <strong>Esaal-E-Swaab</strong>. By using or registering your interest on our website, you agree to these Terms and Conditions.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-sm pt-1">
                1. Spiritual Purpose & Conduct
              </h4>
              <p>
                Esaal-E-Swaab is dedicated exclusively to Quran recitation, spiritual encouragement, and lawful community activities. Users agree to maintain mutual respect, decorum, and honorable Islamic conduct in all circle interactions.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-sm pt-1">
                2. Non-Commercial Status
              </h4>
              <p>
                The platform is provided as an open community service. No fundraising solicitations, unauthorized merchant transactions, or deceptive advertising are permitted.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-sm pt-1">
                3. Content & Recitation Authenticity
              </h4>
              <p>
                All Quranic texts, Surah listings, and references conform to the universally accepted Uthmanic Mushaf script. We endeavor to ensure maximum typographical accuracy.
              </p>
              <h4 className="font-cinzel font-bold text-[#064E3B] text-sm pt-1">
                4. Modifications
              </h4>
              <p>
                We reserve the right to refine or update platform features and these Terms to enhance user experience and ensure security.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#064E3B]/10 bg-white/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-[#064E3B] bg-[#064E3B]/10 hover:bg-[#064E3B] hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
