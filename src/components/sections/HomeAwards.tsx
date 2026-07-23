"use client";

import { useState } from "react";

const industries = [
  {
    number: "01",
    title: "Healthcare",
    description:
      "Scale your healthcare organization with HIPAA-conscious developers, virtual assistants, patient support teams, billing specialists, and healthcare marketers.",
  },
  {
    number: "02",
    title: "SaaS & Technology",
    description:
      "Dedicated software engineers, UI/UX designers, QA specialists, DevOps engineers, AI experts, and product teams that accelerate innovation.",
  },
  {
    number: "03",
    title: "Real Estate",
    description:
      "Transaction coordinators, CRM specialists, lead generation experts, marketing teams, and virtual assistants for growing real estate businesses.",
  },
  {
    number: "04",
    title: "E-Commerce",
    description:
      "Shopify developers, PPC experts, SEO specialists, customer support teams, inventory managers, and conversion-focused designers.",
  },
  {
    number: "05",
    title: "Finance & Accounting",
    description:
      "Bookkeepers, accountants, payroll specialists, financial analysts, CPAs, and reporting professionals that keep businesses running smoothly.",
  },
  {
    number: "06",
    title: "Marketing Agencies",
    description:
      "Scale your agency with dedicated developers, designers, copywriters, project managers, media buyers, and SEO specialists.",
  },
];

export default function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#132F48] text-white py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-white/5 blur-[140px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-[430px_1fr] gap-24">

          {/* LEFT */}

          <div className="lg:sticky lg:top-32 h-fit">

            <div className="flex items-center gap-3 mb-8">

              <div className="w-10 h-px bg-[#F76F01]" />

              <span className="uppercase tracking-[0.35em] text-xs text-white/60">
                Industries
              </span>

            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight">

              Built for
              <br />

              every
              <span className="text-[#F76F01]"> industry.</span>

            </h2>

            <p className="mt-8 text-white/70 text-lg leading-8 max-w-md">

              Every business has different challenges.
              We build dedicated remote teams with the
              skills, experience, and workflows your
              industry actually needs.

            </p>

            {/* Active Number */}

            <div className="mt-20">

              <div className="text-[140px] md:text-[170px] font-bold leading-none text-white/10 transition-all duration-500">

                {industries[active].number}

              </div>

              <h3 className="text-3xl font-semibold -mt-16">

                {industries[active].title}

              </h3>

              <p className="mt-6 text-white/70 leading-8">

                {industries[active].description}

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            {industries.map((item, index) => (

              <div
                key={item.title}
                onMouseEnter={() => setActive(index)}
                className="group border-b border-white/10 py-10 cursor-pointer transition-all duration-500"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <div
                      className={`text-sm mb-3 transition-all duration-300 ${
                        active === index
                          ? "text-[#F76F01]"
                          : "text-white/30"
                      }`}
                    >

                      {item.number}

                    </div>

                    <h3
                      className={`text-3xl md:text-4xl lg:text-5xl font-semibold transition-all duration-500 ${
                        active === index
                          ? "text-white translate-x-3"
                          : "text-white/40"
                      }`}
                    >

                      {item.title}

                    </h3>

                  </div>

                  <div
                    className={`text-5xl transition-all duration-500 ${
                      active === index
                        ? "translate-x-3 text-[#F76F01]"
                        : "text-white/20"
                    }`}
                  >

                    →

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}