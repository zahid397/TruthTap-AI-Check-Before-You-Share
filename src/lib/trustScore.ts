import type { RiskReason, RiskStatus } from "@/types";

/**
 * trustScore.ts
 * -------------
 * Pure scoring logic. Start at 100, subtract every matched rule's
 * penalty, add a small bonus for trusted sources, clamp to 0-100,
 * then map the final number to a status + action guide.
 *
 * Thresholds (calibrated against the demo claims):
 *   75-100  -> Safe
 *   45-74   -> Needs Checking
 *    0-44   -> High Risk
 */

export interface TrustScoreResult {
  score: number;
  status: RiskStatus;
  statusLabel: string;
  actions: string[];
}

export const STATUS_LABELS: Record<RiskStatus, string> = {
  safe: "Safe",
  "needs-checking": "Needs Checking",
  "high-risk": "High Risk",
};

/** Youth-friendly next steps per verdict (mirrors the mockup copy). */
export const ACTION_GUIDE: Record<RiskStatus, string[]> = {
  safe: [
    "Looks lower-risk — still skim the original source before sharing.",
    "Check the date: old news often resurfaces as \"new\".",
    "Share with context, not just a headline.",
    "If it still surprises you, confirm with a second trusted outlet.",
  ],
  "needs-checking": [
    "Do not share this content yet.",
    "Check official sources first.",
    "Search trusted news outlets.",
    "Ask a teacher, guardian or expert.",
    "Report it if it could be harmful.",
  ],
  "high-risk": [
    "Do not share this content.",
    "Check official sources before believing it.",
    "Search trusted news outlets for confirmation.",
    "Ask a teacher, guardian or expert.",
    "Report the post if it could harm people.",
  ],
};

const clamp = (n: number, min = 0, max = 100): number =>
  Math.min(max, Math.max(min, Math.round(n)));

export function statusFromScore(score: number): RiskStatus {
  if (score >= 75) return "safe";
  if (score >= 45) return "needs-checking";
  return "high-risk";
}

/**
 * Core calculation used by analyzeClaim().
 * @param reasons  every matched risk reason (each carries its penalty)
 * @param bonus    optional positive adjustment (e.g. trusted source found)
 */
export function calculateTrustScore(
  reasons: RiskReason[],
  bonus = 0
): TrustScoreResult {
  const totalPenalty = reasons.reduce((sum, r) => sum + r.penalty, 0);
  const score = clamp(100 - totalPenalty + bonus);
  const status = statusFromScore(score);

  return {
    score,
    status,
    statusLabel: STATUS_LABELS[status],
    actions: ACTION_GUIDE[status],
  };
}
