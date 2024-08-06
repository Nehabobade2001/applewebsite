import React from 'react'
import { IpaidImage,  } from './Constant'


export default function IPaidHeader () {
  return (
    <>
     <div className="h-40 w-100 bg-red  bg-black  flex gap-16 items-center justify-center">
      {IpaidImage?.map((value) => (
        <div>
          <img
            className="h-full w-20"
            src={value?.image}
            alt=""
          />
          <h1 className="text-sm text-[#ffffff] font-semibold mx-2">{value.name}</h1>
        </div>
      ))}
    </div>
    </>
  )
}
