"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Phone, UserCheck } from "lucide-react";

const steps = [
{
number: "01",
icon: Phone,
title: "Share your pest concerns",
text: "Enter your basic information and details about your pest concern.",
},
{
number: "02",
icon: ClipboardCheck,
title: "Get connected",
text: "We'll help connect you with an appropriate local pest control professional.",
},
{
number: "03",
icon: UserCheck,
title: "Explore your options",
text: "Speak with a professional about your pest problem, available services, and scheduling options.",
},
];

export default function ProcessSteps() {
return ( <section className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"> <div className="mx-auto max-w-7xl"> <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"> <div className="max-w-3xl"> <p className="text-sm font-black uppercase tracking-[.2em] text-[#70A84B]">
How it works </p>


        <h2 className="mt-4 text-4xl font-black tracking-[-.04em] text-[#102016] sm:text-6xl">
          Simple. Fast. Straightforward.
        </h2>
      </div>

      <span className="text-sm font-bold text-slate-400">
        Three simple steps
      </span>
    </div>

    <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
      <div className="absolute left-[16%] right-[16%] top-16 hidden h-px bg-[#DCE8D5] lg:block" />

      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.article
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative z-10 rounded-[30px] bg-[#F7F8F4] p-8"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-[#70A84B]">
                {step.number}
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102016] text-[#8BD15C]">
                <Icon className="h-6 w-6" />
              </div>
            </div>

            <h3 className="mt-8 text-2xl font-black text-[#102016]">
              {step.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              {step.text}
            </p>

            <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#5E9D3A]">
              Continue
              <ArrowRight className="h-4 w-4" />
            </div>
          </motion.article>
        );
      })}
    </div>
  </div>
</section>


);
}
