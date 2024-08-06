import React from 'react'
import { IoLogoApple } from "react-icons/io5";

export default function MacQuize  ()  {
  return (
    <>
     <h1 className='text-5xl font-semibold relative mx-20 w-auto'>Quick Look</h1>
    <div className='h-0.5 w-4/5 bg-slate-200 relative left-32 '></div>
     <div className='flex items-center justify-center  my-4 '>
        <div className='w-1/5 '>
            <h1 className='text-8xl font-semibold'>13.6”</h1>
            <h1 className='text-xl font-semibold w-auto'>Liquid  display9</h1>
        </div>
        <div className='w-1/5 '>
            <h1 className='text-8xl font-semibold'>15.6”</h1>
            <h1 className='text-xl font-semibold w-auto'>Liquid Retina display9</h1>
        </div>
        <div className='w-1/5 '>
            <h1 className='text-8xl font-semibold'>14.2”</h1>
            <h1 className='text-xl font-semibold w-auto'>Liquid Retina XDR display8</h1>
        </div>
        
    </div>  
     <div className='flex items-center justify-center gap-60 my-20'>
        <div className='h-20 w-20 rounded-md bg-black'>
            <h1 className='text-[#ffffff] relative top-8 left-2  text-xl'><IoLogoApple /></h1>
            <h1  className='text-[#ffffff] mx-8 my-2 text-xl font-bold'>M2</h1>
        </div>
        <div className='h-20 w-20 rounded-md bg-black'>
            <h1 className='text-[#ffffff] relative top-8 left-2 text-xl'><IoLogoApple /></h1>
            <h1  className='text-[#ffffff] mx-8 my-2 text-xl font-bold'>M3</h1>
        </div>
        <div className='h-20 w-20 rounded-md bg-black'>
            <h1 className='text-[#ffffff] relative top-8 left-2 text-xl'><IoLogoApple /></h1>
            <h1  className='text-[#ffffff] mx-8 my-2 text-xl font-bold'>M3</h1>
        </div>
    </div> 
    </>
  )
}

