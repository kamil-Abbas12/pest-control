import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
        <div className="flex flex-col items-center px-6 py-6 text-center sm:px-8 sm:py-8">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F1F4FA]">
            <svg
              viewBox="0 0 24 24"
              className="h-10 w-10 text-[#0B1630]/70"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="mt-5 text-2xl font-bold text-[#0B1630]">Available Now</h3>
          <p className="mt-2 text-sm text-[#0B1630]/60">
            Get help with your pest problems today. Call now for fastest service.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2F6FED] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#1D4ED8]"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <a
          href="#"
          className="block bg-[#0B1630] px-6 py-4 text-center text-sm font-medium text-white underline underline-offset-2"
        >
          Exterminators in {siteConfig.locationLabel}
        </a>
      </div>
    </aside>
  );
}