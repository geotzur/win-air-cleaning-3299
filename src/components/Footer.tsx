import Link from 'next/link';
import { getServices, getAreas } from '@/lib/data';

export default function Footer() {
  const services = getServices();
  const areas = getAreas();

  return (
    <footer className="bg-surface-dark text-text-light">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        {/* ── 4-column grid ── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Branding */}
          <div>
            <Link href="/" className="font-heading text-[20px] font-semibold text-text-light">
              Win Air Cleaning
            </Link>
            <p className="mt-3 font-body text-sm leading-relaxed text-text-light/50">
              Professional air duct cleaning and indoor air quality services across California.
              Breathe cleaner, live healthier.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest text-text-light/70">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group relative inline-block font-body text-sm text-text-light/50 transition-colors hover:text-text-light"
                  >
                    {s.name}
                    <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Areas */}
          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest text-text-light/70">
              Service Areas
            </h4>
            <ul className="space-y-2.5">
              {areas.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}/`}
                    className="group relative inline-block font-body text-sm text-text-light/50 transition-colors hover:text-text-light"
                  >
                    {a.name}
                    <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-widest text-text-light/70">
              Contact
            </h4>
            <ul className="space-y-3 font-body text-sm text-text-light/50">
              <li>
                <a href="tel:5559247100" className="transition-colors hover:text-text-light">
                  (555) 924-7100
                </a>
              </li>
              <li>
                <a href="mailto:info@winaircleaning.com" className="transition-colors hover:text-text-light">
                  info@winaircleaning.com
                </a>
              </li>
              <li className="text-text-light/50">
                5847 Wilshire Blvd, Los Angeles, CA 90036
              </li>
              <li className="text-text-light/50">
                Mon-Fri: 8am-6pm | Sat: 9am-3pm
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 border-t border-text-light/[0.06] pt-6 text-center font-body text-xs text-text-light/40">
          &copy; {new Date().getFullYear()} Win Air Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
