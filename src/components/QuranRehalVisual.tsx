import React from 'react';

interface QuranRehalVisualProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const QuranRehalVisual: React.FC<QuranRehalVisualProps> = ({ className = '', size = 'lg' }) => {
  const sizeClasses = {
    sm: 'max-w-xs',
    md: 'max-w-md',
    lg: 'max-w-lg lg:max-w-xl',
  }[size];

  return (
    <div className={`relative flex items-center justify-center select-none ${sizeClasses} ${className}`}>
      {/* Ambient spiritual glow */}
      <div 
        className="absolute -inset-4 rounded-full opacity-60 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.28) 0%, rgba(6,78,59,0.18) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* SVG Artwork: Holy Quran on Traditional Wooden Rehal with Golden Illumination */}
      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl transition-transform duration-700 hover:scale-[1.015]"
        role="img"
        aria-label="The Holy Quran resting on an exquisitely carved traditional wooden Rehal bookstand with golden illumination"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="rehalWoodLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3E2723" />
            <stop offset="40%" stopColor="#4E342E" />
            <stop offset="80%" stopColor="#2D1B14" />
            <stop offset="100%" stopColor="#1B0F0B" />
          </linearGradient>

          <linearGradient id="rehalWoodRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4E342E" />
            <stop offset="50%" stopColor="#3E2723" />
            <stop offset="100%" stopColor="#1B0F0B" />
          </linearGradient>

          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#92400E" />
          </linearGradient>

          <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FFFBEB" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="quranCover" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#064E3B" />
            <stop offset="60%" stopColor="#04382A" />
            <stop offset="100%" stopColor="#02251B" />
          </linearGradient>

          <linearGradient id="pageIvoryLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EDE5D1" />
            <stop offset="85%" stopColor="#FAF6EB" />
            <stop offset="100%" stopColor="#D8CDAF" />
          </linearGradient>

          <linearGradient id="pageIvoryRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D8CDAF" />
            <stop offset="15%" stopColor="#FAF6EB" />
            <stop offset="100%" stopColor="#EDE5D1" />
          </linearGradient>

          <radialGradient id="lightHalo" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>

          {/* Filter for soft gold shadow */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer ambient halo */}
        <ellipse cx="300" cy="220" rx="220" ry="140" fill="url(#lightHalo)" />

        {/* Base floor shadow under Rehal */}
        <ellipse cx="300" cy="460" rx="240" ry="24" fill="#064E3B" fillOpacity="0.12" />
        <ellipse cx="300" cy="458" rx="180" ry="16" fill="#18181B" fillOpacity="0.22" />

        {/* ----------------- TRADITIONAL WOODEN REHAL (X-STAND) ----------------- */}
        {/* Left Back Leg & Cross */}
        <path
          d="M 170 300 L 100 450 L 150 450 L 260 280 Z"
          fill="#2D1B14"
        />
        {/* Right Back Leg */}
        <path
          d="M 430 300 L 500 450 L 450 450 L 340 280 Z"
          fill="#23140E"
        />

        {/* Main Left Wood Arm (Supporting Left Quran Page) */}
        <path
          d="M 120 180 L 300 310 L 285 335 L 85 205 Z"
          fill="url(#rehalWoodLeft)"
        />
        {/* Left Front Leg going down to floor */}
        <path
          d="M 285 335 L 430 455 L 390 460 L 255 350 Z"
          fill="url(#rehalWoodLeft)"
        />

        {/* Main Right Wood Arm (Supporting Right Quran Page) */}
        <path
          d="M 480 180 L 300 310 L 315 335 L 515 205 Z"
          fill="url(#rehalWoodRight)"
        />
        {/* Right Front Leg going down to floor */}
        <path
          d="M 315 335 L 170 455 L 210 460 L 345 350 Z"
          fill="url(#rehalWoodRight)"
        />

        {/* Rehal Interlocking Joint Arch */}
        <path
          d="M 280 320 Q 300 305 320 320 L 310 345 Q 300 335 290 345 Z"
          fill="#1B0F0B"
        />

        {/* Intricate Carved Wood Filigree on Legs */}
        {/* Left Leg Cutout Arch */}
        <path
          d="M 370 425 Q 355 405 330 385 L 340 375 Q 370 400 385 418 Z"
          fill="url(#goldGradient)"
          fillOpacity="0.75"
        />
        {/* Right Leg Cutout Arch */}
        <path
          d="M 230 425 Q 245 405 270 385 L 260 375 Q 230 400 215 418 Z"
          fill="url(#goldGradient)"
          fillOpacity="0.75"
        />

        {/* Rehal Scalloped Top Edge Carvings */}
        <circle cx="102" cy="192" r="5" fill="url(#goldGradient)" />
        <circle cx="118" cy="204" r="4" fill="url(#goldGradient)" />
        <circle cx="498" cy="192" r="5" fill="url(#goldGradient)" />
        <circle cx="482" cy="204" r="4" fill="url(#goldGradient)" />

        {/* Decorative Golden Inlay Borders along Rehal Arms */}
        <line x1="125" y1="188" x2="280" y2="300" stroke="url(#goldGradient)" strokeWidth="2.5" strokeOpacity="0.7" />
        <line x1="475" y1="188" x2="320" y2="300" stroke="url(#goldGradient)" strokeWidth="2.5" strokeOpacity="0.7" />

        {/* ----------------- QURAN HARDCOVER BINDING (EMERALD & GOLD) ----------------- */}
        {/* Left Heavy Cover Base */}
        <path
          d="M 115 165 L 295 285 L 295 300 L 105 180 Z"
          fill="url(#quranCover)"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />
        {/* Right Heavy Cover Base */}
        <path
          d="M 485 165 L 305 285 L 305 300 L 495 180 Z"
          fill="url(#quranCover)"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />

        {/* Quran Gilded Page Edges (Gold leaf edges) */}
        {/* Left page thickness stack */}
        <path
          d="M 110 170 L 296 288 L 296 295 L 106 177 Z"
          fill="url(#goldGradient)"
          fillOpacity="0.9"
        />
        {/* Right page thickness stack */}
        <path
          d="M 490 170 L 304 288 L 304 295 L 494 177 Z"
          fill="url(#goldGradient)"
          fillOpacity="0.9"
        />

        {/* ----------------- OPEN HOLY QURAN PAGES (IVORY & ILLUMINATION) ----------------- */}
        {/* Left Open Page with Gentle Curved Arch */}
        <path
          d="M 125 150 Q 205 175 295 275 L 295 285 Q 205 188 120 162 Z"
          fill="#DED3B6"
        />
        <path
          d="M 130 145 Q 210 170 298 270 L 298 278 Q 210 180 126 154 Z"
          fill="url(#pageIvoryLeft)"
        />

        {/* Right Open Page with Gentle Curved Arch */}
        <path
          d="M 475 150 Q 395 175 305 275 L 305 285 Q 395 188 480 162 Z"
          fill="#DED3B6"
        />
        <path
          d="M 470 145 Q 390 170 302 270 L 302 278 Q 390 180 474 154 Z"
          fill="url(#pageIvoryRight)"
        />

        {/* Center Spine Crease & Shadow */}
        <line x1="300" y1="210" x2="300" y2="280" stroke="#8D7B54" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="300" cy="275" rx="14" ry="4" fill="#04382A" fillOpacity="0.4" />

        {/* ----------------- ILLUMINATED TEZHIP BORDERS (ISLAMIC GOLD EMBELLISHMENT) ----------------- */}
        {/* Left Page Tezhip (Ornate Frame) */}
        <g opacity="0.85">
          <rect
            x="160"
            y="172"
            width="110"
            height="80"
            rx="3"
            transform="rotate(18 160 172)"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
          />
          {/* Subtle ornamental medallion on left page margin */}
          <polygon
            points="148,185 153,190 148,195 143,190"
            fill="url(#goldGradient)"
          />
          <polygon
            points="148,185 153,190 148,195 143,190"
            fill="url(#goldGradient)"
            transform="rotate(45 148 190)"
          />
        </g>

        {/* Right Page Tezhip (Ornate Frame) */}
        <g opacity="0.85">
          <rect
            x="320"
            y="206"
            width="110"
            height="80"
            rx="3"
            transform="rotate(-18 320 206)"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="1.5"
          />
          {/* Subtle ornamental medallion on right page margin */}
          <polygon
            points="452,185 457,190 452,195 447,190"
            fill="url(#goldGradient)"
          />
          <polygon
            points="452,185 457,190 452,195 447,190"
            fill="url(#goldGradient)"
            transform="rotate(45 452 190)"
          />
        </g>

        {/* Symbolic Quranic Calligraphy Lines (Graceful golden & sepia scripts) */}
        {/* Left page text lines */}
        <g stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" opacity="0.75">
          <line x1="168" y1="184" x2="268" y2="216" />
          <line x1="174" y1="198" x2="272" y2="230" />
          <line x1="180" y1="212" x2="276" y2="244" />
          <line x1="186" y1="226" x2="278" y2="256" />
          <line x1="192" y1="240" x2="280" y2="268" />
        </g>

        {/* Bismillah Header on Right Page (Gold illumination header) */}
        <path
          d="M 336 210 Q 375 196 414 182"
          stroke="url(#goldGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Right page text lines */}
        <g stroke="#1F2937" strokeWidth="1.8" strokeLinecap="round" opacity="0.75">
          <line x1="332" y1="226" x2="428" y2="194" />
          <line x1="326" y1="240" x2="422" y2="208" />
          <line x1="322" y1="254" x2="416" y2="222" />
          <line x1="318" y1="268" x2="408" y2="236" />
        </g>

        {/* Gold Verse End Markers (Ayaat rosettes) */}
        <circle cx="215" cy="200" r="2.8" fill="url(#goldGradient)" />
        <circle cx="245" cy="223" r="2.8" fill="url(#goldGradient)" />
        <circle cx="378" cy="211" r="2.8" fill="url(#goldGradient)" />
        <circle cx="355" cy="245" r="2.8" fill="url(#goldGradient)" />

        {/* ----------------- SILK BOOKMARK RIBBON (EMERALD & GOLD TASSEL) ----------------- */}
        {/* Emerald green silk ribbon cascading gracefully down the spine */}
        <path
          d="M 300 230 C 298 270, 312 320, 290 370 C 280 395, 295 425, 288 445"
          fill="none"
          stroke="#064E3B"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Ribbon golden highlight */}
        <path
          d="M 301 230 C 299 270, 313 320, 291 370 C 281 395, 296 425, 289 445"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 2"
        />
        {/* Golden Tassel at Ribbon End */}
        <circle cx="288" cy="446" r="4.5" fill="url(#goldGradient)" />
        <path
          d="M 288 448 L 284 468 M 288 448 L 288 470 M 288 448 L 292 468"
          stroke="url(#goldGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ----------------- FLOATING SACRED MOTIFS / LIGHT PARTICLES ----------------- */}
        {/* Rub el Hizb (8-point Islamic star) floating gently above */}
        <g transform="translate(300, 95) scale(0.9)" opacity="0.85">
          <rect x="-16" y="-16" width="32" height="32" rx="2" fill="none" stroke="url(#goldGradient)" strokeWidth="2.5" />
          <rect x="-16" y="-16" width="32" height="32" rx="2" transform="rotate(45)" fill="none" stroke="url(#goldGradient)" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="5" fill="url(#goldGradient)" />
        </g>

        {/* Subtle glowing sparks */}
        <circle cx="230" cy="120" r="2.5" fill="#FDE68A" opacity="0.75" />
        <circle cx="370" cy="115" r="3" fill="#FDE68A" opacity="0.8" />
        <circle cx="170" cy="155" r="2" fill="#D4AF37" opacity="0.6" />
        <circle cx="430" cy="145" r="2.5" fill="#D4AF37" opacity="0.65" />
        <circle cx="300" cy="65" r="1.5" fill="#FFFBEB" opacity="0.9" />
      </svg>
    </div>
  );
};
