import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/sections/PageHero";
import HomeGetInTouch from "@/components/sections/HomeGetInTouch";
import { PackageDetail, PackageSlug, packageOrder } from "@/data/packages";

type PackageDetailPageProps = {
  pkg: PackageDetail;
};

const PackageDetailPage = ({ pkg }: PackageDetailPageProps) => {
  const isActive = (slug: PackageSlug) => slug === pkg.slug;

  return (
    <>
      <PageHero
        badge={`Program ${pkg.number}`}
        title={
          <>
            {pkg.name}
            <span className="block text-[clamp(1.5rem,3vw,2.5rem)] font-medium text-white/80">
              {pkg.label}
            </span>
          </>
        }
        description={pkg.tagline}
        imageSrc={pkg.heroImage}
      />

      <section className="bg-white py-16 font-atraen sm:py-20 lg:py-24">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
            <div className="space-y-8">
              <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#F76F01]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#62728A]">Overview</span>
                </div>
                <h2 className="text-[34px] font-bold leading-[1.08] text-[#132F48] sm:text-[44px]">
                  {pkg.description}
                </h2>
                <p className="mt-6 text-[16px] leading-[1.8] text-[#62728A]">{pkg.idealFor}</p>
                <p className="mt-4 text-sm font-medium text-[#F76F01]">{pkg.timeline}</p>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {pkg.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-[#E4E7EB] bg-[#F8F9FA] px-4 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F76F01]" />
                      <p className="text-sm text-[#132F48]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#E4E7EB] bg-[#132F48] p-6 text-white sm:p-10 lg:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#F76F01]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-white/50">Deliverables</span>
                </div>
                <h2 className="text-[30px] font-bold leading-[1.12] sm:text-[38px]">What you receive</h2>
                <ul className="mt-8 space-y-4">
                  {pkg.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F76F01]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12">
                <h2 className="mb-6 text-[30px] font-bold leading-[1.12] text-[#132F48] sm:text-[38px]">
                  Expected outcomes
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {pkg.outcomes.map((outcome) => (
                    <div key={outcome} className="rounded-2xl border border-[#E4E7EB] bg-[#FFF4E8] p-5">
                      <p className="text-sm leading-relaxed text-[#132F48]">{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12">
                <h2 className="mb-6 text-[30px] font-bold leading-[1.12] text-[#132F48] sm:text-[38px]">
                  Services included
                </h2>
                <div className="flex flex-wrap gap-3">
                  {pkg.servicesIncluded.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[#E4E7EB] bg-[#F8F9FA] px-4 py-2 text-sm text-[#132F48]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#F76F01]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#62728A]">Process</span>
                </div>
                <h2 className="mb-8 text-[30px] font-bold leading-[1.12] text-[#132F48] sm:text-[38px]">
                  How this program works
                </h2>
                <div className="space-y-6">
                  {pkg.process.map((step, index) => (
                    <div key={step.title} className="flex gap-5 border-b border-[#E4E7EB] pb-6 last:border-0 last:pb-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#132F48] text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#132F48]">{step.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-[#62728A]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#E4E7EB] bg-[#F8F9FA] p-6 sm:p-10">
                <h2 className="text-[30px] font-bold leading-[1.1] text-[#132F48] sm:text-[38px]">
                  Ready to start with {pkg.name}?
                </h2>
                <p className="mt-4 max-w-[720px] text-[16px] leading-[1.8] text-[#62728A]">
                  Book a free strategy call and we&apos;ll confirm whether {pkg.name} is the right starting point for
                  your business.
                </p>
                <Link
                  to="/contact-us"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F76F01] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  Book a Free Strategy Call
                </Link>
              </div>
            </div>

            <aside className="sticky top-28 hidden lg:block">
              <div className="rounded-[18px] border border-[#E4E7EB] bg-[#F8F9FA] p-6">
                <h3 className="mb-5 text-[32px] font-semibold leading-[1.1] text-[#132F48]">All Programs</h3>
                <div className="space-y-3">
                  {packageOrder.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/packages/${item.slug}`}
                      className={`group flex items-center justify-between rounded-full px-5 py-4 text-[18px] leading-none transition-colors ${
                        isActive(item.slug)
                          ? "bg-[#F76F01] text-white"
                          : "bg-white text-[#132F48] hover:bg-[#EEF1F3]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight
                        className={`h-5 w-5 ${isActive(item.slug) ? "text-white" : "text-[#132F48]"}`}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <HomeGetInTouch />
    </>
  );
};

export default PackageDetailPage;