"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import {
  LinkIcon,
  LoaderIcon,
  SparklesIcon,
  UploadIcon,
} from "@/components/ui/Icons";
import { SAMPLE_CLAIMS } from "@/data/sampleClaims";
import type { ClaimInputData } from "@/lib/analyzeClaim";

type Tab = "text" | "image" | "link";

interface ClaimInputProps {
  onAnalyze: (data: ClaimInputData) => void;
  isAnalyzing: boolean;
}

const MAX_CHARS = 1000;

export default function ClaimInput({ onAnalyze, isAnalyzing }: ClaimInputProps) {
  const [tab, setTab] = useState<Tab>("text");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSample = (sampleText: string, sampleLink?: string) => {
    setText(sampleText);
    setLink(sampleLink ?? "");
    setError(null);
    if (sampleLink) setTab("text");
  };

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (trimmed.length < 5 && !link.trim()) {
      setError("Please paste a claim (at least a few words) or add a link to check.");
      return;
    }
    setError(null);
    onAnalyze({ text: trimmed, link: link.trim() || undefined });
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "text", label: "Paste Text" },
    { id: "image", label: "Upload Image" },
    { id: "link", label: "Enter Link" },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
        Check Information
      </h1>
      <p className="mt-1 text-sm text-slate-500">
        Paste a claim, link or upload a screenshot to analyze.
      </p>

      {/* Tabs */}
      <div className="mt-5 inline-flex rounded-xl bg-slate-100 p-1">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            aria-pressed={tab === t.id}
            className={[
              "rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-all",
              tab === t.id
                ? "bg-white text-primary-700 shadow-sm"
                : "text-slate-500 hover:text-slate-700",
            ].join(" ")}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Panels */}
      <div className="mt-4">
        {tab === "text" && (
          <div className="animate-fade-up">
            <label htmlFor="claim-text" className="sr-only">
              Claim or content
            </label>
            <div className="relative">
              <textarea
                id="claim-text"
                value={text}
                maxLength={MAX_CHARS}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your claim or content here..."
                rows={6}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-100"
              />
              <span className="pointer-events-none absolute bottom-3 right-3 text-xs text-slate-400">
                {text.length}/{MAX_CHARS}
              </span>
            </div>
          </div>
        )}

        {tab === "image" && (
          <div className="animate-fade-up">
            <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50 px-6 py-10 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                <UploadIcon className="h-6 w-6" />
              </span>
              <p className="mt-3 text-sm font-semibold text-slate-700">
                Screenshot upload (concept preview)
              </p>
              <p className="mt-1 max-w-xs text-xs text-slate-500">
                In this MVP, image OCR is a planned feature. For now, type the
                caption or claim from the screenshot into the text tab and we
                will analyze it.
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => setTab("text")}
              >
                Type the text instead
              </Button>
            </div>
          </div>
        )}

        {tab === "link" && (
          <div className="animate-fade-up">
            <label htmlFor="claim-link" className="sr-only">
              Link
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/50 px-3 focus-within:border-primary focus-within:bg-white focus-within:ring-2 focus-within:ring-primary-100">
              <LinkIcon className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                id="claim-link"
                type="text"
                inputMode="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://example.com/article"
                className="w-full bg-transparent py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Optional: add the text of the post above too, for a deeper check.
            </p>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600">
          {error}
        </p>
      )}

      {/* Sample chips */}
      <div className="mt-5">
        <p className="text-xs font-semibold text-slate-500">Try an example</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {SAMPLE_CLAIMS.map((sample) => (
            <button
              key={sample.label}
              type="button"
              onClick={() => handleSample(sample.text, sample.link)}
              className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 transition-colors hover:bg-primary-100"
            >
              {sample.label}
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        size="lg"
        disabled={isAnalyzing}
        className="mt-6 w-full"
      >
        {isAnalyzing ? (
          <>
            <LoaderIcon className="h-5 w-5 animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <SparklesIcon className="h-5 w-5" />
            Analyze Content
          </>
        )}
      </Button>
    </div>
  );
}
