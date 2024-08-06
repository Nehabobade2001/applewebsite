import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


const HomeCardes = () => {
  return (
    <div className='flex flex-wrap justify-center items-center '>
        <div className="flex gap-6 justify-evenly flex-wrap  my-10">
      
        <div className="lg:h-full lg:w-2/5 bg-red">
         
        <div className="flex flex-col flex-wrap items-center ">
            <h1 className=" relative text-4xl font-bold  z-20 ">
              vision pro
            </h1>
            <h3
              className="  relative text-2xl font-semibold   z-20"
              style={{
                color:
                  "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
              }}
            >
              Titanium.So strong.So light.So Pro
            </h3>
            <div className="flex items-center justify-center  text-[#2997ff] text-xl font-bold gap-2">
          <span className="  w-4 my-1">
            {" "}
            <IoIosArrowForward />
            </span>
           <h1 className="text">
          Lern more</h1> <span className="text">Buy</span>{" "}
          <span className=" my-1 w-4 ">
            <IoIosArrowForward />
          </span>{" "}  
          </div>
         
          </div>
          <div className='top-20 relative '>
          <img
            className="h-96 w-full relative bottom-20"
            src="https://rensai.jp/wp-content/uploads/2024/01/Apple-Vision-Pro-availability-hero.jpg"
            alt=""
          />
          </div>
        </div>

        <div className="lg:h-full lg:w-2/5 ">
          <div className="flex flex-col flex-wrap items-center ">
            <h1 className=" relative text-4xl font-bold  z-20  ">
              Mac book Air
            </h1>
            <h3
              className="  relative text-2xl font-semibold  z-20"
              style={{
                color:
                  "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
              }}
            >
              Titanium.So strong.So light.So Pro
            </h3>
            <div className="flex items-center justify-center  text-[#2997ff] text-xl font-bold gap-2">
          <span className="  w-4 my-1">
            {" "}
            <IoIosArrowForward />
            </span>
           <h1 className="text">
          Lern more</h1> <span className="text">Buy</span>{" "}
          <span className=" my-1 w-4 ">
            <IoIosArrowForward />
          </span>{" "}  
          </div>
         
          </div>

          <div className='  '>
          <img  className="lg:h-96 lg:w-auto  relative "
            src="https://cdn.iphoneincanada.ca/wp-content/uploads/2023/06/Apple-WWDC23-MacBook-Air-15-in-hero-230605_biglarge_2x.jpg"
            alt=""
          />
          </div>
        </div>
      </div>
       <div className="flex justify-evenly flex-wrap my-8">
        <div className="lg:h-auto lg:w-2/5 ">
          <div className="flex flex-col flex-wrap items-center">
            
            <h1 className=" relative text-4xl font-bold  z-10  ">
              Ipaid Min Air
            </h1>
            <h3 className="  relative text-2xl font-semibold  z-10  ">
              Titanium.So strong.So light.So Pro
            </h3>
            <div className="flex items-center justify-center  text-[#2997ff] text-xl font-bold gap-2">
          <span className="  w-4 my-1">
            {" "}
            <IoIosArrowForward />
            </span>
           <h1 className="text">
          Lern more</h1> <span className="text">Buy</span>{" "}
          <span className=" my-1 w-4 ">
            <IoIosArrowForward />
          </span>{" "}  
          </div>
         
          </div>
          <div className='lg:h-96 lg:w-auto relative '>
           <img
            className=" lg:h-full lg:w-auto  relative "
            src="https://hitechcentury.com/wp-content/uploads/2022/10/Apple-iPad-10th-ipad-large.jpg"
            alt=""
          /> 
          </div>
        </div>

        <div className="lg:h-96 lg:w-2/5">
          <div className="flex flex-col items-center ">
            <h1 className=" relative text-4xl font-bold  z-10 ">
              AirPods Pro
            </h1>
            <h3
              className="  relative text-2xl font-semibold   z-10"
              style={{
                color:
                  "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
              }}
            >
              Titanium.So strong.So light.So Pro
            </h3>
            <div className="flex items-center justify-center  text-[#2997ff] text-xl font-bold gap-2">
          <span className="  w-4 my-1">
            {" "}
            <IoIosArrowForward />
            </span>
           <h1 className="text">
          Lern more</h1> <span className="text">Buy</span>{" "}
          <span className=" my-1 w-4 ">
            <IoIosArrowForward />
          </span>{" "}  
          </div>
         
          </div>
          <div className='top-24  '>
          <img className="lg:w-full lg:h-96 relative " src="https://cdn.mos.cms.futurecdn.net/oJKZPRwWHbxrJzA3EVVtFi.jpeg" alt="" />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default HomeCardes