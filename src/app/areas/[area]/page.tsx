import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAreas, getArea, getServices } from '@/lib/data';
import { getServiceImage } from '@/lib/images';
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  const areas = getAreas();
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = getArea(areaSlug);
  if (!area) return { title: 'Area Not Found' };
  return {
    title: `Air Duct & HVAC Cleaning in ${area.name}, Los Angeles, CA`,
    description: `Professional air duct cleaning and HVAC services in ${area.name}, Los Angeles. ${area.description.slice(0, 120)}... Call (555) 924-7100.`,
    openGraph: {
      title: `Air Duct Cleaning in ${area.name} | Win Air Cleaning`,
      description: area.description,
      type: 'website',
    },
  };
}

export default async function AreaDetailPage({ params }: { params: Promise<{ area: string }> }) {
  const { area: areaSlug } = await params;
  const area = getArea(areaSlug);
  if (!area) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="font-heading text-2xl text-text-secondary">Area not found.</p>
      </div>
    );
  }

  const services = getServices();

  return (
    <>
      <LocalBusinessJsonLd areaName={area.name} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Areas', href: '/areas/' },
          { name: area.name, href: `/areas/${area.slug}/` },
        ]}
      />

      {/* Map Texture Hero */}
      <section className="relative overflow-hidden bg-surface py-16 md:py-24 lg:py-32">
        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid-bg" />
        <div className="relative mx-auto max-w-7xl px-6">
          <h1
            className="font-heading font-extrabold tracking-tight leading-tight text-text-primary"
            style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}
          >
            Air Duct Cleaning in {area.name}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg text-text-secondary leading-relaxed">
            {area.description}
          </p>
          <div className="mt-8">
            <Link
              href="/contact/"
              className="inline-block rounded-full bg-primary px-8 py-4 font-heading font-extrabold text-text-light transition-colors hover:bg-primary-dark"
            >
              Get Free Estimate
            </Link>
          </div>

          {/* Highlights */}
          {area.highlights && area.highlights.length > 0 && (
            <ul className="mt-10 space-y-3">
              {area.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-text-secondary">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-text-light text-xs font-extrabold">
                    &#10003;
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading font-extrabold tracking-tight text-2xl md:text-3xl text-text-primary mb-12 text-center">
            Services Available in {area.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const image = getServiceImage(service.slug);
              return (
                <Link
                  key={service.slug}
                  href={`/areas/${area.slug}/${service.slug}/`}
                  className="group rounded-2xl border border-border bg-background overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    {image ? (
                      <Image
                        src={image}
                        alt={`${service.name} in ${area.name}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-surface">
                        <span className="font-heading text-text-secondary text-sm">{service.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-extrabold text-lg text-text-primary group-hover:text-primary transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {service.short_description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
