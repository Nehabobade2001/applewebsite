import React from "react";
// import Swiper from "swiper";
import "./index.css";
// Import Swiper styles
import "swiper/css";  
import 'swiper/css/scrollbar';


import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
// import 'swiper/css/free-mode';
// import 'swiper/css/scrollbar';


export default function MySlider({ children, item, margin, nav, autoplay,loop,scrollbar }) {
  return (
    <div className="w-100">
      <Swiper
        autoplay={autoplay ? autoplay : ""}
        scrollbar={scrollbar ? scrollbar : ""}
        slidesPerView={item ? item : 1}
        spaceBetween={margin ? margin : 30}
        navigation={nav ? nav : true}
        loop={true}
        // direction={'vertical'}
        // freeMode={true}
        // mousewheel={true}
        
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </div>
  );
}
