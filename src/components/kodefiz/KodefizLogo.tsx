"use client";

import Link from "next/link";

interface KodefizLogoProps {
  className?: string;
  href?: string;
}

const KodefizLogo = ({ className = "h-7 w-auto", href = "/" }: KodefizLogoProps) => {
  const svg = (
    <svg
      viewBox="0 0 180 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Kodefiz"
      role="img"
    >
      <text
        x="0"
        y="24"
        fill="#111111"
        fontFamily="'Space Grotesk', Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        KOD
      </text>
      <text
        x="62"
        y="24"
        fill="#2F8CFF"
        fontFamily="'Space Grotesk', Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        E
      </text>
      <path
        d="M78 8 L84 16 L78 24"
        stroke="#2F8CFF"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        fill="none"
      />
      <text
        x="90"
        y="24"
        fill="#111111"
        fontFamily="'Space Grotesk', Inter, system-ui, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="0.08em"
      >
        FIZ
      </text>
    </svg>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex shrink-0 items-center" aria-label="Kodefiz home">
        {svg}
      </Link>
    );
  }

  return svg;
};

export default KodefizLogo;
