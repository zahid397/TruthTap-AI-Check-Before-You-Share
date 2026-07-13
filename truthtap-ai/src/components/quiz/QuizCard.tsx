"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@/components/ui/Icons";
import type { QuizQuestion } from "@/types";

interface QuizCardProps {
  question: QuizQuestion;
  index: number;
  total: number;
  selectedIndex: number | null;
  onSelect: (optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoBack: boolean;
  isLast: boolean;
}

export default function QuizCard({
  question,
  index,
  total,
  selectedIndex,
  onSelect,
  onNext,
  onPrevious,
  canGoBack,
  isLast,
}: QuizCardProps) {
  const answered = selectedIndex !== null;
  const isCorrect = selectedIndex === question.correctIndex;
  const progress = ((index + 1) / total) * 100;

  const optionClass = (i: number) => {
    const base =
      "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left text-sm font-medium transition-all";
    if (!answered) {
      return `${base} border-slate-200 bg-white hover:border-primary hover:bg-primary-50`;
    }
    if (i === question.correctIndex) {
      return `${base} border-emerald-300 bg-emerald-50 text-emerald-800`;
    }
    if (i === selectedIndex) {
      return `${base} border-red-300 bg-red-50 text-red-800`;
    }
    return `${base} border-slate-200 bg-white opacity-60`;
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">
          Question {index + 1} of {total}
        </p>
        <Badge tone="info">{question.category}</Badge>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <h2 className="mt-5 text-lg font-bold text-slate-900">
        {question.question}
      </h2>
      <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm italic leading-relaxed text-slate-700">
          {question.context}
        </p>
      </div>

      {/* Options */}
      <div className="mt-5 space-y-2.5">
        {question.options.map((option, i) => (
          <button
            key={i}
            type="button"
            disabled={answered}
            onClick={() => onSelect(i)}
            className={optionClass(i)}
          >
            <span className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-500 ring-1 ring-slate-200">
                {String.fromCharCode(65 + i)}
              </span>
              {option}
            </span>
            {answered && i === question.correctIndex && (
              <CheckCircleIcon className="h-5 w-5 shrink-0 text-emerald-600" />
            )}
            {answered && i === selectedIndex && i !== question.correctIndex && (
              <XCircleIcon className="h-5 w-5 shrink-0 text-red-500" />
            )}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {answered && (
        <div
          className={[
            "animate-fade-up mt-5 rounded-xl border p-4",
            isCorrect
              ? "border-emerald-200 bg-emerald-50"
              : "border-amber-200 bg-amber-50",
          ].join(" ")}
        >
          <p
            className={[
              "flex items-center gap-2 text-sm font-bold",
              isCorrect ? "text-emerald-700" : "text-amber-700",
            ].join(" ")}
          >
            {isCorrect ? (
              <>
                <CheckCircleIcon className="h-4 w-4" /> Correct! 🎉
              </>
            ) : (
              <>
                <XCircleIcon className="h-4 w-4" /> Not quite
              </>
            )}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Nav */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="outline" onClick={onPrevious} disabled={!canGoBack}>
          Previous
        </Button>
        <Button onClick={onNext} disabled={!answered}>
          {isLast ? "See Results" : "Next Question"}
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
