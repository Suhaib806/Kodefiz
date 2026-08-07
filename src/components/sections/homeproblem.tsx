import React, { useEffect, useRef, useState } from "react";

/**
 * PROBLEM / AGITATION SECTION — "Sound Familiar?"
 * -----------------------------------------------------------------------
 * Right side is now four large, detailed mini-mockups — not abstract
 * gradient cards — one per pain point, each built from real fake UI
 * (browser chrome, an actual mismatched content grid, an ad unit with a
 * visible bad stat, an avatar stack with an "unvetted" marker) so each
 * one reads as a specific, recognizable problem at a glance rather than
 * generic decoration. Muted gray-toned palette throughout (not brand
 * orange/navy) so the visual language itself signals "this isn't
 * working" — with one small red/orange negative stat per card doing
 * the "ouch, yeah" work.
 *
 * Still fully CSS/SVG, no real screenshots — but each one now carries
 * enough specific detail that it doesn't read as a placeholder the way
 * a flat gradient rectangle does. Swap for real (even loosely staged)
 * screenshots if you get the chance; these are built to be replaced.
 */

const painPoints = [
  "Your website looks fine but isn't actually generating leads.",
  "Your social media is inconsistent because no one truly owns it.",
  "Your ads are running, but the creative isn't converting like it should.",
  "Every new project means finding (and vetting) yet another freelancer.",
];

const MUTED_1 = "#94A0AF"; // card surface
const MUTED_2 = "#5B6472"; // card chrome/dark accents
const NEGATIVE = "#D65A3A"; // muted red-orange for the "bad stat" cue

const ProblemAgitation = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const visualRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = visualRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTilt({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };

  const cardStyle = (i: number, rotate: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible
      ? `translate(${tilt.x * 14 * (i % 2 ? 1.3 : 0.8)}px, ${tilt.y * 14 * (i % 2 ? 0.8 : 1.3)}px) rotate(${rotate}deg)`
      : `translateY(24px) rotate(${rotate}deg)`,
    transitionDelay: `${260 + i * 110}ms`,
    transitionProperty: "opacity, transform",
    transitionDuration: "700ms",
    transitionTimingFunction: "ease-out",
  });

  return (
    <section ref={ref} className="relative bg-white py-24 lg:py-32 px-5 md:px-12 lg:px-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-[-5%] h-[360px] w-[360px] rounded-full blur-[100px]"
        style={{ background: "rgba(19,47,72,0.05)" }}
      />

      <div className="relative lg:grid lg:grid-cols-[1fr_600px] lg:gap-14 items-center">
        {/* LEFT — copy */}
        <div className="max-w-2xl">
          <div
            className="flex items-center gap-3 mb-8 transition-all duration-700 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)" }}
          >
            <span className="inline-flex h-[10px] w-[10px] rounded-full bg-brand" />
            <span className="text-xs tracking-[0.22em] font-medium text-navy-400 uppercase">
              The Problem
            </span>
          </div>

          <h2
            className="font-display font-bold text-navy-950 tracking-tight leading-[1.06] text-[38px] sm:text-[52px] lg:text-[58px] mb-12 transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "80ms",
            }}
          >
            Sound familiar?
          </h2>

          <ul className="space-y-5 mb-14">
            {painPoints.map((point, i) => (
              <li
                key={point}
                className="flex items-start gap-4 transition-all duration-700 ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transitionDelay: `${180 + i * 90}ms`,
                }}
              >
                <span className="mt-[13px] h-px w-6 shrink-0 bg-navy-300" aria-hidden />
                <span className="text-[18px] sm:text-[20px] leading-snug text-navy-950">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="font-display text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.3] text-navy-950 border-l-2 border-brand pl-6 transition-all duration-700 ease-out"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "560ms",
            }}
          >
            That's not a marketing problem. That's a{" "}
            <span style={{ color: "#F76F01" }}>systems problem</span> — and
            it's exactly what we fix.
          </p>
        </div>

        {/* RIGHT — four large, detailed mockups, 2x2 */}
        <div
          ref={visualRef}
          onMouseMove={handleMouseMove}
          className="hidden lg:grid grid-cols-2 gap-6 mt-16 lg:mt-0"
        >
          {/* 1. Website — browser chrome, empty state, bad stat */}
          <div className="rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.14)]" style={cardStyle(0, -3)}>
            <div className="bg-white h-[220px] flex flex-col">
              <div className="flex items-center gap-1.5 px-3 py-2.5 border-b" style={{ borderColor: "#E4E7EB" }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
                <span className="ml-2 flex-1 rounded-full h-4" style={{ backgroundColor: "#F1F3F5" }} />
              </div>
              <div className="flex-1 p-4 space-y-2.5">
                <div className="h-3 w-3/4 rounded" style={{ backgroundColor: "#E4E7EB" }} />
                <div className="h-3 w-1/2 rounded" style={{ backgroundColor: "#E4E7EB" }} />
                <div className="h-16 w-full rounded-lg mt-3" style={{ backgroundColor: "#F1F3F5" }} />
              </div>
              <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "#F8F9FA" }}>
                <span className="text-[11px] font-medium text-navy-950">Website</span>
                <span className="text-[11px] font-semibold" style={{ color: NEGATIVE }}>
                  0 leads this month
                </span>
              </div>
            </div>
          </div>

          {/* 2. Social — mismatched grid, stale caption */}
          <div className="rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.14)] mt-10" style={cardStyle(1, 4)}>
            <div className="bg-white h-[220px] flex flex-col">
              <div className="grid grid-cols-3 gap-[2px] flex-1 p-[2px]">
                {[MUTED_1, "#C7CDD4", MUTED_2, "#DADFE4", MUTED_1, "#B8C0C9", MUTED_2, "#C7CDD4", MUTED_1].map((c, idx) => (
                  <div key={idx} style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "#F8F9FA" }}>
                <span className="text-[11px] font-medium text-navy-950">Social</span>
                <span className="text-[11px] font-semibold" style={{ color: NEGATIVE }}>
                  Last post: 47 days ago
                </span>
              </div>
            </div>
          </div>

          {/* 3. Ads — banner unit, bad CTR */}
          <div className="rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.14)]" style={cardStyle(2, 3)}>
            <div className="bg-white h-[220px] flex flex-col">
              <div className="flex-1 p-4 flex flex-col justify-center gap-3" style={{ backgroundColor: "#F8F9FA" }}>
                <div
                  className="rounded-xl p-4 flex flex-col gap-2"
                  style={{ background: `linear-gradient(155deg, ${MUTED_1} 0%, ${MUTED_2} 100%)` }}
                >
                  <div className="h-2.5 w-2/3 rounded bg-white/50" />
                  <div className="h-2 w-1/2 rounded bg-white/30" />
                  <div className="mt-1 h-6 w-16 rounded-full bg-white/25 flex items-center justify-center">
                    <span className="text-[9px] text-white/70">Shop Now</span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-white">
                <span className="text-[11px] font-medium text-navy-950">Ad Creative</span>
                <span className="text-[11px] font-semibold flex items-center gap-1" style={{ color: NEGATIVE }}>
                  CTR 0.3% ↓
                </span>
              </div>
            </div>
          </div>

          {/* 4. Freelancers — avatar stack, unvetted marker */}
          <div className="rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.14)] mt-10" style={cardStyle(3, -4)}>
            <div className="bg-white h-[220px] flex flex-col">
              <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#F8F9FA" }}>
                <div className="flex -space-x-3">
                  {[MUTED_1, "#B8C0C9", MUTED_2, "#C7CDD4"].map((c, idx) => (
                    <span
                      key={idx}
                      className="h-11 w-11 rounded-full border-2 border-white"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                  <span
                    className="h-11 w-11 rounded-full border-2 border-dashed flex items-center justify-center text-[13px] font-semibold"
                    style={{ borderColor: NEGATIVE, color: NEGATIVE, backgroundColor: "#fff" }}
                  >
                    ?
                  </span>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-white">
                <span className="text-[11px] font-medium text-navy-950">Freelancers</span>
                <span className="text-[11px] font-semibold" style={{ color: NEGATIVE }}>
                  #14 this year
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile — same four mockups, simplified spacing, no parallax */}
        <div className="lg:hidden mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <MobileMockupWebsite />
          <MobileMockupSocial />
          <MobileMockupAds />
          <MobileMockupFreelancers />
        </div>
      </div>
    </section>
  );
};

const MobileMockupWebsite = () => (
  <div className="rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
    <div className="bg-white h-[190px] flex flex-col">
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b" style={{ borderColor: "#E4E7EB" }}>
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
      </div>
      <div className="flex-1 p-4 space-y-2">
        <div className="h-3 w-3/4 rounded" style={{ backgroundColor: "#E4E7EB" }} />
        <div className="h-3 w-1/2 rounded" style={{ backgroundColor: "#E4E7EB" }} />
      </div>
      <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "#F8F9FA" }}>
        <span className="text-[11px] font-medium text-navy-950">Website</span>
        <span className="text-[11px] font-semibold" style={{ color: NEGATIVE }}>0 leads</span>
      </div>
    </div>
  </div>
);

const MobileMockupSocial = () => (
  <div className="rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
    <div className="bg-white h-[190px] flex flex-col">
      <div className="grid grid-cols-3 gap-[2px] flex-1 p-[2px]">
        {[MUTED_1, "#C7CDD4", MUTED_2, "#DADFE4", MUTED_1, "#B8C0C9"].map((c, idx) => (
          <div key={idx} style={{ backgroundColor: c }} />
        ))}
      </div>
      <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: "#F8F9FA" }}>
        <span className="text-[11px] font-medium text-navy-950">Social</span>
        <span className="text-[11px] font-semibold" style={{ color: NEGATIVE }}>47 days ago</span>
      </div>
    </div>
  </div>
);

const MobileMockupAds = () => (
  <div className="rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
    <div className="bg-white h-[190px] flex flex-col">
      <div className="flex-1 p-4 flex items-center" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="rounded-xl p-3 w-full" style={{ background: `linear-gradient(155deg, ${MUTED_1} 0%, ${MUTED_2} 100%)` }}>
          <div className="h-2.5 w-2/3 rounded bg-white/50 mb-2" />
          <div className="h-2 w-1/2 rounded bg-white/30" />
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between bg-white">
        <span className="text-[11px] font-medium text-navy-950">Ad Creative</span>
        <span className="text-[11px] font-semibold" style={{ color: NEGATIVE }}>CTR 0.3%</span>
      </div>
    </div>
  </div>
);

const MobileMockupFreelancers = () => (
  <div className="rounded-[24px] overflow-hidden shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
    <div className="bg-white h-[190px] flex flex-col">
      <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="flex -space-x-3">
          {[MUTED_1, "#B8C0C9", MUTED_2].map((c, idx) => (
            <span key={idx} className="h-10 w-10 rounded-full border-2 border-white" style={{ backgroundColor: c }} />
          ))}
          <span
            className="h-10 w-10 rounded-full border-2 border-dashed flex items-center justify-center text-[12px] font-semibold"
            style={{ borderColor: NEGATIVE, color: NEGATIVE, backgroundColor: "#fff" }}
          >
            ?
          </span>
        </div>
      </div>
      <div className="px-4 py-3 flex items-center justify-between bg-white">
        <span className="text-[11px] font-medium text-navy-950">Freelancers</span>
        <span className="text-[11px] font-semibold" style={{ color: NEGATIVE }}>#14 this year</span>
      </div>
    </div>
  </div>
);

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

export default ProblemAgitation;