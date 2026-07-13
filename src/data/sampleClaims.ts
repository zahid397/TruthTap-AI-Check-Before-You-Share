import type { SampleClaim } from "@/types";

/**
 * Demo chips shown on the Check page.
 * Chosen to hit all three verdicts live on stage:
 * High Risk, Needs Checking and Safe.
 */
export const SAMPLE_CLAIMS: SampleClaim[] = [
  {
    label: "School exam cancelled tomorrow",
    text: "BREAKING: All school exams are cancelled tomorrow nationwide!! Share this now before they delete it!",
  },
  {
    label: "Doctors warn about this fruit",
    text: "Doctors warn this common fruit is dangerous and can make you sick. Forward this to everyone you love right now!",
  },
  {
    label: "Share now or you'll lose it",
    text: "Send this to 10 people or your account will be blocked tonight. Hurry!! This is your last chance!",
  },
  {
    label: "Miracle tea trend",
    text: "This new miracle tea helps you lose 5kg in one week, experts say.",
  },
  {
    label: "\"100% real\" leader video",
    text: "This video of the president singing is 100% real, no edits! Share before it gets removed.",
  },
  {
    label: "Verified news with source",
    text: "According to Reuters, the city will test its emergency sirens on Friday morning as part of a routine safety drill.",
    link: "https://www.reuters.com",
  },
];
