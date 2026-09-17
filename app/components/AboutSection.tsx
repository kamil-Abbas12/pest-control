"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const points = [
"Connect with local pest control professionals",
"Residential and commercial assistance",
"Wide range of common pest problems",
"No-obligation connection",
];

export default function AboutSection() {
return ( <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"> <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
<motion.div
initial={{ opacity: 0, x: -40 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.7 }}
className="relative"
> <div className="relative overflow-hidden rounded-[36px]"> <Image
           src="/about.webp"
           alt="Pest control professional"
           width={900}
           height={900}
           className="h-[580px] w-full object-cover"
         />


        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
      </div>

      <div className="absolute -bottom-7 -right-4 rounded-[24px] bg-[#102016] p-6 text-white shadow-2xl sm:-right-8">
        <p className="text-4xl font-black text-[#8BD15C]">24/7</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-white/55">
          Pest assistance
        </p>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-sm font-black uppercase tracking-[.2em] text-[#70A84B]">
        About our network
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-[#102016] sm:text-6xl">
        A simpler way to deal with unwanted pests.
      </h2>

      <p className="mt-6 text-base leading-8 text-slate-500 sm:text-lg">
        When pests show up, getting the right help shouldn't be
        complicated. We make it easier to connect with local pest control
        professionals who can discuss your situation and available
        services.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {points.map((point) => (
          <div key={point} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#75C043]" />
            <span className="text-sm font-bold leading-6 text-[#24352A]">
              {point}
            </span>
          </div>
        ))}
      </div>

      <a
        href={siteConfig.phoneHref}
        className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#102016] px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#193022]"
      >
        Talk to a professional
        <ArrowRight className="h-5 w-5" />
      </a>
    </motion.div>
  </div>
</section>


);
}
