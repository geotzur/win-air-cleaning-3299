'use client';

import { useEffect, useCallback, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { content } from '@/lib/data';
import { getHeroImage } from '@/lib/images';
import Image from 'next/image';

const hero = content.home.hero;
const heroImage = getHeroImage();

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto max-w-[520px] mx-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3578CC" />
          <stop offset="50%" stopColor="#2CBAB5" />
          <stop offset="100%" stopColor="#D93B4D" />
        </linearGradient>
        <linearGradient id="coreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F0F4F7" />
        </linearGradient>
        <linearGradient id="ventGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A2538" />
          <stop offset="100%" stopColor="#3578CC" />
        </linearGradient>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2CBAB5" stopOpacity="0.35" />
          <stop offset="70%" stopColor="#2CBAB5" stopOpacity="0" />
        </radialGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feOffset dy="4" in="b" result="o" />
          <feComposite in2="SourceAlpha" operator="in" result="s" />
          <feColorMatrix in="s" values="0 0 0 0 0.1 0 0 0 0 0.14 0 0 0 0 0.22 0 0 0 0.25 0" />
          <feBlend in="SourceGraphic" />
        </filter>
      </defs>

      {/* Teal glow behind core */}
      <circle cx="260" cy="260" r="210" fill="url(#glowGradient)" />

      {/* Outer breath arc - primary */}
      <g className="hero-orbit-slow">
        <circle
          cx="260"
          cy="260"
          r="210"
          fill="none"
          stroke="url(#ringGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          opacity="0.55"
        />
      </g>

      {/* Middle dashed orbit */}
      <g className="hero-orbit-reverse">
        <circle
          cx="260"
          cy="260"
          r="170"
          fill="none"
          stroke="#3578CC"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.4"
        />
      </g>

      {/* Flowing breeze arcs */}
      <g opacity="0.9">
        <path
          d="M 60 220 Q 160 190, 220 230"
          stroke="#2CBAB5"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="hero-breeze-1"
        />
        <path
          d="M 40 300 Q 140 270, 200 320"
          stroke="#3578CC"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
          className="hero-breeze-2"
        />
        <path
          d="M 320 180 Q 400 210, 470 180"
          stroke="#D93B4D"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
          className="hero-breeze-3"
        />
        <path
          d="M 340 360 Q 420 340, 480 370"
          stroke="#2CBAB5"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.65"
          className="hero-breeze-1"
        />
      </g>

      {/* Central glass core */}
      <g filter="url(#softShadow)">
        <circle cx="260" cy="260" r="118" fill="url(#coreGradient)" />
        <circle cx="260" cy="260" r="118" fill="none" stroke="#D8DEE6" strokeWidth="1" />
      </g>

      {/* Inner accent ring */}
      <circle
        cx="260"
        cy="260"
        r="96"
        fill="none"
        stroke="#FDE8EB"
        strokeWidth="2"
      />

      {/* HVAC vent grill */}
      <g transform="translate(204 214)">
        <rect x="0" y="0" width="112" height="92" rx="12" fill="url(#ventGradient)" />
        <rect x="8" y="10" width="96" height="6" rx="3" fill="#FAFBFD" opacity="0.85" />
        <rect x="8" y="24" width="96" height="6" rx="3" fill="#FAFBFD" opacity="0.7" />
        <rect x="8" y="38" width="96" height="6" rx="3" fill="#FAFBFD" opacity="0.55" />
        <rect x="8" y="52" width="96" height="6" rx="3" fill="#FAFBFD" opacity="0.4" />
        <rect x="8" y="66" width="96" height="6" rx="3" fill="#FAFBFD" opacity="0.25" />
        {/* Power indicator */}
        <circle cx="100" cy="82" r="3" fill="#2CBAB5" />
      </g>

      {/* Clean-air wave coming out of vent */}
      <g opacity="0.9" className="hero-breeze-2">
        <path
          d="M 260 196 C 244 180, 240 158, 260 144 C 280 130, 278 110, 262 94"
          stroke="#2CBAB5"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 240 200 C 220 182, 214 158, 234 142"
          stroke="#3578CC"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.75"
        />
        <path
          d="M 284 200 C 302 184, 306 162, 288 148"
          stroke="#D93B4D"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
      </g>

      {/* Floating particles — clean sparkles */}
      <g className="hero-float-1">
        <circle cx="120" cy="140" r="4" fill="#2CBAB5" />
        <circle cx="400" cy="120" r="3" fill="#3578CC" />
        <circle cx="440" cy="300" r="5" fill="#D93B4D" opacity="0.7" />
      </g>
      <g className="hero-float-2">
        <circle cx="90" cy="380" r="3" fill="#3578CC" />
        <circle cx="410" cy="420" r="4" fill="#2CBAB5" />
        <circle cx="150" cy="450" r="3" fill="#D93B4D" opacity="0.6" />
      </g>

      {/* Plus-shaped sparkles */}
      <g className="hero-float-2" opacity="0.6">
        <path d="M 80 260 h10 M 85 255 v10" stroke="#2CBAB5" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 430 220 h10 M 435 215 v10" stroke="#3578CC" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 380 450 h10 M 385 445 v10" stroke="#D93B4D" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Leaf/freshness icons */}
      <g className="hero-float-1" opacity="0.85">
        <path
          d="M 100 80 Q 116 70, 128 84 Q 118 100, 100 92 Z"
          fill="#2CBAB5"
          opacity="0.6"
        />
        <path d="M 108 80 Q 114 86, 118 94" stroke="#FAFBFD" strokeWidth="1" fill="none" />
      </g>

      {/* Small certification badge */}
      <g transform="translate(358 332)" filter="url(#softShadow)">
        <circle cx="30" cy="30" r="30" fill="#FFFFFF" stroke="#D93B4D" strokeWidth="2" />
        <path
          d="M 20 30 l6 6 l14 -14"
          stroke="#D93B4D"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="30"
          y="54"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fill="#1A2538"
          fontFamily="Urbanist, sans-serif"
          letterSpacing="1"
        >
          NADCA
        </text>
      </g>
    </svg>
  );
}

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
        number: { value: 60 },
        color: { value: '#2CBAB5' },
        opacity: { value: 0.28 },
        size: { value: { min: 1, max: 2 } },
        move: {
          enable: true,
          speed: 0.4,
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
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      {heroImage && (
        <div className="absolute inset-0 -z-30">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
      )}

      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(ellipse at 18% 22%, #FDE8EB 0%, transparent 50%), radial-gradient(ellipse at 82% 80%, #E4ECF7 0%, transparent 60%), rgba(250,251,253,0.6)',
        }}
      />

      {/* Decorative concentric rings */}
      <svg
        className="absolute -top-24 -right-24 w-[420px] h-[420px] md:w-[480px] md:h-[480px] pointer-events-none"
        viewBox="0 0 480 480"
        fill="none"
      >
        <circle cx="240" cy="240" r="120" stroke="#D93B4D" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="240" cy="240" r="180" stroke="#D93B4D" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx="240" cy="240" r="230" stroke="#D93B4D" strokeOpacity="0.04" strokeWidth="1" />
      </svg>

      <svg
        className="absolute -bottom-24 -left-24 w-[360px] h-[360px] md:w-[400px] md:h-[400px] pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="100" stroke="#3578CC" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" stroke="#3578CC" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx="200" cy="200" r="190" stroke="#3578CC" strokeOpacity="0.04" strokeWidth="1" />
      </svg>

      <Particles
        id="hero-particles"
        className="absolute inset-0 -z-10"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 md:pt-24 md:pb-20 w-full">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Left column — copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/75 backdrop-blur-sm px-5 py-2 mb-7 shadow-sm">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="font-heading text-sm font-medium text-text-primary">
                NADCA-Certified Air Duct Cleaning in Los Angeles
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-text-primary mb-6">
              Breathe <span className="gradient-text">Cleaner Air</span> Starting Today
            </h1>

            <p className="font-body font-normal text-base sm:text-lg text-text-secondary max-w-lg mx-auto lg:mx-0 mb-8">
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="/contact/"
                className="rounded-full bg-primary text-white h-14 px-8 font-heading font-semibold uppercase text-sm tracking-wide inline-flex items-center justify-center hover:bg-primary-dark transition-colors animate-cta-pulse shadow-md w-full sm:w-auto"
              >
                {hero.cta_primary}
              </a>
              <a
                href={`tel:${content.company.phone}`}
                className="rounded-full border-2 border-primary text-primary h-14 px-8 font-heading font-semibold uppercase text-sm tracking-wide inline-flex items-center justify-center hover:bg-primary hover:text-white transition-colors w-full sm:w-auto"
              >
                {hero.cta_secondary}
              </a>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs font-heading uppercase tracking-[0.15em] text-text-secondary">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> NADCA Certified
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> 10+ Years
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Free Estimates
              </span>
            </div>
          </div>

          {/* Right column — illustration */}
          <div className="relative">
            <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] lg:max-w-[520px]">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
