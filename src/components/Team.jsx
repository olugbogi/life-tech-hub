import BecomeBtn from "./Buttons/BecomeBtn";
import Arrow from "../assets/arrows.svg";
import daddyBoboye from "../assets/daddy-boboye.svg";

function Team() {
  return (
    <div>
      <div
        id="meet"
        className="flex justify-center items-center flex-col mt-40"
      >
        <div>
          <h5 className="text-center font-unbounded font-normal text-base mb-4">
            MEET OUR TEAM
          </h5>
          <h1 className="font-unbounded font-normal text-4xl mb-5 text-center">
            We bring a wealth of <span className="text-primary">knowledge</span>
            , <br />
            <span className="text-primary">experience</span>, and{" "}
            <span className="text-primary">creativity</span> to help you <br />
            thrive in <span className="text-primary">Tech</span>.
          </h1>
          <div className="flex justify-center items-center flex-col">
            <BecomeBtn />
            <img src={Arrow} alt="" className="mt-4" />
          </div>
        </div>
        <div className="bg-primary flex mt-6">
          <div className="bg-white">
            <img src={daddyBoboye} alt="" />
            <h5>Pastor Isaac Boboye</h5>
            <p>Program Director</p>
          </div>

          <div>
            <img src={daddyBoboye} alt="" />
            <h5>Pastor Isaac Boboye</h5>
            <p>Program Director</p>
          </div>

          <div>
            <img src={daddyBoboye} alt="" />
            <h5>Pastor Isaac Boboye</h5>
            <p>Program Director</p>
          </div>

          <div>
            <img src={daddyBoboye} alt="" />
            <h5>Pastor Isaac Boboye</h5>
            <p>Program Director</p>
          </div>

          <div>
            <img src={daddyBoboye} alt="" />
            <h5>Pastor Isaac Boboye</h5>
            <p>Program Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
