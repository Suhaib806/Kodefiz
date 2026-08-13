
const beliefs = [
  {
    number: "01",
    title: "Great businesses deserve great teams.",
    description:
      "We believe exceptional companies are built by exceptional people. That's why we focus on providing dedicated specialists who become an extension of your business.",
  },
  {
    number: "02",
    title: "Technology should simplify, not complicate.",
    description:
      "Every solution we create is designed to remove friction, automate processes, and help businesses move faster with confidence.",
  },
  {
    number: "03",
    title: "Partnerships outperform transactions.",
    description:
      "We don't measure success by completed projects—we measure it by long-term relationships and the growth of the companies we work with.",
  },
  {
    number: "04",
    title: "Results are the only metric that matters.",
    description:
      "Beautiful design and clean code are important, but meaningful business outcomes are what truly define success.",
  },
];

export default function AboutBeliefs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#132F48] via-[#102A41] to-[#081722] py-28 text-white">

      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#F76F01]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-[220px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}

        <div className="max-w-4xl mb-24">

          <div className="flex items-center gap-3 mb-6">

            <span className="w-10 h-px bg-[#F76F01]" />

            <span className="uppercase tracking-[0.35em] text-xs text-white/60">
              WHAT WE BELIEVE
            </span>

          </div>

          <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95]">

            Our philosophy
            <br />

            shapes every
            <span className="text-[#F76F01]"> partnership.</span>

          </h2>

          <p className="mt-8 text-lg leading-8 text-white/60 max-w-2xl">

            We don't follow trends or chase buzzwords. These principles guide
            every decision we make, every team we build, and every solution we
            deliver.

          </p>

        </div>

        {/* Beliefs */}

        <div className="border-t border-white/10">

          {beliefs.map((item) => (

            <div
              key={item.number}
              className="group grid lg:grid-cols-[180px_1fr_420px] gap-10 items-start border-b border-white/10 py-14 hover:py-16 transition-all duration-500"
            >

              {/* Number */}

              <div className="text-6xl font-bold text-white/10 group-hover:text-[#F76F01] transition">

                {item.number}

              </div>

              {/* Title */}

              <div>

                <h3 className="text-3xl lg:text-4xl font-semibold leading-tight group-hover:text-[#F76F01] transition">

                  {item.title}

                </h3>

              </div>

              {/* Description */}

              <div>

                <p className="text-white/60 leading-8">

                  {item.description}

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Quote */}

        <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="uppercase tracking-[0.3em] text-xs text-white/40">

              OUR COMMITMENT

            </span>

            <h3 className="mt-5 text-4xl lg:text-6xl font-bold leading-tight">

              We don't just
              <br />

              build products.

            </h3>

          </div>

          <div>

            <p className="text-xl leading-9 text-white/60">

              We build trust, create opportunities, and help ambitious
              businesses grow with dedicated teams and technology that makes a
              measurable difference.

            </p>


<a
  href="https://calendly.com/kodefiz1/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-10 rounded-full bg-[#F76F01] px-8 py-4 font-medium text-white transition hover:scale-105">
    Start Your Journey
  </button>
</a>

          </div>

        </div>

      </div>

    </section>
  );
}