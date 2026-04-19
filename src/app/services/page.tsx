import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getServices } from '@/lib/data';
import { getServiceImage, getServiceIcon } from '@/lib/images';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Air Duct & HVAC Cleaning Services in Los Angeles, CA',
  description:
    'Explore our full range of air duct cleaning, HVAC maintenance, dryer vent cleaning, mold remediation, and indoor air quality services across Los Angeles. Free estimates.',
  openGraph: {
    title: 'Our Services | Win Air Cleaning Los Angeles',
    description: 'Professional air duct cleaning and HVAC services for homes and businesses across Los Angeles.',
    type: 'website',
  },
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services/' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading font-extrabold tracking-tight leading-tight text-text-primary" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
            Professional air duct cleaning and HVAC services for homes and businesses across Los Angeles.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const image = getServiceImage(service.slug);
              const icon = getServiceIcon(service.slug);
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group rounded-2xl border border-border bg-background overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-surface">
                    {image ? (
                      <Image
                        src={image}
                        alt={service.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-surface">
                        <span className="font-heading text-text-secondary text-sm">
                          {service.name}
                        </span>
                      </div>
                    )}
                    {icon && (
                      <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md">
                        <Image src={icon} alt="" width={20} height={20} />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading font-extrabold text-lg text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {service.name}
                    </h2>
                    <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-3">
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
