import Icons from "../components/Icons/icons";

function Values() {
  return (
    <div>
      <div className="flex justify-center items-center py-12 lg: flex-col p-2">
        <div className=" flex justify-center items-center mt-10">
          <p className=" text-alttext text-xl font-unbounded">
            Our Core Values
          </p>
        </div>
        <div className="flex justify-center items-center gap-16 mt-5 flex-wrap">
          <div className="flex justify-center items-center flex-col">
            <Icons />
            <p className="font-unbounded font-normal text-2xl mt-3">
              Innovation
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <Icons />
            <p className="font-unbounded font-normal text-2xl mt-3">
              Collaboration
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <Icons />
            <p className="font-unbounded font-normal text-2xl mt-3">
              Excellence
            </p>
          </div>

          <div className="flex justify-center items-center flex-col">
            <Icons />
            <p className="font-unbounded font-normal text-2xl mt-3">Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Values;
