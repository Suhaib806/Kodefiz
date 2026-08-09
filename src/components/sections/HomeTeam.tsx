// NOTE: all four entries below are currently "Suhaib Nazir" with the same
// image (teamImg2/teamImg3/teamImg13 all import the identical 4.png) —
// this looks like a copy-paste placeholder rather than real data. Left
// as-is since real names/photos can't be fabricated here; swap in the
// actual team members before this ships.
import teamImg from "@/assets/team/4.png";
import teamImg2 from "@/assets/team/4.png";
import teamImg3 from "@/assets/team/4.png";
import teamImg13 from "@/assets/team/4.png";

import { ArrowUpRight } from "lucide-react";

const leadership = [
  {
    name: "Suhaib Nazir",
    role: "Founder & CEO",
    image: teamImg,
  },
  {
    name: "Suhaib Nazir",
    role: "Co-Founder",
    image: teamImg2,
  },
  {
    name: "Suhaib Nazir",
    role: "Project Lead",
    image: teamImg3,
  },
  {
    name: "Suhaib Nazir",
    role: "Business Development",
    image: teamImg13,
  },
];

export default function HomeLeadership() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header — updated to the capability-focused copy */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[#F76F01]" />
              <span className="uppercase tracking-[0.35em] text-xs text-gray-500">
                Our Team
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-[#132F48]">
              What We Bring
              <br />
              to the <span className="text-[#F76F01]">Table.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg text-gray-600 leading-8">
              Our core strengths span custom web development, brand and
              UI/UX design, AI-powered video creative, full-funnel digital
              marketing, and workflow automation all under one roof, so
              your digital presence is never a patchwork of mismatched
              pieces.
            </p>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {leadership.map((person) => (
            <div key={person.name} className="group">
              <div className="relative overflow-hidden rounded-3xl bg-[#F4F7FA]">
                <img
                  src={person.image}
                  alt={person.name}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <button className="absolute top-5 right-5 h-12 w-12 rounded-full bg-white flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={20} />
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-[#132F48]">{person.name}</h3>
                <p className="mt-2 text-[#F76F01]">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section — discipline breakdown, ties directly back to
            the new "What We Bring to the Table" framing above */}
        {/* <div className="mt-24 border-t border-gray-200 pt-16">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-[90px] lg:text-[120px] font-bold leading-none tracking-tight text-[#132F48]">
                40+
              </div>
              <h3 className="text-3xl font-semibold mt-4 text-[#132F48]">
                Specialists across multiple disciplines
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-y-8">
              <div>
                <h4 className="font-semibold text-[#132F48]">Engineering</h4>
                <p className="text-gray-500 mt-2">React • Next.js • Laravel • WordPress</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#132F48]">Creative</h4>
                <p className="text-gray-500 mt-2">UI/UX • Branding • Motion Graphics</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#132F48]">Marketing</h4>
                <p className="text-gray-500 mt-2">SEO • PPC • Social Media • Content</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#132F48]">Operations</h4>
                <p className="text-gray-500 mt-2">Accounting • VA • AI • Support</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}