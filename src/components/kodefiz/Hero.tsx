"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import FloatingShapes from "./FloatingShapes";
import LightningUnderline from "./LightningUnderline";
import MagneticButton from "./MagneticButton";

const marqueeItems = [
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "CLOUD ARCHITECTURE",
  "AI SOLUTIONS",
  "MOBILE APPS",
  "DEVOPS",
  "BRAND STRATEGY",
  "DATA ENGINEERING",
] as const;

const MarqueeStrip = () => {
  const content = marqueeItems.join(" • ");
  const duplicated = `${content} • ${content}`;

  return (
    <div className="relative w-full overflow-hidden border-t border-black/[0.06] py-4 dark:border-white/10">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="px-4 text-[10px] font-medium uppercase tracking-[0.35em] text-kodefiz-gray sm:text-[11px]">
          {duplicated}
        </span>
        <span
          className="px-4 text-[10px] font-medium uppercase tracking-[0.35em] text-kodefiz-gray sm:text-[11px]"
          aria-hidden
        >
          {duplicated}
        </span>
      </div>
    </div>
  );
};

const ScrollIndicator = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.6 }}
      aria-hidden
    >
      <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-kodefiz-black/20 p-1 dark:border-white/20">
        <motion.div
          className="h-1.5 w-1 rounded-full bg-kodefiz-blue"
          animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
      <motion.div
        animate={prefersReducedMotion ? undefined : { y: [0, 4, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }
        }
      >
        <ChevronDown className="h-4 w-4 text-kodefiz-gray" strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
};

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden bg-kodefiz-white font-kodefiz dark:bg-kodefiz-dark">
      <FloatingShapes />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-5 pb-28 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
        <div className="flex flex-1 flex-col justify-center lg:max-w-5xl">
          <motion.p
            className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-kodefiz-blue sm:mb-6 sm:text-[11px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Software . Innovation . Scale
          </motion.p>

          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-kodefiz-black dark:text-white">
            <span className="block">
              <AnimatedText as="span" text="We Engineer" delay={0.15} />
            </span>
            <span className="mt-1 block sm:mt-2">
              <AnimatedText as="span" text="Digital" delay={0.4} />
              {" "}
              <span className="relative inline-block text-kodefiz-blue">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
                >
                  Growth
                </motion.span>
                <LightningUnderline />
              </span>
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-kodefiz-gray sm:mt-8 sm:text-lg dark:text-white/55"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
          >
            Kodefiz partners with ambitious brands to design, build, and scale software that
            moves markets — from concept to cloud-native deployment.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
          >
            <MagneticButton href="/contact" ariaLabel="Start a project">
              <span className="inline-flex items-center bg-kodefiz-black px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white shadow-[0_0_0_rgba(47,140,255,0)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(47,140,255,0.35)] dark:bg-white dark:text-kodefiz-black">
                Start a Project
              </span>
            </MagneticButton>

            <Link
              href="/work"
              className="group inline-flex items-center gap-3 border border-kodefiz-black/15 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-kodefiz-black transition-all duration-300 hover:border-kodefiz-blue hover:text-kodefiz-blue dark:border-white/20 dark:text-white dark:hover:border-kodefiz-blue dark:hover:text-kodefiz-blue"
              aria-label="View our work"
            >
              View Our Work
              <motion.span
                className="inline-flex"
                whileHover={prefersReducedMotion ? undefined : { x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </motion.span>
            </Link>
          </motion.div>

          <motion.div
            className="mt-16 hidden items-end gap-16 border-t border-black/[0.06] pt-10 lg:flex dark:border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            {[
              { value: "120+", label: "Projects Shipped" },
              { value: "98%", label: "Client Retention" },
              { value: "24/7", label: "Global Delivery" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold tracking-tight text-kodefiz-black dark:text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-kodefiz-gray">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-auto">
          <MarqueeStrip />
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default Hero;
