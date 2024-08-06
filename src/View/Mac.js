import React from "react";
import MacAutoplay from "../Component/MacAutoplay";
import MacHeader from "../Component/MacHeader";
import { Link } from "react-router-dom";
import MacSlider from "../Component/MacSlider";
import MySlider from "../Component/swiper";
import { SwiperSlide } from "swiper/react";
import { MacSliderimage } from "../Component/Constant";
import { Scrollbar } from "swiper/modules";
import MacInfinit from "../Component/MacInfinit";
import Footer from "../Component/Footer";
import FooterContent from "../Component/FooterContent";
import MacCards from "../Component/MacCards";





const Mac = () => {
  return (
    <>
    <div className="w-full">
      <MacHeader />
     
      <div className="flex items-center justify-center h-40">
        <div className="w-1/2 h-20 bg-gray-100">
          <p className="text-sm font-bold">
            Get 3% Daily Cash back with Apple Card. And pay for your new Mac
            over 12 months, interest‑free when you choose to check out with
            Apple Card Monthly Installments.◊{" "}
            <Link className="text-blue-600" to="/maclearn">
              {" "}
              Learn More
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between my-8">
        <h1 className="text-8xl font-semibold">Mac</h1>
        <h1 className="text-2xl font-bold w-60">
          If you can dream it, Mac can do it.
        </h1>
      </div>
      <MacAutoplay />
      <h1 className="text-6xl font-bold my-20 mx-20">Get to know Mac.</h1>

      <div style={{ height: "95vh" }}>
         <MySlider
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          item={4}
          nav={true}
          margin={35}
        >
          {MacSliderimage?.map((value, index) => (
            <SwiperSlide style={{ width: "100%", height: "90vh" }} key={index}>
              <MacSlider value={value} />
            </SwiperSlide>
          ))}
        </MySlider> 
      </div>
      <div className="flex items-center justify-between ">
        <h1 className="font-bold text-3xl mx-16">Explore the lineup.</h1>
      
        <Link className="font-bold text-blue-600 hover:underline hover:underline-offset-4" to="/maccompare"> Compare all Module</Link>
      </div>
      <div className="h-1/4 w-full">
        <img
          className="h-full w-full animate-pulse"
          src="https://www.maclease.de/media/image/macbook_air_farben.jpg"
          alt=""
        />
      </div>
      <MacInfinit/>
      < MacCards />
      <FooterContent/>
    
      
    <Footer/>
    
    </div>
    </>
  );
};

export default Mac;
