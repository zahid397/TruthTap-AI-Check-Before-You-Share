/**
 * TruthTap AI - Shared type definitions
 * Every module in the app speaks through these contracts.
 */

/** Overall verdict buckets shown to the user. */
export type RiskStatus = "safe" | "needs-checking" | "high-risk";

export type Severity = "low" | "medium" | "high";

/** A single pattern rule from fakeNewsRules.ts */
export interface PatternRule {
  id: string;
  /** Short label shown in the "Why this score?" list */
  label: string;
  /** One-line, youth-friendly explanation */
  description: string;
  /** Points removed from 100 when this rule matches */
  penalty: number;
  severity: Severity;
  /** Regex patterns; a rule matches if ANY pattern hits */
  patterns: RegExp[];
}

/** A rule that matched the analyzed content. */
export interface RiskReason {
  id: string;
  label: string;
  description: string;
  severity: Severity;
  penalty: number;
}

/** Result of the mock source-tracing logic. */
export interface SourceCheckResult {
  hasLink: boolean;
  domain: string | null;
  /** Did the content point to ANY original source? */
  originalSourceFound: boolean;
  /** Does the domain match our trusted outlet list? */
  trustedMatch: boolean;
  domainVerdict: "trusted" | "unverified" | "suspicious" | "none";
  /** Human steps the user can take to verify */
  steps: string[];
}

/** Full structured output of analyzeClaim(). */
export interface AnalysisResult {
  score: number; // 0 - 100
  status: RiskStatus;
  statusLabel: string; // "Safe" | "Needs Checking" | "High Risk"
  reasons: RiskReason[];
  actions: string[];
  source: SourceCheckResult;
  input: {
    text: string;
    link?: string;
  };
}

/** Quiz question shape used by /quiz */
export interface QuizQuestion {
  id: number;
  category: "Real or Fake?" | "Safe to Share?" | "AI or Human?";
  question: string;
  /** The claim / statement being judged (shown in a quote card) */
  context: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/** Sample claims for the demo chips on /check */
export interface SampleClaim {
  label: string;
  text: string;
  link?: string;
}
