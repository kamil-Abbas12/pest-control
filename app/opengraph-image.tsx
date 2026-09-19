import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.brand} | Connect With Local Exterminators`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at module scope (cropped copy of /public/logo.png)
const logoData = await readFile(join(process.cwd(), "public/og-logo.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

const highlights = [
  "Local Pest Professionals",
  "Fast Response",
  "No-Obligation Call",
];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          padding: "52px 64px",
          background: "#07140F",
          backgroundImage:
            "radial-gradient(circle at 90% 8%, rgba(117,192,67,0.32) 0%, rgba(117,192,67,0) 48%)",
          color: "#FFFFFF",
        }}
      >
        {/* Decorative circles (echo the logo's circle mark) */}
        <div
          style={{
            position: "absolute",
            right: -150,
            bottom: -210,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "rgba(117,192,67,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -90,
            bottom: -150,
            width: 440,
            height: 440,
            borderRadius: 9999,
            border: "2px solid rgba(139,209,92,0.28)",
            display: "flex",
          }}
        />

        {/* Top row: logo + location pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#FFFFFF",
              borderRadius: 22,
              padding: "16px 28px",
            }}
          >
            <img src={logoSrc} width={300} height={108} alt="" />
          </div>

          <div
            style={{
              display: "flex",
              padding: "12px 24px",
              borderRadius: 9999,
              border: "1px solid rgba(255,255,255,0.22)",
              background: "rgba(255,255,255,0.08)",
              color: "#C5EFAE",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {siteConfig.locationLabel}
          </div>
        </div>

        {/* Headline + sub copy */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2.5,
            }}
          >
            <div style={{ display: "flex" }}>Pests Don’t Belong Here.</div>
            <div style={{ display: "flex", color: "#8BD15C" }}>
              Take Back Your Home.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 24,
              maxWidth: 800,
              fontSize: 28,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.74)",
            }}
          >
            Connect with trusted local pest control experts for rodents, termites,
            bed bugs, wasps and more.
          </div>
        </div>

        {/* Bottom row: highlights + domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {highlights.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 26,
                  fontSize: 21,
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 12,
                    height: 12,
                    borderRadius: 9999,
                    background: "#75C043",
                    marginRight: 10,
                  }}
                />
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              color: "#8BD15C",
            }}
          >
            {siteConfig.domain}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
