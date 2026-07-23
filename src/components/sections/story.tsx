import { ArrowRight } from "lucide-react";

const story = [
  {
    number: "01",
    title: "The Beginning",
    description:
      "Kodefiz was founded with a simple mission: to make world-class technology services accessible to businesses of every size. We started as a small team of passionate developers focused on delivering reliable digital solutions with transparency and quality at the core.",
  },
  {
    number: "02",
    title: "The Challenge",
    description:
      "As we partnered with more companies, one thing became clear—businesses weren't just looking for developers. They needed dependable partners who could understand their vision, communicate clearly, and provide complete teams capable of solving complex business challenges.",
  },
  {
    number: "03",
    title: "The Evolution",
    description:
      "We expanded beyond software development to build multidisciplinary teams of designers, marketers, AI specialists, virtual assistants, accountants, SEO experts, and operations professionals—giving our clients everything they need under one trusted partner.",
  },
  {
    number: "04",
    title: "Where We Are Today",
    description:
      "Today, Kodefiz partners with businesses around the world to build remote teams, launch digital products, automate workflows, and accelerate growth through long-term strategic collaboration—not one-time projects.",
  },
];

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Decorations */}

      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-[#F76F01]/10 blur-[180px]" />
      <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#132F48]/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}

        <div className="max-w-3xl mb-28">

          <div className="flex items-center gap-3 mb-6">

            <span className="w-10 h-px bg-[#F76F01]" />

            <span className="uppercase tracking-[0.35em] text-xs text-slate-500">
              Our Story
            </span>

          </div>

          <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95] text-[#132F48]">

            Built on trust.
            <br />

            Driven by
            <span className="text-[#F76F01]"> growth.</span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600 max-w-2xl">

            Our journey has never been about writing code. It's about helping
            ambitious businesses grow with the right people, the right
            technology, and partnerships that last.

          </p>

        </div>

        {/* Story Blocks */}

        <div className="space-y-28">

          {story.map((item, index) => (

            <div
              key={item.number}
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Number */}

              <div className="relative">

                <div className="text-[180px] lg:text-[240px] font-bold leading-none text-slate-100 select-none">
                  {item.number}
                </div>

                <div className="absolute inset-0 flex items-center">

                  <div>

                    <h3 className="text-4xl lg:text-5xl font-bold text-[#132F48]">
                      {item.title}
                    </h3>

                    <div className="mt-6 h-1 w-20 rounded-full bg-[#F76F01]" />

                  </div>

                </div>

              </div>

              {/* Content */}

              <div>

                <p className="text-lg leading-9 text-slate-600">
                  {item.description}
                </p>

                {index !== story.length - 1 && (

                  <div className="mt-12 flex items-center gap-3 text-[#F76F01] font-semibold">

                    Continue Reading

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />

                  </div>

                )}

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Statement */}

        <div className="mt-32 border-t border-slate-200 pt-20">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="uppercase tracking-[0.3em] text-xs text-slate-500">
                Our Promise
              </span>

              <h3 className="mt-5 text-4xl lg:text-6xl font-bold leading-tight text-[#132F48]">

                We don't just
                <br />

                deliver projects.

              </h3>

            </div>

            <div>

              <p className="text-xl leading-9 text-slate-600">

                We build long-term partnerships that help businesses scale with
                confidence. Every solution, every specialist, and every strategy
                we deliver is focused on creating sustainable business growth.

              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <span className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700">
                  Software Development
                </span>

                <span className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700">
                  Remote Teams
                </span>

                <span className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700">
                  AI & Automation
                </span>

                <span className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700">
                  Digital Growth
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
