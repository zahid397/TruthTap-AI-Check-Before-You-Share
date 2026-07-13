import type { ReactNode } from "react";

export type BadgeTone = "safe" | "warning" | "danger" | "info" | "neutral";

const TONES: Record<BadgeTone, string> = {
  safe: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  warning: "bg-amber-50 text-amber-700 ring-amber-200",
  danger: "bg-red-50 text-red-700 ring-red-200",
  info: "bg-blue-50 text-blue-700 ring-blue-200",
  neutral: "bg-slate-100 text-slate-600 ring-slate-300",
};

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}

export default function Badge({
  tone = "neutral",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset",
        TONES[tone],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
