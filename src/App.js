import React from 'react'
import ProtectedRoutes from './Component/ProtectedRoutes'
import Layout from './Component/Layout'
// import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  // const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Layout>
      <ProtectedRoutes/>
    </Layout>
    </>
  )
}

export default App


