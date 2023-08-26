import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(()=>import('../pages/Home'))


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default Router