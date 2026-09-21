"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bed,
  Bug,
  CheckCircle2,
  Clock,
  Home,
  Leaf,
  MoreHorizontal,
  PhoneCall,
  Rat,
  ShieldCheck,
  Worm,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  "Local Pest Professionals",
  "Fast Response",
  "No-Obligation Call",
];

const pestOptions = [
  { name: "Ants", icon: Bug },
  { name: "Rodents", icon: Rat },
  { name: "Termites", icon: Worm },
  { name: "Bed Bugs", icon: Bed },
  { name: "Wasps", icon: Zap },
];

const promises = [
  { icon: Leaf, label: "A Cleaner Home" },
  { icon: ShieldCheck, label: "A Healthier Family" },
  { icon: Home, label: "A Pest-Free Tomorrow" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[900px] overflow-hidden bg-[#07140F] text-white">
      {/* Background photo */}
      <Image
        src="/hero-bg.webp"
        alt="Pest control professional treating the exterior of a home"
        fill
        priority
        className="object-cover object-right"
        sizes="100vw"
      />

      {/* Premium overlays */}
      <div className="absolute inset-0 bg-[#06120D]/55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,15,10,.97)_0%,rgba(4,15,10,.9)_36%,rgba(4,15,10,.5)_66%,rgba(4,15,10,.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#07140F] via-[#07140F]/85 to-transparent" />

      {/* Decorative glow */}
      <div className="absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#75C043]/15 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-10 pt-28 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 pb-14 pt-6 lg:grid-cols-[1.05fr_.95fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C5EFAE] backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4" />
              Fast &amp; Reliable Pest Control
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[.98] tracking-[-0.05em] sm:text-6xl lg:text-[76px]">
              Pests Don&apos;t
              <span className="block">Belong Here.</span>
              <span className="block text-[#8BD15C]">
                Take Back Your Home.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Get connected with trusted local pest control experts for ants, roaches, rodents, termites, bed bugs, wasps, and more.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#quote"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#75C043] px-7 font-black text-[#07140F] shadow-[0_18px_60px_rgba(117,192,67,.3)] transition hover:-translate-y-1 hover:bg-[#8BD15C]"
              >
                Get Pest Control Help
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <a
                href={siteConfig.phoneHref}
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 font-bold backdrop-blur-xl transition hover:bg-white/15"
              >
                <PhoneCall className="h-5 w-5 text-[#9BDD70]" />
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#8BD15C]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — floating info cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex w-full max-w-sm flex-col gap-4 lg:ml-auto"
          >
            <div className="rounded-3xl border border-white/15 bg-[#0A1B14]/75 p-5 shadow-2xl backdrop-blur-xl">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#75C043]/15">
                <Clock className="h-5 w-5 text-[#8BD15C]" />
              </span>
              <p className="mt-4 text-sm font-black uppercase tracking-wider text-white">
                Fast Response
              </p>
              <p className="mt-1 text-sm leading-6 text-white/60">
                Local professionals ready to help.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-[#0A1B14]/75 p-5 shadow-2xl backdrop-blur-xl">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#75C043]/15">
                <Home className="h-5 w-5 text-[#8BD15C]" />
              </span>
              <p className="mt-4 text-sm font-black uppercase tracking-wider text-white">
                Home Protection
              </p>
              <p className="mt-1 text-sm leading-6 text-white/60">
                Safe, effective solutions for a pest-free home.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 text-[#07140F] shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#75C043]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Need help today?
                </span>
              </div>
              <p className="mt-2 text-lg font-black leading-snug">
                Talk with a local pest professional.
              </p>
              <a
                href={siteConfig.phoneHref}
                className="group mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#75C043] px-5 text-sm font-black text-[#07140F] transition hover:bg-[#8BD15C]"
              >
                <PhoneCall className="h-4 w-4" />
                Call Now
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* PEST SELECTOR */}
        <div className="rounded-[28px] border border-white/10 bg-[#0A1B14]/85 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="whitespace-nowrap text-base font-black leading-tight sm:text-lg">
                Which pest do you need help with?
              </p>

              <div className="flex flex-wrap gap-2 sm:border-l sm:border-white/10 sm:pl-5">
                {pestOptions.map((pest) => {
                  const PestIcon = pest.icon;
                  return (
                    <Link
                      key={pest.name}
                      href="#quote"
                      className="group inline-flex flex-col items-center gap-1.5 rounded-2xl bg-white/5 px-4 py-2.5 text-[11px] font-bold text-white/70 transition hover:bg-[#75C043] hover:text-[#07140F]"
                    >
                      <PestIcon className="h-5 w-5 text-[#8BD15C] transition group-hover:text-[#07140F]" />
                      {pest.name}
                    </Link>
                  );
                })}

                <Link
                  href="#quote"
                  className="group inline-flex flex-col items-center gap-1.5 rounded-2xl bg-white/5 px-4 py-2.5 text-[11px] font-bold text-white/70 transition hover:bg-[#75C043] hover:text-[#07140F]"
                >
                  <MoreHorizontal className="h-5 w-5 text-[#8BD15C] transition group-hover:text-[#07140F]" />
                  Other
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* VALUE STRIP */}
        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3 pl-1">
          {promises.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-sm font-semibold text-white/60"
            >
              <Icon className="h-4 w-4 text-[#8BD15C]" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}