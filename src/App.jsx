import LogoSection from "./components/LogoSection";
import NavBar from "./components/NavBar";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    <ToastContainer theme="dark" position="top-right" autoClose={3000} />
    <NavBar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeatureCards/>
    <Experiences/>
    <TechStack/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default App;
