import { Home, Headset, ShieldCheck, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const points = [
  {
    icon: Home,
    title: "Hassle-Free",
    body: "Our pest control partners are equipped to handle many types of pest infestations while minimizing disruption to your life.",
  },
  {
    icon: Headset,
    title: "Local Exterminators",
    body: "There are many different ways to solve pest issues. Local exterminators can present personalized solutions tailored to the local pest environment.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    body: "Call us to be connected with a local pest control technician. Our pest control partners will listen to your issues and can help solve your pest problems.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-16">
      <h2 className="text-3xl font-extrabold text-[#0B1630] sm:text-4xl">Need an Exterminator Today?</h2>

      <div className="mt-10 space-y-8">
        {points.map((point) => (
          <div key={point.title} className="flex gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1F4FA]">
              <point.icon className="h-5 w-5 text-[#0B1630]/70" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#0B1630]">{point.title}</h3>
              <p className="mt-1 max-w-2xl text-[#0B1630]/60">{point.body}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        href={siteConfig.phoneHref}
        className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#2F6FED] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#1D4ED8]"
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
    </section>
  );
}