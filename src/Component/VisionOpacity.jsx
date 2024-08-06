import React from "react";
import { motion } from "framer-motion";

export default function VisionOpacity() {
  return (
    <div className="relative">
      <img
        src="https://bernardmarr.com/wp-content/uploads/2023/06/AdobeStock_582551464.jpeg"
        alt=""
      />
      <div className="absolute  w-1/2 h-28 left-80 masker top-40 opacity-25 flex items-center flex-col">
        {["Entertainment", "The ultimate theater", "Wherever you are"].map(
          (i, index) => {
            return (
              <div>
                <motion.h1 initial={{y:"100%"}} whileInView={{y:"0"}} transition={{ease:[0.76, 0, 0.24, 1],duration:2}}  className="text-5xl font-bold text-[#ffffff]" >
                  {i}
                </motion.h1>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
