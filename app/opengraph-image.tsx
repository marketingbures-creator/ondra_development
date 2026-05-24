import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = `${siteConfig.brand.name} – ${siteConfig.hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1d4ed8 0%, #4338ca 50%, #7e22ce 100%)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, marginBottom: 16 }}>
          {siteConfig.brand.name}
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 400,
            opacity: 0.85,
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          {siteConfig.hero.headline}
        </div>
      </div>
    ),
    { ...size }
  );
}
