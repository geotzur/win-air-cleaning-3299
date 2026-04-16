export interface ImageManifest {
  hero?: string | null;
  hero_portrait?: string | null;
  about?: string | null;
  cta_bg?: string | null;
  services?: Record<string, string | null>;
  areas?: Record<string, string | null>;
  before_after?: Record<string, { before: string; after: string }>;
  reuse_map?: Record<string, string>;
  icons?: Record<string, string>;
}

let manifest: ImageManifest | null = null;
try {
  manifest = require('../../images.json') as ImageManifest;
} catch {
  manifest = null;
}

function firstAvailable(m: ImageManifest | null, ...candidates: (string | null | undefined)[]): string | null {
  for (const c of candidates) { if (c) return c; }
  if (!m) return null;
  const pool = [
    m.hero, m.cta_bg, m.about,
    ...Object.values(m.services ?? {}),
    ...Object.values(m.areas ?? {}),
  ].filter(Boolean) as string[];
  return pool[0] ?? null;
}

export function getImageManifest(): ImageManifest | null {
  return manifest;
}

export function getServiceImage(slug: string, m?: ImageManifest | null): string | null {
  const man = m ?? manifest;
  return firstAvailable(man, man?.services?.[slug], man?.reuse_map?.[`service:${slug}`], man?.cta_bg, man?.hero);
}

export function getAreaImage(slug: string, m?: ImageManifest | null): string | null {
  const man = m ?? manifest;
  return firstAvailable(man, man?.areas?.[slug], man?.reuse_map?.[`area:${slug}`], man?.hero);
}

export function getHeroImage(m?: ImageManifest | null): string | null {
  const man = m ?? manifest;
  return firstAvailable(man, man?.hero, man?.cta_bg, man?.about);
}

export function getAboutImage(m?: ImageManifest | null): string | null {
  const man = m ?? manifest;
  return firstAvailable(man, man?.about, man?.hero);
}

export function getCtaImage(m?: ImageManifest | null): string | null {
  const man = m ?? manifest;
  return firstAvailable(man, man?.cta_bg, man?.hero, man?.about);
}

export function getServiceIcon(slug: string, m?: ImageManifest | null): string | null {
  const man = m ?? manifest;
  return man?.icons?.[slug] ?? null;
}

export function getBeforeAfterImages(slug: string, m?: ImageManifest | null): { before: string; after: string } | null {
  const man = m ?? manifest;
  return man?.before_after?.[slug] ?? null;
}
