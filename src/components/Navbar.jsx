import Buttons from "./Navs/Buttons";
import Links from "./Navs/Links";
// import mockData from "../mockData/data";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-6xl mx-auto md:px-5 lg:px-0 py-7">
        <a
          href="/"
          className="text-xl font-extrabold text-primary font-manrope"
        >
          The Life Tech Hub
        </a>
        <Links />
        {/* <ul className="flex items-center justify-center gap-10">
          {mockData.map((item) => (
            <li key={item.id}>
              <a className="font-medium font-inter" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul> */}
        <Buttons />
      </div>
    </div>
  );
}

export default Navbar;
