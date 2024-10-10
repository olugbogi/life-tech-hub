import JoinBtn from "./Buttons/JoinBtn";
import majestIcons from "../assets/majesticons.svg";
import chestIcons from '../assets/chestIcons (2).svg'
import targetIcons from '../assets/targeticons.svg'
import combIcons from '../assets/combicons.svg'

function why() {
  return (
    <div>
      <div className="flex justify-center gap-20 mt-20 flex-wrap ">
        <div className="">
          <h1 className="font-unbounded font-normal text-5xl mb-6 mr-10">
            Why The Life <br /> Tech Hub?
          </h1>
          <p className="font-unbounded font-normal text-xs text-zinc-600 mb-6 tracking-wide ">
            The Life Tech Hub is more than just a place to <br /> learn tech
            skills. it’s where you grow, innovate, <br /> and make a real
            impact. Here’s why you should <br />
            choose us:
          </p>
          <JoinBtn />
        </div>

        <div className=" flex flex-col justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-4 ">
            <div>
              <img src={majestIcons} alt="" />
            </div>

            <div>
              <h1 className="font-unbounded font-medium text-2xl mb-3">
                Practical Learning
              </h1>
              <p className="font-unbounded font-normal text-xs text-zinc-600 tracking-wider leading-5">
                We focus on hands-on, real-world training that <br /> equips you
                with the skills you need to succeed <br /> in today’s digital
                world.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 ">
            <div>
           <img src={chestIcons} alt="" />
            </div>

            <div>
              <h1 className="font-unbounded font-medium text-2xl mb-3">
                 Supportive Community
              </h1>
              <p className="font-unbounded font-normal text-xs text-zinc-600 tracking-wider leading-5">
                We focus on hands-on, real-world training that <br /> equips you
                with the skills you need to succeed <br /> in today’s digital
                world.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 ">
            <div>
              <img src={targetIcons} alt="" />
            </div>

            <div>
              <h1 className="font-unbounded font-medium text-2xl mb-3">
                Tailored For You
              </h1>
              <p className="font-unbounded font-normal text-xs text-zinc-600 tracking-wider leading-5">
                We focus on hands-on, real-world training that <br /> equips you
                with the skills you need to succeed <br /> in today’s digital
                world.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 ">
            <div>
              <img src={combIcons} alt="" />
            </div>

            <div>
              <h1 className="font-unbounded font-medium text-2xl mb-3">
              Future-Ready Skills
              </h1>
              <p className="font-unbounded font-normal text-xs text-zinc-600 tracking-wider leading-5">
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

export default why;
