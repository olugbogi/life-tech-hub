import mockData from "../../mockData/data.js";
import Buttons from "./Buttons.jsx";

function Links() {
  return (
    <div>
      {/* <div className="flex items-center justify-center gap-10">
        <a href="/" className="font-medium font-inter">
          Home
        </a>
        <a href="/" className="font-medium font-inter">
          About Us
        </a>
        <a href="/" className="font-medium font-inter">
          Meet the Team
        </a>
        <a href="/" className="font-medium font-inter">
          Contact Us
        </a>
      </div> */}
      {/* <ul className="items-center justify-center hidden gap-10 xl:flex-row xl:flex">
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
      </ul> */}

      <div className="relative items-center justify-center hidden gap-3 md:flex">
        <Buttons />
      </div>
    </div>
  );
}

export default Links;
