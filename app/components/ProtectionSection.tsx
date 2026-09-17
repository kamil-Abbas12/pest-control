"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function ProtectionSection() {
return ( <section className="relative overflow-hidden bg-[#102016] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"> <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1fr]">
<motion.div
initial={{ opacity: 0, x: -35 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
> <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#75C043]/15 text-[#8BD15C]"> <ShieldCheck className="h-7 w-7" /> </div>


      <p className="mt-8 text-sm font-black uppercase tracking-[.2em] text-[#8BD15C]">
        Protection
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">
        Keep unwanted pests out of your space.
      </h2>

      <p className="mt-6 max-w-xl leading-8 text-white/55">
        Every pest situation is different. A local professional can
        evaluate the problem and explain the service options available for
        your property.
      </p>

      <div className="mt-8 space-y-4">
        {[
          "Residential pest assistance",
          "Commercial pest assistance",
          "Common household pest problems",
          "Professional service connections",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#8BD15C]" />
            <span className="font-semibold text-white/80">{item}</span>
          </div>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="overflow-hidden rounded-[36px]">
        <Image
          src="/protection-pest-control.webp"
          alt="Pest control protection"
          width={1000}
          height={800}
          className="h-[520px] w-full object-cover"
        />
      </div>

      <div className="absolute -bottom-6 -left-5 rounded-[24px] bg-white p-5 text-[#102016] shadow-2xl sm:-left-8">
        <p className="text-3xl font-black">01</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
          Protect your space
        </p>
      </div>
    </motion.div>
  </div>
</section>


);
}
