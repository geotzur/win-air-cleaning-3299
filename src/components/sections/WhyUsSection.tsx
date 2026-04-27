'use client';

import { content } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const items = content.home.why_us;

const INK = '#1A2538';
const ACCENT = '#2CBAB5';
const PRIMARY = '#D93B4D';

/* ───── Branded SVG icons (viewBox 48×48, line-art duotone, brand colors) ───── */

function IconCameraReport() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-7 h-7">
      {/* Frame */}
      <rect x="7" y="11" width="34" height="26" rx="3"
            stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Shutter */}
      <circle cx="24" cy="24" r="7.5"
              stroke={INK} strokeWidth="2" />
      <circle cx="24" cy="24" r="3.5" fill={ACCENT} />
      {/* Lens flare */}
      <circle cx="21" cy="21" r="1.2" fill="#FAFBFD" />
      {/* Top corner camera pip */}
      <rect x="34" y="8.5" width="6" height="3" rx="1" fill={INK} />
      {/* BEFORE/AFTER divider line */}
      <path d="M 24 13 V 35" stroke={PRIMARY} strokeWidth="1.5"
            strokeDasharray="2 2" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}

function IconCertified() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-7 h-7">
      {/* Medal circle */}
      <circle cx="24" cy="20" r="10"
              stroke={INK} strokeWidth="2" />
      <circle cx="24" cy="20" r="6" fill={ACCENT} opacity="0.18" />
      {/* Inner star/check */}
      <path d="M 19 20 l 3.5 3.5 L 29 17"
            stroke={PRIMARY} strokeWidth="2.4"
            strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Ribbons */}
      <path d="M 17 28 L 14 41 L 19 38 L 21 42 L 24 30"
            stroke={INK} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M 31 28 L 34 41 L 29 38 L 27 42 L 24 30"
            stroke={INK} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function IconFullSystem() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-7 h-7">
      {/* Central HVAC unit */}
      <rect x="18" y="19" width="12" height="10" rx="1.5"
            stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 20 22 h 8 M 20 25 h 8"
            stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
      {/* Duct branches going 4 directions */}
      <path d="M 24 19 V 10" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M 24 29 V 38" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M 18 24 H 9"  stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <path d="M 30 24 H 39" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      {/* End vents (filled accent) */}
      <rect x="21" y="6"  width="6" height="3" rx="1" fill={ACCENT} />
      <rect x="21" y="39" width="6" height="3" rx="1" fill={ACCENT} />
      <rect x="5"  y="22" width="3" height="4" rx="1" fill={ACCENT} />
      <rect x="40" y="22" width="3" height="4" rx="1" fill={ACCENT} />
      {/* Airflow checks */}
      <circle cx="24" cy="24" r="1.6" fill={PRIMARY} />
    </svg>
  );
}

function IconPriceTag() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="w-7 h-7">
      {/* Tag shape */}
      <path d="M 7 24 L 24 7 L 41 7 L 41 24 L 24 41 Z"
            stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hole */}
      <circle cx="34" cy="14" r="2.2" stroke={INK} strokeWidth="2" fill="#FAFBFD" />
      {/* Dollar */}
      <path d="M 23 19 c -2 0 -3 1.4 -3 3 s 1.3 2.6 3 3 s 3 1.4 3 3 s -1 3 -3 3"
            stroke={PRIMARY} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M 23 16 V 34" stroke={PRIMARY} strokeWidth="2.2" strokeLinecap="round" />
      {/* No-surprise sparkle */}
      <path d="M 14 32 l 1 2 l 2 1 l -2 1 l -1 2 l -1 -2 l -2 -1 l 2 -1 z"
            fill={ACCENT} />
    </svg>
  );
}

const iconByTitleIndex = [IconCameraReport, IconCertified, IconFullSystem, IconPriceTag];

const cardAccents = [PRIMARY, ACCENT, '#3578CC', PRIMARY];

export default function WhyUsSection() {
  return (
    <section className="relative bg-background py-12 md:py-20 overflow-hidden">
      {/* Soft radial backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 85% 10%, rgba(44,186,181,0.08) 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, rgba(217,59,77,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
            WHY WIN AIR
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
            The Clean Air Difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {items.map((item: { title: string; description: string; icon: string }, i: number) => {
            const Icon = iconByTitleIndex[i] || iconByTitleIndex[0];
            const accent = cardAccents[i % cardAccents.length];
            return (
              <article
                key={i}
                className="group relative rounded-2xl border border-border bg-white p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-transparent overflow-hidden"
              >
                {/* Accent corner glow on hover */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`, opacity: 0 }}
                />
                {/* Left accent bar */}
                <span
                  className="absolute left-0 top-7 h-8 w-1 rounded-r-full transition-all duration-300 group-hover:h-12"
                  style={{ backgroundColor: accent }}
                />

                {/* Icon container */}
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-[1.05] group-hover:rotate-[-3deg]"
                  style={{
                    background: `linear-gradient(135deg, ${accent}12, ${accent}06)`,
                    border: `1px solid ${accent}30`,
                  }}
                >
                  <Icon />
                </div>

                <h3 className="font-heading font-bold text-lg md:text-xl text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm md:text-[15px] text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                <span
                  className="inline-flex items-center gap-1 mt-4 text-xs font-heading font-semibold uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: accent }}
                >
                  Learn more <ArrowRight size={12} />
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
