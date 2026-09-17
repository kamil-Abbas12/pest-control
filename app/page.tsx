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
    <main className="overflow-hidden bg-[#F6F8FC]">
      <Hero />
      <Form />

      <section className="relative bg-[#F6F8FC] py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-[#2F6FED]/5 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[300px_1fr] lg:gap-14 lg:px-10">
          <Sidebar />
          <div className="min-w-0 divide-y divide-slate-200/80">
            <ProcessSteps />
            <Services />
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
