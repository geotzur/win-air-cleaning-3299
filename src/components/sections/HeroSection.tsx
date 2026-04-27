'use client';

import { useEffect, useCallback, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { content } from '@/lib/data';
import { getHeroImage, getImageManifest } from '@/lib/images';
import { Phone, Sparkles, ShieldCheck, Wind, Leaf, Star } from 'lucide-react';
import Image from 'next/image';

const hero = content.home.hero;
const heroImage = getHeroImage();
const heroPortrait = getImageManifest()?.hero_portrait ?? null;

export default function HeroSection() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: { value: 80 },
        color: { value: ['#2CBAB5', '#FFFFFF', '#FDE8EB'] },
        opacity: { value: { min: 0.15, max: 0.55 } },
        size: { value: { min: 1, max: 2.5 } },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'top' as const,
          outModes: { default: 'out' as const },
        },
        links: { enable: false },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative min-h-[100svh] md:min-h-screen flex items-center overflow-hidden">
      {/* Hero background image — desktop */}
      {heroImage && (
        <div className="absolute inset-0 -z-30 hidden md:block">
          <Image
            src={heroImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center hero-kenburns"
            priority
          />
        </div>
      )}

      {/* Hero background image — mobile (portrait variant when available, fall back to landscape) */}
      <div className="absolute inset-0 -z-30 md:hidden">
        {(heroPortrait || heroImage) && (
          <Image
            src={heroPortrait || heroImage!}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center hero-kenburns-mobile"
            priority
          />
        )}
      </div>

      {/* Cinematic gradient overlays — readability + brand tint */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            'linear-gradient(115deg, rgba(10,16,28,0.78) 0%, rgba(10,16,28,0.55) 42%, rgba(10,16,28,0.25) 70%, rgba(10,16,28,0.55) 100%)',
        }}
      />
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 18% 28%, rgba(217,59,77,0.18) 0%, transparent 55%), radial-gradient(ellipse at 82% 75%, rgba(44,186,181,0.22) 0%, transparent 60%)',
        }}
      />

      {/* Bottom fade-to-page */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 -z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(250,251,253,0.65) 60%, var(--color-background) 100%)',
        }}
      />

      {/* Subtle floating particles — clean-air feel */}
      <Particles
        id="hero-particles"
        className="absolute inset-0 -z-10"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
      />

      {/* Decorative concentric rings */}
      <svg
        className="absolute -top-32 -right-32 w-[460px] h-[460px] md:w-[560px] md:h-[560px] pointer-events-none opacity-40 mix-blend-screen"
        viewBox="0 0 480 480"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="240" cy="240" r="120" stroke="#FDE8EB" strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="240" cy="240" r="180" stroke="#FDE8EB" strokeOpacity="0.22" strokeWidth="1" />
        <circle cx="240" cy="240" r="230" stroke="#FDE8EB" strokeOpacity="0.14" strokeWidth="1" />
      </svg>

      <svg
        className="absolute -bottom-28 -left-28 w-[380px] h-[380px] md:w-[460px] md:h-[460px] pointer-events-none opacity-50 mix-blend-screen"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="100" stroke="#2CBAB5" strokeOpacity="0.4" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" stroke="#2CBAB5" strokeOpacity="0.25" strokeWidth="1" />
        <circle cx="200" cy="200" r="190" stroke="#2CBAB5" strokeOpacity="0.15" strokeWidth="1" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-28 pb-20 md:pt-28 md:pb-28 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left column — copy */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-4 py-2 mb-6 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-70" />
                <span className="relative w-2 h-2 rounded-full bg-accent" />
              </span>
              <Sparkles size={13} className="text-accent" />
              <span className="font-heading text-[12px] sm:text-sm font-medium text-white/95 tracking-wide">
                NADCA-Certified · Los Angeles
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] text-white mb-6 tracking-tight">
              Breathe{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-[#7DE0DC] to-[#FDE8EB] bg-clip-text text-transparent">
                  Cleaner Air
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 4 8 Q 75 2, 150 6 T 296 4"
                    stroke="url(#heroUnderline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="heroUnderline" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#2CBAB5" />
                      <stop offset="100%" stopColor="#D93B4D" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              Starting Today
            </h1>

            <p className="font-body font-normal text-base sm:text-lg text-white/85 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <a
                href="/contact/"
                className="group relative rounded-full bg-primary text-white h-14 px-8 font-heading font-semibold uppercase text-sm tracking-wide inline-flex items-center justify-center gap-2 shadow-[0_12px_32px_-8px_rgba(217,59,77,0.65)] hover:bg-primary-dark hover:shadow-[0_16px_40px_-8px_rgba(217,59,77,0.8)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="relative">{hero.cta_primary}</span>
                <Sparkles size={16} className="relative" />
              </a>
              <a
                href={`tel:${content.company.phone}`}
                className="group rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white h-14 px-7 font-heading font-semibold uppercase text-sm tracking-wide inline-flex items-center justify-center gap-2 hover:bg-white hover:text-text-primary transition-all duration-300 w-full sm:w-auto"
              >
                <Phone size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                {hero.cta_secondary}
              </a>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-[0.18em] text-white/85">
                <ShieldCheck size={14} className="text-accent" />
                NADCA Certified
              </div>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/30" />
              <div className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-[0.18em] text-white/85">
                <Star size={14} className="text-[#FDE8EB] fill-[#FDE8EB]" />
                Insured &amp; Bonded
              </div>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/30" />
              <div className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-[0.18em] text-white/85">
                <Leaf size={14} className="text-accent" />
                Free Estimates
              </div>
            </div>
          </div>

          {/* Right column — premium glass review card */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-[460px]">
              {/* Floating glass card — review */}
              <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-7 shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)] hero-card-float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
                    <Wind size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={13} className="text-[#FFD166] fill-[#FFD166]" />
                      ))}
                    </div>
                    <div className="font-heading font-semibold text-white text-sm">5.0 · 200+ Reviews</div>
                  </div>
                </div>
                <p className="font-body text-white/90 text-[15px] leading-relaxed mb-4">
                  &ldquo;Came in masked, laid out tarps, and left the place spotless. The dust collected was eye-opening — air feels noticeably fresher.&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/15">
                  <div>
                    <div className="font-heading font-semibold text-white text-sm">Maya R.</div>
                    <div className="font-body text-white/60 text-xs">Pasadena · Verified</div>
                  </div>
                  <div className="text-xs font-heading uppercase tracking-[0.18em] text-accent">Last Week</div>
                </div>
              </div>

              {/* Floating mini-stat: dust removed */}
              <div className="absolute -top-6 -left-8 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 px-5 py-3 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)] hero-card-float-2">
                <div className="text-[10px] font-heading uppercase tracking-[0.18em] text-text-secondary mb-0.5">
                  Avg. Dust Removed
                </div>
                <div className="font-heading font-extrabold text-[24px] text-text-primary leading-none">
                  4.2 <span className="text-base text-primary">lbs</span>
                </div>
              </div>

              {/* Floating mini-stat: response time */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-secondary backdrop-blur-md px-5 py-3 shadow-[0_12px_30px_-8px_rgba(44,186,181,0.55)] hero-card-float">
                <div className="text-[10px] font-heading uppercase tracking-[0.18em] text-white/85 mb-0.5">
                  Same-Week
                </div>
                <div className="font-heading font-extrabold text-[24px] text-white leading-none">Booking</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] font-heading uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/70 to-transparent hero-scroll-cue" />
        </div>
      </div>
    </section>
  );
}
