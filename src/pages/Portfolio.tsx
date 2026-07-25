import React from "react";
import HeroSection from "@/components/sections/featuredcasestudy";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import {
  ClientStories,
  DiscoveryCTA,
  FeaturedCaseStudy,
  IndustriesServed,
  PortfolioShowcase,
  ProcessSection,
  TechStackShowcase,
} from "@/components/sections/portfolio/PortfolioSections";

const PortfolioPage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedCaseStudy />
      <PortfolioShowcase />
      <IndustriesServed />
      <ProcessSection />
      <TechStackShowcase /> 
      <HomeTestimonials />
      <DiscoveryCTA />
    </main>
  );
};

export default PortfolioPage;
