"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "span";
  splitBy?: "word" | "line";
  children?: ReactNode;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.08,
      delayChildren: delay,
    },
  }),
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  splitBy = "word",
}: AnimatedTextProps) => {
  const prefersReducedMotion = useReducedMotion();
  const segments = splitBy === "line" ? text.split("\n") : text.split(" ");

  if (prefersReducedMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        className="inline"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        custom={delay}
      >
        {segments.map((segment, index) => (
          <motion.span
            key={`${segment}-${index}`}
            variants={itemVariants}
            className="inline-block"
            style={{ marginRight: splitBy === "word" && index < segments.length - 1 ? "0.28em" : 0 }}
          >
            {segment}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export { containerVariants, itemVariants, reducedVariants };
export default AnimatedText;
