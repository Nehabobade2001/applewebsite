import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import AutoPlaye from "../Component/AutoPlaye";
import HomeSlider from "../Component/HomeSlider";
import { HomeImage } from "../Component/Constant";
import MySlider from "../Component/swiper";
import { SwiperSlide } from "swiper/react";
import Footer from "../Component/Footer";
import FooterContent from "../Component/FooterContent";
import apple from "../assets/homeapl.png";
import HomeCardes from "../Component/HomeCardes";
import IphoneScroller from "../Component/IphoneScroller";



const Home = () => {
  return (
    <main className="">
      <div className="flex  flex-col flex-wrap items-center justify-center">
        <div className=" lg:w-full lg:h-full ">
          <img
            className="lg:w-full lg:h-screen"
            src="https://cdn.ithinkdiff.com/wp-content/uploads/2023/01/2023-MacBook-Pro-b.jpg"
            alt=""
          />
        </div>
        <div className="absolute top-40 ">
          <h1 className="  lg:text-6xl text-xl font-bold mx-10 ">
            iPhone 15 Pro
          </h1>
          <h3 className="   lg:text-3xl  font-bold lg:my-6  ">
            Titanium.So strong.So light.So Pro
          </h3>
          <div className="flex items-center justify-center  text-blue-600">
            <span className="  w-4 my-1">
              {" "}
              <IoIosArrowForward />
            </span>
            <h1 className="text-sm">Lern more</h1>{" "}
            <span className="text-sm">Buy</span>{" "}
            <span className=" my-1 w-4 ">
              <IoIosArrowForward />
            </span>{" "}
          </div>
        </div>
      </div>

      <div className="flex bg-black  flex-col flex-wrap items-center justify-center">
        <div className="relative  z-10">
          <h1 className="  lg:text-6xl text-xl font-bold mx-10 text-[#ffffff] ">
            iPhone 15 Pro
          </h1>
          <h3 className="   lg:text-3xl  font-bold lg:my-6 text-[#ffffff] ">
            Titanium.So strong.So light.So Pro
          </h3>
          <div className="flex items-center justify-center  text-blue-600">
            <span className="  w-4 my-1">
              {" "}
              <IoIosArrowForward />
            </span>
            <h1 className="text-sm">Lern more</h1>{" "}
            <span className="text-sm">Buy</span>{" "}
            <span className=" my-1 w-4 ">
              <IoIosArrowForward />
            </span>{" "}
          </div>
        </div>
        <div className="  lg:w-full lg:h-full relative lg:bottom-20 ">
          <img
            className="lg:w-full lg:h-screen "
            src="https://teknosafari.net/wp-content/uploads/2022/10/iPhone-15-ile-ilgili-iddialar.jpg"
            alt=""
          />
        </div>
      </div>

      <AutoPlaye />

      <HomeCardes />

       <div className="h-full w-full">
        <MySlider
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {HomeImage?.map((value, index) => (
            <SwiperSlide
              loop={true}
              
              key={index}
            >
              <HomeSlider value={value} i={index} />
            </SwiperSlide>
          ))}
        </MySlider>
      </div> 
      <IphoneScroller/>

     <FooterContent />

         <Footer /> 
    </main>
  );
};

export default Home;
