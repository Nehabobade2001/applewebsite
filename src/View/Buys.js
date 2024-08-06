import React from 'react'
import BuysSlider from '../Component/BuysSlider'
import MacQuize from '../Component/MacQuize';
import Footer from "../Component/Footer";
import FooterContent from "../Component/FooterContent";




const Buys = () => {
  return (
    <>
    <div className='flex flex-center justify-evenly my-10 items-center gap-96'>
        <div>
        <h1 className='text-5xl font-bold'>Buy iPad</h1>
        <h1 className='text-xl font-semibold'>10th generation</h1>
        <h1>From $449 or $37.41/mo.for 12 mo.</h1>
        </div>
        <div>
            <button className='bg-slate-200 rounded-full py-1 px-10 my-4'>Get $45-$580 for your trade-in with Apple.+</button>
            <br></br>
            <button className='bg-slate-200 rounded-full py-1 px-10'>Get 3% Daily cash back with Apple card +</button>
        </div>
    </div>
    <BuysSlider/>
    <FooterContent/>
    
      
    <Footer/>
    
    </>
  )
}

export default Buys