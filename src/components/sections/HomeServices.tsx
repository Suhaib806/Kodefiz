import React, { useState, useRef } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * SERVICES — "The Index"
 * -----------------------------------------------------------------------
 * Editorial, card-free services section. Signature element: an oversized
 * ghost numeral that materializes behind whichever row is active, paired
 * with a hairline "scanline" that tracks hover position down the left edge.
 *
 * Fonts: this component assumes "Fraunces" is available as a display serif.
 * Add to your index.html <head> if not already present:
 *   <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,550;1,9..144,450&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet">
 */

type Service = {
  name: string;
  description: string;
  offerings: string[];
};

const services: Service[] = [
  {
    name: "Creative Design",
    description:
      "Visual identity, campaign assets and motion design built to make your brand impossible to ignore.",
    offerings: [
      "Brand & Visual Identity",
      "Social & Ad Creatives",
      "Motion & Video Editing",
      "Presentation Design",
    ],
  },
  {
    name: "Content Writing",
    description:
      "Research-led copy and content strategy that turns expertise into authority.",
    offerings: [
      "SEO & Long-Form Content",
      "Website & Funnel Copy",
      "Scripts & Case Studies",
      "Email & Ad Copy",
    ],
  },
  {
    name: "Business Strategy",
    description:
      "Market analysis and growth planning that gives every decision a clear direction.",
    offerings: [
      "Market & Opportunity Analysis",
      "Go-to-Market Strategy",
      "Revenue Planning",
      "Personal Brand Strategy",
    ],
  },
  {
    name: "CPA, Tax & Bookkeeping",
    description:
      "Precise financial operations, so nothing about your books keeps you up at night.",
    offerings: [
      "Tax Planning & Filing",
      "Bookkeeping",
      "Audit & Assurance",
      "Compliance Reporting",
    ],
  },
  {
    name: "Digital Marketing",
    description:
      "Full-funnel demand generation across the channels your buyers already trust.",
    offerings: [
      "LinkedIn & Outbound",
      "Paid Social Advertising",
      "Email Marketing",
      "Lead Generation",
    ],
  },
  {
    name: "Virtual Assistants",
    description:
      "Dedicated support that runs your operations while you run your business.",
    offerings: [
      "Executive & Admin Support",
      "Client Communication",
      "Research & Reporting",
      "Calendar Management",
    ],
  },
  {
    name: "Web Development",
    description:
      "Websites and web apps engineered for speed, clarity and conversion.",
    offerings: [
      "Design & UX Strategy",
      "Custom Development",
      "Performance Optimization",
      "Ongoing Maintenance",
    ],
  },
  {
    name: "Automation",
    description:
      "Connected systems that remove the manual work between your tools.",
    offerings: [
      "CRM Configuration",
      "Workflow Automation",
      "Funnel Integration",
      "Data Management",
    ],
  },
  {
    name: "AI Solutions",
    description: "Applied AI that fits your workflow, not the other way around.",
    offerings: [
      "Process & Tool Audits",
      "Custom AI Workflows",
      "Chat & Voice Agents",
      "Ongoing Optimization",
    ],
  },
];

const DISPLAY_FONT = "'Fraunces', 'Times New Roman', serif";
const BODY_FONT = "'Plus Jakarta Sans', sans-serif";

const HomeServices = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="w-full px-5 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 lg:mb-24 max-w-3xl">
          <div
            className="flex items-center gap-3 text-[13px] font-medium tracking-[0.22em] uppercase mb-8"
            style={{ fontFamily: BODY_FONT, color: "#62728A" }}
          >
            <span className="inline-block h-px w-10" style={{ backgroundColor: "#F76F01" }} />
            Our Services — 09 Disciplines
          </div>

          <h2
            className="text-[42px] sm:text-[64px] lg:text-[84px] leading-[1.03] tracking-[-0.02em]"
            style={{ fontFamily: DISPLAY_FONT, color: "#132F48", fontWeight: 300 }}
          >
            Recruit{" "}
            <span style={{ fontStyle: "italic", fontWeight: 550, color: "#F76F01" }}>
              smarter.
            </span>
            <br />
            Scale{" "}
            <span style={{ fontStyle: "italic", fontWeight: 550, color: "#F76F01" }}>
              faster.
            </span>{" "}
            Without hiring.
          </h2>
        </div>

        {/* Index list */}
        <div ref={listRef} className="relative border-t" style={{ borderColor: "#E4E7EB" }}>
          {services.map((service, i) => {
            const isOpen = openIndex === i;
            const isHovered = hoverIndex === i;

            return (
              <div
                key={service.name}
                className="relative border-b"
                style={{ borderColor: "#E4E7EB" }}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                {/* Ghost numeral, bleeds off the right edge */}
                <span
                  aria-hidden
                  className="pointer-events-none select-none absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                  style={{
                    fontFamily: DISPLAY_FONT,
                    fontWeight: 300,
                    fontSize: "clamp(120px, 22vw, 300px)",
                    color: "#132F48",
                    opacity: isHovered || isOpen ? 0.05 : 0,
                    lineHeight: 1,
                    transform: `translateY(-50%) scale(${isHovered || isOpen ? 1 : 0.9})`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Scanline marker */}
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[2px] transition-all duration-500 ease-out"
                  style={{
                    backgroundColor: "#F76F01",
                    transform: isHovered || isOpen ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                  }}
                />

                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="relative z-10 w-full flex items-center gap-6 sm:gap-10 py-7 sm:py-9 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
                  style={{ ["--tw-ring-color" as any]: "#F76F01" }}
                >
                  <span
                    className="text-[13px] sm:text-[15px] tabular-nums w-8 shrink-0 transition-colors duration-300"
                    style={{
                      fontFamily: BODY_FONT,
                      color: isHovered || isOpen ? "#F76F01" : "#62728A",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="flex-1 text-[26px] sm:text-[38px] lg:text-[46px] leading-tight tracking-[-0.01em] transition-colors duration-300"
                    style={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 400,
                      color: isHovered || isOpen ? "#F76F01" : "#132F48",
                    }}
                  >
                    {service.name}
                  </span>

                  <span
                    className="shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "#F76F01" : "#132F48",
                      backgroundColor: isOpen ? "#F76F01" : "transparent",
                      transform: isOpen ? "rotate(135deg)" : "rotate(0deg)",
                    }}
                  >
                    <Plus
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
                      style={{ color: isOpen ? "#FFFFFF" : "#132F48" }}
                      strokeWidth={2}
                    />
                  </span>
                </button>

                {/* Expandable panel — CSS grid-rows trick for smooth height animation */}
                <div
                  className="relative z-10 grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pl-14 sm:pl-[104px] pr-4 sm:pr-16 pb-9 sm:pb-12 max-w-2xl">
                      <p
                        className="text-[16px] sm:text-[18px] leading-relaxed mb-6"
                        style={{ fontFamily: BODY_FONT, color: "#62728A" }}
                      >
                        {service.description}
                      </p>

                      <div
                        className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8 text-[14px] sm:text-[15px]"
                        style={{ fontFamily: BODY_FONT, color: "#132F48" }}
                      >
                        {service.offerings.map((item, idx) => (
                          <React.Fragment key={item}>
                            <span>{item}</span>
                            {idx < service.offerings.length - 1 && (
                              <span style={{ color: "#F76F01" }}>·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>

                      <Link
                        to="/contact"
                        className="group/cta inline-flex items-center gap-2 text-[15px] font-medium"
                        style={{ fontFamily: BODY_FONT, color: "#132F48" }}
                      >
                        <span className="relative">
                          Start the conversation
                          <span
                            className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-100 transition-transform duration-300 group-hover/cta:scale-x-0"
                            style={{ backgroundColor: "#132F48" }}
                          />
                        </span>
                        <ArrowUpRight
                          className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                          style={{ color: "#F76F01" }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center gap-5 mt-16">
          <Link to="/contact" className="group inline-flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300"
              style={{ backgroundColor: "#132F48", fontFamily: BODY_FONT }}
            >
              Get in touch
            </span>
            <span
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundColor: "#F76F01" }}
            >
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
            </span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border text-sm font-medium transition-colors duration-200"
            style={{ borderColor: "#132F48", color: "#132F48", fontFamily: BODY_FONT }}
          >
            All services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;