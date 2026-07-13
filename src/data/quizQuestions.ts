import type { QuizQuestion } from "@/types";

/**
 * MIL Quiz question bank (10 questions, 3 game modes).
 * Several scenarios are adapted from real viral misinformation
 * cases discussed in UNESCO Global Youth Hackathon 2026
 * mentoring sessions (e.g. the whale-barnacle image and the
 * Spain-Portugal blackout fabricated headlines).
 */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: "Safe to Share?",
    question: "Is this statement safe to share?",
    context:
      "\"Scientists have discovered a new cure for ALL diseases. Share now!\"",
    options: [
      "Yes, it looks true",
      "No, it seems exaggerated",
      "Not sure",
    ],
    correctIndex: 1,
    explanation:
      "Correct answer: No. \"Cures all diseases\" is an impossible, exaggerated claim, \"scientists\" are never named, no source is given, and \"Share now!\" is classic share-bait. Real breakthroughs come with named researchers, institutions and published studies.",
  },
  {
    id: 2,
    category: "Real or Fake?",
    question: "A viral photo shows a diver removing barnacles from a humpback whale \"to help it\". Real or fake?",
    context:
      "\"A diver carefully removes barnacles from a whale's skin. This is a good thing and we should do it to help whales.\"",
    options: ["Real", "Fake", "Impossible to tell"],
    correctIndex: 1,
    explanation:
      "Fake. This viral image is fabricated — barnacles on whales are mostly harmless hitchhikers, and divers do not perform \"barnacle removal rescues\". A reverse image search traces the picture to AI-generated content, not marine science.",
  },
  {
    id: 3,
    category: "Real or Fake?",
    question: "During the 2025 Spain-Portugal blackout, screenshots of a news site claimed sanctions on Russia caused it. Real or fake?",
    context:
      "A screenshot styled like a major newspaper: \"Mass blackouts were a consequence of European sanctions against Russia.\"",
    options: ["Real headline", "Fake fabricated headline", "Can't be checked"],
    correctIndex: 1,
    explanation:
      "Fake. The screenshots imitated a real outlet's design, but the outlet never published that story — the grid operator and BBC pointed to a technical grid failure. Fabricated \"screenshots\" of trusted media are a growing disinformation tactic: always find the article on the outlet's actual website.",
  },
  {
    id: 4,
    category: "AI or Human?",
    question: "A hyper-realistic video shows a world leader announcing that school is banned forever. The account posting it was created last week. What is it most likely?",
    context:
      "No major news outlet is reporting it. Comments are turned off.",
    options: [
      "Real leaked footage",
      "Likely an AI deepfake",
      "A harmless joke",
    ],
    correctIndex: 1,
    explanation:
      "Likely a deepfake. An extraordinary announcement + a brand-new anonymous account + zero coverage from real outlets is the deepfake red-flag trio. Verify on official government channels before believing or sharing.",
  },
  {
    id: 5,
    category: "Safe to Share?",
    question: "Is this message safe to share?",
    context:
      "\"Forward this to 10 friends or your account will be deleted tonight!\"",
    options: [
      "Yes, better safe than sorry",
      "No, it's a chain-message hoax",
      "Only share with close friends",
    ],
    correctIndex: 1,
    explanation:
      "No. Platforms never delete accounts for ignoring a forwarded message. Chain messages use fear and urgency to spread themselves — forwarding them trains people to obey pressure instead of checking facts.",
  },
  {
    id: 6,
    category: "Real or Fake?",
    question: "\"NASA confirms the sun will go completely dark for 6 days next month.\" Real or fake?",
    context: "Posted with a dramatic space picture and 2 million shares.",
    options: ["Real", "Fake", "Partly true"],
    correctIndex: 1,
    explanation:
      "Fake. This hoax returns every few years. It is physically impossible, and NASA has never announced it — a 30-second search of nasa.gov settles it. Share counts are not evidence: popularity is not proof.",
  },
  {
    id: 7,
    category: "AI or Human?",
    question: "In a viral image, a politician's hand has 7 fingers and the text on their badge looks melted. What does this suggest?",
    context: "The image \"proves\" they attended a secret meeting.",
    options: [
      "A camera glitch",
      "The image is AI-generated",
      "Nothing — images can't be faked",
    ],
    correctIndex: 1,
    explanation:
      "AI-generated. Extra fingers, warped or melted text, waxy skin and inconsistent lighting are classic visual tells of AI image generators. When an image is the \"proof\", inspect the details and run a reverse image search.",
  },
  {
    id: 8,
    category: "Safe to Share?",
    question: "Is this one reasonably safe to share?",
    context:
      "\"Reuters reports the city will test flood sirens on Friday\" — posted with a working link to the article on reuters.com.",
    options: [
      "Yes, after a quick look at the article",
      "No, never share news online",
      "Not sure",
    ],
    correctIndex: 0,
    explanation:
      "Yes — with a quick check. A named trusted outlet, a working link and calm, specific language are all good signs. Best practice: open the link, confirm the date and headline match, then share with context.",
  },
  {
    id: 9,
    category: "Real or Fake?",
    question: "\"Drinking hot lemon water kills the virus in your throat before it reaches your lungs, doctors warn.\" Real or fake?",
    context: "Forwarded in a family group chat with 3 heart emojis.",
    options: ["Real medical advice", "Fake health claim", "True for some people"],
    correctIndex: 1,
    explanation:
      "Fake. Vague \"doctors\", no names, no study, and a too-simple cure for a serious illness. Health misinformation is among the most harmful kinds — check WHO or your national health authority before sharing anything medical.",
  },
  {
    id: 10,
    category: "Safe to Share?",
    question: "A fan page posts that your favorite celebrity has died. It went up 5 minutes ago and no news outlet has it. Share it?",
    context: "The post says \"RIP legend 💔 share to pay tribute\".",
    options: [
      "Yes, be the first to break the news",
      "Not yet — wait for confirmation from reliable outlets",
      "Share it privately only",
    ],
    correctIndex: 1,
    explanation:
      "Not yet. Celebrity death hoaxes are extremely common. One unverified account is not a source — wait for confirmation from established outlets or an official statement. Being right matters more than being first.",
  },
];
