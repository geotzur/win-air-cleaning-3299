'use client';

import { useEffect, useCallback, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { content } from '@/lib/data';

const hero = content.home.hero;
const stats = content.home.stats;

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
        color: { value: '#2CBAB5' },
        opacity: { value: 0.3 },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, #FDE8EB 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, #E4ECF7 0%, transparent 60%), #FAFBFD',
        }}
      />

      {/* Decorative concentric rings top-right */}
      <svg
        className="absolute -top-24 -right-24 w-[480px] h-[480px] opacity-100 pointer-events-none"
        viewBox="0 0 480 480"
        fill="none"
      >
        <circle cx="240" cy="240" r="120" stroke="#D93B4D" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="240" cy="240" r="180" stroke="#D93B4D" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx="240" cy="240" r="230" stroke="#D93B4D" strokeOpacity="0.04" strokeWidth="1" />
      </svg>

      {/* Decorative concentric rings bottom-left */}
      <svg
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] opacity-100 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="100" stroke="#D93B4D" strokeOpacity="0.08" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" stroke="#D93B4D" strokeOpacity="0.06" strokeWidth="1" />
        <circle cx="200" cy="200" r="190" stroke="#D93B4D" strokeOpacity="0.04" strokeWidth="1" />
      </svg>

      {/* Particles */}
      <Particles
        id="hero-particles"
        className="absolute inset-0 -z-10"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 backdrop-blur-sm px-5 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-heading text-sm font-medium text-text-primary">
            {hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-[40px] md:text-[68px] leading-[1.05] text-text-primary mb-6">
          Breathe <span className="gradient-text">Cleaner Air</span> Starting Today
        </h1>

        {/* Subheadline */}
        <p className="font-body font-normal text-lg text-text-secondary max-w-lg mx-auto mb-10">
          {hero.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="/contact/"
            className="rounded-full bg-primary text-white h-14 px-8 font-heading font-semibold uppercase text-sm tracking-wide inline-flex items-center justify-center hover:bg-primary-dark transition-colors animate-cta-pulse"
          >
            {hero.cta_primary}
          </a>
          <a
            href={`tel:${content.company.phone}`}
            className="rounded-full border-2 border-primary text-primary h-14 px-8 font-heading font-semibold uppercase text-sm tracking-wide inline-flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            {hero.cta_secondary}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="relative w-[72px] h-[72px] md:w-[96px] md:h-[96px] flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 96 96"
                  fill="none"
                >
                  <circle
                    cx="48"
                    cy="48"
                    r="46"
                    stroke={i % 2 === 0 ? '#D93B4D' : '#3578CC'}
                    strokeWidth="2"
                    strokeOpacity="0.25"
                    className="transition-all duration-300 group-hover:stroke-[#2CBAB5] group-hover:opacity-80"
                    style={{ filter: 'none' }}
                  />
                </svg>
                <span className="font-heading font-extrabold text-lg md:text-xl text-accent transition-colors duration-300 group-hover:text-white">
                  {stat.value}
                </span>
              </div>
              <span className="font-heading font-light text-[11px] uppercase tracking-widest text-text-secondary mt-2 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
