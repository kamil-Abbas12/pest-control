"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Form from "./Form";

export default function PremiumQuote() {
  return (
    <section
      id="quote"
      className="relative z-20 mt-16 px-4 sm:px-8 lg:mt-20 lg:px-10 lg:pt-20"
    >
      {/* overflow-clip (not overflow-hidden) so the sticky left column still works */}
      <div className="relative mx-auto max-w-7xl overflow-clip rounded-[28px] shadow-[0_35px_100px_rgba(10,25,15,.20)] sm:rounded-[36px]">
        <Image
          src="/pest-control.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#07140F]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07140F]/90 via-[#07140F]/65 to-[#07140F]/40 lg:bg-gradient-to-r lg:from-[#07140F]/90 lg:via-[#07140F]/65 lg:to-[#07140F]/30" />

        {/*
          Stacked on mobile/tablet, two columns from lg.
          lg:items-start  -> left copy aligns to the top instead of floating
                             to the middle of a very tall form.
        */}
        <div className="relative grid gap-8 p-5 sm:p-10 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-10 lg:p-10 xl:gap-16 xl:p-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-white lg:sticky lg:top-28 lg:self-start lg:py-6 xl:py-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#BDEAA4] backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Get started
            </div>

            <h2 className="mt-5 max-w-xl text-3xl font-black tracking-tight sm:text-4xl xl:text-5xl">
              Tell us what is bugging you.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Provide your details and connect with a pest control
              professional who can discuss your situation and available
              options.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Connect with local professionals",
                "Residential & commercial assistance",
                "No-obligation connection",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#8BD15C]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="w-full min-w-0 rounded-[24px] border border-white/20 bg-white p-4 shadow-2xl sm:rounded-[28px] sm:p-6 lg:p-5 xl:p-6"
          >
            <div className="mb-4 flex items-center justify-between gap-4 px-1 sm:mb-5 sm:px-2">
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#75A94C]">
                  Free connection
                </p>

                <h3 className="mt-1 text-xl font-black text-[#102016] sm:text-2xl">
                  Get pest control help
                </h3>
              </div>

              <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF7E8] text-[#5E9D3A] sm:flex">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>

            {/* YOUR EXISTING FUNCTIONAL FORM */}
            <Form />
          </motion.div>
        </div>
      </div>
    </section>
  );
}