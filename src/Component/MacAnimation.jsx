import React, { Fragment } from 'react'



export default function MacAnimation  ()  {
  return (
 <Fragment>
     <div className="flex flex-row justify-center items-center gap-10  my-10 ">
        <div className="h-auto w-80">
          <img className="relative hover:bottom-4"
            src="https://www.bhphotovideo.com/images/images2000x2000/Apple_MC503LL_A_13_3_MacBook_Air_Notebook_740327.jpg"
            alt=""
          />
          <div className="flex flex-row gap-6">
            <div className="h-14 w-14 bg-black rounded-full hover:bg-red-600"></div>
            <div className="h-14 w-14 bg-yellow-400 rounded-full  hover:bg-blue-600"></div>
            <div className="h-14 w-14 bg-blue-400 rounded-full  hover:bg-yellow-600"></div>
            <div className="h-14 w-14 bg-pink-400 rounded-full  hover:bg-green-600"></div>
          </div>
        </div>
        <div className="h-auto w-80">
          <img  className="relative hover:bottom-4"
            src="https://www.bhphotovideo.com/images/images2000x2000/Apple_MC503LL_A_13_3_MacBook_Air_Notebook_740327.jpg"
            alt=""
          />
          <div className="flex flex-row gap-6 justtfy-center  ">
            <div className="h-14 w-14 bg-green-400 rounded-full hover:bg-red-600"></div>
            <div className="h-14 w-14 bg-black rounded-full  hover:bg-blue-600"></div>
            <div className="h-14 w-14 bg-red-400 rounded-full  hover:bg-yellow-600"></div>
            <div className="h-14 w-14 bg-pink-800 rounded-full  hover:bg-green-600"></div>
          </div>
        </div>
        <div className="h-auto w-80">
          <img  className="relative hover:bottom-4"
            src="https://www.bhphotovideo.com/images/images2000x2000/Apple_MC503LL_A_13_3_MacBook_Air_Notebook_740327.jpg"
            alt=""
          />
          <div className="flex flex-row gap-6">
            <div className="h-14 w-14 bg-black rounded-full hover:bg-red-600"></div>
            <div className="h-14 w-14 bg-yellow-400 rounded-full  hover:bg-blue-600"></div>
            <div className="h-14 w-14 bg-blue-400 rounded-full  hover:bg-yellow-600"></div>
            <div className="h-14 w-14 bg-pink-400 rounded-full  hover:bg-green-600"></div>
          </div>
        </div>
  </div>

 </Fragment>
  )
}

