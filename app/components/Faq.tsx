"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    q: "How much does treatment cost?",
    a: `It depends on the pest, how bad it's gotten, and what treatment it needs — there's no single number that's honest. The fastest way to get a real estimate is a no-obligation call to ${siteConfig.phoneDisplay}.`,
  },
  {
    q: `Do you cover ${siteConfig.locationLabel}?`,
    a: `Yes. We work with local technicians throughout the ${siteConfig.locationLabel} area, and most requests get a same-day or next-day appointment.`,
  },
  {
    q: "Is the call actually free?",
    a: "Yes — the call is free and there's no obligation to book anything. You'll only pay if and when you decide to move forward with a technician.",
  },
  {
    q: "What if it's an emergency?",
    a: "Call the number above any time. Urgent situations — an active wasp nest, a heavy rodent problem — are prioritized for the soonest available slot.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-[Space_Grotesk] text-3xl font-semibold text-[#1C2521] sm:text-4xl">
          Questions people ask
        </h2>

        <div className="mt-10 divide-y divide-[#D9D6C9] border-y border-[#D9D6C9]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-[Space_Grotesk] text-base font-semibold text-[#1C2521] sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 text-xl text-[#1C2521] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-[15px] leading-relaxed text-[#1C2521]/70">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}