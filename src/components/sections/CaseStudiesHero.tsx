
import servicesWebp from "@/assets/Case Studies/7o5_contracting.png";
import servicesWebp2 from "@/assets/Case Studies/Bidm8.png";
import servicesWebp3 from "@/assets/Case Studies/bidm8_supplier.png";
import servicesWebp4 from "@/assets/Case Studies/Claymar_electric.png";
import servicesWebp5 from "@/assets/Case Studies/builders_game_podcast.png";
import servicesWebp6 from "@/assets/Case Studies/trotter_generalcon_tracting.png";
import servicesWebp7 from "@/assets/Case Studies/Gravel_ridge.png";
import servicesWebp8 from "@/assets/Case Studies/homestand.png";
import servicesWebp9 from "@/assets/Case Studies/Masons_Exterior.png";
import servicesWebp10 from "@/assets/Case Studies/Masons_exterior_builtreach.png";
import servicesWebp11 from "@/assets/Case Studies/troy_cluthe_sales.png";

import { ArrowRight, Sparkles } from "lucide-react";

const CaseStudiesHero = () => {
  const caseStudies = [
    { src: servicesWebp, alt: "7O5 Contracting" },
    { src: servicesWebp2, alt: "Bidm8" },
    { src: servicesWebp3, alt: "Bidm8 Supplier" },
    { src: servicesWebp4, alt: "Claymar Electric" },
    { src: servicesWebp5, alt: "Builders Game Podcast" },
    { src: servicesWebp6, alt: "Trotter General Contracting" },
    { src: servicesWebp7, alt: "Gravel Ridge" },
    { src: servicesWebp8, alt: "Homestand" },
    { src: servicesWebp9, alt: "Masons Exterior" },
    { src: servicesWebp10, alt: "Masons Exterior Outreach" },
    { src: servicesWebp11, alt: "Troy Cluthe Sales" },
  ];

  return (
    <section
      className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "900px",
        background:
          "linear-gradient(135deg, #DDE9F1 0%, #E8F0F5 45%, #D7E5EE 100%)",
      }}
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      {/* Large navy glow - top left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 -left-48 w-[650px] h-[650px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(19,47,72,0.18) 0%, rgba(19,47,72,0.06) 40%, rgba(19,47,72,0) 72%)",
        }}
      />

      {/* Large orange glow - top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(247,111,1,0.20) 0%, rgba(247,111,1,0.08) 38%, rgba(247,111,1,0) 72%)",
        }}
      />

      {/* Middle navy glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[35%] -right-64 w-[650px] h-[650px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(19,47,72,0.13) 0%, rgba(19,47,72,0) 70%)",
        }}
      />

      {/* Bottom orange glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 left-[20%] w-[600px] h-[500px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(247,111,1,0.13) 0%, rgba(247,111,1,0) 70%)",
        }}
      />

      {/* Subtle grid texture */}
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

      {/* Decorative orange dot */}
      <div
        aria-hidden="true"
        className="absolute top-24 right-[12%] w-3 h-3 rounded-full bg-brand shadow-[0_0_25px_rgba(247,111,1,0.7)]"
      />

      {/* Decorative navy dot */}
      <div
        aria-hidden="true"
        className="absolute bottom-32 left-[8%] w-2 h-2 rounded-full bg-navy-950 opacity-50"
      />

      {/* Decorative orange ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18%] left-[6%] w-20 h-20 rounded-full border border-brand/10"
      />

      {/* Decorative navy ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[18%] right-[7%] w-28 h-28 rounded-full border border-navy-950/10"
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div className="relative z-10">

        {/* =====================================================
            TOP LABEL
        ===================================================== */}

        <div className="flex justify-center px-5 mb-8">
          <div
            className="
              inline-flex
              items-center
              gap-3
              text-[11px]
              sm:text-[13px]
              font-medium
              tracking-[0.22em]
              uppercase
              text-navy-600
            "
          >
            <span className="w-8 sm:w-10 h-px bg-brand" />

            Selected Work

            <span className="w-8 sm:w-10 h-px bg-brand" />
          </div>
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="text-center px-5 max-w-4xl mx-auto mb-14 sm:mb-16 lg:mb-20">

          <h2
            className="
              text-[36px]
              sm:text-[48px]
              lg:text-[64px]
              font-bold
              text-navy-950
              leading-[1.05]
              tracking-tight
            "
          >
            Digital experiences
            <br />

            <span className="text-brand">
              built to perform.
            </span>
          </h2>

          <p
            className="
              mt-6
              text-[15px]
              sm:text-[17px]
              lg:text-[18px]
              text-navy-600
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            From high-converting websites to powerful applications,
            we design and build digital experiences that help ambitious
            businesses grow.
          </p>

        </div>

        {/* =====================================================
            SCROLLING IMAGE STRIP
        ===================================================== */}

        <div className="relative w-full overflow-hidden mb-14 sm:mb-16">

          {/* Left fade */}
          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-20
              sm:w-32
              z-20
              pointer-events-none
            "
            style={{
              background:
                "linear-gradient(to right, #DDE9F1, rgba(221,233,241,0))",
            }}
          />

          {/* Right fade */}
          <div
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-20
              sm:w-32
              z-20
              pointer-events-none
            "
            style={{
              background:
                "linear-gradient(to left, #DDE9F1, rgba(221,233,241,0))",
            }}
          />

          <style>
            {`
              @keyframes caseStudiesScroll {
                from {
                  transform: translateX(0);
                }

                to {
                  transform: translateX(-50%);
                }
              }

              .case-studies-track {
                animation: caseStudiesScroll 38s linear infinite;
                will-change: transform;
              }

              .case-studies-track:hover {
                animation-play-state: paused;
              }
            `}
          </style>

          <div className="overflow-hidden w-full">

            <div
              className="case-studies-track flex gap-4 sm:gap-5"
              style={{
                width: "max-content",
              }}
            >

              {[...caseStudies, ...caseStudies].map((cs, i) => (
                <div
                  key={i}
                  className="
                    relative
                    flex-shrink-0
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/70
                    bg-white
                    shadow-[0_18px_50px_rgba(19,47,72,0.16)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_24px_60px_rgba(19,47,72,0.22)]
                  "
                  style={{
                    width: "clamp(280px, 32vw, 400px)",
                    height: "clamp(220px, 24vw, 300px)",
                  }}
                >

                  {/* Image */}
                  <img
                    src={cs.src}
                    alt={cs.alt}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                    "
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Bottom image overlay */}
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-24
                      pointer-events-none
                    "
                    style={{
                      background:
                        "linear-gradient(to top, rgba(19,47,72,0.45), rgba(19,47,72,0))",
                    }}
                  />

                  {/* Orange highlight */}
                  <div
                    className="
                      absolute
                      top-3
                      right-3
                      w-2
                      h-2
                      rounded-full
                      bg-brand
                      shadow-[0_0_15px_rgba(247,111,1,0.8)]
                    "
                  />

                </div>
              ))}

            </div>

          </div>
        </div>

        {/* =====================================================
            SERVICE TAGS
        ===================================================== */}

        <div className="px-5 sm:px-6">

          <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">

            {[
              "Web Applications",
              "Mobile Applications",
              "Business Platforms",
              "UI/UX Design",
              "Software Support",
            ].map((tag, index) => (
              <span
                key={tag}
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  px-4
                  sm:px-5
                  py-2.5
                  text-[13px]
                  sm:text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    index === 0
                      ? "bg-navy-950 text-white border border-navy-950 shadow-[0_8px_25px_rgba(19,47,72,0.15)]"
                      : "bg-white/75 backdrop-blur-sm text-navy-700 border border-white hover:border-brand hover:text-brand hover:bg-white"
                  }
                `}
              >

                {index === 0 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                )}

                {tag}

              </span>
            ))}

          </div>

        </div>

        {/* =====================================================
            DESCRIPTION + CTA
        ===================================================== */}

        <div className="text-center px-5 mt-10 sm:mt-12">

          <p
            className="
              text-[14px]
              sm:text-[15px]
              text-navy-600
              leading-relaxed
              max-w-[600px]
              mx-auto
              mb-8
            "
          >
            We combine strategy, design, development, and technology
            to create digital products that are fast, intuitive,
            scalable, and built around real business goals.
          </p>

          {/* CTA */}

          <a
            href="/portfolio"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-navy-950
              text-white
              px-6
              sm:px-7
              py-3.5
              text-[14px]
              sm:text-[15px]
              font-medium
              transition-all
              duration-300
              hover:bg-brand
              hover:-translate-y-0.5
              shadow-[0_10px_30px_rgba(19,47,72,0.20)]
            "
          >

            <span>
              Explore Our Work
            </span>

            <span
              className="
                flex
                items-center
                justify-center
                w-7
                h-7
                rounded-full
                bg-brand
                transition-all
                duration-300
                group-hover:bg-white
              "
            >

              <ArrowRight
                className="
                  w-4
                  h-4
                  text-white
                  transition-all
                  duration-300
                  group-hover:text-brand
                  group-hover:translate-x-0.5
                "
              />

            </span>

          </a>

        </div>

        {/* =====================================================
            BOTTOM ACCENT
        ===================================================== */}

        <div className="flex justify-center mt-16 sm:mt-20">

          <div
            className="
              inline-flex
              items-center
              gap-3
              text-[11px]
              uppercase
              tracking-[0.2em]
              text-navy-500
            "
          >

            <Sparkles
              className="w-4 h-4 text-brand"
              strokeWidth={1.5}
            />

            <span>
              Strategy · Design · Development
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudiesHero;
