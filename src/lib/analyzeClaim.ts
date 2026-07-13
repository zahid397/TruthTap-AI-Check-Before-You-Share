import type { AnalysisResult, RiskReason } from "@/types";
import {
  FAKE_NEWS_RULES,
  NO_SOURCE_REASON,
  SUSPICIOUS_LINK_REASON,
  TRUSTED_SOURCE_BONUS,
} from "./fakeNewsRules";
import { calculateTrustScore } from "./trustScore";
import { checkSource } from "./sourceCheck";

/**
 * analyzeClaim.ts
 * ---------------
 * The orchestrator. Pipeline:
 *   input -> pattern rules -> source check -> trust score -> result
 * Pure function, runs entirely in the browser, deterministic,
 * and easy to explain to hackathon judges in one breath.
 */

export interface ClaimInputData {
  text: string;
  link?: string;
}

const SEVERITY_RANK = { high: 0, medium: 1, low: 2 } as const;

export function analyzeClaim({ text, link }: ClaimInputData): AnalysisResult {
  const cleanText = text.trim();
  const cleanLink = link?.trim() || undefined;

  // 1. Run every pattern rule against the text
  const reasons: RiskReason[] = [];
  for (const rule of FAKE_NEWS_RULES) {
    const matched = rule.patterns.some((pattern) => pattern.test(cleanText));
    if (matched) {
      reasons.push({
        id: rule.id,
        label: rule.label,
        description: rule.description,
        severity: rule.severity,
        penalty: rule.penalty,
      });
    }
  }

  // 2. Trace the source (offline heuristics)
  const source = checkSource(cleanText, cleanLink);
  if (!source.originalSourceFound) {
    reasons.push({ ...NO_SOURCE_REASON });
  } else if (source.domainVerdict === "suspicious") {
    reasons.push({ ...SUSPICIOUS_LINK_REASON });
  }

  // 3. Score it (trusted outlets earn a small bonus)
  const bonus = source.trustedMatch ? TRUSTED_SOURCE_BONUS : 0;
  const { score, status, statusLabel, actions } = calculateTrustScore(
    reasons,
    bonus
  );

  // 4. Highest-severity reasons first for display
  const sortedReasons = [...reasons].sort(
    (a, b) => SEVERITY_RANK[a.severity] - SEVERITY_RANK[b.severity]
  );

  return {
    score,
    status,
    statusLabel,
    reasons: sortedReasons,
    actions,
    source,
    input: { text: cleanText, link: cleanLink },
  };
}
