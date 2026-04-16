'use client';

import { getTestimonials } from '@/lib/data';

const testimonials = getTestimonials();

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="#2CBAB5" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
    </svg>
  );
}

function TestimonialChip({ text, author }: { text: string; author: string }) {
  return (
    <div className="flex-shrink-0 w-[320px] rounded-full px-6 py-4 border border-white/[0.08] bg-white/[0.06] backdrop-blur-sm">
      <div className="flex gap-0.5 mb-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="font-body text-sm text-white/70 line-clamp-2 mb-1">{text}</p>
      <p className="font-heading text-xs text-text-secondary">{author}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  // Duplicate for seamless loop
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials];

  return (
    <section className="bg-surface-dark py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-accent mb-3">
          CLIENT STORIES
        </p>
        <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
          What Our Clients Say
        </h2>
      </div>

      {/* Row 1 - scrolls right */}
      <div className="group mb-4">
        <div className="flex gap-4 animate-marquee-right hover:[animation-play-state:paused] w-max">
          {row1.map((t, i) => (
            <TestimonialChip key={`r1-${i}`} text={t.text} author={t.author} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls left (hidden on mobile) */}
      <div className="hidden md:block group">
        <div className="flex gap-4 animate-marquee-left hover:[animation-play-state:paused] w-max">
          {row2.map((t, i) => (
            <TestimonialChip key={`r2-${i}`} text={t.text} author={t.author} />
          ))}
        </div>
      </div>
    </section>
  );
}
