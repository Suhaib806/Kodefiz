import Hero from "@/components/sections/Hero";
import HomeServices from "@/components/sections/HomeServices";
import HomeDesignTabs from "@/components/sections/HomeDesignTabs"; 
import HomeResults from "@/components/sections/HomeResults";
import HomeAwards from "@/components/sections/HomeAwards";
import HomeTeam from "@/components/sections/HomeTeam";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeGetInTouch from "@/components/sections/HomeGetInTouch";

import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";

import CTASection from "@/components/sections/CTASection";
import WhyUsScrollSection from "@/components/sections/WhyUsScrollSection";
import CaseStudiesHero from "@/components/sections/CaseStudiesHero";
import Videotestimonail from "@/components/sections/Videotestimonail";

const Home = () => {
  return (
    <div className="overflow-hidden bg-navy-50">
      <Hero />
      <HomeServices />
      <HomeDesignTabs />
      <WhyChooseUs/>
      {/* <WhyUsScrollSection /> */}
      <CaseStudiesHero /> 
      <HomeResults />
      <HomeAwards />
      <HomeTeam />
      {/* <Videotestimonail /> */}
      <HomeTestimonials />
      <HomeGetInTouch />
     

      {/* 
      <WhyChooseUs />
      <Process />
      <Stats />
      <TestimonialsPreview />
      <CTASection /> */}
    </div>
  );
};

export default Home;
