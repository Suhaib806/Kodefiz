import {
  Globe2,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const offices = [
  {
    country: "United States",
    city: "New York",
    timezone: "UTC -4",
    team: "Product Team",
    top: "18%",
    left: "18%",
  },
  {
    country: "United Kingdom",
    city: "London",
    timezone: "UTC +1",
    team: "Marketing",
    top: "22%",
    left: "46%",
  },
  {
    country: "UAE",
    city: "Dubai",
    timezone: "UTC +4",
    team: "Automation",
    top: "42%",
    left: "60%",
  },
  {
    country: "Pakistan",
    city: "Lahore",
    timezone: "UTC +5",
    team: "Engineering",
    top: "46%",
    left: "66%",
  },
  {
    country: "Australia",
    city: "Sydney",
    timezone: "UTC +10",
    team: "Support",
    top: "72%",
    left: "84%",
  },
];

export default function HomeGlobalPresence() {
  return (
    <section className="relative overflow-hidden bg-[#081622] py-32 text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-[#F76F01]/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          <div>

            <div className="flex items-center gap-3 mb-6">

              <span className="w-10 h-px bg-[#F76F01]" />

              <span className="uppercase tracking-[0.35em] text-xs text-white/50">
                GLOBAL PRESENCE
              </span>

            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95]">

              Building teams
              <br />

              without
              <span className="text-[#F76F01]"> borders.</span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-white/60 max-w-xl">

              Our distributed specialists collaborate across time zones,
              helping companies worldwide move faster with engineering,
              design, marketing, and automation.

            </p>

          </div>

          <div className="grid grid-cols-3 gap-8">

            {[
              ["120+", "Clients"],
              ["15+", "Countries"],
              ["24/7", "Collaboration"],
            ].map((item) => (

              <div key={item[0]}>

                <div className="text-5xl font-bold text-[#F76F01]">
                  {item[0]}
                </div>

                <div className="text-white/60 mt-2">
                  {item[1]}
                </div>

              </div>

            ))}

          </div>

        </div>

        {/* World Map */}

        <div className="relative rounded-[40px] border border-white/10 bg-white/[0.03] h-[700px] overflow-hidden">

          {/* Grid */}

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Globe */}

          <div className="absolute inset-0 flex items-center justify-center opacity-10">

            <Globe2 size={520} strokeWidth={1} />

          </div>

          {/* Connection Lines */}

          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <line
              x1="20%"
              y1="25%"
              x2="46%"
              y2="28%"
              stroke="#F76F01"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />

            <line
              x1="46%"
              y1="28%"
              x2="60%"
              y2="43%"
              stroke="#F76F01"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />

            <line
              x1="60%"
              y1="43%"
              x2="66%"
              y2="46%"
              stroke="#F76F01"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />

            <line
              x1="66%"
              y1="46%"
              x2="84%"
              y2="72%"
              stroke="#F76F01"
              strokeWidth="1.5"
              strokeDasharray="8 8"
            />
          </svg>

          {/* Floating Cards */}

          {offices.map((office) => (

            <div
              key={office.city}
              className="absolute w-60 rounded-2xl border border-white/10 bg-[#102638]/80 backdrop-blur-xl p-5 shadow-2xl hover:scale-105 transition"
              style={{
                top: office.top,
                left: office.left,
                transform: "translate(-50%, -50%)",
              }}
            >

              <div className="flex items-center justify-between">

                <MapPin
                  className="text-[#F76F01]"
                  size={18}
                />

                <ArrowUpRight
                  className="text-white/40"
                  size={16}
                />

              </div>

              <h3 className="mt-4 text-xl font-semibold">

                {office.city}

              </h3>

              <p className="text-white/40 text-sm">

                {office.country}

              </p>

              <div className="mt-5 h-px bg-white/10" />

              <div className="mt-5 flex justify-between">

                <div>

                  <div className="text-white/40 text-xs">
                    Team
                  </div>

                  <div className="mt-1">
                    {office.team}
                  </div>

                </div>

                <div>

                  <div className="text-white/40 text-xs flex items-center gap-1">

                    <Clock3 size={12} />

                    Time

                  </div>

                  <div className="mt-1">
                    {office.timezone}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom */}

        <div className="mt-20 text-center">

          <h3 className="text-4xl font-bold">

            Wherever your business grows,

            <span className="text-[#F76F01]">
              {" "}we're already there.
            </span>

          </h3>

          <p className="mt-6 text-white/60 text-lg max-w-3xl mx-auto">

            From startups to enterprise teams, we help organizations
            build, scale, and innovate with distributed specialists
            working together across continents.

          </p>

        </div>

      </div>

    </section>
  );
}