"use client";

import { Glass, type GlassOptics } from "@samasante/liquid-glass";
import type { HTMLAttributes } from "react";

const surfaceOptics: Partial<GlassOptics> = {
  mapSize: 128,
  strength: 0.025,
  depth: 0.12,
  curvature: 0.08,
  bend: 0.3,
  dispersion: 0.03,
  frost: 16,
  saturate: 1.2,
  brightness: 0,
  sheen: 0.35,
  specular: 0.6,
  glow: 0.02,
};

interface GlassSurfaceProps extends HTMLAttributes<HTMLDivElement> {
  tone?: "light" | "dark";
  interactive?: boolean;
}

export function GlassSurface({
  children,
  className = "",
  style,
  tone = "light",
  interactive = false,
  ...props
}: GlassSurfaceProps) {
  return (
    <Glass
      {...props}
      optics={surfaceOptics}
      data-tone={tone}
      className={`glass-surface ${interactive ? "glass-surface-interactive" : ""} ${className}`}
      style={{ display: "block", ...style }}
    >
      {children}
    </Glass>
  );
}
