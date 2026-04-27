import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: 120,
          background:
            "radial-gradient(circle at top left, #86d8ff 0%, #4DA8DA 38%, #123047 100%)",
          color: "white",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 100,
            border: "12px solid rgba(255,255,255,0.18)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 290,
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.12em",
            marginLeft: -20,
          }}
        >
          H
        </div>
        <div
          style={{
            position: "absolute",
            right: 96,
            bottom: 92,
            width: 84,
            height: 84,
            borderRadius: "9999px",
            background: "#d9f5ff",
            boxShadow: "0 0 36px rgba(217,245,255,0.7)",
          }}
        />
      </div>
    ),
    size,
  );
}
