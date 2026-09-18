import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.brand}`,
  description: `Privacy Policy for ${siteConfig.brand}, a free referral service operated by TopDog Leads LLC.`,
};

const sections = [
  {
    heading: "1. Scope of This Policy",
    body: (
      <>
        This Privacy Policy describes how TopDog Leads LLC (&ldquo;Company&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and
        shares information when you visit or submit a request through {siteConfig.domain}{" "}
        (the &ldquo;Site&rdquo;). By using the Site, you agree to the collection and use
        of information as described here. If you do not agree, please do not use the
        Site.
      </>
    ),
  },
  {
    heading: "2. Information We Collect",
    body: (
      <>
        <p>
          <strong>Information you provide.</strong> When you submit a request through
          the Site, we collect information such as your first and last name, phone
          number, email address, service address (street, city, state, and ZIP code),
          date of birth, homeowner status, and your preferred contact time.
        </p>
        <p className="mt-3">
          <strong>Information collected automatically.</strong> When you visit the Site,
          we and our service providers automatically collect certain technical
          information, including your IP address, browser type and device information,
          referring pages, and the pages you visit, through cookies and similar
          technologies.
        </p>
        <p className="mt-3">
          <strong>Lead verification and consent data.</strong> To document and verify
          the consent you provide, the Site uses third-party compliance tools —
          including Jornaya (LeadiD) and TrustedForm — that generate a certificate or
          token recording the webpage, form fields, timestamp, and manner in which your
          information was submitted. This data helps us and our Partners confirm that
          your consent was properly obtained.
        </p>
      </>
    ),
  },
  {
    heading: "3. How We Use Your Information",
    body: (
      <>
        We use the information you provide to match you with independent, third-party
        pest control contractors (&ldquo;Partners&rdquo;) in your area, to communicate
        with you about your request, to verify and document consent, to detect and
        prevent fraud, to operate and improve the Site, and for internal analytics and
        marketing purposes.
      </>
    ),
  },
  {
    heading: "4. How We Store and Share Your Information",
    body: (
      <>
        <p>
          Information you submit is stored in our secure database and is also recorded
          in an internal spreadsheet system we use to manage and route requests.
        </p>
        <p className="mt-3">
          We share the information you submit with one or more Partners so that they
          can contact you about your pest control needs. We may also share information
          with service providers who help us operate the Site — including database
          hosting providers, spreadsheet and workflow tools, and lead-verification
          providers such as Jornaya and TrustedForm — or when required to do so by law,
          subpoena, or other legal process. We do not sell your personal information to
          unrelated third parties for their own independent marketing purposes.
        </p>
      </>
    ),
  },
  {
    heading: "5. Consent to Contact & TCPA Disclosure",
    body: (
      <>
        By submitting your phone number, you authorize us and our Partners to contact
        you by phone or text — including by autodialed, pre-recorded, or artificial
        voice calls — for any purpose, including marketing, even if your number appears
        on a state or federal Do Not Call list. Consent is not a condition of obtaining
        service. Message and data rates may apply. You can revoke this consent at any
        time by calling us at{" "}
        <a href={siteConfig.phoneHref} className="text-[#2F6FED] underline hover:text-[#1D4ED8]">
          {siteConfig.phoneDisplay}
        </a>{" "}
        or emailing{" "}
        <a href="mailto:info@topdoglead.com" className="text-[#2F6FED] underline hover:text-[#1D4ED8]">
          info@topdoglead.com
        </a>
        .
      </>
    ),
  },
  {
    heading: "6. Cookies and Tracking Technologies",
    body: (
      <>
        We use cookies and similar technologies to remember your preferences,
        understand how visitors use the Site, and measure the effectiveness of our
        advertising. You can control cookies through your browser settings, though
        disabling them may affect how the Site functions.
      </>
    ),
  },
  {
    heading: "7. Data Retention",
    body: (
      <>
        We retain the information you submit for as long as necessary to fulfill the
        purposes described in this Policy, including to service your request, maintain
        business records, comply with legal obligations, resolve disputes, and enforce
        our agreements.
      </>
    ),
  },
  {
    heading: "8. Your Choices and Rights",
    body: (
      <>
        Depending on where you live, you may have the right to request access to,
        correction of, or deletion of your personal information, or to opt out of
        certain uses of your information. To exercise these rights, contact us using
        the details below.
      </>
    ),
  },
  {
    heading: "9. Data Security",
    body: (
      <>
        We use reasonable administrative, technical, and physical safeguards designed
        to protect your information. However, no method of transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </>
    ),
  },
  {
    heading: "10. Children's Privacy",
    body: (
      <>
        The Site is not directed to individuals under the age of 18, and we do not
        knowingly collect personal information from children.
      </>
    ),
  },
  {
    heading: "11. Changes to This Policy",
    body: (
      <>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date below reflects the most recent revision. We encourage you
        to review this page periodically.
      </>
    ),
  },
  {
    heading: "12. Contact Us",
    body: (
      <>
        If you have questions about this Privacy Policy or how your information is
        handled, please call us at{" "}
        <a href={siteConfig.phoneHref} className="text-[#2F6FED] underline hover:text-[#1D4ED8]">
          {siteConfig.phoneDisplay}
        </a>
        , email{" "}
        <a href="mailto:info@topdoglead.com" className="text-[#2F6FED] underline hover:text-[#1D4ED8]">
          info@topdoglead.com
        </a>
        , or see our{" "}
        <Link href="/terms" className="text-[#2F6FED] underline hover:text-[#1D4ED8]">
          Terms and Conditions
        </Link>
        .
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      <div className="border-b border-[#E5E7EB] bg-[#F1F4FA]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-extrabold text-[#0B1630] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#4B5563] sm:text-base">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-sm leading-relaxed text-[#374151] sm:text-base">
          This Privacy Policy explains how TopDog Leads LLC collects, uses, and shares
          information in connection with {siteConfig.domain}. This is placeholder legal
          copy intended as a starting point only — please have it reviewed by qualified
          counsel before publishing it live.
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-[#0B1630] sm:text-2xl">
                {section.heading}
              </h2>
              <div className="mt-3 text-sm leading-relaxed text-[#374151] sm:text-base">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}