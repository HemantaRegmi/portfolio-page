import type { HTMLAttributes } from "react";

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
    <div
      {...props}
      data-tone={tone}
      className={`glass-surface ${interactive ? "glass-surface-interactive" : ""} ${className}`}
      style={{ display: "block", borderRadius: "1.5rem", ...style }}
    >
      {children}
    </div>
  );
}
