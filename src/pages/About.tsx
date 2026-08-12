import AboutStory from "@/components/sections/story";
import AboutBeliefs from "@/components/sections/whatwebeleive";
import AboutWhyClientsStay from "@/components/sections/whyclientstay";
import HomeTeam from "@/components/sections/HomeTeam";
import HomeGlobalPresence from "@/components/sections/globalpresence";
import HomeGetInTouch from "@/components/sections/HomeGetInTouch";
import HomeFAQ from "@/components/sections/faq";
import PageHero from "@/components/sections/PageHero";
import aboutHero from "@/assets/about.jpeg";

const About = () => {
  return (
    <>
      <PageHero
  badge="About Kodefiz"
  title={
    <>
      We Exist to Be the 
      <br />
      <span className="text-[#F76F01]">Last Agency</span> You Ever <br>
      </br>Have to Hire
    </>
  }
  description="Not a freelancer. Not a task order desk. A growth partner that treats your business like it's our own."
  imageSrc={aboutHero}
/>

      <AboutStory />
      <AboutBeliefs />
      {/* <AboutWhyClientsStay /> */}
      <HomeTeam />
      {/* <HomeGlobalPresence /> */}
      {/* <HomeFAQ /> */}
      <HomeGetInTouch />
    </>
  );
};

export default About;
