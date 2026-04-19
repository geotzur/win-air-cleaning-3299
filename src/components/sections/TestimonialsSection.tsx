'use client';

import { getTestimonials } from '@/lib/data';
import { Quote, MapPin, Wind, Star, BadgeCheck } from 'lucide-react';

type Testimonial = {
  text: string;
  author: string;
  location?: string;
  rating?: number;
  service?: string;
};

const testimonials = getTestimonials() as Testimonial[];

const avatarPalettes = [
  { from: '#D93B4D', to: '#8C1F2E', ring: 'rgba(217, 59, 77, 0.35)' },
  { from: '#3578CC', to: '#1A2538', ring: 'rgba(53, 120, 204, 0.35)' },
  { from: '#2CBAB5', to: '#3578CC', ring: 'rgba(44, 186, 181, 0.35)' },
  { from: '#D93B4D', to: '#3578CC', ring: 'rgba(217, 59, 77, 0.3)' },
  { from: '#2CBAB5', to: '#8C1F2E', ring: 'rgba(44, 186, 181, 0.3)' },
  { from: '#8C1F2E', to: '#3578CC', ring: 'rgba(140, 31, 46, 0.3)' },
];

function StarRow({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? 'text-accent fill-accent' : 'text-white/20'}
          strokeWidth={1.5}
        />
      ))}
      <span className="ml-1.5 font-heading font-bold text-[11px] text-white/80 tabular-nums">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function TestimonialCard({
  text,
  author,
  location,
  rating = 5,
  service,
  index,
}: Testimonial & { index: number }) {
  const initials = author
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const palette = avatarPalettes[index % avatarPalettes.length];

  return (
    <article
      className="relative flex-shrink-0 w-[320px] sm:w-[360px] rounded-2xl p-5 border border-white/[0.08] bg-white/[0.04] backdrop-blur-md overflow-hidden group hover:border-accent/40 transition-all duration-300"
      style={{ boxShadow: `0 8px 24px -12px ${palette.ring}` }}
    >
      {/* Gradient corner accent */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${palette.from} 0%, transparent 70%)`,
        }}
      />

      {/* Oversized quote mark */}
      <Quote
        size={56}
        className="absolute top-3 right-3 text-white/[0.06] group-hover:text-accent/20 transition-colors duration-300"
        strokeWidth={1.2}
      />

      {/* Service badge */}
      {service && (
        <div className="relative inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-1 mb-3">
          <Wind size={11} className="text-accent" />
          <span className="font-heading font-semibold text-[10px] uppercase tracking-[0.12em] text-accent">
            {service}
          </span>
        </div>
      )}

      {/* Stars row */}
      <div className="relative mb-3">
        <StarRow rating={rating} />
      </div>

      {/* Testimonial text */}
      <p className="relative font-body text-[14px] leading-relaxed text-white/85 line-clamp-4 mb-5">
        {text}
      </p>

      {/* Author block */}
      <div className="relative flex items-center gap-3 pt-3 border-t border-white/[0.08]">
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-md"
          style={{
            background: `linear-gradient(135deg, ${palette.from}, ${palette.to})`,
          }}
        >
          <span className="font-heading font-extrabold text-xs text-white">
            {initials}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="font-heading font-bold text-sm text-white truncate">
              {author}
            </p>
            <BadgeCheck
              size={13}
              className="text-accent flex-shrink-0"
              strokeWidth={2.5}
            />
          </div>
          {location && (
            <p className="flex items-center gap-1 font-body text-[11px] text-white/55 truncate">
              <MapPin size={10} className="flex-shrink-0" />
              <span className="truncate">{location}</span>
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials];

  return (
    <section className="relative bg-surface-dark py-14 md:py-20 overflow-hidden">
      {/* Layered radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 15% 20%, rgba(217, 59, 77, 0.12) 0%, transparent 45%), radial-gradient(ellipse at 85% 80%, rgba(44, 186, 181, 0.12) 0%, transparent 45%)',
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #FFFFFF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 mb-10 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-accent mb-2">
              CLIENT STORIES
            </p>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
              Real People. Cleaner Air.
            </h2>
          </div>

          {/* Trust signal */}
          <div className="flex items-center gap-4 text-white/70">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-accent fill-accent"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="font-heading text-[11px] uppercase tracking-[0.2em] mt-1">
                <span className="font-bold text-white">4.9/5</span> · Verified reviews
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-center justify-center w-12 h-12 rounded-full border border-accent/40 bg-accent/10">
              <BadgeCheck size={18} className="text-accent" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Row 1 */}
      <div className="relative group mb-4 md:mb-5">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-surface-dark to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-surface-dark to-transparent z-10" />
        <div className="flex gap-4 md:gap-5 animate-marquee-right hover:[animation-play-state:paused] w-max">
          {row1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} {...t} index={i} />
          ))}
        </div>
      </div>

      {/* Row 2 (desktop only) */}
      <div className="relative hidden md:block group">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface-dark to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-dark to-transparent z-10" />
        <div className="flex gap-5 animate-marquee-left hover:[animation-play-state:paused] w-max">
          {row2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} {...t} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
