import Foundation from "@/assets/Foundadtion .png";
import Authority from "@/assets/Authority.png";
import momentum from "@/assets/momentum.png";
import scalability from "@/assets/Foundadtion .png";

export type PackageSlug = "foundation" | "momentum" | "authority" | "scalability-blueprint";

export type PackageDetail = {
  slug: PackageSlug;
  number: string;
  name: string;
  label: string;
  featured: boolean;
  tagline: string;
  description: string;
  idealFor: string;
  includes: string[];
  deliverables: string[];
  outcomes: string[];
  timeline: string;
  servicesIncluded: string[];
  process: Array<{ title: string; description: string }>;
  /**
   * Hero banner image for this package's detail page. No dedicated
   * package photography was available, so these currently reuse the
   * same images already imported for the service detail pages
   * (web_development.jpg, marketing.jpg, seo.jpg, automation.jpg) —
   * picked to loosely match each package's focus, not because they're
   * meant to be final. Swap each for real package-specific imagery
   * (or a hero video, same pattern as ServiceDetailPage) when you
   * have it — this field is required so every package always has
   * *something*, but "something" isn't "correct" yet.
   */
  heroImage: string;
};

export const packageOrder: Array<{ slug: PackageSlug; label: string }> = [
  { slug: "foundation", label: "Foundation" },
  { slug: "momentum", label: "Momentum" },
  { slug: "authority", label: "Authority" },
  { slug: "scalability-blueprint", label: "Scalability Blueprint" },
];

export const packageDetails: Record<PackageSlug, PackageDetail> = {
  foundation: {
    slug: "foundation",
    number: "01",
    name: "Foundation",
    label: "Start Strong",
    featured: false,
    tagline: "The essential digital foundation your business needs to look credible and compete with confidence.",
    description:
      "Foundation is a focused engagement for businesses that need one core deliverable executed well—without juggling multiple vendors or overbuilding too early.",
    idealFor:
      "New businesses, rebrands, or teams that need one high-impact asset launched quickly—a website, brand identity, or core campaign setup.",
    includes: [
      "One core deliverable",
      "Strategy & discovery",
      "Professional execution",
      "Launch-ready delivery",
    ],
    deliverables: [
      "Discovery workshop & project brief",
      "One primary deliverable (website, brand, or campaign foundation)",
      "Two revision rounds included",
      "Launch checklist & handoff documentation",
      "30-day post-launch support window",
    ],
    outcomes: [
      "A professional digital presence you can confidently share with prospects",
      "Clear messaging and structure aligned to your business goals",
      "A launch-ready asset without unnecessary complexity",
    ],
    timeline: "Typical timeline: 3–6 weeks depending on scope.",
    servicesIncluded: ["Websites & Online Stores", "Brand & UI/UX Design"],
    process: [
      {
        title: "Discovery",
        description: "We clarify goals, audience, scope, and success metrics before any design or build begins.",
      },
      {
        title: "Execution",
        description: "One focused workstream with regular check-ins and a clear approval path.",
      },
      {
        title: "Launch",
        description: "We deliver, test, and hand off with documentation so your team can move forward confidently.",
      },
    ],
    heroImage: Foundation,
  },
  momentum: {
    slug: "momentum",
    number: "02",
    name: "Momentum",
    label: "Build Traction",
    featured: false,
    tagline: "Combine complementary services to build visibility, engagement, and consistent growth.",
    description:
      "Momentum connects two related services under one strategy—so your website, creative, or marketing efforts reinforce each other instead of working in silos.",
    idealFor:
      "Growing businesses ready to move beyond a single asset and start building consistent lead flow, brand visibility, or campaign performance.",
    includes: [
      "Two connected services",
      "Growth-focused strategy",
      "Creative & execution",
      "Performance tracking",
    ],
    deliverables: [
      "Integrated strategy across two service areas",
      "Coordinated creative and technical execution",
      "Shared analytics & performance reporting",
      "Monthly optimization recommendations",
      "Dedicated project manager",
    ],
    outcomes: [
      "Stronger alignment between your website, brand, and marketing",
      "More consistent visibility and lead generation",
      "Clear visibility into what's working and what to improve next",
    ],
    timeline: "Typical timeline: 6–10 weeks for initial launch, with optional ongoing support.",
    servicesIncluded: [
      "Websites & Online Stores",
      "Brand & UI/UX Design",
      "SEO & Google Ads",
      "Social Media Growth",
    ],
    process: [
      {
        title: "Strategy Mapping",
        description: "We identify how your two service areas should work together to support one growth goal.",
      },
      {
        title: "Parallel Execution",
        description: "Design, development, and marketing workstreams run in sync with shared milestones.",
      },
      {
        title: "Optimize & Scale",
        description: "We review performance data and refine the system based on real results.",
      },
    ],
    heroImage: momentum,
  },
  authority: {
    slug: "authority",
    number: "03",
    name: "Authority",
    label: "Own Your Space",
    featured: true,
    tagline: "A complete digital growth system under one strategic direction.",
    description:
      "Authority brings your website, brand, content, SEO, creative, and marketing together as one connected engine—managed by one team with one plan.",
    idealFor:
      "Businesses that want to own their category online, reduce vendor chaos, and build a full-funnel presence that generates consistent demand.",
    includes: [
      "Multi-channel strategy",
      "Brand & digital presence",
      "Creative & marketing",
      "Ongoing optimization",
    ],
    deliverables: [
      "Full digital growth roadmap",
      "Website + brand + content system",
      "SEO and/or paid acquisition setup",
      "Social & creative production support",
      "Monthly reporting and optimization cycles",
      "Dedicated account lead",
    ],
    outcomes: [
      "One cohesive brand experience across every touchpoint",
      "Reduced friction between web, creative, and marketing teams",
      "A scalable system for generating and converting demand",
    ],
    timeline: "Typical timeline: 8–14 weeks for core system launch, then ongoing optimization.",
    servicesIncluded: [
      "Websites & Online Stores",
      "Brand & UI/UX Design",
      "AI Video & UGC Ad Creative",
      "SEO & Google Ads",
      "Social Media Growth",
    ],
    process: [
      {
        title: "Full Audit & Roadmap",
        description: "We assess your current digital presence and design an integrated growth plan.",
      },
      {
        title: "System Build",
        description: "Website, brand, content, and acquisition channels are built to work as one funnel.",
      },
      {
        title: "Growth Cycles",
        description: "Ongoing optimization based on analytics, creative testing, and business feedback.",
      },
    ],
    heroImage: Authority,
  },
  "scalability-blueprint": {
    slug: "scalability-blueprint",
    number: "04",
    name: "Scalability Blueprint",
    label: "Built Around You",
    featured: false,
    tagline: "A fully customized engagement for complex goals, integrations, and long-term growth.",
    description:
      "Scalability Blueprint is for businesses with ambitious plans, multiple stakeholders, custom integrations, or the need for a dedicated remote team over time.",
    idealFor:
      "Established companies, multi-location brands, or teams scaling operations who need custom workflows, integrations, and long-term partnership—not a templated package.",
    includes: [
      "Custom engagement model",
      "Advanced integrations",
      "Dedicated strategy",
      "Long-term scalability",
    ],
    deliverables: [
      "Custom scope & team composition",
      "Advanced automation & integration planning",
      "Dedicated specialists across design, dev, and marketing",
      "Quarterly strategic reviews",
      "Flexible retainer or project-based structure",
    ],
    outcomes: [
      "A digital operation built around your exact business model",
      "Automated workflows that reduce manual overhead",
      "A long-term partner who scales with your team",
    ],
    timeline: "Timeline and team structure defined during discovery—typically 3–12+ month engagements.",
    servicesIncluded: [
      "All Kodefiz services",
      "AI Automation",
      "Custom integrations",
      "Dedicated remote teams",
    ],
    process: [
      {
        title: "Deep Discovery",
        description: "We map stakeholders, systems, bottlenecks, and long-term objectives.",
      },
      {
        title: "Blueprint Design",
        description: "A custom engagement plan covering team, tools, milestones, and KPIs.",
      },
      {
        title: "Partnership Execution",
        description: "We embed as an extension of your team and evolve the system as you scale.",
      },
    ],
    heroImage: scalability,
  },
};

export const packageList = packageOrder.map(({ slug }) => packageDetails[slug]);

export function getPackageBySlug(slug: string | undefined): PackageDetail | undefined {
  if (!slug) return undefined;
  return packageDetails[slug as PackageSlug];
}