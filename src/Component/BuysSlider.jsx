import React from 'react'
import MySlider from './swiper'
import { SwiperSlide } from 'swiper/react'
import { BuysImage } from './Constant'



export default function BuysSlider  ({value}) {
  return (
<div className='flex justify-evenly '>
    <div style={{ height: "90vh", width:"90vh" }}>
     <MySlider
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
    >
      {BuysImage?.map((value, index) => (
        <SwiperSlide style={{ width: "90vh", height: "60vh" }} key={index}>
         <div className='h-96 w-full bg-red-400'>
             <img className='h-full w-full' src={value?.image} alt="" />
         </div>
        </SwiperSlide>
      ))}
    </MySlider> 
  </div>
  <div className='h-auto w-1/3 border-2 border-solid'>
    <div>
        <h1 className='text-2xl font-bold mx-20 my-4'>Finish.Pick your favorite color</h1>
        <div className='flex gap-4 justify-evenly flex-wrap'>
        <div className='h-36 w-52 rounded-md border-2 border-solid'>
        <div className='h-10 w-10 bg-blue-400 rounded-full m-12'></div>
        <h1 className='relative bottom-8 left-14'>Blue</h1>
       </div>
       <div className='h-36 w-52 rounded-md border-2 border-solid'>
        <div className='h-10 w-10 bg-blue-400 rounded-full m-12'></div>
        <h1 className='relative bottom-8 left-14'>Blue</h1>
       </div>
       <div className='flex gap-4 justify-evenly'>
        <div className='h-36 w-52 rounded-md border-2 border-solid'>
        <div className='h-10 w-10 bg-blue-400 rounded-full m-12'></div>
        <h1 className='relative bottom-8 left-14'>Blue</h1>
       </div>
       <div className='h-36 w-52 rounded-md border-2 border-solid'>
        <div className='h-10 w-10 bg-blue-400 rounded-full m-12'></div>
        <h1 className='relative bottom-8 left-14'>Blue</h1>
       </div>
       </div>
       </div>
    </div> 
  </div>
  </div>
    
  )
}

