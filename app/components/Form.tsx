"use client";

import { useEffect, useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Building2,
  Calendar,
  Clock,
  Lock,
  Loader2,
  Check,
  ChevronDown,
} from "lucide-react";

// Same Jornaya campaign snippet ID as the solar site — confirmed working.
const JORNAYA_CAMPAIGN_ID = "372b9fce-b1fd-68e6-0d81-5286de90f4f0";

// Two columns from sm up, stacked on phones so inputs never get cramped.
const ROW = "grid grid-cols-1 gap-3 sm:grid-cols-2";

// text-base on mobile prevents iOS Safari from zooming in on focus (it zooms
// on anything under 16px). Taller fields on touch devices, compact on sm+.
const CONTROL =
  "h-11 w-full min-w-0 rounded-lg border border-slate-300 pl-9 pr-3 text-base text-slate-700 placeholder:text-slate-400 focus:border-[#2F6FED] focus:outline-none focus:ring-1 focus:ring-[#2F6FED] sm:h-10 sm:text-sm";

function sanitizeDigits(e: React.FormEvent<HTMLInputElement>, maxLen: number) {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/\D/g, "").slice(0, maxLen);
}

function sanitizeState(e: React.FormEvent<HTMLInputElement>) {
  const target = e.target as HTMLInputElement;
  target.value = target.value.replace(/[^a-zA-Z]/g, "").toUpperCase().slice(0, 2);
}

function captureTrackingTokens(): boolean {
  const leadidToken = document.querySelector<HTMLInputElement>(
    "#leadid_token, input[name='universal_leadid']"
  );
  const hidLeadid = document.getElementById("Hidleadid") as HTMLInputElement | null;
  const hidTrusted = document.getElementById("hidTrusted") as HTMLInputElement | null;
  const trustedToken = document.querySelector<HTMLInputElement>(
    "input[name^='xxTrustedFormCertUrl'], input[id^='xxTrustedFormCertUrl']"
  );

  let jornayaReady = false;

  if (leadidToken && hidLeadid && leadidToken.value) {
    hidLeadid.value = leadidToken.value;
    jornayaReady = true;
  }
  if (trustedToken && hidTrusted && trustedToken.value) {
    hidTrusted.value = trustedToken.value;
  }

  return jornayaReady;
}

function InputField({
  icon,
  name,
  placeholder,
  type = "text",
  required = false,
  maxLength,
  inputMode,
  autoComplete,
  onInput,
}: {
  icon: React.ReactNode;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  autoComplete?: string;
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative min-w-0">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-label={placeholder}
        maxLength={maxLength}
        inputMode={inputMode}
        autoComplete={autoComplete}
        onInput={onInput}
        // The date rule keeps iOS from centering the date text.
        className={`${CONTROL} [&::-webkit-date-and-time-value]:text-left`}
      />
    </div>
  );
}

export default function Form({ embedded = false }: { embedded?: boolean }) {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jornayaReady, setJornayaReady] = useState(false);
  const [formError, setFormError] = useState("");
  const [ownsHome, setOwnsHome] = useState<"yes" | "no" | null>(null);
  const [ownsHomeError, setOwnsHomeError] = useState(false);

  useEffect(() => {
    if ((window as any).__leadComplianceLoaded) {
      // Scripts already running from a previous mount in this session —
      // just start polling for the tokens they produce.
      const poll = () => {
        const ready = captureTrackingTokens();
        if (ready) setJornayaReady(true);
      };
      poll();
      const polling = window.setInterval(poll, 500);
      return () => window.clearInterval(polling);
    }
    (window as any).__leadComplianceLoaded = true;

    const poll = () => {
      const ready = captureTrackingTokens();
      if (ready) setJornayaReady(true);
    };

    poll();
    const polling = window.setInterval(poll, 500);

    const trustedFormField = "xxTrustedFormCertUrl";
    const provideReferrer = false;
    const trustedScript = document.createElement("script");
    trustedScript.type = "text/javascript";
    trustedScript.async = true;
    trustedScript.src =
      "http" +
      (document.location.protocol === "https:" ? "s" : "") +
      "://api.trustedform.com/trustedform.js?provide_referrer=" +
      encodeURIComponent(String(provideReferrer)) +
      "&field=" +
      encodeURIComponent(trustedFormField) +
      "&l=" +
      new Date().getTime() +
      Math.random();
    document.head.appendChild(trustedScript);

    if (!document.getElementById("LeadiDscript_campaign")) {
      const leadidScript = document.createElement("script");
      leadidScript.id = "LeadiDscript_campaign";
      leadidScript.type = "text/javascript";
      leadidScript.async = true;
      leadidScript.src = `//create.lidstatic.com/campaign/${JORNAYA_CAMPAIGN_ID}.js?snippet_version=2`;

      const placeholder = document.getElementById("LeadiDscript");
      if (placeholder?.parentNode) {
        placeholder.parentNode.insertBefore(leadidScript, placeholder);
      } else {
        document.body.appendChild(leadidScript);
      }
    }

    return () => {
      window.clearInterval(polling);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const readyNow = captureTrackingTokens();
    if (!jornayaReady && !readyNow) {
      setFormError("Still verifying your session — please wait a moment.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!ownsHome) {
      setOwnsHomeError(true);
      return;
    }
    setOwnsHomeError(false);

    if (!agreed) {
      setFormError("Please agree to the privacy policy to continue.");
      return;
    }

    const phone = String(formData.get("phone") ?? "");
    const zip = String(formData.get("zip") ?? "");
    const state = String(formData.get("state") ?? "");

    if (!/^\d{10}$/.test(phone)) {
      setFormError("Phone number must be exactly 10 digits.");
      return;
    }
    if (!/^\d{5}$/.test(zip)) {
      setFormError("ZIP code must be exactly 5 digits.");
      return;
    }
    if (!/^[A-Z]{2}$/.test(state)) {
      setFormError("State must be a 2-letter abbreviation (e.g. NY, CA).");
      return;
    }
    setFormError("");
    setIsSubmitting(true);

    const hidLeadid = form.querySelector<HTMLInputElement>("#Hidleadid");
    const hidTrusted = form.querySelector<HTMLInputElement>("#hidTrusted");

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone,
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      state,
      zip,
      dob: formData.get("dob"),
      ownsHome,
      preferredTime: formData.get("preferredTime"),
      jornayaId: hidLeadid?.value ?? "",
      trustedFormUrl: hidTrusted?.value ?? "",
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Submit failed:", result.error);
        setFormError("Something went wrong. Please try again or call us directly.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setFormError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id="help"
      // embedded: no navy band, no card-in-a-card — the parent supplies the card.
      className={embedded ? "w-full" : "bg-[#0B1630] px-4 py-12 sm:py-16 lg:py-20"}
    >
      <div
        className={
          embedded
            ? "w-full"
            : "mx-auto w-full max-w-xl rounded-2xl bg-white p-5 shadow-2xl sm:p-8"
        }
      >
        <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4 sm:mb-6 sm:pb-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF] sm:h-11 sm:w-11">
            <Home className="h-5 w-5 text-[#2F6FED]" />
          </span>
          <div className="min-w-0">
            <h2 className="text-lg font-extrabold text-[#0B1630] sm:text-xl">Schedule a Call</h2>
            <p className="text-sm font-semibold text-[#1D4ED8]">with the Pest Control Team</p>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-center sm:p-6">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#2F6FED]/10">
              <Check className="h-5 w-5 text-[#1D4ED8]" strokeWidth={3} />
            </div>
            <p className="text-base font-bold text-[#0B1630]">Thanks — you&apos;re all set!</p>
            <p className="mt-1.5 text-sm text-slate-600">
              We&apos;ve received your details and will get back to you shortly to confirm a time.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
            <input id="leadid_token" name="universal_leadid" type="hidden" defaultValue="" />
            <input id="Hidleadid" name="Hidleadid" type="hidden" defaultValue="" />
            <input id="hidTrusted" name="hidTrusted" type="hidden" defaultValue="" />

            <div className={ROW}>
              <InputField
                icon={<User className="h-4 w-4" />}
                name="firstName"
                placeholder="First Name*"
                autoComplete="given-name"
                required
              />
              <InputField
                icon={<User className="h-4 w-4" />}
                name="lastName"
                placeholder="Last Name*"
                autoComplete="family-name"
                required
              />
            </div>

            <InputField
              icon={<Phone className="h-4 w-4" />}
              name="phone"
              placeholder="Phone Number* (10 digits)"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              onInput={(e) => sanitizeDigits(e, 10)}
              required
            />

            <InputField
              icon={<Mail className="h-4 w-4" />}
              name="email"
              placeholder="Email Address*"
              type="email"
              autoComplete="email"
              required
            />

            <InputField
              icon={<Home className="h-4 w-4" />}
              name="address"
              placeholder="Street Address*"
              autoComplete="address-line1"
              required
            />

            <div className={ROW}>
              <InputField
                icon={<Building2 className="h-4 w-4" />}
                name="city"
                placeholder="City*"
                autoComplete="address-level2"
                required
              />
              <InputField
                icon={<MapPin className="h-4 w-4" />}
                name="state"
                placeholder="State* (e.g. NY)"
                maxLength={2}
                onInput={sanitizeState}
                required
              />
            </div>

            <div className={ROW}>
              <InputField
                icon={<MapPin className="h-4 w-4" />}
                name="zip"
                placeholder="ZIP Code* (5 digits)"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={5}
                onInput={(e) => sanitizeDigits(e, 5)}
                required
              />
              <InputField
                icon={<Calendar className="h-4 w-4" />}
                name="dob"
                placeholder="Date of Birth*"
                type="date"
                autoComplete="bday"
                required
              />
            </div>

            <div>
              <p className="mb-2 text-sm font-medium text-[#0B1630]">Do you own your home?*</p>
              <div className="flex gap-3">
                {(["yes", "no"] as const).map((val) => (
                  <button
                    type="button"
                    key={val}
                    aria-pressed={ownsHome === val}
                    onClick={() => {
                      setOwnsHome(val);
                      setOwnsHomeError(false);
                    }}
                    className={`flex min-h-11 flex-1 items-center justify-between rounded-lg border px-4 py-2.5 text-base font-medium transition-colors sm:min-h-10 sm:text-sm ${
                      ownsHome === val
                        ? "border-[#2F6FED] bg-[#2F6FED]/5 text-[#0B1630]"
                        : "border-slate-300 text-slate-600"
                    }`}
                  >
                    {val === "yes" ? "Yes" : "No"}
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${
                        ownsHome === val ? "border-[#2F6FED] bg-[#2F6FED]" : "border-slate-300"
                      }`}
                    >
                      {ownsHome === val && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                    </span>
                  </button>
                ))}
              </div>
              {ownsHomeError && (
                <p className="mt-1.5 text-xs text-red-600">Please let us know if you own your home.</p>
              )}
            </div>

            <div className="relative min-w-0">
              <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select
                name="preferredTime"
                required
                defaultValue=""
                aria-label="Preferred time to receive a call"
                className={`${CONTROL} appearance-none truncate pr-9 text-slate-600`}
              >
                <option value="" disabled>
                  Preferred Time to Receive a Call*
                </option>
                <option value="Morning (8am - 12pm)">Morning (8am - 12pm)</option>
                <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                <option value="Evening (4pm - 8pm)">Evening (4pm - 8pm)</option>
              </select>
              {/* appearance-none removes the native arrow, so draw our own */}
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </div>

            <label className="flex items-start gap-2.5 pt-1 text-xs leading-5 text-slate-500 sm:gap-2">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#2F6FED] focus:ring-[#2F6FED] sm:h-3.5 sm:w-3.5"
              />
              <span>
                By submitting the form I agree with the{" "}
                <a href="/privacy-policy" className="text-[#1D4ED8] underline">
                  Privacy policy
                </a>
              </span>
            </label>

            {formError && <p className="-mt-1 text-xs text-red-600">{formError}</p>}

            <button
              type="submit"
              disabled={isSubmitting || !jornayaReady}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#2F6FED] py-3 text-base font-bold text-white transition-colors hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-11 sm:text-sm"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : !jornayaReady ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Preparing form...
                </>
              ) : (
                <>Submit</>
              )}
            </button>

            {!jornayaReady && !isSubmitting && (
              <p className="text-center text-xs text-slate-400">
                Verifying your session — this usually only takes a second or two.
              </p>
            )}

            <p className="flex items-center justify-center gap-1.5 pt-1 text-xs text-slate-500">
              <Lock className="h-3.5 w-3.5 shrink-0" /> Your information is safe and secure.
            </p>
          </form>
        )}
      </div>
      <div id="LeadiDscript" />
    </div>
  );
}