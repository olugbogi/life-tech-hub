import Buttons from "./Navs/Buttons";
import mockData from "../mockData/data";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between px-8 mx-auto drop-shadow-md md:px-20 py-7">
        <a
          href="/"
          className="text-xl font-extrabold transition-all text-primary font-manrope hover:scale-105"
        >
          The Life Tech Hub
        </a>
        <ul className="items-center justify-center hidden gap-10 xl:flex">
          {mockData.map((item) => (
            <li key={item.id}>
              <a
                className="p-3 font-medium transition-all rounded-md font-inter hover:bg-secondary hover:text-white hover:scale-105"
                href={item.link}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="items-center justify-center hidden gap-3 lg:flex">
          <Buttons />
        </div>

        {/* Mobile Menu */}
        <i
          className="block text-4xl cursor-pointer text-primary fa-solid fa-bars xl:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></i>
      </div>

      {/* Mobile Menu Container */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="bg-white flex flex-col items-center gap-6 font-semibold text-lg">
          {mockData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="list-none text-center p-4 px-8 rounded-md hover:bg-secondary hover:text-white transition-all"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="my-10">
          <Buttons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
