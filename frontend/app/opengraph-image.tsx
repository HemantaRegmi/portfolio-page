import { ImageResponse } from "next/og";
import { siteConfig } from "@/utils/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          background:
            "linear-gradient(135deg, #f8fdff 0%, #d7effb 40%, #7dc8ec 100%)",
          color: "#123047",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 760,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontSize: 28,
                fontWeight: 700,
                letterSpacing: "-0.04em",
              }}
            >
              <div
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 9999,
                  background: "#4DA8DA",
                }}
              />
              {siteConfig.siteName}
            </div>
            <div
              style={{
                fontSize: 74,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "-0.06em",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 34,
                lineHeight: 1.2,
                fontWeight: 600,
                color: "#21506d",
              }}
            >
              {siteConfig.role}
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.35,
                color: "#2d536b",
              }}
            >
              Building scalable web apps, cloud infrastructure, and
              healthcare-focused digital products.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              minWidth: 270,
              padding: "28px 30px",
              borderRadius: 32,
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(18,48,71,0.08)",
              boxShadow: "0 24px 60px rgba(18,48,71,0.12)",
            }}
          >
            <div style={{ fontSize: 22, color: "#4b6b80" }}>Find me on</div>
            <div style={{ fontSize: 30, fontWeight: 700 }}>GitHub</div>
            <div style={{ fontSize: 22, color: "#2d536b" }}>
              github.com/HemantaRegmi
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#3f6278",
          }}
        >
          <div>{siteConfig.url}</div>
          <div>{siteConfig.location}</div>
        </div>
      </div>
    ),
    size,
  );
}
