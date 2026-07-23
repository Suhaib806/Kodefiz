"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const shapes = [
  { id: 1, top: "12%", left: "8%", size: 48, rotate: -15, duration: 14 },
  { id: 2, top: "28%", right: "10%", size: 64, rotate: 25, duration: 18 },
  { id: 3, top: "58%", left: "4%", size: 36, rotate: 10, duration: 16 },
  { id: 4, top: "72%", right: "6%", size: 52, rotate: -20, duration: 20 },
  { id: 5, top: "40%", left: "72%", size: 28, rotate: 35, duration: 12 },
] as const;

const BoltIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden>
    <path
      d="M8 28 L22 28 L18 40 L40 16 L26 16 L30 4 Z"
      stroke="#2F8CFF"
      strokeWidth="1.5"
      strokeLinejoin="miter"
      fill="none"
      opacity="0.35"
    />
  </svg>
);

const FloatingShapes = () => {
  const prefersReducedMotion = useReducedMotion();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 24;
      const y = (event.clientY / window.innerHeight - 0.5) * 24;
      setParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          transform: prefersReducedMotion
            ? undefined
            : `translate(${parallax.x * 0.3}px, ${parallax.y * 0.3}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />

      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute hidden sm:block"
          style={{
            top: "top" in shape ? shape.top : undefined,
            left: "left" in shape ? shape.left : undefined,
            right: "right" in shape ? shape.right : undefined,
            transform: prefersReducedMotion
              ? undefined
              : `translate(${parallax.x * 0.15}px, ${parallax.y * 0.15}px)`,
          }}
          animate={
            prefersReducedMotion
              ? undefined
              : {
                  y: [0, -18, 0],
                  rotate: [shape.rotate, shape.rotate + 8, shape.rotate],
                }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: shape.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <BoltIcon size={shape.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
