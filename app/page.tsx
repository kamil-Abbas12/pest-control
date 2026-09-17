import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import ProcessSteps from "./components/ProcessSteps";
import Services from "./components/Services";
import WhyChooseUs from "./components/Whychooseus";
import CTABand from "./components/Ctaband";
import Footer from "./components/Footer";
import ScrollToTop from "./components/Scrolltotop";
import Form from "./components/Form";


export default function Home() {
  return (
    <main>
      <Hero />
<Form/>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[320px_1fr] lg:items-start lg:gap-12">
        <Sidebar />
        <div className="divide-y divide-[#E5E7EB]">
          <ProcessSteps />
          <Services />
          <WhyChooseUs />
        </div>
      </div>

      <CTABand />
      <Footer />
      <ScrollToTop />
    </main>
  );
}