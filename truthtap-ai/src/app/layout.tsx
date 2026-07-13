import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "TruthTap AI — Check Before You Share",
    template: "%s | TruthTap AI",
  },
  description:
    "A youth-friendly verification tool that helps you check claims, links and screenshots before sharing. Trust scores, risk reasons and safe-sharing advice — built for the UNESCO Global Youth Hackathon 2026.",
  keywords: [
    "media and information literacy",
    "MIL",
    "misinformation",
    "fact-checking",
    "UNESCO",
    "youth",
    "deepfake",
    "verification",
  ],
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
