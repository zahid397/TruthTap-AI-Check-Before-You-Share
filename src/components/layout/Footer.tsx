import Link from "next/link";
import { ShieldIcon } from "@/components/ui/Icons";

const EXPLORE_LINKS = [
  { href: "/check", label: "Check a Claim" },
  { href: "/quiz", label: "MIL Quiz" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

const LEARN_LINKS = [
  {
    href: "https://www.unesco.org/en/media-information-literacy",
    label: "UNESCO — Media & Information Literacy",
  },
  { href: "https://factcheck.afp.com", label: "AFP Fact Check" },
  { href: "https://images.google.com", label: "Reverse Image Search" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white shadow-soft">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                Truth<span className="text-primary">Tap AI</span>
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-800">
              Think First. Verify Always. Share Responsibly.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              A youth-friendly verification tool that helps you pause, check and
              think before sharing — built for the UNESCO Global Youth Hackathon
              2026.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-primary-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn more */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Learn More
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LEARN_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 transition-colors hover:text-primary-700"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 TruthTap AI · Built for the UNESCO Global Youth Hackathon
            2026 · #YouthHackathon2026
          </p>
          <p>
            A learning &amp; verification-support tool — not a replacement for
            human judgment.
          </p>
        </div>
      </div>
    </footer>
  );
}
