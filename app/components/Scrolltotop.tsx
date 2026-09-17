"use client";

import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#2F6FED] text-white shadow-lg transition-colors hover:bg-[#1D4ED8]"
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}