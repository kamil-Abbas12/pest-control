"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
{
image: "/rodents.webp",
title: "Rodent Control",
text: "Mice, rats and other unwanted rodents.",
},
{
image: "/cockroaches.webp",
title: "Cockroach Control",
text: "Help dealing with unwanted cockroach activity.",
},
{
image: "/termites.webp",
title: "Termite Control",
text: "Protection against wood-damaging termites.",
},
{
image: "/wasps.webp",
title: "Wasps & Hornets",
text: "Help with nests and stinging pests.",
},
{
image: "/insects.webp",
title: "Insect Control",
text: "Solutions for common household insects.",
},
{
image: "/bedbug.webp",
title: "Bed Bug Control",
text: "Professional help for unwanted bed bugs.",
},
];

export default function Services() {
return ( <section className="bg-[#F7F8F4] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"> <div className="mx-auto max-w-7xl"> <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"> <div className="max-w-3xl"> <p className="text-sm font-black uppercase tracking-[.2em] text-[#70A84B]">
Our services </p>

        <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-[#102016] sm:text-6xl">
          We handle the pests
          <span className="text-[#6AA642]"> you don't want.</span>
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
          From everyday household pests to more persistent infestations,
          connect with professionals who can help identify the right
          approach.
        </p>
      </div>

      <span className="text-sm font-bold text-slate-400">
        Residential & Commercial
      </span>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service, index) => (
        <motion.article
          key={service.title}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            delay: index * 0.07,
          }}
          className="group overflow-hidden rounded-[30px] bg-white shadow-[0_15px_50px_rgba(16,32,22,.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(16,32,22,.13)]"
        >
          <div className="relative h-[300px] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-black text-[#102016]">
              0{index + 1}
            </span>

            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-2xl font-black text-white">
                {service.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-between gap-5 p-6">
            <p className="text-sm leading-6 text-slate-500">
              {service.text}
            </p>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF7E8] text-[#5E9D3A] transition group-hover:bg-[#75C043] group-hover:text-[#102016]">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>


);
}
