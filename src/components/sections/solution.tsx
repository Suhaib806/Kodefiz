
import React, { useEffect, useRef, useState } from "react";
import {
  Globe2,
  PenLine,
  Megaphone,
  Workflow,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

const inputs = [
  { label: "Web Design", icon: Globe2 },
  { label: "Content", icon: PenLine },
  { label: "Ads", icon: Megaphone },
  { label: "Automation", icon: Workflow },
];

const FLAME = "#F76F01";
const NAVY = "#132F48";
const MUTED = "#62728A";

const SolutionSection = () => {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "850px",
        background:
          "linear-gradient(135deg, #DDE9F1 0%, #E8F0F5 45%, #D7E5EE 100%)",
      }}
    >
      {/* =========================================================
          ANIMATIONS
      ========================================================= */}

      <style>
        {`
          @keyframes flowDash {
            to {
              stroke-dashoffset: -24;
            }
          }

          @keyframes hubPulse {
            0%, 100% {
              box-shadow: 0 0 0 0 rgba(247,111,1,0.30);
            }

            50% {
              box-shadow: 0 0 0 12px rgba(247,111,1,0);
            }
          }

          @keyframes softFloat {
            0%, 100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-8px);
            }
          }
        `}
      </style>

      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      {/* Large navy glow — top left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-56
          -left-56
          w-[650px]
          h-[650px]
          rounded-full
          blur-3xl
          opacity-70
        "
        style={{
          background:
            "radial-gradient(circle, rgba(19,47,72,0.20) 0%, rgba(19,47,72,0.07) 42%, rgba(19,47,72,0) 72%)",
        }}
      />

      {/* Large orange glow — top right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-40
          -right-44
          w-[620px]
          h-[620px]
          rounded-full
          blur-3xl
          opacity-80
        "
        style={{
          background:
            "radial-gradient(circle, rgba(247,111,1,0.22) 0%, rgba(247,111,1,0.08) 40%, rgba(247,111,1,0) 72%)",
        }}
      />

      {/* Middle navy glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          top-[35%]
          -right-64
          w-[650px]
          h-[650px]
          rounded-full
          blur-3xl
        "
        style={{
          background:
            "radial-gradient(circle, rgba(19,47,72,0.14) 0%, rgba(19,47,72,0) 70%)",
        }}
      />

      {/* Bottom orange glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-60
          left-[15%]
          w-[650px]
          h-[500px]
          rounded-full
          blur-3xl
          opacity-60
        "
        style={{
          background:
            "radial-gradient(circle, rgba(247,111,1,0.15) 0%, rgba(247,111,1,0) 70%)",
        }}
      />

      {/* =========================================================
          SUBTLE GRID TEXTURE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(19,47,72,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(19,47,72,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =========================================================
          DECORATIVE ELEMENTS
      ========================================================= */}

      {/* Orange dot */}
      <div
        aria-hidden="true"
        className="
          absolute
          top-24
          right-[12%]
          w-3
          h-3
          rounded-full
          bg-brand
          shadow-[0_0_25px_rgba(247,111,1,0.7)]
        "
      />

      {/* Navy dot */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-28
          left-[8%]
          w-2
          h-2
          rounded-full
          bg-navy-950
          opacity-50
        "
      />

      {/* Orange ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          top-[18%]
          left-[5%]
          w-20
          h-20
          rounded-full
          border
          border-brand/10
        "
      />

      {/* Navy ring */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[15%]
          right-[6%]
          w-28
          h-28
          rounded-full
          border
          border-navy-950/10
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="relative lg:grid lg:grid-cols-[1fr_560px] lg:gap-16 items-center">

          {/* =====================================================
              LEFT — COPY
          ===================================================== */}

          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div
              className="
                flex
                items-center
                gap-3
                mb-8
                transition-all
                duration-700
                ease-out
              "
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : "translateY(16px)",
              }}
            >
              <span
                className="
                  inline-flex
                  h-[10px]
                  w-[10px]
                  rounded-full
                  bg-brand
                  shadow-[0_0_15px_rgba(247,111,1,0.5)]
                "
              />

              <span
                className="
                  text-xs
                  tracking-[0.22em]
                  font-medium
                  uppercase
                "
                style={{
                  color: MUTED,
                }}
              >
                The Solution
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                font-display
                font-bold
                tracking-tight
                leading-[1.08]
                text-[32px]
                sm:text-[44px]
                lg:text-[50px]
                mb-8
                transition-all
                duration-700
                ease-out
              "
              style={{
                color: NAVY,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : "translateY(20px)",
                transitionDelay: "80ms",
              }}
            >
              One Team. One System.
              <br />

              <span style={{ color: FLAME }}>
                Every Piece Working Together.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                text-[17px]
                sm:text-[18px]
                leading-relaxed
                max-w-lg
                transition-all
                duration-700
                ease-out
              "
              style={{
                color: MUTED,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : "translateY(16px)",
                transitionDelay: "200ms",
              }}
            >
              Instead of hiring separately for web design, content, ads,
              and automation, you get a single team that builds all of
              it to work as one connected engine — so nothing falls
              through the cracks between vendors, and every deliverable
              is built to move one number: your revenue.
            </p>

            {/* Small supporting accent */}
            <div
              className="
                flex
                items-center
                gap-3
                mt-8
                transition-all
                duration-700
              "
              style={{
                opacity: visible ? 1 : 0,
                transitionDelay: "320ms",
              }}
            >
              <div
                className="h-px w-10"
                style={{
                  background: FLAME,
                }}
              />

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  font-medium
                "
                style={{
                  color: MUTED,
                }}
              >
                Strategy · Execution · Growth
              </span>
            </div>
          </div>

          {/* =====================================================
              RIGHT — DESKTOP DIAGRAM
          ===================================================== */}

          <div className="hidden lg:block relative mt-16 lg:mt-0 h-[420px]">

            {/* Diagram background panel */}
            <div
              className="
                absolute
                inset-4
                rounded-[32px]
                border
                border-white/60
                bg-white/30
                backdrop-blur-sm
              "
              style={{
                boxShadow:
                  "0 25px 70px rgba(19,47,72,0.08)",
              }}
            />

            <svg
              viewBox="0 0 500 420"
              className="absolute inset-0 h-full w-full z-10"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.8s ease 0.4s",
              }}
            >
              {inputs.map((_, i) => {
                const y = 55 + i * 105;

                return (
                  <path
                    key={i}
                    d={`M 110 ${y} C 220 ${y}, 220 210, 278 210`}
                    fill="none"
                    stroke="rgba(247,111,1,0.45)"
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                    style={{
                      animation:
                        "flowDash 1.4s linear infinite",
                    }}
                  />
                );
              })}

              <path
                d="M 405 210 L 445 210"
                fill="none"
                stroke="rgba(247,111,1,0.55)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                style={{
                  animation:
                    "flowDash 1.2s linear infinite",
                }}
              />
            </svg>

            {/* Input nodes */}
            {inputs.map((input, i) => {
              const Icon = input.icon;
              const topPct =
                ((55 + i * 105) / 420) * 100;

              return (
                <div
                  key={input.label}
                  className="
                    absolute
                    flex
                    items-center
                    gap-3
                    z-20
                    transition-all
                    duration-700
                    ease-out
                  "
                  style={{
                    top: `${topPct}%`,
                    left: "6%",
                    transform: `translateY(-50%) ${
                      visible
                        ? "translateX(0)"
                        : "translateX(-16px)"
                    }`,
                    opacity: visible ? 1 : 0,
                    transitionDelay: `${260 + i * 90}ms`,
                  }}
                >
                  <div
                    className="
                      h-14
                      w-14
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      border
                      border-white/70
                      bg-white/75
                      backdrop-blur-sm
                    "
                    style={{
                      boxShadow:
                        "0 10px 30px rgba(19,47,72,0.10)",
                    }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{
                        color: FLAME,
                      }}
                      strokeWidth={2}
                    />
                  </div>

                  <span
                    className="
                      text-[13px]
                      font-medium
                      whitespace-nowrap
                    "
                    style={{
                      color: NAVY,
                    }}
                  >
                    {input.label}
                  </span>
                </div>
              );
            })}

            {/* KODEFIZ hub */}
            <div
              className="
                absolute
                flex
                items-center
                justify-center
                rounded-full
                whitespace-nowrap
                px-6
                z-30
                transition-all
                duration-700
                ease-out
              "
              style={{
                top: `${(210 / 420) * 100}%`,
                left: `${(340 / 500) * 100}%`,
                transform: "translate(-50%, -50%)",
                height: 50,
                background: FLAME,
                opacity: visible ? 1 : 0,
                transitionDelay: "620ms",
                animation: visible
                  ? "hubPulse 2.4s ease-out infinite"
                  : undefined,
                boxShadow:
                  "0 15px 35px rgba(247,111,1,0.28)",
              }}
            >
              <span
                className="
                  font-display
                  font-bold
                  text-white
                  text-[13px]
                  tracking-[0.04em]
                "
              >
                KODEFIZ
              </span>
            </div>

            {/* Revenue badge */}
            <div
              className="
                absolute
                flex
                items-center
                gap-2
                rounded-full
                pl-3
                pr-4
                py-2
                z-30
                transition-all
                duration-700
                ease-out
                bg-white/90
                backdrop-blur-sm
              "
              style={{
                top: `${(210 / 420) * 100}%`,
                left: `${(460 / 500) * 100}%`,
                transform: "translate(-50%, -50%)",
                border: "1px solid rgba(255,255,255,0.8)",
                boxShadow:
                  "0 12px 30px rgba(19,47,72,0.12)",
                opacity: visible ? 1 : 0,
                transitionDelay: "760ms",
              }}
            >
              <span
                className="
                  h-7
                  w-7
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
                style={{
                  backgroundColor:
                    "rgba(247,111,1,0.12)",
                }}
              >
                <TrendingUp
                  className="h-3.5 w-3.5"
                  style={{
                    color: FLAME,
                  }}
                  strokeWidth={2.5}
                />
              </span>

              <span
                className="
                  text-[13px]
                  font-medium
                  whitespace-nowrap
                "
                style={{
                  color: NAVY,
                }}
              >
                Revenue
              </span>
            </div>
          </div>

          {/* =====================================================
              MOBILE / TABLET DIAGRAM
          ===================================================== */}

          <div className="lg:hidden mt-14 flex flex-col items-center">

            {/* Input cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-2">

              {inputs.map((input, i) => {
                const Icon = input.icon;

                return (
                  <div
                    key={input.label}
                    className="
                      flex
                      flex-col
                      items-center
                      gap-2
                      rounded-2xl
                      p-4
                      bg-white/65
                      backdrop-blur-sm
                      border
                      border-white/70
                      transition-all
                      duration-700
                      ease-out
                    "
                    style={{
                      boxShadow:
                        "0 12px 30px rgba(19,47,72,0.08)",
                      opacity: visible ? 1 : 0,
                      transform: visible
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transitionDelay: `${120 + i * 80}ms`,
                    }}
                  >
                    <div
                      className="
                        h-11
                        w-11
                        rounded-xl
                        flex
                        items-center
                        justify-center
                      "
                      style={{
                        backgroundColor:
                          "rgba(247,111,1,0.10)",
                      }}
                    >
                      <Icon
                        className="h-[18px] w-[18px]"
                        style={{
                          color: FLAME,
                        }}
                        strokeWidth={2}
                      />
                    </div>

                    <span
                      className="
                        text-[13px]
                        font-medium
                        text-center
                      "
                      style={{
                        color: NAVY,
                      }}
                    >
                      {input.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Arrow */}
            <ChevronDown
              className="h-5 w-5 my-2"
              style={{
                color: FLAME,
              }}
            />

            {/* KODEFIZ */}
            <div
              className="
                flex
                items-center
                justify-center
                rounded-full
                whitespace-nowrap
                px-7
                h-12
                mb-2
                transition-all
                duration-700
                ease-out
              "
              style={{
                background: FLAME,
                opacity: visible ? 1 : 0,
                transitionDelay: "520ms",
                animation: visible
                  ? "hubPulse 2.4s ease-out infinite"
                  : undefined,
                boxShadow:
                  "0 15px 35px rgba(247,111,1,0.28)",
              }}
            >
              <span
                className="
                  font-display
                  font-bold
                  text-white
                  text-[13px]
                  tracking-[0.04em]
                "
              >
                KODEFIZ
              </span>
            </div>

            {/* Arrow */}
            <ChevronDown
              className="h-5 w-5 my-2"
              style={{
                color: FLAME,
              }}
            />

            {/* Revenue */}
            <div
              className="
                flex
                items-center
                gap-2
                rounded-full
                pl-3
                pr-4
                py-2
                bg-white/90
                backdrop-blur-sm
                transition-all
                duration-700
                ease-out
              "
              style={{
                border:
                  "1px solid rgba(255,255,255,0.8)",
                boxShadow:
                  "0 12px 30px rgba(19,47,72,0.12)",
                opacity: visible ? 1 : 0,
                transitionDelay: "620ms",
              }}
            >
              <span
                className="
                  h-7
                  w-7
                  rounded-full
                  flex
                  items-center
                  justify-center
                "
                style={{
                  backgroundColor:
                    "rgba(247,111,1,0.12)",
                }}
              >
                <TrendingUp
                  className="h-3.5 w-3.5"
                  style={{
                    color: FLAME,
                  }}
                  strokeWidth={2.5}
                />
              </span>

              <span
                className="
                  text-[13px]
                  font-medium
                "
                style={{
                  color: NAVY,
                }}
              >
                Revenue
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function useReveal(threshold = 0.25) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return {
    ref,
    visible,
  };
}

export default SolutionSection;
