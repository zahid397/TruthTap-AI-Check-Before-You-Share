# 🛡️ TruthTap AI — Check Before You Share

> A youth-friendly verification tool that helps young people **pause, check, understand and decide** before sharing online content.
> Built for the **UNESCO Global Youth Hackathon 2026** · Theme: *Play Your Part — Youth Designing the Future of Media & Information Literacy* · `#YouthHackathon2026`

TruthTap AI turns a slow, intimidating fact-checking process into four simple taps:

**Paste → Check → Understand → Decide.**

Paste a claim, link or screenshot text and instantly get a **Trust Score (0–100)**, a clear **risk verdict** (Safe / Needs Checking / High Risk), plain-language **reasons**, a **source trace**, and concrete **safe-sharing advice** — plus a fun **MIL Quiz** to build the skills for life.

---

## ✨ Highlights

- **100% rule-based, zero paid APIs.** The whole analysis engine runs in the browser. No API keys, no backend, no per-request cost, and **no server errors on Vercel** (every page is static).
- **Explainable by design.** Every point deducted is tied to a named, human-readable reason — great for a hackathon pitch and honest with users.
- **Mobile-first, youth-friendly UI** matching the approved design: blue/cyan identity, rounded cards, and green/amber/red status colors.
- **Media literacy built in.** A 10-question quiz (Real or Fake? · Safe to Share? · AI or Human?) based on real viral misinformation cases.
- **Privacy-respecting.** Nothing you paste ever leaves your device.
- **Accessible.** Semantic HTML, keyboard-friendly controls, focus rings, and `prefers-reduced-motion` support.

---

## 🧭 Product Architecture & User Flow

### User flow
```
          ┌──────────┐     ┌───────────┐     ┌──────────────┐     ┌──────────┐
  User →  │  PASTE   │  →  │   CHECK   │  →  │  UNDERSTAND  │  →  │  DECIDE  │
          │ claim /  │     │ rule-based│     │ score+reasons│     │  share   │
          │ link     │     │  engine   │     │ +source+steps│     │ or don't │
          └──────────┘     └───────────┘     └──────────────┘     └──────────┘
```

### How the engine thinks (all client-side, deterministic)
```
analyzeClaim(input)
   │
   ├─ 1. fakeNewsRules.ts   → run every regex rule against the text
   │                          (urgency, emotion, share-bait, fake authority,
   │                           sensitive claims, AI/deepfake, caps, punctuation)
   │
   ├─ 2. sourceCheck.ts     → find any link, extract the domain, compare to a
   │                          trusted-outlet list, flag shorteners / junk TLDs
   │
   ├─ 3. trustScore.ts      → start at 100, subtract each matched penalty,
   │                          add a small trusted-source bonus, clamp 0–100,
   │                          map score → status → action guide
   │
   └─ 4. return AnalysisResult { score, status, reasons[], actions[], source }
```

### Why this architecture
- **Separation of concerns:** rules, source-checking, scoring and orchestration each live in their own file. Add a new misinformation pattern by adding **one object** to `fakeNewsRules.ts` — nothing else changes.
- **Pure functions:** the engine has no side effects, so it is trivial to test and reason about.
- **Server-free:** shipping as static HTML/JS means the fastest possible load and no runtime to break in production.

---

## 🗂️ Project Structure

```
truthtap-ai/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── .env.example                 # no keys needed — optional future upgrades only
│
├── public/
│   ├── logo.svg
│   └── screenshots/             # drop UI screenshots here for your submission
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # navbar + footer shell, SEO metadata
│   │   ├── page.tsx             # Home (hero, CTAs, features, how-it-works)
│   │   ├── icon.svg             # favicon
│   │   ├── globals.css
│   │   ├── check/
│   │   │   ├── page.tsx         # metadata (server component)
│   │   │   └── CheckClient.tsx  # input ⇄ result controller
│   │   ├── quiz/
│   │   │   ├── page.tsx
│   │   │   └── QuizClient.tsx   # quiz state machine
│   │   └── about/
│   │       └── page.tsx         # what is MIL + disclaimer
│   │
│   ├── components/
│   │   ├── ui/                  # Button, Card, Badge, Icons (zero-dependency)
│   │   ├── layout/              # Navbar, Footer
│   │   ├── home/                # FeatureCard, HowItWorksSection
│   │   ├── checker/             # ClaimInput, TrustScoreCard, RiskReasonList,
│   │   │                        # ActionGuide, SourceTraceCard, ResultPanel
│   │   └── quiz/                # QuizCard, QuizResult
│   │
│   ├── lib/                     # ← the brains
│   │   ├── analyzeClaim.ts      # orchestrator
│   │   ├── trustScore.ts        # scoring + status thresholds
│   │   ├── fakeNewsRules.ts     # the pattern rule library
│   │   └── sourceCheck.ts       # offline source tracing
│   │
│   ├── data/
│   │   ├── quizQuestions.ts     # 10 MIL questions, 3 game modes
│   │   └── sampleClaims.ts      # demo chips for the Check page
│   │
│   └── types/
│       └── index.ts             # shared TypeScript contracts
│
└── docs/
    ├── proposal.md              # UNESCO submission proposal
    ├── pitch-script.md          # 3-minute pitch video script
    ├── problem-statement.md     # the problem, in depth
    └── demo-flow.md             # exactly what to click on stage
```

---

This iteration upgraded from Next.js 14 (end-of-life since Oct 2025, with a critical React Server Components vulnerability cluster disclosed after that date that will never be patched on the 14.x line) to **current Next.js 16 + React 19**, and switched to `output: 'export'`. Since this app was always 100% client-side with zero Server Actions, API routes, or middleware, static export costs nothing functionally — it just makes that architecture explicit at build time, and removes the Next.js server runtime from production entirely.

---

## ⚙️ Tech Stack

| Layer | Choice | Why |
|------|--------|-----|
| Framework | **Next.js 16** (App Router, static export) | Modern, zero server runtime in production, Vercel-native |
| Language | **TypeScript** | Type-safe contracts across the engine and UI |
| Styling | **Tailwind CSS** | Fast, consistent, matches the design tokens |
| Icons | Custom inline SVG | No external UI library → tiny bundle |
| "Database" | **`src/data/*.ts`** | Sample claims + quiz bank live as typed data files — no server, no query layer, nothing to provision |
| Backend | **None, by design** | 100% client-side rule-based engine; no server ever needed for this app to work |
| Hosting | **Vercel** (or any static host) | `output: 'export'` produces plain HTML/CSS/JS — deployable anywhere |

---

## 🚀 Getting Started (local)

**Prerequisites:** Node.js **20.9+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the app
#    → http://localhost:3000
```

Build the static export and preview exactly what gets deployed:

```bash
npm run build          # produces the out/ folder — plain HTML/CSS/JS, no server
npx serve -s out       # preview the real static output locally
```

> ℹ️ **No environment variables are required.** `.env.example` only lists optional future upgrades (e.g. plugging in an AI provider). The MVP is fully functional without any keys, and has no backend or database of any kind — `src/data/*.ts` holds all static content.

---

## 🧪 What to try first

On the **Check** page, tap a sample chip:

| Sample chip | Expected verdict |
|-------------|------------------|
| “School exam cancelled tomorrow” | 🔴 **High Risk** |
| “Doctors warn about this fruit” | 🔴 **High Risk** |
| “Share now or you'll lose it” | 🔴 **High Risk** |
| “Miracle tea trend” | 🟠 **Needs Checking** |
| “100% real leader video” | 🟠 **Needs Checking** |
| “Verified news with source” | 🟢 **Safe** |

Then open **Source Trace** to see the origin analysis, and play the **MIL Quiz**.

---

## ☁️ Deploy (static — works anywhere)

Since `next.config.js` sets `output: 'export'`, `npm run build` produces a plain `out/` folder of HTML/CSS/JS with **no Next.js server involved in production at all**. Deploy it anywhere:

**Vercel (recommended, zero config):**
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and **Import** the repo.
3. Vercel auto-detects Next.js and the static export — no configuration needed. Leave environment variables **empty**.
4. Click **Deploy**. Your app is live in ~1 minute at `https://<your-project>.vercel.app`.

**Any other static host** (Netlify, GitHub Pages, Cloudflare Pages, S3): run `npm run build`, then upload the contents of `out/` — that's the entire deployment.

See `docs/demo-flow.md` for the full deployment checklist.

---

## 🧱 Extending the engine

**Add a new misinformation rule** — edit `src/lib/fakeNewsRules.ts`:

```ts
{
  id: "clickbait-numbers",
  label: "Clickbait number hook",
  description: "“You won't believe #7” style hooks are engagement bait.",
  penalty: 8,
  severity: "low",
  patterns: [/\byou won'?t believe number \d+/i, /\btop \d+ secrets\b/i],
}
```

That's it — the score, reasons list and result UI pick it up automatically.

---

## ⚠️ Responsible-use note

TruthTap AI is a **learning and verification-support tool**, not a replacement for human judgment or professional fact-checkers. A high trust score is not proof that something is true; a low score is an invitation to investigate. Always confirm important claims with trusted outlets, and when in doubt, ask a teacher, guardian or expert.

---

## 📜 License

Created for the UNESCO Global Youth Hackathon 2026. Free to use, learn from and build upon for educational and non-commercial purposes.

**Think First. Verify Always. Share Responsibly.** 🛡️
