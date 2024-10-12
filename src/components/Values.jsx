import Icons from "../components/Icons/icons";

function Values() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-2 py-12">
        <div className="flex items-center justify-center mt-10 ">
          <p className="text-xl text-alttext font-unbounded">Our Core Values</p>
        </div>
        <div className="flex flex-wrap items-center justify-around px-5 mt-5 gap-14 lg:flex-nowrap md:gap-28">
          <div className="flex flex-col items-center justify-center w-auto">
            <Icons />
            <p className="mt-3 font-lg normal text- font-unbounded md:text-2xl">
              Innovation
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-auto">
            <Icons />
            <p className="mt-3 font-lg normal text- font-unbounded md:text-2xl">
              Collaboration
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-auto">
            <Icons />
            <p className="mt-3 font-lg normal text- font-unbounded md:text-2xl">
              Excellence
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-auto">
            <Icons />
            <p className="mt-3 font-lg normal text- font-unbounded md:text-2xl">
              Growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
