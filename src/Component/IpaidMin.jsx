import React from 'react'
import { Link } from 'react-router-dom'


const IpaidMin = () => {
  return (
    <div className='flex items-center justify-center'>
        <div>
        <img className='h-96 w-full' src="https://hitechcentury.com/wp-content/uploads/2022/10/Apple-iPad-10th-ipad-large.jpg" alt="" />
        </div>
         
        <div>
        <h1 className='text-6xl font-semibold'>iPaid</h1>
        <h1 className='text-2xl font-semibold'>Lovable. Drawable.</h1>
        <h1 className='text-2xl font-semibold'>Magical.</h1>
        <h1 className='my-2 font-semibold '>From $449</h1>
        <Link  className='bg-blue-600 px-10 py-1 rounded-full' to="/buys">Buy</Link>
        </div>
    </div>
  )
}

export default IpaidMin