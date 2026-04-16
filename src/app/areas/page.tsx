import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getAreas } from '@/lib/data';
import { getAreaImage } from '@/lib/images';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Areas We Serve | Win Air Cleaning Los Angeles, CA',
  description:
    'Win Air Cleaning serves homes and businesses across Los Angeles including Santa Monica, Burbank, Pasadena, Hollywood, Downtown LA, Silver Lake, West Hollywood, and Glendale.',
  openGraph: {
    title: 'Areas We Serve | Win Air Cleaning Los Angeles',
    description: 'Professional air duct & HVAC cleaning across Los Angeles and surrounding communities.',
    type: 'website',
  },
};

export default function AreasPage() {
  const areas = getAreas();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Areas', href: '/areas/' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-24 md:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading font-extrabold tracking-tight leading-tight text-text-primary" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            Areas We Serve
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
            Professional air duct and HVAC cleaning across Los Angeles and surrounding communities.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {areas.map((area) => {
              const image = getAreaImage(area.slug);
              return (
                <Link
                  key={area.slug}
                  href={`/areas/${area.slug}/`}
                  className="group rounded-2xl border border-border bg-background overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    {image ? (
                      <Image
                        src={image}
                        alt={area.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-surface">
                        <span className="font-heading text-text-secondary">{area.name}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading font-extrabold text-lg text-text-primary group-hover:text-primary transition-colors mb-2">
                      {area.name}
                    </h2>
                    <p className="font-body text-sm text-text-secondary leading-relaxed line-clamp-3">
                      {area.description}
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
