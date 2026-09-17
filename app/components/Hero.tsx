"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-[850px] overflow-hidden bg-[#07140F] text-white">
      {/* Background image */}
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Premium overlays */}
      <div className="absolute inset-0 bg-[#06120D]/70" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(102,190,77,.28),transparent_32%),linear-gradient(90deg,rgba(4,15,10,.95)_0%,rgba(4,15,10,.76)_45%,rgba(4,15,10,.25)_100%)]" />

      {/* Decorative glow */}
      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#75C043]/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-[850px] items-center gap-10 pb-32 pt-28 lg:grid-cols-[1fr_.9fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C5EFAE] backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Professional Pest Control
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[.95] tracking-[-0.055em] sm:text-7xl lg:text-[82px]">
              Take back
              <span className="block text-[#8BD15C]">
                your home.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Connect with local pest control professionals for help with
              rodents, insects, termites, wasps and other common pest
              problems.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#quote"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#75C043] px-7 font-black text-[#07140F] shadow-[0_18px_60px_rgba(117,192,67,.25)] transition hover:-translate-y-1 hover:bg-[#8BD15C]"
              >
                Get Pest-Free Help
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
              {[
                "Local professionals",
                "Fast response",
                "No-obligation call",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/65"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#8BD15C]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT 3D IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[590px]"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-10 rounded-full bg-[#75C043]/20 blur-[90px]" />

              <Image
                src="/hero-pest-3d.webp"
                alt="3D pest control illustration"
                width={650}
                height={650}
                priority
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,.45)]"
              />
            </motion.div>

            {/* Floating protection card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-20 z-20 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:left-2"
            >
              <ShieldCheck className="h-6 w-6 text-[#8BD15C]" />

              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white/50">
                Protection
              </p>

              <p className="mt-1 text-sm font-black">
                Your home matters.
              </p>
            </motion.div>

            {/* Floating availability */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-20 right-0 z-20 rounded-2xl bg-white p-5 text-[#07140F] shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#75C043]" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Available
                </span>
              </div>

              <p className="mt-2 text-lg font-black">
                Local help
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <motion.a
          href="#quote"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="flex flex-col items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-white/50"
        >
          Scroll
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </div>
    </section>
  );
}

