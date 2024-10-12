import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-20 p-10 mt-20 bg-black text-neutral-300">
        <div className="">
          <a
            href="https://www.newlifefan.org/"
            className="text-4xl font-bold text-white underline font-opensans"
          >
            NLFANM
          </a>
          <p className="mt-10 mb-6 leading-7 tracking-wide">
            New Life For All Nations Ministries Inc. <br /> involves in the
            spread of the Gospel in rural <br /> and urban places which results
            in establishing <br /> churches, hundreds of which are located all{" "}
            <br /> over Nigeria and few others in West African <br /> Countries
            and other Continents. <br />
            The Ministry exercises supervisory role over <br />
            the churches and mobilizes them to reach new areas.
          </p>
          <h4 className="mb-6">Oloola, Ibadan</h4>
          <p>Email: info@example.com</p>
          <div className="flex gap-5 mt-7">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-2xl font-semibold text-white font-inter">
            Courses
          </h3>
          <p className="text-sm font-normal leading-8 font-inter">
            Digital Marketing
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Social Media Marketing
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Data Analysis
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Product Development
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Web Development
          </p>
        </div>

        <div>
          <h3 className="mb-8 text-2xl font-semibold text-white font-inter">
            Courses
          </h3>
          <p className="text-sm font-normal leading-8 font-inter">
            Digital Marketing
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Social Media Marketing
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Data Analysis
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Product Development
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Web Development
          </p>
        </div>

        <div>
          <h3 className="mb-8 text-2xl font-semibold text-white font-inter">
            Courses
          </h3>
          <p className="text-sm font-normal leading-8 font-inter">
            Digital Marketing
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Social Media Marketing
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Data Analysis
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Product Development
          </p>
          <p className="text-sm font-normal leading-8 font-inter">
            Web Development
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// function Footer() {
//   return (
//     <div>

// function Footer() {
//   return (
//     <div>

//     </div>
//   );
// }

// export default Footer;
