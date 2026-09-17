import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
        <div className="flex flex-col items-center px-6 py-6 text-center sm:px-8 sm:py-8">
          <div className="flex h-50 w-50 items-center justify-center rounded-full bg-[#F1F4FA]">
        <Image
        src="/sidebar-pest.webp"
        alt="Pest Control"
        width={200}
        height={20}
        />
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