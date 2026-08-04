import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Play, Quote } from "lucide-react";



const HeroSection = () => {




  return (
     <section className="relative w-full h-[66vh] sm:h-[72vh] min-h-[430px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/85 via-navy-900/50 to-navy-950/70" />
        </div>

        <div className="relative z-10 h-full w-full px-4 sm:px-6 md:px-12 lg:px-20 pb-10 sm:pb-14 flex items-end">
          <div className="max-w-[620px]">
            <h1 className="mt-8 text-5xl text-white lg:text-7xl font-bold leading-[0.95]">

              Work that
              <br />

              <span className="text-[#F76F01]">
                speaks for itself.
              </span>

            </h1>
            <p className="mt-4 text-white/90 text-[15px] sm:text-[20px] leading-[1.45] max-w-[560px]">
              Explore websites, mobile apps, UI/UX designs,
              branding, social media creatives, videos,
              and digital experiences we've built for
              startups, businesses and enterprises worldwide.
            </p>
          </div>
        </div>
      </section>
  );
};
export default HeroSection;