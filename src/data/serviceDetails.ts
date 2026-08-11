import automation from "@/assets/automation.jpg";
import digitalMarketing from "@/assets/marketing.jpg";
import makeLogo from "@/assets/make.png";
import seoContentWriting from "@/assets/seo.jpg";
import websiteDevelopment from "@/assets/web_development.jpg";
import zapierLogo from "@/assets/Zapier.png";

export type ServiceSlug =
  | "websites-online-stores"
  | "brand-ui-ux-design"
  | "ai-video-ugc-creative"
  | "seo-google-ads"
  | "social-media-growth"
  | "ai-automation";

export type ServiceExtraSection = {
  title: string;
  intro?: string;
  cards?: Array<{ title: string; description: string }>;
  points?: string[];
  paragraphs?: string[];
};

export type ServiceFAQ = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: ServiceSlug;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  offerings: string[];
  detailItems: string[];
  heroSubtitle: string;
  heroIntro: string;
  descriptions: string[];
  comprehensiveItems: string[];
  features: string[];
  advantageTitle: string;
  advantageDescription: string;
  heroImage: string;
  cardTint: string;
  extraSections?: ServiceExtraSection[];
  faqs?: ServiceFAQ[];
  toolHighlights?: Array<{ name: string; logoUrl: string; description: string }>;
};

export const howItWorks = {
  badge: "HOW IT WORKS",
  title: "A clear path from strategy to launch.",
  subtitle: "Every engagement follows a focused process so you always know what's happening next.",
  steps: [
    {
      title: "Discovery Call",
      description:
        "We learn about your business, goals, bottlenecks, and priorities before recommending the right service or program.",
      cta: "Book a call",
    },
    {
      title: "Strategy & Scope",
      description:
        "We define deliverables, timelines, success metrics, and the team needed to execute with clarity.",
      cta: "See our process",
    },
    {
      title: "Design & Build",
      description:
        "Creative, development, and marketing work happens in focused sprints with regular updates and feedback loops.",
      cta: "View services",
    },
    {
      title: "Launch & Optimize",
      description:
        "We launch, measure performance, refine what works, and help you scale with ongoing support when needed.",
      cta: "Get in touch",
    },
  ],
};

export const serviceOrder: Array<{ slug: ServiceSlug; label: string }> = [
  { slug: "websites-online-stores", label: "Websites & Online Stores" },
  { slug: "brand-ui-ux-design", label: "Brand & UI/UX Design" },
  { slug: "ai-video-ugc-creative", label: "AI Video & UGC Ad Creative" },
  { slug: "seo-google-ads", label: "SEO & Google Ads" },
  { slug: "social-media-growth", label: "Social Media Growth" },
  { slug: "ai-automation", label: "AI Automation" },
];

export const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
  "websites-online-stores": {
    slug: "websites-online-stores",
    number: "01",
    title: "Websites & Online Stores",
    shortDescription:
      "Conversion-focused digital experiences built to make your business look credible, perform fast, and turn visitors into customers.",
    description:
      "Conversion-focused digital experiences built to make your business look credible, perform fast, and turn visitors into customers.",
    offerings: ["WordPress", "Shopify", "Webflow", "Framer", "Custom Development"],
    detailItems: [
      "High-converting website design & development.",
      "Shopify & e-commerce store setup.",
      "WordPress, Webflow & Framer builds.",
      "Landing pages for campaigns & lead gen.",
      "Speed, SEO & mobile optimization.",
    ],
    heroSubtitle: "Websites that look premium and convert visitors into leads.",
    heroIntro:
      "Your website is often the first impression prospects get. We build fast, credible, conversion-focused sites that make your business look established and guide visitors toward action.",
    descriptions: [
      "We design and develop websites that do more than look good—they communicate trust, load quickly, and make it easy for visitors to take the next step. Whether you need a corporate site, portfolio, or full online store, we build with your business goals in mind.",
      "Every build is responsive, SEO-ready, and structured for performance. From WordPress and Shopify to Webflow, Framer, and custom development, we choose the right platform for your budget, timeline, and growth plans.",
    ],
    comprehensiveItems: [
      "Custom website design",
      "E-commerce & Shopify stores",
      "Landing page development",
      "CMS setup & training",
      "Performance optimization",
      "SEO-friendly structure",
      "Analytics integration",
      "Launch support",
    ],
    features: ["Conversion-focused UX", "Mobile-first design", "Fast load times", "SEO-ready builds", "Easy content management"],
    advantageTitle: "Your website should work as hard as your team.",
    advantageDescription:
      "We combine strategy, design, and development so your site becomes a reliable growth asset—not just a static website.",
    heroImage: websiteDevelopment,
    cardTint: "bg-[#FFF4E8]",
  },
  "brand-ui-ux-design": {
    slug: "brand-ui-ux-design",
    number: "02",
    title: "Brand & UI/UX Design",
    shortDescription:
      "Strategic visual systems and interfaces that make your brand memorable, credible, and easy to engage with.",
    description:
      "Strategic visual systems and interfaces that make your brand memorable, credible, and easy to engage with.",
    offerings: ["Brand Identity", "UI/UX Design", "Social Creatives", "Graphic Design", "Design Systems"],
    detailItems: [
      "Social media creatives.",
      "Brand visual design.",
      "Marketing materials & ad creatives.",
      "Video production & editing.",
      "Podcast editing & shorts.",
    ],
    heroSubtitle: "Visual identity and interfaces that build trust at first glance.",
    heroIntro:
      "Strong brands don't happen by accident. We create cohesive visual systems and user experiences that make your business look polished, professional, and instantly recognizable.",
    descriptions: [
      "From logos and brand guidelines to UI/UX for websites and apps, we design experiences that feel intentional and premium. Every visual touchpoint is aligned with how you want to be perceived in your market.",
      "We also produce the creative assets your marketing needs—social posts, ad graphics, pitch decks, and campaign visuals—so your brand stays consistent across every channel.",
    ],
    comprehensiveItems: [
      "Logo & brand identity",
      "Brand guidelines",
      "UI/UX for web & apps",
      "Marketing collateral",
      "Social media templates",
      "Ad creative design",
      "Presentation design",
      "Design system setup",
    ],
    features: ["Brand strategy", "Visual identity", "UI/UX design", "Marketing creatives", "Consistent design systems"],
    advantageTitle: "Design that makes your business feel established.",
    advantageDescription:
      "We help you look like the category leader you are becoming—with visuals that build credibility and make every interaction feel on-brand.",
    heroImage: digitalMarketing,
    cardTint: "bg-[#F3EEFF]",
  },
  "ai-video-ugc-creative": {
    slug: "ai-video-ugc-creative",
    number: "03",
    title: "AI Video & UGC Ad Creative",
    shortDescription:
      "Scroll-stopping video content designed around how people actually consume content today.",
    description:
      "Scroll-stopping video content designed around how people actually consume content today.",
    offerings: ["AI Video", "UGC Ads", "Short-form Content", "Video Editing", "Ad Creatives"],
    detailItems: [
      "UGC-style ad scripts & filming direction.",
      "AI-generated video variations.",
      "Short-form content for Reels & TikTok.",
      "Video editing & motion graphics.",
      "Ad creative testing & iteration.",
    ],
    heroSubtitle: "Video creative built to stop the scroll and drive action.",
    heroIntro:
      "Paid and organic social success depends on creative that feels native, authentic, and compelling. We produce UGC-style and AI-enhanced video content optimized for today's platforms.",
    descriptions: [
      "We create short-form video, UGC-style ads, and platform-native creative that helps your brand stand out in crowded feeds. Every piece is built with hooks, pacing, and messaging designed to convert attention into clicks and leads.",
      "From scripting and editing to AI-assisted variations and ad testing, we help you produce more creative, faster—without sacrificing quality or brand consistency.",
    ],
    comprehensiveItems: [
      "UGC ad production",
      "AI video generation",
      "Short-form social content",
      "Video editing & post-production",
      "Hook & script development",
      "Platform-specific formats",
      "Creative testing support",
      "Campaign asset packs",
    ],
    features: ["Scroll-stopping hooks", "UGC-style authenticity", "Platform-native formats", "Fast iteration", "Ad-ready deliverables"],
    advantageTitle: "Creative volume without creative chaos.",
    advantageDescription:
      "We help you test more angles, launch faster, and find winning creative without juggling multiple freelancers.",
    heroImage: digitalMarketing,
    cardTint: "bg-[#E8F4FF]",
  },
  "seo-google-ads": {
    slug: "seo-google-ads",
    number: "04",
    title: "SEO & Google Ads",
    shortDescription:
      "Search strategies designed to put your business in front of people who are already looking for what you offer.",
    description:
      "Search strategies designed to put your business in front of people who are already looking for what you offer.",
    offerings: ["Technical SEO", "Local SEO", "Content SEO", "Google Ads", "Lead Generation"],
    detailItems: [
      "Technical SEO audits & fixes.",
      "Local SEO & Google Business Profile.",
      "Keyword research & content strategy.",
      "Google Ads campaign setup & management.",
      "Landing page optimization for leads.",
    ],
    heroSubtitle: "Get found by buyers who are already searching for you.",
    heroIntro:
      "Search is one of the highest-intent channels available. We combine SEO and paid search to help you capture demand, generate qualified leads, and grow predictably.",
    descriptions: [
      "Our SEO work covers technical foundations, on-page optimization, content strategy, and local visibility—so your business ranks for the terms that actually drive revenue.",
      "On the paid side, we build and manage Google Ads campaigns with clear targeting, compelling landing pages, and ongoing optimization focused on cost per lead—not vanity metrics.",
    ],
    comprehensiveItems: [
      "Technical SEO",
      "On-page optimization",
      "Local SEO",
      "Content strategy",
      "Google Ads setup",
      "Campaign management",
      "Conversion tracking",
      "Monthly reporting",
    ],
    features: ["Search visibility", "Qualified lead generation", "Local discovery", "Paid search ROI", "Data-driven optimization"],
    advantageTitle: "Visibility that turns into pipeline.",
    advantageDescription:
      "We connect search strategy to business outcomes—helping you show up where it matters and convert that traffic into real opportunities.",
    heroImage: seoContentWriting,
    cardTint: "bg-[#FFF4E8]",
  },
  "social-media-growth": {
    slug: "social-media-growth",
    number: "05",
    title: "Social Media Growth",
    shortDescription:
      "A consistent content engine that turns your social presence into a source of attention, trust, and demand.",
    description:
      "A consistent content engine that turns your social presence into a source of attention, trust, and demand.",
    offerings: ["Content Strategy", "Social Management", "Creative Production", "Paid Social", "Community Growth"],
    detailItems: [
      "Content strategy & monthly calendars.",
      "Platform management & posting.",
      "Creative production for feeds & stories.",
      "Paid social campaign support.",
      "Community engagement & growth tracking.",
    ],
    heroSubtitle: "Stay visible, stay consistent, stay top of mind.",
    heroIntro:
      "Social media only works when it's consistent, strategic, and aligned with your brand. We build content systems that keep your audience engaged and your pipeline warm.",
    descriptions: [
      "We plan, produce, and manage social content that reflects your brand voice and supports your business goals—whether that's awareness, trust-building, or direct lead generation.",
      "From organic content calendars to paid social support and creative production, we help you show up consistently without adding more to your plate.",
    ],
    comprehensiveItems: [
      "Content strategy",
      "Monthly content calendars",
      "Post design & copywriting",
      "Platform management",
      "Paid social support",
      "Community engagement",
      "Performance reporting",
      "Brand voice alignment",
    ],
    features: ["Consistent posting", "On-brand creative", "Audience growth", "Engagement strategy", "Performance insights"],
    advantageTitle: "Social presence that supports revenue—not just likes.",
    advantageDescription:
      "We treat social as a growth channel, not a checkbox—building systems that create attention, trust, and demand over time.",
    heroImage: digitalMarketing,
    cardTint: "bg-[#F3EEFF]",
  },
  "ai-automation": {
    slug: "ai-automation",
    number: "06",
    title: "AI Automation",
    shortDescription:
      "Smart systems that remove repetitive work, connect your tools, and help your business respond faster.",
    description:
      "Smart systems that remove repetitive work, connect your tools, and help your business respond faster.",
    offerings: ["AI Workflows", "CRM Automation", "Lead Follow-up", "AI Agents", "Process Automation"],
    detailItems: [
      "CRM & lead follow-up automation.",
      "AI workflow design & implementation.",
      "Tool integrations (Make, Zapier, n8n).",
      "AI agents for support & operations.",
      "Process mapping & efficiency audits.",
    ],
    heroSubtitle: "Automate repetitive work and free your team to focus on growth.",
    heroIntro:
      "Manual processes slow businesses down. We design AI-powered automations that connect your tools, follow up with leads, and handle repetitive tasks reliably.",
    descriptions: [
      "We map your workflows, identify bottlenecks, and build automations that save time, reduce errors, and improve response speed—from lead capture to customer follow-up and internal operations.",
      "Using platforms like Make.com, Zapier, and n8n, plus AI agents where they add real value, we create systems that scale with your business instead of breaking as you grow.",
    ],
    comprehensiveItems: [
      "Workflow automation",
      "CRM integrations",
      "Lead follow-up sequences",
      "AI agent setup",
      "Make.com / Zapier / n8n flows",
      "Process documentation",
      "Monitoring & maintenance",
      "Custom automation builds",
    ],
    features: ["Reduced manual work", "Faster lead response", "Connected tools", "Scalable workflows", "AI where it adds value"],
    toolHighlights: [
      {
        name: "Make.com",
        logoUrl: makeLogo,
        description:
          "Powerful no-code integrations across thousands of apps—ideal for complex, multi-step automations tailored to your business.",
      },
      {
        name: "Zapier",
        logoUrl: zapierLogo,
        description:
          "Reliable app-to-app automation for teams that want fast setup and dependable workflows without heavy development.",
      },
    ],
    faqs: [
      {
        question: "What can be automated?",
        answer:
          "Lead follow-up, CRM updates, reporting, onboarding emails, social scheduling, data syncing, support triage, and many repetitive internal processes.",
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "No. We design, build, and maintain the automations for you—and document everything so your team understands how it works.",
      },
    ],
    advantageTitle: "Work smarter with systems that run in the background.",
    advantageDescription:
      "We help you reclaim hours every week by replacing manual tasks with reliable automations that keep your business moving.",
    heroImage: automation,
    cardTint: "bg-[#E8F4FF]",
  },
};

export const serviceList = serviceOrder.map(({ slug }) => serviceDetails[slug]);

export function getServiceBySlug(slug: string | undefined): ServiceDetail | undefined {
  if (!slug) return undefined;
  return serviceDetails[slug as ServiceSlug];
}

export const legacyServiceRedirects: Record<string, ServiceSlug> = {
  "website-development": "websites-online-stores",
  "app-development": "brand-ui-ux-design",
  "digital-marketing": "social-media-growth",
  "automation-ai": "ai-automation",
  "website-maintenance": "websites-online-stores",
  "seo-content-writing": "seo-google-ads",
};
