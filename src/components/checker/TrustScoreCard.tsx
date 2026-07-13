import Badge from "@/components/ui/Badge";
import {
  AlertTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@/components/ui/Icons";
import type { JSX } from "react";
import type { RiskStatus } from "@/types";

interface TrustScoreCardProps {
  score: number;
  status: RiskStatus;
  statusLabel: string;
}

/** Visual config per verdict — colors mirror the mockup palette. */
const CONFIG: Record<
  RiskStatus,
  { ring: string; text: string; badge: "safe" | "warning" | "danger"; icon: JSX.Element; label: string }
> = {
  safe: {
    ring: "#10B981",
    text: "text-emerald-600",
    badge: "safe",
    icon: <CheckCircleIcon className="h-4 w-4" />,
    label: "Safe",
  },
  "needs-checking": {
    ring: "#F59E0B",
    text: "text-amber-600",
    badge: "warning",
    icon: <AlertTriangleIcon className="h-4 w-4" />,
    label: "Needs Checking",
  },
  "high-risk": {
    ring: "#EF4444",
    text: "text-red-600",
    badge: "danger",
    icon: <XCircleIcon className="h-4 w-4" />,
    label: "High Risk",
  },
};

export default function TrustScoreCard({
  score,
  status,
  statusLabel,
}: TrustScoreCardProps) {
  const cfg = CONFIG[status];
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dash = (score / 100) * circumference;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">Trust Score</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-5xl font-extrabold ${cfg.text}`}>
              {score}
            </span>
            <span className="text-lg font-semibold text-slate-400">/100</span>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
            <span>Status:</span>
            <Badge tone={cfg.badge}>
              {cfg.icon}
              {statusLabel}
            </Badge>
          </div>
        </div>

        {/* Circular gauge */}
        <div className="relative h-32 w-32 shrink-0">
          <svg className="h-32 w-32 -rotate-90" viewBox="0 0 128 128">
            <circle
              cx="64"
              cy="64"
              r={radius}
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="12"
            />
            <circle
              cx="64"
              cy="64"
              r={radius}
              fill="none"
              stroke={cfg.ring}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference}`}
              className="transition-[stroke-dasharray] duration-700 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-2xl font-extrabold ${cfg.text}`}>
              {score}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              {cfg.label}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
