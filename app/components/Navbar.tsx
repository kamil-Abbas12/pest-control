"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:h-[120px] lg:flex-nowrap lg:gap-0 lg:px-10 lg:py-0">
        {/* Left Side */}
        <div className="flex items-center">
          <Link href="/" aria-label={`${siteConfig.brand} Home`}>
            <Image
              src="/logo.png"
              alt={`${siteConfig.brand} logo`}
              width={240}
              height={70}
              priority
              className="h-9 w-auto object-contain sm:h-11 lg:h-12"
            />
          </Link>

          {/* Divider + coverage area — hidden on small screens to save space */}
          <div className="mx-4 hidden h-[32px] w-px bg-gray-400 md:mx-6 md:block lg:h-[40px]" />
          <span className="hidden text-base font-normal text-[#111827] md:block lg:text-[20px]">
            {siteConfig.locationLabel}
          </span>
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center gap-3 sm:w-auto sm:gap-4 lg:gap-6">
          <Link
            href="#technicians"
            className="hidden h-12 flex-1 items-center justify-center rounded-[10px] bg-[#0B1630] px-4 text-sm font-bold text-white transition hover:bg-[#14213d] sm:flex sm:px-6 sm:text-base lg:h-[68px] lg:min-w-[296px] lg:flex-none lg:px-8 lg:text-[19px]"
          >
            Technicians Available!
          </Link>

          <a
            href={siteConfig.phoneHref}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[10px] bg-[#2F6FED] px-4 text-sm font-bold text-white transition hover:bg-[#1D4ED8] sm:gap-3 sm:px-6 sm:text-base lg:h-[68px] lg:min-w-[257px] lg:flex-none lg:gap-4 lg:px-8 lg:text-[19px]"
          >
            <Phone className="h-4 w-4 shrink-0 sm:h-5 sm:w-5 lg:h-[25px] lg:w-[25px]" strokeWidth={2.5} />
            <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}