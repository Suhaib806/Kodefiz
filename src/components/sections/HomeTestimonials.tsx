import { ArrowLeft, ArrowRight, Play, Quote, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    company: "Healthcare Startup",
    name: "Michael Carter",
    role: "Founder & CEO",
    review:
      "Kodefiz became an extension of our company. They helped us build an entire remote development team in less than two weeks, and the quality exceeded every expectation.",
    result: "65% faster hiring",
    video: false,
  },
  {
    id: 2,
    company: "Marketing Agency",
    name: "Sarah Williams",
    role: "Managing Director",
    review:
      "We finally found a technology partner we can rely on. Communication was excellent, deadlines were always met, and the entire experience felt seamless.",
    result: "6 → 18 team members",
    video: true,
  },
  {
    id: 3,
    company: "SaaS Company",
    name: "David Thompson",
    role: "Product Manager",
    review:
      "Their developers integrated perfectly with our internal team. It never felt like outsourcing—it felt like hiring in-house experts.",
    result: "40% faster delivery",
    video: false,
  },
  {
    id: 4,
    company: "E-commerce Brand",
    name: "James Anderson",
    role: "Co-Founder",
    review:
      "The team understood what we needed from day one. They were proactive, responsive, and consistently delivered work that moved the business forward.",
    result: "32% growth in conversions",
    video: false,
  },
];

export default function HomeTestimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-[#132F48] text-white py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="w-full px-5 sm:px-8 lg:px-16">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">

          <div className="max-w-3xl">

            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 sm:w-10 h-px bg-[#F76F01]" />

              <span className="uppercase tracking-[0.28em] text-[11px] sm:text-xs text-white/50 font-medium">
                Testimonials
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold leading-[1] tracking-tight">
              What our
              <br />
              <span className="text-[#F76F01]">
                clients say.
              </span>
            </h2>

          </div>

          {/* Description + controls */}

          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-end lg:items-end gap-6">

            <p className="max-w-md text-sm sm:text-base text-white/60 leading-7 lg:text-right">
              Real feedback from businesses we've helped build,
              grow, and scale through technology.
            </p>

            {/* Carousel Controls */}

            <div className="flex items-center gap-2">

              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canPrev}
                aria-label="Previous testimonial"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/15
                  flex items-center justify-center
                  text-white/70
                  transition-all duration-300
                  hover:border-[#F76F01]
                  hover:text-[#F76F01]
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                "
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!canNext}
                aria-label="Next testimonial"
                className="
                  w-11 h-11
                  rounded-full
                  border border-white/15
                  flex items-center justify-center
                  text-white/70
                  transition-all duration-300
                  hover:border-[#F76F01]
                  hover:text-[#F76F01]
                  disabled:opacity-30
                  disabled:cursor-not-allowed
                "
              >
                <ArrowRight size={17} />
              </button>

            </div>

          </div>

        </div>

        {/* ================= CAROUSEL ================= */}

        <div
          ref={emblaRef}
          className="overflow-hidden"
        >

          <div className="flex -ml-4">

            {testimonials.map((item) => (

              <div
                key={item.id}
                className="
                  flex-[0_0_100%]
                  sm:flex-[0_0_50%]
                  lg:flex-[0_0_33.333%]
                  min-w-0
                  pl-4
                "
              >

                {/* ================= CARD ================= */}

                <article
                  className="
                    relative
                    h-full
                    min-h-[410px]
                    rounded-2xl
                    border border-white/10
                    bg-white/[0.045]
                    p-7 sm:p-8
                    flex flex-col
                    transition-all duration-300
                    hover:border-white/20
                    hover:bg-white/[0.07]
                  "
                >

                  {/* Quote */}

                  <div className="absolute top-7 right-7 text-white/[0.08]">
                    <Quote
                      size={42}
                      strokeWidth={1.3}
                    />
                  </div>

                  {/* Rating */}

                  <div className="flex gap-1 mb-7">

                    {Array.from({ length: 5 }).map((_, index) => (

                      <Star
                        key={index}
                        size={15}
                        className="fill-[#F76F01] text-[#F76F01]"
                      />

                    ))}

                  </div>

                  {/* Company */}

                  <div className="mb-5">

                    <span
                      className="
                        inline-flex
                        items-center
                        rounded-full
                        border border-white/10
                        px-3 py-1
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-white/50
                      "
                    >
                      {item.company}
                    </span>

                  </div>

                  {/* Review */}

                  <p className="text-[15px] sm:text-[16px] leading-7 text-white/75">
                    "{item.review}"
                  </p>

                  {/* Spacer */}

                  <div className="flex-1" />

                  {/* Result */}

                  <div className="pt-7 mb-6 border-t border-white/10">

                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/35 mb-2">
                      Result
                    </div>

                    <div className="text-sm font-semibold text-[#F76F01]">
                      {item.result}
                    </div>

                  </div>

                  {/* Person */}

                  <div className="flex items-center justify-between gap-4">

                    <div>

                      <h3 className="text-sm sm:text-base font-semibold text-white">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/45 mt-1">
                        {item.role}
                      </p>

                    </div>

                    {/* Video */}

                    {item.video && (

                      <button
                        type="button"
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          border border-white/10
                          px-3 py-2
                          text-xs
                          text-white/70
                          hover:border-[#F76F01]
                          hover:text-[#F76F01]
                          transition-colors
                        "
                      >
                        <Play
                          size={12}
                          fill="currentColor"
                        />

                        Video
                      </button>

                    )}

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>

        {/* ================= BOTTOM INDICATOR ================= */}

        <div className="flex items-center justify-between mt-8">

          <div className="flex items-center gap-2">

            <span className="w-8 h-px bg-[#F76F01]" />

            <span className="text-[11px] uppercase tracking-[0.2em] text-white/35">
              Client stories
            </span>

          </div>

          <div className="text-xs text-white/30">
            {testimonials.length} testimonials
          </div>

        </div>

      </div>
    </section>
  );
}