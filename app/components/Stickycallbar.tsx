import { siteConfig } from "@/lib/site-config";

export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D9D6C9] bg-white/95 backdrop-blur sm:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center gap-2 py-4 font-[Space_Grotesk] text-base font-semibold text-[#1C2521]"
      >
        Call now — {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}