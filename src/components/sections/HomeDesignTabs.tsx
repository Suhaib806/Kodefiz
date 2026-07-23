import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * HOW WE WORK — "The Page-Turn"
 * -----------------------------------------------------------------------
 * Editorial split layout, no scroll-jacking, no position:fixed pin.
 * Left column holds a single oversized ghost numeral that crossfades
 * between stages as they scroll into view (driven by IntersectionObserver
 * watching each right-column block). Right column is a plain vertical
 * scroll of five stage blocks with a fade-up reveal on entry.
 *
 * Deliberately avoids scroll-jacking so it can't break due to ancestor
 * overflow/transform quirks — the only "trick" here is swapping which
 * numeral is visible, which is a simple state flip driven by a native
 * browser API (IntersectionObserver), not scroll math.
 */

type Stage = {
  n: string;
  title: string;
  desc: string;
};

const stages: Stage[] = [
  {
    n: "01",
    title: "Discovery Call",
    desc: "We understand your business, challenges, goals, and hiring needs.",
  },
  {
    n: "02",
    title: "Talent Matching",
    desc: "We hand-pick pre-vetted professionals who fit your culture and requirements.",
  },
  {
    n: "03",
    title: "Interview & Approval",
    desc: "You interview only the best candidates and approve your preferred talent.",
  },
  {
    n: "04",
    title: "Onboarding",
    desc: "We handle onboarding, documentation, contracts, and setup.",
  },
  {
    n: "05",
    title: "Scale",
    desc: "Need more people? We continue supplying talent as your business grows.",
  },
];

const NAVY = "#132F48";
const NAVY_DEEP = "#0B2038";
const FLAME = "#F76F01";
const MUTED = "rgba(255,255,255,0.55)";
const HAIRLINE = "rgba(255,255,255,0.12)";
const PAPER = "#FFFFFF";
const BODY_FONT = "'Plus Jakarta Sans', sans-serif";
const DISPLAY_FONT = "'Fraunces', 'Times New Roman', serif";

const HowWeWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  // --- JS-driven sidebar "sticky" -----------------------------------
  // CSS `position: sticky` depends on every ancestor cooperating (no
  // overflow other than visible, no transform/filter/will-change/
  // perspective/contain anywhere up the tree). That's proven unreliable
  // here, so this recomputes the sidebar's position on scroll using
  // getBoundingClientRect instead: `fixed` while the row is mid-viewport,
  // `absolute` pinned to the top/bottom edge of the row otherwise. This
  // only depends on `fixed`, which is broken by far fewer things (mainly
  // a transform/filter/perspective on an ANCESTOR of this component — if
  // it still doesn't move after this, that's the one remaining suspect,
  // and it lives in your page/layout wrapper, not this file).
  const rowRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarStyle, setSidebarStyle] = useState<React.CSSProperties>({});
  const rafRef = useRef<number | null>(null);
  const TOP_CLEARANCE = 112; // px — match to your fixed header height if any
  const SIDEBAR_WIDTH = 340; // px — matches the fixed column width below

  useEffect(() => {
    const recompute = () => {
      const row = rowRef.current;
      const sidebar = sidebarRef.current;
      if (!row || !sidebar) return;
      if (window.innerWidth < 1024) {
        setSidebarStyle({ position: "static" });
        return;
      }

      const rowRect = row.getBoundingClientRect();
      const sidebarHeight = sidebar.offsetHeight;
      const maxTravel = rowRect.height - sidebarHeight;

      if (rowRect.top > TOP_CLEARANCE) {
        // Row hasn't reached the clearance line yet — sit at natural top.
        setSidebarStyle({ position: "static" });
      } else if (rowRect.height - (TOP_CLEARANCE - rowRect.top) < sidebarHeight) {
        // Row is ending — stop at the bottom of the row, don't overshoot it.
        setSidebarStyle({
          position: "absolute",
          top: Math.max(maxTravel, 0),
          left: 0,
          width: SIDEBAR_WIDTH,
        });
      } else {
        // Mid-scroll — actually fixed to the clearance line.
        setSidebarStyle({
          position: "fixed",
          top: TOP_CLEARANCE,
          left: rowRect.left,
          width: SIDEBAR_WIDTH,
        });
      }
    };

    const onScrollOrResize = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        recompute();
      });
    };

    recompute();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
  // -------------------------------------------------------------------

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            setVisible((prev) => new Set(prev).add(idx));
          }
        });

        const centered = entries
          .filter((e) => e.isIntersecting)
          .map((e) => Number((e.target as HTMLElement).dataset.idx));
        if (centered.length > 0) {
          setActiveIndex(Math.min(...centered));
        }
      },
      { threshold: 0.4, rootMargin: "-35% 0px -35% 0px" }
    );

    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)` }}
    >
      {/* Ambient glow, very quiet — keeps the dark bg from feeling flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${FLAME}22 0%, transparent 70%)` }}
      />
      <div className="relative w-full px-5 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-16 lg:mb-24 max-w-2xl">
          <div
            className="flex items-center gap-3 text-[13px] font-medium tracking-[0.22em] uppercase mb-8"
            style={{ fontFamily: BODY_FONT, color: MUTED }}
          >
            <span className="inline-block h-px w-10" style={{ backgroundColor: FLAME }} />
            How We Work
          </div>
          <h2
            className="text-[40px] sm:text-[58px] lg:text-[72px] leading-[1.05] tracking-[-0.02em]"
            style={{ fontFamily: DISPLAY_FONT, color: PAPER, fontWeight: 300 }}
          >
            Hire.{" "}
            <span style={{ fontStyle: "italic", fontWeight: 550, color: FLAME }}>
              Meet.
            </span>{" "}
            Scale.
            <br />
            <span style={{ color: MUTED, fontSize: "0.55em" }}>That's it.</span>
          </h2>
        </div>

        {/* Split layout */}
        <div ref={rowRef} className="relative lg:flex lg:gap-16">
          {/* Left: numeral column — position is computed in JS (see
              sidebarStyle above), not CSS `position: sticky`. */}
          <div className="hidden lg:block lg:w-[340px] lg:shrink-0 relative">
            <div ref={sidebarRef} style={sidebarStyle}>
              <div
                aria-hidden
                className="leading-none select-none transition-opacity duration-500"
                style={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 300,
                  fontSize: "clamp(140px, 14vw, 220px)",
                  color: FLAME,
                  opacity: 0.16,
                }}
              >
                {stages[activeIndex].n}
              </div>
              <div
                className="mt-2 text-[15px] font-medium"
                style={{ fontFamily: BODY_FONT, color: FLAME }}
              >
                Step {stages[activeIndex].n} of {String(stages.length).padStart(2, "0")}
              </div>
              <div
                className="mt-1 text-[15px]"
                style={{ fontFamily: BODY_FONT, color: PAPER }}
              >
                {stages[activeIndex].title}
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px" style={{ backgroundColor: HAIRLINE }} />

          {/* Right: scrolling stage list */}
          <div className="flex-1 min-w-0">
            {stages.map((stage, i) => {
              const isVisible = visible.has(i);
              return (
                <div
                  key={stage.n}
                  ref={(el) => (blockRefs.current[i] = el)}
                  data-idx={i}
                  className="py-12 sm:py-16 lg:py-20 border-b first:pt-0"
                  style={{ borderColor: HAIRLINE }}
                >
                  <div
                    className="lg:hidden mb-4 text-[13px] font-medium tracking-widest uppercase"
                    style={{ fontFamily: BODY_FONT, color: FLAME }}
                  >
                    {stage.n}
                  </div>

                  <h3
                    className="text-[28px] sm:text-[36px] lg:text-[44px] leading-tight tracking-[-0.01em] mb-4 transition-all duration-700 ease-out"
                    style={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 400,
                      color: PAPER,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(24px)",
                    }}
                  >
                    {stage.title}
                  </h3>

                  <p
                    className="max-w-md text-[16px] sm:text-[18px] leading-relaxed transition-all duration-700 ease-out"
                    style={{
                      fontFamily: BODY_FONT,
                      color: MUTED,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(16px)",
                      transitionDelay: isVisible ? "120ms" : "0ms",
                    }}
                  >
                    {stage.desc}
                  </p>
                </div>
              );
            })}

            {/* Closing CTA */}
            <div className="pt-14 sm:pt-16 flex flex-wrap items-center gap-5">
              <Link to="/contact" className="group inline-flex items-center gap-3">
                <span
                  className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium"
                  style={{ backgroundColor: PAPER, color: NAVY, fontFamily: BODY_FONT }}
                >
                  Start hiring
                </span>
                <span
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: FLAME }}
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                </span>
              </Link>
              <span
                className="text-[15px]"
                style={{ fontFamily: BODY_FONT, color: MUTED }}
              >
                Ready when you are.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;