import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface CollaborateButtonProps {
  size?: "sm" | "lg";
  className?: string;
  label?: string;
}

const CollaborateButton = ({
  size = "sm",
  className = "",
  label = "Let's Collaborate",
}: CollaborateButtonProps) => {
  const isLarge = size === "lg";

  return (
    <Link
      to="/contact-us"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label={`${label} — contact us`}
    >
      <span
        className={`inline-flex items-center justify-center rounded-full bg-white font-medium text-black transition-colors duration-300 group-hover:bg-white/90 ${
          isLarge ? "px-8 py-4 text-[15px] tracking-[-0.01em]" : "px-6 py-3 text-[13px] tracking-[-0.01em]"
        }`}
      >
        {label}
      </span>
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#f76f01] text-white transition-colors duration-300 group-hover:bg-[#132F48] ${
          isLarge ? "h-14 w-14" : "h-11 w-11"
        }`}
      >
        <ArrowUpRight className={isLarge ? "h-5 w-5" : "h-4 w-4"} strokeWidth={2.25} />
      </span>
    </Link>
  );
};

export default CollaborateButton;
