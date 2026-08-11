import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Plus,
  Monitor,
  Palette,
  Play,
  Search,
  BarChart3,
  Instagram,
  Zap,
  MousePointer2,
  Globe,
  Sparkles,
  Bot,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { serviceList } from "@/data/serviceDetails";

/* =========================================================
   CREATIVE 01 — WEBSITES
========================================================= */

const WebsiteCreative = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white rounded-[22px] shadow-2xl overflow-hidden border border-[#d9e1e8]">
        <div className="h-10 bg-[#f5f7f9] border-b border-[#e5e9ed] flex items-center px-4 gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <div className="ml-5 h-5 flex-1 max-w-[180px] rounded-md bg-white border border-[#e3e7eb]" />
        </div>

        <div className="flex flex-col h-[calc(100%-40px)] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/Website.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute bottom-7 left-7 bg-[#132F48] text-white rounded-full px-4 py-2 text-xs flex items-center gap-2 shadow-xl">
        <Globe size={13} />
        Digital Experience
      </div>
    </div>
  );
};

/* =========================================================
   CREATIVE 02 — BRAND / UI UX
========================================================= */

const DesignCreative = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white rounded-[22px] shadow-2xl overflow-hidden border border-[#d9e1e8]">
        <div className="h-10 bg-[#f5f7f9] border-b border-[#e5e9ed] flex items-center px-4 gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <div className="ml-5 h-5 flex-1 max-w-[180px] rounded-md bg-white border border-[#e3e7eb]" />
        </div>

        <div className="flex flex-col h-[calc(100%-40px)] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/Ux.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute bottom-7 right-7 bg-[#F76F01] text-white rounded-full px-4 py-2 text-xs flex items-center gap-2 shadow-xl">
        <Sparkles size={13} />
        Brand & UI/UX
      </div>
    </div>
  );
};

/* =========================================================
   CREATIVE 03 — VIDEO / UGC
========================================================= */

const VideoCreative = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white rounded-[22px] shadow-2xl overflow-hidden border border-[#d9e1e8]">
        <div className="h-10 bg-[#f5f7f9] border-b border-[#e5e9ed] flex items-center px-4 gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <div className="ml-5 h-5 flex-1 max-w-[180px] rounded-md bg-white border border-[#e3e7eb]" />
        </div>

        <div className="flex flex-col h-[calc(100%-40px)] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/ugc.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute top-7 right-7 bg-white text-[#132F48] rounded-full px-4 py-2 text-xs flex items-center gap-2 shadow-xl">
        <Play size={12} fill="currentColor" />
        AI Video + UGC
      </div>
    </div>
  );
};

/* =========================================================
   CREATIVE 04 — SEO / ADS
========================================================= */

const SeoCreative = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white rounded-[22px] shadow-2xl overflow-hidden border border-[#d9e1e8]">
        <div className="h-10 bg-[#f5f7f9] border-b border-[#e5e9ed] flex items-center px-4 gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <div className="ml-5 h-5 flex-1 max-w-[180px] rounded-md bg-white border border-[#e3e7eb]" />
        </div>

        <div className="flex flex-col h-[calc(100%-40px)] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/seo_google.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute bottom-7 right-7 bg-[#132F48] text-white rounded-full px-4 py-2 text-xs flex items-center gap-2 shadow-xl">
        <BarChart3 size={13} />
        Growth Engine
      </div>
    </div>
  );
};

/* =========================================================
   CREATIVE 05 — SOCIAL
========================================================= */

const SocialCreative = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white rounded-[22px] shadow-2xl overflow-hidden border border-[#d9e1e8]">
        <div className="h-10 bg-[#f5f7f9] border-b border-[#e5e9ed] flex items-center px-4 gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <div className="ml-5 h-5 flex-1 max-w-[180px] rounded-md bg-white border border-[#e3e7eb]" />
        </div>

        <div className="flex flex-col h-[calc(100%-40px)] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/social.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute bottom-7 left-7 bg-[#F76F01] text-white rounded-full px-4 py-2 text-xs flex items-center gap-2 shadow-xl">
        <Instagram size={13} />
        Social Growth
      </div>
    </div>
  );
};

/* =========================================================
   CREATIVE 06 — AI AUTOMATION
========================================================= */

const AutomationCreative = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-white rounded-[22px] shadow-2xl overflow-hidden border border-[#d9e1e8]">
        <div className="h-10 bg-[#f5f7f9] border-b border-[#e5e9ed] flex items-center px-4 gap-2 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <div className="ml-5 h-5 flex-1 max-w-[180px] rounded-md bg-white border border-[#e3e7eb]" />
        </div>

        <div className="flex flex-col h-[calc(100%-40px)] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/ai_automation.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute top-7 right-7 bg-white text-[#132F48] rounded-full px-4 py-2 text-xs flex items-center gap-2 shadow-xl">
        <Zap size={12} />
        AI Automation
      </div>
    </div>
  );
};

/* =========================================================
   CREATIVE LOOKUP — indexable, used by both the desktop
   switcher panel and the per-row mobile inline render.
========================================================= */

const creativeComponents = [
  WebsiteCreative,
  DesignCreative,
  VideoCreative,
  SeoCreative,
  SocialCreative,
  AutomationCreative,
];

/* =========================================================
   DESKTOP CREATIVE SWITCHER (single panel, crossfades)
========================================================= */

const ServiceCreative = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className="absolute inset-0">
      {creativeComponents.map((Creative, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-[1.04] pointer-events-none"
          }`}
        >
          <Creative />
        </div>
      ))}
    </div>
  );
};

/* =========================================================
   SERVICES SECTION
========================================================= */

const HomeServices = ({ showHeader = true }: { showHeader?: boolean }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const isServicesPage = location.pathname === "/services";

  return (
    <section className="overflow-hidden bg-white py-20 font-atraen sm:py-24 lg:py-32">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20">
        {showHeader && (
          <div className="mb-16 max-w-5xl lg:mb-24">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F76F01]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#62728A]">What We Build</span>
            </div>

            <h2 className="text-[42px] font-light leading-[0.98] tracking-[-0.035em] text-[#132F48] sm:text-[56px] lg:text-[78px]">
              Everything your
              <br />
              <span className="font-medium italic text-[#F76F01]">digital growth</span> needs.
            </h2>

            <p className="mt-7 max-w-2xl text-[16px] leading-8 text-[#62728A] sm:text-[18px]">
              From high-converting websites and memorable brands to AI-powered marketing systems, we bring
              strategy, creativity, and technology together under one team.
            </p>
          </div>
        )}

        {/* SERVICE LIST — full width; each row carries its own creative
            inline (right side on desktop, above the text on mobile),
            visible only while that row is expanded. No shared/pinned
            panel anymore. */}
        <div className="border-t border-[#E4E7EB]">
          {serviceList.map((service, index) => {
            const isActive = activeIndex === index;
            const Creative = creativeComponents[index];

            return (
              <div
                key={service.slug}
                className="border-b border-[#E4E7EB]"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left py-8 sm:py-10"
                >
                  <div className="flex items-start gap-4 sm:gap-7">
                    <span
                      className={`shrink-0 pt-2 text-sm transition-colors duration-300 ${
                        isActive ? "text-[#F76F01]" : "text-[#9AA5B4]"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`text-[27px] leading-tight tracking-[-0.025em] font-light transition-colors duration-300 sm:text-[35px] lg:text-[42px] ${
                            isActive ? "text-[#F76F01]" : "text-[#132F48]"
                          }`}
                        >
                          {service.title}
                        </h3>

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-12 sm:w-12 ${
                            isActive ? "rotate-45 border-[#F76F01] bg-[#F76F01]" : "border-[#132F48]"
                          }`}
                        >
                          <Plus className={`h-4 w-4 ${isActive ? "text-white" : "text-[#132F48]"}`} />
                        </span>
                      </div>

                      <div
                        className={`grid transition-all duration-500 ${
                          isActive ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="flex w-full flex-col gap-6 lg:flex-row-reverse lg:gap-10">
                            <div className="w-full shrink-0 lg:w-[460px]">
                              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                                <Creative />
                              </div>
                            </div>

                            <div className="flex-1">
                              <p className="text-[15px] leading-7 text-[#62728A] sm:text-[17px]">
                                {service.description}
                              </p>

                              <ul className="mt-6 space-y-3">
                                {service.detailItems.map((item) => (
                                  <li key={item} className="flex items-start gap-3 text-[14px] text-[#132F48] sm:text-[15px]">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#132F48]" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>

                              <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
                                {service.offerings.map((item, itemIndex) => (
                                  <React.Fragment key={item}>
                                    <span className="text-sm text-[#132F48]">{item}</span>
                                    {itemIndex < service.offerings.length - 1 && (
                                      <span className="text-[#F76F01]">·</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>

                              <Link
                                to={`/services/${service.slug}`}
                                onClick={(e) => e.stopPropagation()}
                                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#132F48]"
                              >
                                View service details
                                <ArrowUpRight className="h-4 w-4 text-[#F76F01] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {!isServicesPage && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full border border-[#132F48] px-6 py-3 text-sm font-medium text-[#132F48] transition-all duration-300 hover:border-[#F76F01] hover:bg-[#F76F01] hover:text-white"
            >
              See All Services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeServices;  