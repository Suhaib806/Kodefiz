import heroBg from "@/assets/Case Studies/7o5_contracting.png";
import bidm8 from "@/assets/Case Studies/Bidm8.png";
import bidm8Supplier from "@/assets/Case Studies/bidm8_supplier.png";
import claymar from "@/assets/Case Studies/Claymar_electric.png";
import buildersPodcast from "@/assets/Case Studies/builders_game_podcast.png";
import trotter from "@/assets/Case Studies/trotter_generalcon_tracting.png";
import gravelRidge from "@/assets/Case Studies/Gravel_ridge.png";
import homestand from "@/assets/Case Studies/homestand.png";
import masons from "@/assets/Case Studies/Masons_Exterior.png";
import masonsBuiltreach from "@/assets/Case Studies/Masons_exterior_builtreach.png";
import troy from "@/assets/Case Studies/troy_cluthe_sales.png";

export type PortfolioCategorySlug =
  | "web-development"
  | "web-design"
  | "video"
  | "seo-marketing"
  | "social-media"
  | "ai-automation";

export type PortfolioProject = {
  id: string;
  name: string;
  client: string;
  image: string;
  alt: string;
  description: string;
  outcome: string;
  tags: string[];
};

export type PortfolioCategory = {
  slug: PortfolioCategorySlug;
  title: string;
  subtitle: string;
  projects: PortfolioProject[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "web-development",
    title: "Web Development",
    subtitle: "High-converting websites and online stores built for credibility, speed, and lead generation.",
    projects: [
      {
        id: "705-contractors",
        name: "705 Contractors",
        client: "705 Contractors",
        image: heroBg,
        alt: "705 Contractors website",
        description: "Custom contractor website with service pages, lead capture, and mobile-first UX.",
        outcome: "Stronger local visibility and a clearer path from visit to inquiry.",
        tags: ["WordPress", "Lead Gen", "Local SEO"],
      },
      {
        id: "bidm8-platform",
        name: "BidM8 Platform",
        client: "BidM8",
        image: bidm8,
        alt: "BidM8 web platform",
        description: "Platform-style web experience with structured navigation and conversion-focused layouts.",
        outcome: "Improved user flow and a more professional product presentation.",
        tags: ["Custom Dev", "UX", "Platform"],
      },
      {
        id: "homestand",
        name: "Homestand",
        client: "Homestand",
        image: homestand,
        alt: "Homestand website",
        description: "Brand-forward marketing site designed to communicate trust and drive consultation requests.",
        outcome: "More polished positioning for a competitive local market.",
        tags: ["Webflow", "Marketing Site", "Brand"],
      },
      {
        id: "trotter-contracting",
        name: "Trotter General Contracting",
        client: "Trotter General Contracting",
        image: trotter,
        alt: "Trotter General Contracting website",
        description: "Service-business website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["WordPress", "Services", "Portfolio"],
      },
    ],
  },
  {
    slug: "web-design",
    title: "Web Design",
    subtitle: "Brand systems, UI/UX, and visual design that make businesses look established and trustworthy.",
    projects: [
      {
        id: "masons-exterior",
        name: "Masons Exterior",
        client: "Masons Exterior",
        image: masons,
        alt: "Masons Exterior brand and web design",
        description: "Visual identity and web design aligned to a premium exterior services brand.",
        outcome: "Stronger brand perception and clearer service positioning.",
        tags: ["Brand Identity", "UI/UX", "Web Design"],
      },
      {
        id: "gravel-ridge",
        name: "Gravel Ridge",
        client: "Gravel Ridge Outdoor Equipment",
        image: gravelRidge,
        alt: "Gravel Ridge design",
        description: "Retail-focused design system with bold visuals and product-led layout structure.",
        outcome: "More cohesive brand presentation across web touchpoints.",
        tags: ["Retail", "Visual Design", "E-commerce UX"],
      },
      {
        id: "claymar-electric",
        name: "Claymar Electric",
        client: "Claymar Electric",
        image: claymar,
        alt: "Claymar Electric web design",
        description: "Clean, professional design for a trades business with strong trust signals.",
        outcome: "Improved clarity for service categories and contact conversion.",
        tags: ["Trades", "Web Design", "Trust UX"],
      },
      {
        id: "troy-cluthe",
        name: "Troy Cluthe Sales",
        client: "Troy Cluthe Sales",
        image: troy,
        alt: "Troy Cluthe Sales design",
        description: "Personal brand and sales-focused web design built around authority and lead capture.",
        outcome: "Sharper positioning for a professional sales brand.",
        tags: ["Personal Brand", "Sales Pages", "UI/UX"],
      },
    ],
  },
  {
    slug: "video",
    title: "Video & UGC Creative",
    subtitle: "Scroll-stopping video, UGC-style ads, and short-form content built for modern platforms.",
    projects: [
      {
        id: "builders-podcast",
        name: "Builders Game Podcast",
        client: "Builders Game Podcast",
        image: buildersPodcast,
        alt: "Builders Game Podcast video creative",
        description: "Podcast and promotional creative with strong visual hooks and platform-ready formats.",
        outcome: "More engaging promotion assets for audience growth.",
        tags: ["Podcast", "Short-form", "Promo Creative"],
      },
      {
        id: "masons-builtreach-video",
        name: "Masons Exterior Campaign",
        client: "Masons Exterior / Builtreach",
        image: masonsBuiltreach,
        alt: "Masons Exterior video campaign",
        description: "Campaign visuals and video-ready creative supporting paid and organic promotion.",
        outcome: "Stronger ad creative for service-based lead generation.",
        tags: ["UGC Style", "Ad Creative", "Campaign"],
      },
      {
        id: "bidm8-supplier-video",
        name: "BidM8 Supplier Promo",
        client: "BidM8 Supplier",
        image: bidm8Supplier,
        alt: "BidM8 supplier promotional creative",
        description: "Promotional creative and motion-led assets for B2B audience engagement.",
        outcome: "Clearer product storytelling for supplier-facing campaigns.",
        tags: ["B2B", "Promo Video", "Motion"],
      },
    ],
  },
  {
    slug: "seo-marketing",
    title: "SEO & Google Ads",
    subtitle: "Search visibility and paid acquisition systems that connect intent to qualified leads.",
    projects: [
      {
        id: "bidm8-seo",
        name: "BidM8 Search Growth",
        client: "BidM8",
        image: bidm8,
        alt: "BidM8 SEO and ads",
        description: "Search-focused landing structure and campaign-ready pages for high-intent keywords.",
        outcome: "Better alignment between ad traffic and on-site conversion paths.",
        tags: ["SEO", "Google Ads", "Landing Pages"],
      },
      {
        id: "705-seo",
        name: "705 Contractors Local Search",
        client: "705 Contractors",
        image: heroBg,
        alt: "705 Contractors SEO",
        description: "Local SEO structure, service-area pages, and search-friendly site architecture.",
        outcome: "Improved discoverability for local service searches.",
        tags: ["Local SEO", "Service Pages", "Lead Gen"],
      },
      {
        id: "homestand-ads",
        name: "Homestand Acquisition",
        client: "Homestand",
        image: homestand,
        alt: "Homestand marketing",
        description: "Paid and organic search strategy supporting consultation-driven lead generation.",
        outcome: "More consistent inbound interest from search channels.",
        tags: ["Google Ads", "SEO", "Consultations"],
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Growth",
    subtitle: "Consistent content systems that build attention, trust, and demand across social platforms.",
    projects: [
      {
        id: "masons-social",
        name: "Masons Exterior Social",
        client: "Masons Exterior",
        image: masonsBuiltreach,
        alt: "Masons Exterior social media",
        description: "Social creative direction and content formats aligned to a premium service brand.",
        outcome: "More cohesive social presence and stronger project showcase content.",
        tags: ["Social Creative", "Content System", "Brand"],
      },
      {
        id: "gravel-ridge-social",
        name: "Gravel Ridge Social",
        client: "Gravel Ridge",
        image: gravelRidge,
        alt: "Gravel Ridge social media",
        description: "Retail-focused social templates and campaign visuals for product promotion.",
        outcome: "Better consistency across seasonal and product-led posts.",
        tags: ["Retail Social", "Templates", "Campaigns"],
      },
      {
        id: "builders-social",
        name: "Builders Game Social",
        client: "Builders Game Podcast",
        image: buildersPodcast,
        alt: "Builders Game social content",
        description: "Episode promotion assets and short-form content designed for discovery.",
        outcome: "Stronger clip and promo output for audience growth.",
        tags: ["Podcast Clips", "Short-form", "Promotion"],
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    subtitle: "Workflows and integrations that remove repetitive work and help teams respond faster.",
    projects: [
      {
        id: "bidm8-automation",
        name: "BidM8 Workflow Automation",
        client: "BidM8",
        image: bidm8Supplier,
        alt: "BidM8 automation",
        description: "Lead routing and follow-up automations connecting forms, CRM, and internal notifications.",
        outcome: "Faster response times and less manual handoff between teams.",
        tags: ["CRM", "Lead Routing", "Make.com"],
      },
      {
        id: "builtreach-automation",
        name: "Builtreach Client Systems",
        client: "Builtreach / Masons Exterior",
        image: masonsBuiltreach,
        alt: "Builtreach automation systems",
        description: "Marketing and operations automations supporting client campaign workflows.",
        outcome: "Reduced manual coordination across campaign delivery.",
        tags: ["Automation", "Marketing Ops", "Integrations"],
      },
      {
        id: "consulting-automation",
        name: "Consulting Lead Engine",
        client: "Professional Services",
        image: troy,
        alt: "Consulting automation workflow",
        description: "Consultation booking, follow-up sequences, and CRM automation for service businesses.",
        outcome: "More reliable lead nurturing without adding headcount.",
        tags: ["AI Workflows", "CRM", "Follow-up"],
      },
    ],
  },
];
