"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import Form from "./Form";

export default function PremiumQuote() {
return ( <section id="quote" className="relative z-20 -mt-24 px-5 sm:px-8 lg:px-10"> <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] shadow-[0_35px_100px_rgba(10,25,15,.20)]"> <Image
       src="/pest-control.webp"
       alt=""
       fill
       className="object-cover"
       sizes="100vw"
     />

   <div className="absolute inset-0 bg-[#07140F]/70" />

    <div className="absolute inset-0 bg-gradient-to-r from-[#07140F]/90 via-[#07140F]/65 to-[#07140F]/30" />

    <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[.9fr_1.1fr] lg:p-14">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-white"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#BDEAA4] backdrop-blur-xl">
          <Sparkles className="h-4 w-4" />
          Get started
        </div>

        <h2 className="mt-5 max-w-xl text-3xl font-black tracking-tight sm:text-5xl">
          Tell us what is bugging you.
        </h2>

        <p className="mt-5 max-w-xl leading-7 text-white/65">
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
              <CheckCircle2 className="h-5 w-5 text-[#8BD15C]" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="rounded-[28px] border border-white/20 bg-white p-4 shadow-2xl sm:p-6"
      >
        <div className="mb-5 flex items-center justify-between px-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#75A94C]">
              Free connection
            </p>

            <h3 className="mt-1 text-2xl font-black text-[#102016]">
              Get pest control help
            </h3>
          </div>

          <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#EEF7E8] text-[#5E9D3A] sm:flex">
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
