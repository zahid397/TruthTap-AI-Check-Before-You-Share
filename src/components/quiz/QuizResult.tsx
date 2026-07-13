"use client";

import Button from "@/components/ui/Button";
import { RotateIcon, ShieldIcon } from "@/components/ui/Icons";

interface QuizResultProps {
  score: number;
  total: number;
  onRestart: () => void;
}

function getMessage(pct: number): { title: string; body: string; emoji: string } {
  if (pct >= 80)
    return {
      emoji: "🏆",
      title: "Misinformation Buster!",
      body: "Outstanding! You have a sharp eye for fake news, AI content and share-bait. You are exactly the kind of responsible digital citizen the world needs.",
    };
  if (pct >= 50)
    return {
      emoji: "🧠",
      title: "Sharp Thinker",
      body: "Nice work! You caught most of the tricks. Review the explanations you missed and you'll be spotting misinformation like a pro.",
    };
  return {
    emoji: "🌱",
    title: "Keep Learning",
    body: "Good start! Misinformation is designed to fool people — that's why practice matters. Play again and watch how the tells start jumping out at you.",
  };
}

export default function QuizResult({ score, total, onRestart }: QuizResultProps) {
  const pct = Math.round((score / total) * 100);
  const message = getMessage(pct);

  return (
    <div className="animate-scale-in rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft">
      <span className="text-5xl" aria-hidden="true">
        {message.emoji}
      </span>
      <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
        {message.title}
      </h2>

      <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-6">
        <div>
          <p className="text-5xl font-extrabold text-gradient">
            {score}
            <span className="text-2xl text-slate-400">/{total}</span>
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">
            {pct}% correct
          </p>
        </div>
      </div>

      <div className="mx-auto mt-5 h-2.5 max-w-sm overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-slate-600">
        {message.body}
      </p>

      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <Button onClick={onRestart}>
          <RotateIcon className="h-4 w-4" />
          Play Again
        </Button>
        <Button href="/check" variant="outline">
          <ShieldIcon className="h-4 w-4" />
          Check a Real Claim
        </Button>
      </div>

      <p className="mt-6 text-xs text-slate-400">
        Every question here is based on a real misinformation tactic. Practicing
        them builds Media &amp; Information Literacy (MIL).
      </p>
    </div>
  );
}
