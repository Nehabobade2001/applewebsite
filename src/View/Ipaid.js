import React, { Fragment } from 'react'
import IPaidHeader from '../Component/IPaidHeader'
import { Link } from 'react-router-dom'
import IpaidHome from '../Component/IpaidHome'
import IpaidMin from '../Component/IpaidMin'
import IpaidBest from '../Component/IpaidBest'
import MacQuize from '../Component/MacQuize'
import Footer from "../Component/Footer";
import FooterContent from "../Component/FooterContent"
import { IpaidImage } from '../Component/Constant'
import MacHeader from '../Component/MacHeader'



const Ipaid = () => {
  return (
    <Fragment>
       <IPaidHeader/>   
   <div className="flex items-center justify-center  ">
        <div className="w-full  bg-black">
          <p className="text-sm font-bold w-1/2 mx-60 text-[#ffffff]">
            Get 3% Daily Cash back with Apple Card. And pay for your new Mac
            over 12 months, interest‑free when you choose to check out with
            Apple Card Monthly Installments.◊{" "}
            <Link className="text-blue-600" to="/maclearn">
              {" "}
              Learn More
            </Link>{" "}
          </p>
        </div>
      </div>
      
    
       <IpaidHome/>
      <IpaidMin/>
      <IpaidBest/>
      <MacQuize/>
      <FooterContent/> 
     
      <Footer/>
   
    </Fragment>
  )
}

export default Ipaid