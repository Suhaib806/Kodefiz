import { ReactNode } from "react";

type PageHeroProps = {
  badge?: string;
  title: ReactNode;
  description: string;
  imageSrc?: string;
  useVideo?: boolean;
};

const PageHero = ({
  badge,
  title,
  description,
  imageSrc,
  useVideo = true,
}: PageHeroProps) => {
  return (
    <section className="relative isolate w-full min-h-[66vh] overflow-hidden bg-black font-atraen sm:min-h-[72vh]">
      <div className="absolute inset-0" aria-hidden>
        {useVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        ) : (
          imageSrc && (
            <img src={imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_15%_35%,rgba(255,90,20,0.35),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 flex min-h-[66vh] w-full flex-col justify-end px-5 pb-10 pt-28 sm:min-h-[72vh] sm:px-8 sm:pb-14 lg:px-12">
        {badge && (
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:text-xs">
            {badge}
          </div>
        )}

        <div className="">
          <h1 className="font-atraen text-[clamp(2.25rem,5.5vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.02em] text-white">
            {title}
          </h1>
          <p className="mt-5 max-w-[640px] text-[15px] leading-[1.65] text-white/75 sm:text-[18px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
