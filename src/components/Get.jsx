import JoinBtn from "./Buttons/JoinBtn";
import BecomeBtn from "./Buttons/BecomeBtn";
import majestIcons from "../assets/majesticons.svg";
import chestIcons from "../assets/chestIcons (2).svg";
import targetIcons from "../assets/targeticons.svg";

function Get() {
  return (
    <div>
      <div className=" flex justify-center gap-20 mt-28 md: flex-wrap">
        <div className="p-2">
          <h1 className="font-unbounded font-normal text-5xl m-2 mb-6 mr-10">
            Get Involved <br /> with The Life <br /> Tech Hub
          </h1>
          <p className="font-unbounded font-normal text-sm text-zinc-600 mb-6 tracking-wide m-2">
            Ready to be part of something bigger? Here’s <br /> how you can get
            involved and start your tech <br /> journey:
          </p>
          <div className="flex gap-5 ">
            <JoinBtn />
            <BecomeBtn />
          </div>
        </div>

        <div className="flex justify-center flex-col gap-8 md:ml-16 mb-8 p-2">
          <div className="flex justify-center items-center gap-5 ">
            <div>
              <img src={majestIcons} alt="" />
            </div>
            <div>
              <h1 className="font-unbounded font-medium text-3xl mb-2">
                Join Our Programs
              </h1>
              <p className="font-unbounded font-normal text-xs tracking-wider leading-5">
                Sign up for our hands-on digital training <br />
                sessions and start building the skills you need <br />
                to succeed.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div>
              <img src={chestIcons} alt="" />
            </div>
            <div>
              <h1 className="font-unbounded font-medium text-2xl mb-3">
                Become a Mentor
              </h1>
              <p className="font-unbounded font-normal text-xs tracking-wider leading-5">
                Share your knowledge and experience by <br />
                guiding the next generation of tech innovators.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div>
              <img src={targetIcons} alt=""  />
            </div>
            <div className="mr-5">
              <h1 className="font-unbounded font-medium text-2xl mb-3 ">
                Support Our Mission
              </h1>
              <p className="font-unbounded font-normal text-xs tracking-wider leading-5 ">
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
