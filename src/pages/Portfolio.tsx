import HeroSection from "@/components/sections/featuredcasestudy";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import PortfolioCategorySections from "@/components/sections/portfolio/PortfolioCategorySections";
import heroimage from "@/assets/portfolio.png";
import {
  DiscoveryCTA,
  IndustriesServed,
  ProcessSection,
  TechStackShowcase,
} from "@/components/sections/portfolio/PortfolioSections";
import PageHero from "@/components/sections/PageHero";

const PortfolioPage = () => {
  return (
    <>
    
     <PageHero
        badge="Case Studies"
        title={
          <>
           Real Work.
            <br />
            <span className="text-[#F76F01]">Real Results.</span>
          </>
        }
        description="A look at what we've built and the outcomes behind it."
        imageSrc={heroimage}
      />
  
      <PortfolioCategorySections />
      <IndustriesServed />
      {/* <ProcessSection /> */}
      <TechStackShowcase />
      {/* <HomeTestimonials /> */}
      <DiscoveryCTA />
    </>
  );
};

export default PortfolioPage;
