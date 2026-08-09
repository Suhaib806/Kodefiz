
import React, { useEffect, useRef, useState } from "react";

import vettingImg from "@/assets/softech.png";
import pipelineImg from "@/assets/office.png";
import distributedImg from "@/assets/office2.png";
import partnershipImg from "@/assets/office3.png";

const reasons = [
  {
    n: "01",
    title: "One Accountable Partner",
    desc: "One accountable partner instead of five disconnected vendors. Strategy, execution, technology, and growth stay aligned under one team.",
    img: vettingImg,
  },
  {
    n: "02",
    title: "Outcome-First Thinking",
    desc: "Every deliverable is tied to a business result, not just a task. We focus on what moves the needle for your company.",
    img: pipelineImg,
  },
  {
    n: "03",
    title: "Systems That Compound",
    desc: "What we build keeps working long after launch. Our systems are designed to create momentum instead of requiring constant rebuilding.",
    img: distributedImg,
  },
  {
    n: "04",
    title: "Clear Reporting",
    desc: "You always know what's working, what's changing, and why. No black boxes, vague updates, or confusing reports.",
    img: partnershipImg,
  },
];

const WhyChooseKodefiz = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white text-[#132F48]"
    >
      {/* Decorative background element */}
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full opacity-[0.045]"
        style={{
          background:
            "radial-gradient(circle, #F76F01 0%, transparent 68%)",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* =========================
            HEADER
        ========================== */}
        <div className="grid grid-cols-1 gap-12 border-b border-[#132F48]/10 py-20 sm:py-24 lg:grid-cols-[0.85fr_1.5fr] lg:gap-20 lg:py-32">
          
          {/* Left label */}
          <div
            className="flex items-start"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(25px)",
              transition: "all 0.7s ease",
            }}
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#F76F01]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F76F01]">
                  Why Us
                </span>
              </div>

              <p className="max-w-[260px] text-[13px] leading-6 text-[#132F48]/50">
                Built around accountability, measurable outcomes, and systems
                that continue creating value.
              </p>
            </div>
          </div>

          {/* Main heading */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(35px)",
              transition:
                "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 100ms",
            }}
          >
            <h2 className="max-w-[900px] text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[54px] lg:text-[72px]">
              Why Businesses
              <br />
              <span className="text-[#F76F01]">
                Choose to Work With Us
              </span>
            </h2>
          </div>
        </div>

        {/* =========================
            INTRO STATEMENT
        ========================== */}
        <div
          className="grid grid-cols-1 border-b border-[#132F48]/10 py-14 sm:py-16 lg:grid-cols-[1fr_2fr] lg:py-20"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 200ms",
          }}
        >
          <div className="mb-6 lg:mb-0">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#132F48]/35">
              The Difference
            </span>
          </div>

          <div>
            <p className="max-w-[850px] text-[24px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#132F48] sm:text-[30px] lg:text-[38px]">
              Instead of managing disconnected vendors, you get{" "}
              <span className="text-[#F76F01]">
                one accountable team
              </span>{" "}
              focused on building outcomes that compound.
            </p>
          </div>
        </div>

        {/* =========================
            REASONS
        ========================== */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const delay = 250 + index * 120;

            return (
              <article
                key={reason.n}
                className={`
                  group relative overflow-hidden
                  border-b border-[#132F48]/10
                  ${index % 2 === 0 ? "md:border-r" : ""}
                  ${index >= 2 ? "lg:border-b-0" : ""}
                  px-0 py-10
                  md:px-10
                  lg:px-14 lg:py-14
                `}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible
                    ? "translateY(0)"
                    : "translateY(45px)",
                  transition: `
                    opacity 0.7s ease ${delay}ms,
                    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms
                  `,
                }}
              >
                {/* Number + accent */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[12px] font-bold tracking-[0.18em] text-[#F76F01]">
                    {reason.n}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#132F48]/10 text-[#132F48]/40 transition-all duration-500 group-hover:border-[#F76F01] group-hover:bg-[#F76F01] group-hover:text-white">
                    ↗
                  </span>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_180px] lg:grid-cols-[1fr_220px]">
                  
                  <div>
                    <h3 className="mb-5 max-w-[400px] text-[27px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#132F48] sm:text-[30px]">
                      {reason.title}
                    </h3>

                    <p className="max-w-[430px] text-[14px] leading-7 text-[#132F48]/55">
                      {reason.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative h-[180px] overflow-hidden rounded-2xl sm:h-[150px] lg:h-[180px]">
                    <img
                      src={reason.img}
                      alt={reason.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-[#132F48]/10 transition-colors duration-500 group-hover:bg-[#132F48]/0" />

                    {/* Orange corner */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F76F01] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F76F01] transition-all duration-700 ease-out group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================== */}
        <div
          className="flex flex-col justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center lg:py-24"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0)"
              : "translateY(25px)",
            transition: "all 0.8s ease 700ms",
          }}
        >
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F76F01]">
              Built For The Long Run
            </p>

            <h3 className="max-w-[700px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] sm:text-[36px] lg:text-[44px]">
              Less coordination.
              <br />
              More progress.
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-[#F76F01]" />

            <p className="max-w-[280px] text-[13px] leading-6 text-[#132F48]/50">
              A partner who stays accountable from strategy through execution
              and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKodefiz;
