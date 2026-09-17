"use client";

import { useState } from "react";
import { siteConfig, theme } from "@/lib/site-config";

const faqs = [
  {
    q: "What pests can you get help with?",
    a: `Assistance is available for ants, roaches, rodents, termites, bed bugs, wasps, and more.`,
  },
  
  {
    q: "How do I find the right pest control professional?",
    a: "Share your pest concerns and details to connect with a local professional.",
  },
  {
    q:"How much does pest control cost?",
    a:"Pricing depends on the pest, property, and service needed."
  },
  {
    q: "What happens after I submit my request?",
    a: "A local professional may contact you to discuss your situation, service options, and availability.",
  },
 
  
  
  
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: theme.background }}
    >
      {/* soft brand-colored glow, kept subtle so it reads as texture, not decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-72 w-72 rounded-full blur-3xl sm:h-96 sm:w-96"
        style={{ backgroundColor: theme.primaryLight, opacity: 0.8 }}
      />

      <div className="relative mx-auto max-w-3xl px-6">
        <div className="max-w-xl">
          <h2
            className="font-[Space_Grotesk] text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: theme.dark }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: theme.muted }}>
            Straight answers before you pick up the phone. Anything else, our
            team is happy to walk you through it on the free call.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[#E1E8DE] rounded-2xl border border-[#E1E8DE] bg-white/60 px-6 shadow-[0_1px_2px_rgba(16,32,22,0.04)] backdrop-blur-sm sm:px-8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className="font-[Space_Grotesk] text-base font-semibold sm:text-lg"
                    style={{ color: theme.text }}
                  >
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-transform duration-200"
                    style={{
                      backgroundColor: isOpen ? theme.primary : theme.primaryLight,
                      color: isOpen ? theme.white : theme.primaryDark,
                      transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="min-h-0">
                    <p
                      className="pb-6 pr-10 text-[15px] leading-relaxed"
                      style={{ color: theme.muted }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}