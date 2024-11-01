import Image from "../assets/about-image.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LazyLoad from "react-lazyload";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "easeInOut" });
  });
  return (
    <div>
      <div
        id="about"
        className="py-3 mx-auto text-center font-unbounded"
        style={{ maxWidth: "730px" }}
      >
        <h3 className="text-sometexts">About Life Tech Hub</h3>
        <h1
          className="px-3 py-3 text-xl font-medium md:text-4xl md:py-6"
          // data-aos="zoom-in"
        >
          Empowering <span className="text-primary">Teenagers</span> and{" "}
          <span className="text-primary">Youths</span> with
          <span className="text-primary"> Tech Skills</span> for Real-World
          Impact!
        </h1>
      </div>
      <div
        data-aos="zoom-in"
        className="flex items-center justify-center px-3 pb-3 md:pb-8"
      >
        <LazyLoad>
          <img src={Image} alt="our-team" />
        </LazyLoad>
      </div>
      <div
        className="flex flex-col items-center justify-center p-3 m-auto text-sm leading-10 md:text-2xl md:mx-5 md:p-7 md:rounded-tl-2xl md:rounded-tr-2xl font-unbounded"
        style={{ background: "#fbfbfb" }}
      >
        <h3 className="pb-4 md:pb-10" style={{ maxWidth: "1400px" }}>
          <strong>Our mission is simple:</strong> To empower members of the
          <strong> New Life community </strong>
          especially <strong>campus students and youth</strong> with
          transformative tech training that fosters creativity, collaboration,
          and problem-solving.
        </h3>
        <h3 className="font-light" style={{ maxWidth: "1400px" }}>
          We believe in providing practical, hands-on learning experiences that
          help you navigate real-world challenges with confidence. By offering
          comprehensive digital education, we aim to prepare you for success in
          tech-driven environments, whether it’s for your personal growth or
          professional career.
        </h3>
      </div>
    </div>
  );
}

export default About;
