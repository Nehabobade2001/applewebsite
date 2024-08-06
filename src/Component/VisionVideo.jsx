import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

class VisionVideo extends React.Component {
  render() {
    const shouldLoop = true;
    return (
      <div className="h-screen w-full ">
        <ReactPlayer
          data-scroll
          data-scroll-speed="-2.2"
          className=""
          url="https://youtu.be/FT3ODSg1GFE?si=HdFdxWeYud22gCMV"
          loop={shouldLoop}
          playing={true} // Set it to true if you want the video to start playing automatically
          controls={true}
          width="100%"
          height="200%" // Set it to true if you want video controls
        />
        
        <div className=" absolute top-20 h-auto w-3/5 left-96">
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: "0" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
            className="text-9xl font-semibold text-[#ffffff] "
          >
            Vision pro
          </motion.h1>
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: "0" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
            className="text-5xl py-14 font-semibold w-auto text-[#ffffff]"
          >
            Welcome to the era of spatial computing
          </motion.h1>
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: "0" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
            className="text-5xl py-14 font-semibold w-auto text-[#ffffff]"
          >
            Apple Vision Pro seamlessly blends
          </motion.h1>
         
          <motion.h1
            initial={{ y: "100%" }}
            whileInView={{ y: "0" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
            className="text-5xl py-14 font-semibold w-auto text-[#ffffff]"
          >
           Your navigate simply by ustng your
           <br></br>
          {/* <h1 className="mx-20">eyes,hands,and voice</h1> */}
          </motion.h1>
        </div>
        <motion.div  data-scroll
          data-scroll-speed="-2.2" initial={{y:"100%"}} whileInView={{y:"0"}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}} className="h-96 w-80 mx-8 relative bottom-96">
          <img className="h-full w-full rounded-full" src="https://www.techmoblog.com/uploads/content_images/202306/img_1686542912_262794646e6f.jpg" alt="" />
        </motion.div>
        <motion.div  data-scroll
          data-scroll-speed="-2.2" initial={{y:"100%"}} whileInView={{y:"0"}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}} className="h-96 w-80 mx-8 absolute" style={{left:"60%",top:"10%"}}>
          <img className="h-full w-full rounded-full" src="https://wp-socialnation-assets.s3.ap-south-1.amazonaws.com/wp-content/uploads/2023/06/06145111/apple-vision-pro-FI-Article-copy.jpg" alt="" />
        </motion.div>

        <motion.div  data-scroll
          data-scroll-speed="-2.2" initial={{y:"100%"}} whileInView={{y:"0"}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}} className="h-96 w-80 mx-8 absolute" style={{left:"40%", top:"98%"}}>
          <img className="h-full w-full rounded-full" src="https://www.oled-info.com/sites/oled/files/2023-06/Apple-Vision-Pro.jpg" alt="" />
        </motion.div>
      </div>
    );
  }
}

export default VisionVideo;
