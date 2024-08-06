import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function MacCards() {
  return (
    <div className="flex">
      <div className="flex gap-6 justify-evenly flex-wrap  my-10">
        <div className="lg:h-full lg:w-2/5 bg-red">
          <div className="flex flex-col flex-wrap items-center ">
            <h1 className="w-96 relative text-4xl font-bold  z-20 flex items-center justify-center ">
              Get 3% Daily Cash back with Apple Card.
            </h1>
            <h3
              className="  relative text-2xl font-semibold flex items-center justify-center   z-20"
              style={{
                color:
                  "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
              }}
            >
              And pay over time, interest‑free when you choose to check out with
              Apple Card Monthly Installments.*
            </h3>
            <div className="flex items-center justify-center  text-[#2997ff] text-xl font-bold gap-2">
              <span className="  w-4 my-1">
                {" "}
                <IoIosArrowForward />
              </span>
              <h1 className="text">Lern more</h1>{" "}
              <span className="text">Buy</span>{" "}
              <span className=" my-1 w-4 ">
                <IoIosArrowForward />
              </span>{" "}
            </div>
          </div>
          <div className="top-20 relative ">
            <img
              className="h-96 w-full relative"
              src="https://www.bhphotovideo.com/images/images2500x2500/apple_mu0w2ll_a_ipad_pro_64gb_wi_fi_1568367.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="lg:h-full lg:w-2/5 ">
          <div className="flex flex-col flex-wrap items-center ">
            <h1 className="w-96 relative text-4xl font-bold  z-20 flex items-center justify-center ">
              Trade in your current iPad and get credit toward a new one.
            </h1>
            <h3
              className="  relative text-2xl font-semibold flex items-center justify-center z-20"
              style={{
                color:
                  "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
              }}
            >
              With Apple Trade In, just give us your eligible iPad and get
              credit for a new one. It’s good for you and the planet.**
            </h3>
            <div className="flex items-center justify-center  text-[#2997ff] text-xl font-bold gap-2">
              <span className="  w-4 my-1">
                {" "}
                <IoIosArrowForward />
              </span>
              <h1 className="text">Lern more</h1>{" "}
              <span className="text">Buy</span>{" "}
              <span className=" my-1 w-4 ">
                <IoIosArrowForward />
              </span>{" "}
            </div>
          </div>

          <div className="  ">
            <img
              className="lg:h-96 lg:w-auto  relative "
              src="https://gadgetcentral.co.ke/wp-content/uploads/2023/01/ipad-pro-12.9-2022-7.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
