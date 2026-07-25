import { useEffect, useRef, useState } from "react";

export const FLAME = "#F76F01";
export const NAVY = "#132F48";

export type Project = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  challenge: string;
  solution: string;
  outcome: string;
  tech: string[];
  gradientFrom: string;
  gradientTo: string;
  tall?: boolean;
};

export const categories = ["All", "Web Platforms", "Mobile Apps", "AI & Automation", "E-commerce", "Branding"];

export const projects: Project[] = [
  {
    id: "orbitpay",
    name: "OrbitPay",
    category: "Web Platforms",
    tagline: "Rebuilding a payments dashboard merchants actually enjoy using.",
    challenge: "Merchants were abandoning onboarding mid-flow — support tickets about “confusing” screens kept piling up.",
    solution: "We rebuilt the core product from the data model up: a fast, opinionated Next.js app with real-time transaction views.",
    outcome: "Onboarding completion rose 34%. UI-related support tickets dropped by half.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe API"],
    gradientFrom: "#132F48",
    gradientTo: "#2C5478",
    tall: true,
  },
  {
    id: "fieldwise",
    name: "Fieldwise",
    category: "Mobile Apps",
    tagline: "A field-service app built for spotty signal and muddy gloves.",
    challenge: "Technicians in the field were losing job data every time connectivity dropped.",
    solution: "An offline-first React Native app with background sync and a UI usable one-handed in bright sunlight.",
    outcome: "Field data loss dropped to near zero. Average job completion time fell 18%.",
    tech: ["React Native", "SQLite", "Node.js", "AWS"],
    gradientFrom: "#F76F01",
    gradientTo: "#C24E00",
  },
  {
    id: "north-ai",
    name: "North AI",
    category: "AI & Automation",
    tagline: "Turning a support inbox into a self-improving knowledge engine.",
    challenge: "Support agents were answering the same forty questions, all day, every day.",
    solution: "A retrieval-augmented assistant trained on the company's own docs, with human review for anything uncertain.",
    outcome: "First-response time dropped from six hours to under three minutes for common questions.",
    tech: ["Python", "LangChain", "OpenAI", "Pinecone"],
    gradientFrom: "#1C3B5A",
    gradientTo: "#0B2038",
    tall: true,
  },
  {
    id: "marisol",
    name: "Marisol Beauty",
    category: "E-commerce",
    tagline: "A storefront rebuilt around how people actually shop for skincare.",
    challenge: "High traffic, low conversion — visitors browsed but rarely checked out.",
    solution: "A Shopify Hydrogen storefront with a guided quiz-to-product flow and one-click reorder for subscribers.",
    outcome: "Conversion improved 22%. Subscriptions became 30% of total revenue.",
    tech: ["Hydrogen", "Shopify", "Tailwind", "Klaviyo"],
    gradientFrom: "#F76F01",
    gradientTo: "#9C3D00",
  },
  {
    id: "harborline",
    name: "Harborline",
    category: "Branding",
    tagline: "A full identity rebuild for a logistics company outgrowing its old look.",
    challenge: "The brand looked a decade old; new enterprise clients weren't taking it seriously.",
    solution: "A full identity system — wordmark, color, motion guidelines — built to hold up on a truck and a pitch deck equally well.",
    outcome: "Landed two Fortune 500 logistics contracts within a quarter of the rebrand shipping.",
    tech: ["Identity System", "Motion Guidelines", "Webflow"],
    gradientFrom: "#132F48",
    gradientTo: "#1C3B5A",
  },
  {
    id: "vantage",
    name: "Vantage Robotics",
    category: "Web Platforms",
    tagline: "A technical marketing site that doubles as a sales engineering tool.",
    challenge: "Sales engineers were manually building spec decks for every single prospect.",
    solution: "An interactive configurator on the marketing site itself, generating a shareable spec sheet in real time.",
    outcome: "Average sales cycle shortened by nine days.",
    tech: ["Next.js", "Three.js", "Sanity"],
    gradientFrom: "#3A2A18",
    gradientTo: "#0B2038",
  },
];

export const industries = [
  "Healthcare",
  "FinTech",
  "E-commerce",
  "Logistics",
  "Real Estate",
  "Professional Services",
  "SaaS",
  "Hospitality",
];

export const processSteps = [
  {
    n: "01",
    title: "Discovery & Scoping",
    desc: "We map the real problem before touching a line of code — stakeholders, constraints, and what success actually looks like.",
  },
  {
    n: "02",
    title: "Architecture & Design",
    desc: "System design and UI design happen together, not in sequence, so nothing gets rebuilt because the two never talked to each other.",
  },
  {
    n: "03",
    title: "Build & Iterate",
    desc: "Weekly shippable increments, not a black box for three months. You see it early, and often.",
  },
  {
    n: "04",
    title: "QA & Launch",
    desc: "Real device testing, load testing, and a rollback plan — all before anything touches production.",
  },
  {
    n: "05",
    title: "Support & Scale",
    desc: "We stay on after launch: monitoring, iteration, and scaling the system as real usage grows.",
  },
];

export const techGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Laravel", "Python", "PostgreSQL"] },
  { label: "AI & Data", items: ["OpenAI", "LangChain", "Pinecone", "Snowflake"] },
  { label: "Infrastructure", items: ["AWS", "Vercel", "Docker", "Cloudflare"] },
];

export const clientStories = [
  {
    id: "orbitpay-story",
    name: "Jordan Feld",
    role: "Head of Product, OrbitPay",
    quote: "Our new dashboard finally matches how good our product actually is.",
    video: true,
    gradientFrom: "#132F48",
    gradientTo: "#2C5478",
  },
  {
    id: "fieldwise-story",
    name: "Renee Okafor",
    role: "Ops Lead, Fieldwise",
    quote: "Field techs stopped complaining about the app within a week of launch. That never happens.",
    video: false,
    gradientFrom: "#F76F01",
    gradientTo: "#C24E00",
  },
  {
    id: "north-ai-story",
    name: "Tomas Berg",
    role: "Founder, North AI",
    quote: "Kodefiz didn't just build the assistant — they helped us figure out what to even automate first.",
    video: false,
    gradientFrom: "#1C3B5A",
    gradientTo: "#0B2038",
  },
];

export const checklist = [
  "Free Strategy Call",
  "No Commitment",
  "30 Minutes",
  "Portfolio Walkthrough",
  "Technical Feasibility Read",
  "Clear Next Steps",
];

export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
