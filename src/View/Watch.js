import React from 'react'
import { motion } from "framer-motion"
import Watchtext from '../Component/Watchtext'
import WatchSecond from '../Component/WatchSecond'
import Watchflex from '../Component/Watchflex'



const Watch = () => {
  return (
    <>
  <div>
   <Watchtext/>
   <WatchSecond/>
   <Watchflex/>
  </div>
    </>
  )
}

export default Watch