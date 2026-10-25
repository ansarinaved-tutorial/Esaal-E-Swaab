import React, { useState } from 'react';
import { X, Globe, Terminal, Server, ShieldCheck, Check, Copy, ExternalLink, HardDrive, Download, Loader2 } from 'lucide-react';
import { downloadProjectZip } from '../../utils/downloadZip.ts';

interface HostingerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostingerGuideModal: React.FC<HostingerGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'dns' | 'static' | 'local' | 'backend'>('dns');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [downloadStatus, setDownloadStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#064E3B]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF8F0] rounded-2xl shadow-2xl border border-[#D4AF37]/50 overflow-hidden flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#064E3B]/10 bg-white/70">
          <div className="flex items-center gap-2.5">
            <Globe className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-cinzel text-lg font-bold text-[#064E3B]">
                Publishing & Hostinger Domain Guide
              </h3>
              <p className="text-xs text-[#132E27]/60">
                Connect <span className="font-semibold text-[#064E3B]">esaal-e-swaab.com</span> without transferring your domain
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

        {/* Tab Selector */}
        <div className="flex items-center gap-1 px-6 pt-3 border-b border-[#064E3B]/10 bg-[#FAF8F0] overflow-x-auto">
          <button
            onClick={() => setActiveTab('dns')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'dns'
                ? 'bg-white text-[#064E3B] border-t-2 border-[#D4AF37] shadow-sm'
                : 'text-[#132E27]/70 hover:text-[#064E3B]'
            }`}
          >
            1. Hostinger DNS Connection
          </button>
          <button
            onClick={() => setActiveTab('static')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'static'
                ? 'bg-white text-[#064E3B] border-t-2 border-[#D4AF37] shadow-sm'
                : 'text-[#132E27]/70 hover:text-[#064E3B]'
            }`}
          >
            2. Static Hosting (Hostinger)
          </button>
          <button
            onClick={() => setActiveTab('backend')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'backend'
                ? 'bg-white text-[#064E3B] border-t-2 border-[#D4AF37] shadow-sm'
                : 'text-[#132E27]/70 hover:text-[#064E3B]'
            }`}
          >
            3. Full-Stack / Node Setup
          </button>
          <button
            onClick={() => setActiveTab('local')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'local'
                ? 'bg-white text-[#064E3B] border-t-2 border-[#D4AF37] shadow-sm'
                : 'text-[#132E27]/70 hover:text-[#064E3B]'
            }`}
          >
            4. Run Locally
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#132E27]/85 leading-relaxed bg-white">
          
          {/* TAB 1: DNS CONNECTION ON HOSTINGER */}
          {activeTab === 'dns' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs">
                <strong>Safety First:</strong> DNS changes are never made automatically. You retain full ownership and control of <code className="font-mono font-semibold">esaal-e-swaab.com</code> inside your Hostinger hPanel. You do NOT need to transfer domain ownership.
              </div>

              <h4 className="font-cinzel text-sm font-bold text-[#064E3B]">
                Step-by-Step: Updating Hostinger DNS Records
              </h4>

              <ol className="list-decimal pl-5 space-y-2 text-xs">
                <li>Log in to your <strong>Hostinger hPanel</strong> (<span className="font-mono">hpanel.hostinger.com</span>).</li>
                <li>Go to the <strong>Domains</strong> section and select <strong className="font-mono">esaal-e-swaab.com</strong>.</li>
                <li>In the left sidebar, click <strong>DNS / Nameservers</strong>.</li>
                <li>
                  Keep your existing Hostinger Nameservers (<span className="font-mono">ns1.dns-parking.com</span>, <span className="font-mono">ns2.dns-parking.com</span> or your assigned Hostinger nameservers).
                </li>
                <li>
                  Scroll to the <strong>DNS Records</strong> table to point the domain to your hosting destination.
                </li>
              </ol>

              <h5 className="font-bold text-[#064E3B] text-xs pt-1">
                A. If Hosting on Hostinger Shared Web Hosting:
              </h5>
              <p className="text-xs">
                Hostinger will automatically configure the records! In hPanel, go to <strong>Websites → Add Website</strong>, choose <code className="font-mono font-bold">esaal-e-swaab.com</code>, and the DNS records will point to your Hostinger server IP automatically.
              </p>

              <h5 className="font-bold text-[#064E3B] text-xs pt-2">
                B. If Hosting on Vercel (Using IP 76.76.21.21):
              </h5>
              <p className="text-xs text-[#132E27]/80">
                In your Hostinger hPanel under <strong>DNS / Nameservers → DNS Records</strong>, configure these two records to connect <code className="font-mono font-bold text-[#064E3B]">esaal-e-swaab.com</code> to Vercel:
              </p>

              {/* Record 1: A Record */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F0] border border-[#064E3B]/20 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#064E3B] text-white font-mono text-[11px] font-bold">A Record</span>
                    <span className="text-xs font-semibold text-[#064E3B]">Root Domain (@)</span>
                  </div>
                  <span className="text-[11px] text-[#132E27]/60">Routes esaal-e-swaab.com</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono bg-white p-2.5 rounded-lg border border-[#064E3B]/10">
                  <div><span className="text-[#132E27]/50 block text-[10px]">Type</span><strong>A</strong></div>
                  <div><span className="text-[#132E27]/50 block text-[10px]">Name</span><strong>@</strong></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#132E27]/50 block text-[10px]">Points to</span>
                      <strong className="text-[#064E3B]">76.76.21.21</strong>
                    </div>
                    <button
                      onClick={() => copyToClipboard('76.76.21.21', 'vercel_ip')}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#064E3B]/10 hover:bg-[#064E3B] hover:text-white text-[11px] font-semibold text-[#064E3B] transition-colors cursor-pointer"
                      title="Copy IP"
                    >
                      {copiedKey === 'vercel_ip' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy IP</span>
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-[#132E27]/70">
                  <strong>What this does:</strong> The <strong>A Record</strong> directs the root address (<code className="font-mono">esaal-e-swaab.com</code>) to Vercel's global Anycast edge network server at <code className="font-mono font-semibold">76.76.21.21</code>. If Hostinger shows an existing default parking A record, simply edit it or replace its IP with <code className="font-mono font-semibold">76.76.21.21</code>.
                </p>
              </div>

              {/* Record 2: CNAME Record */}
              <div className="p-3.5 rounded-xl bg-[#FAF8F0] border border-[#064E3B]/20 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#D4AF37] text-[#064E3B] font-mono text-[11px] font-bold">CNAME</span>
                    <span className="text-xs font-semibold text-[#064E3B]">Subdomain (www)</span>
                  </div>
                  <span className="text-[11px] text-[#132E27]/60">Routes www.esaal-e-swaab.com</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono bg-white p-2.5 rounded-lg border border-[#064E3B]/10">
                  <div><span className="text-[#132E27]/50 block text-[10px]">Type</span><strong>CNAME</strong></div>
                  <div><span className="text-[#132E27]/50 block text-[10px]">Name</span><strong>www</strong></div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#132E27]/50 block text-[10px]">Points to</span>
                      <strong className="text-[#064E3B]">cname.vercel-dns.com</strong>
                    </div>
                    <button
                      onClick={() => copyToClipboard('cname.vercel-dns.com', 'vercel_cname')}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#064E3B]/10 hover:bg-[#064E3B] hover:text-white text-[11px] font-semibold text-[#064E3B] transition-colors cursor-pointer"
                      title="Copy CNAME"
                    >
                      {copiedKey === 'vercel_cname' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>Copy</span>
                    </button>
                  </div>
                </div>
                <p className="text-[11px] text-[#132E27]/70">
                  <strong>What this does:</strong> The <strong>CNAME Record</strong> ensures anyone visiting <code className="font-mono">www.esaal-e-swaab.com</code> reaches your Vercel deployment with automatic SSL certificate renewal.
                </p>
              </div>

              {/* Troubleshooting DEPLOYMENT_NOT_FOUND banner */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>Seeing "DEPLOYMENT_NOT_FOUND" or a 404 page?</span>
                </div>
                <p className="text-xs text-amber-900/90 leading-relaxed">
                  <strong>Great news:</strong> Your Hostinger DNS is already working and connected to Vercel! The reason you see <em>DEPLOYMENT_NOT_FOUND</em> is simply that Vercel is waiting for the website code to be uploaded to the project.
                </p>
                <div className="pt-1 space-y-2">
                  <button
                    onClick={() => downloadProjectZip(setDownloadStatus)}
                    disabled={downloadStatus.type === 'loading'}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#064E3B] text-white text-xs font-semibold hover:bg-[#04382A] transition-colors cursor-pointer disabled:opacity-60"
                  >
                    {downloadStatus.type === 'loading' ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                    )}
                    <span>
                      {downloadStatus.type === 'loading' ? 'Downloading 238 KB...' : 'Download Verified ZIP (238 KB)'}
                    </span>
                  </button>

                  {downloadStatus.message && (
                    <div
                      className={`p-2 rounded text-[11px] leading-tight ${
                        downloadStatus.type === 'error'
                          ? 'bg-red-100 text-red-800 border border-red-300'
                          : downloadStatus.type === 'success'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-white/80 text-[#132E27]'
                      }`}
                    >
                      {downloadStatus.message}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-start gap-2">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong>Configuration ready:</strong> A preconfigured <code className="font-mono font-semibold">vercel.json</code> file is included in your project root for instant one-click deployment when connected to GitHub.
                </span>
              </div>

              <p className="text-[11px] text-[#132E27]/60">
                * Note: Once your code is deployed to Vercel, Vercel automatically links it to <code className="font-mono font-semibold">esaal-e-swaab.com</code> with SSL enabled.
              </p>
            </div>
          )}

          {/* TAB 2: STATIC HOSTING (HOSTINGER) */}
          {activeTab === 'static' && (
            <div className="space-y-4">
              <p>
                To deploy this project to <strong>Hostinger Shared Web Hosting</strong> or standard static web hosting:
              </p>

              <h4 className="font-cinzel text-sm font-bold text-[#064E3B]">
                1. Build the Production Static Assets
              </h4>
              <p className="text-xs">
                Run the build command in your project directory:
              </p>
              <div className="relative p-3 rounded-lg bg-[#064E3B] text-[#FAF8F0] font-mono text-xs flex items-center justify-between">
                <span>npm run build</span>
                <button
                  onClick={() => copyToClipboard('npm run build', 'build_cmd')}
                  className="text-[#D4AF37] hover:text-white transition-colors"
                >
                  {copiedKey === 'build_cmd' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xs text-[#132E27]/75">
                This compiles everything into a lightweight, optimized <code className="font-mono font-semibold">dist/</code> folder containing <code className="font-mono">index.html</code>, JavaScript, and CSS.
              </p>

              <h4 className="font-cinzel text-sm font-bold text-[#064E3B]">
                2. Upload to Hostinger File Manager
              </h4>
              <ol className="list-decimal pl-5 space-y-1.5 text-xs">
                <li>In Hostinger hPanel, navigate to <strong>Websites → Manage → File Manager</strong>.</li>
                <li>Open the <code className="font-mono">public_html</code> folder for <code className="font-mono">esaal-e-swaab.com</code>.</li>
                <li>Upload all files located inside your local <code className="font-mono">dist/</code> directory into <code className="font-mono">public_html</code>.</li>
                <li>Your coming soon website is now live worldwide at <code className="font-mono font-bold text-[#064E3B]">https://esaal-e-swaab.com</code>!</li>
              </ol>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                <strong>Static Notification Handling:</strong> On pure static hosting without Node, you can use our built-in CSV export, or easily plug in a Formspree endpoint or lightweight Hostinger PHP script (provided in the backend tab).
              </div>
            </div>
          )}

          {/* TAB 3: BACKEND / NODE SETUP */}
          {activeTab === 'backend' && (
            <div className="space-y-4">
              <h4 className="font-cinzel text-sm font-bold text-[#064E3B]">
                Real Node.js Backend (`server.ts`)
              </h4>
              <p className="text-xs">
                This project already includes a production-ready Express backend in <code className="font-mono">server.ts</code>. It safely handles:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs">
                <li><code className="font-mono font-semibold">POST /api/notify</code>: Validates email, prevents duplicates, stores to <code className="font-mono">data/subscribers.json</code></li>
                <li><code className="font-mono font-semibold">GET /api/notify/export</code>: Directly downloads all waitlist entries as CSV or JSON</li>
                <li><code className="font-mono font-semibold">GET /api/notify/stats</code>: Live count of registered subscribers</li>
              </ul>

              <h5 className="font-bold text-[#064E3B] text-xs pt-1">
                Hosting Options with Backend:
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-[#064E3B]/15 bg-[#FAF8F0]">
                  <strong>Hostinger VPS (KVM)</strong>
                  <p className="text-[11px] text-[#132E27]/70 mt-1">
                    Upload project, run <code className="font-mono">npm run build</code> and run with PM2: <code className="font-mono">pm2 start server.ts</code>. Full persistence and zero limits.
                  </p>
                </div>
                <div className="p-3 rounded-lg border border-[#064E3B]/15 bg-[#FAF8F0]">
                  <strong>Render / Railway / Cloud Run</strong>
                  <p className="text-[11px] text-[#132E27]/70 mt-1">
                    Deploy from GitHub directly, connect your custom domain <code className="font-mono">esaal-e-swaab.com</code> via CNAME in Hostinger DNS.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RUN LOCALLY */}
          {activeTab === 'local' && (
            <div className="space-y-4">
              <h4 className="font-cinzel text-sm font-bold text-[#064E3B]">
                Running Esaal-E-Swaab Locally on Your Computer
              </h4>

              <div className="space-y-3">
                <div>
                  <span className="text-xs font-semibold text-[#064E3B]">1. Install Dependencies</span>
                  <div className="relative mt-1 p-2.5 rounded-lg bg-[#064E3B] text-[#FAF8F0] font-mono text-xs flex items-center justify-between">
                    <span>npm install</span>
                    <button
                      onClick={() => copyToClipboard('npm install', 'npm_i')}
                      className="text-[#D4AF37] hover:text-white"
                    >
                      {copiedKey === 'npm_i' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-[#064E3B]">2. Start Development Server</span>
                  <div className="relative mt-1 p-2.5 rounded-lg bg-[#064E3B] text-[#FAF8F0] font-mono text-xs flex items-center justify-between">
                    <span>npm run dev</span>
                    <button
                      onClick={() => copyToClipboard('npm run dev', 'npm_dev')}
                      className="text-[#D4AF37] hover:text-white"
                    >
                      {copiedKey === 'npm_dev' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-[#064E3B]">3. Open in Browser</span>
                  <p className="text-xs text-[#132E27]/70 mt-0.5">
                    Navigate to <span className="font-mono font-bold text-[#064E3B]">http://localhost:3000</span>
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#064E3B]/10 bg-[#FAF8F0] flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-[#064E3B] font-medium">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>esaal-e-swaab.com</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 font-semibold text-[#064E3B] bg-[#064E3B]/10 hover:bg-[#064E3B] hover:text-white rounded-lg transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
