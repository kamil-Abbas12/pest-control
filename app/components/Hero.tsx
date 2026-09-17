import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const trustItems = [
  "Local exterminator network",
  "Same / next-day availability",
  "No-obligation call",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07152D] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(47,111,237,0.28),transparent_34%),radial-gradient(circle_at_15%_80%,rgba(24,180,142,0.14),transparent_30%)]" />
      <div className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-[#2F6FED]/10 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#19B98A]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8DB2FF] shadow-lg backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Nationwide pest assistance
          </div>

          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[72px]">
            Get rid of pests.
            <span className="mt-2 block text-[#6F9BFF]">Get your home back.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Connect with local pest exterminators for help with rodents, insects,
            termites, wasps and other unwanted pests. Same-day appointments are
            generally available.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#help"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#2F6FED] px-7 text-base font-extrabold shadow-[0_18px_50px_rgba(47,111,237,0.28)] transition hover:-translate-y-0.5 hover:bg-[#4B7FF2]"
            >
              Get Help Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.06] px-7 text-base font-extrabold backdrop-blur transition hover:bg-white/10"
            >
              <PhoneCall className="h-5 w-5 text-[#6F9BFF]" />
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
            {trustItems.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#36D5A5]" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="absolute inset-x-12 top-10 h-[78%] rounded-[40px] bg-[#2F6FED]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.07] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="relative min-h-[430px] overflow-hidden rounded-[26px] bg-gradient-to-br from-[#112B58] to-[#08162F] sm:min-h-[520px]">
              <Image
                src="/pest-3d-hero.webp"
                alt="3D pest control exterminator illustration"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-contain p-5 sm:p-8"
              />

              <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-[#07152D]/80 px-4 py-3 shadow-xl backdrop-blur-md sm:left-7 sm:top-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60">
                  <ShieldCheck className="h-4 w-4 text-[#36D5A5]" />
                  Protected
                </div>
                <p className="mt-1 text-sm font-extrabold">Pest problem? We can help.</p>
              </div>

              <div className="absolute bottom-5 right-5 max-w-[220px] rounded-2xl border border-white/10 bg-white px-4 py-3 text-[#07152D] shadow-2xl sm:bottom-7 sm:right-7">
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#2F6FED]">Call today</p>
                <p className="mt-1 text-lg font-black">{siteConfig.phoneDisplay}</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-white/10 bg-white px-5 py-4 text-[#07152D] shadow-2xl sm:block">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Available</p>
            <p className="mt-1 font-black">Local technicians</p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-white/[0.035]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-5 sm:px-8 lg:grid-cols-4 lg:px-10">
          {[
            ["01", "Local network"],
            ["02", "Fast response"],
            ["03", "Multiple pest types"],
            ["04", "Zero-obligation call"],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-3 px-3 py-5 sm:px-5">
              <span className="text-xs font-black text-[#6F9BFF]">{number}</span>
              <span className="text-xs font-bold text-white/70 sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
