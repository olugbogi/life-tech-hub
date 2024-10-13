import bgImage from "../assets/contact-bg.png";

function Contact() {
  return (
    <div>
      <div
        id="contact"
        className="bg-no-repeat bg-cover lg:p-10 contact-bg font-unbounded"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col items-center gap-10 py-5 lg:flex-row lg:items-center lg:justify-around">
          <div className="text-center">
            <h3 className="pb-10 text-2xl text-black">Contact Info</h3>
            <h1
              className="text-4xl md:text-6xl font-light contact"
              // style={{ fontSize: "64px", maxWidth: "575px" }}
            >
              Get in touch with us. <br /> We&apos;re here to assist you.
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-8 lg:items-center">
            <div>
              <h3 className="mb-6 text-base">Email Address</h3>
              <hr
                className="mb-6 bg-black"
                style={{ width: "27px", height: "3px" }}
              />
              <a href="/" className="text-base font-medium underline">
                newlifetechhub01@gmail.com
              </a>
            </div>
            <div>
              <h3 className="mb-6 text-base">Phone Number</h3>
              <hr
                className="mb-6 bg-black"
                style={{ width: "27px", height: "3px" }}
              />
              <a className="text-base font-medium">
                +234 706 124 2347
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
