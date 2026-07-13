import Card from "@/components/ui/Card";

const STEPS = [
  {
    number: 1,
    emoji: "📝",
    title: "You Submit",
    text: "Paste text, a link, or upload a screenshot.",
  },
  {
    number: 2,
    emoji: "🧠",
    title: "We Analyze",
    text: "Our rule engine checks patterns, sources and reliability signals.",
  },
  {
    number: 3,
    emoji: "📊",
    title: "You Understand",
    text: "Get a trust score, plain-language reasons and clear next steps.",
  },
  {
    number: 4,
    emoji: "✅",
    title: "You Decide",
    text: "Share responsibly and help stop misinformation.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <div className="text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          How TruthTap AI Works
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
          Four simple steps between seeing something online and deciding what
          to do with it.
        </p>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <Card key={step.number} className="relative overflow-hidden">
            <span
              aria-hidden="true"
              className="absolute -right-1 -top-3 text-7xl font-extrabold text-slate-100"
            >
              {step.number}
            </span>
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 text-2xl">
              <span aria-hidden="true">{step.emoji}</span>
            </div>
            <h3 className="relative mt-4 font-bold text-slate-900">
              {step.number}. {step.title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-slate-600">
              {step.text}
            </p>
          </Card>
        ))}
      </div>

      <Card className="mt-8 flex items-center gap-4 border-primary-100 bg-primary-50/70">
        <span className="text-2xl" aria-hidden="true">
          🛡️
        </span>
        <p className="text-sm font-medium text-primary-700">
          TruthTap AI empowers you to think critically and stay safe online.
        </p>
      </Card>
    </section>
  );
}
