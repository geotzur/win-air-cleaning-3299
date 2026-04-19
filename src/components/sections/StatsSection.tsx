'use client';

import { useEffect, useRef } from 'react';
import { content } from '@/lib/data';
import { Clock, Home, Star, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const stats = content.home.stats;

const statIcons: LucideIcon[] = [Clock, Home, Star, ShieldCheck];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateStats(section);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function animateStats(container: HTMLElement) {
    // Animate ring stroke-dashoffset
    const rings = container.querySelectorAll<SVGCircleElement>('.stat-ring');
    rings.forEach((ring) => {
      const circumference = 2 * Math.PI * 46;
      ring.style.strokeDasharray = `${circumference}`;
      ring.style.strokeDashoffset = `${circumference}`;
      ring.style.transition = 'stroke-dashoffset 1.4s ease-out';
      requestAnimationFrame(() => {
        ring.style.strokeDashoffset = '0';
      });
    });

    // Count-up numbers
    const numberEls = container.querySelectorAll<HTMLElement>('.stat-number');
    numberEls.forEach((el) => {
      const target = el.getAttribute('data-target') || '';
      const numericPart = parseFloat(target.replace(/[^0-9.]/g, ''));
      const suffix = target.replace(/[0-9.,]/g, '');
      const hasDecimal = target.includes('.');
      const duration = 1400;
      const startTime = performance.now();

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = numericPart * eased;
        if (hasDecimal) {
          el.textContent = current.toFixed(1) + suffix;
        } else {
          el.textContent = Math.round(current).toLocaleString() + suffix;
        }
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  return (
    <section ref={sectionRef} className="bg-surface-dark py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, i) => {
            const Icon = statIcons[i] || ShieldCheck;
            return (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <div className="relative w-[72px] h-[72px] md:w-[96px] md:h-[96px] flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 96 96" fill="none">
                  <circle
                    className="stat-ring transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(44,186,181,0.5)]"
                    cx="48"
                    cy="48"
                    r="46"
                    stroke={i % 2 === 0 ? '#D93B4D' : '#3578CC'}
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <span
                  className="stat-number font-heading font-extrabold text-[28px] text-accent transition-colors duration-300 group-hover:text-white"
                  data-target={stat.value}
                >
                  {stat.value}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-3">
                <Icon size={13} className="text-text-secondary/60" />
                <span className="font-heading font-light text-[11px] uppercase tracking-widest text-text-secondary text-center">
                  {stat.label}
                </span>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
