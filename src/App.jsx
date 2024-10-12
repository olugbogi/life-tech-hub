import About from "./components/About";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Values from "./components/Values";
import Why from "./components/Why";
import Get from "./components/Get";
import Courses from "./components/Courses";
import Team from "./components/Team";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Navbar />
      <Hero />
      <Values />
      <About />
      <Why />
      <Courses />
      <Team />
      <Get />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
