import type { SourceCheckResult } from "@/types";

/**
 * sourceCheck.ts
 * --------------
 * Lightweight, fully offline "source tracing".
 * It does NOT crawl the web (no paid APIs) — it inspects the input:
 *   1. Is there any link at all? (original source found / not found)
 *   2. Does the domain match a curated trusted-outlet list?
 *   3. Does the link look suspicious (shorteners, junk TLDs)?
 * ...then suggests concrete human verification steps.
 */

const TRUSTED_DOMAINS: string[] = [
  "reuters.com",
  "apnews.com",
  "bbc.com",
  "bbc.co.uk",
  "afp.com",
  "factcheck.afp.com",
  "aljazeera.com",
  "dw.com",
  "theguardian.com",
  "nytimes.com",
  "unesco.org",
  "un.org",
  "who.int",
  "nasa.gov",
  "noaa.gov",
  "nature.com",
  "snopes.com",
  "factcheck.org",
  "politifact.com",
  "prothomalo.com",
  "thedailystar.net",
];

const SHORTENERS: string[] = [
  "bit.ly",
  "tinyurl.com",
  "goo.gl",
  "t.co",
  "cutt.ly",
  "rb.gy",
  "is.gd",
  "ow.ly",
];

const SUSPICIOUS_TLD = /\.(xyz|buzz|top|click|club|monster|loan|win|gq|tk)$/i;
const SUSPICIOUS_NAME = /(viral|gossip|hotnews|realtruth|exposed|freegift)/i;

/** Finds URLs written with protocol, www., or as bare domains. */
const URL_PATTERNS: RegExp[] = [
  /(?:https?:\/\/|www\.)[^\s<>"']+/gi,
  /\b[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:com|org|net|gov|edu|int|info|co|io|news|ai)\b(?:\/[^\s<>"']*)?/gi,
];

function extractDomain(raw: string): string | null {
  try {
    const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    const host = new URL(withProto).hostname.toLowerCase();
    return host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function findFirstUrl(text: string): string | null {
  for (const pattern of URL_PATTERNS) {
    const matches = text.match(pattern);
    if (matches && matches.length > 0) return matches[0];
  }
  return null;
}

export function checkSource(text: string, link?: string): SourceCheckResult {
  const candidate = link?.trim() || findFirstUrl(text);
  const hasLink = Boolean(candidate);
  const domain = candidate ? extractDomain(candidate) : null;

  const trustedMatch = domain
    ? TRUSTED_DOMAINS.some((d) => domain === d || domain.endsWith(`.${d}`))
    : false;

  const suspicious = domain
    ? SHORTENERS.includes(domain) ||
      SUSPICIOUS_TLD.test(domain) ||
      SUSPICIOUS_NAME.test(domain)
    : false;

  const domainVerdict: SourceCheckResult["domainVerdict"] = !hasLink
    ? "none"
    : trustedMatch
      ? "trusted"
      : suspicious
        ? "suspicious"
        : "unverified";

  const steps: string[] = [];
  if (!hasLink) {
    steps.push(
      "Ask: where did this originally come from? Search the exact wording in quotes."
    );
  }
  if (domainVerdict === "suspicious") {
    steps.push(
      "This link uses a shortener or low-trust domain — expand it and inspect the real site before trusting it."
    );
  }
  if (domainVerdict === "unverified" && domain) {
    steps.push(
      `Search "${domain}" together with the word "fake" to see if others have flagged this site.`
    );
  }
  steps.push(
    "Search the claim on official websites (government, WHO, NASA, your school).",
    "Check trusted outlets: BBC, Reuters, AP, AFP Fact Check.",
    "Look for multiple reliable reports saying the same thing.",
    "Try a reverse image search if a photo or video is involved.",
    "Avoid sharing until it is verified."
  );

  return {
    hasLink,
    domain,
    originalSourceFound: hasLink,
    trustedMatch,
    domainVerdict,
    steps,
  };
}
