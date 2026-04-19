import type { Metadata } from 'next';
import { getTestimonials } from '@/lib/data';
import { Star } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Customer Reviews | Win Air Cleaning Los Angeles',
  description:
    'Read real reviews from Los Angeles homeowners and businesses about Win Air Cleaning. 4.9 star rating, 127+ reviews. See why LA trusts us for air duct & HVAC cleaning.',
  openGraph: {
    title: 'Customer Reviews | Win Air Cleaning Los Angeles',
    description: 'Real reviews from Los Angeles homeowners and businesses about our air duct & HVAC cleaning services.',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  const testimonials = getTestimonials();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Testimonials', href: '/testimonials/' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading font-extrabold tracking-tight leading-tight text-text-primary" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            What Our Customers Say
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
            Real reviews from Los Angeles homeowners and businesses we have served.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border bg-surface p-8 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-body text-text-primary leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="font-heading font-extrabold text-text-primary">{t.author}</p>
                  <p className="font-body text-sm text-text-secondary">{t.location}</p>
                  <p className="font-body text-xs text-primary mt-1">{t.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
