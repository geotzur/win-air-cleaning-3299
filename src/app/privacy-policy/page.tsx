import type { Metadata } from 'next';
import { content } from '@/lib/data';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Privacy Policy | Win Air Cleaning',
  description: 'Privacy policy for Win Air Cleaning. Learn how we collect, use, and safeguard your information.',
};

export default function PrivacyPolicyPage() {
  const privacy = content.privacy;

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy-policy/' }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-light py-24 md:py-32">
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(53,120,204,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(44,186,181,0.1) 0%, transparent 50%)',
        }} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-heading font-extrabold tracking-tight leading-tight text-text-primary" style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}>
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="prose-like space-y-8">
            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">Introduction</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                {privacy.business_name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">Information We Collect</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                {privacy.data_collected}
              </p>
            </div>

            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">How We Use Your Information</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about your service requests. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">Third-Party Services</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                Our website may use the following third-party services: {privacy.third_party}. These services may collect information about your visit in accordance with their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">Cookies</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                Our website may use cookies to improve your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect some website functionality.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">Data Security</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">Your Rights</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                You may request access to, correction of, or deletion of your personal information by contacting us. California residents may have additional rights under the California Consumer Privacy Act (CCPA).
              </p>
            </div>

            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">Contact Us</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href={`mailto:${privacy.email}`} className="text-primary hover:text-primary-dark transition-colors">
                  {privacy.email}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-extrabold text-xl text-text-primary mb-3">Updates to This Policy</h2>
              <p className="font-body text-text-secondary leading-relaxed">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
