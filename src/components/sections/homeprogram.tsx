import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { packageList } from "@/data/packages";

const ProgramSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  return (
    <section className="relative overflow-hidden bg-[#132F48] py-20 text-white sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full bg-[#F76F01]/10 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#F76F01]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-5 sm:px-6 md:px-12 lg:px-20">
        {showHeader && (
          <div className="mb-14 grid items-end gap-10 lg:mb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-9 bg-[#F76F01]" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-white/50 sm:text-xs">
                  Our Programs
                </span>
              </div>

              <h2 className="max-w-4xl text-[40px] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-[52px] lg:text-[72px] xl:text-[82px]">
                The right level of
                <br />
                <span className="text-[#F76F01]">support.</span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-xl text-[15px] leading-7 text-white/60 sm:text-[17px] sm:leading-8">
                Every business is at a different stage. Our programs are designed around where you are
                today—and where you want to go next.
              </p>
            </div>
          </div>
        )}

        <div className="border-t border-white/10">
          {packageList.map((program) => (
            <article
              key={program.number}
              className={`group relative border-b border-white/10 transition-all duration-500 ${
                program.featured ? "bg-white/[0.045]" : "hover:bg-white/[0.025]"
              }`}
            >
              <div
                className={`absolute left-0 top-0 h-full w-[2px] origin-top bg-[#F76F01] transition-transform duration-500 ${
                  program.featured ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                }`}
              />

              <div className="grid gap-7 py-9 pl-4 sm:py-11 sm:pl-6 lg:grid-cols-[90px_1.1fr_1.4fr_220px] lg:gap-10 lg:py-12 lg:pl-8">
                <div className="flex items-start">
                  <span
                    className={`text-sm tracking-widest transition-colors duration-300 ${
                      program.featured ? "text-[#F76F01]" : "text-white/35 group-hover:text-[#F76F01]"
                    }`}
                  >
                    {program.number}
                  </span>
                </div>

                <div>
                  <div className="mb-2 text-[11px] uppercase tracking-[0.22em] text-white/35">{program.label}</div>
                  <h3
                    className={`text-[30px] leading-none tracking-[-0.025em] transition-colors duration-300 sm:text-[38px] lg:text-[44px] ${
                      program.featured ? "text-white" : "text-white group-hover:text-[#F76F01]"
                    }`}
                  >
                    {program.name}
                  </h3>
                </div>

                <div>
                  <p className="max-w-xl text-[14px] leading-7 text-white/55 transition-colors group-hover:text-white/70 sm:text-[15px]">
                    {program.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {program.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-white/45 sm:text-sm">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#F76F01]/50">
                          <Check className="h-2.5 w-2.5 text-[#F76F01]" strokeWidth={2.5} />
                        </span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center lg:justify-end">
                  <Link
                    to={`/packages/${program.slug}`}
                    className={`group/cta inline-flex items-center gap-3 text-sm font-medium transition-colors ${
                      program.featured ? "text-[#F76F01]" : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span>Explore program</span>
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                        program.featured
                          ? "border-[#F76F01] bg-[#F76F01] text-white"
                          : "border-white/20 group-hover/cta:border-[#F76F01] group-hover/cta:text-[#F76F01]"
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                    </span>
                  </Link>
                </div>
              </div>

              {program.featured && (
                <div className="absolute right-6 top-5 hidden sm:block">
                  <span className="rounded-full border border-[#F76F01]/30 bg-[#F76F01]/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#F76F01]">
                    Most Complete
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-7 rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:mt-16 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[#F76F01]">Not sure where to start?</p>
            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s find the right program for you.
            </h3>
            <p className="mt-2 text-sm text-white/50">
              Tell us where your business is today and we&apos;ll recommend the right starting point.
            </p>
          </div>

          <Link
            to="/contact-us"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#F76F01] px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#ff7d12] sm:px-7"
          >
            Book a Free Strategy Call
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
