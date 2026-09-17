"use client";

import { motion } from "framer-motion";
import {
BadgeCheck,
Clock3,
Home,
ShieldCheck,
} from "lucide-react";

const features = [
{
icon: ShieldCheck,
title: "Professional connections",
text: "Connect with pest control professionals who can discuss your situation.",
},
{
icon: Clock3,
title: "Fast response",
text: "Same or next-day appointments may be available depending on location.",
},
{
icon: Home,
title: "Home & business",
text: "Assistance is available for residential and commercial pest problems.",
},
{
icon: BadgeCheck,
title: "Wide pest coverage",
text: "Get help with many common household and property pests.",
},
];

export default function WhyChooseUs() {
return ( <section className="bg-[#F7F8F4] px-5 py-24 sm:px-8 lg:px-10 lg:py-32"> <div className="mx-auto max-w-7xl"> <div className="mx-auto max-w-3xl text-center"> <p className="text-sm font-black uppercase tracking-[.2em] text-[#70A84B]">
Why get connected </p>


      <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-[#102016] sm:text-6xl">
        Everything starts with the right connection.
      </h2>

      <p className="mt-5 leading-8 text-slate-500">
        We make it easier to start the conversation with a local pest
        control professional.
      </p>
    </div>

    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-[28px] bg-white p-7 shadow-[0_12px_40px_rgba(16,32,22,.06)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF7E8] text-[#5E9D3A]">
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="mt-7 text-xl font-black text-[#102016]">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              {feature.text}
            </p>
          </motion.article>
        );
      })}
    </div>
  </div>
</section>


);
}
