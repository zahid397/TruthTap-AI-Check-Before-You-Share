/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // TruthTap AI is 100% client-side (no Server Actions, no API routes, no
  // middleware, no dynamic data) — `output: 'export'` makes that
  // architectural fact explicit at the build level. The result is a
  // folder of plain HTML/CSS/JS with NO Next.js server process involved
  // in production at all. Practically: (1) it can be hosted on Vercel,
  // Netlify, GitHub Pages, or literally any static file host; (2) it
  // sidesteps the entire class of React Server Components server-side
  // protocol vulnerabilities disclosed since Dec 2025, because those all
  // require a live server to send a crafted request to — a static
  // export has none in production, regardless of Next.js version.
  output: "export",
};

module.exports = nextConfig;
