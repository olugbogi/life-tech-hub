import Image from "../assets/hero-image.svg";
import BecomeBtn from "./Buttons/BecomeBtn";
import JoinBtnWhite from "./Buttons/JoinBtnWhite";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LazyLoad from "react-lazyload";

function Hero() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-between gap-10 p-10 py-5 mx-2 lg:mx-auto bg-primary rounded-3xl font-unbounded lg:flex-row lg:py-12"
        style={{ maxWidth: "1201px" }}
      >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left hero-box">
          <h3 className="p-4 text-xs text-center bg-white rounded-full hero-sm-box text-secondary md:text-sm md:py-3 md:px-1">
            Empowering Innovators, Shaping the Future
          </h3>
          <div className="pt-5">
            <h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Empowering <span className="text-secondary">You</span> to Thrive
              in the
              <span className="text-secondary"> Digital World!</span>
            </h1>
            <p className="pt-5 text-base font-normal text-white">
              At The Life Tech Hub, we’re passionate about equipping you with
              the skills you need to succeed in this digital age.
            </p>
          </div>
          <div className="flex flex-col gap-8 pb-6 pt-14 md:flex-row md:gap-3">
            <BecomeBtn />
            <JoinBtnWhite />
          </div>
        </div>
        <LazyLoad>
          <img className="heroImg" src={Image} alt="hero-image" />
        </LazyLoad>
      </motion.div>
    </div>
  );
}

export default Hero;
