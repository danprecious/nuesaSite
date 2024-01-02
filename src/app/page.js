import SectionOne from "@/_local-components/sectionOne";
import SectionTwo from "@/_local-components/sectionTwo";
import Footer from "@/_local-components/footer";
import PreFooter from "@/_local-components/preFooter";
import SectionLayout from "@/_local-components/sectionLayout";
import Hero from "@/_local-components/hero";
import SpaceEffect from "@/_local-components/spaceEffect";

const Home = () => {

  

  return (
    <main className="relative p-2 h-full mt-5">
      <Hero /> 
      <SectionOne />
      <SectionTwo />
      <SectionLayout headerText="Communities We Foster">
      </SectionLayout>
      <SectionLayout headerText="Milestones"></SectionLayout>
      <SectionLayout headerText="Photo Gallery"></SectionLayout>
      <PreFooter />
      <Footer />
    </main>
  );
};
export default Home;
