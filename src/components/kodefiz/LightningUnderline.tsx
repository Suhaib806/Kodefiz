"use client";

import { motion, useReducedMotion } from "framer-motion";

interface LightningUnderlineProps {
  className?: string;
}

const LightningUnderline = ({ className = "" }: LightningUnderlineProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute -bottom-1 left-0 w-full max-w-none sm:-bottom-2 ${className}`}
      aria-hidden
    >
      <motion.path
        d="M0 8 H72 L80 2 L88 10 L96 4 L120 8"
        stroke="#2F8CFF"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        initial={{ pathLength: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          pathLength: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 },
          opacity: { duration: 0.3, delay: 0.8 },
        }}
      />
      <motion.path
        d="M0 8 H72 L80 2 L88 10 L96 4 L120 8"
        stroke="#2F8CFF"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
        opacity="0.15"
        initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          pathLength: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 },
        }}
      />
    </svg>
  );
};

export default LightningUnderline;
