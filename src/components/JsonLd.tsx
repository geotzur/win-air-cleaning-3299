'use client';

import { content } from '@/lib/data';

const company = content.company;
const BASE_URL = 'https://winaircleaning.com';

/* ── LocalBusiness ─────────────────────────────────────────────── */
export function LocalBusinessJsonLd({ areaName }: { areaName?: string } = {}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: company.name,
    description: company.tagline,
    telephone: company.phone,
    email: company.email,
    url: BASE_URL,
    image: `${BASE_URL}/logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5847 Wilshire Blvd',
      addressLocality: 'Los Angeles',
      addressRegion: 'CA',
      postalCode: '90036',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0626,
      longitude: -118.3476,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: 127,
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    areaServed: areaName
      ? [{ '@type': 'City', name: areaName }]
      : content.areas.map((a) => ({ '@type': 'City', name: a.name })),
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── Service ───────────────────────────────────────────────────── */
export function ServiceJsonLd({
  serviceName,
  serviceDescription,
  areaServed,
}: {
  serviceName: string;
  serviceDescription: string;
  areaServed?: string[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'HVACBusiness',
      name: company.name,
      telephone: company.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5847 Wilshire Blvd',
        addressLocality: 'Los Angeles',
        addressRegion: 'CA',
        postalCode: '90036',
        addressCountry: 'US',
      },
    },
    areaServed: areaServed
      ? areaServed.map((a) => ({ '@type': 'City', name: a }))
      : content.areas.map((a) => ({ '@type': 'City', name: a.name })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── FAQPage ───────────────────────────────────────────────────── */
export function FAQPageJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── BreadcrumbList ────────────────────────────────────────────── */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── Article ───────────────────────────────────────────────────── */
export function ArticleJsonLd({
  headline,
  description,
  datePublished,
}: {
  headline: string;
  description: string;
  datePublished?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    datePublished: datePublished || '2024-01-15',
    author: { '@type': 'Organization', name: company.name },
    publisher: {
      '@type': 'Organization',
      name: company.name,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
