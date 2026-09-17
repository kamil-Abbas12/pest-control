import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  PhoneCall,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1630]">
      {/* Generated background: gradient + repeating house/shield motif, no stock photo needed */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1630] via-[#0F1F45] to-[#0B1630]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.12]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <pattern
              id="pest-pattern"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(8)"
            >
              <path
                d="M30 10 L50 18 V34 C50 46 42 53 30 58 C18 53 10 46 10 34 V18 Z"
                fill="none"
                stroke="#2F6FED"
                strokeWidth="2"
              />
              <path
                d="M22 34 L30 27 L38 34 V44 H22 Z"
                fill="none"
                stroke="#2F6FED"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pest-pattern)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1630] via-transparent to-[#0B1630]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-4 py-14 text-center text-white sm:px-6 sm:py-20 lg:min-h-[765px] lg:justify-center lg:py-24">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-[54px]">
          Pest Exterminators
        </h1>

        <p className="mt-4 max-w-[850px] text-base font-medium leading-[1.6] sm:text-lg md:text-xl">
          We connect you with local pest exterminators across the United
          States. Same-day appointments are generally available.
          <span className="font-bold italic">
            {" "}
            Give us a call at{" "}
            <a href={siteConfig.phoneHref} className="text-[#5B8DFF] underline">
              {siteConfig.phoneDisplay}
            </a>{" "}
            for help solving your pest issue today.
          </span>
        </p>

        <Link
          href="#help"
          className="mt-5 flex h-14 items-center gap-2 rounded-[10px] bg-[#2F6FED] px-6 text-lg font-bold text-white transition-all hover:bg-[#1D4ED8] hover:scale-[1.02] sm:h-[70px] sm:gap-3 sm:px-9 sm:text-2xl"
        >
          Get Help Now
          <ArrowRight size={22} strokeWidth={2.5} className="sm:hidden" />
          <ArrowRight size={28} strokeWidth={2.5} className="hidden sm:block" />
        </Link>

        <div className="mt-5 text-xl font-bold sm:text-2xl md:text-[27px]">
          Call Now:{" "}
          <a href={siteConfig.phoneHref} className="text-[#5B8DFF]">
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <div className="mt-5 flex items-center gap-2 text-2xl text-[#FBBF24] sm:text-3xl md:text-[32px]">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>

        <p className="mt-4 max-w-[650px] text-base font-medium italic leading-[1.6] sm:text-lg md:text-xl">
          We've helped thousands of people connect with an exterminator to
          address their pest problems quickly &amp; easily.
        </p>

        <div className="mt-10 grid w-full grid-cols-2 gap-3 sm:mt-12 sm:max-w-xl sm:gap-5 md:grid-cols-4 md:max-w-none">
          <div className="flex h-24 w-full flex-col items-center justify-center rounded-lg bg-white px-2 text-center text-[#0B1630] shadow-lg sm:h-[122px] sm:px-3">
            <MapPin size={26} strokeWidth={2} className="mb-2 text-[#0B1630] sm:h-8 sm:w-8" />
            <span className="text-sm font-bold leading-tight sm:text-[17px]">
              Local
              <br />
              Technicians
            </span>
          </div>

          <div className="flex h-24 w-full flex-col items-center justify-center rounded-lg bg-white px-2 text-center text-[#0B1630] shadow-lg sm:h-[122px] sm:px-3">
            <PhoneCall size={24} strokeWidth={2} className="mb-2 sm:h-[30px] sm:w-[30px]" />
            <span className="text-sm font-bold leading-tight sm:text-[17px]">
              Emergency
              <br />
              Service Available
            </span>
          </div>

          <div className="flex h-24 w-full flex-col items-center justify-center rounded-lg bg-white px-2 text-center text-[#0B1630] shadow-lg sm:h-[122px] sm:px-3">
            <Smartphone size={25} strokeWidth={2} className="mb-2 sm:h-[31px] sm:w-[31px]" />
            <span className="text-sm font-bold leading-tight sm:text-[17px]">
              Same / Next Day
              <br />
              Appointments
            </span>
          </div>

          <div className="flex h-24 w-full flex-col items-center justify-center rounded-lg bg-white px-2 text-center text-[#0B1630] shadow-lg sm:h-[122px] sm:px-3">
            <ShieldCheck size={25} strokeWidth={2} className="mb-2 sm:h-[31px] sm:w-[31px]" />
            <span className="text-sm font-bold leading-tight sm:text-[17px]">
              Zero Obligation
              <br />
              Call
            </span>
          </div>
        </div>

        <a
          href="#marketing-disclosures"
          className="mt-10 text-base text-white underline hover:text-[#5B8DFF] sm:mt-16 sm:text-lg"
        >
          Marketing Disclosures
        </a>
      </div>
    </section>
  );
}