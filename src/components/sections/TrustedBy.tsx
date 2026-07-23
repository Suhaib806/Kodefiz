import { trustedLogos } from "@/data/trustedLogos";

interface TrustedByProps {
  variant?: "light" | "dark";
  className?: string;
}

const TrustedBy = ({ variant = "light", className = "" }: TrustedByProps) => {
  const logos = [...trustedLogos, ...trustedLogos];
  const isDark = variant === "dark";

  return (
    <section
      className={`relative z-20 ${
        isDark
          ? "bg-transparent pb-10"
          : "mt-8 border border-dashed border-navy-200 bg-white"
      } ${className}`}
    >
      <div className={isDark ? "px-4 sm:px-6" : "px-4 py-4 sm:px-6 md:px-12"}>
        {isDark ? (
          <div className="mx-auto max-w-[1440px]">
            <p className="mb-6 text-center font-atraen text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80 sm:mb-8 sm:text-xs">
              Our Trusted Partners
            </p>

            <div
              className="relative overflow-hidden"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              }}
            >
              <div
                className="flex items-center gap-12 whitespace-nowrap sm:gap-16 md:gap-20"
                style={{
                  animation: "trustedByMarquee 55s linear infinite",
                  width: "max-content",
                  willChange: "transform",
                }}
              >
                {logos.map((logo, i) => (
                  <div
                    key={`${logo.alt}-${i}`}
                    className="flex h-[36px] shrink-0 items-center justify-center sm:h-[40px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-[32px] w-auto max-w-[min(140px,24vw)] object-contain opacity-70 brightness-0 invert sm:max-h-[36px]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
            <div className="flex items-start gap-3 text-[16px] font-medium uppercase leading-[24px] tracking-[0.01em] text-navy-950">
              <span className="mt-1 text-navy-950">*</span>
              <div className="flex flex-col">
                <span>WE&apos;VE DONE 500+ ENTERPRISE AND</span>
                <span>BUSINESS CONSULTING</span>
              </div>
            </div>

            <div className="relative w-full overflow-hidden md:flex-1">
              <div
                className="flex items-center gap-10 whitespace-nowrap md:gap-14"
                style={{
                  animation: "trustedByMarquee 55s linear infinite",
                  width: "max-content",
                  willChange: "transform",
                }}
              >
                {logos.map((logo, i) => (
                  <div
                    key={`${logo.alt}-${i}`}
                    className="flex h-[44px] shrink-0 items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-[40px] w-auto max-w-[min(160px,28vw)] object-contain opacity-80 transition-opacity hover:opacity-100"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustedBy;
