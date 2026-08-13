import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import TrustedBy from "./TrustedBy";

const services = [
  "Webflow Automation",
  "Brand Identity",
  "AI Content Creation",
  "Content & Creative",
];

const Hero = () => {
  return (
    <section className="relative isolate w-full overflow-hidden bg-black font-atraen">
      {/* Background image / video */}
      <div className="absolute inset-0" aria-hidden>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
        >
          <source src="/main.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_35%,rgba(255,90,20,0.35),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10  flex min-h-[90svh] w-full flex-col justify-center px-5 pt-28 pb-0 sm:px-8 lg:px-12">
        {/* Badge */}
        <Reveal>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:text-xs">
            <span>AI</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span>Innovation</span>
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span>Scale</span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={0.08}>
          <h1 className="mt-6 w-full font-atraen text-[clamp(2.25rem,6vw,6rem)] font-bold leading-[0.98] tracking-[-0.02em] text-white">
         Your Digital Presence
            <br />
        Built as One <span className="text-primary">System</span>
          </h1>
        </Reveal>

        {/* Bottom content: description/CTA left, services right */}
        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-1 flex-col justify-end gap-10 pb-10 sm:flex-row sm:items-end sm:justify-between sm:pb-14">
            <div className="max-w-[760px]">
              <p className="text-[14px] leading-[1.7] text-white/70 sm:text-[18px]">
                We design websites, creative, and marketing systems that turn visibility into consistent leads and revenue trusted by businesses who were tired of stitching together freelancers.
              </p>

              <Link
                to="https://calendly.com/kodefiz1/30min"
                className="group mt-6 inline-flex items-center gap-2"
                aria-label="Book Free Strategy Call — contact us"
              >
                <span className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-medium tracking-[-0.01em] text-black transition-colors duration-300 group-hover:bg-white/90">
                  Book a Free Strategy Call
                </span>
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f76f01] text-white transition-colors duration-300 group-hover:bg-[#132F48]">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
                </span>
              </Link>
            </div>

            {/* <ul className="flex flex-col items-start gap-3 text-left sm:items-end sm:text-right">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-[13px] font-bold uppercase tracking-wide text-white sm:text-sm"
                >
                  {service}
                </li>
              ))}
            </ul> */}
          </div>
        </Reveal>
      </div>

      {/* Trusted partners slider — bottom of hero */}
      <TrustedBy variant="dark" className="relative z-10" />
    </section>
  );
};

export default Hero;
