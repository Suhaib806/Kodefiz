import { ArrowRight, CheckCircle2, Sparkles, Layers3, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "@/components/sections/PageHero";
import HomeGetInTouch from "@/components/sections/HomeGetInTouch";
import { ServiceDetail, ServiceSlug, howItWorks, serviceOrder } from "@/data/serviceDetails";

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

const ServiceDetailPage = ({ service }: ServiceDetailPageProps) => {
  const isActive = (slug: ServiceSlug) => slug === service.slug;

  return (
    <>
      <PageHero
        badge={service.number}
        title={service.title}
        description={service.heroIntro}
        useVideo={false}
        imageSrc={service.heroImage}
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
                  {service.heroSubtitle}
                </h2>
                <div className="mt-6 space-y-5">
                  {service.descriptions.map((paragraph) => (
                    <p key={paragraph} className="text-[16px] leading-[1.8] text-[#62728A]">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className={`mt-8 rounded-2xl border border-[#E4E7EB] p-6 ${service.cardTint}`}>
                  <h3 className="text-lg font-semibold text-[#132F48]">What's included</h3>
                  <ul className="mt-5 space-y-3">
                    {service.detailItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] text-[#132F48]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#132F48]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.comprehensiveItems.map((item) => (
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

              <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#F76F01]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#62728A]">Capabilities</span>
                </div>
                <h2 className="mb-8 text-[34px] font-bold leading-[1.08] text-[#132F48] sm:text-[44px]">
                  What you get
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-[#E4E7EB] bg-[#F8F9FA] p-5">
                      <p className="text-sm font-medium text-[#132F48]">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12">
                <h2 className="mb-6 text-[30px] font-bold leading-[1.12] text-[#132F48] sm:text-[38px]">
                  Built for measurable outcomes
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  {service.features.slice(0, 3).map((item, index) => {
                    const icon = index === 0 ? Sparkles : index === 1 ? Layers3 : Rocket;
                    const Icon = icon;
                    return (
                      <div key={item} className="rounded-2xl border border-[#E4E7EB] bg-[#FFF4E8] p-5">
                        <Icon className="h-5 w-5 text-[#F76F01]" />
                        <h3 className="mt-3 text-base font-semibold text-[#132F48]">{item}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#62728A]">
                          Delivered with the same strategic approach we use across every Kodefiz engagement.
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {service.toolHighlights && service.toolHighlights.length > 0 && (
                <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12">
                  <h2 className="mb-6 text-[30px] font-bold leading-[1.12] text-[#132F48] sm:text-[38px]">
                    Tools we work with
                  </h2>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {service.toolHighlights.map((tool) => (
                      <div key={tool.name} className="rounded-2xl border border-[#E4E7EB] bg-[#F8F9FA] p-5">
                        <div className="flex items-center gap-3">
                          <img
                            src={tool.logoUrl}
                            alt={tool.name}
                            className="h-9 w-9 rounded-md border border-[#E4E7EB] bg-white object-contain"
                          />
                          <h3 className="text-lg font-semibold text-[#132F48]">{tool.name}</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-[#62728A]">{tool.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.extraSections?.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12"
                >
                  <h2 className="mb-5 text-[30px] font-bold leading-[1.12] text-[#132F48] sm:text-[38px]">
                    {section.title}
                  </h2>
                  {section.intro && <p className="mb-6 text-[#62728A]">{section.intro}</p>}
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mb-4 text-[16px] leading-[1.8] text-[#62728A]">
                      {paragraph}
                    </p>
                  ))}
                  {section.cards && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      {section.cards.map((card) => (
                        <div key={card.title} className="rounded-2xl border border-[#E4E7EB] bg-[#F8F9FA] p-5">
                          <h3 className="text-base font-semibold text-[#132F48]">{card.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#62728A]">{card.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.points && (
                    <div className="space-y-3">
                      {section.points.map((point) => (
                        <p key={point} className="text-[16px] leading-[1.8] text-[#62728A]">
                          {point}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {service.faqs && service.faqs.length > 0 && (
                <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12">
                  <h2 className="mb-6 text-[30px] font-bold leading-[1.12] text-[#132F48] sm:text-[38px]">
                    Questions?
                  </h2>
                  <div className="space-y-4">
                    {service.faqs.map((faq) => (
                      <div key={faq.question} className="rounded-2xl border border-[#E4E7EB] bg-[#F8F9FA] p-5">
                        <h3 className="text-lg font-semibold text-[#132F48]">{faq.question}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#62728A]">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-[28px] border border-[#E4E7EB] bg-white p-6 sm:p-10 lg:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#F76F01]" />
                  <span className="text-xs uppercase tracking-[0.25em] text-[#62728A]">
                    {howItWorks.badge}
                  </span>
                </div>
                <h2 className="mb-2 text-[34px] font-bold leading-[1.08] text-[#132F48] sm:text-[44px]">
                  {howItWorks.title}
                </h2>
                <p className="mb-8 text-[#62728A]">{howItWorks.subtitle}</p>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {howItWorks.steps.map((step, index) => (
                    <div key={step.title} className="rounded-2xl border border-[#E4E7EB] bg-[#F8F9FA] p-6">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#132F48] text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-[#132F48]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#62728A]">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#E4E7EB] bg-[#F8F9FA] p-6 sm:p-10">
                <h2 className="text-[30px] font-bold leading-[1.1] text-[#132F48] sm:text-[38px]">
                  {service.advantageTitle}
                </h2>
                <p className="mt-4 max-w-[850px] text-[16px] leading-[1.8] text-[#62728A]">
                  {service.advantageDescription}
                </p>
                <div className="mt-6">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 rounded-full bg-[#F76F01] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Book a Free Strategy Call
                  </Link>
                </div>
              </div>
            </div>

            <aside className="sticky top-28 hidden lg:block">
              <div className="rounded-[18px] border border-[#E4E7EB] bg-[#F8F9FA] p-6">
                <h3 className="mb-5 text-[32px] font-semibold leading-[1.1] text-[#132F48]">All Services</h3>
                <div className="space-y-3">
                  {serviceOrder.map((serviceLink) => (
                    <Link
                      key={serviceLink.slug}
                      to={`/services/${serviceLink.slug}`}
                      className={`group flex items-center justify-between rounded-full px-5 py-4 text-[18px] leading-none transition-colors ${
                        isActive(serviceLink.slug)
                          ? "bg-[#F76F01] text-white"
                          : "bg-white text-[#132F48] hover:bg-[#EEF1F3]"
                      }`}
                    >
                      <span>{serviceLink.label}</span>
                      <ArrowRight
                        className={`h-5 w-5 ${isActive(serviceLink.slug) ? "text-white" : "text-[#132F48]"}`}
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

export default ServiceDetailPage;
