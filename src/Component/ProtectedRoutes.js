import React, { useMemo } from 'react'
import { AllRoutes } from '../routes'
import { Route, Routes } from 'react-router-dom'


const ProtectedRoutes = () => {
  const protect = useMemo(()=>{
  return AllRoutes?.map((ele)=>(
    <Route path={ele?.path} element={ele?.component}/>
    ))
},[])

return <Routes>{protect}</Routes>

}

export default ProtectedRoutes