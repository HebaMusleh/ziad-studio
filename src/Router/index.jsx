import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'


const Home = lazy(()=>import('../pages/Home'));
const Work = lazy(()=>import('../pages/Work'))


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/work" element={<Work/>}/>
    </Routes>
  )
}

export default Router