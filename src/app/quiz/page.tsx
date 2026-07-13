import type { Metadata } from "next";
import QuizClient from "./QuizClient";

export const metadata: Metadata = {
  title: "MIL Quiz",
  description:
    "A quick, fun media-literacy game. Spot fake news, deepfakes and share-bait across 10 real-world scenarios, with an explanation after every answer.",
};

export default function QuizPage() {
  return <QuizClient />;
}
