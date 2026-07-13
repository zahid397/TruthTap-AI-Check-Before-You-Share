import type { PatternRule } from "@/types";

/**
 * fakeNewsRules.ts
 * ----------------
 * The pattern library behind TruthTap AI's rule-based engine.
 * Each rule = a misinformation "tell" that researchers and
 * fact-checkers commonly flag. A rule matches when ANY of its
 * regex patterns hit the analyzed text.
 *
 * Adding a new rule = adding one object. No other file changes.
 */
export const FAKE_NEWS_RULES: PatternRule[] = [
  {
    id: "urgent-language",
    label: "Urgent or pressure language detected",
    description:
      "Words like “BREAKING”, “act now” or “before it's deleted” rush you into sharing without thinking.",
    penalty: 12,
    severity: "medium",
    patterns: [
      /\burgent(ly)?\b/i,
      /\bbreaking\b/i,
      /\bact (now|fast|immediately)\b/i,
      /\bbefore (it'?s|this is|they) (deleted|removed|banned|gone)\b/i,
      /\bright now\b/i,
      /\b(hurry|quick(ly)?!)/i,
      /\blast (chance|warning)\b/i,
      /\btonight\b.{0,30}\b(blocked|banned|deleted)\b/i,
      /\bcancell?ed tomorrow\b/i,
    ],
  },
  {
    id: "emotional-language",
    label: "Emotional or exaggerated language detected",
    description:
      "Strong emotional words (“shocking”, “miracle”, “terrifying”) are used to trigger feelings instead of facts.",
    penalty: 10,
    severity: "medium",
    patterns: [
      /\bshock(ing|ed)?\b/i,
      /\bunbelievable\b/i,
      /\bterrifying\b/i,
      /\boutrage(ous)?\b/i,
      /\bmiracle\b/i,
      /\bdisaster\b/i,
      /\byou won'?t believe\b/i,
      /\bexposed\b/i,
      /\bsecret (they|the government|doctors)\b/i,
      /\bdangerous\b/i,
      /\bthey don'?t want you to know\b/i,
      /\b(cure|kills?) (all|every)\b/i,
    ],
  },
  {
    id: "share-bait",
    label: "Urgent share request detected",
    description:
      "“Share now”, “forward to everyone”, “make this viral” — real news never begs to be shared.",
    penalty: 15,
    severity: "high",
    patterns: [
      /\bshare (this )?(now|before|fast|immediately|with everyone)\b/i,
      /\bforward (this )?to\b/i,
      /\btag your friends\b/i,
      /\bmake (this|it) viral\b/i,
      /\bsend (this )?to \d+ (people|friends|groups)\b/i,
      /\bretweet (now|this)\b/i,
      /\bshare now\b/i,
      /\bor you('?ll| will) (lose|regret|miss)\b/i,
    ],
  },
  {
    id: "fake-authority",
    label: "Vague authority claim detected",
    description:
      "“Doctors warn…”, “Scientists discovered…”, “Experts confirm…” with no names, papers or links is a classic trick.",
    penalty: 12,
    severity: "medium",
    patterns: [
      /\bdoctors? (warn|say|hate|reveal)\b/i,
      /\bscientists? (have )?(discovered|found|confirm)\b/i,
      /\bexperts? (confirm|say|agree|warn)\b/i,
      /\bstudies (show|prove|confirm)\b/i,
      /\bresearchers? (found|say|prove)\b/i,
      /\ba friend who works (at|in|for)\b/i,
      /\binsider(s)? (say|reveal|confirm)\b/i,
    ],
  },
  {
    id: "sensitive-claim",
    label: "Sensitive health / money / political claim",
    description:
      "Claims about cures, guaranteed money, elections or emergencies cause real harm — they need real evidence.",
    penalty: 15,
    severity: "high",
    patterns: [
      /\bcures? (all|every|cancer|diabetes|covid)\b/i,
      /\bnew cure\b/i,
      /\bvaccines? (cause|kill|are dangerous)\b/i,
      /\bguaranteed (returns?|profit|income|money)\b/i,
      /\bdouble your (money|investment)\b/i,
      /\bget rich (quick|fast|overnight)\b/i,
      /\belection (was )?(rigged|stolen|hacked)\b/i,
      /\b5g (causes?|spreads?)\b/i,
      /\bdrink(ing)? .{0,20}(cures?|kills? (the )?virus)\b/i,
      /\bexams? (are )?cancell?ed\b/i,
      /\bschools? (closed|shut down) (nationwide|forever)\b/i,
      /\baccount will be (blocked|deleted|suspended)\b/i,
    ],
  },
  {
    id: "ai-deepfake",
    label: "Possible AI-generated / deepfake context",
    description:
      "Mentions of AI images, face swaps, voice clones or “100% real video” deserve extra caution — seeing is no longer believing.",
    penalty: 10,
    severity: "medium",
    patterns: [
      /\bdeep\s?fakes?\b/i,
      /\bai[- ]?(generated|made|created)\b/i,
      /\bface[- ]?swap\b/i,
      /\bvoice (clone|cloning)\b/i,
      /\bthis video of (the )?(president|prime minister|celebrity|minister)\b/i,
      /\b100% real\b/i,
      /\bnot edited\b/i,
      /\bno edits?\b/i,
    ],
  },
  {
    id: "excessive-caps",
    label: "Excessive capital letters",
    description:
      "LOTS OF CAPS is shouting, not reporting. Credible sources stay calm.",
    penalty: 8,
    severity: "low",
    patterns: [/\b[A-Z]{4,}\b.*\b[A-Z]{4,}\b/, /^[^a-z]{20,}$/m],
  },
  {
    id: "excessive-punctuation",
    label: "Excessive punctuation (!!! / ???)",
    description:
      "Multiple exclamation or question marks signal emotional bait rather than verified information.",
    penalty: 5,
    severity: "low",
    patterns: [/!{2,}/, /\?{2,}/, /(!\?|\?!){1,}/],
  },
];

/** Penalty applied by analyzeClaim() when no source/link is provided. */
export const NO_SOURCE_PENALTY = 18;

export const NO_SOURCE_REASON = {
  id: "no-source",
  label: "No trusted source found",
  description:
    "The content gives no link, outlet or author to check. Verified information always has an origin.",
  severity: "high" as const,
  penalty: NO_SOURCE_PENALTY,
};

/** Reason + penalty when the linked domain looks suspicious. */
export const SUSPICIOUS_LINK_REASON = {
  id: "suspicious-link",
  label: "Suspicious or shortened link detected",
  description:
    "Link shorteners and low-trust domains hide where a link really goes. Expand and inspect it before trusting the content.",
  severity: "high" as const,
  penalty: 30,
};

/** Small bonus when the content links to a widely trusted outlet. */
export const TRUSTED_SOURCE_BONUS = 8;
