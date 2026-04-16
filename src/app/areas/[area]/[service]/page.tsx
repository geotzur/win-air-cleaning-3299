import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getServices, getService, getAreas, getArea } from '@/lib/data';
import { getServiceImage, getServiceIcon } from '@/lib/images';
import { ChevronRight, MapPin } from 'lucide-react';
import { ServiceJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  const services = getServices();
  const areas = getAreas();
  return areas.flatMap((area) =>
    services.map((service) => ({ area: area.slug, service: service.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string; service: string }>;
}): Promise<Metadata> {
  const { area: areaSlug, service: serviceSlug } = await params;
  const area = getArea(areaSlug);
  const service = getService(serviceSlug);
  if (!area || !service) return { title: 'Not Found' };
  return {
    title: `${service.name} in ${area.name}, Los Angeles, CA`,
    description: `Professional ${service.name.toLowerCase()} in ${area.name}, Los Angeles, CA. ${service.short_description.slice(0, 120)} Call Win Air Cleaning at (555) 924-7100.`,
    openGraph: {
      title: `${service.name} in ${area.name} | Win Air Cleaning`,
      description: `Professional ${service.name.toLowerCase()} services in ${area.name}, Los Angeles. ${service.short_description}`,
      type: 'website',
    },
  };
}

export default async function AreaServicePage({
  params,
}: {
  params: Promise<{ area: string; service: string }>;
}) {
  const { area: areaSlug, service: serviceSlug } = await params;
  const area = getArea(areaSlug);
  const service = getService(serviceSlug);

  if (!area || !service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="font-heading text-2xl text-text-secondary">Page not found.</p>
      </div>
    );
  }

  const image = getServiceImage(service.slug);
  const icon = getServiceIcon(service.slug);

  return (
    <>
      <ServiceJsonLd
        serviceName={`${service.name} in ${area.name}`}
        serviceDescription={`Professional ${service.name.toLowerCase()} services in ${area.name}, Los Angeles.`}
        areaServed={[area.name]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Areas', href: '/areas/' },
          { name: area.name, href: `/areas/${area.slug}/` },
          { name: service.name, href: `/areas/${area.slug}/${service.slug}/` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-24 md:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 font-body text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/areas/" className="hover:text-primary transition-colors">Areas</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/areas/${area.slug}/`} className="hover:text-primary transition-colors">{area.name}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-text-primary">{service.name}</span>
          </nav>

          <div className="flex items-start gap-4">
            {icon && (
              <div className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary">
                <Image src={icon} alt="" width={18} height={18} />
              </div>
            )}
            <div>
              <h1 className="font-heading font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
                <span className="text-primary">{service.name}</span>
                <br />
                <span className="text-secondary" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
                  in {area.name}
                </span>
              </h1>
              {/* Accent underline */}
              <div className="mt-4 h-[2px] w-20 bg-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {service.full_description.map((p, i) => (
                <p key={i} className="font-body text-text-secondary leading-relaxed text-lg">
                  {p}
                </p>
              ))}
            </div>
            {image && (
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-[400px]">
                <Image
                  src={image}
                  alt={`${service.name} in ${area.name}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Local Content Pull-Quote */}
      <section className="bg-surface py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl bg-background border-l-2 border-secondary p-8" style={{ background: 'linear-gradient(135deg, rgba(53,120,204,0.04) 0%, rgba(250,251,253,1) 100%)' }}>
            <p className="font-body text-lg text-text-primary leading-relaxed italic">
              &ldquo;{area.description}&rdquo;
            </p>
            {area.highlights && area.highlights.length > 0 && (
              <ul className="mt-6 space-y-2">
                {area.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-text-secondary text-sm">
                    <span className="mt-0.5 text-secondary font-extrabold">&#8250;</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading font-extrabold tracking-tight text-2xl md:text-3xl text-text-primary mb-12 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
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
      {service.faq && service.faq.length > 0 && (
        <section className="bg-surface py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading font-extrabold tracking-tight text-2xl md:text-3xl text-text-primary mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-background p-6"
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
      )}

      {/* Internal Links */}
      <section className="bg-background py-10 md:py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Link to parent service */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-heading font-extrabold text-lg text-text-primary mb-2">
              Learn More About {service.name}
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              See our full {service.name.toLowerCase()} service details, process, and pricing.
            </p>
            <Link href={`/services/${service.slug}/`} className="font-heading font-extrabold text-sm text-primary hover:text-primary-dark transition-colors">
              View Service Details &rarr;
            </Link>
          </div>
          {/* Link to parent area */}
          <div className="rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-heading font-extrabold text-lg text-text-primary mb-2">
              All Services in {area.name}
            </h3>
            <p className="font-body text-sm text-text-secondary mb-4">
              Explore all air duct and HVAC cleaning services available in {area.name}.
            </p>
            <Link href={`/areas/${area.slug}/`} className="font-heading font-extrabold text-sm text-primary hover:text-primary-dark transition-colors">
              View {area.name} Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Card */}
      <section className="bg-surface py-10 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-2xl border border-border bg-background p-8 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-light">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg text-text-primary">
                Win Air Cleaning
              </h3>
              <p className="font-body text-text-secondary mt-1">
                5847 Wilshire Blvd, Los Angeles, CA 90036
              </p>
              <p className="font-body text-text-secondary mt-1">
                Serving {area.name} and surrounding communities
              </p>
              <a
                href="tel:+15559247100"
                className="mt-3 inline-block font-heading font-extrabold text-primary hover:text-primary-dark transition-colors"
              >
                (555) 924-7100
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
