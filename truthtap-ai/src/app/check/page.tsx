import type { Metadata } from "next";
import CheckClient from "./CheckClient";

export const metadata: Metadata = {
  title: "Check a Claim",
  description:
    "Paste a claim, link or screenshot text and get an instant trust score, risk reasons, source trace and safe-sharing advice.",
};

export default function CheckPage() {
  return <CheckClient />;
}
