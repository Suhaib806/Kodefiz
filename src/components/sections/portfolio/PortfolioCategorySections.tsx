import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { portfolioCategories, type PortfolioProject } from "@/data/portfolioCategories";

/**
 * PORTFOLIO — category sections; hover-to-scroll previews on Web Design only
 * -----------------------------------------------------------------------
 * PERFORMANCE FIX: the previous version rendered each screenshot as a
 * CSS `background-image` on a plain <div>. That looked fine with 1-2
 * projects but caused the page to freeze/stop scrolling once a 3rd was
 * added — because background-images have NO native lazy-loading. Every
 * screenshot (these are large, full-page PNG captures) was being
 * decoded into memory immediately on page load, regardless of whether
 * it was ever scrolled into view. Two large PNGs was borderline; three
 * pushed it into genuinely blocking the main thread, which presents
 * exactly as "stuck, can't scroll."
 *
 * Fix: use a real <img loading="lazy" decoding="async"> instead, so the
 * browser only decodes each screenshot once it's actually near the
 * viewport. The slow pan-on-hover now animates `object-position`
 * (0%/100%) instead of `background-position` — same reliable,
 * percentage-based, no-JS-measurement-needed technique, just on the
 * element that can actually be lazy-loaded.
 *
 * You'll still get the most benefit by compressing/resizing these
 * screenshot PNGs (ideally to ~1600–2000px wide, WebP/JPEG rather than
 * PNG) — lazy-loading defers WHEN a huge image loads, it doesn't make
 * an individually huge file smaller. That's an asset-side fix I can't
 * do for you from here.
 *
 * Web Design only: every other category uses regular (non-full-page)
 * photos, which have nowhere real to "scroll" to, so those keep a
 * plain image with a simple hover zoom instead.
 */

const PortfolioCategorySections = () => {
  return (
    <div className="bg-white">
      {portfolioCategories.map((category, categoryIndex) => (
        <section
          key={category.slug}
          id={category.slug}
          className={`py-20 font-atraen sm:py-24 lg:py-28 ${
            categoryIndex % 2 === 1 ? "bg-[#F8F9FA]" : "bg-white"
          }`}
        >
          <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20">
            <Reveal>
              <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-[#F76F01]" />
                    <span className="text-xs uppercase tracking-[0.25em] text-[#62728A]">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-[#132F48] sm:text-[44px] lg:text-[56px]">
                    {category.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[16px] leading-8 text-[#62728A] sm:text-[17px]">
                    {category.subtitle}
                  </p>
                </div>
                <div className="text-sm font-medium text-[#62728A]">
                  {category.projects.length} projects
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {category.projects.map((project, projectIndex) => (
                <Reveal key={project.id} delay={projectIndex * 0.05}>
                  {category.slug === "web-design" ? (
                    <WebDesignCard project={project} />
                  ) : (
                    <StandardCard project={project} />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

/**
 * Web Design card — full-page screenshot, slow hover pan.
 * State + inline styles, not Tailwind arbitrary classes (see file header).
 */
const WebDesignCard = ({ project }: { project: PortfolioProject }) => {
  const [hovered, setHovered] = useState(false);
  const PAN_DURATION_MS = 20000; // the one number to tune for speed

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group overflow-hidden rounded-[24px] border border-[#E4E7EB] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[#132F48]">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: hovered ? "50% 100%" : "50% 0%",
            transitionProperty: "object-position",
            transitionDuration: `${PAN_DURATION_MS}ms`,
            transitionTimingFunction: "linear",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        </div>
      </div>
    </article>
  );
};

/** Every other category — plain photo, simple hover zoom. */
const StandardCard = ({ project }: { project: PortfolioProject }) => (
  <article className="group overflow-hidden rounded-[24px] border border-[#E4E7EB] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
    <div className="relative aspect-[16/11] overflow-hidden bg-[#132F48]">
      <img
        src={project.image}
        alt={project.alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-4 left-4 right-4">
        <p className="text-xs uppercase tracking-[0.18em] text-white/60">{project.client}</p>
        <h3 className="mt-1 text-xl font-semibold text-white">{project.name}</h3>
      </div>
    </div>

    <div className="p-6">
      <p className="text-[15px] leading-7 text-[#62728A]">{project.description}</p>
      <p className="mt-4 text-sm font-medium text-[#F76F01]">{project.outcome}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#E4E7EB] bg-[#F8F9FA] px-3 py-1 text-xs text-[#132F48]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#132F48] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        View project
        <ArrowUpRight className="h-4 w-4 text-[#F76F01]" />
      </div>
    </div>
  </article>
);

export default PortfolioCategorySections;