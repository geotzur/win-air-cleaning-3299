'use client';

import { useState, useMemo } from 'react';
import { content } from '@/lib/data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Take first 2 FAQ items from first 3 services (6 total)
  const faqs = useMemo(() => {
    const items: { question: string; answer: string }[] = [];
    const serviceSlice = content.services.slice(0, 3);
    for (const service of serviceSlice) {
      items.push(...service.faq.slice(0, 2));
    }
    return items;
  }, []);

  return (
    <section className="bg-surface-dark py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <p className="font-heading font-medium text-xs uppercase tracking-[0.2em] text-accent mb-3">
            COMMON QUESTIONS
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ list */}
        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="relative">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full text-left py-6 pl-16 pr-4 relative transition-all duration-300 ${
                    isOpen ? 'border-l-2 border-accent' : 'border-l-2 border-transparent'
                  }`}
                >
                  {/* Ghost number */}
                  <span
                    className={`absolute left-0 top-3 font-heading font-light text-[48px] leading-none transition-opacity duration-300 ${
                      isOpen ? 'text-white/25' : 'text-white/[0.06]'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="font-heading font-semibold text-base text-white block">
                    {faq.question}
                  </span>
                </button>

                {/* Answer with slide-down */}
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="pl-16 pr-4 pb-6">
                    <p className="font-body text-sm leading-relaxed text-text-secondary/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {i < faqs.length - 1 && (
                  <div className="h-px bg-white/[0.06] ml-16" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
