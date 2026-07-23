import {
  Search,
  ClipboardList,
  Rocket,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

const journey = [
  {
    icon: Search,
    stage: "Discovery",
    period: "Week 1",
    title: "We understand before we build.",
    description:
      "Every partnership begins with listening. We take time to understand your business, goals, challenges, and long-term vision before proposing any solution.",
  },
  {
    icon: ClipboardList,
    stage: "Planning",
    period: "Week 2",
    title: "A roadmap tailored to your business.",
    description:
      "Instead of generic proposals, we create a clear execution plan, define priorities, assign specialists, and establish transparent communication.",
  },
  {
    icon: Rocket,
    stage: "Delivery",
    period: "Month 1",
    title: "Focused execution with measurable progress.",
    description:
      "Your dedicated team delivers consistently while keeping you informed through regular updates, milestones, and collaborative feedback.",
  },
  {
    icon: RefreshCcw,
    stage: "Growth",
    period: "Years Later",
    title: "Partnership beyond the launch.",
    description:
      "Many of our clients continue working with us for years as we help them hire more specialists, improve products, automate operations, and scale confidently.",
  },
];

export default function AboutWhyClientsStay() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}

        <div className="max-w-3xl mb-24">

          <div className="flex items-center gap-3 mb-6">

            <span className="w-10 h-px bg-[#F76F01]" />

            <span className="uppercase tracking-[0.35em] text-xs text-slate-500">
              LONG TERM PARTNERSHIPS
            </span>

          </div>

          <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95] text-[#132F48]">

            Great partnerships
            <br />

            don't end after
            <span className="text-[#F76F01]"> delivery.</span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            The best projects evolve into long-term relationships. Here's
            how businesses typically grow with Kodefiz.

          </p>

        </div>

        {/* Journey */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-200 hidden lg:block" />

          <div className="space-y-20">

            {journey.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.stage}
                  className="grid lg:grid-cols-[80px_220px_1fr] gap-10 items-start"
                >
                  {/* Icon */}

                  <div className="relative z-10 h-14 w-14 rounded-full bg-[#132F48] flex items-center justify-center shadow-lg">

                    <Icon className="text-white" size={22} />

                  </div>

                  {/* Stage */}

                  <div>

                    <span className="text-sm uppercase tracking-widest text-[#F76F01]">

                      {step.period}

                    </span>

                    <h3 className="mt-2 text-3xl font-bold text-[#132F48]">

                      {step.stage}

                    </h3>

                  </div>

                  {/* Content */}

                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 hover:border-[#F76F01] hover:shadow-xl transition-all duration-300">

                    <h4 className="text-2xl font-semibold text-[#132F48]">

                      {step.title}

                    </h4>

                    <p className="mt-5 text-slate-600 leading-8">

                      {step.description}

                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Banner */}

        <div className="mt-28 rounded-[32px] bg-[#132F48] p-10 lg:p-16 text-white flex flex-col lg:flex-row items-center justify-between gap-10">

          <div>

            <p className="uppercase tracking-[0.3em] text-xs text-white/50 mb-4">
              CLIENT RETENTION
            </p>

            <h3 className="text-4xl lg:text-5xl font-bold leading-tight">

              Most partnerships
              <br />

              start with one project.

            </h3>

            <p className="mt-6 text-white/70 max-w-2xl leading-8">

              They continue because we consistently deliver value, communicate
              openly, and become an extension of our clients' teams.

            </p>

          </div>

          <div className="text-center">

            <div className="text-7xl font-bold text-[#F76F01]">
              98%
            </div>

            <p className="mt-2 text-white/70">
              Client Retention
            </p>

            <button className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F76F01] px-7 py-4 font-medium hover:scale-105 transition">

              Work With Us

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}