import React, { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Check,
  Globe,
  Heart,
  Play,
  Search,
  ShoppingBag,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

type Service = {
  number: string;
  name: string;
  description: string;
  offerings: string[];
  type: string;
};

const services: Service[] = [
  {
    number: "01",
    name: "Websites & Online Stores",
    description:
      "Conversion-focused websites and online stores designed to look credible, perform fast, and turn visitors into customers.",
    offerings: [
      "WordPress",
      "Shopify",
      "Webflow",
      "Framer",
      "eCommerce",
    ],
    type: "website",
  },
  {
    number: "02",
    name: "Brand & UI/UX Design",
    description:
      "Strategic visual identities and digital experiences that make your brand memorable, trustworthy, and easy to engage with.",
    offerings: [
      "Brand Identity",
      "UI/UX Design",
      "Web Design",
      "Graphic Design",
      "Design Systems",
    ],
    type: "design",
  },
  {
    number: "03",
    name: "AI Video & UGC Ad Creative",
    description:
      "Scroll-stopping video content built for modern attention spans, helping brands communicate faster and advertise more effectively.",
    offerings: [
      "AI Video",
      "UGC Ads",
      "Short-Form Video",
      "Video Editing",
      "Motion Graphics",
    ],
    type: "video",
  },
  {
    number: "04",
    name: "SEO & Google Ads",
    description:
      "Search strategies designed to increase visibility, attract qualified visitors, and create a predictable flow of leads and customers.",
    offerings: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Keyword Strategy",
      "Google Ads",
    ],
    type: "seo",
  },
  {
    number: "05",
    name: "Social Media Growth & Management",
    description:
      "A consistent content and growth engine that helps your brand build trust, stay visible, and turn attention into business.",
    offerings: [
      "Content Strategy",
      "Social Posts",
      "Content Creation",
      "Community Management",
      "Growth Strategy",
    ],
    type: "social",
  },
  {
    number: "06",
    name: "AI Automation",
    description:
      "Smart systems that connect your tools, automate repetitive work, and make sure opportunities are followed up before they go cold.",
    offerings: [
      "AI Agents",
      "Workflow Automation",
      "CRM Automation",
      "Lead Follow-Up",
      "n8n / Make / Zapier",
    ],
    type: "automation",
  },
];

/* =========================================================
   CREATIVE PREVIEWS
========================================================= */

const WebsiteCreative = () => {
  return (
    <div className="relative w-full h-full min-h-[420px] overflow-hidden bg-[#E9EEF2]">
      {/* Decorative background */}
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#F76F01]/10 blur-3xl" />

      {/* Browser */}
      <div className="absolute left-[7%] right-[7%] top-[9%] bottom-[8%] rounded-2xl bg-white shadow-2xl overflow-hidden border border-[#132F48]/10">
        {/* Browser bar */}
        <div className="h-10 bg-[#F5F6F7] border-b border-[#132F48]/10 flex items-center px-4 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#132F48]/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#132F48]/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#132F48]/20" />

          <div className="ml-5 h-5 flex-1 max-w-[220px] rounded-full bg-white border border-[#132F48]/10 flex items-center px-3">
            <span className="text-[7px] text-[#62728A]">
              yourbrand.com
            </span>
          </div>
        </div>

        {/* Website */}
        <div className="p-5 sm:p-7">
          <div className="flex justify-between items-center">
            <div className="font-bold text-[#132F48] text-sm">
              KODEFIZ
            </div>

            <div className="flex gap-4">
              <span className="hidden sm:block text-[8px] text-[#62728A]">
                Work
              </span>
              <span className="hidden sm:block text-[8px] text-[#62728A]">
                Services
              </span>

              <span className="px-3 py-1.5 rounded-full bg-[#132F48] text-white text-[7px]">
                Let's talk
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-10">
            <div>
              <div className="text-[25px] sm:text-[35px] leading-[1] font-bold text-[#132F48]">
                Built to
                <br />
                <span className="text-[#F76F01]">convert.</span>
              </div>

              <p className="mt-4 text-[8px] leading-relaxed text-[#62728A] max-w-[160px]">
                Digital experiences designed around your customers,
                business and growth.
              </p>

              <div className="mt-5 inline-flex px-4 py-2 rounded-full bg-[#F76F01] text-white text-[7px]">
                Start a project
              </div>
            </div>

            <div className="relative">
              <div className="h-[145px] sm:h-[175px] rounded-xl bg-[#132F48] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 right-5 w-24 h-24 rounded-full bg-[#F76F01] blur-xl" />
                </div>

                <div className="relative p-4">
                  <div className="text-white/50 text-[7px]">
                    FEATURED PROJECT
                  </div>

                  <div className="mt-16 text-white text-[17px] font-semibold">
                    Digital
                    <br />
                    experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating metric */}
          <div className="absolute right-5 bottom-5 bg-white rounded-xl shadow-xl px-4 py-3 border border-[#132F48]/10">
            <div className="text-[7px] uppercase tracking-widest text-[#62728A]">
              Conversion
            </div>

            <div className="text-xl font-bold text-[#132F48] mt-1">
              +48%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesignCreative = () => {
  return (
    <div className="relative w-full min-h-[420px] overflow-hidden bg-[#132F48] p-6 sm:p-10">
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-[#F76F01]/20 blur-3xl" />

      {/* Main design board */}
      <div className="relative w-full h-full min-h-[350px] bg-[#F5F1EA] rounded-2xl overflow-hidden shadow-2xl">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#132F48 1px, transparent 1px), linear-gradient(90deg, #132F48 1px, transparent 1px)",
            backgroundSize: "35px 35px",
          }}
        />

        <div className="relative p-7 sm:p-10">
          <div className="flex justify-between items-center">
            <span className="text-[9px] tracking-[0.3em] text-[#62728A]">
              BRAND SYSTEM
            </span>

            <span className="text-[9px] text-[#62728A]">
              02 / 06
            </span>
          </div>

          <div className="mt-10">
            <div className="text-[45px] sm:text-[70px] font-bold leading-[0.8] text-[#132F48]">
              Aa
            </div>

            <div className="mt-5 text-[9px] uppercase tracking-widest text-[#62728A]">
              Typography
            </div>

            <div className="mt-2 text-2xl sm:text-3xl font-serif italic text-[#132F48]">
              Make it memorable.
            </div>
          </div>

          {/* Color palette */}
          <div className="absolute left-7 bottom-8 flex gap-2">
            <div className="w-9 h-9 rounded-full bg-[#132F48]" />
            <div className="w-9 h-9 rounded-full bg-[#F76F01]" />
            <div className="w-9 h-9 rounded-full bg-[#E9EEF2]" />
            <div className="w-9 h-9 rounded-full bg-[#FFFFFF] border border-[#132F48]/10" />
          </div>

          {/* UI card */}
          <div className="absolute right-6 bottom-7 w-[120px] sm:w-[160px] bg-white rounded-xl p-3 shadow-xl rotate-3">
            <div className="h-16 rounded-lg bg-[#132F48]" />

            <div className="mt-3 h-2 rounded-full bg-[#132F48]/10 w-3/4" />
            <div className="mt-2 h-2 rounded-full bg-[#132F48]/10 w-1/2" />

            <div className="mt-4 w-16 h-5 rounded-full bg-[#F76F01]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoCreative = () => {
  return (
    <div className="relative min-h-[420px] overflow-hidden bg-[#0D2235] flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 rounded-full bg-[#F76F01]/20 blur-3xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Phone */}
      <div className="relative w-[190px] sm:w-[220px] h-[350px] sm:h-[390px] rounded-[30px] bg-black border-[5px] border-[#33495B] shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20" />

        {/* Video */}
        <div className="absolute inset-1 rounded-[25px] overflow-hidden bg-gradient-to-br from-[#F76F01] via-[#9D470D] to-[#132F48]">
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute top-12 left-5 text-white">
            <div className="text-[8px] uppercase tracking-widest opacity-70">
              New Drop
            </div>

            <div className="mt-2 text-2xl font-bold leading-none">
              Stop
              <br />
              scrolling.
            </div>
          </div>

          {/* Play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
              <Play
                size={20}
                fill="#F76F01"
                className="text-[#F76F01] ml-1"
              />
            </div>
          </div>

          <div className="absolute bottom-6 left-5 right-5">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 rounded-full bg-white/30" />
              <div>
                <div className="text-[8px] font-semibold">
                  Your Brand
                </div>
                <div className="text-[6px] opacity-60">
                  Follow for more
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute -right-14 top-24 bg-white rounded-xl px-4 py-3 shadow-xl">
          <div className="text-[7px] uppercase tracking-wider text-[#62728A]">
            Watch time
          </div>
          <div className="text-lg font-bold text-[#132F48]">
            78%
          </div>
        </div>

        <div className="absolute -left-14 bottom-20 bg-[#F76F01] text-white rounded-xl px-4 py-3 shadow-xl">
          <div className="text-[7px] uppercase tracking-wider text-white/70">
            CTR
          </div>
          <div className="text-lg font-bold">
            +32%
          </div>
        </div>
      </div>
    </div>
  );
};

const SEOCreative = () => {
  return (
    <div className="relative min-h-[420px] overflow-hidden bg-[#E9EEF2] p-6 sm:p-10">
      <div className="absolute right-0 top-0 w-80 h-80 bg-[#F76F01]/10 blur-3xl rounded-full" />

      <div className="relative max-w-lg mx-auto pt-6">
        {/* Search */}
        <div className="h-14 rounded-full bg-white shadow-lg border border-[#132F48]/10 flex items-center px-5 gap-3">
          <Search size={18} className="text-[#62728A]" />

          <span className="text-sm text-[#132F48]">
            best digital agency for growth
          </span>
        </div>

        {/* Results */}
        <div className="mt-6 space-y-3">
          <div className="bg-white rounded-xl p-5 shadow-lg border border-[#132F48]/5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#F76F01]" />
              <span className="text-[8px] text-[#62728A]">
                kodefiz.com
              </span>
            </div>

            <div className="mt-3 text-sm font-semibold text-[#132F48]">
              Digital Growth Partner
            </div>

            <p className="mt-2 text-[8px] leading-relaxed text-[#62728A]">
              Websites, marketing, automation and digital experiences
              built for ambitious businesses.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-[8px] text-[#F76F01] font-semibold">
              Position #1
              <Check size={10} />
            </div>
          </div>

          <div className="bg-white/60 rounded-xl p-5 border border-[#132F48]/5">
            <div className="h-2 bg-[#132F48]/10 rounded-full w-1/3" />
            <div className="mt-3 h-2 bg-[#132F48]/10 rounded-full w-2/3" />
            <div className="mt-2 h-2 bg-[#132F48]/10 rounded-full w-1/2" />
          </div>
        </div>

        {/* Growth metric */}
        <div className="absolute -right-2 sm:-right-10 top-[260px] bg-[#132F48] text-white rounded-2xl p-5 shadow-2xl">
          <div className="text-[8px] uppercase tracking-widest text-white/50">
            Organic Traffic
          </div>

          <div className="text-3xl font-bold mt-1">
            +148%
          </div>

          <div className="mt-3 flex items-end gap-1 h-10">
            {[20, 28, 24, 40, 36, 55, 65, 80].map(
              (height, index) => (
                <div
                  key={index}
                  className="w-2 rounded-t-sm bg-[#F76F01]"
                  style={{ height: `${height}%` }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialCreative = () => {
  return (
    <div className="relative min-h-[420px] overflow-hidden bg-[#F5F1EA] p-6 sm:p-10">
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-[#F76F01]/10 blur-3xl rounded-full" />

      <div className="relative">
        <div className="flex justify-between items-center mb-5">
          <div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-[#62728A]">
              Social Growth
            </div>

            <div className="text-2xl font-bold text-[#132F48] mt-1">
              Content that moves.
            </div>
          </div>

          <div className="w-10 h-10 rounded-full bg-[#132F48] flex items-center justify-center">
            <Heart
              size={17}
              className="text-[#F76F01]"
              fill="#F76F01"
            />
          </div>
        </div>

        {/* Post grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-square rounded-xl bg-[#132F48] overflow-hidden relative">
            <div className="absolute inset-0 flex items-end p-3">
              <span className="text-white text-[11px] font-bold">
                BUILD.
              </span>
            </div>
          </div>

          <div className="aspect-square rounded-xl bg-[#F76F01] overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-2xl font-serif italic">
                Create.
              </span>
            </div>
          </div>

          <div className="aspect-square rounded-xl bg-[#D7DEE3] overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="text-[#132F48]" size={30} />
            </div>
          </div>

          <div className="aspect-square rounded-xl bg-white border border-[#132F48]/10 p-4">
            <div className="text-[7px] text-[#62728A]">
              ENGAGEMENT
            </div>
            <div className="text-xl font-bold text-[#132F48] mt-2">
              +84%
            </div>
          </div>

          <div className="aspect-square rounded-xl bg-[#132F48] p-4">
            <div className="text-[7px] text-white/50">
              FOLLOWERS
            </div>
            <div className="text-xl font-bold text-white mt-2">
              24.8K
            </div>
          </div>

          <div className="aspect-square rounded-xl bg-[#F76F01] p-4">
            <div className="text-[7px] text-white/70">
              REACH
            </div>
            <div className="text-xl font-bold text-white mt-2">
              1.2M
            </div>
          </div>
        </div>

        {/* Content calendar */}
        <div className="mt-4 bg-white rounded-xl p-4 shadow-lg border border-[#132F48]/5">
          <div className="flex justify-between items-center">
            <span className="text-[8px] uppercase tracking-widest text-[#62728A]">
              Content Calendar
            </span>

            <span className="text-[8px] text-[#F76F01]">
              24 posts scheduled
            </span>
          </div>

          <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className={`h-1.5 flex-1 rounded-full ${
                  item < 6
                    ? "bg-[#F76F01]"
                    : "bg-[#132F48]/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AutomationCreative = () => {
  return (
    <div className="relative min-h-[420px] overflow-hidden bg-[#0B1E2E] p-6 sm:p-10">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 w-80 h-80 rounded-full bg-[#F76F01]/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative h-full min-h-[350px] flex items-center justify-center">
        {/* Connection lines */}
        <div className="absolute left-[18%] right-[18%] top-1/2 h-px bg-[#F76F01]/30" />

        <div className="absolute left-[50%] top-[20%] bottom-[20%] w-px bg-[#F76F01]/20" />

        {/* Nodes */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 items-center w-full max-w-[480px]">
          {/* Lead */}
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Globe size={17} className="text-white" />
              </div>

              <div className="text-white text-xs font-semibold mt-3">
                New Lead
              </div>

              <div className="text-white/40 text-[7px] mt-1">
                Website form
              </div>
            </div>

            <div className="absolute -right-2 top-1/2 w-4 h-4 rounded-full bg-[#F76F01] border-4 border-[#0B1E2E]" />
          </div>

          {/* AI */}
          <div className="relative">
            <div className="bg-[#F76F01] rounded-2xl p-4 shadow-[0_0_40px_rgba(247,111,1,0.25)]">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <Bot size={17} className="text-white" />
              </div>

              <div className="text-white text-xs font-semibold mt-3">
                AI Agent
              </div>

              <div className="text-white/70 text-[7px] mt-1">
                Qualifies lead
              </div>
            </div>
          </div>

          {/* CRM */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                <Workflow size={17} className="text-white" />
              </div>

              <div className="text-white text-xs font-semibold mt-3">
                CRM
              </div>

              <div className="text-white/40 text-[7px] mt-1">
                Updated instantly
              </div>
            </div>
          </div>
        </div>

        {/* Bottom automation */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <div className="bg-white rounded-full px-5 py-2.5 shadow-xl flex items-center gap-2">
            <Zap size={13} className="text-[#F76F01]" />

            <span className="text-[8px] font-semibold text-[#132F48]">
              Automated follow-up active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   CREATIVE SWITCHER
========================================================= */

const ServiceCreative = ({ type }: { type: string }) => {
  switch (type) {
    case "website":
      return <WebsiteCreative />;

    case "design":
      return <DesignCreative />;

    case "video":
      return <VideoCreative />;

    case "seo":
      return <SEOCreative />;

    case "social":
      return <SocialCreative />;

    case "automation":
      return <AutomationCreative />;

    default:
      return null;
  }
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20">

        {/* Header */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-20 items-end mb-14 sm:mb-16 lg:mb-20">

          <div>
            <div
              className="flex items-center gap-3 text-[11px] sm:text-[13px] font-medium tracking-[0.22em] uppercase mb-7"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#62728A",
              }}
            >
              <span
                className="inline-block h-px w-10"
                style={{
                  backgroundColor: "#F76F01",
                }}
              />

              What We Build
            </div>

            <h2
              className="text-[42px] sm:text-[58px] lg:text-[78px] leading-[1.02] tracking-[-0.025em]"
              style={{
                fontFamily: "'Fraunces', 'Times New Roman', serif",
                color: "#132F48",
                fontWeight: 300,
              }}
            >
              Digital experiences
              <br />

              <span
                style={{
                  color: "#F76F01",
                  fontStyle: "italic",
                  fontWeight: 550,
                }}
              >
                built to grow.
              </span>
            </h2>
          </div>

          <p
            className="max-w-[500px] text-[15px] sm:text-[17px] leading-[1.7]"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#62728A",
            }}
          >
            Strategy, creativity, technology and automation working
            together to turn your digital presence into a growth engine.
          </p>
        </div>

        {/* =====================================================
            DESKTOP INTERACTIVE AREA
        ===================================================== */}

        <div className="hidden lg:grid lg:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-20">

          {/* LEFT SERVICES */}
          <div className="border-t border-[#E4E7EB]">
            {services.map((service, index) => {
              const active = activeIndex === index;

              return (
                <button
                  key={service.name}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="relative w-full text-left border-b border-[#E4E7EB] py-7 xl:py-8 group"
                >
                  {/* Active line */}
                  <span
                    className="absolute left-0 top-0 bottom-0 w-[2px] transition-transform duration-500"
                    style={{
                      backgroundColor: "#F76F01",
                      transform: active
                        ? "scaleY(1)"
                        : "scaleY(0)",
                      transformOrigin: "top",
                    }}
                  />

                  <div className="flex gap-5 xl:gap-7 pl-4">

                    {/* Number */}
                    <span
                      className="text-xs tabular-nums pt-1 transition-colors duration-300"
                      style={{
                        fontFamily:
                          "'Plus Jakarta Sans', sans-serif",
                        color: active
                          ? "#F76F01"
                          : "#8A98A8",
                      }}
                    >
                      {service.number}
                    </span>

                    <div className="flex-1">

                      {/* Title */}
                      <h3
                        className="text-[27px] xl:text-[34px] leading-tight transition-all duration-300"
                        style={{
                          fontFamily:
                            "'Fraunces', 'Times New Roman', serif",
                          fontWeight: 400,
                          color: active
                            ? "#F76F01"
                            : "#132F48",
                          transform: active
                            ? "translateX(5px)"
                            : "translateX(0)",
                        }}
                      >
                        {service.name}
                      </h3>

                      {/* Active content */}
                      <div
                        className="grid transition-[grid-template-rows] duration-500"
                        style={{
                          gridTemplateRows: active
                            ? "1fr"
                            : "0fr",
                        }}
                      >
                        <div className="overflow-hidden">
                          <div className="pt-4 pr-5">

                            <p
                              className="text-sm leading-7 max-w-[500px]"
                              style={{
                                fontFamily:
                                  "'Plus Jakarta Sans', sans-serif",
                                color: "#62728A",
                              }}
                            >
                              {service.description}
                            </p>

                            {/* Offerings */}
                            <div className="flex flex-wrap gap-x-3 gap-y-2 mt-5">
                              {service.offerings.map(
                                (offering, i) => (
                                  <React.Fragment
                                    key={offering}
                                  >
                                    <span
                                      className="text-[11px] uppercase tracking-wide"
                                      style={{
                                        color: "#132F48",
                                      }}
                                    >
                                      {offering}
                                    </span>

                                    {i <
                                      service.offerings.length -
                                        1 && (
                                      <span
                                        className="text-[#F76F01]"
                                      >
                                        ·
                                      </span>
                                    )}
                                  </React.Fragment>
                                )
                              )}
                            </div>

                            <Link
                              to="/contact"
                              onClick={(e) =>
                                e.stopPropagation()
                              }
                              className="inline-flex items-center gap-2 mt-6 text-sm font-medium group/link"
                              style={{
                                color: "#132F48",
                              }}
                            >
                              Start a project

                              <ArrowUpRight
                                size={15}
                                className="text-[#F76F01] transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div
                      className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor: active
                          ? "#F76F01"
                          : "#132F48",
                        backgroundColor: active
                          ? "#F76F01"
                          : "transparent",
                        transform: active
                          ? "rotate(45deg)"
                          : "rotate(0)",
                      }}
                    >
                      <ArrowUpRight
                        size={16}
                        style={{
                          color: active
                            ? "#FFFFFF"
                            : "#132F48",
                        }}
                      />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT CREATIVE */}
          <div className="sticky top-24 h-[560px]">
            <div className="relative h-full rounded-[30px] overflow-hidden shadow-[0_25px_80px_rgba(19,47,72,0.12)]">

              {/* Creative */}
              <ServiceCreative type={activeService.type} />

              {/* Bottom label */}
              <div className="absolute left-5 bottom-5 z-20">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#F76F01] animate-pulse" />

                  <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-[#132F48]">
                    {activeService.name}
                  </span>
                </div>
              </div>

              {/* Number */}
              <div className="absolute right-6 bottom-4 z-20 text-[80px] font-serif leading-none text-white/10">
                {activeService.number}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}

        <div className="lg:hidden">

          {/* Creative */}
          <div className="relative rounded-[24px] overflow-hidden mb-10 shadow-[0_20px_60px_rgba(19,47,72,0.12)]">
            <div className="min-h-[390px]">
              <ServiceCreative type={activeService.type} />
            </div>
          </div>

          {/* Mobile service list */}
          <div className="border-t border-[#E4E7EB]">

            {services.map((service, index) => {
              const active = activeIndex === index;

              return (
                <div
                  key={service.name}
                  className="border-b border-[#E4E7EB]"
                >
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="w-full py-6 flex items-center gap-4 text-left"
                  >
                    <span
                      className="text-xs tabular-nums"
                      style={{
                        color: active
                          ? "#F76F01"
                          : "#8A98A8",
                      }}
                    >
                      {service.number}
                    </span>

                    <span
                      className="flex-1 text-[25px] sm:text-[30px]"
                      style={{
                        fontFamily:
                          "'Fraunces', 'Times New Roman', serif",
                        color: active
                          ? "#F76F01"
                          : "#132F48",
                      }}
                    >
                      {service.name}
                    </span>

                    <span
                      className="w-9 h-9 rounded-full border flex items-center justify-center"
                      style={{
                        borderColor: active
                          ? "#F76F01"
                          : "#132F48",
                        backgroundColor: active
                          ? "#F76F01"
                          : "transparent",
                      }}
                    >
                      <ArrowUpRight
                        size={15}
                        style={{
                          color: active
                            ? "#FFFFFF"
                            : "#132F48",
                        }}
                      />
                    </span>
                  </button>

                  {active && (
                    <div className="pb-7 pl-9 pr-3">

                      <p
                        className="text-sm leading-7"
                        style={{
                          color: "#62728A",
                        }}
                      >
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-x-3 gap-y-2 mt-5">
                        {service.offerings.map(
                          (offering, i) => (
                            <React.Fragment
                              key={offering}
                            >
                              <span
                                className="text-[10px] uppercase tracking-wide"
                                style={{
                                  color: "#132F48",
                                }}
                              >
                                {offering}
                              </span>

                              {i <
                                service.offerings.length -
                                  1 && (
                                <span className="text-[#F76F01]">
                                  ·
                                </span>
                              )}
                            </React.Fragment>
                          )
                        )}
                      </div>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-[#132F48]"
                      >
                        Start a project

                        <ArrowUpRight
                          size={15}
                          className="text-[#F76F01]"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 sm:mt-16 flex flex-wrap items-center gap-5">

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3"
          >
            <span className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium text-white bg-[#132F48] transition-transform duration-300 group-hover:-translate-x-1">
              Start a project
            </span>

            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#F76F01] text-white transition-transform duration-300 group-hover:scale-110">
              <ArrowUpRight size={17} />
            </span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#132F48] text-[#132F48] text-sm font-medium hover:bg-[#132F48] hover:text-white transition-all duration-300"
          >
            Explore all services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;