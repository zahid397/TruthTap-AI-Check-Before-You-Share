# Demo Flow & Deployment Checklist — TruthTap AI

A step-by-step script for demoing the app live (or recording the pitch video), plus the exact steps to deploy on Vercel.

---

## Part A — Live Demo Flow (what to click)

### 0. Before you start
- Run `npm run dev` locally **or** open your deployed Vercel URL.
- Have the browser at mobile width if you want to show the mobile-first design (the app is responsive either way).

### 1. Home page — set the scene *(~20s)*
- Point out the headline **“Check Before You Share.”**
- Note the three CTAs: **Check a Claim**, **Play MIL Quiz**, **Learn How It Works**.
- Scroll to **Why TruthTap AI?** (4 feature cards) and **How TruthTap AI Works** (4 steps).
- Click **Check a Claim**.

### 2. Check page — the High-Risk example *(~30s)*
- Tap the sample chip **“School exam cancelled tomorrow.”**
- Tap **Analyze Content**.
- On the result, highlight:
  - **Trust Score 35 / 100 → High Risk** (red gauge).
  - **Why this score?** — urgent language, share-bait, sensitive claim, no source.
  - **What should you do?** — the action guide.
- Tap **Source Trace** → show Original Source “Not found”, Trusted Match “Not found”, Domain “No link”, and the verification steps.

### 3. Check page — the Safe example *(~20s)*
- Tap **Check Another**.
- Tap the chip **“Verified news with source.”**
- Tap **Analyze Content** → **Trust Score 100 / 100 → Safe** (green), Source Trace shows a **Trusted** domain.
- This contrast (red → green) is the money shot.

### 4. Optional — the Needs-Checking middle ground *(~15s)*
- Try **“Miracle tea trend”** → **Needs Checking** (amber). Shows the tool isn't just binary.

### 5. Quiz — learning through play *(~25s)*
- Go to **Quiz**.
- Answer one question (e.g. the whale-barnacle “Real or Fake?”).
- Show the instant **explanation** after answering, and the **progress bar**.
- Skip to the end to show the **result screen** with the score and message.

### 6. About — credibility & responsibility *(~15s)*
- Open **About**.
- Point to the MIL explanation and the **“A tool for thinking, not a final verdict”** disclaimer — shows maturity and alignment with UNESCO values.

> **Demo golden rule:** let the product do the talking. Click slowly, read the on-screen results aloud, and let the red→green contrast land.

---

## Part B — Vercel Deployment Checklist

### Pre-flight (do once)
- [ ] `npm install` runs with no errors.
- [ ] `npm run build` completes successfully (it does — all pages prerender as static, `output: 'export'` produces a real `out/` folder).
- [ ] `npx serve -s out` serves the actual static output locally — this is exactly what gets deployed, not a dev-mode approximation.
- [ ] All four pages load: `/`, `/check`, `/quiz`, `/about`.
- [ ] Navbar links work on desktop **and** the mobile hamburger menu opens/closes.

### Deploy
1. [ ] Create a new **GitHub repository** and push this project folder to it.
2. [ ] Go to **https://vercel.com/new**.
3. [ ] Click **Import** on your repository.
4. [ ] Vercel auto-detects **Next.js** — leave the framework preset and build settings as-is.
5. [ ] **Environment variables:** leave **empty** (none are required).
6. [ ] Click **Deploy** and wait ~1 minute.
7. [ ] Open the generated `https://<project>.vercel.app` URL.

### Post-deploy smoke test
- [ ] Home hero and CTAs render.
- [ ] Run one High-Risk and one Safe sample on **/check** — verdicts appear correctly.
- [ ] **Source Trace** expands.
- [ ] Complete a couple of **/quiz** questions and reach the result screen.
- [ ] Test once on an actual phone (share the URL to yourself).
- [ ] Put the live URL in your proposal and pitch video.

### Alternative hosts (all work — this is a genuine static export, deployable anywhere)
- **Netlify:** New site from Git → build command `npm run build`, publish directory `out`.
- **GitHub Pages / Cloudflare Pages / S3 + CloudFront:** run `npm run build` locally or in CI, then upload the `out/` folder as-is. There is no server process to configure anywhere — it's just files.

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `npm install` fails | Ensure Node **18.17+** (`node --version`). Delete `node_modules` and `package-lock.json`, then reinstall. |
| Build fails on Vercel | Confirm the repo root contains `package.json`. Check the Vercel build log; the local `npm run build` should match. |
| Styles look unstyled | Make sure `tailwind.config.ts`, `postcss.config.js` and `src/app/globals.css` are all present and committed. |
| Mobile menu doesn't open | `Navbar.tsx` is a client component (`"use client"`). Ensure it wasn't converted to a server component. |
| Page 404s after deploy | Confirm the folder is `src/app/...` and files are named `page.tsx`. |

**You're ready to submit.** 🛡️ Think First. Verify Always. Share Responsibly.
