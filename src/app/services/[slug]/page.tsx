import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getServices, getService, getAreas } from '@/lib/data';
import { getServiceImage } from '@/lib/images';
import { ChevronRight } from 'lucide-react';
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  const services = getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.name} in Los Angeles, CA`,
    description: `${service.short_description} Serving Los Angeles, Santa Monica, Burbank, Pasadena & more. NADCA-certified. Call (555) 924-7100 for a free estimate.`,
    openGraph: {
      title: `${service.name} in Los Angeles, CA | Win Air Cleaning`,
      description: service.short_description,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="font-heading text-2xl text-text-secondary">Service not found.</p>
      </div>
    );
  }

  const areas = getAreas();
  const image = getServiceImage(service.slug);

  return (
    <>
      <ServiceJsonLd
        serviceName={service.name}
        serviceDescription={service.short_description}
      />
      <FAQPageJsonLd faqs={service.faq} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services/' },
          { name: service.name, href: `/services/${service.slug}/` },
        ]}
      />

      {/* Bold Type Hero */}
      <section className="relative overflow-hidden py-24 md:py-32" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(53,120,204,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(44,186,181,0.06) 0%, transparent 50%), #FDE8EB',
      }}>
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-body text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services/" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-text-primary">{service.name}</span>
          </nav>

          <h1
            className="font-heading font-extrabold tracking-tight leading-tight text-text-primary max-w-4xl"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            {service.name}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg text-text-secondary leading-relaxed">
            {service.short_description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-block rounded-full bg-primary px-8 py-4 font-heading font-extrabold text-text-light transition-colors hover:bg-primary-dark"
            >
              Get Free Estimate
            </Link>
            <a
              href="tel:+15559247100"
              className="inline-block rounded-full border-2 border-primary px-8 py-4 font-heading font-extrabold text-primary transition-colors hover:bg-primary hover:text-text-light"
            >
              Call (555) 924-7100
            </a>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="bg-surface-dark py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {service.features.slice(0, 4).map((feature, i) => (
              <div key={i} className="font-body text-sm text-text-light/90">
                <span className="block font-heading font-extrabold text-accent text-lg mb-1">{String(i + 1).padStart(2, '0')}</span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-extrabold tracking-tight text-2xl md:text-3xl text-text-primary mb-8">
                About This Service
              </h2>
              <div className="space-y-5">
                {service.full_description.map((p, i) => (
                  <p key={i} className="font-body text-text-secondary leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            {image && (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={service.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading font-extrabold tracking-tight text-2xl md:text-3xl text-text-primary mb-12 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-light font-heading font-extrabold text-primary text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-body text-text-primary leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading font-extrabold tracking-tight text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-surface p-6"
              >
                <summary className="cursor-pointer list-none font-heading font-extrabold text-text-primary flex items-center justify-between">
                  {item.question}
                  <ChevronRight className="h-5 w-5 text-text-secondary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 font-body text-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Areas */}
      <section className="bg-surface py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading font-extrabold tracking-tight text-2xl md:text-3xl text-text-primary mb-8">
            Available in These Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}/${service.slug}/`}
                className="group flex items-center justify-between rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-md"
              >
                <span className="font-heading font-extrabold text-text-primary group-hover:text-primary transition-colors">
                  {area.name}
                </span>
                <ChevronRight className="h-4 w-4 text-text-secondary group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
