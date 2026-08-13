
import { ArrowRight } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="w-full py-20 lg:py-28">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0B243A] via-[#132F48] to-[#24506E] px-6 py-16 text-center sm:px-10 lg:px-16 lg:py-24">

          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#F76F01]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Let's Work Together
              </span>

              <span className="h-px w-8 bg-[#F76F01]" />
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to Build a Digital Presence That{" "}
              <span className="text-[#F76F01]">
                Actually Performs?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Book a free strategy call and we'll show you exactly where your
              current setup is leaking leads - and how to fix it.
            </p>

            <a
            href="https://calendly.com/kodefiz1/30min"
              type="button"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#F76F01] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#ff7d14] hover:shadow-lg hover:shadow-[#F76F01]/25"
            >
              Book Your Free Strategy Call

              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
