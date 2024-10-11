import Buttons from "./Navs/Buttons";
import Links from "./Navs/Links";
// import mockData from "../mockData/data";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center py-7 max-w-6xl mx-auto">
        <a
          href="/"
          className="text-primary font-manrope text-xl font-extrabold"
        >
          The Life Tech Hub
        </a>
        <Links />
        {/* <ul className="flex justify-center items-center gap-10">
          {mockData.map((item) => (
            <li key={item.id}>
              <a className="font-inter font-medium" href={item.link}>
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
