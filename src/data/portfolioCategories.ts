import heroBg from "@/assets/Case Studies/proman.png";
import jonesshakes from "@/assets/Case Studies/jonesshakes.png";
import Furniture from "@/assets/Case Studies/furnture.png";
import calculator from "@/assets/Case Studies/calculator.png";
import Afrimac from "@/assets/Case Studies/afrimac.png";
import autofixc from "@/assets/Case Studies/autofixc.png";
import Cabnearme from "@/assets/Case Studies/cabe.png";
import Softechgenics from "@/assets/Case Studies/softechgenics.png";
import panjkora from "@/assets/Case Studies/panjkora.png";
import alnisar from "@/assets/Case Studies/alnisar.png";
import emp from "@/assets/Case Studies/emp.png";
import compression from "@/assets/Case Studies/compression.png";
import invoice from "@/assets/Case Studies/invoice.png";
import LeadFlow from "@/assets/Case Studies/leadflow.png";

import { a } from "vitest/dist/chunks/suite.d.FvehnV49.js";

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
        id: "Proman",
        name: "Proman",
        client: "Proman",
        image: heroBg,
        alt: "Proman website",
        description: "Custom contractor website with service pages, lead capture, and mobile-first UX.",
        outcome: "Stronger local visibility and a clearer path from visit to inquiry.",
        tags: ["WordPress", "Lead Gen", "Local SEO"],
      },
      {
        id: "Jones Shakes",
        name: "Jones Shakes",
        client: "Jones Shakes",
        image: jonesshakes,
        alt: "Jones Shakes website",
        description: "Platform-style web experience with structured navigation and conversion-focused layouts.",
        outcome: "Improved user flow and a more professional product presentation.",
        tags: ["Custom Dev", "UX", "Platform"],
      },
      {
        id: "Sis Furnishings",
        name: "Sis Furnishings",
        client: "Sis Furnishings",
        image: Furniture,
        alt: "furniture website",
        description: "Brand-forward marketing site designed to communicate trust and drive consultation requests.",
        outcome: "More polished positioning for a competitive local market.",
        tags: ["WordPress", "Woocommerce Store", "Brand"],
      },
      {
        id: "Calculator",
        name: "Calculator",
        client: "Calculator",
        image: calculator,
        alt: "Calculator website",
        description: "Service-business website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Calc Conversion", "MVP"],
      },
       {
        id: "afrimac",
        name: "Afrimac",
        client: "Afrimac",
        image: Afrimac,
        alt: "Afrimac website",
        description: "Service-business website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Calc Conversion", "MVP"],
      },
      {
        id: "autofixc",
        name: "AutofixC",
        client: "AutofixC",
        image: autofixc,
        alt: "AutofixC website",
        description: "Service-business website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Insurance Marketing", "Lead Generation"],
      },
      {
        id: "cabenearme",
        name: "Cabenearme",
        client: "Cabenearme",
        image: Cabnearme,
        alt: "Cabenearme website",
        description: "Service-business website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Taxi Booking", "Service Marketplace"],
      },
      {
        id: "Softechgenics",
        name: "Softechgenics",
        client: "Softechgenics",
        image: Softechgenics,
        alt: "Softechgenics website",
        description: "Service-business website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Digital Marketing", "Lead Generation"],
      },
      {
        id: "panjkora",
        name: "Panjkora",
        client: "Panjkora",
        image: panjkora,
        alt: "Panjkora website",
        description: "Hotel booking website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Wordpress", "Hotel Booking", "Booking System"],
      },
      {
        id: "alnisar",
        name: "Alnisar",
        client: "Alnisar",
        image: alnisar,
        alt: "Alnisar website",
        description: "Auto repair website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Wordpress", "Auto Repair", "Service Marketplace"],
      },
       {
        id: "emp",
        name: "Employee Management Portal",
        client: "Employee Management Portal",
        image: emp,
        alt: "Employee Management Portal",
        description: "Employee Management Portal website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Software", "Employee Management"],
      },
      {
        id: "compression",
        name: "Pdf Compression Tool",
        client: "Pdf Compression Tool",
        image: compression,
        alt: "Pdf Compression Tool",
        description: "Pdf Compression Tool website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Compression Tool", "Saas"],
      },
       {
        id: "invoice",
        name: "Pdf Invoice Generator",
        client: "Pdf Invoice Generator",
        image: invoice,
        alt: "Pdf Invoice Generator",
        description: "Pdf Invoice Generator website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Invoice Generator", "Saas"],
      },
      {
        id: "leadflow",
        name: "LeadFlow",
        client: "LeadFlow",
        image: LeadFlow,
        alt: "LeadFlow website",
        description: "LeadFlow website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Custom Dev", "Lead Generation", "Saas"],
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
        image: panjkora,
        alt: "Masons Exterior brand and web design",
        description: "Visual identity and web design aligned to a premium exterior services brand.",
        outcome: "Stronger brand perception and clearer service positioning.",
        tags: ["Brand Identity", "UI/UX", "Web Design"],
      },
      {
        id: "gravel-ridge",
        name: "Gravel Ridge",
        client: "Gravel Ridge Outdoor Equipment",
        image: Cabnearme,
        alt: "Gravel Ridge design",
        description: "Retail-focused design system with bold visuals and product-led layout structure.",
        outcome: "More cohesive brand presentation across web touchpoints.",
        tags: ["Retail", "Visual Design", "E-commerce UX"],
      },
      {
        id: "claymar-electric",
        name: "Claymar Electric",
        client: "Claymar Electric",
        image: calculator,
        alt: "Claymar Electric web design",
        description: "Clean, professional design for a trades business with strong trust signals.",
        outcome: "Improved clarity for service categories and contact conversion.",
        tags: ["Trades", "Web Design", "Trust UX"],
      },
      {
        id: "troy-cluthe",
        name: "Troy Cluthe Sales",
        client: "Troy Cluthe Sales",
        image: emp,
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
        image: Afrimac,
        alt: "Builders Game Podcast video creative",
        description: "Podcast and promotional creative with strong visual hooks and platform-ready formats.",
        outcome: "More engaging promotion assets for audience growth.",
        tags: ["Podcast", "Short-form", "Promo Creative"],
      },
      {
        id: "masons-builtreach-video",
        name: "Masons Exterior Campaign",
        client: "Masons Exterior / Builtreach",
        image: alnisar,
        alt: "Masons Exterior video campaign",
        description: "Campaign visuals and video-ready creative supporting paid and organic promotion.",
        outcome: "Stronger ad creative for service-based lead generation.",
        tags: ["UGC Style", "Ad Creative", "Campaign"],
      },
      {
        id: "bidm8-supplier-video",
        name: "BidM8 Supplier Promo",
        client: "BidM8 Supplier",
        image: Furniture,
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
        image: jonesshakes,
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
        image: Softechgenics,
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
        image: alnisar,
        alt: "Masons Exterior social media",
        description: "Social creative direction and content formats aligned to a premium service brand.",
        outcome: "More cohesive social presence and stronger project showcase content.",
        tags: ["Social Creative", "Content System", "Brand"],
      },
      {
        id: "gravel-ridge-social",
        name: "Gravel Ridge Social",
        client: "Gravel Ridge",
        image: Cabnearme,
        alt: "Gravel Ridge social media",
        description: "Retail-focused social templates and campaign visuals for product promotion.",
        outcome: "Better consistency across seasonal and product-led posts.",
        tags: ["Retail Social", "Templates", "Campaigns"],
      },
      {
        id: "builders-social",
        name: "Builders Game Social",
        client: "Builders Game Podcast",
        image: Afrimac,
        alt: "Builders Game social content",
        description: "Episode promotion assets and short-form content designed for discovery.",
        outcome: "Stronger clip and promo output for audience growth.",
        tags: ["Podcast Clips", "Short-form", "Promotion"],
      },
      {
        id: "builders-social",
        name: "Builders Game Social",
        client: "Builders Game Podcast",
        image: Afrimac,
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
        image: Furniture,
        alt: "BidM8 automation",
        description: "Lead routing and follow-up automations connecting forms, CRM, and internal notifications.",
        outcome: "Faster response times and less manual handoff between teams.",
        tags: ["CRM", "Lead Routing", "Make.com"],
      },
      {
        id: "builtreach-automation",
        name: "Builtreach Client Systems",
        client: "Builtreach / Masons Exterior",
        image: alnisar,
        alt: "Builtreach automation systems",
        description: "Marketing and operations automations supporting client campaign workflows.",
        outcome: "Reduced manual coordination across campaign delivery.",
        tags: ["Automation", "Marketing Ops", "Integrations"],
      },
      {
        id: "consulting-automation",
        name: "Consulting Lead Engine",
        client: "Professional Services",
        image: emp,
        alt: "Consulting automation workflow",
        description: "Consultation booking, follow-up sequences, and CRM automation for service businesses.",
        outcome: "More reliable lead nurturing without adding headcount.",
        tags: ["AI Workflows", "CRM", "Follow-up"],
      },
    ],
  },
];
