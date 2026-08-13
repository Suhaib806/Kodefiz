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
import business from "@/assets/Case Studies/businesstransaction.png";
import Home from "@/assets/Case Studies/Home.png";
import Cloudtica from "@/assets/Case Studies/Cloudtica Home.png";
import techpartner from "@/assets/Case Studies/techpartner.png";
import ad1 from "@/assets/Case Studies/add1.jpeg";
import ad2 from "@/assets/Case Studies/ad2.jpeg";
import ad3 from "@/assets/Case Studies/ad3.jpeg";
import ad4 from "@/assets/Case Studies/ad4.jpeg";
import ad5 from "@/assets/Case Studies/ad5.jpeg";
import automation from "@/assets/Case Studies/automation.jpeg";
import automation2 from "@/assets/Case Studies/automation2.jpeg";
import masonsVideo from "/jarvis.mp4";
import sm from "@/assets/Case Studies/sm.jpeg";
import sm1 from "@/assets/Case Studies/sm1.jpeg";
import sm2 from "@/assets/Case Studies/sm2.jpeg";
import sm3 from "@/assets/Case Studies/sm3.jpeg";
import sm4 from "@/assets/Case Studies/sm4.jpeg";
import sm5 from "@/assets/Case Studies/sm5.jpeg";
import sm6 from "@/assets/Case Studies/sm6.jpeg";
// NOTE: the stray `import { a } from "vitest/dist/chunks/suite.d.FvehnV49.js"`
// that was in the previous version of this file is removed — that's a
// vitest internal type-declaration chunk, not something meant to be
// imported into application code. It was almost certainly pulled in by
// an editor auto-import accident and wasn't being used anywhere below.

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
  videoUrl?: string;
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
      {
        id: "Business",
        name: "Business Transaction Website",
        client: "Business Website",
        image: business,
        alt: "Business Transaction Website",
        description: "Business Transaction Website highlighting projects, credibility, and contact pathways.",
        outcome: "Better first impression for high-ticket service inquiries.",
        tags: ["Wordpress", "Investment Company", "Business Website"],
      },
    ],
  },
  {
    slug: "web-design",
    title: "Web Design",
    subtitle: "Brand systems, UI/UX, and visual design that make businesses look established and trustworthy.",
    projects: [
      {
        id: "home-design",
        name: "Home Design",
        client: "Home Design Portfolio",
        image: Home,
        alt: "Home design showcase",
        description: "Modern web design and visual system for digital presence.",
        outcome: "Enhanced brand representation and user experience.",
        tags: ["UI/UX", "Web Design", "Visual Design"],
      },
      {
        id: "Cloudtica",
        name: "Cloudtica",
        client: "Cloudtica",
        image: Cloudtica,
        alt: "Cloudtica web design",
        description: "Modern web design and visual system for digital presence.",
        outcome: "Enhanced brand representation and user experience.",
        tags: ["UI/UX", "Web Design", "Visual Design"],
      },
      {
        id: "TechPartner",
        name: "TechPartner",
        client: "Tech Partner",
        image: techpartner,
        alt: "TechPartner web design",
        description: "Modern web design and visual system for digital presence.",
        outcome: "Enhanced brand representation and user experience.",
        tags: ["UI/UX", "Web Design", "Visual Design"],
      },
    ],
  },
  {
  slug: "video",
  title: "Video & UGC Creative",
  subtitle:
    "Scroll-stopping video, UGC-style ads, and short-form content built for modern platforms.",
  projects: [
    {
      id: "builders-podcast",
      name: "Builders Game Podcast",
      client: "Builders Game Podcast",
      image: "",
      alt: "Builders Game Podcast video",
      description: "",
      outcome: "",
      tags: [],
      videoUrl: "/ugc.mp4",
    },
    {
      id: "masons-builtreach-video",
      name: "Masons Exterior Campaign",
      client: "Masons Exterior",
      image: "",
      alt: "Masons Exterior video",
      description: "",
      outcome: "",
      tags: [],
      videoUrl: "/ugc1.mp4",
    },
    {
      id: "bidm8-supplier-video",
      name: "BidM8 Supplier Promo",
      client: "BidM8 Supplier",
      image: "",
      alt: "BidM8 supplier promotional video",
      description: "",
      outcome: "",
      tags: [],
      videoUrl: "/ugc2.mp4",
    },
    {
      id: "bidm8-supplier-video",
      name: "BidM8 Supplier Promo",
      client: "BidM8 Supplier",
      image: "",
      alt: "BidM8 supplier promotional video",
      description: "",
      outcome: "",
      tags: [],
      videoUrl: "/ugc3.mp4",
    },
    {
      id: "bidm8-supplier-video",
      name: "BidM8 Supplier Promo",
      client: "BidM8 Supplier",
      image: "",
      alt: "BidM8 supplier promotional video",
      description: "",
      outcome: "",
      tags: [],
      videoUrl: "/ugc4.mp4",
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
        image: ad1,
        alt: "BidM8 SEO and ads",
        description: "Search-focused landing structure and campaign-ready pages for high-intent keywords.",
        outcome: "Better alignment between ad traffic and on-site conversion paths.",
        tags: ["SEO", "Google Ads", "Landing Pages"],
      },
      {
        id: "705-seo",
        name: "705 Contractors Local Search",
        client: "705 Contractors",
        image: ad2,
        alt: "705 Contractors SEO",
        description: "Local SEO structure, service-area pages, and search-friendly site architecture.",
        outcome: "Improved discoverability for local service searches.",
        tags: ["Local SEO", "Service Pages", "Lead Gen"],
      },
      {
        id: "homestand-ads",
        name: "Homestand Acquisition",
        client: "Homestand",
        image: ad3,
        alt: "Homestand marketing",
        description: "Paid and organic search strategy supporting consultation-driven lead generation.",
        outcome: "More consistent inbound interest from search channels.",
        tags: ["Google Ads", "SEO", "Consultations"],
      },
      {
        id: "homestand-ads",
        name: "Homestand Acquisition",
        client: "Homestand",
        image: ad4,
        alt: "Homestand marketing",
        description: "Paid and organic search strategy supporting consultation-driven lead generation.",
        outcome: "More consistent inbound interest from search channels.",
        tags: ["Google Ads", "SEO", "Consultations"],
      },
{
        id: "homestand-ads",
        name: "Homestand Acquisition",
        client: "Homestand",
        image: ad5,
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
        image: sm,
        alt: "Masons Exterior social media",
        description: "Social creative direction and content formats aligned to a premium service brand.",
        outcome: "More cohesive social presence and stronger project showcase content.",
        tags: ["Social Creative", "Content System", "Brand"],
      },
      {
        id: "gravel-ridge-social",
        name: "Gravel Ridge Social",
        client: "Gravel Ridge",
        image: sm1,
        alt: "Gravel Ridge social media",
        description: "Retail-focused social templates and campaign visuals for product promotion.",
        outcome: "Better consistency across seasonal and product-led posts.",
        tags: ["Retail Social", "Templates", "Campaigns"],
      },
      {
        id: "builders-social",
        name: "Builders Game Social",
        client: "Builders Game Podcast",
        image: sm2,
        alt: "Builders Game social content",
        description: "Episode promotion assets and short-form content designed for discovery.",
        outcome: "Stronger clip and promo output for audience growth.",
        tags: ["Podcast Clips", "Short-form", "Promotion"],
      },
      {
        id: "builders-social",
        name: "Builders Game Social",
        client: "Builders Game Podcast",
        image: sm3,
        alt: "Builders Game social content",
        description: "Episode promotion assets and short-form content designed for discovery.",
        outcome: "Stronger clip and promo output for audience growth.",
        tags: ["Podcast Clips", "Short-form", "Promotion"],
      },
      {
        id: "builders-social",
        name: "Builders Game Social",
        client: "Builders Game Podcast",
        image: sm4,
        alt: "Builders Game social content",
        description: "Episode promotion assets and short-form content designed for discovery.",
        outcome: "Stronger clip and promo output for audience growth.",
        tags: ["Podcast Clips", "Short-form", "Promotion"],
      },
      {
        id: "builders-social",
        name: "Builders Game Social",
        client: "Builders Game Podcast",
        image: sm5,
        alt: "Builders Game social content",
        description: "Episode promotion assets and short-form content designed for discovery.",
        outcome: "Stronger clip and promo output for audience growth.",
        tags: ["Podcast Clips", "Short-form", "Promotion"],
      },
      {
        id: "builders-social",
        name: "Builders Game Social",
        client: "Builders Game Podcast",
        image: sm6,
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
  subtitle:
    "Workflows and integrations that remove repetitive work and help teams respond faster.",
  projects: [
    {
      id: "automation-dashboard",
      name: "AI Automation Dashboard",
      client: "AI",
      image: automation2,
      alt: "AI automation dashboard",
      description: "",
      outcome: "",
      tags: [],
    },
    {
      id: "automation-workflow",
      name: "Automated Workflow",
      client: "AI Automation",
      image: automation,
      alt: "AI automation workflow",
      description: "",
      outcome: "",
      tags: [],
    },
   
    {
      id: "automation-demo",
      name: "Automation Process",
      client: "Jarvis Ai",
      image: "",
      alt: "AI automation process video",
      description: "",
      outcome: "",
      tags: [],
      videoUrl: masonsVideo,
    },
  ],
},
];