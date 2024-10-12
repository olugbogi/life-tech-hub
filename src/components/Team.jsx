import BecomeBtn from "./Buttons/BecomeBtn";
import Arrow from "../assets/arrows.svg";
import daddyBoboye from "../assets/daddy-boboye.svg";
import david from "../assets/david-akinboyewa.svg";
import folashade from "../assets/folashade.svg";
import isreal from "../assets/israel-boboye.svg";
import andrew from "../assets/andrew-orekoya.svg";
import faith from "../assets/torres-faith.svg";
import ifeoluwa from "../assets/ifeoluwa-boboye.svg";
import joshua from "../assets/joshua-adetunji.svg";
import favour from "../assets/favor-ekundayo.svg";
import samuel from "../assets/sunday-samuel.svg";

function Team() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center rounded-t-sm ">
        <div
          id="meet"
          className="flex flex-col items-center justify-center mt-40"
        >
          <div>
            <h5 className="mb-4 text-base font-normal text-center font-unbounded">
              MEET OUR TEAM
            </h5>
            <h1 className="mb-5 text-4xl font-normal text-center font-unbounded">
              We bring a wealth of
              <span className="text-primary">knowledge</span>
              , <br />
              <span className="text-primary">experience</span>, and
              <span className="text-primary">creativity</span> to help you
              <br />
              thrive in <span className="text-primary">Tech</span>.
            </h1>
            <div className="flex flex-col items-center justify-center">
              <BecomeBtn />
              <img src={Arrow} alt="" className="mt-4" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 p-12 mt-6 bg-primary md:p-2">
            <div className="flex flex-wrap items-center justify-center gap-6 mt-16 md:flex-wrap">
              <div className="bg-white rounded-2xl">
                <img src={daddyBoboye} alt="" className="mt-3" />
                <h1 className="mt-5 text-xs font-normal text-center font-unbounded">
                  Pastor Isaac Boboye
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Program Director
                </p>
              </div>

              <div className="bg-white rounded-2xl">
                <img src={david} alt="" className="p-3 mt-2 rounded-3xl" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  David Akinboyewa
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Asst. Program Director
                </p>
              </div>

              <div className="bg-white rounded-2xl">
                <img src={folashade} alt="" className="p-3 mt-2 rounded-3xl" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  Folashade Adeola-Adegbite
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Project Manager
                </p>
              </div>

              <div className="bg-white rounded-2xl">
                <img src={isreal} alt="" className="p-3 mt-2 rounded-3xl" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  Israel Boboye
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Project Manager
                </p>
              </div>

              <div className="bg-white rounded-2xl">
                <img src={andrew} alt="" className="p-3 mt-2 rounded-3xl" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  Andrew Orekoya
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Project Manager
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-16 md:flex-wrap ">
              <div className="bg-white rounded-2xl">
                <img src={faith} alt="" className="p-3 mt-2" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  Faith Olanrewaju
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Program Director
                </p>
              </div>

              <div className="bg-white rounded-2xl">
                <img src={ifeoluwa} alt="" className="p-3 mt-2 rounded-3xl" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  Ifeoluwa Boboye
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  UI/UX Instructor
                </p>
              </div>

              <div className="bg-white rounded-2xl">
                <img src={joshua} alt="" className="p-3 mt-2 rounded-3xl" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  Joshua Adetunji
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Graphic Designer
                </p>
              </div>

              <div className="bg-white rounded-2xl">
                <img src={favour} alt="" className="p-3 mt-2 rounded-3xl" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  Favour Ekundayo
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Content Writer/Creator
                </p>
              </div>

              <div className="bg-white rounded-2xl">
                <img src={samuel} alt="" className="p-3 mt-2 rounded-3xl" />
                <h1 className="text-xs font-normal text-center font-unbounded">
                  Samuel Sunday
                </h1>
                <p className="mt-3 mb-3 text-xs font-light text-center font-unbounded">
                  Video Editor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
