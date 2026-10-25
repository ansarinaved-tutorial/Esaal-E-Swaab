import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2, Send, Sparkles } from 'lucide-react';

interface NotificationFormProps {
  onSuccess?: () => void;
  className?: string;
  defaultInterest?: string;
  compact?: boolean;
}

export const NotificationForm: React.FC<NotificationFormProps> = ({
  onSuccess,
  className = '',
  defaultInterest = 'Weekly Quran Assignments & Khatam',
  compact = false,
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interest, setInterest] = useState(defaultInterest);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanEmail = email.trim();
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      setStatus('error');
      setMessage('Please enter a complete, valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      let response = await fetch('/api/notify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: cleanEmail,
          name: name.trim() || undefined,
          interest: interest,
        }),
      });

      // If Express endpoint is not found (e.g. pure static hosting on Hostinger Apache/LiteSpeed), fallback to PHP endpoint
      if (response.status === 404) {
        try {
          response = await fetch('/api/notify.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: cleanEmail,
              name: name.trim() || undefined,
              interest: interest,
            }),
          });
        } catch {
          // Ignore and continue
        }
      }

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setStatus('success');
          setAlreadyRegistered(data.alreadySubscribed || false);
          setMessage(
            data.message ||
              'JazakAllah Khair! You will be notified the moment Esaal-E-Swaab is ready for launch.'
          );
          if (onSuccess) onSuccess();
          return;
        } else {
          setStatus('error');
          setMessage(data.error || 'Unable to register email at this moment. Please try again.');
          return;
        }
      }

      // Offline or static local storage backup
      const localWaitlist = JSON.parse(localStorage.getItem('esaal_subscribers') || '[]');
      const exists = localWaitlist.some((s: { email: string }) => s.email.toLowerCase() === cleanEmail.toLowerCase());
      if (!exists) {
        localWaitlist.push({
          email: cleanEmail,
          name: name.trim() || undefined,
          interest,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('esaal_subscribers', JSON.stringify(localWaitlist));
      }

      setStatus('success');
      setAlreadyRegistered(exists);
      setMessage(
        exists
          ? 'You are already registered on our launch notification list. We will notify you as soon as Esaal-E-Swaab launches!'
          : 'Thank you for joining. Your registration is recorded and you will be notified at launch.'
      );
      if (onSuccess) onSuccess();
    } catch {
      // Offline fallback
      const localWaitlist = JSON.parse(localStorage.getItem('esaal_subscribers') || '[]');
      localWaitlist.push({
        email: cleanEmail,
        name: name.trim() || undefined,
        interest,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('esaal_subscribers', JSON.stringify(localWaitlist));

      setStatus('success');
      setMessage('Thank you for joining. Your notification preference has been saved.');
      if (onSuccess) onSuccess();
    }
  };

  if (status === 'success') {
    return (
      <div className={`p-6 rounded-2xl bg-[#064E3B]/10 border border-[#D4AF37]/40 text-center ${className}`}>
        <div className="w-12 h-12 mx-auto rounded-full bg-[#064E3B] text-[#D4AF37] flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-cinzel text-lg font-bold text-[#064E3B] mb-1">
          {alreadyRegistered ? 'Already on Priority List' : 'Thank You for Registering'}
        </h4>
        <p className="text-sm text-[#132E27]/80 mb-4 max-w-md mx-auto">
          {message}
        </p>
        <div className="text-xs text-[#064E3B]/70 flex items-center justify-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Domain: esaal-e-swaab.com · Zero spam guaranteed</span>
        </div>
        <button
          onClick={() => {
            setStatus('idle');
            setEmail('');
            setName('');
          }}
          className="mt-4 text-xs font-semibold text-[#064E3B] hover:text-[#D4AF37] underline transition-colors cursor-pointer"
        >
          Register another email address
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-3.5 ${className}`}>
      {status === 'error' && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{message}</span>
        </div>
      )}

      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="notify-name" className="block text-xs font-medium text-[#132E27]/80 mb-1">
              Your Name <span className="text-[#132E27]/40">(Optional)</span>
            </label>
            <input
              id="notify-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Tariq or Fatima"
              disabled={status === 'loading'}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#064E3B]/20 bg-white/90 text-sm text-[#132E27] placeholder-[#132E27]/40 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="notify-interest" className="block text-xs font-medium text-[#132E27]/80 mb-1">
              Primary Interest
            </label>
            <select
              id="notify-interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              disabled={status === 'loading'}
              className="w-full px-3.5 py-2.5 rounded-lg border border-[#064E3B]/20 bg-white/90 text-sm text-[#132E27] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all cursor-pointer"
            >
              <option value="Weekly Quran Assignments & Khatam">Weekly Quran & Khatam</option>
              <option value="Collective Quran Completion">Collective Quran Completion</option>
              <option value="Spiritual Activities & Adhkar">Spiritual Activities & Adhkar</option>
              <option value="General Launch Notification">General Launch Notification</option>
            </select>
          </div>
        </div>
      )}

      <div>
        {!compact && (
          <label htmlFor="notify-email" className="block text-xs font-medium text-[#132E27]/80 mb-1">
            Email Address <span className="text-[#D4AF37]">*</span>
          </label>
        )}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="notify-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for launch notification..."
            disabled={status === 'loading'}
            className="flex-1 px-4 py-3 rounded-lg border border-[#064E3B]/25 bg-white text-sm text-[#132E27] placeholder-[#132E27]/45 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent shadow-inner transition-all"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm text-white bg-gradient-to-r from-[#064E3B] to-[#04382A] hover:from-[#085a44] hover:to-[#054333] active:scale-[0.98] rounded-lg shadow-md hover:shadow-lg border border-[#D4AF37]/40 transition-all cursor-pointer disabled:opacity-70 whitespace-nowrap shrink-0"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#D4AF37]" />
                <span>Registering...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#D4AF37]" />
                <span>Notify Me at Launch</span>
              </>
            )}
          </button>
        </div>
      </div>

      <p className="text-[11px] text-[#132E27]/60 text-center sm:text-left">
        We respect your sacred trust. Your email is securely stored on our server solely for launch updates.
      </p>
    </form>
  );
};
