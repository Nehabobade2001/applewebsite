import React, { Fragment } from "react";
import { FiBox } from "react-icons/fi";
import "../App.css";
import { MacText } from "./Constant";
import MySlider from "./swiper";
import { SwiperSlide } from "swiper/react";



export default function MacInfinit({value}) {
  return (
    <Fragment>
        
       <MySlider
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          
          item={4}
          nav={true}
          margin={35}
        >
          {MacText?.map((value, index) => (
            <SwiperSlide style={{ width: "100%", height: "40vh" }} key={index}>
                <div className='snap-start w-80 border-2 border-solid p-4 rounded-md'>
          <h1 className="text-4xl font-bold mx-14 ">
            <FiBox />
          </h1>
          <h1 className="text-3xl font-semibold">{value?.name}</h1>
          <h1 className="text-3xl font-semibold">{value?.name1}</h1>
          <h1 className="text-xl font-semibold">{value?.name2}</h1>
        </div>
            </SwiperSlide>
          ))}
        </MySlider>
     
     
    </Fragment>
  );
}
