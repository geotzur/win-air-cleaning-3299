'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/lib/header-data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* ── Desktop / main nav bar ── */}
      <header
        className={`fixed left-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'top-0 rounded-t-none border-b border-primary-light bg-white/[0.92] shadow-lg backdrop-blur-[16px]'
            : 'top-4 border border-border/40 bg-white/80 shadow-md backdrop-blur-[16px]'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image src="/logo.jpg" alt="Win Air Cleaning logo" width={36} height={36} className="rounded-full" />
            <span className="font-heading text-[20px] font-semibold text-primary">Win Air Cleaning</span>
          </Link>

          {/* Center nav — desktop */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-heading text-[15px] font-medium text-text-secondary transition-colors hover:text-primary"
              >
                {link.label}
                {/* underline sweep */}
                <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right side — desktop CTA + phone */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:5559247100"
              className="font-body text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              (555) 924-7100
            </a>
            <Link
              href="/contact/"
              className="rounded-full bg-primary px-5 py-2 font-heading text-sm font-semibold text-text-light transition-shadow hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Hamburger — mobile */}
          <button
            aria-label="Open menu"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <span className="block h-[2px] w-5 rounded bg-text-primary" />
            <span className="block h-[2px] w-5 rounded bg-text-primary" />
            <span className="block h-[2px] w-5 rounded bg-text-primary" />
          </button>
        </div>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-500 lg:hidden ${
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Close button */}
        <button
          aria-label="Close menu"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center"
          onClick={closeMobile}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-text-primary">
            <path d="M1 1L21 21M21 1L1 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="flex items-center gap-3 font-heading text-xl font-semibold text-text-primary"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              {link.label}
            </Link>
          ))}

          <div className="mt-4 w-full px-8">
            <a
              href="tel:5559247100"
              className="mb-3 block text-center font-body text-base text-text-secondary"
            >
              (555) 924-7100
            </a>
            <Link
              href="/contact/"
              onClick={closeMobile}
              className="block w-full rounded-full bg-primary py-3.5 text-center font-heading text-base font-semibold text-text-light"
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
