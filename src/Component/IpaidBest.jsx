import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { IpaidHomeses, IpaidTextp } from './Constant'




export default function IpaidBest  ({value})  {
  return (
    <Fragment>
    <div className='flex flex-col items-center justify-center my-10'>
        <h1 className='text-6xl font-bold'>Which iPaid is right for you ?</h1>
        <Link className="font-bold text-blue-600 hover:underline hover:underline-offset-4 my-4 text-xl " to="/maccompare"> Compare all Module</Link>

    </div>
    <div className='flex items-center justify-center my-20'>
        {IpaidHomeses?.map((value,i)=>(

       
        <div className='h-60 w-60'>
            <img className='h-full w-full' src={value?.image} alt="" />
            <h1 className='text-xl font-bold italic my-2 relative left-20'>{value?.name}</h1>
          
        </div>
       ))}
       
    </div>
    <div className='flex items-center justify-center '>
        { IpaidTextp?.map((value,i)=>(

       
        <div className='w-1/6 my-8'>
        <p className=''>{value?.p}</p>
        <h1 className='my-4 mx-10'>From $799</h1>
       <Link  className='bg-blue-600 px-10 py-1 rounded-full mx-10' to="/buys">Buy</Link>
        </div>
         ))}
    </div>
    </Fragment>
  )
}

