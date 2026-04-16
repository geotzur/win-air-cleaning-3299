import { designConfig } from '@/design.config';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProcessStepsSection from '@/components/sections/ProcessStepsSection';
import BeforeAfterSection from '@/components/sections/BeforeAfterSection';
import FAQSection from '@/components/sections/FAQSection';
import AreasSection from '@/components/sections/AreasSection';
import CTASection from '@/components/sections/CTASection';
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

const sectionMap: Record<string, React.ComponentType> = {
  Hero: HeroSection,
  StatsBar: StatsSection,
  Services: ServicesSection,
  WhyUs: WhyUsSection,
  Testimonials: TestimonialsSection,
  ProcessSteps: ProcessStepsSection,
  BeforeAfter: BeforeAfterSection,
  FAQ: FAQSection,
  Areas: AreasSection,
  CTA: CTASection,
};

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[{ name: 'Home', href: '/' }]} />
      {designConfig.sectionOrder.map((sectionName) => {
        const Component = sectionMap[sectionName];
        if (!Component) return null;
        return <Component key={sectionName} />;
      })}
    </>
  );
}
