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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
