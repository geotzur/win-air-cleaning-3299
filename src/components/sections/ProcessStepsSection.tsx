'use client';

import { useEffect, useRef } from 'react';
import { content } from '@/lib/data';
import { Phone, Eye, Wind, CheckCircle, type LucideIcon } from 'lucide-react';

const steps = content.process_steps;

const iconMap: Record<string, LucideIcon> = {
  Phone,
  Eye,
  Wind,
  CheckCircle,
};

export default function ProcessStepsSection() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Scrub-style animation on scroll
          const handleScroll = () => {
            const rect = entry.target.getBoundingClientRect();
            const viewH = window.innerHeight;
            const progress = Math.min(
              Math.max((viewH - rect.top) / (rect.height + viewH), 0),
              1
            );
            if (path) {
              path.style.strokeDashoffset = `${length * (1 - progress)}`;
            }
          };
          window.addEventListener('scroll', handleScroll, { passive: true });
          handleScroll();
          return () => window.removeEventListener('scroll', handleScroll);
        }
      },
      { threshold: 0 }
    );

    const section = path.closest('section');
    if (section) observer.observe(section);

    // Also set up scroll listener immediately
    const handleScroll = () => {
      const section2 = path.closest('section');
      if (!section2) return;
      const rect = section2.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = Math.min(
        Math.max((viewH - rect.top) / (rect.height + viewH), 0),
        1
      );
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-surface py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
            OUR PROCESS
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
            Four Simple Steps
          </h2>
        </div>

        {/* Desktop: horizontal with wave */}
        <div className="hidden md:block relative">
          {/* SVG wave connector */}
          <svg
            className="absolute top-[36px] left-0 w-full h-[72px] pointer-events-none"
            viewBox="0 0 1000 72"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M60 36 C200 0, 300 72, 500 36 C700 0, 800 72, 940 36"
              stroke="#3578CC"
              strokeWidth="2"
              strokeOpacity="0.25"
              fill="none"
            />
          </svg>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] || CheckCircle;
              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  {/* Circle with icon */}
                  <div className="w-[72px] h-[72px] rounded-full bg-secondary flex flex-col items-center justify-center mb-5 transition-all duration-300 group-hover:scale-[1.08] group-hover:bg-primary">
                    <Icon size={22} className="text-white mb-0.5" />
                    <span className="font-heading font-extrabold text-xs text-white/80">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative pl-12">
          {/* Vertical line */}
          <div className="absolute left-[35px] top-0 bottom-0 w-[2px] bg-secondary/25" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] || CheckCircle;
              return (
                <div key={i} className="relative group">
                  {/* Circle with icon */}
                  <div className="absolute -left-12 top-0 w-[56px] h-[56px] rounded-full bg-secondary flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-[1.08] group-hover:bg-primary z-10">
                    <Icon size={18} className="text-white mb-0.5" />
                    <span className="font-heading font-extrabold text-[10px] text-white/80">
                      {step.step}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-heading font-bold text-base text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
