import React from "react";
import { MacImage } from "./Constant";
import { Link } from "react-router-dom";




export default function MacHeader  ({ value })  {
  return (
    <>
    <div className="h-20 w-100 bg-red my-12  flex-wrap flex gap-16 items-center justify-center">
      {MacImage?.map((value) => (
        <div>
          <img
            className="lg:h-full lg:w-20"
            src={value?.image}
            alt=""
          />
          <h1 className="text-sm font-semibold mx-2">{value.name}</h1>
        </div>
      ))}
    </div>
    
    </>
  );
};

