import React from "react";
import { Link } from "react-router-dom";
import { IoLogoApple } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaGripLines } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="h-24 w-100 bg-slate-700 flex gap-16 flex-wrap  items-center justify-center sticky top-0 z-40">
        <div className="hidden lg:block w-1/3 h-20 text-[#ffffff]">
          <h1 className="text-xs font-bold my-6 mx-6">
            Choose another country or region to see content specific to your
            location and shop online.
          </h1>
        </div>
        <div className="w-auto h-20  ">
          {/* <h1 className=""><IoCheckmarkSharp /></h1> */}
          <select className="py-2 lg:px-20 rounded-md my-4 mx-4  bg-black  border-2 hover:border-[#2997ff] text-[#ffffff]">
            <option
              className=" bg-black bg-opacity-60 border-2 hover:border-[#2997ff]"
              value="india"
            >
              India
            </option>
            <option
              className=" bg-black bg-opacity-80 border-2 hover:border-[#2997ff]"
              value="other country or region"
            >
              Other country or region
            </option>
          </select>
          <button className="bg-[#ffffff] py-2 px-4 rounded-md">
            Continue
          </button>
          <h1 className="text-[#ffffff] w-2 text-xl relative lg:left-96 mx-36 bottom-12 ">
            <RxCross2 />
          </h1>
        </div>
      </div>

      <div className="lg:block hidden  h-14  font-semibold sticky top-24 z-40  bg-black  text-black ">
        <div className="flex  text-[#ffffff] items-center justify-center gap-6 ">
        <h1 >
          <IoLogoApple />
        </h1>
        <Link to="/">Store</Link>
        <Link to="/mac">mac</Link>
        <Link to="/ipaid">iPad</Link>
        <Link to="/iphone"> Iphone</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/vision">Vision</Link>

        <h4>AirPods</h4>
        <Link to="tv">Tv&Home</Link>
        <h4>Entertainment</h4>
        <h4>Accessories</h4>
        <h4>Support</h4>
        <h1>
          <IoIosSearch />
        </h1>
        <h1>
          <IoIosLock />
        </h1>
        </div>
      </div>
{/* mobile view ke liye */}

      <div className=" lg:hidden block  flex  justify-between flex-wrap items-center gap-4 h-14  font-semibold sticky top-24 z-40  bg-gray-100  ">
        <div>
        <h1 className="text-xl">
          <IoLogoApple />
        </h1>
        </div>
        <div className="flex  justify-evenly flex-wrap gap-6">
        <h1 className="text-xl">
          <IoIosSearch />
        </h1>
        <h1 className="text-xl">
          <IoIosLock />
        </h1>
        <h1 className="text-xl">
        <FaGripLines />
        </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
