import React, { useEffect, useRef, useState } from "react";
import { Globe2, PenLine, Megaphone, Workflow, TrendingUp } from "lucide-react";

/**
 * SOLUTION SECTION — "One Team. One System. Every Piece Working Together."
 * -----------------------------------------------------------------------
 * Dark theme, directly resolving the Problem section that precedes it:
 * the four disconnected/muted pieces shown there (web, content, ads,
 * automation) reappear here as four clean, vibrant nodes that visually
 * converge into a single hub, which then feeds one output — revenue.
 * That convergence diagram IS the argument in visual form: separate
 * vendors → one connected engine → one number that matters.
 *
 * No fabricated stat on the revenue badge (e.g. a specific % lift) since
 * none was given — it's a clean upward-trend badge, not a claimed number.
 * The flowing dashed lines use a CSS stroke-dashoffset animation for a
 * subtle "energy moving through the system" cue.
 *
 * Background is plain (just one soft glow, no grid/box pattern) per
 * request. The hub is a pill carrying the full "KODEFIZ" wordmark
 * rather than a "K" monogram.
 */

const inputs = [
  { label: "Web Design", icon: Globe2 },
  { label: "Content", icon: PenLine },
  { label: "Ads", icon: Megaphone },
  { label: "Automation", icon: Workflow },
];

const FLAME = "#F76F01";

const SolutionSection = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative bg-navy-950 py-24 lg:py-32 px-5 md:px-12 lg:px-20 overflow-hidden">
      <style>{`
        @keyframes flowDash {
          to { stroke-dashoffset: -24; }
        }
        @keyframes hubPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(247,111,1,0.35); }
          50% { box-shadow: 0 0 0 14px rgba(247,111,1,0); }
        }
      `}</style>

      {/* Ambient — plain background, just a soft glow, no grid/box pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-10%] right-[-5%] h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{ background: "rgba(247,111,1,0.14)" }}
      />

      <div className="relative lg:grid lg:grid-cols-[1fr_560px] lg:gap-16 items-center">
        {/* LEFT — copy */}
        <div className="max-w-2xl">
          <div
            className="flex items-center gap-3 mb-8 transition-all duration-700 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            <span className="inline-flex h-[10px] w-[10px] rounded-full bg-brand" />
            <span className="text-xs tracking-[0.22em] font-medium uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
              The Solution
            </span>
          </div>

          <h2
            className="font-display font-bold text-white tracking-tight leading-[1.1] text-[32px] sm:text-[44px] lg:text-[50px] mb-8 transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "80ms",
            }}
          >
            One Team. One System.
            <br />
            Every Piece Working Together.
          </h2>

          <p
            className="text-[17px] sm:text-[18px] leading-relaxed max-w-lg transition-all duration-700 ease-out"
            style={{
              color: "rgba(255,255,255,0.6)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "200ms",
            }}
          >
            Instead of hiring separately for web design, content, ads, and
            automation, you get a single team that builds all of it to work
            as one connected engine so nothing falls through the cracks
            between vendors, and every deliverable is built to move one
            number: your revenue.
          </p>
        </div>

        {/* RIGHT — convergence diagram */}
        <div className="relative mt-16 lg:mt-0 h-[420px]">
          <svg
            viewBox="0 0 500 420"
            className="absolute inset-0 h-full w-full"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.4s" }}
          >
            {inputs.map((_, i) => {
              const y = 55 + i * 105;
              return (
                <path
                  key={i}
                  d={`M 110 ${y} C 220 ${y}, 220 210, 278 210`}
                  fill="none"
                  stroke="rgba(247,111,1,0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                  style={{ animation: "flowDash 1.4s linear infinite" }}
                />
              );
            })}
            {/* hub → revenue */}
            <path
              d="M 405 210 L 445 210"
              fill="none"
              stroke="rgba(247,111,1,0.5)"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              style={{ animation: "flowDash 1.2s linear infinite" }}
            />
          </svg>

          {/* Input nodes */}
          {inputs.map((input, i) => {
            const Icon = input.icon;
            const topPct = ((55 + i * 105) / 420) * 100;
            return (
              <div
                key={input.label}
                className="absolute flex items-center gap-3 transition-all duration-700 ease-out"
                style={{
                  top: `${topPct}%`,
                  left: "0%",
                  transform: `translateY(-50%) ${visible ? "translateX(0)" : "translateX(-16px)"}`,
                  opacity: visible ? 1 : 0,
                  transitionDelay: `${260 + i * 90}ms`,
                }}
              >
                <div
                  className="h-14 w-14 rounded-2xl flex items-center justify-center border"
                  style={{
                    background: "linear-gradient(155deg, #1C3B5A 0%, #0B2038 100%)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <Icon className="h-5 w-5" style={{ color: FLAME }} strokeWidth={2} />
                </div>
                <span className="text-[13px] font-medium text-white/80 whitespace-nowrap">
                  {input.label}
                </span>
              </div>
            );
          })}

          {/* Hub node — pill, sized for the full wordmark rather than an initial */}
          <div
            className="absolute flex items-center justify-center rounded-full whitespace-nowrap px-6 transition-all duration-700 ease-out"
            style={{
              top: `${(210 / 420) * 100}%`,
              left: `${(340 / 500) * 100}%`,
              transform: "translate(-50%, -50%)",
              height: 44,
              background: FLAME,
              opacity: visible ? 1 : 0,
              transitionDelay: "620ms",
              animation: visible ? "hubPulse 2.4s ease-out infinite" : undefined,
            }}
          >
            <span className="font-display font-bold text-white text-[13px] tracking-[0.04em]">
              KODEFIZ
            </span>
          </div>

          {/* Revenue output badge */}
          <div
            className="absolute flex items-center gap-2 rounded-full pl-3 pr-4 py-2 transition-all duration-700 ease-out"
            style={{
              top: `${(210 / 420) * 100}%`,
              left: `${(460 / 500) * 100}%`,
              transform: "translate(-50%, -50%)",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              opacity: visible ? 1 : 0,
              transitionDelay: "760ms",
            }}
          >
            <span className="h-7 w-7 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(247,111,1,0.15)" }}>
              <TrendingUp className="h-3.5 w-3.5" style={{ color: FLAME }} strokeWidth={2.5} />
            </span>
            <span className="text-[13px] font-medium text-white whitespace-nowrap">Revenue</span>
          </div>
        </div>
      </div>
    </section>
  );
};

function useReveal<T extends HTMLElement>(threshold = 0.25) {
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

export default SolutionSection;