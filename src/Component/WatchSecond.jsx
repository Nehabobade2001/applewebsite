import React from 'react'
import { FaApple } from "react-icons/fa6";

export default function WatchSecond ()  {
  return (
   <>
     <div className="w-full h-screen relative ">
        <img
          className="h-full w-full"
          src="https://www.macworld.com/wp-content/uploads/2022/09/Apple-Watch-Ultra-release-date-price-specs-4.jpg?quality=50&strip=all"
          alt=""
        />
        <div className="w-1/2  absolute top-20 left-80 flex items-center flex-col">
          <span className=" text-3xl  font-bold">
            <FaApple />
          </span>
          <span className="relative left-20 bottom-10 text-4xl  font-semibold">
            {" "}
            Watch
          </span>
          <h1 className="text-red-800  font-bold relative left-14 bottom-12">SERIES 9</h1>
          <h1 className="relative left-20 bottom-10 text-5xl font-bold">Smarter. Brighter. Mightier.</h1>
          <h1 className=" text-2xl relative left-12 font-semibold">From $399</h1>
          <button className="bg-blue-600 rounded-full px-8 py-2 relative left-8 my-4">BUY</button>
        </div>
      </div>
   </>
  )
}
