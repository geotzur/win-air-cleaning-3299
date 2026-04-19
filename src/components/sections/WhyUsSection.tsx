'use client';

import { content } from '@/lib/data';
import { Eye, Award, Scan, DollarSign, ArrowRight, type LucideIcon } from 'lucide-react';

const items = content.home.why_us;

const iconMap: Record<string, LucideIcon> = {
  Eye,
  Award,
  Scan,
  DollarSign,
};

export default function WhyUsSection() {
  return (
    <section className="bg-background py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-text-secondary mb-3">
            WHY WIN AIR
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-text-primary">
            The Clean Air Difference
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || Eye;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:border-secondary hover:border-2 hover:bg-surface"
              >
                {/* Icon container */}
                <div className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-[1.15] group-hover:border-secondary">
                  <Icon size={28} className="text-secondary" />
                </div>

                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-3">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-heading font-semibold text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={12} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
