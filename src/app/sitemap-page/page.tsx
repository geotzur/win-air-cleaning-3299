import type { Metadata } from 'next';
import Link from 'next/link';
import { getServices, getAreas, getBlogPosts } from '@/lib/data';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Sitemap | Win Air Cleaning',
  description: 'A complete list of all pages on the Win Air Cleaning website. Find services, areas, and blog posts.',
};

export default function SitemapPage() {
  const services = getServices();
  const areas = getAreas();
  const blogs = getBlogPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Sitemap', href: '/sitemap-page/' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading font-extrabold tracking-tight leading-tight text-text-primary" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            Sitemap
          </h1>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-4">
                Main Pages
              </h2>
              <ul className="space-y-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about/', label: 'About' },
                  { href: '/services/', label: 'Services' },
                  { href: '/areas/', label: 'Areas' },
                  { href: '/blog/', label: 'Blog' },
                  { href: '/contact/', label: 'Contact' },
                  { href: '/testimonials/', label: 'Testimonials' },
                  { href: '/privacy-policy/', label: 'Privacy Policy' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-body text-primary hover:text-primary-dark transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-4">
                Services
              </h2>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}/`} className="font-body text-primary hover:text-primary-dark transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-4">
                Service Areas
              </h2>
              <ul className="space-y-2">
                {areas.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/areas/${a.slug}/`} className="font-body text-primary hover:text-primary-dark transition-colors font-medium">
                      {a.name}
                    </Link>
                    <ul className="ml-4 mt-1 space-y-1">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/areas/${a.slug}/${s.slug}/`} className="font-body text-sm text-text-secondary hover:text-primary transition-colors">
                            {s.name} in {a.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog */}
            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-4">
                Blog Posts
              </h2>
              <ul className="space-y-2">
                {blogs.map((b) => (
                  <li key={b.slug}>
                    <Link href={`/blog/${b.slug}/`} className="font-body text-primary hover:text-primary-dark transition-colors">
                      {b.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
