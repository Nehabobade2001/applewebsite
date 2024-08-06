import React, { Fragment } from "react";
import { RxCross2 } from "react-icons/rx";

import { IoIosArrowForward } from "react-icons/io";
import MacAnimation from "../Component/MacAnimation";
import MacQuize from "../Component/MacQuize";
import MacCoros from "../Component/MacCoros";
import MacComputer from "../Component/MacComputer";
import Footer from "../Component/Footer";
import FooterContent from "../Component/FooterContent";




const MacCompare = () => {
  return (
    <Fragment>
      <div className="flex justify-center flex-col items-center my-4">
        <div>
          <h1 className="text-7xl font-semibold my-4">Compare Mac models</h1>
        </div>
      </div>
      <div className="flex justify-center flex-row gap-20 items-center">
        <h1 className="text-xl font-bold text-blue-600 hover:underline hover:underline-offset-4">
          See All module{" "}
          <span className="relative left-36 bottom-6 my-4">
            <IoIosArrowForward />
          </span>
        </h1>
        <h1 className="text-xl font-bold text-blue-600 hover:underline hover:underline-offset-4">
          Shop Mac{" "}
          <span className="relative left-28 bottom-6 my-4">
            <IoIosArrowForward />
          </span>
        </h1>
      </div>
      <div className="flex justify-center flex-row gap-20 items-center">
        <h1 className="text-xl font-bold text-blue-600 hover:underline hover:underline-offset-4">
          Chat with a Specialist
          <span className="relative left-52 bottom-6 my-4">
            <IoIosArrowForward />
          </span>
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="w-auto h-20  ">
          <select className="py-4 px-12 rounded-md my-4 mx-4  bg-black  border-2 hover:border-[#2997ff] text-[#ffffff]">
            <option
              className="  border-2 hover:border-[#2997ff] text-black"
              value="india"
            >
              iMac (M3,four ports)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in (M3)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in M3 (M2,-2023)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook pro 13 -in (M3)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air(intel , 2017)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air (intel, 2022)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 13-in (intel,two parts,2020)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in (M1,intel,three parts,2020)
            </option>
          </select>
        </div>
        <div className="w-auto h-20  ">
          <select className="py-4 px-12 rounded-md my-4 mx-4  bg-black  border-2 hover:border-[#2997ff] text-[#ffffff]">
            <option
              className="  border-2 hover:border-[#2997ff] text-black"
              value="india"
            >
              MacBook Air 13-in (intel,two parts,2020)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in M3 (M2,-2023)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in (M3)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook pro 13 -in (M3)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air(intel , 2017)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air (intel, 2022)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 13-in (intel,two parts,2020)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in (M1,intel,three parts,2020)
            </option>
          </select>
          {/* <h1 className="text-[#ffffff] w-2 text-xl relative left-96 mx-36 bottom-12 ">
          <RxCross2 />
        </h1> */}
        </div>
        <div className="w-auto h-20  ">
          <select className="py-4 px-12 rounded-md my-4 mx-4  bg-black  border-2 hover:border-[#2997ff] text-[#ffffff]">
            <option
              className="  border-2 hover:border-[#2997ff] text-black"
              value="india"
            >
              MacBook Air (intel, 2022)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in (M3)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in M3 (M2,-2023)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook pro 13 -in (M3)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air(intel , 2017)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air (intel, 2022)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 13-in (intel,two parts,2020)
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              MacBook Air 15-in (M1,intel,three parts,2020)
            </option>
          </select>
          {/* <h1 className="text-[#ffffff] w-2 text-xl relative left-96 mx-36 bottom-12 ">
          <RxCross2 /> 
        </h1>*/}
        </div>
      </div>
      
 < MacAnimation/>
 <MacQuize/>
 <MacCoros/>
 <MacComputer/>
 <FooterContent/>
    
      
    <Footer/>
    </Fragment>
  );
};

export default MacCompare;
