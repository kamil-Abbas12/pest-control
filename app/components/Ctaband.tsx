import { MapPin, ArrowRight, PhoneCall, CalendarClock, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const badges = [
  { icon: MapPin, label: "Local Technicians" },
  { icon: PhoneCall, label: "Emergency Service Available" },
  { icon: CalendarClock, label: "Same / Next Day Appointments" },
  { icon: BadgeCheck, label: "Zero Obligation Call" },
];

export default function CTABand() {
  return (
    <section className="bg-[#0B1630] py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="flex items-center justify-center gap-2 text-sm font-semibold text-[#2F6FED]">
          <MapPin className="h-4 w-4" />
          {siteConfig.locationLabel}
        </p>
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
          Pest Problems? Call Today
        </h2>
        <p className="mt-4 text-white/60">
          We connect you with local exterminators {siteConfig.locationLabel.toLowerCase()}.
          Same-day appointments generally available.{" "}
          <span className="font-semibold italic text-white/80">
            Give us a call at {siteConfig.phoneDisplay} for help with your pest issue today.
          </span>
        </p>

        <a
          href={siteConfig.phoneHref}
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#2F6FED] px-7 py-4 font-bold text-white transition-colors hover:bg-[#1D4ED8]"
        >
          Get Help Now
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="mt-4 font-semibold text-white">
          Call Now:{" "}
          <a href={siteConfig.phoneHref} className="text-[#2F6FED] underline">
            {siteConfig.phoneDisplay}
          </a>
        </p>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-2 rounded-xl bg-white px-4 py-6 text-center"
            >
              <badge.icon className="h-5 w-5 text-[#0B1630]" />
              <span className="text-sm font-semibold text-[#0B1630]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}