import Image from "../assets/about-image.svg";
function About() {
  return (
    <div>
      <div
        id="about"
        className="font-unbounded text-center mx-auto my-12 pt-10"
        style={{ maxWidth: "730px" }}
        data-aos-mirror="true"
      >
        <h3 className="text-sometexts" data-aos="fade-in">
          About Life Tech Hub
        </h3>
        <h1
          className="font-medium py-8"
          style={{ fontSize: "40px" }}
          data-aos="zoom-in"
        >
          Empowering <span className="text-primary">Teenagers</span> and{" "}
          <span className="text-primary">Youths</span> with
          <span className="text-primary"> Tech Skills</span> for Real-World
          Impact!
        </h1>
      </div>
      <div className="flex justify-center items-center pb-8">
        <img style={{ maxWidth: "1252px" }} src={Image} alt="our-team" />
      </div>
      <div
        className="flex flex-col justify-center items-center mx-5 p-7 rounded-tl-2xl rounded-tr-2xl font-unbounded text-2xl leading-10 m-auto"
        style={{ background: "#fbfbfb" }}
      >
        <h3 className="pb-10" style={{ maxWidth: "1400px" }}>
          <strong>Our mission is simple:</strong> To empower members of the
          <strong> New Life community </strong>
          especially <strong>campus students and youth</strong> with
          transformative tech training that fosters creativity, collaboration,
          and problem-solving.
        </h3>
        <h3 className="font-light" style={{ maxWidth: "1400px" }}>
          We believe in providing practical, hands-on learning experiences that
          help you navigate real-world challenges with confidence. By offering
          comprehensive digital education, we aim to prepare you for success in
          tech-driven environments, whether it’s for your personal growth or
          professional career.
        </h3>
      </div>
    </div>
  );
}

export default About;
