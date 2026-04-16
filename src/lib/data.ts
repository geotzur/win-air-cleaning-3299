import contentData from '../../content.json';

export const content = contentData;

export function getServices() {
  return content.services;
}

export function getService(slug: string) {
  return content.services.find((s) => s.slug === slug) ?? null;
}

export function getAreas() {
  return content.areas;
}

export function getArea(slug: string) {
  return content.areas.find((a) => a.slug === slug) ?? null;
}

export function getBlogPosts() {
  return content.blog;
}

export function getBlogPost(slug: string) {
  return content.blog.find((b) => b.slug === slug) ?? null;
}

export function getTestimonials() {
  return content.testimonials;
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
