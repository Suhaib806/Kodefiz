import { ArrowRight, Play, Quote, Star } from "lucide-react";

const testimonials = [
  {
    company: "Healthcare Startup",
    name: "Michael Carter",
    role: "Founder & CEO",
    review:
      "Kodefiz became an extension of our company. They helped us build an entire remote development team in less than two weeks, and the quality exceeded every expectation.",
    result: "Reduced hiring time by 65%",
    video: false,
  },
  {
    company: "Marketing Agency",
    name: "Sarah Williams",
    role: "Managing Director",
    review:
      "We finally found a technology partner we can rely on. Communication was excellent, deadlines were always met, and the entire experience felt seamless.",
    result: "Scaled from 6 to 18 team members",
    video: true,
  },
  {
    company: "SaaS Company",
    name: "David Thompson",
    role: "Product Manager",
    review:
      "Their developers integrated perfectly with our internal team. It never felt like outsourcing—it felt like hiring in-house experts.",
    result: "40% faster product delivery",
    video: false,
  },
  {
    company: "SaaS Company",
    name: "David Thompson",
    role: "Product Manager",
    review:
      "Their developers integrated perfectly with our internal team. It never felt like outsourcing—it felt like hiring in-house experts.",
    result: "40% faster product delivery",
    video: false,
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-[#132F48] text-white py-28 overflow-hidden">
      <div className="  px-6 lg:px-12">

        {/* Header */}

        <div className="grid lg:grid-cols-2 gap-20 items-end">

          <div>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#F76F01]" />
              <span className="uppercase tracking-[0.35em] text-xs text-white/60">
                Testimonials
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95]">
              Trusted by
              <br />
              businesses
              <span className="text-[#F76F01]"> worldwide.</span>
            </h2>

          </div>

          <div>

            <p className="text-white/70 leading-8 text-lg">
              Long-term partnerships are built on trust, communication,
              and consistent delivery. Here's what our clients say
              after working with Kodefiz.
            </p>

          </div>

        </div>

        {/* Featured Quote */}

        <div className="mt-24 rounded-[40px] max-w-7xl  bg-white text-[#132F48] p-10 lg:p-16 relative overflow-hidden">

          <Quote
            size={180}
            className="absolute right-8 top-4 opacity-5"
          />

          <div className="max-w-4xl">

            <div className="flex gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="fill-[#F76F01] text-[#F76F01]"
                  size={22}
                />
              ))}
            </div>

            <p className="text-3xl lg:text-5xl leading-tight font-medium">
              "{testimonials[0].review}"
            </p>

            <div className="mt-12 flex justify-between items-end flex-wrap gap-8">

              <div>

                <h3 className="text-2xl font-semibold">
                  {testimonials[0].name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {testimonials[0].role}
                </p>

                <p className="text-[#F76F01] mt-2 font-medium">
                  {testimonials[0].company}
                </p>

              </div>

              <div>

                <div className="text-5xl font-bold">
                  65%
                </div>

                <div className="text-gray-500 mt-2">
                  Faster Hiring
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Stories */}

        <div className="grid md:grid-cols-4 gap-8 mt-20">

        {testimonials.map((item) => (
  <article
    key={item.name}
    className="group relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#F76F01] hover:bg-white/10"
  >
    {/* Quote Icon */}
    <div className="absolute top-6 right-6 text-white/10">
      <Quote size={46} strokeWidth={1.5} />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-6">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-[#F76F01] text-[#F76F01]"
        />
      ))}
    </div>

    {/* Review */}
    <p className="text-white/85 leading-7 text-[15px] min-h-[180px]">
      "{item.review}"
    </p>

    {/* Divider */}
    <div className="my-8 h-px bg-white/10" />

    {/* Person */}
    <div>
      <h3 className="text-lg font-semibold">
        {item.name}
      </h3>

      <p className="text-sm text-white/60 mt-1">
        {item.role}
      </p>

      <p className="text-[#F76F01] text-sm mt-2">
        {item.company}
      </p>
    </div>

    {/* Result */}

    <div className="mt-8 flex items-center justify-between">

      <span className="text-xs uppercase tracking-widest text-white/40">
        Result
      </span>

      <span className="font-semibold text-[#F76F01]">
        {item.result}
      </span>

    </div>

    {/* Video Badge */}

    {item.video && (
      <button className="mt-8 flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#F76F01] transition">
        <Play size={16} fill="currentColor" />
        Watch Video
      </button>
    )}
  </article>
))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 border-t border-white/10 pt-16 flex flex-col lg:flex-row justify-between items-center gap-10">

          <div>

            <h3 className="text-3xl font-semibold">
              Ready to become our next success story?
            </h3>

            <p className="text-white/60 mt-4 max-w-xl">
              Whether you're hiring one specialist or building an entire remote team,
              we're here to help you scale with confidence.
            </p>

          </div>

          <button className="group flex items-center gap-4 rounded-full bg-[#F76F01] px-8 py-4 font-medium hover:scale-105 transition">

            Book a Discovery Call

            <ArrowRight className="group-hover:translate-x-1 transition" />

          </button>

        </div>

      </div>
    </section>
  );
}