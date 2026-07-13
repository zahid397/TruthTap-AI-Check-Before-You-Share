import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ShieldIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "What Media & Information Literacy (MIL) is, how TruthTap AI supports youth, and why it's a learning tool — not a replacement for human judgment.",
};

const MIL_PILLARS = [
  {
    emoji: "🔎",
    title: "Access",
    text: "Find and reach information and media effectively and efficiently.",
  },
  {
    emoji: "⚖️",
    title: "Evaluate",
    text: "Critically assess information, sources and media for reliability and bias.",
  },
  {
    emoji: "✍️",
    title: "Create",
    text: "Produce and share content responsibly, ethically and with transparency.",
  },
];

const SUPPORTS = [
  {
    emoji: "⏸️",
    title: "It makes you pause",
    text: "The single most powerful anti-misinformation habit is stopping before you share. TruthTap AI builds that reflex.",
  },
  {
    emoji: "🧩",
    title: "It explains the 'why'",
    text: "Instead of just a verdict, you see which patterns triggered it — so you learn to spot them yourself next time.",
  },
  {
    emoji: "🎮",
    title: "It makes learning fun",
    text: "The MIL Quiz turns real misinformation cases into a game, so critical thinking feels like play, not homework.",
  },
  {
    emoji: "🌍",
    title: "It's built for everyone",
    text: "No jargon, no paywall, mobile-first. Designed to be used by any student, anywhere, on any phone.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Hero */}
      <div className="text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold text-primary-700 ring-1 ring-primary-200">
          <ShieldIcon className="h-4 w-4" />
          About TruthTap AI
        </span>
        <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Helping youth think before they share
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
          TruthTap AI is a youth-friendly verification tool built for the UNESCO
          Global Youth Hackathon 2026. It helps young people check online content
          — claims, links and screenshots — and understand the risks before
          hitting share.
        </p>
      </div>

      {/* What is MIL */}
      <section className="mt-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          What is Media &amp; Information Literacy?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          Media and Information Literacy (MIL) is the set of skills that lets you
          access, critically evaluate, and responsibly create information and
          media. In a world of viral posts, deepfakes and AI-generated content,
          MIL is one of the most important life skills a young person can have.
          UNESCO champions MIL worldwide as a foundation for informed citizenship
          and healthy democracies.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {MIL_PILLARS.map((pillar) => (
            <Card key={pillar.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-xl">
                <span aria-hidden="true">{pillar.emoji}</span>
              </div>
              <h3 className="mt-3 font-bold text-slate-900">{pillar.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {pillar.text}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* How TruthTap supports youth */}
      <section className="mt-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          How TruthTap AI supports youth
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {SUPPORTS.map((item) => (
            <Card key={item.title} className="flex gap-4">
              <span className="text-2xl" aria-hidden="true">
                {item.emoji}
              </span>
              <div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* How the engine works */}
      <section className="mt-14">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          How the check works
        </h2>
        <Card className="mt-6">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            TruthTap AI uses a transparent, rule-based engine that runs entirely
            in your browser — no data leaves your device and no paid AI service is
            required. It starts every claim at a trust score of 100, then looks
            for well-known misinformation signals:
          </p>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            {[
              "Urgent or pressure language",
              "Emotional or exaggerated wording",
              "“Share now” style share-bait",
              "Vague authority (“doctors say…”)",
              "Sensitive health / money / political claims",
              "Possible AI or deepfake context",
              "Missing or untrusted sources",
              "Excessive caps and punctuation",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Each signal lowers the score by a set amount. The final number maps to
            a clear verdict — Safe, Needs Checking or High Risk — plus plain-language
            reasons and concrete next steps. Because the rules are open and simple,
            the result is always explainable.
          </p>
        </Card>
      </section>

      {/* Important disclaimer */}
      <section className="mt-14">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-amber-800">
            ⚠️ A tool for thinking, not a final verdict
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-amber-900">
            TruthTap AI is a learning and verification-<em>support</em> tool. It is
            designed to help you slow down, ask better questions and build media
            literacy — <strong>not</strong> to replace human judgment,
            professional fact-checkers or official sources. A high trust score is
            never proof that something is true, and a low score is an invitation to
            investigate, not absolute certainty. Always confirm important claims
            with trusted outlets and, when in doubt, ask a teacher, guardian or
            expert.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-accent px-6 py-10 text-center text-white shadow-lift">
          <h2 className="text-2xl font-extrabold">Try it yourself</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-blue-100">
            Paste a claim, run the check, and see how it feels to pause before
            sharing.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/check" variant="white" size="lg">
              Check a Claim
            </Button>
            <Button
              href="/quiz"
              size="lg"
              className="bg-white/15 text-white ring-1 ring-inset ring-white/40 hover:bg-white/25"
            >
              Play the MIL Quiz
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
