# TruthTap AI — Project Proposal
### UNESCO Global Youth Hackathon 2026
**Theme:** Play Your Part — Youth Designing the Future of Media & Information Literacy
**Category:** Application / Website (Media & Information Literacy tool)
**Hashtag:** #YouthHackathon2026

---

## 1. Team Members

> *Replace the placeholders below with your team's real details before submitting. UNESCO requires 2–6 members aged 18–30.*

| # | Name | Role | Country / Region | Email |
|---|------|------|------------------|-------|
| 1 | *[Full Name]* | Team Lead / Full-Stack Developer | *[Country]* | *[email]* |
| 2 | *[Full Name]* | UX & Product Design | *[Country]* | *[email]* |
| 3 | *[Full Name]* | Content & MIL Research | *[Country]* | *[email]* |
| 4 | *[Full Name]* | Pitch & Communications | *[Country]* | *[email]* |

*Gender balance and inclusion encouraged. Ensure contact information is accurate — UNESCO uses it for all follow-up.*

---

## 2. Problem Statement

Young people are the **heaviest sharers** of online content but have the **fewest tools** to verify it. Pew Research Center (2025) reports **76% of 18–29-year-olds get news from social media at least sometimes**, while trust in that information stays low. Meanwhile, AI-generated images, deepfakes, fabricated “screenshots” of real news outlets, and emotionally engineered posts spread faster than corrections.

A 2026 study of 667 content creators found **“Misinformation and Trust” was their #1 challenge (57%)**, ahead of burnout, AI and monetization. The most harmful misinformation — health, money and politics — travels through everyday chats with no friction.

The core gap is not information; it is the **pause** before sharing. That pause must be fast, non-judgmental, explainable and accessible to work for youth. *(Full analysis in `problem-statement.md`.)*

---

## 3. Objectives

1. **Encourage the pause.** Give youth a 3-second “check before you share” habit backed by a real tool.
2. **Make risk visible.** Convert a vague gut feeling into a clear Trust Score, verdict and reasons.
3. **Teach, don't just judge.** Explain *why* content is risky so users build lasting skills.
4. **Trace sources.** Help users ask “where did this come from?” and check trusted outlets.
5. **Build MIL through play.** Turn real misinformation cases into an engaging quiz.
6. **Stay universally accessible.** Free, no login, mobile-first, no paid dependencies, works on any phone.

---

## 4. Target Audience

- **Primary:** Youth aged 13–30 — especially students — who consume and share content on social media, in any country.
- **Secondary:** Teachers and youth organizations who can run TruthTap AI as a classroom or workshop MIL activity.
- **Design implication:** zero jargon, mobile-first, instant results, and copy that coaches rather than scolds.

---

## 5. Prototype / Concept

TruthTap AI is a **working web application** (not a mockup) built with Next.js, TypeScript and Tailwind CSS. Its philosophy is four taps:

> **Paste → Check → Understand → Decide.**

**Core features (all live in the MVP):**
- **Check page** — paste a claim, add a link, or use the screenshot-text flow; one-tap analysis with demo examples.
- **Trust Score (0–100)** with a color-coded verdict: 🟢 Safe · 🟠 Needs Checking · 🔴 High Risk.
- **“Why this score?”** — a plain-language list of the exact risk patterns detected.
- **Action Guide** — concrete next steps (don't share yet, check official sources, ask an expert, report if harmful).
- **Source Trace** — original-source found/not-found, trusted-match, domain check, and verification steps.
- **MIL Quiz** — 10 questions across *Real or Fake?*, *Safe to Share?* and *AI or Human?*, each with an explanation, based on real viral cases (e.g. the whale-barnacle AI image, the Spain–Portugal blackout fake headlines).
- **About page** — explains MIL and states clearly that the tool supports, not replaces, human judgment.

**How the analysis works:** a transparent, **rule-based engine** runs entirely in the browser. It starts every claim at 100 and deducts points for well-known misinformation signals — urgency, emotional language, share-bait, vague authority, sensitive health/money/political claims, AI/deepfake context, missing/untrusted sources, excessive caps and punctuation — then maps the final score to a verdict, reasons and actions. Because the rules are open and simple, **every result is explainable**.

---

## 6. Innovation / Creativity

- **Explainable, not a black box.** Unlike an AI chatbot that just gives an answer, TruthTap AI shows the *reasoning* — turning each check into a mini media-literacy lesson.
- **Habit-first design.** It targets the specific 3-second moment before sharing, the highest-leverage point to stop misinformation.
- **Learning built into the product.** The quiz uses *real* misinformation cases discussed by MIL experts, so practice transfers to real life.
- **Radically accessible.** No API keys, no backend, no login, no cost — it runs as static files, so it loads instantly and works on low-end phones and weak connections.
- **Teaches independence.** The end goal is for users to internalize the tells and eventually not need the tool — the opposite of engagement-maximizing design.

---

## 7. Feasibility

- **Already built and tested.** The MVP compiles cleanly and every feature works; sample claims reliably produce the intended verdicts.
- **Simple, proven stack.** Next.js + TypeScript + Tailwind — modern, well-documented, and beginner-friendly to explain and maintain.
- **Zero running cost.** No paid APIs and no server means it deploys free on Vercel with no ongoing bills — critical for a youth/education project.
- **One-click deployment.** Import to Vercel, no configuration, live in about a minute.
- **Easy to extend.** Adding a new misinformation rule is a single object in one file; adding a quiz question is one entry in a list.

---

## 8. Sustainability

- **Technically sustainable:** static hosting has near-zero maintenance and cost, and can stay online indefinitely on a free tier.
- **Content sustainable:** the rule library and quiz bank are plain data files that youth communities, teachers or future hackathon cohorts can expand — no specialized ML expertise required.
- **Educationally sustainable:** because it teaches transferable MIL skills, its impact compounds even when users are offline.
- **Growth path:** optional future upgrades (image OCR for screenshots, multilingual rules, an opt-in AI layer, a classroom mode) are designed as *add-ons* that never break the free, offline core.
- **Alignment:** directly supports UNESCO's Media & Information Literacy mission and can plug into MIL curricula and Global MIL Week activities.

---

## 9. Expected Impact

- **Individual:** each user gains a repeatable habit and the skills to spot fake news, deepfakes and share-bait — protecting themselves and their networks.
- **Community:** every stopped share prevents a rumor from reaching potentially thousands; classrooms can run it as a hands-on MIL lesson.
- **Societal:** wider adoption strengthens collective resilience to misinformation, supporting healthier public conversation and informed citizenship.
- **Measurable indicators:** quiz completion and score improvement, number of claims checked, and (in a classroom pilot) pre/post changes in students' confidence identifying misinformation.

---

## 10. Responsible-Use Statement

TruthTap AI is a **learning and verification-support tool**, not a replacement for human judgment or professional fact-checkers. A high trust score is not proof of truth; a low score is a prompt to investigate. Users are always encouraged to confirm important claims with trusted outlets and consult a teacher, guardian or expert when in doubt.

---

*Prototype, source code and documentation accompany this proposal. Live demo deployable on Vercel. #YouthHackathon2026*
