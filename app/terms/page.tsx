import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Terms and Conditions | ${siteConfig.brand}`,
  description: `Terms and Conditions for ${siteConfig.brand}, TopDog Leads LLC's free nationwide referral service — review the rules, disclosures, and conditions for using our site.`,
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: (
      <>
        By accessing or using this website (the &ldquo;Site&rdquo;), operated by TopDog
        Leads LLC (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;), you agree to be bound by these Terms and Conditions
        (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not use the
        Site.
      </>
    ),
  },
  {
    heading: "2. Description of Service",
    body: (
      <>
        {siteConfig.brand}™ is a free referral service that helps users connect with
        independent, third-party pest control contractors (&ldquo;Partners&rdquo;). We do
        not perform pest control services ourselves. Submitting a request through the Site
        does not obligate you to purchase any product or service.
      </>
    ),
  },
  {
    heading: "3. No Warranty of Contractor Work",
    body: (
      <>
        All Partners are independent contractors and are not employees, agents, or joint
        venturers of the Company. We do not supervise, direct, control, or monitor
        Partners&rsquo; work and make no representation or warranty, express or implied,
        regarding the quality, safety, timeliness, or legality of any services performed.
        It is your responsibility to verify that any contractor you engage holds the
        licenses, certifications, and insurance required for the work being performed in
        your jurisdiction.
      </>
    ),
  },
  {
    heading: "4. Consent to Be Contacted",
    body: (
      <>
        By submitting your phone number or other contact information through the Site, you
        authorize the Company and its Partners to contact you by phone, text message
        (SMS), or email — including by autodialed, pre-recorded, or artificial voice calls
        — for any purpose, including marketing, even if your number is listed on a
        state or national Do Not Call registry. Consent to be contacted is not a condition
        of purchasing any service. Message and data rates may apply. You may revoke this
        consent at any time; see our{" "}
        <Link href="/privacy-policy" className="text-[#2F6FED] underline hover:text-[#1D4ED8]">
          Privacy Policy
        </Link>{" "}
        for details on how to do so.
      </>
    ),
  },
  {
    heading: "5. Compensation Disclosure",
    body: (
      <>
        The Company is compensated financially by its Partners for referrals generated
        through the Site. This compensation does not affect the price you pay for any
        service and does not constitute an endorsement or guarantee of any particular
        Partner.
      </>
    ),
  },
  {
    heading: "6. Use of the Site",
    body: (
      <>
        You agree to use the Site only for lawful purposes and to provide accurate,
        current information when submitting a request. You may not use the Site to
        transmit any material that is unlawful, harassing, defamatory, or otherwise
        objectionable, or to attempt to interfere with the proper functioning of the Site.
      </>
    ),
  },
  {
    heading: "7. Intellectual Property",
    body: (
      <>
        All content on the Site, including text, graphics, logos, and images, is the
        property of the Company or its licensors and is protected by applicable
        intellectual property laws. You may not reproduce, distribute, or create
        derivative works from this content without our prior written consent.
      </>
    ),
  },
  {
    heading: "8. Limitation of Liability",
    body: (
      <>
        To the fullest extent permitted by law, the Company shall not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or any loss of
        profits or revenues, arising out of or related to your use of the Site or any
        services performed by a Partner.
      </>
    ),
  },
  {
    heading: "9. Changes to These Terms",
    body: (
      <>
        We may update these Terms from time to time. The &ldquo;Last updated&rdquo; date
        below reflects the most recent revision. Continued use of the Site after changes
        are posted constitutes your acceptance of the revised Terms.
      </>
    ),
  },
  {
    heading: "10. Contact Us",
    body: (
      <>
        If you have questions about these Terms, please call us at{" "}
        <a href={siteConfig.phoneHref} className="text-[#2F6FED] underline hover:text-[#1D4ED8]">
          {siteConfig.phoneDisplay}
        </a>{" "}
        or visit our{" "}
        <Link href="/#faq" className="text-[#2F6FED] underline hover:text-[#1D4ED8]">
          FAQ
        </Link>{" "}
        page.
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white">
      <div className="border-b border-[#E5E7EB] bg-[#F1F4FA]">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-extrabold text-[#0B1630] sm:text-4xl">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-sm text-[#4B5563] sm:text-base">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-sm leading-relaxed text-[#374151] sm:text-base">
          Please read these Terms and Conditions carefully before using{" "}
          {siteConfig.domain}. This is placeholder legal copy intended as a starting
          point only — please have it reviewed by qualified counsel before publishing it
          live.
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-[#0B1630] sm:text-2xl">
                {section.heading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#374151] sm:text-base">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}