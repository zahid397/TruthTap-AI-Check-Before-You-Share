import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { CheckCircleIcon, ShieldIcon } from "@/components/ui/Icons";
import type { SourceCheckResult } from "@/types";

interface SourceTraceCardProps {
  source: SourceCheckResult;
}

function StatusBadge({
  ok,
  okLabel,
  failLabel,
  tone,
}: {
  ok: boolean;
  okLabel: string;
  failLabel: string;
  tone?: "info";
}) {
  if (ok) {
    return (
      <Badge tone={tone === "info" ? "info" : "safe"}>
        {okLabel}
      </Badge>
    );
  }
  return <Badge tone="danger">{failLabel}</Badge>;
}

const DOMAIN_BADGE = {
  trusted: { tone: "safe" as const, label: "Trusted" },
  unverified: { tone: "warning" as const, label: "Unverified" },
  suspicious: { tone: "danger" as const, label: "Suspicious" },
  none: { tone: "neutral" as const, label: "No link" },
};

export default function SourceTraceCard({ source }: SourceTraceCardProps) {
  const domainBadge = DOMAIN_BADGE[source.domainVerdict];

  return (
    <Card className="animate-fade-up">
      <div className="flex items-center gap-2">
        <ShieldIcon className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold text-slate-900">Source Trace</h3>
      </div>

      <div className="mt-5 divide-y divide-slate-100">
        <div className="flex items-center justify-between py-3">
          <span className="text-sm font-medium text-slate-700">
            Original Source
          </span>
          <StatusBadge
            ok={source.originalSourceFound}
            okLabel="Found"
            failLabel="Not found"
          />
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-sm font-medium text-slate-700">
            Trusted Match
          </span>
          <StatusBadge
            ok={source.trustedMatch}
            okLabel="Found"
            failLabel="Not found"
          />
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-sm font-medium text-slate-700">
            Domain Check
          </span>
          <Badge tone={domainBadge.tone}>
            {source.domain ?? "—"} · {domainBadge.label}
          </Badge>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
          Suggested Verification Steps
        </p>
        <ul className="mt-3 space-y-2">
          {source.steps.map((step, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm text-slate-700">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-primary-50 p-3.5">
        <ShieldIcon className="h-4 w-4 shrink-0 text-primary" />
        <p className="text-sm font-medium text-primary-700">
          Always verify before you share. Be smart. Be safe.
        </p>
      </div>
    </Card>
  );
}
