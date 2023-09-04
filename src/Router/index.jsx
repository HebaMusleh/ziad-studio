import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'));
const Work = lazy(() => import('../pages/Work'));
const Information = lazy(() => import('../pages/Information'));
const SingleWork = lazy(() => import('../pages/SingleWork'))


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:id" element={<SingleWork />} />
      <Route path="/info" element={<Information />} />
    </Routes>
  )
}

export default Router