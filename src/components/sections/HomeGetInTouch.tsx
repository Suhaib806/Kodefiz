import { ArrowRight, CalendarDays, Clock3, ShieldCheck } from "lucide-react";

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#F76F01]/10 blur-[140px]" />
      <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-[#132F48]/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        <div className="rounded-[42px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* LEFT */}

            <div className="p-10 lg:p-16 flex flex-col justify-between">

              <div>

                <div className="flex items-center gap-3 mb-6">

                  <span className="h-px w-10 bg-[#F76F01]" />

                  <span className="uppercase tracking-[0.35em] text-xs text-slate-500">
                    Discovery Call
                  </span>

                </div>

                <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95] text-[#132F48]">

                  Let's build your
                  <br />

                  <span className="text-[#F76F01]">
                    next success story.
                  </span>

                </h2>

                <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">

                  Whether you need one specialist or an entire remote team,
                  we'll help you build a solution tailored to your business
                  goals.

                </p>

              </div>

              {/* Trust */}

              <div className="mt-16 grid grid-cols-2 gap-8">

                <div>
                  <div className="text-4xl font-bold text-[#132F48]">
                    500+
                  </div>

                  <p className="mt-2 text-slate-500">
                    Successful Projects
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-[#132F48]">
                    98%
                  </div>

                  <p className="mt-2 text-slate-500">
                    Client Retention
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-[#132F48]">
                    15+
                  </div>

                  <p className="mt-2 text-slate-500">
                    Countries Served
                  </p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-[#132F48]">
                    50+
                  </div>

                  <p className="mt-2 text-slate-500">
                    Experts Available
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative bg-[#132F48] p-10 lg:p-16 text-white flex flex-col justify-center">

              <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-[#F76F01]/20 blur-[100px]" />

              <div className="relative">

                <h3 className="text-3xl font-semibold">

                  Your Discovery Call Includes

                </h3>

                <div className="mt-10 space-y-7">

                  <div className="flex items-start gap-4">

                    <CalendarDays className="text-[#F76F01]" />

                    <div>

                      <h4 className="font-semibold">
                        Free Strategy Session
                      </h4>

                      <p className="text-white/60 mt-2">
                        Understand your goals and define the right roadmap.
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <Clock3 className="text-[#F76F01]" />

                    <div>

                      <h4 className="font-semibold">
                        30 Minute Consultation
                      </h4>

                      <p className="text-white/60 mt-2">
                        No pressure. Just practical advice for your business.
                      </p>

                    </div>

                  </div>

                  <div className="flex items-start gap-4">

                    <ShieldCheck className="text-[#F76F01]" />

                    <div>

                      <h4 className="font-semibold">
                        Tailored Growth Plan
                      </h4>

                      <p className="text-white/60 mt-2">
                        Receive expert recommendations based on your needs.
                      </p>

                    </div>

                  </div>

                </div>

                <button className="group mt-14 inline-flex items-center gap-4 rounded-full bg-[#F76F01] px-8 py-5 text-lg font-semibold transition hover:scale-105">

                  Book My Discovery Call

                  <ArrowRight className="transition group-hover:translate-x-1" />

                </button>

                <p className="mt-6 text-sm text-white/50">

                  No commitment • Free consultation • Response within 24 hours

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}