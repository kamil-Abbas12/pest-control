
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const serviceLinks = [
  "Commercial Services",
  "Residential Services",
  "Ants",
  "Bed Bugs",
  "Cockroaches",
  "Flies",
  "Insects",
  "Mice",
  "Mosquitoes",
  "Spiders",
  "Termites",
  "Wasps",
];

const companyLinks = [
  { label: "Contact Us", href: "#quote" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  
  {
    label: "Terms and Conditions",
    href: "/terms",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07140F] text-white">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#75C043]/10 blur-[130px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#75C043]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* TOP CTA */}
        <div className="border-b border-white/10 py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[.2em] text-[#8BD15C]">
                Need pest help?
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">
                Start with a simple conversation.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/45">
                Connect with a local pest control professional and discuss
                your situation and available service options.
              </p>
            </div>

            <Link
              href="#quote"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#75C043] px-7 font-black text-[#07140F] transition hover:-translate-y-1 hover:bg-[#8BD15C]"
            >
              Get Help Now
              <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <Link
              href="/"
              aria-label={`${siteConfig.brand} Home`}
              className="inline-flex rounded-xl bg-white px-4 py-3"
            >
              <Image
                src="/logo.png"
                alt={`${siteConfig.brand} logo`}
                width={240}
                height={70}
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              Helping people connect with local pest control professionals for
              residential and commercial pest problems.
            </p>

            <div className="mt-7 space-y-3">
              <a
                href={siteConfig.phoneHref}
                className="flex items-center gap-3 text-sm font-bold text-white/70 transition hover:text-[#8BD15C]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                  <Phone className="h-4 w-4 text-[#8BD15C]" />
                </span>
                {siteConfig.phoneDisplay}
              </a>

              <div className="flex items-center gap-3 text-sm text-white/50">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5">
                  <MapPin className="h-4 w-4 text-[#8BD15C]" />
                </span>
                {siteConfig.locationLabel}
              </div>
            </div>

            {/* Social */}
            <div className="mt-7 flex gap-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#75C043]/40 hover:bg-[#75C043] hover:text-[#07140F]"
              >
                <span className="text-sm font-black" aria-hidden="true">
                  f
                </span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#75C043]/40 hover:bg-[#75C043] hover:text-[#07140F]"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="18" height="18" x="3" y="3" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#75C043]/40 hover:bg-[#75C043] hover:text-[#07140F]"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.85c0-3.77-2.01-5.52-4.69-5.52-2.16 0-3.13 1.19-3.67 2.02V8.5H9.34V21h3.3v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.86 2.02 3.32V21H21v-7.15Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[.15em] text-white">
              Services
            </h3>

            <ul className="mt-6 grid grid-cols-1 gap-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-sm text-white/40 transition hover:text-[#8BD15C]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[.15em] text-white">
              Company
            </h3>

            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 transition hover:text-[#8BD15C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h3 className="text-sm font-black uppercase tracking-[.15em] text-white">
                Contact
              </h3>

              <a
                href={siteConfig.phoneHref}
                className="mt-5 flex items-center gap-3 text-sm font-bold text-white/60 hover:text-[#8BD15C]"
              >
                <Phone className="h-4 w-4 text-[#8BD15C]" />
                {siteConfig.phoneDisplay}
              </a>

              <a
                href="mailto:info@topdoglead.com"
                className="mt-3 flex items-center gap-3 text-sm font-bold text-white/60 hover:text-[#8BD15C]"
              >
                <Mail className="h-4 w-4 text-[#8BD15C]" />
                info@topdoglead.com
              </a>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[.15em] text-white">
              Legal
            </h3>

            <ul className="mt-6 space-y-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm leading-6 text-white/40 transition hover:text-[#8BD15C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[.03] p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8BD15C]" />

              <p className="text-xs leading-5 text-white/40">
                Independent contractors are responsible for their own
                licensing, certifications, insurance and work performed.
              </p>
            </div>
          </div>
        </div>

        {/* DISCLOSURES */}
        <div className="border-t border-white/10 py-10">
          <div className="mx-auto max-w-5xl space-y-5 text-center text-[11px] leading-6 text-white/30">
            <p>
              Copyright © {new Date().getFullYear()} TopDog Leads LLC. All
              rights reserved.
            </p>

            <p>
              {siteConfig.brand}™ is a free referral service operated by
              TopDog Leads LLC that helps users connect with local
              contractors. Contractors are independent businesses. TopDog
              Leads LLC does not warrant or guarantee any work performed by
              third-party contractors. Users should independently verify
              applicable licenses, certifications and insurance before hiring
              a contractor.
            </p>

            <p>
              By providing your phone number to TopDog Leads LLC, you
              acknowledge that you may receive calls or text messages from us
              and/or our partners, including marketing communications, subject
              to applicable law and your consent. Calls may be made using
              automated technology, prerecorded voice or artificial voice.
              Standard message and data rates may apply. You are not required
              to make a purchase to provide consent.
            </p>

            <p>
              Consent may be revoked as permitted by applicable law. See our{" "}
           
              <Link
                href="/privacy-policy"
                className="underline transition hover:text-white"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="underline transition hover:text-white"
              >
                Terms and Conditions
              </Link>
              . Any third-party products, brands or trademarks referenced are
              the property of their respective owners. No affiliation or
              endorsement is intended or implied.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

