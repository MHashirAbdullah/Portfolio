import LogoSection from "./components/LogoSection";
import NavBar from "./components/NavBar";
import Experiences from "./sections/Experiences";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
const App = () => {
  return (
    <>
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <Experiences/>
    </>
  );
};

export default App;
