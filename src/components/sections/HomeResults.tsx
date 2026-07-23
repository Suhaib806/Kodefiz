const stats = [
  {
    value: "98%",
    label: "Client Retention",
  },
  {
    value: "15+",
    label: "Countries Served",
  },
  {
    value: "7 Days",
    label: "Average Hiring",
  },
];

const HomeResults = () => {
  return (
    <section className="relative overflow-hidden py-28 px-6 lg:px-20 bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-32 h-px w-full bg-gray-200" />
        <div className="absolute right-20 top-10 h-72 w-72 rounded-full bg-orange-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Top Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-10 h-px bg-[#F76F01]" />
          <span className="uppercase tracking-[0.3em] text-xs text-gray-500">
            Results
          </span>
        </div>

        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-16 items-end">

          <div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-[#132F48]">
              Numbers that
              <br />
              build
              <span className="text-[#F76F01]"> trust.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg text-gray-600 leading-8 max-w-xl">
              Every partnership is measured by business impact—not promises.
              From building remote teams to delivering digital solutions, our
              numbers reflect long-term relationships and consistent execution.
            </p>
          </div>

        </div>

        {/* Hero Metric */}
        <div className="mt-24 border-t border-b border-gray-200 py-16">

          <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10">

            <div>

              <div className="text-[140px] md:text-[220px] leading-none font-bold tracking-[-0.08em] text-[#132F48]">
                500+
              </div>

              <h3 className="text-3xl font-semibold text-[#132F48] mt-3">
                Successful Projects
              </h3>

              <p className="text-gray-500 mt-4 max-w-md leading-7">
                Helping startups, agencies, and enterprises build scalable
                websites, applications, AI solutions, and dedicated remote
                teams.
              </p>

            </div>

            <div className="grid grid-cols-3 gap-8 lg:gap-12">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="group cursor-default"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-[#132F48] transition-all duration-300 group-hover:text-[#F76F01]">
                    {item.value}
                  </div>

                  <div className="w-10 h-[2px] bg-[#F76F01] my-4 transition-all duration-300 group-hover:w-20" />

                  <p className="text-gray-500 leading-6">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom Quote */}

        <div className="mt-20 flex flex-col lg:flex-row justify-between items-center gap-10">

          <p className="text-2xl md:text-3xl font-medium text-[#132F48] max-w-3xl leading-relaxed">
            We don't measure success by projects completed.
            <br />
            <span className="text-[#F76F01]">
              We measure it by long-term partnerships.
            </span>
          </p>

          <button className="group inline-flex items-center gap-4 border border-[#132F48] rounded-full px-8 py-4 hover:bg-[#132F48] transition-all duration-300">
            <span className="text-[#132F48] group-hover:text-white font-medium">
              Book a Discovery Call
            </span>

            <div className="w-10 h-10 rounded-full bg-[#F76F01] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
              →
            </div>
          </button>

        </div>

      </div>
    </section>
  );
};

export default HomeResults;