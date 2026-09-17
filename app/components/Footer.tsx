import Image from "next/image";
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
  { label: "Contact Us", href: "/contact" },
  { label: "Locations", href: "/locations" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Do Not Sell or Share My Personal Information", href: "/privacy-infosharing" },
  { label: "Limit the Use of My Sensitive Personal Information", href: "/privacy-sensitive" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Terms and Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1630] pt-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 pb-12 sm:grid-cols-4">
          <div className="sm:col-span-1">
            {/* White chip behind the logo so it stays legible on this navy
                background — remove the wrapping div if logo.png is already
                a light/white version made for dark backgrounds. */}
            <div className="inline-flex rounded-lg bg-white px-4 py-2.5">
              <Image
                src="/logo.png"
                alt={`${siteConfig.brand} logo`}
                width={240}
                height={70}
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance / referral disclosures — placeholder copy, have this reviewed by counsel before launch */}
        <div className="space-y-4 border-t border-white/10 py-10 text-center text-xs leading-relaxed text-white/40">
          <p>
            Copyright © {new Date().getFullYear()} TopDog Leads LLC. All rights reserved.
          </p>
          <p>
            {siteConfig.brand}™ is a free referral service operated by TopDog Leads LLC that
            helps users connect with local contractors. All contractors are independent and
            TopDog Leads LLC does not warrant or guarantee any work performed. It is the
            responsibility of the user to verify the contractor they hire has the necessary
            license, certifications and insurance required for the work being performed. RB
            Brands LLC is compensated financially by our partners for providing this
            service.
          </p>
          <p>
            By providing your phone number to TopDog Leads LLC, you authorize both us and our
            partners to call or text you for any purpose, including marketing purposes. You
            may be contacted by live, autodialed, pre-recorded, or artificial voice call,
            and/or SMS text, even if your phone number is on any national or state "Do Not
            Call" list. You are not obligated to make any sort of purchase and standard
            message and data rates may apply. You acknowledge that this consent may be
            revoked at your request by filling out our{" "}
            <a href="/privacy-infosharing" className="underline hover:text-white">
              Do Not Sell or Share My Personal Information
            </a>{" "}
            form, but that until such consent is revoked, you may receive calls from RB
            Brands LLC or our third party partners. Consent is not required to obtain
            service —{" "}
            <a href="/tcpa-consent" className="underline hover:text-white">
              Click Here
            </a>{" "}
            for more information.
          </p>
          <p>
            You should also review our{" "}
            <a href="/privacy-policy" className="underline hover:text-white">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="underline hover:text-white">
              Terms and Conditions
            </a>
            . Any third party products, brands or trademarks used are the sole property of
            their respective owner. No affiliation or endorsement is intended or implied.
          </p>
        </div>
      </div>
    </footer>
  );
}