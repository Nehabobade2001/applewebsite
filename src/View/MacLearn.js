import React, { Fragment } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdOutlineLockPerson } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import { MacLearnimg, macAirbots } from "../Component/Constant";
import Footer from "../Component/Footer";
import FooterContent from "../Component/FooterContent";




const MacLearn = ({ value }) => {
  return (
    <Fragment>
      <div className="flex items-center justify-center flex-col my-20">
        <div className="w-3/5">
          <p className="text-8xl font-bold bg-gradient-to-r from-red-500  to-blue-500 text-transparent bg-clip-text">
            Pay for your new Apple products over time, interest‑free
          </p>
          <p className="text-5xl font-bold my-2">
            when you choose to check out with Apple Card Monthly Installments.1
          </p>

          <img
            className="my-20"
            src="https://www.apemockups.com/wp-content/uploads/2023/01/Free-iPhone-14-Pro-Deep-Purple-Mockup-Set.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-40">
        <div className="w-1/5 ">
          <h1 className="text-6xl  my-2 mx-16 text-red-400">
            <FaCalendarAlt />
          </h1>
          <h1 className="text-4xl font-bold">
            Low monthly payments. Interest‑free.
          </h1>
        </div>

        <div className="w-1/5 ">
          <h1 className="text-6xl  my-2 mx-16 text-red-400">
            <IoCalendarNumberOutline />
          </h1>
          <h1 className="text-4xl font-bold">
            Low monthly payments. Interest‑free.
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center gap-40 my-12">
        <div className="w-1/5 ">
          <h1 className="text-6xl  my-2 mx-16 text-red-400">
            <MdForwardToInbox />
          </h1>
          <h1 className="text-4xl font-bold">
            Low monthly payments. Interest‑free.
          </h1>
        </div>

        <div className="w-1/5 ">
          <h1 className="text-6xl  my-2 mx-16 text-red-400">
            <MdOutlineLockPerson />
          </h1>
          <h1 className="text-4xl font-bold">
            Low monthly payments. Interest‑free.
          </h1>
        </div>
      </div>
      <div className=" flex items-center justify-evenly my-20 ">
        <div className="w-3/5 ">
          <p className="text-7xl font-bold mx-16  bg-gradient-to-r from-red-500  to-yellow-500 text-transparent bg-clip-text">
            Featured products.{" "}
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center my-20">
        {MacLearnimg?.map((value, i) => (
          <div className="w-80 h-60">
            <img className="w-40 h-full " src={value?.image} alt="" />
            <h1 className="text-4xl font-bold ">{value?.name}</h1>
            <h1 className="text-sm font-bold">
             {value?.name1}
            </h1>
            <h1 className="text-xl font-bold ">{value?.name2}</h1>
          </div>
        ))}
      </div>

      <div className=" flex items-center justify-center ">
        { macAirbots?.map((value, i) => (
          <div className="w-80 h-60 my-40">
            <img className="w-60 h-full " src={value?.image} alt="" />
            <h1 className="text-4xl font-bold ">{value?.name}</h1>
            <h1 className="text-sm font-bold">
             {value?.name1}
            </h1>
            <h1 className="text-xl font-bold ">{value?.name2}</h1>
          </div>
        ))}
      </div>
      <FooterContent/>
    
      
    <Footer/>
     
    </Fragment>
  );
};

export default MacLearn;
