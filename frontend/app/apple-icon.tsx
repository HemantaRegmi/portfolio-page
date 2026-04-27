import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background:
            "radial-gradient(circle at top left, #86d8ff 0%, #4DA8DA 40%, #123047 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 10,
            borderRadius: 32,
            border: "4px solid rgba(255,255,255,0.2)",
          }}
        />
        <div
          style={{
            fontSize: 102,
            fontWeight: 800,
            letterSpacing: "-0.12em",
            marginLeft: -10,
          }}
        >
          H
        </div>
        <div
          style={{
            position: "absolute",
            right: 30,
            bottom: 28,
            width: 24,
            height: 24,
            borderRadius: "9999px",
            background: "#d9f5ff",
          }}
        />
      </div>
    ),
    size,
  );
}
