import HomeServices from "@/components/sections/HomeServices";
import HomeGetInTouch from "@/components/sections/HomeGetInTouch";
import PageHero from "@/components/sections/PageHero";

const Services = () => {
  return (
    <>
      <PageHero
        badge="Our Services"
        title={
          <>
            Everything your
            <br />
            <span className="text-[#F76F01]">digital growth</span> needs.
          </>
        }
        description="From high-converting websites and memorable brands to AI-powered marketing systems, we bring strategy, creativity, and technology together under one team."
      />

      <HomeServices showHeader={false} />
      <HomeGetInTouch />
    </>
  );
};

export default Services;
