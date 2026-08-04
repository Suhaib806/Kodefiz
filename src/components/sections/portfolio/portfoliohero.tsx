import {
  ArrowRight,
  Globe,
  LayoutDashboard,
  PenTool,
  PlayCircle,
  Smartphone,
} from "lucide-react";

export default function PortfolioHero() {
  const categories = [
    "Website Development",
    "UI/UX Design",
    "Graphic Design",
    "Logo Design",
    "Social Media",
    "Video Editing",
  ];

  return (
    <section className="relative overflow-hidden bg-[#081622] text-white">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#F76F01]/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#F76F01]" />
              Portfolio
            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold leading-[0.95]">

              Work that
              <br />

              <span className="text-[#F76F01]">
                speaks for itself.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70">

              Explore websites, mobile apps, UI/UX designs,
              branding, social media creatives, videos,
              and digital experiences we've built for
              startups, businesses and enterprises worldwide.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="group rounded-full bg-[#F76F01] px-7 py-4 font-semibold transition hover:scale-105">

                View Portfolio

                <ArrowRight className="inline ml-2 h-5 w-5 group-hover:translate-x-1 transition" />

              </button>

              <button className="rounded-full border border-white/15 px-7 py-4 font-semibold hover:bg-white/10 transition">

                Book Discovery Call

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-[520px] hidden lg:block">

            {/* Main Website */}

            <div className="absolute left-8 top-10 w-[340px] rounded-3xl bg-white p-4 shadow-2xl rotate-[-6deg]">

              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">

                <Globe className="w-16 h-16 text-[#132F48]" />

              </div>

              <h3 className="mt-4 font-semibold text-[#132F48]">
                Website Development
              </h3>

            </div>

            {/* UI */}

            <div className="absolute right-0 top-0 w-[240px] rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-4 rotate-[8deg]">

              <div className="aspect-square rounded-2xl bg-[#132F48] flex items-center justify-center">

                <LayoutDashboard className="w-12 h-12 text-[#F76F01]" />

              </div>

              <p className="mt-4 text-white font-medium">
                UI / UX Design
              </p>

            </div>

            {/* Branding */}

            <div className="absolute right-10 bottom-24 w-[220px] rounded-3xl bg-white p-4 shadow-xl rotate-[-8deg]">

              <div className="aspect-square rounded-2xl bg-orange-50 flex items-center justify-center">

                <PenTool className="w-12 h-12 text-[#F76F01]" />

              </div>

              <p className="mt-4 font-semibold text-[#132F48]">
                Branding
              </p>

            </div>

            {/* Video */}

            <div className="absolute left-0 bottom-0 w-[260px] rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-5">

              <div className="aspect-video rounded-2xl bg-[#132F48] flex items-center justify-center">

                <PlayCircle className="w-14 h-14 text-[#F76F01]" />

              </div>

              <p className="mt-4 font-medium">
                Video Editing
              </p>

            </div>

            {/* Mobile */}

            <div className="absolute left-[240px] bottom-10 w-[120px] rounded-[32px] bg-white shadow-2xl p-2">

              <div className="aspect-[9/18] rounded-[24px] bg-gradient-to-br from-slate-200 to-white flex items-center justify-center">

                <Smartphone className="w-8 h-8 text-[#132F48]" />

              </div>

            </div>

          </div>

        </div>

        {/* Category Pills */}

        <div className="mt-24 flex flex-wrap gap-4 justify-center">

          {categories.map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur hover:bg-[#F76F01] hover:border-[#F76F01] transition"
            >
              {item}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}