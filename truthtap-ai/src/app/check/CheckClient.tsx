"use client";

import { useRef, useState } from "react";
import ClaimInput from "@/components/checker/ClaimInput";
import ResultPanel from "@/components/checker/ResultPanel";
import { analyzeClaim, type ClaimInputData } from "@/lib/analyzeClaim";
import type { AnalysisResult } from "@/types";

export default function CheckClient() {
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = (data: ClaimInputData) => {
    setIsAnalyzing(true);
    // Small deliberate delay so the loading state is visible and the
    // interaction feels responsive (the computation itself is instant).
    window.setTimeout(() => {
      const analysis = analyzeClaim(data);
      setResult(analysis);
      setIsAnalyzing(false);
      // Scroll the result into view on mobile where it renders below.
      window.setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }, 650);
  };

  const handleReset = () => {
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="lg:sticky lg:top-24">
          <ClaimInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        </div>

        <div ref={resultRef}>
          {result ? (
            <ResultPanel result={result} onReset={handleReset} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60 p-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-3xl">
        <span aria-hidden="true">🔎</span>
      </span>
      <h2 className="mt-4 text-lg font-bold text-slate-800">
        Your result will appear here
      </h2>
      <p className="mt-2 max-w-xs text-sm text-slate-500">
        Paste a claim or pick an example, then tap{" "}
        <span className="font-semibold text-primary-700">Analyze Content</span>{" "}
        to see the trust score, risk reasons and safe-sharing advice.
      </p>
    </div>
  );
}
