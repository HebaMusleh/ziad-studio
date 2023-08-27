import React from 'react'
import Header from '../../components/Header'
import Hero from './Hero'
import Footer from '../../components/Footer'
import Packages from './packages'
import MoreService from './MoreService'

const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Packages/>
        <MoreService />
        <Footer/>
    </div>
  )
}

export default Home