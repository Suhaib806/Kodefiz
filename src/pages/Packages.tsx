import ProgramSection from "@/components/sections/homeprogram";
import HomeGetInTouch from "@/components/sections/HomeGetInTouch";
import PageHero from "@/components/sections/PageHero";
import ProgramHero from "@/assets/Program .png";

const Packages = () => {
  return (
    <>
      <PageHero
        badge="Our Programs"
        title={
          <>
            The right level of
            <br />
            <span className="text-[#F76F01]">support.</span>
          </>
        }
        description="Every business is at a different stage. Our programs are designed around where you are today—and where you want to go next."
        imageSrc={ProgramHero}
      />

      <ProgramSection showHeader={false} />
      <HomeGetInTouch />
    </>
  );
};

export default Packages;
