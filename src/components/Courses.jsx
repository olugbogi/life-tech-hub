import uiDesign from "../assets/ui-ux-img.svg";
import GetStarted from "./Buttons/GetStartedBtn";
import Months from "../assets/months.svg";
import Online from "../assets/online.svg";
import Beginner from "../assets/beginner.svg";
import dataAnalysis from "../assets/data-analysis.svg";
import mobileApp from "../assets/mobile-app.svg";
import digitalMarketing from "../assets/digital-marketing.svg";
import cloudComputing from "../assets/cloud-computing.svg";
import webDevelopment from "../assets/web-development.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LazyLoad from "react-lazyload";

function Courses() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "easeInOut" });
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-32">
        <div className="mb-16">
          <p className="mb-3 text-base font-normal text-center font-unbounded">
            OUR COURSES
          </p>
          <h1 className="px-2 text-2xl font-medium tracking-wider text-center md:text-4xl font-unbounded">
            We offer a range of courses designed to equip <br /> you with
            essential tech skills for the digital <br /> world
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:gap-16 lg:px-20">
          <div
            data-aos="slide-right"
            className="p-3 border-2 border-solid rounded-2xl"
          >
            <div>
              <LazyLoad>
                <img src={uiDesign} alt="" className="rounded-xl w-80" />
              </LazyLoad>
              <h4 className="mt-4 ml-1 text-base font-unbounded">
                UI/UX Design Essential Training
              </h4>
              <div className="flex justify-center mr-4 gap-11 mt-7">
                <div className="flex items-center gap-2">
                  <img src={Months} alt="" />
                  <p className="text-xs font-medium text-neutral-900">
                    2 Months
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={Online} alt="" />
                  <p className="text-xs font-medium text-neutral-900">Online</p>
                </div>

                <div className="flex items-center gap-2">
                  <img src={Beginner} alt="" />
                  <p className="text-xs font-medium text-neutral-900">
                    Beginner
                  </p>
                </div>
              </div>

              <div className="mt-10 mb-6">
                <GetStarted />
              </div>
            </div>
          </div>

          <div
            data-aos="slide-left"
            className="p-3 border-2 border-solid rounded-2xl"
          >
            <LazyLoad>
              <img src={dataAnalysis} alt="" className="rounded-xl w-80" />
            </LazyLoad>
            <h4 className="mt-4 ml-2 text-base font-unbounded">
              Data Analysis
            </h4>
            <div className="flex justify-center gap-10 mr-4 mt-7">
              <div className="flex items-center gap-2">
                <img src={Months} alt="" />
                <p className="text-xs font-medium text-neutral-900">2 Months</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Online} alt="" />
                <p className="text-xs font-medium text-neutral-900">Online</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Beginner} alt="" />
                <p className="text-xs font-medium text-neutral-900">Beginner</p>
              </div>
            </div>

            <div className="mt-10 mb-6">
              <GetStarted />
            </div>
          </div>

          <div
            data-aos="slide-right"
            className="p-3 border-2 border-solid rounded-2xl"
          >
            <LazyLoad>
              <img src={mobileApp} alt="" className="rounded-xl w-80" />
            </LazyLoad>
            <h4 className="mt-4 ml-2 text-base font-unbounded">
              Mobile App Development
            </h4>
            <div className="flex justify-center gap-10 mr-4 mt-7">
              <div className="flex items-center gap-2">
                <img src={Months} alt="" />
                <p className="text-xs font-medium text-neutral-900">2 Months</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Online} alt="" />
                <p className="text-xs font-medium text-neutral-900">Online</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Beginner} alt="" />
                <p className="text-xs font-medium text-neutral-900">Beginner</p>
              </div>
            </div>

            <div className="mt-10 mb-6">
              <GetStarted />
            </div>
          </div>

          <div
            data-aos="slide-left"
            className="p-3 border-2 border-solid rounded-2xl"
          >
            <LazyLoad>
              <img src={digitalMarketing} alt="" className="rounded-xl w-80" />
            </LazyLoad>
            <h4 className="mt-4 ml-2 text-base font-unbounded">
              Digital Marketing
            </h4>
            <div className="flex justify-center gap-10 mr-4 mt-7">
              <div className="flex items-center gap-2">
                <img src={Months} alt="" />
                <p className="text-xs font-medium text-neutral-900">2 Months</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Online} alt="" />
                <p className="text-xs font-medium text-neutral-900">Online</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Beginner} alt="" />
                <p className="text-xs font-medium text-neutral-900">Beginner</p>
              </div>
            </div>

            <div className="mt-10 mb-6">
              <GetStarted />
            </div>
          </div>

          <div
            data-aos="slide-right"
            className="p-3 border-2 border-solid rounded-2xl"
          >
            <LazyLoad>
              <img src={cloudComputing} alt="" className="rounded-xl w-80" />
            </LazyLoad>
            <h4 className="mt-4 ml-2 text-base font-unbounded">
              Cloud Computing
            </h4>
            <div className="flex justify-center gap-10 mr-4 mt-7">
              <div className="flex items-center gap-2">
                <img src={Months} alt="" />
                <p className="text-xs font-medium text-neutral-900">2 Months</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Online} alt="" />
                <p className="text-xs font-medium text-neutral-900">Online</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Beginner} alt="" />
                <p className="text-xs font-medium text-neutral-900">Beginner</p>
              </div>
            </div>

            <div className="mt-10 mb-6">
              <GetStarted />
            </div>
          </div>

          <div
            data-aos="slide-left"
            className="p-3 border-2 border-solid rounded-2xl"
          >
            <LazyLoad>
              <img src={webDevelopment} alt="" className="rounded-xl w-80" />
            </LazyLoad>
            <h4 className="mt-4 ml-2 text-base font-unbounded">
              Web Development
            </h4>
            <div className="flex justify-center gap-10 mr-4 mt-7">
              <div className="flex items-center gap-2">
                <img src={Months} alt="" />
                <p className="text-xs font-medium text-neutral-900">2 Months</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Online} alt="" />
                <p className="text-xs font-medium text-neutral-900">Online</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Beginner} alt="" />
                <p className="text-xs font-medium text-neutral-900">Beginner</p>
              </div>
            </div>

            <div className="mt-10 mb-6">
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
