import AboutSection from '@/components/sections/aboutsection';
import CTASection from '@/components/sections/CTASection';
import FAQSection from '@/components/sections/faqsection';
import HeroSection from '@/components/sections/herosection';
import PartnerSection from '@/components/sections/partnersection';
import ServicesSection from '@/components/sections/servicessection';
import StatistikSection from '@/components/sections/statistiksection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PartnerSection />
      <StatistikSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
