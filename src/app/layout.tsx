import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import FloatingCallButton from '@/components/FloatingCallButton';

export const metadata: Metadata = {
  title: {
    default: 'Win Air Cleaning | Air Duct & HVAC Cleaning in Los Angeles, CA | Free Estimates',
    template: '%s | Win Air Cleaning — Los Angeles, CA',
  },
  description:
    'Professional air duct cleaning & HVAC cleaning in Los Angeles, CA. NADCA-certified technicians, free estimates, before & after photos. Serving Santa Monica, Burbank, Pasadena, Hollywood & more. Call (555) 924-7100.',
  keywords: [
    'air duct cleaning Los Angeles',
    'HVAC cleaning Los Angeles',
    'air duct cleaning near me',
    'duct cleaning LA',
    'dryer vent cleaning Los Angeles',
    'indoor air quality testing Los Angeles',
    'mold remediation ducts LA',
    'HVAC maintenance Los Angeles',
    'residential duct cleaning LA',
    'commercial air duct cleaning Los Angeles',
    'UV air purification HVAC',
    'electrostatic filter installation',
    'NADCA certified duct cleaning',
  ],
  openGraph: {
    title: 'Win Air Cleaning | Air Duct & HVAC Cleaning in Los Angeles, CA',
    description:
      'NADCA-certified air duct and HVAC cleaning for homes and businesses across Los Angeles. Free estimates, before & after photo reports.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Win Air Cleaning',
    url: 'https://winaircleaning.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://winaircleaning.com'),
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Los Angeles, California',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;600;800&family=Source+Sans+3:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-text-primary antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingCallButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
