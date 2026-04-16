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

      {/* Gradient background */}
      <div
        className="py-12 md:py-20 lg:py-28"
        style={{
          background: 'linear-gradient(135deg, #8C1F2E 0%, #1A2538 100%)',
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
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
            className="inline-flex items-center justify-center rounded-full bg-primary text-white h-14 px-10 font-heading font-semibold uppercase text-sm tracking-wide hover:bg-primary-dark transition-colors animate-cta-pulse"
          >
            Get My Free Quote
          </a>

          {/* Phone number */}
          <p className="mt-6">
            <a
              href="tel:5559247100"
              className="font-heading text-white tracking-wide text-lg hover:text-accent transition-colors"
            >
              (555) 924-7100
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
