import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Play, Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { FLAME, NAVY, categories, clientStories, checklist, industries, processSteps, projects, techGroups, useReveal } from "./portfolioContent";

const CaseStudyRow = ({ label, text }: { label: string; text: string }) => (
  <div>
    <span className="block text-[12px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: FLAME }}>
      {label}
    </span>
    <p className="text-[15.5px] leading-relaxed text-navy-500">{text}</p>
  </div>
);

export const FeaturedCaseStudy = () => {
  const featured = projects[0];

  return (
    <section className="relative bg-white py-24 lg:py-32 px-5 md:px-12 lg:px-20">
      <Reveal>
        <div className="flex items-center gap-3 mb-12">
          <span className="inline-flex h-[10px] w-[10px] rounded-full bg-brand" />
          <span className="text-xs tracking-[0.22em] font-medium text-navy-400 uppercase">
            Featured Case Study
          </span>
        </div>
      </Reveal>

      <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <div className="max-w-lg">
            <h2 className="font-display font-bold text-navy-950 tracking-tight leading-[1.08] text-[32px] sm:text-[44px] lg:text-[52px] mb-8">
              {featured.tagline}
            </h2>

            <div className="space-y-7 mb-10">
              <CaseStudyRow label="Challenge" text={featured.challenge} />
              <CaseStudyRow label="Solution" text={featured.solution} />
              <CaseStudyRow label="Outcome" text={featured.outcome} />
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="text-[13px] px-3.5 py-1.5 rounded-full border border-navy-200 text-navy-950"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[15px] font-medium text-navy-950 border-b border-navy-950/30 pb-0.5 hover:border-brand hover:text-brand transition-colors"
            >
              Read the full case study
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="hidden lg:block relative mt-16 lg:mt-0">
          <div className="sticky top-28">
            <div
              className="w-full aspect-[4/3] rounded-[32px] shadow-[0_30px_90px_rgba(15,23,42,0.16)] relative overflow-hidden"
              style={{ background: `linear-gradient(155deg, ${featured.gradientFrom} 0%, ${featured.gradientTo} 100%)` }}
            >
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4">
                <p className="text-white text-[14px] font-medium">{featured.name}</p>
                <p className="text-white/60 text-[12px]">{featured.category}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="lg:hidden mt-12 w-full aspect-[4/3] rounded-[28px]"
          style={{ background: `linear-gradient(155deg, ${featured.gradientFrom} 0%, ${featured.gradientTo} 100%)` }}
        />
      </div>
    </section>
  );
};

export const PortfolioShowcase = () => {
  const [active, setActive] = useState("All");
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const measure = () => {
      const item = itemRefs.current[active];
      const nav = navRef.current;
      if (!item || !nav) return;
      const itemRect = item.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      setIndicator({ left: itemRect.left - navRect.left, width: itemRect.width });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="showcase" className="relative bg-white py-24 lg:py-32 px-5 md:px-12 lg:px-20">
      <Reveal>
        <h2 className="font-display font-bold text-navy-950 tracking-tight leading-[1.08] text-[32px] sm:text-[44px] lg:text-[50px] max-w-2xl mb-12">
          A showcase of outcomes, not just screenshots.
        </h2>
      </Reveal>

      <div
        ref={navRef}
        className="relative flex flex-wrap gap-x-8 gap-y-3 border-b border-navy-200 pb-4 mb-14"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            ref={(el) => (itemRefs.current[cat] = el)}
            onClick={() => setActive(cat)}
            className="text-[15px] font-medium transition-colors duration-300"
            style={{ color: active === cat ? NAVY : "#94A3B8" }}
          >
            {cat}
          </button>
        ))}
        <span
          className="absolute -bottom-[1px] h-[2px] transition-all duration-400 ease-out"
          style={{ left: indicator.left, width: indicator.width, backgroundColor: FLAME }}
        />
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project: p }: { project: typeof projects[number] }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="break-inside-avoid rounded-[32px] overflow-hidden relative shadow-[0_20px_60px_rgba(15,23,42,0.10)] transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div
        className="relative w-full flex flex-col justify-end p-6"
        style={{
          aspectRatio: p.tall ? "3 / 4" : "4 / 3.2",
          background: `linear-gradient(155deg, ${p.gradientFrom} 0%, ${p.gradientTo} 100%)`,
        }}
      >
        <div>
          <span className="text-[12px] font-medium text-white/60 uppercase tracking-wide">{p.category}</span>
          <h3 className="font-display font-semibold text-white text-[22px] mt-1">{p.name}</h3>
        </div>

        <div
          className="absolute inset-0 flex flex-col justify-end p-6 backdrop-blur-md transition-opacity duration-500"
          style={{
            backgroundColor: "rgba(11,32,56,0.72)",
            opacity: hovered ? 1 : 0,
          }}
        >
          <p className="text-white/90 text-[14px] leading-relaxed mb-3">{p.solution}</p>
          <p className="text-[13px] font-medium mb-4" style={{ color: FLAME }}>
            {p.outcome}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const IndustriesServed = () => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative bg-navy-950 py-24 lg:py-32 px-5 md:px-12 lg:px-20">
      <div className="flex items-center gap-3 mb-14">
        <span className="inline-flex h-[10px] w-[10px] rounded-full bg-brand" />
        <span className="text-xs tracking-[0.22em] font-medium uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
          Industries Served
        </span>
      </div>

      <div ref={ref} className="flex flex-wrap gap-x-4 gap-y-2 max-w-5xl">
        {industries.map((ind, i) => (
          <span
            key={ind}
            className="font-display font-medium leading-tight transition-all duration-700 ease-out cursor-default hover:text-brand"
            style={{
              fontSize: i % 3 === 0 ? "clamp(28px, 4.5vw, 52px)" : "clamp(24px, 3.6vw, 42px)",
              color: "rgba(255,255,255,0.85)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transitionDelay: `${i * 60}ms`,
            }}
          >
            {ind}
            {i < industries.length - 1 && <span style={{ color: FLAME }}> · </span>}
          </span>
        ))}
      </div>
    </section>
  );
};

export const ProcessSection = () => {
  const [active, setActive] = useState(0);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) setVisibleSet((prev) => new Set(prev).add(idx));
        });
        const centered = entries.filter((e) => e.isIntersecting).map((e) => Number((e.target as HTMLElement).dataset.idx));
        if (centered.length > 0) setActive(Math.min(...centered));
      },
      { threshold: 0.4, rootMargin: "-35% 0px -35% 0px" }
    );
    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-24 lg:py-32 px-5 md:px-12 lg:px-20">
      <Reveal>
        <h2 className="font-display font-bold text-navy-950 tracking-tight leading-[1.08] text-[32px] sm:text-[44px] lg:text-[50px] max-w-xl mb-16">
          How a build actually happens.
        </h2>
      </Reveal>

      <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-16">
        <div className="hidden lg:block relative">
          <div className="sticky top-32">
            <div
              className="font-display font-light leading-none select-none"
              style={{ fontSize: "160px", color: FLAME, opacity: 0.14 }}
            >
              {processSteps[active].n}
            </div>
            <p className="mt-2 text-[15px] font-medium text-navy-950">{processSteps[active].title}</p>
          </div>
        </div>

        <div>
          {processSteps.map((step, i) => {
            const isVisible = visibleSet.has(i);
            return (
              <div
                key={step.n}
                ref={(el) => (rowRefs.current[i] = el)}
                data-idx={i}
                className="py-10 border-b border-navy-200 first:pt-0"
              >
                <span className="lg:hidden block text-[12px] font-semibold tracking-widest uppercase mb-3" style={{ color: FLAME }}>
                  {step.n}
                </span>
                <h3
                  className="font-display font-semibold text-navy-950 text-[24px] sm:text-[30px] mb-3 transition-all duration-700 ease-out"
                  style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[16px] leading-relaxed text-navy-500 max-w-lg transition-all duration-700 ease-out"
                  style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(14px)", transitionDelay: "100ms" }}
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const TechStackShowcase = () => {
  return (
    <section className="relative bg-white py-24 lg:py-32 px-5 md:px-12 lg:px-20">
      <Reveal>
        <h2 className="font-display font-bold text-navy-950 tracking-tight leading-[1.08] text-[32px] sm:text-[44px] lg:text-[50px] max-w-xl mb-16">
          The stack we actually ship with.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
        {techGroups.map((group) => (
          <Reveal key={group.label}>
            <div>
              <span className="block text-[12px] font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: FLAME }}>
                {group.label}
              </span>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-display text-[19px] sm:text-[21px] text-navy-950 border-b border-navy-100 pb-3 transition-colors duration-300 hover:text-brand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export const ClientStories = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section className="relative bg-white py-24 lg:py-32 px-5 md:px-12 lg:px-20">
      <Reveal>
        <h2 className="font-display font-bold text-navy-950 tracking-tight leading-[1.08] text-[32px] sm:text-[44px] lg:text-[50px] max-w-xl mb-16">
          What it's like to actually work with us.
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clientStories.map((c) => (
          <StoryCard key={c.id} story={c} isPlaying={playingId === c.id} onPlay={() => setPlayingId(c.id)} />
        ))}
      </div>
    </section>
  );
};

const StoryCard = ({
  story,
  isPlaying,
  onPlay,
}: {
  story: (typeof clientStories)[number];
  isPlaying: boolean;
  onPlay: () => void;
}) => {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="rounded-[28px] overflow-hidden transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        border: story.video ? "none" : "1px solid #E4E7EB",
      }}
    >
      {story.video ? (
        <div
          className="relative aspect-[4/5] flex flex-col justify-end p-6"
          style={{ background: `linear-gradient(160deg, ${story.gradientFrom} 0%, ${story.gradientTo} 100%)` }}
        >
          {!isPlaying ? (
            <>
              <button
                type="button"
                onClick={onPlay}
                aria-label={`Play story from ${story.name}`}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="h-14 w-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" strokeWidth={0} />
                </span>
              </button>
              <p className="text-white text-[16px] leading-snug mb-4 font-display">"{story.quote}"</p>
              <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.65)" }}>
                {story.name} — {story.role}
              </p>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/70 text-[13px]">
              Video src not set — replace with real footage
            </div>
          )}
        </div>
      ) : (
        <div className="p-7 aspect-[4/5] flex flex-col justify-between">
          <Quote className="w-6 h-6" style={{ color: FLAME }} fill={FLAME} strokeWidth={2} />
          <div>
            <p className="font-display text-[18px] leading-snug text-navy-950 mb-5">"{story.quote}"</p>
            <div className="flex items-center gap-3">
              <div
                className="h-9 w-9 rounded-full shrink-0"
                style={{ background: `linear-gradient(160deg, ${story.gradientFrom} 0%, ${story.gradientTo} 100%)` }}
              />
              <div>
                <p className="text-[13.5px] font-medium text-navy-950">{story.name}</p>
                <p className="text-[12.5px] text-navy-400">{story.role}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const DiscoveryCTA = () => {
  return (
    <section className="relative bg-white py-24 lg:py-32 px-5 md:px-12 lg:px-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 right-[10%] h-[300px] w-[300px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(247,111,1,0.10) 0%, transparent 70%)" }}
      />

      <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-14 items-start">
        <Reveal>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-[10px] w-[10px] rounded-full bg-brand" />
              <span className="text-xs tracking-[0.22em] font-medium text-navy-400 uppercase">
                Let's Talk
              </span>
            </div>
            <h2 className="font-display font-bold text-navy-950 tracking-tight leading-[1.04] text-[36px] sm:text-[52px] lg:text-[62px] mb-6">
              Want Results Like These
              <br />
              <span style={{ color: FLAME }}>For Your Business?</span>
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-relaxed text-navy-500 max-w-md">
              A 30-minute call to walk through your business and see if we're a good fit.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-[28px] border border-navy-200 bg-white p-7 sm:p-9 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <ul className="space-y-3.5 mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-50">
                    <Check className="h-3 w-3" style={{ color: FLAME }} strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] text-navy-950">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact-us"
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-950 px-8 py-4 text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              Book My Discovery Call
              <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
