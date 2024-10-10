import Buttons from "./Navs/Buttons";
import Links from "./Navs/Links";

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
        <Buttons />
      </div>
    </div>
  );
}

export default Navbar;
