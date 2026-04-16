import type { MetadataRoute } from 'next';
import { getServices, getAreas, getBlogPosts } from '@/lib/data';

const BASE = 'https://winaircleaning.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getServices();
  const areas = getAreas();
  const blogs = getBlogPosts();

  return [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: 'weekly', lastModified: new Date() },
    { url: `${BASE}/services/`, priority: 0.9, changeFrequency: 'monthly', lastModified: new Date() },
    ...services.map((s) => ({
      url: `${BASE}/services/${s.slug}/`,
      priority: 0.8 as const,
      changeFrequency: 'monthly' as const,
      lastModified: new Date(),
    })),
    { url: `${BASE}/areas/`, priority: 0.8, changeFrequency: 'monthly', lastModified: new Date() },
    ...areas.map((a) => ({
      url: `${BASE}/areas/${a.slug}/`,
      priority: 0.7 as const,
      changeFrequency: 'monthly' as const,
      lastModified: new Date(),
    })),
    ...areas.flatMap((a) =>
      services.map((s) => ({
        url: `${BASE}/areas/${a.slug}/${s.slug}/`,
        priority: 0.6 as const,
        changeFrequency: 'monthly' as const,
        lastModified: new Date(),
      }))
    ),
    { url: `${BASE}/blog/`, priority: 0.7, changeFrequency: 'weekly', lastModified: new Date() },
    ...blogs.map((b) => ({
      url: `${BASE}/blog/${b.slug}/`,
      priority: 0.5 as const,
      changeFrequency: 'monthly' as const,
      lastModified: new Date(),
    })),
    { url: `${BASE}/about/`, priority: 0.7, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/contact/`, priority: 0.8, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/testimonials/`, priority: 0.6, changeFrequency: 'monthly', lastModified: new Date() },
    { url: `${BASE}/privacy-policy/`, priority: 0.3, changeFrequency: 'yearly', lastModified: new Date() },
    { url: `${BASE}/sitemap-page/`, priority: 0.3, changeFrequency: 'monthly', lastModified: new Date() },
  ];
}
