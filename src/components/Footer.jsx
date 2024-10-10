import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <div>
      <div className="flex justify-center  gap-20 p-10 bg-black text-neutral-300 flex-wrap mt-20">
        <div className="">
          <a
            href="https://www.newlifefan.org/"
            className=" font-opensans text-4xl font-bold text-white underline"
          >
            NLFANM
          </a>
          <p className="mt-10 tracking-wide leading-7 mb-6">
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
          <h3 className="  font-inter text-2xl font-semibold mb-8 text-white ">
            Courses
          </h3>
          <p className="font-inter font-normal text-sm leading-8">
            Digital Marketing
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Social Media Marketing
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Data Analysis
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Product Development
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Web Development
          </p>
        </div>

        <div>
          <h3 className="  font-inter text-2xl font-semibold mb-8 text-white">
            Courses
          </h3>
          <p className="font-inter font-normal text-sm leading-8">
            Digital Marketing
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Social Media Marketing
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Data Analysis
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Product Development
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Web Development
          </p>
        </div>

        <div>
          <h3 className="  font-inter text-2xl font-semibold mb-8 text-white">
            Courses
          </h3>
          <p className="font-inter font-normal text-sm leading-8">
            Digital Marketing
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Social Media Marketing
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Data Analysis
          </p>
          <p className="font-inter font-normal text-sm leading-8">
            Product Development
          </p>
          <p className="font-inter font-normal text-sm leading-8">
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
