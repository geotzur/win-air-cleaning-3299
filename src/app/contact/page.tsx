import type { Metadata } from 'next';
import { content } from '@/lib/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact Win Air Cleaning | Free Estimates in Los Angeles, CA',
  description:
    'Contact Win Air Cleaning for a free, no-obligation air duct & HVAC cleaning estimate in Los Angeles. Call (555) 924-7100 or fill out our form. We respond within 2 hours.',
  openGraph: {
    title: 'Contact Win Air Cleaning | Free Estimates Los Angeles',
    description: 'Get a free estimate for air duct & HVAC cleaning in Los Angeles. We respond within 2 hours.',
    type: 'website',
  },
};

export default function ContactPage() {
  const contact = content.contact;
  const company = content.company;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact/' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading font-extrabold tracking-tight leading-tight text-text-primary" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            {contact.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
            {contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
              <h2 className="font-heading font-extrabold text-2xl text-text-primary mb-6">
                Send Us a Message
              </h2>
              <form action="#" method="POST" className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-text-primary mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-text-primary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-body text-sm font-medium text-text-primary mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block font-body text-sm font-medium text-text-primary mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-text-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    {content.services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-text-primary mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-text-primary placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-8 py-4 font-heading font-extrabold text-text-light transition-colors hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="font-heading font-extrabold text-2xl text-text-primary mb-6">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-extrabold text-text-primary">Address</p>
                      <p className="font-body text-text-secondary">{contact.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-extrabold text-text-primary">Phone</p>
                      <a href="tel:+15559247100" className="font-body text-primary hover:text-primary-dark transition-colors">
                        {company.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-extrabold text-text-primary">Email</p>
                      <a href={`mailto:${company.email}`} className="font-body text-primary hover:text-primary-dark transition-colors">
                        {company.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-extrabold text-text-primary">Hours</p>
                      <p className="font-body text-text-secondary">{contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl border border-border bg-surface overflow-hidden" style={{ height: '280px' }}>
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-10 w-10 text-text-secondary/40 mb-3" />
                    <p className="font-heading font-extrabold text-text-secondary">
                      5847 Wilshire Blvd
                    </p>
                    <p className="font-body text-sm text-text-secondary">
                      Los Angeles, CA 90036
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
