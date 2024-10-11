import mockData from "../../mockData/data.js";

function Links() {
  return (
    <div>
      {/* <div className="flex justify-center items-center gap-10">
        <a href="/" className="font-inter font-medium">
          Home
        </a>
        <a href="/" className="font-inter font-medium">
          About Us
        </a>
        <a href="/" className="font-inter font-medium">
          Meet the Team
        </a>
        <a href="/" className="font-inter font-medium">
          Contact Us
        </a>
      </div> */}
      <div className="flex justify-center items-center gap-10">
        {mockData.map((item) => (
          <div key={item.id}>
            <a className="font-inter font-medium" href={item.link}>
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
