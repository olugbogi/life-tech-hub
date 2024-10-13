import JoinBtn from "./Buttons/JoinBtn";
import BecomeBtn from "./Buttons/BecomeBtn";
import majestIcons from "../assets/majesticons.svg";
import chestIcons from "../assets/chestIcons (2).svg";
import targetIcons from "../assets/targeticons.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Get() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-20 mt-28 md:">
        <div className="p-2">
          <h1 className="m-2 mb-6 mr-10 text-3xl font-normal md:text-5xl font-unbounded">
            Get Involved <br /> with The Life <br /> Tech Hub
          </h1>
          <p className="m-2 mb-6 text-sm font-normal tracking-wide font-unbounded text-zinc-600">
            Ready to be part of something bigger? Here’s <br /> how you can get
            involved and start your tech <br /> journey:
          </p>
          <div className="flex gap-5 ">
            <JoinBtn />
            <BecomeBtn />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 p-2 mb-8 md:ml-16">
          <div data-aos='zoom-in-right' className="flex items-center justify-center gap-5 ">
            <div>
              <img src={majestIcons} alt="" />
            </div>
            <div>
              <h1 className="mb-2 text-3xl font-medium font-unbounded">
                Join Our Programs
              </h1>
              <p className="text-xs font-normal leading-5 tracking-wider font-unbounded">
                Sign up for our hands-on digital training <br />
                sessions and start building the skills you need <br />
                to succeed.
              </p>
            </div>
          </div>

          <div data-aos='zoom-in-left' className="flex items-center justify-center gap-5">
            <div>
              <img src={chestIcons} alt="" />
            </div>
            <div>
              <h1 className="mb-3 text-2xl font-medium font-unbounded">
                Become a Mentor
              </h1>
              <p className="text-xs font-normal leading-5 tracking-wider font-unbounded">
                Share your knowledge and experience by <br />
                guiding the next generation of tech innovators.
              </p>
            </div>
          </div>

          <div data-aos='zoom-in-right' className="flex items-center justify-center gap-5">
            <div>
              <img src={targetIcons} alt="" />
            </div>
            <div className="mr-5">
              <h1 className="mb-3 text-2xl font-medium font-unbounded ">
                Support Our Mission
              </h1>
              <p className="text-xs font-normal leading-5 tracking-wider font-unbounded ">
                Whether through donations or partnerships, <br />
                your support helps us continue empowering <br />
                others to thrive in the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Get;
