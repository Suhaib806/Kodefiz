import React, { useEffect, useRef, useState } from "react";

// NOTE ON IMAGES — same import mechanism as before, just recommend
// swapping the actual source files for photography that supports the
// new copy rather than generic office shots:
//   vettingImg      → a live technical interview / screen-share session
//   pipelineImg     → a candidate pipeline / kanban board mid-motion
//   distributedImg  → a video-call grid of a team across time zones
//   partnershipImg  → an account lead + client reviewing a shared roadmap
import vettingImg from "@/assets/softech.png";
import pipelineImg from "@/assets/office.png";
import distributedImg from "@/assets/office2.png";
import partnershipImg from "@/assets/office3.png";

const reasons = [
  {
    n: "01",
    title: "Pre-Vetted, Not Just Available",
    desc: "Every professional in our network passes skill testing, live technical review, and communication screening before you ever see a profile.",
    img: vettingImg,
  },
  {
    n: "02",
    title: "Hired in Days, Not Months",
    desc: "Skip the six-week recruitment cycle. Receive shortlisted, ready-to-start candidates within days and have someone working on your business by next week.",
    img: pipelineImg,
  },
  {
    n: "03",
    title: "Scale Without the Risk",
    desc: "Add a developer this month, a full team next quarter, or scale back with no severance, no notice period, and no recruitment fees to redo it all.",
    img: distributedImg,
  },
  {
    n: "04",
    title: "We Stay After the Handshake",
    desc: "A dedicated account lead checks in long after onboarding, so performance doesn't quietly slip once the contract is signed.",
    img: partnershipImg,
  },
];

const CARD_OFFSET = 80; // px each card is staggered below the previous
const STAT_TARGET = 98; // the hero stat counts up to this value

const WhyChooseKodefiz = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Card stagger — unchanged behavior from the original: re-triggers
  // every time the row enters/leaves the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Hero stat count-up — runs once, respects reduced-motion.
  const statRef = useRef<HTMLParagraphElement>(null);
  const [statValue, setStatValue] = useState(0);
  const hasCountedRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasCountedRef.current) return;
        hasCountedRef.current = true;

        if (prefersReducedMotion) {
          setStatValue(STAT_TARGET);
          return;
        }

        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // ease-out cubic — quick start, gentle settle
          const eased = 1 - Math.pow(1 - progress, 3);
          setStatValue(Math.round(eased * STAT_TARGET));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white font-sans py-14 lg:py-20 px-5 md:px-12 lg:px-20">
      {/* Eyebrow — matches the label pattern used elsewhere on the site */}
      <div className="flex items-center gap-3 text-[13px] font-medium tracking-[0.22em] uppercase text-gray-400 mb-8">
        <span className="inline-block h-px w-10 bg-brand" />
        Why Choose Kodefiz
      </div>

      {/* ── Top row ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200">
        <div className="sm:px-10 lg:px-16 md:border-r border-gray-200 flex flex-col justify-center">
          <p
            ref={statRef}
            className="text-[80px] sm:text-[100px] lg:text-[120px] font-extrabold text-brand leading-none tracking-tight tabular-nums"
          >
            {statValue}%
          </p>
          <p className="mt-4 text-[13px] text-gray-400 leading-relaxed max-w-[240px]">
            Client Retention — once teams work with us, they rarely leave.
          </p>

          {/* Small trust cue filling existing whitespace, no layout change */}
          <div className="mt-6 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full border-2 border-white bg-gray-200"
                  style={{ backgroundColor: i === 1 ? "#F76F01" : "#E4E7EB" }}
                />
              ))}
            </div>
            <span className="text-[12px] text-gray-400">
              Trusted by 60+ growing teams
            </span>
          </div>
        </div>
        <div className="sm:px-10 lg:px-16 py-14 flex items-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-extrabold text-gray-900 leading-[1.15] tracking-tight">
            We don't fill positions. We build remote teams that perform like
            your best in-house hires — and scale the moment you need them to.
          </h2>
        </div>
      </div>

      {/* ── Cards row ── */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 border-b border-gray-200 overflow-hidden"
      >
        {reasons.map((s, i) => {
          const initialOffset = i * CARD_OFFSET;
          const delay = i * 100;

          return (
            <div
              key={s.n}
              className="flex flex-col sm:px-6 lg:px-8 py-4 group"
              style={{
                transform: visible
                  ? "translateY(0)"
                  : `translateY(${initialOffset}px)`,
                opacity: visible ? 1 : i === 0 ? 1 : 0.3,
                transition: `transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
                             opacity 0.7s ease ${delay}ms`,
              }}
            >
              <span className="text-[11px] font-bold tracking-[.15em] text-brand mb-5">
                {s.n}
              </span>
              <h3 className="text-[20px] sm:text-[22px] font-extrabold text-gray-900 leading-snug mb-5">
                {s.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed flex-1 mb-8">
                {s.desc}
              </p>
              <div className="relative rounded-xl mt-auto overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-[300px] object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                {/* Hover overlay — reads as an invitation, not decoration */}
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, rgba(19,47,72,0.55) 100%)",
                  }}
                >
                  <span className="text-white text-[13px] font-medium flex items-center gap-1.5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    Learn how
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseKodefiz;