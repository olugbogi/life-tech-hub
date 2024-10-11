import Image from "../assets/hero-image.svg";
import BecomeBtn from "./Buttons/BecomeBtn";
import JoinBtnWhite from "./Buttons/JoinBtnWhite";

function Hero() {
  return (
    <div>
      <div
        className="flex justify-between items-center gap-10 py-12 bg-primary mx-auto rounded-3xl p-10 font-unbounded"
        style={{ maxWidth: "1201px" }}
        data-aos="fade-in"
        data-aos-mirror="true"
      >
        <div className="hero-box">
          <h3 className="hero-sm-box p-2.5 bg-white text-secondary rounded-full text-xs text-center">
            Empowering Innovators, Shaping the Future
          </h3>
          <div className="pt-5">
            <h1 className="font-bold text-white" style={{ fontSize: "52px" }}>
              Empowering <span className="text-secondary">You</span> to Thrive
              in the
              <span className="text-secondary"> Digital World!</span>
            </h1>
            <p className="text-base font-normal text-white pt-5">
              At The Life Tech Hub, we’re passionate about equipping you with
              the skills you need to succeed in this digital age.
            </p>
          </div>
          <div className="flex gap-3 pt-14 pb-6">
            <BecomeBtn />
            <JoinBtnWhite />
          </div>
        </div>
        <div>
          <img
            src={Image}
            style={{ width: "505px", height: "451px" }}
            alt="hero-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
