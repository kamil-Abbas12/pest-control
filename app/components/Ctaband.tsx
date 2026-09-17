"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function CTABand() {
return ( <section className="relative overflow-hidden px-5 py-8 sm:px-8 lg:px-10"> <div className="relative mx-auto min-h-[580px] max-w-7xl overflow-hidden rounded-[38px]"> <Image
       src="/cta-bg.webp"
       alt=""
       fill
       className="object-cover"
       sizes="100vw"
     />


    <div className="absolute inset-0 bg-[#07140F]/65" />

    <div className="absolute inset-0 bg-gradient-to-r from-[#07140F]/90 to-transparent" />

    <div className="relative flex min-h-[580px] items-center px-7 py-16 sm:px-14 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl text-white"
      >
        <p className="text-sm font-black uppercase tracking-[.2em] text-[#9BDD70]">
          Ready to get started?
        </p>

        <h2 className="mt-5 text-5xl font-black tracking-[-.05em] sm:text-7xl">
          Don't let pests
          <span className="block text-[#8BD15C]">
            take over.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
          Start your request and connect with a local pest control
          professional today.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#quote"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#75C043] px-8 font-black text-[#07140F] transition hover:-translate-y-1 hover:bg-[#8BD15C]"
          >
            Get Help Now
            <ArrowRight className="h-5 w-5" />
          </Link>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 font-black backdrop-blur-xl transition hover:bg-white/15"
          >
            <PhoneCall className="h-5 w-5" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </motion.div>
    </div>
  </div>
</section>


);
}
