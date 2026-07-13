import Link from "next/link";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/home/FeatureCard";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import { ArrowRightIcon, SearchIcon, ShieldIcon } from "@/components/ui/Icons";

const FEATURES = [
  {
    emoji: "🛡️",
    title: "Detect Misinformation",
    description:
      "Identify fake news, misleading claims and deepfakes before they fool you.",
    chipClassName: "bg-primary-50",
  },
  {
    emoji: "🔍",
    title: "Source Verification",
    description: "Find original sources and check against trusted outlets.",
    chipClassName: "bg-accent-50",
  },
  {
    emoji: "🧠",
    title: "Learn & Grow",
    description:
      "Build media literacy with quizzes, tips and plain-language explanations.",
    chipClassName: "bg-violet-50",
  },
  {
    emoji: "👥",
    title: "Stay Safe Online",
    description:
      "Make smart decisions before you share — protect yourself and your friends.",
    chipClassName: "bg-emerald-50",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary-100 opacity-60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-accent-50 opacity-70 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary-700 shadow-soft ring-1 ring-primary-200">
              🌍 UNESCO Global Youth Hackathon 2026 · Media &amp; Information
              Literacy
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Check Before You <span className="text-gradient">Share</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Verify information, detect AI-generated content, and stay safe
              from misinformation. Be a responsible digital citizen.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              76% of people aged 18–29 get news from social media at least
              sometimes — Pew Research Center, 2025
            </p>
          </div>

          {/* CTA cards */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            <Link
              href="/check"
              className="group rounded-2xl bg-primary p-6 text-left text-white shadow-lift transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <SearchIcon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-bold">Check a Claim</h2>
              <p className="mt-1 text-sm text-blue-100">
                Paste text, link or upload image
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                Start checking
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/quiz"
              className="group rounded-2xl bg-white p-6 text-left shadow-soft ring-1 ring-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-success focus-visible:ring-offset-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                <span aria-hidden="true">🎮</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-900">
                Play MIL Quiz
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Test your spotting skills and learn
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                Start playing
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <a
              href="#how-it-works"
              className="group rounded-2xl bg-white p-6 text-left shadow-soft ring-1 ring-violet-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-xl">
                <span aria-hidden="true">💡</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-900">
                Learn How It Works
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Understand how TruthTap AI helps
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-violet-700">
                See the steps
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Why TruthTap AI?
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
        <HowItWorksSection />
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-12 text-center text-white shadow-lift sm:px-12">
          <ShieldIcon className="mx-auto h-10 w-10" />
          <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
            Ready to become a fact-checking hero?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
            One quick check can stop a rumor from reaching thousands of people.
            It starts with you.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/check" variant="white" size="lg">
              Check a Claim
            </Button>
            <Button
              href="/quiz"
              size="lg"
              className="bg-white/15 text-white ring-1 ring-inset ring-white/40 hover:bg-white/25"
            >
              Play the Quiz
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
