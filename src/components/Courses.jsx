import uiDesign from "../assets/ui-ux-img.svg";
import GetStarted from "./Buttons/GetStartedBtn";
import Months from "../assets/months.svg";
import Online from "../assets/online.svg";
import Beginner from "../assets/beginner.svg";
import dataAnalysis from '../assets/data-analysis.svg'
import mobileApp from '../assets/mobile-app.svg'
import digitalMarketing from '../assets/digital-marketing.svg'
import cloudComputing from '../assets/cloud-computing.svg'
import webDevelopment from '../assets/web-development.svg'

function Courses() {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-32">
        <div className="mb-16">
          <p className="font-unbounded font-normal text-base text-center mb-3">
            OUR COURSES
          </p>
          <h1 className="font-unbounded font-medium text-4xl tracking-wider text-center">
            We offer a range of courses designed to equip <br /> you with
            essential tech skills for the digital <br />{" "}
            world
          </h1>
        </div>

        <div className="flex gap-5  flex-wrap justify-center items-center">
          <div className="border-2  p-1 rounded-2xl">
            <div>
              <img src={uiDesign} alt="" className="rounded-xl w-80" />
              <h4 className="font-unbounded text-base mt-4 ml-1">
                UI/UX Design Essential Training
              </h4>
              <div className="flex justify-center gap-11 mt-5 mr-4">
                <div className="flex gap-2">
                  <img src={Months} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    2 Months
                  </p>
                </div>

                <div className="flex gap-2">
                  <img src={Online} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">Online</p>
                </div>

                <div className="flex gap-2">
                  <img src={Beginner} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    Beginner
                  </p>
                </div>
              </div>

              <div className="mt-5 mb-6">
                <GetStarted />
              </div>
            </div>
          </div>

          <div>
            <div className="border-2 border-solid p-1 rounded-2xl">
              <img src={dataAnalysis} alt="" className="rounded-xl w-80" />
              <h4 className="font-unbounded  text-base mt-4 ml-2">
                Data Analysis
              </h4>
              <div className="flex justify-center gap-10 mt-5 mr-4">
                <div className="flex gap-2">
                  <img src={Months} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    2 Months
                  </p>
                </div>

                <div className="flex gap-2">
                  <img src={Online} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">Online</p>
                </div>

                <div className="flex gap-2">
                  <img src={Beginner} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    Beginner
                  </p>
                </div>
              </div>

              <div className="mt-5 mb-6 ml-1">
                <GetStarted />
              </div>
            </div>
          </div>

          <div>
            <div className="border-2 border-solid p-1 rounded-2xl">
              <img src={mobileApp} alt="" className="rounded-xl w-80" />
              <h4 className="font-unbounded text-base mt-4 ml-2">
                Mobile App Development
              </h4>
              <div className="flex justify-center gap-10 mt-5 mr-4">
                <div className="flex gap-2">
                  <img src={Months} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    2 Months
                  </p>
                </div>

                <div className="flex gap-2">
                  <img src={Online} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">Online</p>
                </div>

                <div className="flex gap-2">
                  <img src={Beginner} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    Beginner
                  </p>
                </div>
              </div>

              <div className="mt-5 mb-6 ml-1">
                <GetStarted />
              </div>
            </div>
            </div>
              
          <div>
            <div className="border-2 border-solid p-1 rounded-2xl">
              <img src={dataAnalysis} alt="" className="rounded-xl w-80" />
              <h4 className="font-unbounded  text-base mt-4 ml-2">
                Data Analysis
              </h4>
              <div className="flex justify-center gap-10 mt-5 mr-4">
                <div className="flex gap-2">
                  <img src={Months} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    2 Months
                  </p>
                </div>

                <div className="flex gap-2">
                  <img src={Online} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">Online</p>
                </div>

                <div className="flex gap-2">
                  <img src={Beginner} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    Beginner
                  </p>
                </div>
              </div>

              <div className="mt-5 mb-6 ml-1">
                <GetStarted />
              </div>
            </div>
          </div>

             
          <div>
            <div className="border-2 border-solid p-1 rounded-2xl">
              <img src={dataAnalysis} alt="" className="rounded-xl w-80" />
              <h4 className="font-unbounded  text-base mt-4 ml-2">
                Data Analysis
              </h4>
              <div className="flex justify-center gap-10 mt-5 mr-4">
                <div className="flex gap-2">
                  <img src={Months} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    2 Months
                  </p>
                </div>

                <div className="flex gap-2">
                  <img src={Online} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">Online</p>
                </div>

                <div className="flex gap-2">
                  <img src={Beginner} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    Beginner
                  </p>
                </div>
              </div>

              <div className="mt-5 mb-6 ml-1">
                <GetStarted />
              </div>
            </div>
          </div>
         

         
          <div>
            <div className="border-2 border-solid p-1 rounded-2xl">
              <img src={dataAnalysis} alt="" className="rounded-xl w-80" />
              <h4 className="font-unbounded  text-base mt-4 ml-2">
                Data Analysis
              </h4>
              <div className="flex justify-center gap-10 mt-5 mr-4">
                <div className="flex gap-2">
                  <img src={Months} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    2 Months
                  </p>
                </div>

                <div className="flex gap-2">
                  <img src={Online} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">Online</p>
                </div>

                <div className="flex gap-2">
                  <img src={Beginner} alt="" />
                  <p className="text-neutral-900 font-medium text-xs">
                    Beginner
                  </p>
                </div>
              </div>

              <div className="mt-5 mb-6 ml-1">
                <GetStarted />
              </div>
            </div>
          </div>

          
          </div>
        </div>

       
          </div>
        
    
    
  );
}

export default Courses;
