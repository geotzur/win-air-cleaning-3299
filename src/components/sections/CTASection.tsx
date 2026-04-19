import { getCtaImage } from '@/lib/images';
import Image from 'next/image';
import { Phone, ShieldCheck, Clock, Star } from 'lucide-react';

const ctaImage = getCtaImage();

export default function CTASection() {
  return (
    <section className="relative">
      {/* SVG wave divider */}
      <div className="relative -mb-px">
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 96V40C240 80 480 0 720 40C960 80 1200 0 1440 40V96H0Z"
            fill="#F0F4F7"
          />
        </svg>
      </div>

      {/* Gradient background with image */}
      <div className="relative py-12 md:py-20 lg:py-28 overflow-hidden">
        {ctaImage && (
          <div className="absolute inset-0">
            <Image
              src={ctaImage}
              alt=""
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(140,31,46,0.88) 0%, rgba(26,37,56,0.92) 100%)',
              }}
            />
          </div>
        )}
        {!ctaImage && (
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #8C1F2E 0%, #1A2538 100%)',
            }}
          />
        )}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Whisper label */}
          <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-accent mb-4">
            GET STARTED
          </p>

          {/* Headline */}
          <h2 className="font-heading font-extrabold text-[36px] md:text-[44px] leading-tight text-white mb-5">
            Breathe <span className="gradient-text">Cleaner</span> Air Today
          </h2>

          {/* Subtext */}
          <p className="font-body text-base text-white/70 max-w-lg mx-auto mb-10">
            Contact Win Air Cleaning today for a free, no-obligation estimate.
            We respond within 2 hours.
          </p>

          {/* CTA button */}
          <a
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white h-14 px-10 font-heading font-semibold uppercase text-sm tracking-wide hover:bg-primary-dark transition-colors animate-cta-pulse"
          >
            <ShieldCheck size={18} />
            Get My Free Quote
          </a>

          {/* Phone number */}
          <p className="mt-6">
            <a
              href="tel:5559247100"
              className="inline-flex items-center gap-2 font-heading text-white tracking-wide text-lg hover:text-accent transition-colors"
            >
              <Phone size={18} />
              (555) 924-7100
            </a>
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-white/50">
            <span className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider">
              <Clock size={14} className="text-accent/70" /> 2-Hour Response
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider">
              <Star size={14} className="text-accent/70" /> 4.9 Star Rating
            </span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider">
              <ShieldCheck size={14} className="text-accent/70" /> NADCA Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
