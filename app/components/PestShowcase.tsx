"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const items = [
{
image: "/technician.webp",
eyebrow: "Residential",
title: "Protect the place you call home.",
text: "Get connected with professionals who can help with common household pest problems.",
},
{
image: "/commercial.webp",
eyebrow: "Commercial",
title: "Keep your business protected.",
text: "Find professional assistance for offices, facilities, retail locations and other commercial spaces.",
},
{
image: "/protection.webp",
eyebrow: "Protection",
title: "Deal with the problem before it grows.",
text: "Early attention can help prevent a small pest problem from becoming a larger one.",
},
];

export default function PestShowcase() {
return ( <section className="bg-[#102016] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32"> <div className="mx-auto max-w-7xl"> <div className="max-w-3xl"> <p className="text-sm font-black uppercase tracking-[.2em] text-[#8BD15C]">
Built around your needs </p>


      <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">
        More than pest control.
        <span className="text-[#8BD15C]"> Peace of mind.</span>
      </h2>
    </div>

    <div className="mt-14 space-y-8">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className={`grid overflow-hidden rounded-[34px] bg-[#17281D] lg:grid-cols-2 ${
            index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative min-h-[350px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-black uppercase tracking-[.18em] text-[#8BD15C]">
              {item.eyebrow}
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              {item.title}
            </h3>

            <p className="mt-5 max-w-lg leading-8 text-white/55">
              {item.text}
            </p>

            <a
              href="#quote"
              className="mt-8 inline-flex w-fit items-center gap-2 font-black text-[#8BD15C]"
            >
              Get connected
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>


);
}
