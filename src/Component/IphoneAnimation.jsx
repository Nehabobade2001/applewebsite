import React from 'react'
import {motion} from 'framer-motion'

export default function IphoneAnimation  ()  {
  return (
    <div className='w-full py-10 bg-black'>
    {['Data','Information','Emotion','Converts'].map((i,index)=>{
        return (
            <div className='masker overflow-hidden'>
            <motion.h1 initial={{y:"100%"}} whileInView={{y:"0"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1}}    className='text-9xl font-bold text-[#ffffff] mx-auto'>{i}</motion.h1>
            </div>
        )
    })}
    </div>
  )
}
