import { Phone, ClipboardCheck, Bug, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    icon: Phone,
    title: "Call Us",
    body: (
      <>
        Make a zero-obligation phone call to{" "}
        <a href={siteConfig.phoneHref} className="font-semibold text-[#1D4ED8] underline">
          {siteConfig.phoneDisplay}
        </a>
        . Our network of third-party, independent pest control partners provides a wide
        array of pest control solutions. Our partners will help you make a plan to rid your
        home or business of pests and regain your peace of mind.
      </>
    ),
  },
  {
    icon: ClipboardCheck,
    title: "Schedule Service",
    body: "Our pest control partners can help identify the issue and provide a plan to resolve the problem quickly and easily. If you wish to proceed with service, they'll work with you to schedule a date that works for you.",
  },
  {
    icon: Bug,
    title: "Get Rid of the Pests",
    body: "Our pest control partners get to work eliminating your unwanted guests, and you get back to enjoying your life, pest-free!",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-10 sm:py-16">
      <h2 className="text-3xl font-extrabold text-[#0B1630] sm:text-4xl">Our Simple Process</h2>

      <ol className="relative mt-10 space-y-10">
        <div
          aria-hidden
          className="absolute left-6 top-6 bottom-6 hidden w-px border-l-2 border-dashed border-[#0B1630]/20 sm:block"
        />
        {steps.map((step) => (
          <li key={step.title} className="relative flex gap-6">
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#122148]">
              <step.icon className="h-5 w-5 text-[#2F6FED]" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-[#0B1630]">{step.title}</h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-[#0B1630]/60">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-2xl bg-[#EEF3FF] px-5 py-8 text-center sm:px-12 sm:py-10">
        <h3 className="text-xl font-bold text-[#0B1630] sm:text-2xl">How much does it cost?</h3>
        <p className="mx-auto mt-3 max-w-xl text-[#0B1630]/60">
          Cost of pest treatment can differ based on factors such as the type and severity
          of the infestation and treatment method. The best way to answer this is a
          zero-obligation call at{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-[#1D4ED8] underline">
            {siteConfig.phoneDisplay}
          </a>{" "}
          to speak with a local pest exterminator today.
        </p>

        <h3 className="mt-8 text-xl font-bold text-[#0B1630] sm:text-2xl">Do you service my area?</h3>
        <p className="mx-auto mt-3 max-w-xl text-[#0B1630]/60">
          Yes — our network of exterminators covers the entire country and can respond
          24/7 to pest emergencies. Generally, same-day appointments can be accommodated.
        </p>

        <a
          href={siteConfig.phoneHref}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#2F6FED] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#1D4ED8]"
        >
          Get Help Now
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-4 text-sm text-[#0B1630]">
          Call Us 24/7/365:{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-[#1D4ED8] underline">
            {siteConfig.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}