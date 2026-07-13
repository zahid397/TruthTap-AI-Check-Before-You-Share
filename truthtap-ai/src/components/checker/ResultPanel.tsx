"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { RotateIcon, ShieldIcon } from "@/components/ui/Icons";
import type { AnalysisResult } from "@/types";
import TrustScoreCard from "./TrustScoreCard";
import RiskReasonList from "./RiskReasonList";
import ActionGuide from "./ActionGuide";
import SourceTraceCard from "./SourceTraceCard";

interface ResultPanelProps {
  result: AnalysisResult;
  onReset: () => void;
}

export default function ResultPanel({ result, onReset }: ResultPanelProps) {
  const [showSourceTrace, setShowSourceTrace] = useState(false);

  return (
    <div className="animate-scale-in space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
          Analysis Result
        </h2>
        <Button variant="ghost" size="sm" onClick={onReset}>
          <RotateIcon className="h-4 w-4" />
          Check Another
        </Button>
      </div>

      <TrustScoreCard
        score={result.score}
        status={result.status}
        statusLabel={result.statusLabel}
      />

      <Card>
        <h3 className="text-base font-bold text-slate-900">Why this score?</h3>
        <div className="mt-4">
          <RiskReasonList reasons={result.reasons} />
        </div>
      </Card>

      <Card>
        <h3 className="text-base font-bold text-slate-900">
          What should you do?
        </h3>
        <div className="mt-4">
          <ActionGuide actions={result.actions} />
        </div>
      </Card>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => setShowSourceTrace((v) => !v)}
          aria-expanded={showSourceTrace}
        >
          <ShieldIcon className="h-4 w-4" />
          {showSourceTrace ? "Hide Source Trace" : "Source Trace"}
        </Button>
        <Button className="flex-1" onClick={onReset}>
          <RotateIcon className="h-4 w-4" />
          Check Another
        </Button>
      </div>

      {showSourceTrace && <SourceTraceCard source={result.source} />}
    </div>
  );
}
