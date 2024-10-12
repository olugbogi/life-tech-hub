import mockData from "../../mockData/data.js";

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
      <div className="flex items-center justify-center gap-10">
        {mockData.map((item) => (
          <div key={item.id}>
            <a className="font-medium font-inter" href={item.link}>
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
