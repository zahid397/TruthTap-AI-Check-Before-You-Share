# Vercel Deployment Checklist — TruthTap AI

## Pre-flight (local)

- [ ] `npm install` completes with no errors
- [ ] `npm run build` passes (this exact command runs on Vercel)
- [ ] `npm start` → smoke-test all four routes: `/`, `/check`, `/quiz`, `/about`
- [ ] Test one High Risk and one Safe sample claim end-to-end
- [ ] Mobile check in DevTools (375px): navbar menu opens/closes, tabs switch, quiz buttons work

## Deploy

- [ ] Push the project to a GitHub repository (`.gitignore` already excludes `node_modules`, `.next`, `.env*`)
- [ ] [vercel.com](https://vercel.com) → **Add New → Project** → Import the repo
- [ ] Framework preset: **Next.js** (auto-detected) — keep default build settings
- [ ] Environment variables: **none required** (skip)
- [ ] Click **Deploy** and wait for the green check

## Post-deploy

- [ ] Open the production URL on a real phone — repeat the smoke test
- [ ] Run a Lighthouse pass (aim: 90+ Performance / Accessibility / Best Practices / SEO)
- [ ] Add the live URL to `docs/proposal.md` and your submission form
- [ ] Record the pitch video against the production URL (see `demo-flow.md`)

## Submission reminders (UNESCO portal)

- [ ] Portal link arrives **6 July** via email — submit only through the dedicated platform
- [ ] Deadline: **16 August, 23:59 Paris time**
- [ ] Proposal in Word/PDF, English, **max 10 MB** — export `docs/proposal.md` after filling team details
- [ ] Pitch video: **max 3 minutes**, uploaded anywhere with an accessible link (English subtitles if another language is used)
- [ ] ONE member submits on behalf of the team; avoid multiple submissions
