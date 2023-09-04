import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../pages/NotFound';

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
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default Router