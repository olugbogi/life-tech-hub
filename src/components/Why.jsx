import JoinBtn from "./Buttons/JoinBtn";
import majestIcons from "../assets/majesticons.svg";
import chestIcons from "../assets/chestIcons (2).svg";
import targetIcons from "../assets/targeticons.svg";
import combIcons from "../assets/combicons.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Why() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 px-4 mt-20 lg:items-start lg:gap-28 lg:flex-row">
        <div>
          <h1 className="mb-8 text-4xl font-normal lg:text-6xl font-unbounded">
            Why The Life <br /> Tech Hub?
          </h1>
          <p className="mb-10 text-sm font-normal tracking-wide md:text-lg font-unbounded text-zinc-600">
            The Life Tech Hub is more than just a place to <br /> learn tech
            skills. it’s where you grow, innovate, <br /> and make a real
            impact. Here’s why you should <br />
            choose us:
          </p>
          <div className="">
            <JoinBtn />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 ">
          <div data-aos='zoom-in-right' className="flex items-center justify-center gap-4 ">
            <div>
              <img src={majestIcons} alt="" />
            </div>

            <div>
              <h1 className="mb-3 text-lg font-medium font-unbounded lg:text-3xl">
                Practical Learning
              </h1>
              <p className="text-xs font-normal leading-5 tracking-wider font-unbounded text-zinc-600 lg:text-base md:text-sm">
                We focus on hands-on, real-world training that <br /> equips you
                with the skills you need to succeed <br /> in today’s digital
                world.
              </p>
            </div>
          </div>

          <div data-aos='zoom-in-left' className="flex items-center justify-center gap-4 ">
            <div>
              <img src={chestIcons} alt="" />
            </div>

            <div>
              <h1 className="mb-3 text-lg font-medium font-unbounded lg:text-3xl">
                Supportive Community
              </h1>
              <p className="text-xs font-normal leading-5 tracking-wider font-unbounded text-zinc-600 lg:text-base md:text-sm">
                We focus on hands-on, real-world training that <br /> equips you
                with the skills you need to succeed <br /> in today’s digital
                world.
              </p>
            </div>
          </div>

          <div data-aos='zoom-in-right' className="flex items-center justify-center gap-4 ">
            <div>
              <img src={targetIcons} alt="" />
            </div>

            <div>
              <h1 className="mb-3 text-lg font-medium font-unbounded lg:text-3xl">
                Tailored For You
              </h1>
              <p className="text-xs font-normal leading-5 tracking-wider font-unbounded text-zinc-600 lg:text-base md:text-sm">
                We focus on hands-on, real-world training that <br /> equips you
                with the skills you need to succeed <br /> in today’s digital
                world.
              </p>
            </div>
          </div>

          <div data-aos='zoom-in-left' className="flex items-center justify-center gap-4 ">
            <div>
              <img src={combIcons} alt="" />
            </div>

            <div>
              <h1 className="mb-3 text-lg font-medium font-unbounded lg:text-3xl">
                Future-Ready Skills
              </h1>
              <p className="text-xs font-normal leading-5 tracking-wider font-unbounded text-zinc-600 lg:text-base md:text-sm">
                We focus on hands-on, real-world training that <br /> equips you
                with the skills you need to succeed <br /> in today’s digital
                world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
