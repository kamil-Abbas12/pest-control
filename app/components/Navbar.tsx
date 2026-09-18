
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

const utilityLinks = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-[100] w-full transition-all duration-500 ${
          scrolled
            ? "bg-[#08150F]/95 shadow-[0_10px_40px_rgba(0,0,0,.18)] backdrop-blur-2xl"
            : "bg-[#07140F]/25 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:h-[94px] lg:px-10">
          {/* LOGO */}
          <Link
            href="/"
            aria-label={`${siteConfig.brand} Home`}
            className="relative z-[110] shrink-0"
          >
            <div className="rounded-xl bg-white px-3 py-2 shadow-lg sm:px-4">
              <Image
                src="/logo.png"
                alt={`${siteConfig.brand} logo`}
                width={240}
                height={70}
                priority
                className="h-8 w-auto object-contain sm:h-9 lg:h-10"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative py-3 text-sm font-bold text-white/80 transition hover:text-white"
              >
                {link.label}

                <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#8BD15C] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* More */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 py-3 text-sm font-bold text-white/80 transition hover:text-white"
              >
                More
                <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-3 rounded-2xl border border-white/10 bg-[#102016]/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                {utilityLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/15 xl:flex"
            >
              <Phone className="h-4 w-4 text-[#8BD15C]" />
              {siteConfig.phoneDisplay}
            </a>

            <a
              href="#quote"
              className="hidden items-center gap-2 rounded-full bg-[#75C043] px-5 py-3 text-sm font-black text-[#07140F] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#8BD15C] sm:flex"
            >
              Get Help
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl lg:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[90] bg-[#07140F]/98 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-xl flex-col justify-center px-7">
          <p className="mb-6 text-xs font-black uppercase tracking-[.25em] text-[#8BD15C]">
            Navigation
          </p>

          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-5 text-3xl font-black text-white transition hover:text-[#8BD15C]"
              >
                <span>
                  <span className="mr-4 text-sm font-bold text-white/25">
                    0{index + 1}
                  </span>
                  {link.label}
                </span>

                <ArrowRight className="h-6 w-6 text-[#8BD15C]" />
              </Link>
            ))}

            {utilityLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-5 text-xl font-bold text-white/70 transition hover:text-white"
              >
                <span>
                  <span className="mr-4 text-xs text-white/25">
                    0{index + 5}
                  </span>
                  {link.label}
                </span>

                <ArrowRight className="h-5 w-5" />
              </Link>
            ))}
          </div>

          <a
            href={siteConfig.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-8 flex h-14 items-center justify-center gap-3 rounded-full bg-[#75C043] font-black text-[#07140F]"
          >
            <Phone className="h-5 w-5" />
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}

