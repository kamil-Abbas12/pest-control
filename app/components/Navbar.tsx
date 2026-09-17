"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link href="/" aria-label={`${siteConfig.brand} Home`} className="shrink-0">
          <Image src="/logo.png" alt={`${siteConfig.brand} logo`} width={240} height={70} priority className="h-9 w-auto object-contain sm:h-10 lg:h-11" />
        </Link>

        <div className="hidden items-center gap-2 text-sm font-semibold text-slate-500 md:flex">
          <ShieldCheck className="h-4 w-4 text-[#2F6FED]" />
          <span>{siteConfig.locationLabel} service network</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="#help" className="hidden rounded-xl bg-[#07152D] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#122952] sm:block">
            Get Help
          </Link>
          <a href={siteConfig.phoneHref} className="flex h-11 items-center gap-2 rounded-xl bg-[#2F6FED] px-4 text-sm font-extrabold text-white shadow-lg shadow-blue-500/15 transition hover:bg-[#1D4ED8] sm:h-12 sm:px-5">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
