import bgImage from "../assets/contact-bg.png";

function Contact() {
  return (
    <div>
      <div
        className="contact-bg font-unbounded mx-12 p-10 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex justify-around items-center">
          <div>
            <h3 className="text-2xl text-black">Contact Info</h3>
            <h1
              className="font-light"
              style={{ fontSize: "64px", maxWidth: "575px" }}
            >
              Get in touch with us. <br /> We&apos;re here to assist you.
            </h1>
          </div>
          <div className="flex gap-8 items-center">
            <div>
              <h3 className="text-base mb-6">Email Address</h3>
              <hr
                className="mb-6 bg-black"
                style={{ width: "27px", height: "3px" }}
              />
              <a href="/" className="text-base font-medium underline">
                newlifetechhub01@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-base mb-6">Phone Number</h3>
              <hr
                className="mb-6 bg-black"
                style={{ width: "27px", height: "3px" }}
              />
              <a href="/" className="text-base font-medium">
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
