import type { Metadata } from 'next';
import Link from 'next/link';
import { getBlogPosts, getBlogPost } from '@/lib/data';
import { ChevronRight } from 'lucide-react';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Win Air Cleaning Blog`,
    description: `${post.excerpt.slice(0, 155)}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="font-heading text-2xl text-text-secondary">Post not found.</p>
      </div>
    );
  }

  return (
    <>
      <ArticleJsonLd
        headline={post.title}
        description={post.excerpt}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: post.title, href: `/blog/${post.slug}/` },
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-24 md:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-body text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog/" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-text-primary">{post.title}</span>
          </nav>

          <span className="whisper-label mb-4 block">{post.category}</span>
          <h1
            className="font-heading font-extrabold tracking-tight leading-tight text-text-primary max-w-4xl"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6">
            {post.content.map((p, i) => (
              <p key={i} className="font-body text-lg text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center">
            <h2 className="font-heading font-extrabold text-2xl text-text-primary mb-4">
              Need Professional Help?
            </h2>
            <p className="font-body text-text-secondary mb-6">
              Contact Win Air Cleaning for a free, no-obligation estimate.
            </p>
            <Link
              href="/contact/"
              className="inline-block rounded-full bg-primary px-8 py-4 font-heading font-extrabold text-text-light transition-colors hover:bg-primary-dark"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
