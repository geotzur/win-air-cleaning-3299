import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/lib/data';
import { getAboutImage } from '@/lib/images';
import { Eye, Users, Wind, Scan } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "About Win Air Cleaning | Los Angeles's Trusted HVAC Cleaning Team",
  description:
    'Learn about Win Air Cleaning — NADCA-certified air duct and HVAC cleaning professionals serving Los Angeles since 2014. 3,500+ homes cleaned, 4.9 star rating.',
  openGraph: {
    title: 'About Win Air Cleaning | Los Angeles HVAC Cleaning Experts',
    description: 'NADCA-certified air duct and HVAC cleaning professionals serving Los Angeles since 2014.',
    type: 'website',
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  Users,
  Wind,
  Scan,
};

export default function AboutPage() {
  const about = content.about;
  const aboutImage = getAboutImage();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about/' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading font-extrabold tracking-tight leading-tight text-text-primary" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            {about.headline}
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {aboutImage && (
            <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl">
              <Image
                src={aboutImage}
                alt="About Win Air Cleaning"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
          <div className="space-y-6">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="font-body text-lg leading-relaxed text-text-secondary">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading font-extrabold tracking-tight text-center text-3xl md:text-4xl text-text-primary mb-14">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {about.values.map((value, i) => {
              const Icon = iconMap[value.icon] || Eye;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20" style={{ background: 'linear-gradient(135deg, #8C1F2E 0%, #1A2538 100%)' }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading font-extrabold tracking-tight text-3xl md:text-4xl text-text-light mb-6">
            {content.cta.headline}
          </h2>
          <p className="font-body text-lg text-text-light/80 mb-8">{content.cta.subtext}</p>
          <Link
            href="/contact/"
            className="inline-block rounded-full bg-primary px-8 py-4 font-heading font-extrabold text-text-light transition-colors hover:bg-primary-dark"
          >
            {content.cta.button_text}
          </Link>
        </div>
      </section>
    </>
  );
}
