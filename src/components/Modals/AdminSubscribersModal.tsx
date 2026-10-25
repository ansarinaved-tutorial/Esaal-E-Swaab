import React, { useState, useEffect } from 'react';
import { X, Download, Users, RefreshCw, FileSpreadsheet, Shield } from 'lucide-react';

interface Subscriber {
  id: string;
  email: string;
  name?: string;
  interest?: string;
  createdAt: string;
}

interface AdminSubscribersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminSubscribersModal: React.FC<AdminSubscribersModalProps> = ({ isOpen, onClose }) => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchStatsAndSubscribers = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/notify/export?format=json');
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data);
      } else {
        setError('Failed to fetch subscribers from backend.');
      }
    } catch {
      setError('Could not reach backend API endpoint.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchStatsAndSubscribers();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadCsv = () => {
    window.location.href = '/api/notify/export?format=csv';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#064E3B]/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#FAF8F0] rounded-2xl shadow-2xl border border-[#D4AF37]/50 overflow-hidden flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#064E3B]/10 bg-white/80">
          <div className="flex items-center gap-2.5">
            <Users className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#064E3B]">
                Registered Launch Waitlist
              </h3>
              <p className="text-xs text-[#132E27]/60">
                Verified live storage from <code className="font-mono">data/subscribers.json</code>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#132E27]/60 hover:text-[#064E3B] hover:bg-[#064E3B]/5 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-6 py-3 bg-[#FAF8F0] border-b border-[#064E3B]/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#064E3B]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Total Registered: {subscribers.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchStatsAndSubscribers}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#064E3B] bg-white border border-[#064E3B]/20 rounded-lg hover:bg-[#064E3B]/5 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={handleDownloadCsv}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#064E3B] hover:bg-[#04382A] rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto flex-1 bg-white">
          {error && (
            <div className="p-3 mb-4 rounded-lg bg-red-50 text-red-700 text-xs">
              {error}
            </div>
          )}

          {subscribers.length === 0 ? (
            <div className="py-12 text-center text-[#132E27]/60">
              <FileSpreadsheet className="w-12 h-12 mx-auto mb-3 text-[#D4AF37]/60" />
              <p className="text-sm font-medium">No waitlist submissions yet.</p>
              <p className="text-xs text-[#132E27]/50 mt-1">
                Submissions made via the "Notify Me" form will appear here and persist to server storage.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-[#064E3B]/10">
              {subscribers.map((sub) => (
                <div key={sub.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#064E3B]">{sub.email}</span>
                      {sub.name && (
                        <span className="text-xs text-[#132E27]/60">({sub.name})</span>
                      )}
                    </div>
                    <div className="text-[11px] text-[#D4AF37] font-medium mt-0.5">
                      Interest: {sub.interest || 'General'}
                    </div>
                  </div>
                  <div className="text-[11px] text-[#132E27]/50 tabular-nums">
                    {new Date(sub.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-[#064E3B]/10 bg-[#FAF8F0] flex items-center justify-between text-xs text-[#132E27]/60">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#064E3B]" />
            <span>esaal-e-swaab.com backend storage</span>
          </div>
          <span>Confidential list</span>
        </div>
      </div>
    </div>
  );
};
