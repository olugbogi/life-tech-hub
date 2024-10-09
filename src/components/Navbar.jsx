import Buttons from "./Navs/Buttons";
import Links from "./Navs/Links";

function Navbar() {
  return (
    <div>
      <div className="flex justify-center items-center gap-10 py-7">
        <a href="/" className="text-primary font-manrope text-xl font-extrabold">
          The Life Tech Hub
        </a>
        <Links />
        <Buttons />
      </div>
    </div>
  );
}

export default Navbar;
