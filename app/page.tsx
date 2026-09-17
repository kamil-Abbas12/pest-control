import Hero from "./components/Hero";
import PremiumQuote from "./components/PremiumQuote";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import PestShowcase from "./components/PestShowcase";
import ProcessSteps from "./components/ProcessSteps";
import ProtectionSection from "./components/ProtectionSection";
import CTABand from "./components/Ctaband";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scrolltotop";
import WhyChooseUs from "./components/Whychooseus";
import FAQ from "./components/Faq";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F7F8F4]">
      <Hero />

      <PremiumQuote />

      <Services />

      <AboutSection />

      <PestShowcase />

      <WhyChooseUs />

      <ProcessSteps />

      <ProtectionSection />

<FAQ/>
      <CTABand />

      <Footer />

      <ScrollToTop />
    </main>
  );
}

