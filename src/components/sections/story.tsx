import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Fingerprint, Compass } from "lucide-react";

/**
 * ABOUT — Story / Approach / Values
 * -----------------------------------------------------------------------
 * Three visually distinct sub-sections that still read as one continuous
 * piece (consistent eyebrow treatment, consistent type scale, generous
 * matching vertical rhythm) rather than three unrelated blocks bolted
 * together:
 *
 * 1. Our Story — white. Two-column: heading left, copy + a small abstract
 *    "system" graphic (converging dots, not stock imagery) right.
 * 2. Our Approach — dark navy, for contrast. Three large horizontal rows
 *    instead of cards; hover is pure CSS (group-hover), no JS/scroll
 *    logic, so it can't be affected by the sticky/pin issues seen
 *    elsewhere in this project.
 * 3. Our Values — back to white. Three blocks separated by a thin top
 *    rule (not a filled card) — number, small icon, title, description,
 *    orange micro-accent underline.
 *
 * Colors used as directly specified rather than mapped to a Tailwind
 * theme, since exact hex/rgba values were given: #132F48, #F76F01,
 * #FFFFFF, #62728A (muted text), rgba(19,47,72,0.12) (thin borders).
 */

const approachRows = [
  {
    n: "01",
    title: "We start with the outcome, not the task.",
    desc: "Before we design a single page or write a single ad, we ask what result it needs to produce.",
  },
  {
    n: "02",
    title: "We build for compounding, not just completion.",
    desc: "Every deliverable is designed to keep generating value long after we deliver it.",
  },
  {
    n: "03",
    title: "We report in plain language.",
    desc: "You'll always know what we did, what changed, and what's next — no jargon, no guesswork.",
  },
];

const values = [
  {
    n: "01",
    icon: ShieldCheck,
    title: "Accountability over excuses",
    desc: "Rain or shine, the work gets done and reported on.",
  },
  {
    n: "02",
    icon: Fingerprint,
    title: "Substance over templates",
    desc: "No copy-paste, stock-icon solutions. Every build is intentional.",
  },
  {
    n: "03",
    icon: Compass,
    title: "Long-term thinking over quick wins",
    desc: "We'd rather earn a client for years than a project for a month.",
  },
];

const MUTED = "#62728A";
const HAIRLINE = "rgba(19,47,72,0.12)";

export default function AboutStory() {
  return (
    <>
      <StorySection />
      <ApproachSection />
      <ValuesSection />
    </>
  );
}

/* ============================================================
   1. OUR STORY — white
============================================================ */

const StorySection = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#F76F01]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 lg:grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-start">
        <div
          className="mb-10 lg:mb-0 transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#F76F01]" />
            <span className="uppercase tracking-[0.3em] text-xs" style={{ color: MUTED }}>
              Our Story
            </span>
          </div>
          <h2 className="text-[36px] lg:text-[52px] font-bold leading-[1.05] text-[#132F48]">
            Why We Started
            <br />
            <span className="text-[#F76F01]">This.</span>
          </h2>
        </div>

        <div
          className="transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transitionDelay: "120ms",
          }}
        >
          <p className="text-lg leading-9 max-w-2xl" style={{ color: MUTED }}>
            Too many growing businesses get stuck stitching together
            freelancers — one for the website, another for social, another
            for ads — with no one accountable for whether any of it actually
            works together. We built this agency to solve that: one team,
            one system, one point of accountability for your entire digital
            presence.
          </p>

          {/* Abstract "system" graphic — converging nodes, not stock art */}
          <div className="mt-12 flex items-center gap-2.5">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "rgba(19,47,72,0.25)" }} />
                {i < 3 && <span className="h-px w-6" style={{ backgroundColor: "rgba(19,47,72,0.15)" }} />}
              </span>
            ))}
            <span className="h-px w-6" style={{ backgroundColor: "rgba(247,111,1,0.4)" }} />
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: "#F76F01", boxShadow: "0 0 16px rgba(247,111,1,0.5)" }}
            />
          </div>
          <p className="mt-4 text-[13px] tracking-wide" style={{ color: MUTED }}>
            One team. One system. One point of accountability.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   2. OUR APPROACH — dark navy, horizontal rows
============================================================ */

const ApproachSection = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "#132F48" }}>
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#F76F01]/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className="mb-16 lg:mb-20 max-w-xl transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#F76F01]" />
            <span className="uppercase tracking-[0.3em] text-xs text-white/50">Our Approach</span>
          </div>
          <h2 className="text-[36px] lg:text-[52px] font-bold leading-[1.05] text-white">How We Work</h2>
        </div>

        <div>
          {approachRows.map((row, i) => (
            <div
              key={row.n}
              className="group grid grid-cols-1 sm:grid-cols-[90px_1fr] lg:grid-cols-[140px_1fr_1fr] gap-4 sm:gap-8 lg:gap-10 items-start py-9 lg:py-10 border-b border-white/10 transition-all duration-700 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${180 + i * 100}ms`,
              }}
            >
              <span
                className="text-[48px] sm:text-[56px] lg:text-[68px] font-bold leading-none tabular-nums text-white/15 transition-colors duration-300 group-hover:text-[#F76F01]"
              >
                {row.n}
              </span>

              <div>
                <span
                  className="block h-px w-10 mb-4 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: "#F76F01" }}
                />
                <h3 className="text-2xl lg:text-[28px] font-bold text-white leading-snug">
                  {row.title}
                </h3>
              </div>

              <p className="text-base lg:text-lg leading-8 text-white/60 lg:pt-1">{row.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   3. OUR VALUES — white
============================================================ */

const ValuesSection = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className="mb-16 lg:mb-20 max-w-xl transition-all duration-700 ease-out"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#F76F01]" />
            <span className="uppercase tracking-[0.3em] text-xs" style={{ color: MUTED }}>
              Our Values
            </span>
          </div>
          <h2 className="text-[36px] lg:text-[52px] font-bold leading-[1.05] text-[#132F48]">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.n}
                className="pt-8 border-t transition-all duration-700 ease-out"
                style={{
                  borderColor: HAIRLINE,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${180 + i * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-7">
                  <span className="text-[14px] font-semibold tracking-widest" style={{ color: MUTED }}>
                    {v.n}
                  </span>
                  <Icon className="h-5 w-5" style={{ color: "rgba(19,47,72,0.35)" }} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-[#132F48] mb-3 leading-snug">{v.title}</h3>
                <p className="text-base leading-7" style={{ color: MUTED }}>
                  {v.desc}
                </p>
                <div className="mt-6 h-[3px] w-8 rounded-full" style={{ backgroundColor: "#F76F01" }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}