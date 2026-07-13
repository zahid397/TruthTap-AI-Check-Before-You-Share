import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds a gentle lift on hover (for clickable / feature cards) */
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft",
        hover
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
