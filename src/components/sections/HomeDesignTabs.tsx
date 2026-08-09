import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const BODY_FONT = "'Plus Jakarta Sans', sans-serif";
const DISPLAY_FONT = "'Fraunces', 'Times New Roman', serif";

const HowWeWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState<Set<number>>(new Set());

  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Sidebar positioning
  const rowRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const [sidebarStyle, setSidebarStyle] =
    useState<React.CSSProperties>({});

  const rafRef = useRef<number | null>(null);

  const TOP_CLEARANCE = 112;
  const SIDEBAR_WIDTH = 340;

  /*
   * Sidebar movement
   */
  useEffect(() => {
    const recompute = () => {
      const row = rowRef.current;
      const sidebar = sidebarRef.current;

      if (!row || !sidebar) return;

      if (window.innerWidth < 1024) {
        setSidebarStyle({
          position: "static",
        });

        return;
      }

      const rowRect = row.getBoundingClientRect();

      const sidebarHeight = sidebar.offsetHeight;
      const maxTravel = rowRect.height - sidebarHeight;

      if (rowRect.top > TOP_CLEARANCE) {
        setSidebarStyle({
          position: "static",
        });
      } else if (
        rowRect.height - (TOP_CLEARANCE - rowRect.top) <
        sidebarHeight
      ) {
        setSidebarStyle({
          position: "absolute",
          top: Math.max(maxTravel, 0),
          left: 0,
          width: SIDEBAR_WIDTH,
        });
      } else {
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

    window.addEventListener("scroll", onScrollOrResize, {
      passive: true,
    });

    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  /*
   * Detect active stage
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(
            (entry.target as HTMLElement).dataset.idx
          );

          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });

        const centered = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) =>
            Number((entry.target as HTMLElement).dataset.idx)
          );

        if (centered.length > 0) {
          setActiveIndex(Math.min(...centered));
        }
      },
      {
        threshold: 0.4,
        rootMargin: "-35% 0px -35% 0px",
      }
    );

    blockRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy-50 py-20 sm:py-24 lg:py-32">

      {/* ===============================
          AMBIENT ORANGE GLOW
      =============================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          h-[520px]
          w-[520px]
          rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(247,111,1,0.10) 0%, transparent 70%)",
        }}
      />

      {/* ===============================
          MAIN CONTAINER
      =============================== */}

      <div className="relative w-full px-5 sm:px-8 md:px-12 lg:px-20">

        {/* ===============================
            HEADER
        =============================== */}

        <div className="mb-16 max-w-3xl lg:mb-24">

          {/* Label */}

          <div
            className="
              mb-7
              flex
              items-center
              gap-3
              text-[12px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-navy-400
            "
            style={{ fontFamily: BODY_FONT }}
          >
            <span className="inline-block h-px w-10 bg-brand" />

            How We Work
          </div>

          {/* Heading */}

          <h2
            className="
              text-[42px]
              leading-[1.02]
              tracking-[-0.02em]
              text-navy-950
              sm:text-[58px]
              lg:text-[72px]
            "
            style={{
              fontFamily: DISPLAY_FONT,
              fontWeight: 300,
            }}
          >
            Hire.{" "}

            <span
              className="text-brand"
              style={{
                fontStyle: "italic",
                fontWeight: 550,
              }}
            >
              Meet.
            </span>{" "}

            Scale.

            <br />

            <span
              className="text-navy-400"
              style={{
                fontSize: "0.55em",
              }}
            >
              That's it.
            </span>
          </h2>

          {/* Supporting text */}

          <p
            className="
              mt-7
              max-w-xl
              text-[15px]
              leading-7
              text-navy-500
              sm:text-[17px]
              sm:leading-8
            "
            style={{
              fontFamily: BODY_FONT,
            }}
          >
            A straightforward process designed to remove complexity,
            keep communication clear, and help you build the right
            team without unnecessary friction.
          </p>
        </div>

        {/* ===============================
            PROCESS LAYOUT
        =============================== */}

        <div
          ref={rowRef}
          className="relative lg:flex lg:gap-16"
        >

          {/* ===============================
              LEFT SIDEBAR
          =============================== */}

          <div className="relative hidden w-[340px] shrink-0 lg:block">

            <div
              ref={sidebarRef}
              style={sidebarStyle}
            >

              {/* Large Number */}

              <div
                aria-hidden
                className="
                  select-none
                  leading-none
                  transition-opacity
                  duration-500
                "
                style={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 300,
                  fontSize: "clamp(140px, 14vw, 220px)",
                  color: "#132F48",
                  opacity: 0.075,
                }}
              >
                {stages[activeIndex].n}
              </div>

              {/* Current Step */}

              <div
                className="
                  mt-3
                  text-[13px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-brand
                "
                style={{
                  fontFamily: BODY_FONT,
                }}
              >
                Step {stages[activeIndex].n} of{" "}
                {String(stages.length).padStart(2, "0")}
              </div>

              {/* Current Title */}

              <div
                className="
                  mt-2
                  text-[16px]
                  font-medium
                  text-navy-950
                "
                style={{
                  fontFamily: BODY_FONT,
                }}
              >
                {stages[activeIndex].title}
              </div>

            </div>
          </div>

          {/* ===============================
              VERTICAL DIVIDER
          =============================== */}

          <div className="hidden w-px bg-navy-200 lg:block" />

          {/* ===============================
              RIGHT CONTENT
          =============================== */}

          <div className="min-w-0 flex-1">

            {stages.map((stage, i) => {
              const isVisible = visible.has(i);

              return (
                <div
                  key={stage.n}
                  ref={(el) => {
                    blockRefs.current[i] = el;
                  }}
                  data-idx={i}
                  className="
                    border-b
                    border-navy-200
                    py-12
                    first:pt-0
                    sm:py-16
                    lg:py-24
                  "
                >

                  {/* Mobile Number */}

                  <div
                    className="
                      mb-5
                      text-[12px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-brand
                      lg:hidden
                    "
                    style={{
                      fontFamily: BODY_FONT,
                    }}
                  >
                    {stage.n}
                  </div>

                  {/* Stage Heading */}

                  <h3
                    className="
                      mb-4
                      text-[30px]
                      leading-tight
                      tracking-[-0.01em]
                      text-navy-950
                      transition-all
                      duration-700
                      sm:text-[38px]
                      lg:text-[46px]
                    "
                    style={{
                      fontFamily: DISPLAY_FONT,
                      fontWeight: 400,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(24px)",
                    }}
                  >
                    {stage.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      max-w-xl
                      text-[15px]
                      leading-7
                      text-navy-500
                      transition-all
                      duration-700
                      sm:text-[17px]
                      sm:leading-8
                    "
                    style={{
                      fontFamily: BODY_FONT,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(16px)",
                      transitionDelay: isVisible
                        ? "120ms"
                        : "0ms",
                    }}
                  >
                    {stage.desc}
                  </p>

                  {/* Progress indicator */}

                  <div className="mt-8 flex items-center gap-3">

                    <span
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          activeIndex === i
                            ? "w-10 bg-brand"
                            : "w-5 bg-navy-200"
                        }
                      `}
                    />

                    <span
                      className="
                        text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.15em]
                        text-navy-400
                      "
                      style={{
                        fontFamily: BODY_FONT,
                      }}
                    >
                      {stage.n}
                    </span>

                  </div>

                </div>
              );
            })}

            {/* ===============================
                CTA
            =============================== */}

            <div className="flex flex-wrap items-center gap-5 pt-14 sm:pt-16">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3"
              >

                {/* Navy Button */}

                <span
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-navy-950
                    px-7
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    group-hover:bg-navy-900
                  "
                  style={{
                    fontFamily: BODY_FONT,
                  }}
                >
                  Start hiring
                </span>

                {/* Orange Arrow */}

                <span
                  className="
                    inline-flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-brand
                    text-white
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <ArrowUpRight
                    className="h-4 w-4"
                    strokeWidth={2.25}
                  />
                </span>

              </Link>

              <span
                className="
                  text-[14px]
                  text-navy-400
                  sm:text-[15px]
                "
                style={{
                  fontFamily: BODY_FONT,
                }}
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