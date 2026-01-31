import Hero from '@/components/Hero';
import ProblemStatement from '@/components/ProblemStatement';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TemplateShowcase from '@/components/TemplateShowcase';
import Pricing from '@/components/Pricing';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <Features />
      <HowItWorks />
      <TemplateShowcase />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  );
}
