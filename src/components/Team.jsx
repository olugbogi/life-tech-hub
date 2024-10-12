import BecomeBtn from "./Buttons/BecomeBtn";
import Arrow from "../assets/arrows.svg";
import daddyBoboye from "../assets/daddy-boboye.svg";
import david from '../assets/david-akinboyewa.svg'
import folashade from '../assets/folashade.svg'
import isreal from '../assets/israel-boboye.svg'
import andrew from '../assets/andrew-orekoya.svg'
import faith from '../assets/torres-faith.svg'
import ifeoluwa from '../assets/ifeoluwa-boboye.svg'
import joshua from '../assets/joshua-adetunji.svg'
import favour from '../assets/favor-ekundayo.svg'
import samuel from '../assets/sunday-samuel.svg'

function Team() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-20 rounded-t-sm ">

      <div
        id="meet"
        className="flex justify-center items-center flex-col mt-40"
      >
 
        <div>
          <h5 className="text-center font-unbounded font-normal text-base mb-4">
            MEET OUR TEAM
          </h5>
          <h1 className="font-unbounded font-normal text-4xl mb-5 text-center">
            We bring a wealth of <span className="text-primary">knowledge</span>
            , <br />
            <span className="text-primary">experience</span>, and{" "}
            <span className="text-primary">creativity</span> to help you <br />
            thrive in <span className="text-primary">Tech</span>.
          </h1>
          <div className="flex justify-center items-center flex-col">
            <BecomeBtn />
            <img src={Arrow} alt="" className="mt-4" />
          </div>
        </div>
        <div className="bg-primary flex mt-6 p-12 justify-center items-center flex-wrap gap-6 md:p-2">
          <div className="flex gap-6 flex-wrap mt-16 md:flex-wrap justify-center items-center ">
          <div className="bg-white rounded-2xl">
            <img src={daddyBoboye} alt="" className="mt-3" />
            <h1 className="text-center mt-5 font-unbounded font-normal text-xs">Pastor Isaac Boboye</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Program Director</p>
          </div>

          <div className="bg-white rounded-2xl">
            <img src={david} alt="" className="mt-2 p-3 rounded-3xl" />
            <h1 className="text-center  font-unbounded font-normal text-xs">David Akinboyewa</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Asst. Program Director</p>
          </div>


          <div className="bg-white rounded-2xl">
            <img src={folashade} alt="" className="mt-2 p-3 rounded-3xl" />
            <h1 className="text-center  font-unbounded font-normal text-xs">Folashade Adeola-Adegbite</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Project Manager</p>
          </div>

          <div className="bg-white rounded-2xl">
            <img src={isreal} alt="" className="mt-2 p-3 rounded-3xl" />
            <h1 className="text-center  font-unbounded font-normal text-xs">Israel Boboye</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Project Manager</p>
          </div>
  
          <div className="bg-white rounded-2xl">
            <img src={andrew} alt="" className="mt-2 p-3 rounded-3xl" />
            <h1 className="text-center  font-unbounded font-normal text-xs">Andrew Orekoya</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Project Manager</p>
          </div>
     </div>
    
        
     <div className="flex gap-6 flex-wrap mb-16 md:flex-wrap justify-center items-center ">
          <div className="bg-white rounded-2xl">
            <img src={faith} alt="" className="mt-3 " />
            <h1 className="text-center mt-5 font-unbounded font-normal text-xs">Faith Olanrewaju</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Program Director</p>
          </div>

          <div className="bg-white rounded-2xl">
            <img src={ifeoluwa} alt="" className="mt-2 p-3 rounded-3xl" />
            <h1 className="text-center  font-unbounded font-normal text-xs">Ifeoluwa Boboye</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">UI/UX Instructor</p>
          </div>


          <div className="bg-white rounded-2xl">
            <img src={joshua} alt="" className="mt-2 p-3 rounded-3xl" />
            <h1 className="text-center  font-unbounded font-normal text-xs">Joshua Adetunji</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Graphic Designer</p>
          </div>

          <div className="bg-white rounded-2xl">
            <img src={favour} alt="" className="mt-2 p-3 rounded-3xl" />
            <h1 className="text-center  font-unbounded font-normal text-xs">Favour Ekundayo</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Content Writer/Creator</p>
          </div>
  
          <div className="bg-white rounded-2xl">
            <img src={samuel} alt="" className="mt-2 p-3 rounded-3xl" />
            <h1 className="text-center  font-unbounded font-normal text-xs">Samuel Sunday</h1>
            <p className="text-center mt-3 mb-3 font-unbounded font-light text-xs">Video Editor</p>
          </div>
     </div>
     </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
