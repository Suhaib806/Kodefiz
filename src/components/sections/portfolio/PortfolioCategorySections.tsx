import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  portfolioCategories,
  type PortfolioProject,
} from "@/data/portfolioCategories";

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
            {/* HEADER */}
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

            {/* AI AUTOMATION */}
            {category.slug === "ai-automation" ? (
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                {category.projects.map((project, projectIndex) => (
                  <Reveal key={project.id} delay={projectIndex * 0.05}>
                    <AutomationCard project={project} />
                  </Reveal>
                ))}
              </div>
            ) : (
              /* OTHER CATEGORIES */
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {category.projects.map((project, projectIndex) => (
                  <Reveal key={project.id} delay={projectIndex * 0.05}>
                    {category.slug === "video" ? (
                      <VideoCard project={project} />
                    ) : category.slug === "web-design" ? (
                      <WebDesignCard project={project} />
                    ) : category.slug === "seo-marketing" ? (
                      <SeoAdsCard project={project} />
                    ) : (
                      <StandardCard project={project} />
                    )}
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

/* =========================================================
   AI AUTOMATION CARD
   Images + Videos
   No descriptions
   No tags
========================================================= */

const AutomationCard = ({ project }: { project: PortfolioProject }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoUrl = project.videoUrl;

  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[#E4E7EB]
        bg-white
        shadow-[0_24px_70px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_30px_90px_rgba(15,23,42,0.13)]
      "
    >
      {/* MEDIA */}
      <div
        className="
          relative
          overflow-hidden
          bg-[#132F48]
        "
      >
        {videoUrl ? (
          <div className="relative">
            <video
              src={videoUrl}
              controls
              preload="metadata"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="
                block
                h-auto
                max-h-[620px]
                w-full
                object-contain
                bg-[#132F48]
              "
            />

            {/* Premium video frame */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[28px]
                ring-1
                ring-inset
                ring-white/10
              "
            />

            {/* Small play indicator before video starts */}
            {!isPlaying && (
              <div
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-16
                  w-16
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/15
                  text-white
                  opacity-0
                  backdrop-blur-md
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              >
                <Play className="ml-1 h-6 w-6 fill-white" />
              </div>
            )}
          </div>
        ) : (
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              decoding="async"
              className="
                block
                h-auto
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.025]
              "
            />

            {/* Subtle premium gradient */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#132F48]/25
                via-transparent
                to-transparent
                opacity-70
              "
            />

            {/* Image frame */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-[28px]
                ring-1
                ring-inset
                ring-black/5
              "
            />
          </div>
        )}
      </div>

      {/* SMALL LABEL */}
      <div className="flex items-center justify-between px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F76F01]" />

          <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#62728A]">
            AI Automation
          </span>
        </div>

        {videoUrl && (
          <span className="text-xs font-medium text-[#62728A]">Video</span>
        )}
      </div>
    </article>
  );
};

/* =========================================================
   WEB DESIGN CARD
========================================================= */

const WebDesignCard = ({ project }: { project: PortfolioProject }) => {
  const [hovered, setHovered] = useState(false);

  const PAN_DURATION_MS = 20000;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group
        overflow-hidden
        rounded-[24px]
        border
        border-[#E4E7EB]
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
      "
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="pointer-events-none absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        </div>
      </div>
    </article>
  );
};

const SeoAdsCard = ({ project }: { project: PortfolioProject }) => {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-[#E4E7EB] bg-white shadow-[0_20px_60px_rgba(15,47,72,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,47,72,0.13)]">
      {/* Orange/Navy decorative background */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#F76F01]/10 blur-3xl transition-all duration-500 group-hover:bg-[#F76F01]/20" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#132F48]/10 blur-3xl" />

      {/* Screenshot frame */}
      <div className="relative p-3 sm:p-4">
        {/* Browser-style frame */}
        <div className="relative overflow-hidden rounded-[20px] border border-[#E4E7EB] bg-[#F8F9FA] shadow-[0_15px_45px_rgba(15,23,42,0.10)]">
          {/* Small browser bar */}
          <div className="flex h-9 items-center gap-1.5 border-b border-[#E4E7EB] bg-white px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#132F48]/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#F76F01]/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#132F48]/10" />

            <div className="ml-3 h-4 flex-1 rounded-full bg-[#F8F9FA]" />
          </div>

          {/* Actual screenshot */}
          <div className="relative overflow-hidden bg-white">
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            {/* Very subtle glass highlight */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#F76F01]/[0.03]" />
          </div>
        </div>
      </div>

      {/* Orange accent */}
      <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-[2px] origin-left scale-x-0 bg-[#F76F01] transition-transform duration-500 group-hover:scale-x-100" />
    </article>
  );
};
/* =========================================================
   VIDEO & UGC CARD
   No autoplay
   No details
========================================================= */

const VideoCard = ({ project }: { project: PortfolioProject }) => {
  /*
   * Add videoUrl to your project in portfolioCategories.ts
   *
   * videoUrl: "/videos/example.mp4"
   *
   * OR:
   *
   * videoUrl: "https://your-domain.com/video.mp4"
   */

  const videoUrl = (
    project as PortfolioProject & {
      videoUrl?: string;
    }
  ).videoUrl;

  return (
    <article className="group relative overflow-hidden rounded-[24px] border border-[#E4E7EB] bg-[#132F48] shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,23,42,0.14)]">
      <div className="relative aspect-[16/11] overflow-hidden bg-[#132F48]">
        {videoUrl ? (
          <>
            <video
              src={videoUrl}
              controls
              preload="metadata"
              playsInline
              className="h-full w-full object-cover"
            />

            {/* subtle premium frame */}
            <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/10" />
          </>
        ) : project.image ? (
          /*
           * Fallback image if videoUrl hasn't been added yet.
           * This lets you see the card instead of getting a blank box.
           */
          <div className="relative h-full w-full">
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-[#132F48]/20 via-transparent to-[#F76F01]/20" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-2xl backdrop-blur-md">
                <Play className="ml-1 h-6 w-6 fill-white" />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center bg-[#132F48]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
              <Play className="ml-1 h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

/* =========================================================
   STANDARD CARD
========================================================= */

const StandardCard = ({ project }: { project: PortfolioProject }) => {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[24px]
        border
        border-[#E4E7EB]
        bg-white
        shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
      "
    >
      <div className="relative aspect-[16/11] overflow-hidden bg-[#132F48]">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="pointer-events-none absolute bottom-4 left-4 right-4">
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">
            {project.client}
          </p>

          <h3 className="mt-1 text-xl font-semibold text-white">
            {project.name}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-[15px] leading-7 text-[#62728A]">
          {project.description}
        </p>

        <p className="mt-4 text-sm font-medium text-[#F76F01]">
          {project.outcome}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-[#E4E7EB]
                bg-[#F8F9FA]
                px-3
                py-1
                text-xs
                text-[#132F48]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[#132F48]
            opacity-0
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          View project
          <ArrowUpRight className="h-4 w-4 text-[#F76F01]" />
        </div>
      </div>
    </article>
  );
};

export default PortfolioCategorySections;
