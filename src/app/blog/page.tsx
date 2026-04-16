import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/data';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Air Quality Blog | Win Air Cleaning Los Angeles',
  description:
    'Air quality tips, seasonal guides, and expert advice for Los Angeles homeowners. Learn about duct cleaning, wildfire smoke protection, dryer vent safety & more.',
  openGraph: {
    title: 'Air Quality Blog | Win Air Cleaning Los Angeles',
    description: 'Tips, guides, and insights on air quality for Los Angeles homes and businesses.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog/' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-24 md:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading font-extrabold tracking-tight leading-tight text-text-primary" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
            Tips, guides, and insights on air quality for Los Angeles homes and businesses.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-lg"
              >
                <span className="whisper-label mb-4 block">{post.category}</span>
                <h2 className="font-heading font-extrabold text-xl text-text-primary group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="font-body text-text-secondary leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-block font-heading font-extrabold text-sm text-primary">
                  Read More &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
