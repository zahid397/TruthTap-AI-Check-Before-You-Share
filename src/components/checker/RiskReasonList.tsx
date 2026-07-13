import {
  AlertTriangleIcon,
  SparklesIcon,
  XCircleIcon,
} from "@/components/ui/Icons";
import type { RiskReason, Severity } from "@/types";

interface RiskReasonListProps {
  reasons: RiskReason[];
}

const SEVERITY_STYLE: Record<Severity, string> = {
  high: "text-red-500",
  medium: "text-amber-500",
  low: "text-violet-500",
};

function ReasonIcon({ severity }: { severity: Severity }) {
  const cls = `mt-0.5 h-4 w-4 shrink-0 ${SEVERITY_STYLE[severity]}`;
  if (severity === "high") return <XCircleIcon className={cls} />;
  if (severity === "medium") return <AlertTriangleIcon className={cls} />;
  return <SparklesIcon className={cls} />;
}

export default function RiskReasonList({ reasons }: RiskReasonListProps) {
  if (reasons.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        No obvious risk patterns were detected. That is a good sign — but still
        confirm the original source before sharing.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {reasons.map((reason) => (
        <li key={reason.id} className="flex items-start gap-2.5">
          <ReasonIcon severity={reason.severity} />
          <div>
            <p className="text-sm font-semibold text-slate-800">
              {reason.label}
            </p>
            <p className="text-xs leading-relaxed text-slate-500">
              {reason.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
