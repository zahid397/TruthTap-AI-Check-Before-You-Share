"use client";

import { useState } from "react";
import QuizCard from "@/components/quiz/QuizCard";
import QuizResult from "@/components/quiz/QuizResult";
import { QUIZ_QUESTIONS } from "@/data/quizQuestions";

export default function QuizClient() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => Array(QUIZ_QUESTIONS.length).fill(null)
  );
  const [finished, setFinished] = useState(false);

  const total = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[current];
  const selectedIndex = answers[current];

  const handleSelect = (optionIndex: number) => {
    // Lock the answer once chosen (first answer counts).
    if (answers[current] !== null) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[current] = optionIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (current < total - 1) {
      setCurrent((c) => c + 1);
    } else {
      setFinished(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const handleRestart = () => {
    setAnswers(Array(total).fill(null));
    setCurrent(0);
    setFinished(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = answers.reduce<number>(
    (sum, answer, i) =>
      answer === QUIZ_QUESTIONS[i].correctIndex ? sum + 1 : sum,
    0
  );

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          MIL Quiz
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Real or Fake? Safe to Share? AI or Human? Test your instincts.
        </p>
      </div>

      {finished ? (
        <QuizResult score={score} total={total} onRestart={handleRestart} />
      ) : (
        <QuizCard
          question={question}
          index={current}
          total={total}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          canGoBack={current > 0}
          isLast={current === total - 1}
        />
      )}
    </div>
  );
}
