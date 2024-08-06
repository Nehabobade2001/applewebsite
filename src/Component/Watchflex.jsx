import React from "react";
import { FaApple } from "react-icons/fa6";

export default function Watchflex() {
  return (
    <>
    <div className="flex my-10">
      <div className="w-1/2">
        <span className=" text-3xl relative left-24 font-bold">
          <FaApple />
        </span>
        <span className="relative left-32 bottom-10 text-4xl  font-semibold">
          {" "}
          Watch
        </span>
        <h1 className="text-red-800  font-bold relative left-32 bottom-12">
          SERIES 9
        </h1>
        <h1 className="relative left-20 bottom-10 text-3xl font-bold">
          Smarter. Brighter. Mightier.
        </h1>
        <h1 className=" text-2xl relative left-20 font-semibold">From $399</h1>
        <button className="bg-blue-600 rounded-full px-8 py-2 relative left-16 my-4">
          BUY
        </button>
      </div>
      <div>
        <img src="https://tectoc.blog/wp-content/uploads/2022/07/Screen-Shot-2022-07-24-at-09.20.43-1000x600.png" alt="" />
      </div>
    </div>
    <div className="h-screen w-full">
      <img className="h-80 w-80 animate-spin" src="https://tse2.mm.bing.net/th?id=OIP.WTfVHKYepjxaZsleJ9lp_QHaHD&pid=Api&P=0&h=180" alt="" />
    </div>
    </>
  );
}
