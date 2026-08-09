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
    <div className="absolute inset-0 bg-[#eef3f7] overflow-hidden">
      <div className="absolute left-[8%] right-[8%] top-[10%] bottom-[8%] bg-white rounded-[22px] shadow-2xl overflow-hidden border border-[#d9e1e8]">
        <div className="h-10 bg-[#f5f7f9] border-b border-[#e5e9ed] flex items-center px-4 gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#d6dce2]" />
          <div className="ml-5 h-5 flex-1 max-w-[180px] rounded-md bg-white border border-[#e3e7eb]" />
        </div>

        <div className="p-5 sm:p-7">
          <div className="flex justify-between items-center mb-8">
            <div className="font-bold text-[#132F48] text-sm">KODEFIZ</div>
            <div className="hidden sm:flex gap-5">
              <span className="w-8 h-1.5 rounded bg-[#dce3e9]" />
              <span className="w-8 h-1.5 rounded bg-[#dce3e9]" />
              <span className="w-8 h-1.5 rounded bg-[#dce3e9]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 items-center">
            <div>
              <div className="w-20 h-2 rounded bg-[#F76F01] mb-4" />
              <div className="h-4 w-full rounded bg-[#132F48] mb-2" />
              <div className="h-4 w-[80%] rounded bg-[#132F48] mb-5" />
              <div className="h-2 w-[90%] rounded bg-[#dce3e9] mb-2" />
              <div className="h-2 w-[70%] rounded bg-[#dce3e9] mb-5" />
              <div className="h-8 w-24 rounded-full bg-[#F76F01]" />
            </div>

            <div className="aspect-square rounded-2xl bg-[#132F48] flex items-center justify-center relative overflow-hidden">
              <div className="absolute w-32 h-32 rounded-full bg-[#F76F01]/80 -right-12 -top-12" />
              <div className="absolute w-20 h-20 rounded-full border border-white/20 bottom-5 left-5" />
              <Monitor className="text-white w-12 h-12 relative z-10" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-7">
            <div className="h-14 rounded-xl bg-[#f0f3f5]" />
            <div className="h-14 rounded-xl bg-[#f0f3f5]" />
            <div className="h-14 rounded-xl bg-[#f0f3f5]" />
          </div>
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
    <div className="absolute inset-0 bg-[#f5f2ed] overflow-hidden">
      <div className="absolute inset-[8%] bg-white rounded-[28px] shadow-xl overflow-hidden border border-[#e6e0d8]">
        <div className="absolute top-0 left-0 w-[42%] h-full bg-[#132F48] p-6">
          <div className="text-white text-xs tracking-[0.25em]">BRAND SYSTEM</div>
          <div className="absolute bottom-8 left-6">
            <div className="text-5xl sm:text-6xl font-light text-white">Aa</div>
            <div className="mt-4 w-16 h-1 bg-[#F76F01]" />
            <p className="text-white/50 text-xs mt-4">
              Identity
              <br />
              Direction
            </p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[58%] h-full p-6">
          <div className="flex justify-end">
            <Palette className="text-[#F76F01]" size={20} />
          </div>

          <div className="mt-12">
            <div className="text-[9px] uppercase tracking-widest text-[#8b969f]">Typography</div>
            <div className="text-3xl sm:text-4xl font-bold text-[#132F48] mt-2">
              Kode<span className="text-[#F76F01]">fiz</span>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-[9px] uppercase tracking-widest text-[#8b969f] mb-3">Colors</div>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#132F48]" />
              <div className="w-10 h-10 rounded-lg bg-[#F76F01]" />
              <div className="w-10 h-10 rounded-lg bg-[#eef1f3]" />
            </div>
          </div>

          <div className="mt-10 border-t border-[#edf0f2] pt-6">
            <div className="text-[9px] uppercase tracking-widest text-[#8b969f]">UI Components</div>
            <div className="flex gap-2 mt-3">
              <div className="w-14 h-7 rounded-full bg-[#132F48]" />
              <div className="w-14 h-7 rounded-full border border-[#132F48]" />
            </div>
          </div>
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
    <div className="absolute inset-0 bg-[#101d2b] overflow-hidden">
      <div className="absolute inset-[8%] rounded-[28px] overflow-hidden bg-[#172c40] border border-white/10">
        <div className="absolute top-5 left-5 right-5 h-[58%] rounded-2xl bg-gradient-to-br from-[#F76F01] via-[#d94f00] to-[#132F48] overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-40 h-40 rounded-full bg-white -right-10 -top-20" />
            <div className="absolute w-56 h-56 rounded-full border-[30px] border-white -left-20 -bottom-28" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play size={25} fill="#132F48" className="text-[#132F48] ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="text-white text-lg sm:text-xl font-bold">STOP THE SCROLL.</div>
            <div className="w-24 h-1 bg-white mt-2" />
          </div>
        </div>

        <div className="absolute bottom-6 left-5 right-5">
          <div className="flex justify-between text-[8px] text-white/40 mb-2">
            <span>00:12</span>
            <span>00:32</span>
          </div>
          <div className="h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[65%] bg-[#F76F01]" />
          </div>
          <div className="grid grid-cols-5 gap-1 mt-4">
            <div className="h-8 bg-[#F76F01]/30 rounded" />
            <div className="h-8 bg-white/10 rounded" />
            <div className="h-8 bg-[#F76F01]/50 rounded" />
            <div className="h-8 bg-white/10 rounded" />
            <div className="h-8 bg-white/10 rounded" />
          </div>
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
    <div className="absolute inset-0 bg-[#f1f5f7] overflow-hidden">
      <div className="absolute inset-[8%] bg-white rounded-[28px] shadow-xl border border-[#e0e6eb] p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#8a96a0]">Search performance</div>
            <div className="text-2xl sm:text-3xl font-bold text-[#132F48] mt-2">+184%</div>
            <div className="text-xs text-[#F76F01] mt-1">Organic visibility</div>
          </div>
          <div className="w-11 h-11 rounded-xl bg-[#132F48] flex items-center justify-center">
            <Search className="text-white" size={20} />
          </div>
        </div>

        <div className="relative h-40 mt-10 border-b border-l border-[#e6eaed]">
          <svg viewBox="0 0 400 150" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <path
              d="M0 130 C45 125 55 110 90 115 C125 120 130 85 165 90 C205 96 205 62 245 67 C285 72 290 35 325 42 C355 48 370 18 400 12"
              fill="none"
              stroke="#F76F01"
              strokeWidth="4"
            />
          </svg>
          <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-[#F76F01] ring-4 ring-[#F76F01]/20" />
        </div>

        <div className="grid grid-cols-3 gap-3 mt-7">
          <div className="p-3 rounded-xl bg-[#f5f7f8]">
            <div className="text-[9px] text-[#8b969f]">Clicks</div>
            <div className="text-lg font-bold text-[#132F48]">24.8K</div>
          </div>
          <div className="p-3 rounded-xl bg-[#f5f7f8]">
            <div className="text-[9px] text-[#8b969f]">Leads</div>
            <div className="text-lg font-bold text-[#132F48]">1.9K</div>
          </div>
          <div className="p-3 rounded-xl bg-[#f5f7f8]">
            <div className="text-[9px] text-[#8b969f]">ROAS</div>
            <div className="text-lg font-bold text-[#132F48]">4.8x</div>
          </div>
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
    <div className="absolute inset-0 bg-[#f4f1ee] overflow-hidden">
      <div className="absolute inset-[8%] rounded-[28px] bg-white shadow-xl border border-[#e4dfda] p-5 sm:p-7">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-[#132F48] flex items-center justify-center">
              <Instagram size={17} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#132F48]">brand.studio</div>
              <div className="text-[8px] text-[#9ba3aa]">Social content system</div>
            </div>
          </div>
          <div className="text-[#F76F01]">
            <Sparkles size={18} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-7">
          <div className="aspect-square rounded-xl bg-[#132F48] relative overflow-hidden">
            <div className="absolute w-20 h-20 rounded-full bg-[#F76F01] -right-6 -top-6" />
            <div className="absolute bottom-3 left-3 text-white text-[9px] font-bold">BRAND</div>
          </div>
          <div className="aspect-square rounded-xl bg-[#F76F01] relative overflow-hidden">
            <div className="absolute inset-5 border border-white/40 rounded-full" />
            <div className="absolute bottom-3 left-3 text-white text-[9px] font-bold">STORY</div>
          </div>
          <div className="aspect-square rounded-xl bg-[#dfe5e8] relative overflow-hidden">
            <div className="absolute top-5 left-5 w-10 h-2 bg-[#132F48] rounded" />
            <div className="absolute top-9 left-5 w-16 h-2 bg-[#132F48]/30 rounded" />
          </div>
          <div className="aspect-square rounded-xl bg-[#e9ecee]" />
          <div className="aspect-square rounded-xl bg-[#132F48]" />
          <div className="aspect-square rounded-xl bg-[#F76F01]" />
        </div>

        <div className="flex items-center justify-between mt-6">
          <div>
            <div className="text-xl font-bold text-[#132F48]">48.2K</div>
            <div className="text-[9px] text-[#8d979f]">Monthly reach</div>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#F76F01]">
            <ArrowUpRight size={14} />
            +42%
          </div>
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
    <div className="absolute inset-0 bg-[#101d2b] overflow-hidden">
      <div className="absolute inset-[8%] rounded-[28px] bg-[#142b40] border border-white/10 p-6 sm:p-8">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-[9px] tracking-[0.25em] uppercase text-white/40">Automation</div>
            <div className="text-xl font-semibold text-white mt-2">Lead workflow</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#F76F01] flex items-center justify-center">
            <Bot size={19} className="text-white" />
          </div>
        </div>

        <div className="relative mt-10 h-60">
          <div className="absolute left-[23%] top-[45px] w-[25%] h-px bg-[#F76F01]" />
          <div className="absolute left-[48%] top-[45px] w-[25%] h-px bg-[#F76F01]" />
          <div className="absolute left-[48%] top-[45px] w-px h-[80px] bg-[#F76F01]" />
          <div className="absolute left-[48%] top-[125px] w-[25%] h-px bg-[#F76F01]" />

          <div className="absolute left-0 top-6 w-[23%]">
            <div className="aspect-square max-w-[55px] mx-auto rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <MousePointer2 size={18} className="text-white" />
            </div>
            <div className="text-[8px] text-white/50 text-center mt-2">New Lead</div>
          </div>

          <div className="absolute left-[37%] top-6 w-[23%]">
            <div className="aspect-square max-w-[55px] mx-auto rounded-xl bg-[#F76F01] flex items-center justify-center">
              <Workflow size={18} className="text-white" />
            </div>
            <div className="text-[8px] text-white/50 text-center mt-2">AI Process</div>
          </div>

          <div className="absolute right-0 top-6 w-[23%]">
            <div className="aspect-square max-w-[55px] mx-auto rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <Zap size={18} className="text-[#F76F01]" />
            </div>
            <div className="text-[8px] text-white/50 text-center mt-2">Follow Up</div>
          </div>

          <div className="absolute left-[37%] top-[125px] w-[23%]">
            <div className="aspect-square max-w-[55px] mx-auto rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <CheckCircle2 size={18} className="text-[#F76F01]" />
            </div>
            <div className="text-[8px] text-white/50 text-center mt-2">Qualified</div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/5 border border-white/10 p-3 flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-[#F76F01]/20 flex items-center justify-center">
            <Sparkles size={13} className="text-[#F76F01]" />
          </div>
          <div>
            <div className="text-[9px] text-white/80">AI workflow active</div>
            <div className="text-[8px] text-white/40">24 tasks automated today</div>
          </div>
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
                          <div className="flex max-w-4xl flex-col gap-6 lg:flex-row-reverse lg:gap-10">
                            <div className="w-full shrink-0 lg:w-[320px]">
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